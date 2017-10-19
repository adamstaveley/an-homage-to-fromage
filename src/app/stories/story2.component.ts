import { Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-story-2',
    templateUrl: '2religion.html',
    styleUrls: ['story.component.css']
})

export class Story2Component {
    id = 2;

    @Output() pageEmitter = new EventEmitter<number>();

    changePage(page: number): void {
        this.pageEmitter.emit(page);
    }
}
