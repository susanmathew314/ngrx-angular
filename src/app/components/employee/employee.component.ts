
// child.component.ts
import { Component, Input, OnInit } from '@angular/core';
import { Employee } from '../../models/employee.model';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit{
  @Input() employees: Employee[]=[];

constructore(){}
ngOnInit(): void {
console.log(this.employees)
}


}