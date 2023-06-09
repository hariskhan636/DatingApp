import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AccountService } from '../_services/account.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  @Input() usersFromHome: any; //recieve from parent
  @Output() cancelRegister = new EventEmitter(); //send data to parent
  model: any = {};

  constructor(
    private accountService: AccountService,
    private toastr: ToastrService
  ) {}

  ngOnInit() {}

  register() {
    this.accountService.register(this.model).subscribe({
      next: (res) => {
        console.log(res), this.cancel();
      },
      error: (err) => {
        console.log(err), this.toastr.error(err.error);
      },
    });
  }

  cancel() {
    this.cancelRegister.emit(false);
  }
}
