import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

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
