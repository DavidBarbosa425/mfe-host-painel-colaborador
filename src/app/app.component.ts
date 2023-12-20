import { Component, OnInit } from '@angular/core';
import { AuthService } from './core/auth/auth.service';
import { SessaoAppService } from './core/sessao-app/sessao-app.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ProgressService } from './core/services/progress.service';
import { AmbienteEnum, SessaoApp } from './core/sessao-app/sessao.model';
import { Alerta, AlertaService, TipoAlerta } from './core/services/alert.service';
import { AuthForm } from './core/auth/auth.model';
import { AlertComponent } from './shared/template/alert/alert.component';
import { PermissaoService } from './core/services/permissao.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private sessaoService: SessaoAppService,
    public _snackBar: MatSnackBar) {

      
    if (window.addEventListener) {
      window.addEventListener("message", async (listernResult) => {
        try {
          await this.receiveMessageIframe(listernResult);
        } catch (error) {
          console.error("Erro no manipulador de eventos:", error);
        }
      }, false);
    }

    // window.addEventListener("beforeunload", () => {
    //   localStorage.clear();
    // });
    
  }

  

  path: string = ""
  isLogged: boolean = false
  isMensagemRecebida: boolean = false
  data: any = "Aguardando"
  isProgress: boolean = true
  isPermission: boolean = true

  $subsessao: any
  $subprogress: any
  $subpermissao: any
  $subalerta: any
  $subcatch: any

  mensagem_ult_2_segundos: string = ""

  isColaborador: boolean = false
  isGestor:boolean = false
  isExpandir: boolean = false
  sessaoApp : SessaoApp = new SessaoApp()
  
  async ngOnInit(){

    this.isColaborador = true

    this.isLogged = SessaoAppService.hasSessao()

    this.$subsessao = SessaoAppService.sessaoAppChanged.subscribe((isLogged) => {
      this.isLogged = SessaoAppService.hasSessao()
    })

    this.$subprogress = ProgressService.progressChange.subscribe((isProgress) => {
      this.setProgress(isProgress)
    })

    this.$subpermissao = PermissaoService.permissaoChange.subscribe((isPermissao) => {
      this.setPermissao(isPermissao)
    })

    this.sessaoApp = SessaoAppService.getSessao()
    
    if(this.sessaoApp && this.sessaoApp.validarSessao()){
      this.setProgress(false)
    }


    this.$subalerta = AlertaService.alerta.subscribe((alerta: Alerta) => {

      if (this.mensagem_ult_2_segundos != alerta.mensagem)
        this.mensagem_ult_2_segundos = alerta.mensagem
      else
        return

      if (alerta.tipo == TipoAlerta.SUCCESS)
        this.openSuccessSnackBar(alerta.mensagem)
      else if (alerta.tipo == TipoAlerta.WARNING)
        this.openWarningSnackBar(alerta.mensagem)
      else if (alerta.tipo == TipoAlerta.DANGER)
        this.openErrorSnackBar(alerta.mensagem)

      setTimeout(() => {
        this.mensagem_ult_2_segundos = ""
      }, 2000);
    })

    this.$subcatch = AlertaService.catch.subscribe((error) => {
      this.openCatchError(error)
    })
  }

  ngOnDestroy(): void {
    this.$subsessao.unsubscribe()
    this.$subprogress.unsubscribe()
    this.$subpermissao.unsubscribe()
    this.$subalerta.unsubscribe()
    this.$subcatch.unsubscribe()
  }

  showNotPermission(): boolean {

    if (this.isLogged && !this.isPermission)
      return true

    return false
  }

  showRouter(): boolean {

    if (this.isLogged && this.isPermission)
      return true

    return false
  }

  setProgress(progress: boolean = null): void {

    if (progress != null)
      this.isProgress = progress
  }

  setPermissao(isPermissao: boolean = null): void {

    if (isPermissao != null)
      this.isPermission = isPermissao
  }

  //#region Evento

  async receiveMessageIframe(event: any) {

    if (event.data?.type) {       
      parent.postMessage("refresh page", "*");
      return
    }

    if(!event.data?.path || (event.data.path && event.data.path == "informe-rendimentos")){
      return
    }

    this.isMensagemRecebida = true

    this.isLogged = false
    SessaoAppService.removeSessao()

    this.path = event.data.path
    this.data = event.data

    const authForm: AuthForm = new AuthForm({
      username: this.data.usuarioLogado.Email? this.data.usuarioLogado.Email : this.data.usuarioLogado.email,
      password: this.data.usuarioLogado.Senha? this.data.usuarioLogado.Senha : this.data.usuarioLogado.senha,
      Scope: this.data.ambienteSelecionado,
      ambiente : this.data.ambienteSelecionado ? this.data.ambienteSelecionado : AmbienteEnum.CONFIRPDIGITAL
    })

    setTimeout(() => {
      this.authService.authenticate(authForm, this.data.idClienteSelecionado)
      ProgressService.progressChange.emit(false)
    }, 2000);

    this.sessaoApp = SessaoAppService.getSessao()
  }

  public openSuccessSnackBar(error) {
    this._snackBar.openFromComponent(AlertComponent, {
      data: error,
      duration: 2000,
      horizontalPosition: "end",
      verticalPosition: "top",
      panelClass: ['snack-success']
    });
  }

  public openWarningSnackBar(error) {
    this._snackBar.openFromComponent(AlertComponent, {
      data: error,
      duration: 2000,
      horizontalPosition: "center",
      verticalPosition: "top",
      panelClass: ['snack-warning']
    });
  }

  public openErrorSnackBar(error) {
    this._snackBar.openFromComponent(AlertComponent, {
      data: error,
      duration: 2000,
      horizontalPosition: "center",
      verticalPosition: "top",
      panelClass: ['snack-error']
    });
  }

  public openCatchError(error) {

    if (error.status == 400) {
      this.openWarningSnackBar(error.error)
    }
    else {
      this.openErrorSnackBar(error.mensagemUsuario)
    }
  }


  salvarNoLocalStorage(): void {
    const suaVariavel = 'valor a ser armazenado';
    localStorage.setItem('suaChave', suaVariavel);
  }

  expandir(){
    this.isExpandir = !this.isExpandir
  }
}
