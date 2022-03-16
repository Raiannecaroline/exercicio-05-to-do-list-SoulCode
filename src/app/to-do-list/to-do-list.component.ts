import { Component, Input, ViewChild, ElementRef, OnInit, EventEmitter, Output } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent{

  //Adicionando Título e Subtítulo
  @Input() 
  titulo: string = 'To Do List'

  @Input() 
  subtitulo: string = 'Lista de Tarefas'

  @Output()
  eventButton: EventEmitter<any> = new EventEmitter<any>()

  buttonEvent(): void {
    this.eventButton.emit()
  }

  //Array de Items
  itemDadoStorage: string[] | any = []

  @ViewChild('addItens')
  items!: ElementRef

  ngOnInit() {
    this.recuperarItemLocalStorage()
  }


  adicionarItems(numeros: string): void {
    this.itemDadoStorage?.push(numeros)
    let arrStrg = JSON.stringify(this.itemDadoStorage)
    localStorage.setItem('dado', arrStrg)
    this.recuperarItemLocalStorage()
    this.items.nativeElement.value = ''
  }

  recuperarItemLocalStorage(): void {
    let storage = localStorage.getItem('dado')
    let arrI = JSON.parse(storage || '[]')
    this.itemDadoStorage = arrI
  }

  removeItems(item: string | number): void {
    this.itemDadoStorage?.splice(item, 1)
    let arrStrg = JSON.stringify(this.itemDadoStorage)
    localStorage.setItem('dado', arrStrg)
    this.recuperarItemLocalStorage()
  }
  
  removerTodaLista(): void {
    this.itemDadoStorage.length = 0
    this.removerStorageItems()
  }

  removerStorageItems( ):void {
    localStorage.clear()
  }
}