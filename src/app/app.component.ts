import { HttpClient } from "@angular/common/http";
import { Component, InjectionToken, OnInit, Inject } from "@angular/core";
import { Observable } from "rxjs";
import { Course } from "./model/course";
import { CoursesService } from "./services/courses.service";
import { CONFIG_TOKEN, APP_CONFIG, AppConfig } from "./config";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],

})
export class AppComponent implements OnInit {
  courses$: Observable<Course[]>;

  constructor(
    private coursesService: CoursesService,
    @Inject(CONFIG_TOKEN) private config: AppConfig
  ) {
    console.log(config);
  }

  ngOnInit() {
    this.courses$ = this.coursesService.getAllCourses();
  }

  save(course: Course) {
    this.coursesService.saveCourse(course).subscribe(console.log);
    this.courses$ = this.coursesService.getAllCourses();
  }
}
