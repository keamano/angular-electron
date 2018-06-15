import { Component, OnInit } from '@angular/core';

interface Message {
  from:string;
  text: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  // messages = [1, 2, 3, 4, 5];
  messages: Message[] = [
    { from: 'test1', text: 'ありがとうございました。' },
    { from: 'test2', text: 'あああああああああああああああああああああああああ' },
    { from: 'test3', text: 'いいいいいいいいいいいいいいいい' },
    { from: 'test4', text: 'ううううううう' },
    // { from: 'test5', text: 'えええええええええええええええええええええええええええええええええええええええええ' },
    // { from: 'test6', text: 'おおおおおおおおおおおおおおおお' },
    // { from: 'test1', text: 'ありがとうございました。' },
  ];

  constructor() { }

  ngOnInit() {
  }

}
