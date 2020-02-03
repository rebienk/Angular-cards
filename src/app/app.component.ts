import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  cards = [{
    title: 'Mountain',
    imageUrl: 'assets/mountain.jpeg',
    username: 'biker1155',
    content: 'A biker on the mountains'
  },
  { title: 'Biker on the sun',
  imageUrl: 'assets/biking.jpeg',
  username: 'biker1155',
  content: 'A biker on the mountains'},
  { 
  title: 'Bomba Tree',
  imageUrl: 'assets/tree.jpeg',
  username: 'biker1155',
  content: 'A neat tree'}
  ,{ 
  title: 'Bomba Tree',
  imageUrl: 'assets/tree.jpeg',
  username: 'biker1155',
  content: 'A neat tree'}
]

}
