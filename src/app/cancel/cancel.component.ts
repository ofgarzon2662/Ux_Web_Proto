import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {NavigationEnd, Router} from "@angular/router";
import {Location} from "@angular/common";
import {ToastService} from "../toast.service";

@Component({
  selector: 'app-cancel',
  standalone: true,
  imports: [],
  templateUrl: './cancel.component.html',
  styleUrl: './cancel.component.css'
})
export class CancelComponent implements OnInit {

  @ViewChild("modalCancel", {static: true}) modalCancel!: ElementRef;

  constructor(
    private modal: NgbModal,
    private router: Router,
    private location: Location,
    private toastService: ToastService
  ) {
  }

  ngOnInit(): void {
    this.modal.open(this.modalCancel, {backdrop: 'static', size: 'lg', centered: true, scrollable: true})
      .result.then(() => {
      this.location.back();
    });
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.modal.dismissAll();
      }
    });
  }

  handleCancel(): void {
    this.toastService.show({body: "La cita ha sido cancelada exitosamente"}, {classname: 'text-bg-success'});
    this.location.back();
  }

}
