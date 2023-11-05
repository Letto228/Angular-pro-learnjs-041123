import { AfterContentInit, Component, ContentChildren, ElementRef, Host, QueryList, Renderer2, TemplateRef, ViewContainerRef, ViewRef } from '@angular/core';
import { CarouselItemDirective } from '../carousel-item.directive';
import { InnerLogicService } from './inner-logic.service';

@Component({
  selector: 'carousel',
  templateUrl: './carousel.component.html',
  // providers: [InnerLogicService],

  // or

  viewProviders: [InnerLogicService]
})
export class CarouselComponent implements AfterContentInit {
  private embeddedView?: ViewRef;
  nodes: TemplateRef<HTMLElement>[] = [];
  cursor = 0;

  @ContentChildren(CarouselItemDirective, { read: TemplateRef })
  elements: QueryList<TemplateRef<HTMLElement>> = new QueryList()

  constructor(
    private view: ViewContainerRef,
    private innerLogic: InnerLogicService,
  ) {}

  ngAfterContentInit() {
    this.nodes = this.elements.toArray();

    setInterval(() => {
      this.cursor = (this.cursor + 1) % this.nodes.length;
      this.update();
    }, this.innerLogic.timer);
  }

  update() {
    if (this.embeddedView) {
      this.embeddedView.destroy();
    }

    this.embeddedView = this.view.createEmbeddedView(this.nodes[ this.cursor ]);
  }
}
