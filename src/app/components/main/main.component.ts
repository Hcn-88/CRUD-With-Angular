import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/produtos';
import { ProdutosService } from 'src/app/services/produtos.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit{

  produtos: Produto[] = []
  currentEdit:boolean = false;
  currentCadastrar:boolean = true;
  produto?: Produto;

  constructor(private serviceProdutos:ProdutosService){}

  ngOnInit(): void {}

  onSubmit(produto:Produto){
    this.produtos.push(produto);
  }

  onDelete(id:number){
    this.produtos = this.produtos.filter((item, indice) => indice !== id);
  }

  onSelect(id:number){
    this.produto = this.produtos[id];
    this.produto!.id = id;
    this.currentEdit = true;
    this.currentCadastrar = false;
  }

  onEdit(produto: Produto){
    this.serviceProdutos.update(this.produtos,produto); 
    this.currentEdit = false;
    this.currentCadastrar = true;
  }

}
