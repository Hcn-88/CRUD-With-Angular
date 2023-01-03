import { Injectable } from '@angular/core';
import { Produto } from '../produtos';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  update(produtos:Produto[], produto:Produto){
    let id = produto.id!;
    produtos[id] = produto;
    return produtos;
  }

  constructor() { }
}
