import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeService } from 'src/app/core/services/home.services';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  staticURL: any = '';
  choice: any;
  constructor(
    private router:Router,
    private homeService: HomeService

  ) { 
  }

  ngOnInit(): void {
  }
  showDiv(id:any){
    localStorage.clear();

    localStorage.setItem('choice',id);
    this.getInstituteDetails();
    this.router.navigate(['/home/main']);
  }

  getInstituteDetails() {
    this.choice = localStorage.getItem('choice');
    if (this.choice == 'primary') {
      this.staticURL = 'www.dnhighschoolprimary.ac.in';
      this.homeService.getInstituteDetailsById(this.staticURL).subscribe((res: any) => {
        localStorage.setItem('InstituteId', res[0].id);
        localStorage.setItem('InstituteName', res[0].name);
        localStorage.setItem('InstituteURL', res[0].url);
      })
    }
    else if(this.choice=='secondary') {
      this.staticURL = 'www.dnhighschoolhs.ac.in';
      this.homeService.getInstituteDetailsById(this.staticURL).subscribe((res: any) => {
        localStorage.setItem('InstituteId', res[0].id);
        localStorage.setItem('InstituteName', res[0].name);
        localStorage.setItem('InstituteURL', res[0].url);
      })
    }

  }
}
