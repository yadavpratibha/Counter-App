import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  imports: [RouterOutlet],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('Counter-App');

  count:number=0;

  updateValue(str:string){
    if(str=='inc'){
      this.count=this.count+1;
    }else if(str=='res'){
      this.count=0;
    }else{
      this.count<=0?0:this.count=this.count-1;
    }
  }
}
