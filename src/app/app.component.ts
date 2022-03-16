import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-05';

  constructor(private _snackBar: MatSnackBar) {}

  buttonSnackBar(): void {
    this._snackBar.open('Excluido', 'Ok')
  }
}
