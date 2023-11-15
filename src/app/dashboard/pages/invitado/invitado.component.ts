import { Component } from '@angular/core';
import { Videojuego } from '../../model/videojuego';
import { JuegoService } from '../../services/juego.service';

@Component({
  selector: 'app-invitado',
  templateUrl: './invitado.component.html',
  styleUrls: ['./invitado.component.css']
})
export class InvitadoComponent {

  videojuegos: Videojuego[] = [];

  constructor(private juegoService: JuegoService) { }

  ngOnInit(): void {
    this.videojuegos = this.juegoService.getVideojuegosInvitador();

  }
}
