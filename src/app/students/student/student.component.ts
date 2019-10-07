import { Component, OnInit } from "@angular/core";
import { StudentService } from "../shared/student.service";

@Component({
  selector: "app-student",
  templateUrl: "./student.component.html",
  styleUrls: ["./student.component.css"]
})
export class StudentComponent implements OnInit {
  constructor(private StudentService: StudentService) {}

  ngOnInit() {}
}
