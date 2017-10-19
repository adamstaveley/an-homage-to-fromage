import { Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-story-3',
    templateUrl: '3nostalgia.html',
    styleUrls: ['story.component.css']
})

export class Story3Component {
    id = 3;

    @Output() pageEmitter = new EventEmitter<number>();

    changePage(page: number): void {
        this.pageEmitter.emit(page);
    }
}
