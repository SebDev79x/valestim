import { Component, Input, OnInit } from '@angular/core';
import { ICard } from 'src/app/interfaces/card';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() title: any;
  @Input() date: any;
  @Input() description: any;
  @Input() image: any;
  @Input() blockUrl: any;
  matCardHeader:any;
  cards: ICard[] = [
    {
      height: '400px',
      width: '300px',
      background: '#4d5198',
      border:'2px solid black',
      border_radius:'10px',
      mat_card_header: { height: '30px', width: '100%', text: '',background:'' }/* ,
      mat_card_title { height: '100px', width: '100px', text: '' },
      mat_card_subtitle: { height: '100px', width: '100px', text: '' },
      mat_card_content: { height: '100px', width: '100px', text: '' } */
    }

  ]
  constructor() { }
  ngOnInit(): void {
    this.dateExists()
    this.matCardHeader = this.cards.map((e)=>{
      return e.mat_card_header
     })


  }
  // Fonction Check si date est truthy ==> si falsy ('', undefined etc.) on retourne false : no display
  // ?? ne peut être utilisé ici
  dateExists() {
    return this.date || false
  }
}
