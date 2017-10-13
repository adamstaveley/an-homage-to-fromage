import { Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-story-3',
    templateUrl: '3nostalgia.html'
})

export class Story3Component {
    @Output() pageEmitter = new EventEmitter<string>();

    changePage(page: string): void {
        this.pageEmitter.emit(page);
    }
}
