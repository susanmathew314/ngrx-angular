import { createFeatureSelector, createSelector } from '@ngrx/store';
import { EmployeeState } from './employee.reducer';


const getEmployeeFeatureState = createFeatureSelector<EmployeeState>('employees');

export const getEmployees = createSelector(
  getEmployeeFeatureState,
  (state: EmployeeState) => state ? state.employees : [] 
);