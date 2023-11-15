import { Component } from '@angular/core';
import { Videojuego } from '../../model/videojuego';
import { JuegoService } from '../../services/juego.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  videojuegos: Videojuego[] = [];

  constructor(private juegoService: JuegoService) { }

  ngOnInit(): void {
    this.videojuegos = this.juegoService.getVideojuegos();
  }
}
