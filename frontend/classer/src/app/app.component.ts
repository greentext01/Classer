import { ClassesService } from './classes.service';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    classes = this.classesServ.getClasses();
    @ViewChild('drawer') toolbar!: ElementRef<MatDrawer>;

    constructor(private classesServ: ClassesService) {}

    onMenuClicked() {
        this.toolbar.nativeElement.toggle()
    }
}
