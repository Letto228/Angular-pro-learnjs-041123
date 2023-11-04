import { Directive, Input, TemplateRef, ViewContainerRef } from "@angular/core";

interface IDumpNgIfContext<T> {
  $implicit: T;
  appDumpNgIf: T;
}

@Directive({
  selector: '[appDumpNgIf]',
})
export class DumpNgIfDirective<T> {
  @Input() set appDumpNgIf(data: T | null | undefined) {
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
        appDumpNgIf: data,
      });
    }
  }

  constructor(
    private readonly viewContainerRef: ViewContainerRef,
    private readonly templateRef: TemplateRef<IDumpNgIfContext<T>>
  ) {}
}
