import { Component, OnInit} from "@angular/core";

@Component({
  selector: 'painel-colaborador-resumo',
  templateUrl: './painel-colaborador-resumo.component.html',
  styleUrls: ['./painel-colaborador-resumo.component.css']
})
export class PainelColaboradorResumoComponent implements OnInit {
  
  async ngOnInit(): Promise<void> {
    

  }

  getFoto(): string{

    return 'https://static.stealthelook.com.br/wp-content/uploads/2022/07/make-maquiagem-de-passaporte-tendencia-tiktok-beleza-steal-the-look-georgia-20220705025230.jpg'
  }

  getFotoSuperior(): string{

    return 'https://static.stealthelook.com.br/wp-content/uploads/2022/07/make-maquiagem-de-passaporte-tendencia-tiktok-beleza-steal-the-look-georgia-20220705025230.jpg'
  }

}