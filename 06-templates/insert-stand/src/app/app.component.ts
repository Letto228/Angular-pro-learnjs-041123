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

  }

  onClickTemplate(template: TemplateRef<unknown>) {

  }

  onClickClear() {

  }

}
