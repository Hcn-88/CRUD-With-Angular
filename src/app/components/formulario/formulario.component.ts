import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Produto } from 'src/app/produtos';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  @Input() produto?: Produto;
  @Output() submit: EventEmitter<any> = new EventEmitter();
  @Output() edit: EventEmitter<any> = new EventEmitter();
  @Input() showEdit: boolean = false;
  @Input() showCadastrar: boolean = true;

  formulario = new FormGroup ({
    id: new FormControl(),
    nome: new FormControl(""),
    email: new FormControl(""),
    idade: new FormControl()
  })

  constructor(){}

  ngOnInit(): void {}

  ngOnChanges(bindingChange:any){

    if(!this.showCadastrar) {
      this.formulario.patchValue({
        id: this.produto?.id,
        nome: this.produto?.nome,
        email: this.produto?.email,
        idade: this.produto?.idade
        })
      }

    }

  handleSubmit(){
    if(!this.formulario.value.nome ||
      !this.formulario.value.email ||
      !this.formulario.value.idade){
        return;
      }

    this.submit.emit(this.formulario.value)
    this.formulario.reset();
  }

  handleEdit(){
    this.edit.emit(this.formulario.value);
    this.formulario.reset();
  }

}
