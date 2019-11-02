import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public todos = [];
  
  public title='';
  public body='';
  
  constructor(private httpClient: HttpClient){
    
  }

  ngOnInit(){
    // We retrieve a list of todos and map them to a property of the class (to be visualized in the template)
    this.httpClient.get('https://jsonplaceholder.typicode.com/todos').subscribe((result: any)=>{
      this.todos = result;
    });
  }

  onSubmit(){
    // Submit the post title and body to the backend
    this.httpClient.post('https://jsonplaceholder.typicode.com/todos', {
      title: this.title,
      body: this.body,
      userId: 1
    }).subscribe((result: any)=>{
      
    });

    // REST API essential attributes:
    // HTTP verb: GET, POST, PUT, DELETE, etc
    // URL: http://google.com/api/users
    // QUERY PARAMS: http://google.com/api/users?page=2&only_active_users=1
    // BODY PARAMS: payload (can contain parameters or a binary file)
  }

}
