import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  public toasts: any[] = [];

  public show(content: any = {}, options: any = {}):void {
    this.toasts.push({content, options})
  }

  public remove(toast:any):void {
    this.toasts = this.toasts.filter((t) => t !== toast);
  }

  public clear():void {
    this.toasts.splice(0, this.toasts.length);
  }

}
