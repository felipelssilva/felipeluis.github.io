import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.less']
})
export class ContactFormComponent implements OnInit {
  contactForm: FormGroup;
  loading: boolean;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.loading = false;

    this.contactForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      subject: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

  onSubmit() {
    this.loading = true;

    let formData: any = {
      "name": this.contactForm.get('name').value,
      "email": this.contactForm.get('email').value,
      "subject": this.contactForm.get('subject').value,
      "message": this.contactForm.get('message').value
    };

    this.http.post('/api/contacts', formData).subscribe(
      (response: any) => {
        this.loading = false;

        Swal.fire({
          title: 'Success!',
          text: `${response.message}`,
          icon: 'success',
          confirmButtonText: 'Ok'
        })

        this.contactForm.reset();
      },
      (err) => {
        this.loading = false;

        if (err.error.message.length > 0) {
          let message = '';

          err.error.message.forEach(element => {
            message += `<li>${element.msg}</li>`;
          });

          Swal.fire({
            title: 'Error to send the message!',
            html: `<ul class="text-left">${message}</ul>`,
            icon: 'error',
            confirmButtonText: 'Ok'
          })

        } else {
          Swal.fire({
            title: 'Error to send the message!',
            text: 'Please, try again latter',
            icon: 'error',
            confirmButtonText: 'Ok'
          })
        }

      }
    )
  }

}
