import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import  Swal  from 'sweetalert2';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  buscarUnHeroe(nombre: String) {
    if (nombre != "") {
      this.router.navigate(['/buscador', nombre]);
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Campo vacio',
        text: 'No escribiste ningun nombre',
        timer: 2500,
        timerProgressBar: true,
        showConfirmButton: false
      })
    }

  }
}
