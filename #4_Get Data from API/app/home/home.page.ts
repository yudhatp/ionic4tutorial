import { Component } from '@angular/core';
import { ApiService } from './../api.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  datauser: any;
  constructor(
    public api: ApiService
  ) {}

  ngOnInit() {
	  this.getDataUser();
  }
  
  async getDataUser() {
    await this.api.getDataUser()
      .subscribe(res => {
        console.log(res);
        this.datauser = res.results;
		console.log(this.datauser);
      }, err => {
        console.log(err);
      });
  }
}
