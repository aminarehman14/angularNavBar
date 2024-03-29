import { Component, OnInit } from "@angular/core";
import { StudentService } from "./shared/student.service";

@Component({
  selector: "app-students",
  templateUrl: "./students.component.html",
  styleUrls: ["./students.component.css"],
  providers: [StudentService]
})
export class StudentsComponent implements OnInit {
  constructor(private studentService: StudentService) {}

  ngOnInit() {}
}
