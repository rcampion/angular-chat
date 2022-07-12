import { Injectable } from '@angular/core';
import { Cookie } from 'ng2-cookies';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { ApiSecureService } from './api-secure.service';
import { Observable, of, Subject } from 'rxjs';
import { map, tap, catchError } from 'rxjs/operators';
import { environment } from './../../../environments/environment';
import { PaginationPropertySort } from '../interface/pagination';

import { BehaviorSubject } from 'rxjs';
import { AngularLogService } from '../../core/services/angular-log.service';

@Injectable({
	providedIn: 'root'
})
export class SystemService {

	constructor(
		private http: HttpClient,
		private apiSecureService: ApiSecureService
	) {
	}

	get(path): Observable<any> {
		return this.apiSecureService.get(path)
			.pipe(
				map(res => res
				)
			);
	}
	
    public getData = (route: string) => {
        return this.http.get(this.createCompleteRoute(route, environment.api_url), this.generateHeaders());
    }
	
	private createCompleteRoute = (route: string, envAddress: string) => {
		return `${envAddress}/${route}`;
	}
	
    private generateHeaders() {
        return {

            headers: new HttpHeaders(
                {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                    'Authorization': 'Bearer ' + Cookie.get('access_token')
                })
        };
    }
}
