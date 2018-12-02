import { Component, OnInit } from "@angular/core";
import { AppState } from "src/app/app.reducers";
import { Store } from "@ngrx/store";
import { AgregarAction } from "../todo.actions";
import { FormGroup, Validators, FormBuilder } from "@angular/forms";

@Component({
  selector: "app-todo-add",
  templateUrl: "./todo-add.component.html",
  styles: []
})
export class TodoAddComponent implements OnInit {
  frmTask: FormGroup;

  constructor(
    private store: Store<AppState>,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.frmTask = this.formBuilder.group({
      txtTask: [
        "",
        Validators.compose([Validators.required, Validators.minLength(5)])
      ]
    });
  }

  add($event) {
    if (this.frmTask.valid && $event.keyCode === 13) {
      const action = new AgregarAction(this.frmTask.controls["txtTask"].value);
      this.store.dispatch(action);
      this.frmTask.reset();
    }
  }
}
