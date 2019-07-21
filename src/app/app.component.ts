import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './Services/authenticationService/authentication.service';
import { Router, NavigationStart } from '@angular/router';
import { FormControl } from '@angular/forms';
import { SearchService } from './Services/searchService/search.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  private showSearch: boolean;
  private searchText: string;
  queryField: FormControl = new FormControl();
  constructor(
    public auth: AuthenticationService,
    private router: Router,
    private searchService: SearchService
  ) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        if (event.url.includes('dashboard')) {
          this.showSearch = true;
        } else {
          this.showSearch = false;
        }
      }
    });
  }

  ngOnInit() {
    this.queryField.valueChanges
      .subscribe(result => {
        this.searchService.sendMessage(result);
      });
  }
  title = 'limehome-frontend';
}
