import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  //? Valoriables

  mensajeria=false;

  //  Funciones

  toggleMensajeria(){
    if (this.mensajeria) {
      this.mensajeria= false;
    } else {
      this.mensajeria=true;
    }
  }

  constructor() {}

  ngOnInit(): void {
  }

}
