import { Component, OnInit } from '@angular/core';

import { Frase } from '../shared/frase.model'
import { FRASES } from './frase-mock'

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})

export class PainelComponent implements OnInit {

  public frases: Frase[] = FRASES
  public instrucao: string = "Traduza a frase:"
  public resposta: string = ''

  public rodada: number = 0
  public rodadaFrase: Frase

  public progresso: number = 0

  public tentativas: number = 3

  constructor() { 
    this.atualizaRodada()

  }

  ngOnInit() {
  }

  atualizaResposta(resposta: Event): void {
     
    this.resposta = (<HTMLInputElement>resposta.target).value
    
  }

  verificaResposta(): void {
    
    if(this.rodadaFrase.frasePT == this.resposta){
      alert("Resposta correta")

      //troca pergunta da rodada
      this.rodada++

      //atualiza frase da rodada
      this.atualizaRodada()

      //atualiza o progresso
      this.progresso += 100/ this.frases.length

      //limpa resposta
      this.resposta = ''

    } else {
      alert("Errou")
      //diminuir tentativas
      this.tentativas --

      if(this.tentativas === -1){
        alert("Você perdeu todas as tentativas")
      }

      //limpa resposta
      this.resposta = ''
    }

  }

  atualizaRodada(): void {
    this.rodadaFrase = this.frases[this.rodada]
  }

}
