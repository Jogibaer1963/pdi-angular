import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatInputModule} from "@angular/material/input";

import { AppComponent } from './app.component';
import { ShippingComponent } from './01_shipping/shipping.component';
import { PdiMachineComponent } from './02_pdi-machine/pdi-machine.component';
import { RepairComponent } from './03_repair/repair.component';
import { WashbayComponent } from './04_washbay/washbay.component';
import { ShippMachineComponent } from './05_shipp-machine/shipp-machine.component';
import { OverviewComponent } from './06_overview/overview.component';
import { FormsModule } from "@angular/forms";
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';


@NgModule({
  declarations: [
    AppComponent,

    PdiMachineComponent,
    RepairComponent,
    WashbayComponent,
    ShippMachineComponent,
    OverviewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatInputModule,
    ShippingComponent
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
