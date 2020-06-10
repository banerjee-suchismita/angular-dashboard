import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Links } from './links-data';

@Injectable()
export class LinksService {

    constructor(private http: HttpClient ){}

    fetchData() : Observable <Links[]>{
        return this.http.get<Links[]>('https://raw.githubusercontent.com/banerjee-suchismita/angular-dashboard/master/data.json');
    }

}
