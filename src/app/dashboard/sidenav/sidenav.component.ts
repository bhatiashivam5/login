import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  constructor(  public userservice:UserService ) { }
  id:any;
  userdata:any
  userinfo:any=[]


  ngOnInit(): void {
    this.id=this.userservice.getuserId();

    this.userservice.display(this.id).subscribe((res)=>{
      this.userdata=res;
      this.userinfo=this.userdata.data;
      console.log(this.userinfo);
  })

}
}
