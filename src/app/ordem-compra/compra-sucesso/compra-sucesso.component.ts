import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-compra-sucesso',
  templateUrl: './compra-sucesso.component.html',
  styleUrls: ['./compra-sucesso.component.css']
})
export class CompraSucessoComponent implements OnInit {


 @Input() public idPedidorespots !:number


  constructor() { }

  ngOnInit(): void {

  }

}
