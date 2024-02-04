import { Component } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.css'
})
export class SideBarComponent {
  categories: { name: string, checked: boolean }[] = [
    { name: 'Indy', checked: false },
    { name: 'Adventure', checked: true },
    { name: 'MMO', checked: true },
    { name: 'Casual game', checked: true },
    { name: 'Strategy', checked: true },
    { name: 'Simulator', checked: true },
    { name: 'Sports Game', checked: true },
    { name: 'Action Game', checked: true },
  ];
  platforms: { name: string, checked: boolean }[] = [
    { name: 'PlayStation 3', checked: false },
    { name: 'PlayStation 4', checked: false },
    { name: 'PlayStation 5', checked: false },
    { name: 'Xbox Series', checked: false },
    { name: 'Nintendo Switch', checked: false },
  ]

  selectedGame = {
    categories: ["Adventure", "Strategy"],
    title: "The Legend of Zelda: Breath of the Wild",
    image: "https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/software/switch/70010000000025/7137262b5a64d921e193653f8aa0b722925abc5680380ca0e18a5cfd91697f58",
    price: 59.99,
    platforms: ["Nintendo Switch"]
  };

  // Método para verificar se a categoria está presente nas categorias do jogo
  isCategoryChecked(categories: string): boolean {
    return this.selectedGame.categories.includes(categories);
  }

  // Método para verificar se a plataforma está presente nas plataformas do jogo
  isPlatformChecked(platforms: string): boolean {
    return this.selectedGame.platforms.includes(platforms);
  }
}
