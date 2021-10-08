import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {

  constructor(public userservice:UserService) { }
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
  addAddress(f:NgForm)
  {
    // get userid here who logged in

      console.log(f.value);
     this.userservice.register(f.value).subscribe((res)=>{
      console.log(res);
      alert('Address added successfully');
    },(err)=>{
      console.log(err);
    })
  }

}
