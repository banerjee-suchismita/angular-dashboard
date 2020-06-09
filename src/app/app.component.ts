import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-dashboard';

  toggle1 = true;
  toggle2 = false;
  app1 = false;
  app2 = false;
  app3 = false;
  app4 = false;
  navbar1 = true;
  navbar2 = false;
  dell = true;
  // Toggle(){
  //   this.toggle1 = !this.toggle1;
  //   this.toggle2 = !this.toggle2;
  //   console.log("I am here?")
  // }


  
}
