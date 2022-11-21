import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  message:any
  constructor(@Inject(MAT_DIALOG_DATA) public data:any, private dialogRef: MatDialog) { 
    this.message = data.Error
  }

  ngOnInit(): void {
    
  }

  closeDialog(modal: any) {
    this.dialogRef.closeAll()
  }
}
