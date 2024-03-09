import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";
import {Location} from "@angular/common";
import {ToastService} from "../toast.service";

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  constructor(
    private location: Location,
    private toastService: ToastService) {
  }

  handleCreate() {
    this.toastService.show({body: "La El usuario ha sido registrado exitosamente"}, {classname: 'text-bg-success'});
    this.location.back();
  }
}
