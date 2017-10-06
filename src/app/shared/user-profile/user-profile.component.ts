import { Component, OnInit } from '@angular/core';

import { UserDataService, UserData } from '../../core/user-data.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html'
})
export class UserProfileComponent implements OnInit {
  userData: UserData;

  constructor(private userDataService: UserDataService) { }

  ngOnInit() {
    this.userDataService.currentUserData.subscribe(userData => this.userData = userData);
  }
}
