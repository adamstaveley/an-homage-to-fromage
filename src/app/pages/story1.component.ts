import { Component, EventEmitter, HostListener, Output } from '@angular/core';

@Component({
    selector: 'app-story-1',
    templateUrl: '1dualism.html',
    styleUrls: ['page.component.css']
})

export class Story1Component {
    id = 1;
    showBookmarkHelp = false;

    @Output() pageEmitter = new EventEmitter<number>();

    @HostListener('window:scroll', [])
    onscroll() {
        const position = window.pageYOffset;
        localStorage.setItem('story1Scroll', position.toString());
    }

    changePage(page: number): void {
        this.pageEmitter.emit(page);
    }

    jumpToLastPosition() {
        const position = parseInt(localStorage.getItem('story1Scroll'), 10);
        position ? window.scrollTo(0, position) : this.showBookmarkHelp = true;
        setTimeout(() => this.showBookmarkHelp = false, 3000);
    }
}
