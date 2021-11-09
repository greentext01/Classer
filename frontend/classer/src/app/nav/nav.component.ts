import { Component, OnInit } from '@angular/core';
import { MaterialModule } from '../material/material.module';
import { ClassesService } from '../classes.service';

@Component({
    selector: 'app-nav',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
    constructor(private classesServ: ClassesService) { }

    classes = this.classesServ.getClasses();

    ngOnInit(): void {
    }

}
