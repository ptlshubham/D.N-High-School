import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-section-courses',
  templateUrl: './section-courses.component.html',
  styleUrls: ['./section-courses.component.css']
})
export class SectionCoursesComponent implements OnInit {

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
