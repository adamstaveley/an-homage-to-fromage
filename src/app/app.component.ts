import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  storedPage = parseInt(localStorage.getItem('page'), 10);

  selectedPage: string | number = 'splash';   // 'splash', 0 (contents), 1, 2, 3, 4, 5
  showQuiz = false;

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

  setPage(page: number): void {
    this.selectedPage = page;
    page ? localStorage.setItem('page', page.toString()) : localStorage.removeItem('page');
  }

}
