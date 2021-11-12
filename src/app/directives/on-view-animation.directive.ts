import { animate, AnimationBuilder, AnimationMetadata, style, AnimationPlayer } from '@angular/animations';
import { Directive, ElementRef, OnInit, Input } from '@angular/core';

@Directive({
  selector: '[appOnViewAnimation]'
})
export class OnViewAnimationDirective implements OnInit {

  @Input() delay = 0;
  @Input() duration = 1000;
  @Input() translateX = "-75px";
  @Input() translateY = "-50px";
  @Input() threshold = 0.5;
  @Input() animationTimingFunction = 'ease-in-out';

  //maybe pass the whole animation?
  //@Input() animation

  el: ElementRef;

  constructor(el: ElementRef, private builder: AnimationBuilder) { 
    this.el = el;
    this.el.nativeElement.style.opacity = 0;
  }

  ngOnInit() {
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {

        if(entry.isIntersecting) {

          this.playAnimation();
          observer.unobserve(this.el.nativeElement);

        }
      })
    }, this.getOptions());

    observer.observe(this.el.nativeElement);
  }

  playAnimation() {
    const animation = this.getAnimation();
    const factory = this.builder.build(animation);
    const player: AnimationPlayer = factory.create(this.el.nativeElement);
    player.play();
  }

  getAnimation(): AnimationMetadata[] {
    return [
      style({
        opacity: 0,
        transform: `translate(${this.translateX}, ${this.translateY})`
      }),
      animate(
        `${this.duration}ms ${this.delay}ms ${this.animationTimingFunction}`,
        style({
          opacity: 1,
          transform: "translate(0)" 
        })
      )
    ] 
  }

  getOptions(): IntersectionObserverInit {
    return {
      root: null,
      rootMargin: '0px',
      threshold: this.threshold
    }
  }

}
