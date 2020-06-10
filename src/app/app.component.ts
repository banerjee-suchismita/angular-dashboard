import { Component, OnInit, ViewChild} from '@angular/core';
import { LinksService } from './links-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private linksService : LinksService){}

  title = 'angular-dashboard';
  linkdata = [];
  toggle1 = true;
  toggle2 = false;
  app1 = false;
  app2 = false;
  app3 = false;
  app4 = false;
  navbar1 = true;
  navbar2 = false;
  dell = true;
  var : String = 'HI';
 
  ngOnInit(){
    this.fetchData();
  }

  fetchData() {
    this.linksService.fetchData().subscribe(data => this.linkdata = data);
    console.log(this.linkdata)
  }

  // wrapperWhite() {
  //   console.log("HI")
  //   @ViewChild("wrapper").style.backgroundColor="white";
  // }
  
}
