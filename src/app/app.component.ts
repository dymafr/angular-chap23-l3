import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public form = this.fb.group({
    input: [],
    majeur: [],
    gender: [],
    toggle: [],
  });

  constructor(private fb: FormBuilder) {}
}
