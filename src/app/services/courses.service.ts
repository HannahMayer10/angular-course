import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Course } from "../model/course";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  constructor(private http: HttpClient) {}
  url = "/api/courses";

  getAllCourses(): Observable<Course[]> {
    // let params = new HttpParams().set("page", "1").set("pageSize", "1");

    return this.http.get<Course[]>(this.url);
  }

  saveCourse(course: Course) {
    const headers = new HttpHeaders().set("X-Auth", "userId");

    return this.http.put(this.url + `/${course.id}`, course, {
      headers: headers,
    });
  }
}
