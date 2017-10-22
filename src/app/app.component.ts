import { Component } from '@angular/core';
import { Cheeses } from './data/cheese';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  storedPage = parseInt(localStorage.getItem('page'), 10);

  selectedPage: string | number = 'splash';   // 'splash', 0 (contents), 1, 2, 3, 4, 5
  showQuiz = false;

  cheeses = Cheeses;

  constructor() {
    this.showQuiz = this.checkAllVisited();
  }

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
    if (page) {
      const visitedPages = this.updateVisitedPages(page);
      localStorage.setItem('visitedPages', JSON.stringify(visitedPages.sort()));
      localStorage.setItem('page', page.toString());
      this.showQuiz = this.checkAllVisited();
    } else {
      localStorage.removeItem('page');
    }
  }

  updateVisitedPages(page: number): Array<number> {
    let visitedPages: Array<number>  = JSON.parse(localStorage.getItem('visitedPages'));
    if (!visitedPages) { visitedPages = []; }
    const visitedPagesSet: Set<number> = new Set(visitedPages);
    visitedPagesSet.add(page);
    return Array.from(visitedPagesSet);
  }

  checkAllVisited() {
    const allPages = [1, 2, 3, 4, 5];
    const visitedPages = JSON.parse(localStorage.getItem('visitedPages'));
    return JSON.stringify(visitedPages) === JSON.stringify(allPages);
  }
}
