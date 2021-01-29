
import { Component, OnInit } from "@angular/core";
import { Course } from "./course";


@Component({
    selector: 'app-courses-list',
    templateUrl: './course-list-compoent.html',
    styleUrls: ['./course-list-compoent.css']
})
export class CourseListComponent implements OnInit {
    
    courses: Course[] = [];

    ngOnInit(): void {
        this.courses = [
            {
                id: 1,
                name:'Angular Forms',
                imageUrl: '/assets/images/forms.png',
                price: 99.0,
                code: 'XPS-8796',
                duration: 120,
                rating: 2.6,
                releaseDate: 'Janeiro, 29, 2021'
            },
            {
                id: 2,
                name:'Angular HTTP',
                imageUrl: '/assets/images/http.png',
                price: 45.0,
                code: 'LKL-8796',
                duration: 800,
                rating: 3,
                releaseDate: 'Janeiro, 29, 2021'
            }
        ];
    }
}