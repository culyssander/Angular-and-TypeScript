import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Course } from "./course";
import { CourseService } from "./course.service";

@Component({
    templateUrl: './course-info.component.html'
})
export class CourseInfoComponent implements OnInit{

    course: Course;
    // courseId: number;

    constructor(private activatedRoute: ActivatedRoute, private courseService: CourseService) { }

    ngOnInit(): void {
        // this.courseId = +this.activatedRoute.snapshot.paramMap.get('id');
        this.course = this.courseService.retrieveById(+this.activatedRoute.snapshot.paramMap.get('id'))
    }

    save(course: Course): void {
        this.courseService.save(course);
    }
}