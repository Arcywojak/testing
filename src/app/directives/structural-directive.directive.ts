import { StaticSquareComponent } from './../componenets/static-square/static-square.component';
import { Directive, TemplateRef, ViewContainerRef, Input, OnInit, ComponentFactoryResolver } from '@angular/core';

@Directive({
  selector: '[appStructuralDirective]'
})
export class StructuralDirectiveDirective implements OnInit {

  @Input() appStructuralDirective: number = 0; //this is the delay

  constructor(
    private template: TemplateRef<any>,
    private container: ViewContainerRef,
    private componentFactoryResolver:
      ComponentFactoryResolver
  ) {

  }

   ngOnInit() {
      setTimeout(() => {

        //TWORZENIE DYNAMICZNIE KOMPONENTU
        const componentFactory = this.componentFactoryResolver.
          resolveComponentFactory(StaticSquareComponent);

        this.container.createComponent(componentFactory);
        
      }, this.appStructuralDirective)
     
     setTimeout(() => {
       this.container.detach()
       
       this.container.createEmbeddedView(this.template)

       console.log (this.container.element)

     }, 3*this.appStructuralDirective)
   }

}
