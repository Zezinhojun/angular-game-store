import { Component, Input } from '@angular/core';
import { GameStoreService } from '../../service/game-store.service';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrl: './small-card.component.css'
})
export class SmallCardComponent {
  @Input() game: any;
  jogos: any

  constructor(private gameService: GameStoreService) { }

  ngOnInit(): void {
    this.carregarJogos()
  }

  carregarJogos() {
    this.jogos = this.gameService.getJogos()
    return this.jogos
  }
}
