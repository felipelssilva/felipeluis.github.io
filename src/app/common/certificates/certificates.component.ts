import { Component, OnInit } from '@angular/core';
import { Certificates } from '../interfaces/certificates';
import { CertificatesService } from '../services/certificates.service';

@Component({
  selector: 'app-certificates',
  templateUrl: './certificates.component.html',
  styleUrls: ['./certificates.component.less']
})
export class CertificatesComponent implements OnInit {
  loading: Boolean;
  error: Boolean;
  certificates: Certificates;
  
  constructor(
    private certificatesService: CertificatesService
  ) { }

  ngOnInit(): void {
    this.loadCertificates();
  }

  refresh(evt): void {
    evt.preventDefault();
    evt.stopPropagation();

    window.location.reload()
  }

  loadCertificates(): void {
    this.loading = true;
    this.error = false;

    this.certificatesService
      .listCertificates()
      .subscribe(certificates => {
        this.loading = false;
        this.certificates = certificates;
      },
        e => {
          this.loading = false;
          this.error = true;
        }
      );
  }
}