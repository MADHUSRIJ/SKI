import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../navbar.service';

@Component({
  selector: 'app-authetication',
  templateUrl: './authetication.component.html',
  styleUrls: ['./authetication.component.css']
})
export class AutheticationComponent implements OnInit {

  constructor(public nav : NavbarService) { }

  ngOnInit(): void {
    this.nav.hide();
  }

}
