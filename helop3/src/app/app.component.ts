import { Component } from '@angular/core';
import { Hero } from './models/hero';


 const HEROES: Hero[] = [
  { id: 11, name: 'Mr. Nice' },
  { id: 12, name: 'Narco' },
  { id: 13, name: 'Bombasto' },
  { id: 14, name: 'Celeritas' },
  { id: 15, name: 'Magneta' },
  { id: 16, name: 'RubberMan' },
  { id: 17, name: 'Dynama' },
  { id: 18, name: 'Dr IQ' },
  { id: 19, name: 'Magma' },
  { id: 20, name: 'Tornado' }

]; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
 title = 'helop3';

  // hero:Hero={
  // id:2,
  // name:'sahil'
  // };

 heroes:Hero[]=HEROES;
  
selectHeros:Hero;

selectedHero(hero:Hero):void{
   this.selectHeros=hero;
   console.log(hero)

 }

}