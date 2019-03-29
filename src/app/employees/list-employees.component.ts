import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee.model';
import { ApiService } from '../services/api.service';

@Component({
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {
  employees: Employee[] = [
    {
      id: 1,
      name: 'Mark',
      gender: 'Male',
      contactPreference: 'Email',
      email: 'mark@pragimtech.com',
      dateOfBirth: new Date('10/25/1998'),
      department: 'IT',
      isActive: true,
      photoPath: 'assets/images/mark.png'
    },
    {
      id: 2,
      name: 'Mary',
      gender: 'Female',
      contactPreference: 'Phone',
      phoneNumber: 2345678640,
      dateOfBirth: new Date('11/25/1998'),
      department: 'HR',
      isActive: true,
      photoPath: 'assets/images/mary.png'
    },
    {
      id: 3,
      name: 'John',
      gender: 'Male',
      contactPreference: 'Phone',
      phoneNumber: 2345678640,
      dateOfBirth: new Date('10/25/1998'),
      department: 'IT',
      isActive: false,
      photoPath: 'assets/images/john.png'
    }
  ]

  constructor(
    private api: ApiService
  ) { }

  async ngOnInit() {
    debugger;
    var res = await this.api.getEmployees();
  }

}
