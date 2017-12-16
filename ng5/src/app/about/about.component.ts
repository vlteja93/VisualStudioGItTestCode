import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  goals: any;

  constructor(private _route: ActivatedRoute, private _router: Router, private _data: DataService) {
    this._route.params.subscribe(res => console.log(res.id));
   }

  ngOnInit() {
    this._data.goal.subscribe(res => this.goals = res);
  }

  sendMeHome(){
    this._router.navigate(['']);
  }

}
