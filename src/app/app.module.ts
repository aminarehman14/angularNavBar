import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from "./app-routing.module";
import { HttpModule } from "@angular/http";
import { Component } from "@angular/core";
import { AppComponent } from "./app.component";
import { MaterialModule } from "./material/material.module";
import { LayoutComponent } from "./layout/layout.component";
import { FlexLayoutModule } from "@angular/flex-layout";
import { HomeComponent } from "./home/home.component";
import { RoutingModule } from "./routing/routing.module";
import { HeaderComponent } from "./navigation/header/header.component";
import { SidenavListComponent } from "./navigation/sidenav-list/sidenav-list.component";
import { EmployeeList } from "./employee/employeeList.component";
import { EmployeeCount } from "./employee/employeeCount.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { StudentsComponent } from "./student/students.component";
import { StudentListComponent } from "./student/student-list/student-list.component";
import { StudentComponent } from './students/student/student.component';
@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HomeComponent,
    HeaderComponent,
    SidenavListComponent,
    EmployeeList,
    EmployeeCount,
    StudentsComponent,
    StudentListComponent,
    StudentComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    FlexLayoutModule,
    RoutingModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
