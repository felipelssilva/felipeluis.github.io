import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Certificates } from "../interfaces/certificates";

@Injectable({
  providedIn: 'root'
})
export class CertificatesService {

    constructor(private http: HttpClient) {
    }

    listCertificates() {
        return this.http.get<Certificates>('/api/certificates');
    }

}