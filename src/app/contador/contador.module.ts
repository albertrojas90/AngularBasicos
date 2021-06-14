//import { ContadorComponent } from './contador.component';
//import { ListadoComponent } from '../heroes/listado/listado.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContadorComponent } from './contador/contador.component';


@NgModule({

    declarations:[
        ContadorComponent
    ],
    exports:[

        ContadorComponent
    ],
    imports:[
        CommonModule
    ]


}
)


export class ContadorModule{


}