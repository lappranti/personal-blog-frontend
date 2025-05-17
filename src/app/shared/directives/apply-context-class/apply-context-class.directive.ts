import { Directive, ElementRef, Renderer2 } from '@angular/core';
import { AppService } from '../../services/app-service/app-service.service';
import { AppContext } from '../../enum/app-context/app-context';

@Directive({
  selector: '[appApplyContextClass]',
  standalone: true,
})
export class ApplyContextClassDirective {
  classContextSuffix: string = 'app-context';
  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2,
    private appService: AppService
  ) {
    this.appService.contextAsync.subscribe((ctx) => {
      const contextClass = this.getClassByContext(ctx);
      this.removeContextClass(this.elementRef.nativeElement);
      this.renderer.addClass(this.elementRef.nativeElement, contextClass);
    });
  }
  removeContextClass(element: any) {
    element.classList.forEach((className: string) => {
      if (className.endsWith(this.classContextSuffix)) {
        element.classList.remove(className);
      }
    });
  }
  getClassByContext(ctx: AppContext) {
    switch (ctx) {
      case AppContext.Default:
        return 'default-app-context';
      case AppContext.Blog:
        return 'blog-app-context';
      case AppContext.Contact:
        return 'contact-app-context';
      case AppContext.Home:
        return 'home-app-context';
      default:
        return '';
    }
  }
}
