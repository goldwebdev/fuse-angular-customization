import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { fuseAnimations } from '@fuse/animations';

@Component({
    selector: 'app-suggest-dashboard',
    templateUrl: './suggest-dashboard.component.html',
    styleUrls: ['./suggest-dashboard.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations: fuseAnimations
})
export class SuggestDashboardComponent implements OnInit {

    categories: any = [
        {
            id: 1,
            name: 'Category 1',
            image: '/assets/images/client/icon1.png',
            description: 'Also I am very passionate to build from front-end to back-end and developed wide range of websites from simple to dynamic.',
            stock: 70
        },
        {
            id: 2,
            name: 'Category 2',
            image: '/assets/images/client/icon2.png',
            description: 'As an experienced and prudent developer, I will complete the task perfectly, in the project execution period, I will hear from all your requirements carefully and will do my best to perform it.',
            stock: 48
        },
        {
            id: 3,
            name: 'Category 3',
            image: '/assets/images/client/icon3.png',
            description: 'As an excellent developer who has been loved by many clients for 10 + years, I have accomplished a lot of tasks from small-scale fixing bugs to large-scale projects.',
            stock: 33
        }
    ];

    constructor() { }

    ngOnInit(): void {
    }

}
