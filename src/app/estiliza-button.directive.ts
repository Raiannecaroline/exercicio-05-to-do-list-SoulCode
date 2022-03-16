import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appEstilizaButton]'
})
export class EstilizaButtonDirective {

  constructor(private estiliza: ElementRef, private estiliza2: Renderer2) { 
    this.estiliza2.setStyle(this.estiliza.nativeElement, 'background', 'blue')
  }

}
