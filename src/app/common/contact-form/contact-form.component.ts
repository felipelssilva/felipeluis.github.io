import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.less']
})
export class ContactFormComponent implements OnInit {
  contactForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.contactForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      subject: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

  onSubmit() {
    var formData: any = {
      "name": this.contactForm.get('name').value,
      "email": this.contactForm.get('email').value,
      "subject": this.contactForm.get('subject').value,
      "message": this.contactForm.get('message').value
    };

    this.http.post('/api/contacts', formData).subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    )
  }

}
