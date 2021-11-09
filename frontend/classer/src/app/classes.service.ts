import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ClassesService {

    constructor(private http: HttpClient) { }

    getClasses(): Observable<{ name: string; duration: number; }[]> {
        return this.http.get<{name: string, duration: number}[]>('/assets/classes.json')
    }
}
