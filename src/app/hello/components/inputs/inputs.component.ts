import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inputs',
  templateUrl: './inputs.component.html',
  styleUrls: ['./inputs.component.scss']
})
export class InputsComponent implements OnInit {

  public Nombre: String;
  public Apellido: String;
  
  constructor() { 
    this.Apellido = "";
    this.Nombre = "";
  }

  ngOnInit(): void {
  }

}
