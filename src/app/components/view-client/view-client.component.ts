import { Component, OnInit, inject } from '@angular/core';
import { ClientDataService } from '../../services/client-data.service';
import { NgIf } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-client',
  standalone: true,
  imports: [NgIf],
  templateUrl: './view-client.component.html',
  styleUrl: './view-client.component.css'
})
export class ViewClientComponent implements OnInit {
  private clientDataService = inject(ClientDataService)
  private router = inject(Router)

  clientData: any;

  ngOnInit(): void {
    this.clientDataService.clientData$.subscribe(data => {
      this.clientData = data.data;
      console.log('Client data received:', this.clientData);
    });
  }
  volver(){
    this.router.navigate(['/search']);
  }
}
