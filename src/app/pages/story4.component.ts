import { Component, EventEmitter, HostListener, Output } from '@angular/core';

@Component({
    selector: 'app-story-4',
    templateUrl: '4android.html',
    styleUrls: ['page.component.css']
})

export class Story4Component {
    id = 4;
    showBookmarkHelp = false;

    @Output() pageEmitter = new EventEmitter<number>();

    @HostListener('window:scroll', [])
    onscroll() {
        const position = window.pageYOffset;
        localStorage.setItem('story4Scroll', position.toString());
    }

    changePage(page: number): void {
        this.pageEmitter.emit(page);
    }

    jumpToLastPosition() {
        const position = parseInt(localStorage.getItem('story4Scroll'), 10);
        position ? window.scrollTo(0, position) : this.showBookmarkHelp = true;
        setTimeout(() => this.showBookmarkHelp = false, 3000);
    }
}
