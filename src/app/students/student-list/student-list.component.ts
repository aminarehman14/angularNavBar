import { Component, OnInit } from "@angular/core";
import { StudentService } from "../shared/student.service";
import { StudentData } from "../shared/student.model";
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: "app-student-list",
  templateUrl: "./student-list.component.html",
  styleUrls: ["./student-list.component.css"]
})
export class StudentListComponent implements OnInit {
  constructor(private studentService: StudentService, private toastr: ToastrService) { }

  ngOnInit() {
    this.studentService.getStudentList();
  }
  showForEdit(stu: StudentData) {
    this.studentService.selectedStudent = Object.assign({}, stu);;
  }
  onDelete(id: number) {
    if (confirm('Are you sure you want to delete this record?') == true) {
      this.studentService.deleteStudent(id).subscribe(x => {
        this.studentService.getStudentList();
        this.toastr.warning("Record Deleted Successfully", "Student Register");
      })
    }
  }
}
