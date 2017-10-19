import { Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-story-4',
    templateUrl: '4android.html',
    styleUrls: ['story.component.css']
})

export class Story4Component {
    id = 4;

    @Output() pageEmitter = new EventEmitter<number>();

    changePage(page: number): void {
        this.pageEmitter.emit(page);
    }
}
