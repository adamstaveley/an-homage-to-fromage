import { Component, EventEmitter, HostListener, Output } from '@angular/core';

@Component({
    selector: 'app-story-3',
    templateUrl: '3nostalgia.html',
    styleUrls: ['page.component.css']
})

export class Story3Component {
    id = 3;
    showBookmarkHelp = false;

    @Output() pageEmitter = new EventEmitter<number>();

    @HostListener('window:scroll', [])
    onscroll() {
        const position = window.pageYOffset;
        localStorage.setItem('story3Scroll', position.toString());
    }

    changePage(page: number): void {
        this.pageEmitter.emit(page);
    }

    jumpToLastPosition() {
        const position = parseInt(localStorage.getItem('story3Scroll'), 10);
        position ? window.scrollTo(0, position) : this.showBookmarkHelp = true;
        setTimeout(() => this.showBookmarkHelp = false, 3000);
    }
}
