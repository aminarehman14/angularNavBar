import { StudentData } from "./student.model";
import { Injectable } from "@angular/core";
import {
  Http,
  Response,
  Headers,
  RequestOptions,
  RequestMethod
} from "@angular/http";

import { Observable } from "rxjs";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import { map } from "rxjs/operators";

@Injectable()
export class StudentService {
  selectedStudent: StudentData;
  studentList: StudentData[];
  constructor(private http: Http) {}

  postStudentData(stu: StudentData) {
    var body = JSON.stringify(stu);
    var headerOptions = new Headers({ "Content-Type": "application/json" });
    var requestOptions = new RequestOptions({
      method: RequestMethod.Post,
      headers: headerOptions
    });
    return this.http
      .post("http://localhost:60788/api/Student", body, requestOptions)
      .map(x => x.json());
  }

  putEmployee(id, stu) {
    var body = JSON.stringify(stu);
    var headerOptions = new Headers({ "Content-Type": "application/json" });
    var requestOptions = new RequestOptions({
      method: RequestMethod.Put,
      headers: headerOptions
    });
    return this.http
      .put("http://localhost:60788/api/Student" + id, body, requestOptions)
      .map(res => res.json());
  }

  getStudentList() {
    this.http
      .get("http://localhost:60788/api/student")
      .map((data: Response) => {
        return data.json() as StudentData[];
      })
      .toPromise()
      .then(x => {
        this.studentList = x;
      });
  }

  deleteEmployee(id: number) {
    return this.http
      .delete("http://localhost:60788/api/student" + id)
      .map(res => res.json());
  }
}
