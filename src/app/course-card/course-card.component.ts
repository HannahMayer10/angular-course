import {
  AfterContentInit,
  AfterViewInit,
  Component,
  ContentChild,
  ContentChildren,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  QueryList,
  TemplateRef,
  ViewChild,
} from "@angular/core";
import { COURSES } from "../../db-data";
import { Course } from "../model/course";
import { CourseImageComponent } from "../course-image/course-image.component";

@Component({
  selector: "course-card",
  templateUrl: "./course-card.component.html",
  styleUrls: ["./course-card.component.css"],
})
export class CourseCardComponent
  implements OnInit, AfterViewInit, AfterContentInit {
  @Input()
  course: Course;

  @Input()
  cardIndex: number;

  @Output("courseChanged")
  courseEmitter = new EventEmitter<Course>();

  @ContentChildren(CourseImageComponent, { read: ElementRef })
  images: QueryList<ElementRef>;

  constructor() {}

  ngAfterViewInit() {}

  ngAfterContentInit() {}

  ngOnInit() {}
  onSaveClicked(description: string) {
    this.courseEmitter.emit({ ...this.course, description });
  }
}
