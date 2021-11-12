import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appChangeBg]',
  host: {
    '(click)':"hello()" 
  }
})
export class ChangeBgDirective {

  el: ElementRef;
  color = "";

  @Input() set appChangeBg(color: string) {
    this.color = color;
    this.el.nativeElement.style.backgroundColor = color;
  }

  @Input() set par2(e:any) {
    console.log(e)
  }

  constructor(el: ElementRef) {
    this.el = el;
   }

   @HostListener('click', ['$event']) mouseMove($event: MouseEvent) {
     console.log($event)
   }
  
  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }

  public hello() {
    console.log("hello fn")
  }

}
