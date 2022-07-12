import { Injectable, ViewChild } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AngularLogService } from '../../core/services/angular-log.service';

@Injectable()
export class ErrorService {
    private messageSource = new BehaviorSubject<string>('');
    currentMessage = this.messageSource.asObservable();

    constructor(private logger: AngularLogService) { }
    changeMessage(message: string) {
        this.messageSource.next(message);
    }

}
