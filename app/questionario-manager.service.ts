import { Injectable } from '@angular/core';
import { Pessoa } from './pessoa'
@Injectable({
  providedIn: 'root'
})
export class QuestionarioManagerService {

  lista_pessoas: Array<Pessoa> = []

  constructor() {
    this.pessoMaisVelhaPessoaMaisNova()
   }

   salvar(dados){

    this.lista_pessoas.push(new Pessoa(dados.nome, dados.sexo, dados.idade, dados.sexo))
    console.log(this.lista_pessoas)
    this.pessoMaisVelhaPessoaMaisNova()

  }
  listaPessoas = (): Array<Pessoa> => this.lista_pessoas

  pessoMaisVelhaPessoaMaisNova(){
    let mais_velho =  0
    let mais_novo = 999
    let velho
    let novo

     this.listaPessoas().filter(pessoa => {
      if(pessoa.idade > mais_velho){
        velho = pessoa.nome
        mais_velho = pessoa.idade
      }else if(pessoa.idade < mais_novo){
        novo = pessoa.nome
        mais_novo = pessoa.idade
      }
    })

    const velho_novo = {
      novo,
      velho
    }

    return velho_novo
  }
  mediaMulherHomen(){
    let somaIdadeMulheres = 0;
    let somaIdadeHomems = 0;
    let qtdMulher = 0;
    let qtdHomem = 0;
    let mediaMulher = 0
    let mediaHomem = 0
    this.listaPessoas().filter(pessoa =>{
    if(pessoa.sexo == 'Feminino'){
      somaIdadeMulheres += pessoa.idade
      qtdMulher++
    }else if(pessoa.sexo === "Masculino"){
      somaIdadeHomems += pessoa.idade;
      qtdHomem++
    }
    })
    
    const dados = {
      mediaHomem: somaIdadeHomems/qtdHomem, 
      mediaMulher: somaIdadeMulheres/qtdMulher
    }
    console.log(dados)
    return dados
  
  }
  
 
}

