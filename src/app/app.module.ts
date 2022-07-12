import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, RouterStateSnapshot, ActivatedRouteSnapshot, Router, RouteReuseStrategy } from '@angular/router';
import { Location } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { MaterialModule } from './material/material.module';

// import needed PrimeNG modules here
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { PanelModule } from 'primeng/panel';

import { CoreModule } from './core/core.module';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { CommonModule } from '@angular/common';

import { CommonService } from './core/services/common.service';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './routing/app-routing.module';

//import { AppLayoutComponent } from './layout/layout.component';
//import { AboutComponent } from './about/about.component';
//import { RegistrationComponent } from './registration/registration.component';
//import { RegistrationService } from './core/services/registration.service';
//import { ContactContainerComponent } from './contact/contact-container/contact-container.component';
//import { ContactComponent } from './contact/contact.component';
//import { EmailComponent } from './email/email.component';
//import { ErrorComponent } from './error/error.component';
//import { ErrorService } from './core/services/error.service';

import { ApiService } from './core';
import { ApiSecureService } from './core';
import { DataSharingService } from './core/services/datasharing.service';
import { UsersService } from './core/services/users.service';
import { AccountEventsService } from './core/services/account.events.service';

import { SharedModule } from './shared/shared.module';

//import { AlertModule } from './alert';
//import { AlertService } from './alert';

import { AngularLogService } from './core/services/angular-log.service';
import { AngularLogPublishersService } from './core/services/angular-log-publishers.service';

//import { PopupComponent } from "./utils/popup/popup.component";
//import { SizeDetectorComponent } from './utils/size-detector/size-detector.component';
import { ResizeService } from './core/services/resize.service';

//import { MainHeaderComponent } from './navigation/main-header/main-header.component';
//import { MainMenuComponent } from './navigation/main-menu/main-menu.component';
//import { MainFooterComponent } from './navigation/main-footer/main-footer.component';
//import { ClockComponent } from './clock/clock.component';
//import { AppHeaderComponent } from './navigation/app-page/app-header/app-header.component';
//import { AppPageComponent } from './navigation/app-page/page.component';

//import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';

//import { PrivacyComponent } from './privacy/privacy.component';

import { SlideshowModule } from 'ng-simple-slideshow';
//import { SlideshowComponent } from './slideshow/slideshow.component';

import { GoogleMapsModule } from '@angular/google-maps';
//import { MapComponent } from './map/map.component';

import { RecaptchaModule } from 'ng-recaptcha';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons/faSearch';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { TabsComponent } from './collaboration/tabs/tabs.component';
import { ChatComponent } from './collaboration/collaboration-chat/chat.component';
import { PopupComponent } from './utils/popup/popup.component';

@NgModule({
	declarations: [
		AppComponent,
		TabsComponent,
		ChatComponent,
		PopupComponent
		//AppLayoutComponent,
		//MainHeaderComponent,
		//MainFooterComponent,
    	//MainMenuComponent,		
		//AboutComponent,
		//ContactComponent,		    	
		//ErrorComponent,
		//PrivacyComponent,
		//AppHeaderComponent,
		//AppPageComponent,		
		//SidenavListComponent,		
		//SlideshowComponent,
		//RegistrationComponent,
		//EmailComponent,		
		//PopupComponent,
		//SizeDetectorComponent,
		//ClockComponent,
//		MapComponent
		//ContactContainerComponent						
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		CoreModule,
		CommonModule,
		RouterModule,
		AppRoutingModule,
		MaterialModule,
		ButtonModule,
		InputTextModule,
		PanelModule,
		//AlertModule,
		HttpClientModule,
		FormsModule,
		ReactiveFormsModule,
		SharedModule,
		SlideshowModule,
//		MapComponent,
//		EmailComponent,		
		GoogleMapsModule,
		RecaptchaModule,
		CKEditorModule,
		FontAwesomeModule,				
	],
	exports: [
		RecaptchaModule, MaterialModule
	],
	providers: [
		{
			provide: 'externalUrlRedirectResolver',
			useValue: (route: ActivatedRouteSnapshot, state: RouterStateSnapshot, location: Location) => {
				//window.location.href = (route.data as any).externalUrl;
				let url = (route.data as any).externalUrl;
				window.open(url, '_blank');
				let currentUrl = window.location.href;
				location.go(currentUrl);
				//window.location.go(currentUrl);
			}
		},		
		ResizeService,
		//AlertService,
		AngularLogService,
		AngularLogPublishersService,
		DataSharingService,
		//ErrorService,
		UsersService,
		AccountEventsService,
		//RegistrationService,
				
	],
	bootstrap: [AppComponent]
})
export class AppModule { 
	
	myrouter: Router;

	constructor(private library: FaIconLibrary, private router: Router) {

		//library.add(faSearch);

		library.addIcons(faSearch, faCaretDown);

		this.myrouter = router;

	}	
	
}
