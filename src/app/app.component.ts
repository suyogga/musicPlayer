import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  
  constructor() { }

  ngOnInit(): void {
    // const list = document.querySelectorAll(".navigation li");

    // const activeLink = function () {
    //   list.forEach((item: any) => {
    //     item.classList.remove("hovered");
    //   });
    //   this.classList.add("hovered");
    // };

    // list.forEach((item: any) => item.addEventListener("mouseover", activeLink));

    // const toggle = document.querySelector(".toggle");
    // const navigation = document.querySelector(".navigation");
    // const main = document.querySelector(".main");

    // toggle.onclick = function () {
    //   navigation.classList.toggle("active");
    //   main.classList.toggle("active");
    // };
  }
}
