import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  ngOnInit(): void {}
  public image?: string;
  public Titulo: string = 'Curso de angular con Interpolacion';
  @Input() dataEntry: any;

  constructor() {
    this.image = '../../assets/logo-512.png';
  }
}
