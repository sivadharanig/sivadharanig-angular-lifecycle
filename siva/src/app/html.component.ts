import { Component,Input,OnInit,OnDestroy,OnChanges, DoCheck} from '@angular/core';

@Component({
  selector: 'hello',
  template: '<h1>ravi {{name}}!</h1>'
})
export class helloComponent implements OnInit,OnDestroy,OnChanges,DoCheck {
  @Input() name:string="";
   constructor(){
    
}

  ngOnChanges() {
    console.log('onchange')
}
  ngOnInit(){
    console.log('comeated')
}
  ngOnDestroy() {
    console.log('destroyed')      
  }
  ngDoCheck(){
    console.log('validation check')
  }
}