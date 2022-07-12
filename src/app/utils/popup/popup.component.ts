import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-popup',
	templateUrl: './popup.component.html',
	styleUrls: ['./popup.component.scss']
})
export class PopupComponent implements OnInit {

	constructor() { }

	ngOnInit(): void {
	}

	popup(url: string) {

		window.open(url,'popup','width=500,height=1100'); 
		return false;
					
	}

}
