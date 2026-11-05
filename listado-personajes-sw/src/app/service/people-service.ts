import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { PeopleListResponse } from '../interface/people';
import { Observable } from 'rxjs';

@Service()
export class PeopleService {
    http = inject(HttpClient);

    getAll(): Observable<PeopleListResponse> {
        return this.http.get<PeopleListResponse>('https://swapi.dev/api/people/');
    }

    getId(id: number): Observable<PeopleListResponse> {
        return this.http.get<PeopleListResponse>(`https://swapi.dev/api/people/${id}`)
    }
}
