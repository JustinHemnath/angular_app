import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrl: './text-input.component.css',
})
export class TextInputComponent implements OnInit {
  @Input() randomText: string;
  text: string = '';

  ngOnInit() {
    console.log(this.randomText);
  }

  // setText(event: any) {
  //   this.text = event.target.value;
  // }

  setText(event: any) {
    this.getText(event.target.value);
  }

  getText(value: string) {
    this.text = value;
  }
}
