import { Injectable, ViewChild } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { ShowAuthedDirective } from '../../shared/show-authed.directive';

import { AngularLogService } from '../../core/services/angular-log.service';

@Injectable()
export class CommonService {

    @ViewChild(ShowAuthedDirective, {static:false}) showAuthDirective;
    constructor() { }

    refresh() {
        this.showAuthDirective.refresh();
    }
}
