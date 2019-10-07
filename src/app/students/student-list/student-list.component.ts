import { Component, OnInit } from "@angular/core";
import { StudentService } from "../shared/student.service";
@Component({
  selector: "app-student-list",
  templateUrl: "./student-list.component.html",
  styleUrls: ["./student-list.component.css"]
})
export class StudentListComponent implements OnInit {
  constructor(private StudentService: StudentService) {}

  ngOnInit() {}
}
