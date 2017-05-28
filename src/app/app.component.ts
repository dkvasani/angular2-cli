import { Component } from '@angular/core';
import { Title }     from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  public constructor(private router: Router, private titleService: Title ) { }

  ngOnInit() {
    
  this.router.events
    .subscribe((event) => {
      console.log(event);
      var title = this.titleService.getTitle();
      console.log(title + "dk");
      this.titleService.setTitle('My awesome app');
    });
}
  
}
