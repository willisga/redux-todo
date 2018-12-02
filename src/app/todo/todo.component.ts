import { Component, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";
import { AppState } from "../app.reducers";
import { Store } from "@ngrx/store";
import { ToggleAll } from "./todo.actions";

@Component({
  selector: "app-todo",
  templateUrl: "./todo.component.html",
  styles: []
})
export class TodoComponent implements OnInit {
  stateAll: FormControl;

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.stateAll = new FormControl(false);
    this.stateAll.valueChanges.subscribe(state => {
      const action = new ToggleAll(state);
      this.store.dispatch(action);
    });
  }
}
