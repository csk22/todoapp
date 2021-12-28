import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  //js
  message = 'Some welcome Message';
  //ts
  message1:string = 'Some welcome Message';

  user:string="";

  //ActivatedRoute
  constructor(private route:ActivatedRoute) { }
  ngOnInit(): void {
    console.log(this.message);
    console.log(this.message1);
    //this.message1 = 5 gives error since ts is strongly typed
    this.user=this.route.snapshot.params['name'];
  }

}
