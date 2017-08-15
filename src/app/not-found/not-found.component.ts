import {Component} from '@angular/core';

@Component({
  template: `
    <div class="jumbotron text-center">
      <h1>404 Not Found</h1>
      <p>You may be lost. Follow this link to get back to the home page:</p>
      <a routerLink="/">HOME</a>
    </div>
  `
})
export class NotFoundComponent {}
