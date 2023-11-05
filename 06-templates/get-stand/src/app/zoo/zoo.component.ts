import { Component, ContentChild, ContentChildren, ElementRef, OnInit, QueryList } from '@angular/core';

@Component({
  selector: 'app-zoo',
  templateUrl: './zoo.component.html',
})
export class ZooComponent implements OnInit {
  @ContentChild('colorDirective', {read: ElementRef, descendants: false}) test: any;
  // @ContentChildren('animal') test!: QueryList<any>;

  ngOnInit(): void {
    setTimeout(() => {
      console.log(this.test);
      // this.test.forEach(animal => {
      //   animal.phrase = 'Ugu';
      // })
    }, 5000)
  }
}
