import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public isCollapsed = true;
  isSticky: boolean = false;
  public collapsed = true;
  readMore=false;
  
  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    this.isSticky = window.pageYOffset >= 250;
  }
  choice:any;
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
  
  moreOpen(){
    this.readMore=true;
  }
  displayStyle = "none";
  displayStyle1 = "none";
  displayStyle2 = "none";
  displayStyle3 = "none";
  displayStyle4 = "none";
  displayStyle5 = "none";
  openPopup() {
    this.displayStyle = "block";
  }
  closePopup() {
    this.displayStyle = "none";
    this.displayStyle1 = "none";
    this.displayStyle2 = "none";
    this.displayStyle3 = "none";
    this.displayStyle4 = "none";
    this.displayStyle5 = "none";
  }
  openPopup1() {
    this.displayStyle1 = "block";
  }
  openPopup2() {
    this.displayStyle2 = "block";
  }
  openPopup3() {
    this.displayStyle3 = "block";
  }
  openPopup4() {
    this.displayStyle4 = "block";
  }
  openPopup5() {
    this.displayStyle5 = "block";
  }
  searchSchool(id:any){
    this.router.navigate(['/more/search',id]);

  }
}
