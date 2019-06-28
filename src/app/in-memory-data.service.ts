import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Employee } from './employee';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    const employees = [
      { id: 101, name: 'Sheila Crawford'},
      { id: 102, name: 'Erik Wells'},
      { id: 103, name: 'Terrence Floyd'},
      { id: 104, name: 'Judith Gibbs'},
      { id: 105, name: 'Marcos Weaver'},
      { id: 106, name: 'Taylor Coleman'},
      { id: 107, name: 'Floyd	Sharp'},
      { id: 108, name: 'Terence	Chambers'},
      { id: 109, name: 'Neal Cross'},
      { id: 110, name: 'Felix	Klein'}
    ];
    return {employees};
  }

  // Overrides the genId method to ensure that a employee always has an id.
  // If the employees array is empty,
  // the method below returns the initial number (11).
  // if the employees array is not empty, the method below returns the highest
  // employee id + 1.

  genId(employees: Employee[]): number {
    return employees.length > 0 ? Math.max(...employees.map(employee => employee.id)) + 1 : 11;
  }
  constructor() { }
}
