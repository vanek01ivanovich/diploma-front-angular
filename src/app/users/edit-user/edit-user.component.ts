import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user.service';
import { User } from '../../model/user';
import {FormBuilder, FormControl, Validators} from '@angular/forms';
import { Location } from "@angular/common";
import Swal from "sweetalert2";

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  form: any;
  user: User;
  idParam: any;
  updateUserForm;

  constructor(
    private route: ActivatedRoute,
    private service: UserService,
    private formBuilder: FormBuilder,
    private location: Location
  ) {
    this.updateUserForm = this.formBuilder.group({
      email: new FormControl('', [Validators.required]),
      name: new FormControl('', [Validators.required]),
      surname:new FormControl('', [Validators.required]),
      role: new FormControl('',[Validators.required]),
      enabled: new FormControl('', [Validators.required])
    });
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(value => {
      this.idParam = value.get("id");
    })
    this.getUserById(this.idParam);
  }

  getUserById(id: any): void {
    this.service.getUserById(id).subscribe(user => this.user = user);
  }

  onSubmit(customerData: any) {
    console.log(customerData.enabled);
    this.user.id = this.idParam;
    this.user.email = customerData.email;
    this.user.name = customerData.name;
    this.user.surname = customerData.surname;
    this.user.role = customerData.role;
    if(customerData.enabled == "activate") {
      this.user.enabled = true;
    }else if(customerData.enabled == "deactivate") {
      this.user.enabled = false;
    }
    this.service.updateUser(this.user).subscribe(ress => {
      Swal.fire({icon: 'success',
        title: 'Ok',
        text: 'updated successfully!'
      }).then((result) => {
        this.location.back();
      });
    }, error => {
      Swal.fire({
        icon: "error",
        title: "error"
      })
    });
  }
}
