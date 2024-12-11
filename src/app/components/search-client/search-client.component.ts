import { Component, OnInit, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { Client }  from  '../../models/client'
import { ClientService } from '../../services/client.service'
import { ClientDataService } from '../../services/client-data.service';
import { ViewClientComponent } from "../view-client/view-client.component";

@Component({
  selector: 'app-search-client',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, NgIf, ViewClientComponent],
  templateUrl: './search-client.component.html',
  styleUrl: './search-client.component.css'
})
export class SearchClientComponent implements OnInit{
  searchForm: FormGroup
  private clientService = inject(ClientService)
  private clientDataService = inject(ClientDataService)
  private router = inject(Router)

  constructor(private fb: FormBuilder) {
    this.searchForm = this.fb.group({
      documentType: ['', Validators.required],
      documentNumber: ['', Validators.required]
    });
  }

  errorMessage: string | null = null;

  client: Client = {
    documentType: '',
    documentNumber: '',
    firstName: '',
    secondName: '',
    firstLastName: '',
    secondLastName: '',
    phone: '',
    address: '',
    city: ''
  }

  ngOnInit(): void {
  }

  search(){
    this.clientService.getClient(this.client.documentType, this.client.documentNumber).subscribe(
      result => {
        this.clientDataService.updateClientData(result);
        this.router.navigate(['/view']);
      },
      (error: any) => { // Manejador de errores aquí
        this.errorMessage = 'Error al obtener la información del cliente. Inténtelo de nuevo.';
        console.log("Error", error);
        console.log(this.errorMessage);
      }
    );
  }
}
