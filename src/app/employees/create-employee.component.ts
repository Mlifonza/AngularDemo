import { Component, OnInit } from '@angular/core';
import { NgForm } from '../../../node_modules/@angular/forms';
import { Department } from '../models/department.model';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';

@Component({
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  //previewPhoto: false;
  dateOfBirth: Date = new Date(2018, 0, 30);
  datePickerConfig: Partial<BsDatepickerConfig>;
  departments: Department[] = [
    { id: 1, name: 'Help Desk' },
    { id: 2, name: 'HR' },
    { id: 3, name: 'IT' },
    { id: 4, name: 'Payroll' }
  ];
  constructor() {
    this.datePickerConfig = Object.assign({},
    { 
      containerClass: 'theme-dark-blue',
      showWeekNumbers: false,
      minDate: new Date(2018, 0, 1),
      maxDate: new Date(2018, 12, 31),
      dateInputFormat: 'DD/MM/YYYY'
    });
  }

  ngOnInit() {
  }

  saveEmployee(empForm: NgForm): void{
    console.log(empForm.value);
  }

}
