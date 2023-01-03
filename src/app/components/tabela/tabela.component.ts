import { Produto } from './../../produtos';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.css']
})
export class TabelaComponent implements OnInit {

  @Input() produtos: Produto[] = []
  @Output() delete: EventEmitter<any> = new EventEmitter();
  @Output() select: EventEmitter<any> = new EventEmitter();

  constructor(){}

  ngOnInit(): void {}

  handleDelete(id:number){
    this.delete.emit(id)
  }

  handleSelect(id:number){
    this.select.emit(id)
  }

}
