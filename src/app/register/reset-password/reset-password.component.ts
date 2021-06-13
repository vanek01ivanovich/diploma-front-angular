import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import Swal from 'sweetalert2';
import { FormBuilder, FormGroup,
  Validators,
  ValidatorFn , AbstractControl,
  FormControl,
  FormsModule} from '@angular/forms';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  token: string;

  resetPasswordForm;

  constructor(private service: UserService,
              private router: Router,
              private route: ActivatedRoute,
              private formBuilder: FormBuilder) {
    this.resetPasswordForm = this.formBuilder.group({
      password: ['', [Validators.required, Validators.pattern('^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{8,30}')]],
      passwordRepeat: ['', Validators.required]
    }, {validator: this.checkPasswords});
  }

  checkPasswords(group: FormGroup) {
    const pass = group.get('password')!.value;
    const confirmPass = group.get('passwordRepeat')!.value;

    return pass === confirmPass ? null : { notSame: true };
  }


  ngOnInit(): void {
    this.token = 'Bearer' + this.route.snapshot.paramMap.get('token');
  }

  onSubmit(customerData: any): void {
    const pass = btoa(customerData.password);
    this.service.resetPassword(this.token, pass);
    Swal.fire({icon: 'success',
      title: 'ok',
      text: 'Password changed successfully!'});
    this.router.navigate(['/login']);
  }

}
