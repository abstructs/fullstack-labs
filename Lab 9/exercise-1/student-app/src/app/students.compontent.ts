import { Component } from '@angular/core';

@Component({
    selector: 'students',
    template: '<h2>{{ getTitle() }}</h2>'
})
export class StudentsCompontent {
    title = `My List Of Students - ${this.getCurrentDate()}`;

    getTitle() {
        return this.title;
    }

    getCurrentDate() {
        const today = new Date();
        const year = today.getFullYear();
        const month = today.getMonth();
        const day = today.getDate();

        return `${year} - ${month + 1} - ${day}`;
    }
}