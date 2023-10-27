import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, } from '@angular/forms';

@Component({
  selector: 'app-discussoes',
  templateUrl: './discussoes.component.html',
  styleUrls: ['./discussoes.component.scss']
})

export class DiscussoesComponent implements OnInit {

  MostrarSessaoBase: boolean = true; //Quando for true a sessão base sera exibida

  mostrarCriateTopic: boolean = false; // Quando for true a div com class "create_topic" que é a sessão que cria um novo topicosera exibida

  formfoiEnviado: boolean = false; // Quando for true a div com class "topicoEnviado" sera exibida

  formulario!: FormGroup; // dados do formulario

  TopicoFoiAnalisado: boolean = false; // Quando for false o topico estará em analise e quando for true o topico será exibido

  topicos: Array<any> = [] //Array que exibira os tópicos no HTML

  CriaTopico() {
    this.mostrarCriateTopic = true
    this.MostrarSessaoBase = false
    this.formfoiEnviado = false
  }

  submit() {
    if (this.assunto?.invalid) {
      alert("Preencha os campos do formulário")
      return
    } // se o formulario não estiver preenchido um alert será executado e o formulário nao será enviado

    this.TopicoFoiAnalisado = false
    this.mostrarCriateTopic = false
    this.topicos.push({
      assunto: this.formulario.get("assunto")?.value,
      conteudo: this.formulario.get("conteudo")?.value
    })
    this.formfoiEnviado = true

    setInterval(() => {
      this.TopicoFoiAnalisado = true
    }, 3000)
  }

  ngOnInit(): void {
    this.formulario = new FormGroup({
      assunto: new FormControl("", [Validators.required]),
      conteudo: new FormControl("", [Validators.required]),
    })
  } // pega dados do form group

  get assunto() {
    return this.formulario.get("assunto")
  }
  get conteudo() {

    return this.formulario.get("conteudo")
  }



}
