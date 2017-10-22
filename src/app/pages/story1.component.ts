import { Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-story-1',
    templateUrl: '1dualism.html',
    styleUrls: ['page.component.css']
})

export class Story1Component {
    id = 1;

    @Output() pageEmitter = new EventEmitter<number>();

    changePage(page: number): void {
        this.pageEmitter.emit(page);
    }
}
