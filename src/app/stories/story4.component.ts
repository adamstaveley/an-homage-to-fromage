import { Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-story-4',
    templateUrl: '4android.html'
})

export class Story4Component {
    @Output() pageEmitter = new EventEmitter<string>();

    changePage(page: string): void {
        this.pageEmitter.emit(page);
    }
}
