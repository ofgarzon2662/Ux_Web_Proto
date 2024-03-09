import {Component} from '@angular/core';
import {RouterLink} from "@angular/router";
import {Location} from "@angular/common";
import {ToastService} from "../toast.service";

@Component({
  selector: 'app-password-reset',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './password-reset.component.html',
  styleUrl: './password-reset.component.css'
})
export class PasswordResetComponent {
  constructor(
    private location: Location,
    private toastService: ToastService) {
  }

  handlePasswordReset() {
    this.toastService.show({body: "Si el correo electrónico esta registrado recibirá un mensaje con un enlace para reestablecer su contraseña"}, {classname: 'text-bg-success'});
    this.location.back();
  }
}
