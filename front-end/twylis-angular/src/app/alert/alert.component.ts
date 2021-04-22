import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';  

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements {

  constructor(private _router: Router) {

   }
  
   googleAlert() {

    Swal.fire({
      title: 'ALERT!',
      text: 'We detected new mentions for your brand!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'View your mentions',
      cancelButtonText: 'Go to homepage'
    }).then((result) => {
      if (result.value) {
        
        // this.router.navigate(["/dashboard"])
      
      } else if (result.dismiss === Swal.DismissReason.cancel) {
      
        // this._router.navigate(["/home"]);
      
      }
    })
  
  }
  
  }
