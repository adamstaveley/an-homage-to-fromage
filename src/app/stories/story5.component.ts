import { Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-story-5',
    templateUrl: '5zed.html',
    styleUrls: ['story.component.css']
})

export class Story5Component {
    @Output() pageEmitter = new EventEmitter<string>();

    changePage(page: string): void {
        this.pageEmitter.emit(page);
    }
}
