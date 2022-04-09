import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class ApiService {
    baseURL = 'https://www.googleapis.com/';

    constructor(private http: HttpClient) {}

    // Generic API function that can be used globally
    generic_get_api(apiEndPointUrl: string): Observable<any> {
        let url = this.baseURL + apiEndPointUrl;
        return this.http.get(url, { observe: 'body', responseType: 'json' });
    }
}
