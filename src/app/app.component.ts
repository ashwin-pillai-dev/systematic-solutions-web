import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['../assets/css/style.css','../assets/css/responsive.css','../assets/css/default.css','../assets/css/slick.css','../assets/css/animate.min.css','../assets/css/magnific-popup.css','../assets/css/fontawesome-all.min.css','../assets/css/mb.YTPlayer.min.css']
})
export class AppComponent {
  title = 'systematic-solutions';
  constructor(private router: Router) { }

}
