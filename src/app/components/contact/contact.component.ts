import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";

@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.css"],
})
export class ContactComponent implements OnInit {
  constructor() {}
  contactForm = new FormGroup({
    name: new FormControl(""),
    email: new FormControl(""),
    company: new FormControl(""),
    phone: new FormControl(""),
    comments: new FormControl(""),
  });

  ngOnInit(): void {}
}
