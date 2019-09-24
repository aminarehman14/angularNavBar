import { Component, OnInit } from "@angular/core";
import { IEmployee } from "./employee";
import { EmployeeService } from "./employee.service";

@Component({
  selector: "list-employee",
  templateUrl: "./employeeList.component.html",
  styleUrls: ["./employeeList.component.css"],
  providers: [EmployeeService]
})
export class EmployeeList implements OnInit {
  employees: IEmployee[];

  selectedEmployeeCountRadioButton: string = "All";

  constructor(private _employeeService: EmployeeService) {}
  ngOnInit() {
    this._employeeService
      .getEmployees()
      .subscribe(employeeData => (this.employees = employeeData));
  }

  onEmployeeCountRadioButtonChange(selectedRadioButtonValue: string): void {
    this.selectedEmployeeCountRadioButton = selectedRadioButtonValue;
  }

  getTotalEmployeesCount(): number {
    console.log(this.employees.length);
    return this.employees.length;
  }
  getTotalMaleEmployeesCount(): number {
    return this.employees.filter(e => e.gender === "Male").length;
  }
  getTotalFemaleEmployeesCount(): number {
    return this.employees.filter(e => e.gender === "Female").length;
  }
}
