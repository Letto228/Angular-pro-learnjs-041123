import { Component, ContentChildren, QueryList } from '@angular/core';
import { Animal } from '../animal';


@Component({
  selector: 'app-zoo',
  templateUrl: './zoo.component.html',
})
export class ZooComponent {

  @ContentChildren(/* ? */) animals: QueryList<Animal> = new QueryList();

  say() {
    this.animals.forEach(animal => animal.say());
  }
}
