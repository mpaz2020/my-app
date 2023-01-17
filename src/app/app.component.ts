import { Component, OnInit } from '@angular/core';

interface Tarjeta {
  titulo: string;
  subtitulo: string;
  image?: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Mi primera App Angular';
  texto = 'Este es un ejemplo de event binding...';
  textPlaceholder = 'Escriba su nombre aqui...';
  deshabilitado = true;
  texto2: string = '';
  public Tarjetas: Tarjeta[] = [];
  ngOnInit(): void {
    this.Tarjetas = [
      {
        titulo: 'Video 1',
        subtitulo: 'Subtitulo Video 1',
        image: '../../assets/logo-512.png',
      },
      {
        titulo: 'Video 2',
        subtitulo: 'Subtitulo Video 2',
        image: '../../assets/logo-512.png',
      },
      {
        titulo: 'Video 3',
        subtitulo: 'Subtitulo Video 3',
        image: '../../assets/logo-512.png',
      },
    ];
  }

  cambiarTexto(): void {
    this.texto = 'Texto cambió';
  }
}
