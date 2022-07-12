import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from './../material/material.module';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
// import needed PrimeNG modules here
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { PanelModule } from 'primeng/panel';

import { CollaborationRoutingModule } from './collaboration-routing/collaboration-routing.module';
//import { VideoJitsiStartComponent } from './collaboration-video-start/video-jitsi-start.component';
//import { VideoJitsiEnterComponent } from './collaboration-video-enter/video-jitsi-enter.component';
//import { VideoJitsiCallDialogComponent } from './dialog/video-jitsi-call-dialog.component';
//import { ChatComponent } from './collaboration-chat/chat.component'

import { PopupComponent } from "./../utils/popup/popup.component";

import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

@NgModule({
    imports: [
        CommonModule,
        CollaborationRoutingModule,
        ReactiveFormsModule,
        SharedModule,
        MaterialModule,
        MatDialogModule,
        MatInputModule,
        MatFormFieldModule,
        ButtonModule,
        InputTextModule,
        PanelModule,        
        FontAwesomeModule
    ],
    declarations: [
		//PopupComponent,
		//ChatComponent
		//VideoJitsiEnterComponent,
		//VideoJitsiCallDialogComponent
    ]
})
export class CollaborationModule { 
	
	constructor(library: FaIconLibrary) {
		
		library.addIcons(faSearch);

	}
			
}
