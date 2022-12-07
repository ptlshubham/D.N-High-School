import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  choice: any;
  showDiv: any;
  constructor(
    private router:Router,
    private activatedRoute: ActivatedRoute
  ) { 
    this.choice = localStorage.getItem('choice');
  
  } 

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.showDiv = params['id'];
    });
  }

}
