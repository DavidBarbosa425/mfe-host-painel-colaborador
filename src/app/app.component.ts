import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements OnInit {

  isColaborador: boolean = false
  isGestor:boolean = false
  isExpandir: boolean = false

  ngOnInit(): void {
    this.isColaborador = true
  }

  expandir(){
    this.isExpandir = !this.isExpandir
  }
}
