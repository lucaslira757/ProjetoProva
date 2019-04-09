import { Component } from '@angular/core';
import { QuestionarioManagerService } from './questionario-manager.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pessoas = [];
  nome: string = null;
  sexo: ['Masculino','Feminino'] 
  idade: string = null;
  cidade: string = null;
  cidades: Array<string> = ['Palmas', 'Porto Nacional','Paraiso','Barrolandia']
  
  constructor(private pessoa: QuestionarioManagerService){

  }

  salvar(){
    const pessoa= {
      id: Math.random()+1,
      nome: this.nome,
      sexo: this.sexo,
      idade: this.idade,
      cidade: this.cidade
    };   
    this.pessoa.salvar(pessoa)
    console.log(this.pessoa.pessoMaisVelhaPessoaMaisNova());
  }
  
}
