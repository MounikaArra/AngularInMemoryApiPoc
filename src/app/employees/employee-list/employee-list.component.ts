import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee.model';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
})
export class EmployeeListComponent implements OnInit {
  employee: Employee = {
    id: 0,
    name: '',
    position: '',
    salary: ''
  };
  edit = true;
  add = false;
  employees: Employee[] = [];

  constructor(private employeeService: EmployeeService) {}

  ngOnInit(): void {
    this.getEmployees();
  }

  private getEmployees() {
    this.employeeService
      .getEmployees()
      .subscribe((employees) => (this.employees = employees));
  }

  addEmployee() {
    const data = {
      name: this.employee.name,
      id: this.employee.id,
      position: this.employee.position,
      salary: this.employee.salary
    };
    this.employeeService.addEmployee(data).subscribe((response) => {
      console.log(response);
      this.getEmployees();
    });
  }

  setEmployeeEdit(employee: Employee) {
    this.employee.name = employee.name;
    this.employee.id = employee.id;
    this.employee.position = employee.position;
    this.employee.salary = employee.salary;
    this.edit = false;
    this.add = true;
  }

  resetValues() {
    this.employee = { id: 0, name: '', position: '', salary: '' };
    this.edit = true;
    this.add = false;
  }

  removeEmployeet(employee: Employee) {
    const id = employee.id;
    console.log(employee);
    this.employeeService
      .deleteEmployee(id)
      .subscribe((employee) => console.log(employee));
    this.getEmployees();
  }

  updateEmployee() {
    this.employeeService
      .editEmployee(this.employee)
      .subscribe((response) => console.log(response));
    this.getEmployees();
    this.resetValues();
  }
}
