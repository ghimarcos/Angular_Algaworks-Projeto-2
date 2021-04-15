import { Directive,HostBinding,HostListener} from '@angular/core';

@Directive({
  // Apenas adicionando o seletor appCampoColorido ao elemento da minha escolha, já aplico as mudanças
  selector: '[appCampoColorido]'
})


export class CampoColoridoDirective {

    @HostBinding('style.backgroundColor') corDeFundo: string | undefined;

    // tslint:disable-next-line: typedef
    @HostListener('focus') aoGanharFoco(){
      this.corDeFundo = '#fffafa';
    }


    // tslint:disable-next-line: typedef
    @HostListener('blur') aoPerderFoco(){
      this.corDeFundo = 'transparent';
    }
}
