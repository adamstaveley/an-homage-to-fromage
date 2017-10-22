import { Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-story-5',
    templateUrl: '5zed.html',
    styleUrls: ['page.component.css']
})

export class Story5Component {
    id = 5;

    @Output() pageEmitter = new EventEmitter<number>();

    changePage(page: number): void {
        this.pageEmitter.emit(page);
    }
}
