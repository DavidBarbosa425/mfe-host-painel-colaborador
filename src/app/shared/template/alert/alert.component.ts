import { Component, Inject, OnInit } from '@angular/core';
import { MatSnackBar, MatSnackBarRef, MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';

@Component({
  templateUrl: 'alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {
  
  datareceb: any = {}
  data: any[] = []
  snackBarRef: MatSnackBarRef<any> = null

  constructor(
    _snackBar: MatSnackBar,
    _snackBarRef: MatSnackBarRef<any>,
    @Inject(MAT_SNACK_BAR_DATA) public _data: any,
  ) {
    this.datareceb = _data
    this.snackBarRef = _snackBarRef
  }

  ngOnInit(): void {

    if (!Array.isArray(this.datareceb)){

      //se não for um array, transformo para não mudar nada na lógica do component em exibir uma lista de erros

      const msg = this.datareceb

      this.data.push(msg)
    }
    else
      this.data = this.datareceb
  }

}
