import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user.service';
import { User } from '../../model/user';
import Swal from 'sweetalert2';
import { FormBuilder, FormGroup,
  Validators,
  ValidatorFn , AbstractControl,
  FormControl,
  FormsModule} from '@angular/forms';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  user: User;
  settingsUserForm: any;
  reset = '';

  constructor(private service: UserService,
              private route: ActivatedRoute,
              private formBuilder: FormBuilder, ) {
    this.settingsUserForm = this.formBuilder.group({
      name: [''],
      surname: ['']
    });
  }

  getUser(){
    this.service.getUserSettings().then(user => this.user = user);
  }
  ngOnInit(): void {
    this.getUser();
  }
  onSubmit(customerData: any){
    if (this.settingsUserForm.controls.name.dirty){
      this.user.name = customerData.name;
    }
    if (this.settingsUserForm.controls.surname.dirty){

      this.user.surname = customerData.surname;
    }
    this.service.updateUserSettings(this.user);
    Swal.fire({icon: 'success',
      title: 'ok',
      text: 'Data changed successfully!'});
  }

  resetPassword(): void {
    this.reset = 'true';
  }

}
