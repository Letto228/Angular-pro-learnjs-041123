import { Directive, Input, TemplateRef, ViewContainerRef } from "@angular/core";

interface IMyNgIfContext<T> {
  $implicit: T;
  appMyNgIf: T;
}

@Directive({
  selector: '[appMyNgIf]',
})
export class MyNgIfDirective<T> {
  @Input() set appMyNgIf(data: T | null | undefined) {
    const isContainerHasView = this.viewContainerRef.length;
    const needClear = !data && isContainerHasView;

    if (needClear) {
      this.viewContainerRef.clear();

      return;
    }

    const needCreateView = data && !isContainerHasView;

    if (needCreateView) {
      this.viewContainerRef.createEmbeddedView(this.templateRef, {
        $implicit: data,
        appMyNgIf: data,
      });
    }
  }

  constructor(
    private readonly viewContainerRef: ViewContainerRef,
    private readonly templateRef: TemplateRef<IMyNgIfContext<T>>
  ) {}

  static ngTemplateContextGuard<T>(
    _directive: MyNgIfDirective<T>,
    _context: unknown,
  ): _context is IMyNgIfContext<T> {
    return true;
  }

  static ngTemplateGuard_appMyNgIf<T>(
    _directive: MyNgIfDirective<T>,
    _inputValue: unknown,
  ): _inputValue is T {
    return true;
  }
}
