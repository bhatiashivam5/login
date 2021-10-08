import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  model={
    confirmpassword:'',
     terms:false
 }
 form: any;
 alert:boolean = false;
  constructor( public userservice:UserService) { }

  ngOnInit(): void {
  }
  addData(f:NgForm)
  {
      console.log(f.value);
      // if(this.form.valid){
      //   console.log("Form Submitted!");
      //   this.form.reset();
      // }

     this.userservice.register(f.value).subscribe((res)=>{
      console.log(res);
      this.alert = true;
      },(err)=>{
      console.log(err);
    })
    f.resetForm();
  }

  closeAlert(){
    this.alert = false;
  }

}
