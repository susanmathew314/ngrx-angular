import { createAction, props } from '@ngrx/store';
import { Employee } from '../../models/employee.model';

export const addEmployee = createAction(
    '[Employee] Add Employee',
    props<{ employee: Employee }>()
  );
  
  export const editEmployee = createAction(
    '[Employee] Edit Employee',
    props<{ id: number; employee: Employee }>()
  );
  
  export const deleteEmployee = createAction(
    '[Employee] Delete Employee',
    props<{ id: number }>()
  );
  
  export const setEmployees = createAction(
    '[Employee] Set Employees',
    props<{ employees: Employee[] }>()
  );