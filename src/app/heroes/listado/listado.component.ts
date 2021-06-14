import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  
})
export class ListadoComponent {

 
  heroes:string[] = [ 'Spiderman', 'Ironman','Hulk', 'Thor'];
  eliminado:string= ' ';
  
  


borrarHeroe():void{

  console.log('borrando...')
  //this.heroes =[' ','Ironman', 'Hulk', 'Thor'];

      this.eliminado = this.heroes.shift() || '';
        
}


}
