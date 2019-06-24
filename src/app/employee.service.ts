import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Employee } from './employee';
import { EMPLOYEES } from './mock-employees';
import { MessagesService } from './messages.service';

@Injectable({
  providedIn: 'root'
})

export class EmployeeService {
  
  constructor(private messagesService: MessagesService) { }

  getEmployee(id: number): Observable<Employee> {
    this.messagesService.add(`HeroService: fetched employee id=${id}`);
    return of(EMPLOYEES.find(employee => employee.id === id));
  }

  getEmployees(): Observable<Employee[]> {
    this.messagesService.add('EmployeeService: Fetched Employees');
    return of(EMPLOYEES)
  }
  
}