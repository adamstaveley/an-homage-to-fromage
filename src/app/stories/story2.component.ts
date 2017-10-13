import { Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-story-2',
    templateUrl: '2religion.html'
})

export class Story2Component {
    @Output() pageEmitter = new EventEmitter<string>();

    changePage(page: string): void {
        this.pageEmitter.emit(page);
    }
}
