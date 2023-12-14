
import { Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'titulo-form',
  templateUrl: './titulo-form.component.html',
  styleUrls: [
    './titulo-form.component.css'
  ]
})
export class TituloFormComponent implements OnInit {
  
  @Input() titulo: string = ""

  load_complete: boolean = false

  constructor() {}

  ngOnInit(): void {

    this.load_complete = true
  }
}
