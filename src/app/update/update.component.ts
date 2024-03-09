import {Component} from '@angular/core';
import {RouterLink} from "@angular/router";
import {Location} from "@angular/common";
import {ToastService} from "../toast.service";

@Component({
  selector: 'app-update',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './update.component.html',
  styleUrl: './update.component.css'
})
export class UpdateComponent {
  constructor(
    private location: Location,
    private toastService: ToastService) {
  }

  handleUpdate() {
    this.toastService.show({body: "La cita ha sido modificada exitosamente"}, {classname: 'text-bg-success'});
    this.location.back();
  }
}
