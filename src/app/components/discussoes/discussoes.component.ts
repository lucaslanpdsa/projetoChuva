import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-discussoes',
  templateUrl: './discussoes.component.html',
  styleUrls: ['./discussoes.component.scss']
})
export class DiscussoesComponent implements OnInit {

  sessaoBase: boolean = true;

  mostrarCriateTopic: boolean = false;

  CriaTopico() {
    this.mostrarCriateTopic = true
    this.sessaoBase = false
    this.formEnviado = false
  }

  topicos: Array<any> = [


  ]

  formEnviado: boolean = false;

  formulario!: FormGroup;

  foiAnalisado: boolean = false;

  submit() {
    this.mostrarCriateTopic = false
    this.topicos.push({
      assunto: this.formulario.get("assunto")?.value,
      conteudo: this.formulario.get("conteudo")?.value
    })
    this.formEnviado = true

    setInterval(() => {
      this.foiAnalisado = true
    }, 3000)
  }





  constructor() {

  }

  ngOnInit(): void {
    this.formulario = new FormGroup({
      assunto: new FormControl(""),
      conteudo: new FormControl(""),
    })
  }

}
