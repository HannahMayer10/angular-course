import { Component, OnInit, Input, EventEmitter, Output } from "@angular/core";
import { Course } from "../model/course";

@Component({
  selector: "course-card",
  templateUrl: "./course-card.component.html",
  styleUrls: ["./course-card.component.css"],
})
export class CourseCardComponent implements OnInit {
  @Input() course: Course;
  @Input() cardIndex: number;

  //has to be the name of the parent event or define in the @output
  @Output() courseSelected = new EventEmitter<Course>();

  constructor() {}

  ngOnInit(): void {}

  onCourseViewed(course: Course) {
    console.log("course card");
    this.courseSelected.emit(course);
  }
}
