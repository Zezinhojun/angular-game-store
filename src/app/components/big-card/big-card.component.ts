import { Component, Input } from '@angular/core';
import { GameStoreService } from '../../service/game-store.service';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrl: './big-card.component.css'
})
export class BigCardComponent {
  @Input() bigCardImg: string = ""
  jogos: any

  constructor(private gameService: GameStoreService) { }

  ngOnInit(): void {
    this.carregarJogos()
  }

  carregarJogos() {
    this.jogos = this.gameService.getJogos()
    this.bigCardImg = this.jogos[4].image
  }
}
