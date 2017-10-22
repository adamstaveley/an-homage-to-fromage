import { Component, EventEmitter, Output } from '@angular/core';
import { Answers } from '../data/answers';

@Component({
    selector: 'app-quiz',
    templateUrl: 'quiz.component.html',
    styleUrls: ['page.component.css']
})

export class QuizComponent {

    @Output() pageEmitter = new EventEmitter<number>();

    quizPage = 0;
    cdTime: number;
    answers: Array<string> = [];
    correctAnswers = Answers;
    score: number;

    countdown(q, s) {
        this.cdTime = s;
        const seconds = Array.from(Array(s).keys());

        const timer = setInterval(() => {
            this.cdTime = seconds.pop();

            if (this.cdTime === 0) {
                this.quizPage ++;
                clearInterval(timer);
            }

            if (this.quizPage !== q) {
                clearInterval(timer);
            }

        }, 1000);
    }

    changePage(page: number): void {
        this.pageEmitter.emit(page);
    }

    submit(q, answer) {
        this.answers[q] = answer;
        this.quizPage ++;

        if (q === 2) {
            this.calculateScore();
        }
    }

    calculateScore() {
        const score = this.answers.filter(a => this.correctAnswers.indexOf(a) > -1);
        this.score = score.length;
    }

}

