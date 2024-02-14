import { createReducer, on } from '@ngrx/store';
import { Employee } from '../../models/employee.model';
import * as EmployeeActions from './employee.action';

export interface EmployeeState {
  employees: Employee[];
}

export const initialState: EmployeeState = {
  employees: [],
};

export const employeeReducer = createReducer(
  initialState,
  on(EmployeeActions.setEmployees, (state, { employees }) => {
    console.log("Setting employees in reducer:", employees);
    return { ...state, employees: employees };
  }),
  on(EmployeeActions.addEmployee, (state, { employee }) => ({
    ...state,
    employees: [...state.employees, employee],
  })),
  on(EmployeeActions.editEmployee, (state, { id, employee }) => ({
    ...state,
    employees: state.employees.map(emp => (emp.id === id ? { ...employee } : emp)),
  })),
  on(EmployeeActions.deleteEmployee, (state, { id }) => ({
    ...state,
    employees: state.employees.filter(emp => emp.id !== id),
  }))
);