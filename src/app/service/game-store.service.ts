import { Injectable } from '@angular/core';
import { gameStoreApi } from '../../data/gameStoreApi';

@Injectable({
  providedIn: 'root'
})
export class GameStoreService {
  constructor() { }

  getJogos() {
    return gameStoreApi()
  }
}
