
import { Component, OnInit } from "@angular/core";
import { Course } from "./course";


@Component({
    selector: 'app-courses-list',
    templateUrl: './course-list-compoent.html'
})
export class CourseListComponent implements OnInit {
    
    courses: Course[] = [];

    ngOnInit(): void {
        this.courses = [
            {
                id: 1,
                name:'Angular Forms',
                imageUrl: '',
                price: 99.0,
                code: 'XPS-8796',
                duration: 120,
                rating: 4.0,
                releaseDate: 'Janeiro, 29, 2021'
            },
            {
                id: 2,
                name:'Angular HTTP',
                imageUrl: '',
                price: 45.0,
                code: 'LKL-8796',
                duration: 800,
                rating: 5,
                releaseDate: 'Janeiro, 29, 2021'
            }
        ];
    }
}