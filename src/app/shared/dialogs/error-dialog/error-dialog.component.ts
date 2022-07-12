import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AngularLogService } from '../../../core/services/angular-log.service';


@Component({
  selector: 'app-error-dialog',
  templateUrl: './error-dialog.component.html',
  styleUrls: ['./error-dialog.component.css']
})
export class ErrorDialogComponent implements OnInit {

  constructor(private logger: AngularLogService,
	public dialogRef: MatDialogRef<ErrorDialogComponent>, 
	@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
	console.log(this.data);
  }

  public closeDialog = () => {
    this.dialogRef.close();
  }
}
