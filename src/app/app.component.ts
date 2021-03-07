import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'k8s-angular-app';
  quote = 'No quote';
  quoteAuthor = 'No author';

  constructor(private http: HttpClient) {}

  getQuote() {
    this.http.get('/api/quotes/', {})
      .subscribe((data: any) => {
        this.quoteAuthor = data.author;
        this.quote = data.text;
      })
  }

}
