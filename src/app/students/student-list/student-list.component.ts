import { Component, OnInit } from "@angular/core";
import { StudentService } from "../shared/student.service";
import { StudentData } from "../shared/student.model";
@Component({
  selector: "app-student-list",
  templateUrl: "./student-list.component.html",
  styleUrls: ["./student-list.component.css"]
})
export class StudentListComponent implements OnInit {
  constructor(private studentService: StudentService) {}

  ngOnInit() {
    this.studentService.getStudentList();
  }
}
