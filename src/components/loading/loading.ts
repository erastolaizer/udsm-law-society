import { Component,Input } from '@angular/core';

/**
 * Generated class for the LoadingComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'loading',
  templateUrl: 'loading.html'
})
export class LoadingComponent {

  @Input() text: string;

  constructor() {
    console.log('Hello LoadingComponent Component');
    this.text = 'Hello World';
  }

}
