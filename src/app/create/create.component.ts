import {Component} from '@angular/core';
import {RouterLink} from "@angular/router";
import {ToastService} from "../toast.service";
import {Location} from "@angular/common";

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent {
  constructor(
    private location: Location,
    private toastService: ToastService) {
  }

  handleCreate() {
    this.toastService.show({body: "La cita ha sido creada exitosamente"}, {classname: 'text-bg-success'});
    this.location.back();
  }
}
