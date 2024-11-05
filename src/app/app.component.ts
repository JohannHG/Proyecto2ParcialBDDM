import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages =[
    {title: 'Form Builder', url:'/formbuilder', icon:'heart'},
  ];
  constructor(private router: Router) {}
  ngOnInit() {
    this.router.navigate(['/formbuilder']);
}
}