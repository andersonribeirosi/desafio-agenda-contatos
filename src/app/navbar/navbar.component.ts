import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  sidebar: boolean;

  constructor() { }

  ngOnInit() {
  }

  open() {
    if (this.sidebar) {
      document.getElementById("mySidebar").style.display = "none";
      this.sidebar = false;
    } else {
      document.getElementById("mySidebar").style.display = "block";
      this.sidebar = true;
    }
  }

}
