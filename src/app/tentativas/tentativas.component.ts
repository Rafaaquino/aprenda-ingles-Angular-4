import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tentativas',
  templateUrl: './tentativas.component.html',
  styleUrls: ['./tentativas.component.css']
})
export class TentativasComponent implements OnInit {

  public coracaoCheio: string = '/assets/coracao-cheio.png'
  public coracaoVazio: string = '/assets/coracao-vazio.png'
  
  constructor() { }

  ngOnInit() {
  }

}
