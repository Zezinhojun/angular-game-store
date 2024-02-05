import { GameStoreService } from './../../service/game-store.service'
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  @Input() bigCardImg: string = "./../../../assets/placeholder.png"
  jogos: any

  constructor(private gameService: GameStoreService) {

  }
  ngOnInit(): void {
    this.carregarJogos()
  }

  carregarJogos() {
    this.jogos = this.gameService.getJogos()
  }
}
