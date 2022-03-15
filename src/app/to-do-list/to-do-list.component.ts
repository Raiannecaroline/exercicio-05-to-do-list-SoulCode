import { Component, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent{

  //Adicionando Título e Subtítulo
  @Input() titulo: string = 'To Do List'

  @Input() subtitulo: string = 'Lista de Tarefas'

  //Array de Items
  item: Array<any> = []

  @ViewChild('addItens')
  items!: ElementRef


  adicionarItems(numeros: string): void {
    this.item.push(numeros)
    this.items.nativeElement.value = ''
  }

  removeItems(item: any): void {
    this.item.splice(this.item.indexOf(item), 1)
  }
  
  removerTodaLista(): void {
    this.item.length = 0
  }
}