import {Component, ViewChild} from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {

    @ViewChild('currentTodoItem', {static: false}) currentTodoItem;

    public todos = [
        {
            label: 'Buy milk',
            isDone: false,
        },
        {
            label: 'Buy cheese',
            isDone: false,
        },
        {
            label: 'Buy bread',
            isDone: false,
        },
    ];

    addTodo() {
        this.todos.push({
            label: this.currentTodoItem.nativeElement.value,
            isDone: false,
        });
    }

    markDone(item) {
        item.isDone = !item.isDone;
    }
}
