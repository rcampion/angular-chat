import { Component, OnInit, Inject } from '@angular/core';
import { Location } from '@angular/common';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AngularLogService } from '../../../core/services/angular-log.service';


@Component({
	selector: 'app-error-dialog',
	templateUrl: './confirm-message-dialog.component.html',
	styleUrls: ['./confirm-message-dialog.component.css']
})
export class ConfirmMessageDialogComponent implements OnInit {

	constructor(private logger: AngularLogService,
		private location: Location,
		public dialogRef: MatDialogRef<ConfirmMessageDialogComponent>,
		@Inject(MAT_DIALOG_DATA) public data: any) { }

	ngOnInit() {
		console.log(this.data);
	}

	onConfirm(): void {
		// Close the dialog, return true
		this.dialogRef.close(true);
	}

	onDismiss(): void {
		// Close the dialog, return false
		this.dialogRef.close(false);
	}
}
