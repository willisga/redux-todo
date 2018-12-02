import { Component, OnInit, Input, ElementRef, ViewChild } from "@angular/core";
import { TodoModel } from "../models/todo.model";
import { AppState } from "src/app/app.reducers";
import { Store } from "@ngrx/store";
import {
  EditarAction,
  EliminarAction,
  ToggleCompleteAction
} from "../todo.actions";
import { FormControl, Validators } from "@angular/forms";

@Component({
  selector: "app-todo-item",
  templateUrl: "./todo-item.component.html",
  styles: []
})
export class TodoItemComponent implements OnInit {
  @Input() todo: TodoModel;

  checkbox: FormControl;
  txtInput: FormControl;

  @ViewChild("txtInputFisico") txtInputElement: ElementRef;

  private editando: boolean;

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.editando = false;

    this.checkbox = new FormControl(this.todo.completado);
    this.txtInput = new FormControl(this.todo.texto, Validators.required);

    this.checkbox.valueChanges.subscribe(value => this.toggleComplete());
  }

  /**
   * Función encargada de iniciar la edición
   */
  initEdit() {
    this.editando = true;

    setTimeout(() => {
      console.log(this.txtInputElement.nativeElement);
      this.txtInputElement.nativeElement.select();
    }, 1);
  }

  /**
   * Metodo encargado de ejecutar la acción para editar en el store
   */
  endEdit() {
    if (!this.txtInput.valid) {
      return;
    }

    if (this.todo.texto === this.txtInput.value) {
      return;
    }

    const action = new EditarAction(this.todo.id, this.txtInput.value);
    this.store.dispatch(action);
  }

  /**
   * Metodo encargado de ejecutar la acción para eliminar un task en el store
   */
  delete() {
    const action = new EliminarAction(this.todo.id);
    this.store.dispatch(action);
  }

  /**
   * Metodo encargado de displerar la acción que varia el estado completado
   */
  toggleComplete() {
    const action = new ToggleCompleteAction(this.todo.id);
    this.store.dispatch(action);
  }
}
