import { Component, ElementRef, OnInit, QueryList, TemplateRef, ViewChild, ViewChildren, ViewContainerRef } from '@angular/core';
import { CatComponent } from './animals/cat/cat.component';
import { ColorDirective } from './color.directive';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'contentchildren-by-service';

  // @ViewChild('catComponent') catComponent!: CatComponent;
  // @ViewChild(CatComponent) catComponent!: CatComponent;
  // @ViewChild(ColorDirective) colorDirective!: ColorDirective;
  // @ViewChild(token) token!: TokenValue;
  // @ViewChild(TemplateRef) templateRef!: TemplateRef;

  // @ViewChild('catComponent', {read: ElementRef}) catElement!: ElementRef<HTMLElement>;
  // @ViewChild('catComponent', {read: ViewContainerRef}) viewPort!: ViewContainerRef;
  // @ViewChild('catComponent', {read: TemplateRef}) templateRef!: TemplateRef<unknown>;

  // @ViewChild('catComponent', {read: TemplateRef, static: false})
  // templateRef!: TemplateRef<unknown>;
  // @ViewChild('catComponent', {static: true})
  // templateRef!: TemplateRef<unknown>;

  @ViewChildren('animal') animalList: QueryList<any> = new QueryList();

  ngOnInit(): void {
    setTimeout(() => {
      this.animalList.forEach(animal => {
        animal.phrase = 'Aga'
      })
    }, 4000);
  }

  
}
