import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'siva';
  name='angular';
  name1='angular';
  value='';
  show=true
  mod(){
    this.show=!this.show

   }
   on(){
   }
}