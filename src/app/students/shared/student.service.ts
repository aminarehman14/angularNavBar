import { Student } from "./student.model";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class StudentService {
  selectedStudent: Student;
  constructor() {}
}
