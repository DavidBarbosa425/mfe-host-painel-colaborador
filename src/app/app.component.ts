import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
<<<<<<< Updated upstream
export class AppComponent {
  title = 'mfe-host';
=======
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
>>>>>>> Stashed changes
}
