import { ClassesService } from './../classes.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-content',
    templateUrl: './content.component.html',
    styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
    constructor(private classesServ: ClassesService) { }

    classes = this.classesServ.getClasses()

    ngOnInit(): void {
    }

}
