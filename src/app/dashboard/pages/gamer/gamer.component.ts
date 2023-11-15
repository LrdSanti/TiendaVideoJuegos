import { Component } from '@angular/core';
import { Videojuego } from '../../model/videojuego';
import { JuegoService } from '../../services/juego.service';

@Component({
  selector: 'app-gamer',
  templateUrl: './gamer.component.html',
  styleUrls: ['./gamer.component.css']
})
export class GamerComponent {

  videojuegos: Videojuego[] = [];

  constructor(private juegoService: JuegoService) { }

  ngOnInit(): void {
    this.videojuegos = this.juegoService.getVideojuegosGamers();
  }
}
