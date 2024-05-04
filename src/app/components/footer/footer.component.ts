import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent implements OnInit {
  year: number = 2024;

  ngOnInit(): void {
    const currentDate = new Date();
    this.year = currentDate.getFullYear();
  }
}
