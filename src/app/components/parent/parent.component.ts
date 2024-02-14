import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, BehaviorSubject } from 'rxjs';
import { Employee } from '../../models/employee.model';
import * as EmployeeActions from '../../store/employee/employee.action';
import { getEmployees } from '../../store/employee/employee.state';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
})
export class ParentComponent implements OnInit {
  employees$ = new BehaviorSubject<Employee[]>([]); // Use BehaviorSubject with initial empty array
  newEmployeeName: string = ''; // Declare newEmployeeName property

  constructor(
    private store: Store,
    private employeeService: EmployeeService
  ) {}

  ngOnInit(): void {
    this.employeeService.getEmployees().subscribe(employees => {
      console.log("employees");
      console.log(employees);
      this.store.dispatch(EmployeeActions.setEmployees({ employees }));
    });

    this.store.select(getEmployees).subscribe(employees => {
      if (employees) {
        this.employees$.next(employees); // Update the BehaviorSubject with the latest employees array
      }
    });
  }

  addEmployee(employee: Employee): void {
    this.store.dispatch(EmployeeActions.addEmployee({ employee }));
  }

  editEmployee(id: number, employee: Employee): void {
    this.store.dispatch(EmployeeActions.editEmployee({ id, employee }));
  }

  deleteEmployee(id: number): void {
    this.store.dispatch(EmployeeActions.deleteEmployee({ id }));
  }
}
