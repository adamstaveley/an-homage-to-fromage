import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedPage = 'splash';

  cheeses = {
    rind: [
      'Limburger',
      'Winnimere',
      'Gruyère'
    ],
    hard: [
      'Cheddar',
      'Gouda',
      'Emmental',
      'Comté'
    ],
    soft: [
      'Brie',
      'Camembert',
      'Reblochon'
    ],
    semiSoft: [
      'Chèvre',
      'Feta',
      'Paneer',
      'Mozarella'
    ],
    strong: [
      'Burrata',
      'Gorgonzola',
      'Gammelost',
      'Roquefort',
      'Bleu d\'Auvergne'
    ]
  };

  randomiseCheeses(type: Array<string>): Array<string> {
    const quantity = Math.floor(Math.random() * 4) || 1;
    const cheeses = new Set<string>();
    for (let i = 0; i < quantity; i++) {
      const index = Math.floor(Math.random() * type.length);
      cheeses.add(type[index]);
    }
    return Array.from(cheeses);
  }

  setPage(page: string): void {
    this.selectedPage = page;
  }

}
