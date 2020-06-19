import { Component, OnInit } from '@angular/core';
import {Meta, Title} from "@angular/platform-browser";
import {ActivatedRoute, Router} from "@angular/router";
import {BasePageComponent} from "../../../../../shared/base-page.component";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {HttpClient} from "@angular/common/http";
import {LoginService} from "../login.service";
import {Md5} from 'ts-md5'

@Component({
  selector: 'admin-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent extends BasePageComponent implements OnInit {
  validateForm: FormGroup;
  constructor(
    metaService: Meta,
    titleService: Title,
    activatedRoute: ActivatedRoute,
    router: Router,
    private fb: FormBuilder,
    private http: HttpClient,
    private LoginService: LoginService
  ) {
    super(metaService, titleService, activatedRoute, router)
  }

  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
    const username = this.validateForm.controls.username.value;
    const password = this.validateForm.controls.password.value;
    if (username && password) {
      this.LoginService.login({ username, password: Md5.hashStr(password) })
    }
  }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      username: [null, [Validators.required]],
      password: [null, [Validators.required]]
    });
  }

}
