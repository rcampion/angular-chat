import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { SuccessDialogComponent } from './dialogs/success-dialog/success-dialog.component';
import { ErrorDialogComponent } from './dialogs/error-dialog/error-dialog.component';
import { MessageDialogComponent } from './dialogs/message-dialog/message-dialog.component';
import { ConfirmMessageDialogComponent } from './dialogs/confirm-message-dialog/confirm-message-dialog.component';

import { ListErrorsComponent } from './list-errors.component';
import { ShowAuthedDirective } from './show-authed.directive';

@NgModule({
    imports: [
        CommonModule,
        MaterialModule,
        FlexLayoutModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        RouterModule
    ],
    exports: [
        MaterialModule,
        FlexLayoutModule,
        SuccessDialogComponent,
        ErrorDialogComponent,
        MessageDialogComponent,
        ConfirmMessageDialogComponent,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        ListErrorsComponent,
        RouterModule,
        ShowAuthedDirective
    ],
    declarations: [
        SuccessDialogComponent,
        ErrorDialogComponent,
        MessageDialogComponent,
        ConfirmMessageDialogComponent,
        ListErrorsComponent,
        ShowAuthedDirective
    ]
})
export class SharedModule { }
