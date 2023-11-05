import { Component, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'insert-stand';

  @ViewChild('viewContainer', {static: true, read: ViewContainerRef})
  private container!: ViewContainerRef;

  onClickComponent() {
    import('./undeclarated/undeclarated.component').then(m => {
      const ref = this.container.createComponent(m.UndeclaratedComponent);

      console.log(ref);
    });
  }

  onClickTemplate(template: TemplateRef<unknown>) {
    const viewRef = this.container.createEmbeddedView(template, {name: 'Egor'});

    console.log(viewRef);
  }

  onClickClear() {
    this.container.clear();
  }

}
