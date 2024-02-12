import { Component } from '@angular/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {provideNativeDateAdapter} from '@angular/material/core';
import {FormsModule, FormBuilder, ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import {MatCheckboxModule} from "@angular/material/checkbox";
import {JsonPipe} from "@angular/common";

@Component({
  selector: 'app-01-shipping',
  templateUrl: './shipping.component.html',
  styleUrl: './shipping.component.css',
  providers: [provideNativeDateAdapter()],
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatDatepickerModule,
    FormsModule, MatInputModule, MatButtonModule, MatMenuModule,
    ReactiveFormsModule, MatCheckboxModule, JsonPipe]
})
export class ShippingComponent {
  variants = this._formBuilder.group({
    C03_0019: false, C03_0065: false, C03_0165: false, C03_0180: false,
    C03_0183: false, C03_0184: false, C03_0185: false, G03_0112: false,
    G03_0120: false, N04_0595: false, N04_0624: false, N04_0625: false,
    N04_0626: false, N06_0125: false
  });

  constructor(private _formBuilder: FormBuilder) {}
}
