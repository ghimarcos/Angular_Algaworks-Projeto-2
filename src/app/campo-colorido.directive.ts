import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  // Apenas adicionando o seletor appCampoColorido ao elemento da minha escolha, já aplico as mudanças
  selector: '[appCampoColorido]'
})

// Entendendo sobre diretiva
// Elas podem ser aplicadas aos elementos de forma reaproveitável
export class CampoColoridoDirective {
  // tslint:disable-next-line: max-line-length
  // ElementRef serve para se referenciar ao elemento da minha escolha que quero aplicar o Style, e o renderer2 cria uma classe abstrata para se trabalhar com o elemento
  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2
  ) { }
     // HostListner pega o evento 'focus' e o metodo aoGanharFoco pega o elemento e aplica o background Color
    // tslint:disable-next-line: typedef
    @HostListener('focus') aoGanharFoco(){
      this.renderer.setStyle(this.elementRef.nativeElement,
        'background-color', '#fffafa');
    }

    // HostListner pega o evento 'blur' e o metodo aoPerderFoco pega o elemento e aplica o background Color
    // tslint:disable-next-line: typedef
    @HostListener('blur') aoPerderFoco(){
      this.renderer.setStyle(this.elementRef.nativeElement,
        'background-color', 'transparent');
    }
}
