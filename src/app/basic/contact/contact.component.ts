import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HomeService } from 'src/app/core/services/home.services';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  choice: any;
  showDiv: any;
  contactModel: any = {};
  form: FormGroup = new FormGroup({
    name: new FormControl(''),
    subject: new FormControl(''),
    contact: new FormControl(''),
    email: new FormControl(''),
    message: new FormControl(''),
  });
  submitted = false;
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private homeService: HomeService,
    private toastrMessage: ToastrService,
    private formBuilder: FormBuilder

  ) {
    this.choice = localStorage.getItem('choice');

  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.showDiv = params['id'];
    });

    this.form = this.formBuilder.group(
      {
        name: ['', Validators.required],
        contact: ['', [Validators.required]],
        subject: ['', Validators.required],
        message: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
      },
    );
  }
  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }
  saveContactUSData() {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }
    this.contactModel.institute_id = localStorage.getItem('InstituteId');
    this.homeService.saveContactUsDetails(this.contactModel).subscribe((res: any) => {
      if (res == 'success') {
        this.submitted = false;
        this.contactModel = {};
        this.toastrMessage.success('Thank you for valuable feedback.', 'Success', { timeOut: 3000, });
      }
    })
  }
}
