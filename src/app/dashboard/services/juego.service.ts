import { Injectable } from '@angular/core';
import { Videojuego } from '../model/videojuego';

@Injectable({
  providedIn: 'root'
})
export class JuegoService {

  private videojuegos: Videojuego[] = [
    {idVideoJuego: 1, nombre: 'Mario Bross', descripcion: 'Este juego es increible', imagen : 'mariobros', precio: 20 },
    {idVideoJuego: 2, nombre: 'Mortal Kombat', descripcion: 'Este juego es increible', imagen : 'mariobros', precio: 20 },
    {idVideoJuego: 3, nombre: 'Dragon Ball', descripcion: 'Este juego es increible', imagen : 'mariobros', precio: 20 },
    {idVideoJuego: 4, nombre: 'Warzone', descripcion: 'Este juego es increible', imagen : 'mariobros', precio: 20 },
    {idVideoJuego: 5, nombre: 'Street Fighters', descripcion: 'Este juego es increible', imagen : 'mariobros', precio: 20 },
    {idVideoJuego: 6, nombre: 'Minecraft', descripcion: 'Este juego es increible', imagen : 'mariobros', precio: 20 },
  ]


  private videojuegosGamers: Videojuego[] = [
    { idVideoJuego: 1, nombre: 'Mario Bross', descripcion: 'Este juego es increible', imagen: 'gamers', precio: 20 },
    { idVideoJuego: 2, nombre: 'Mortal Kombat', descripcion: 'Este juego es increible', imagen: 'gamers', precio: 20 },
    { idVideoJuego: 3, nombre: 'Dragon Ball', descripcion: 'Este juego es increible', imagen: 'gamers', precio: 20 },
    { idVideoJuego: 4, nombre: 'Warzone', descripcion: 'Este juego es increible', imagen: 'gamers', precio: 20 },
    { idVideoJuego: 5, nombre: 'Street Fighters', descripcion: 'Este juego es increible', imagen: 'gamers', precio: 20 },
    { idVideoJuego: 6, nombre: 'Minecraft', descripcion: 'Este juego es increible', imagen: 'gamers', precio: 20 },
  ]
  private videojuegosInvitados: Videojuego[] = [
    { idVideoJuego: 1, nombre: 'Mario Bross', descripcion: 'Este juego es increible', imagen: 'consola', precio: 20 },
    { idVideoJuego: 2, nombre: 'Mortal Kombat', descripcion: 'Este juego es increible', imagen: 'consola', precio: 20 },
    { idVideoJuego: 3, nombre: 'Dragon Ball', descripcion: 'Este juego es increible', imagen: 'consola', precio: 20 },
    { idVideoJuego: 4, nombre: 'Warzone', descripcion: 'Este juego es increible', imagen: 'consola', precio: 20 },
    { idVideoJuego: 5, nombre: 'Street Fighters', descripcion: 'Este juego es increible', imagen: 'consola', precio: 20 },
    { idVideoJuego: 6, nombre: 'Minecraft', descripcion: 'Este juego es increible', imagen: 'consola', precio: 20 },
  ]

  getVideojuegos(): Videojuego[] {
    return this.videojuegos;
  }
  getVideojuegosGamers(): Videojuego[] {
    return this.videojuegosGamers;
  }
  getVideojuegosInvitador(): Videojuego[] {
    return this.videojuegosInvitados;
  }
}
