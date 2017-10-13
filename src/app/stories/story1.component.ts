import { Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-story-1',
    templateUrl: '1dualism.html'
})

export class Story1Component {
    @Output() pageEmitter = new EventEmitter<string>();

    changePage(page: string): void {
        this.pageEmitter.emit(page);
    }
}
