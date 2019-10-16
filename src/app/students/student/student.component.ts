import { StudentService } from "./../shared/student.service";
import { NgForm } from "@angular/forms";
import { Component, OnInit } from "@angular/core";
import { ToastrService } from "ngx-toastr";
@Component({
  selector: "app-student",
  templateUrl: "./student.component.html",
  styleUrls: ["./student.component.css"]
})
export class StudentComponent implements OnInit {
  constructor(
    private studentService: StudentService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.resetForm();
  }
  resetForm(form?: NgForm) {
    if (form != null) form.reset();
    this.studentService.selectedStudent = {
      studentId: null,
      gender: "",
      dateOfBirth: "",
      firstName: "",
      lastName: "",
      middleName: "",
      otherStudentDetails: ""
    }
  }
  onSubmit(form: NgForm) {
    if (form.value.studentId == null) {
      this.studentService.postStudentData(form.value).subscribe(data => {
        this.resetForm(form);
        this.studentService.getStudentList();
        this.toastr.success(
          "New Student Record Added Successfully",
          "Student Register"
        );
      });
    }
    else {
      this.studentService.putStudentData(form.value.studentId, form.value)
        .subscribe(data => {
          this.resetForm(form);
          this.studentService.getStudentList();
          this.toastr.info("Record Updated Successfully", "Student Register");
        });
    }
  }
}
