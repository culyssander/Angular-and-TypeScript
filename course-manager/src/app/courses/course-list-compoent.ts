
import { Component, OnInit } from "@angular/core";
import { from } from "rxjs";
import { Course } from "./course";
import { CourseService } from "./course.service";
import { FormsModule } from '@angular/forms';


@Component({
    // selector: 'app-courses-list',
    templateUrl: './course-list-compoent.html',
    styleUrls: ['./course-list-compoent.css']
})
export class CourseListComponent implements OnInit {

    filteredCourses: Course[] = [];
    
    _courses: Course[] = [];

    _filterBy: string;

    constructor(private courseService: CourseService) { }

    ngOnInit(): void {

        this.retrieveAll();

        // this._courses = this.courseService.retrieveAll();
        // this.filteredCourses = this._courses;

        // this.courses = [
        //     {
        //         id: 1,
        //         name:'Angular Forms',
        //         imageUrl: '/assets/images/forms.png',
        //         price: 99.0,
        //         code: 'XPS-8796',
        //         duration: 120,
        //         rating: 2.6,
        //         releaseDate: 'Janeiro, 29, 2021',
        //         description: ''
        //     },
        //     {
        //         id: 2,
        //         name:'Angular HTTP',
        //         imageUrl: '/assets/images/http.png',
        //         price: 45.0,
        //         code: 'LKL-8796',
        //         duration: 800,
        //         rating: 3,
        //         releaseDate: 'Janeiro, 29, 2021', 
        //         description: ''
        //     }
        // ];
    }

    retrieveAll(): void {
        this.courseService.retrieveAll().subscribe({
            next: courses => {
                this._courses = courses;
                this.filteredCourses = this._courses;
            },
            error: err => console.log('Error', err)
        });
    }


    deleteById(courseId: number):void {
        this.courseService.deleteById(courseId).subscribe({
            next: () => {
                console.log("Deleted with success");
                this.retrieveAll();
            },
            error: err => console.log('Error', err)            
        });
    }

    set filter(value: string) {
        this._filterBy = value;

        this.filteredCourses = this._courses.filter((course: Course) => course.name.toLocaleLowerCase().indexOf(this._filterBy.toLocaleLowerCase()) > -1);
    }

    get filter() {
        return this._filterBy;
    }
}