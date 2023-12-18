import { Component, OnInit } from "@angular/core";
import { BaseComponent } from "../../../shared/base/components/base-page/base.component";

@Component({
  selector: 'painel-colaborador',
  templateUrl: './painel-colaborador.component.html',
  styleUrls: ['./painel-colaborador.component.css'],

})
export class PainelColaboradorComponent extends BaseComponent implements OnInit {

  
  ngOnInit(): void {
    this.sessaoApp.usuarioLogado.Nome
    
  }

}