import { Component, Input, OnInit } from '@angular/core';
import { ICard } from 'src/app/interfaces/card';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() title: any;
  @Input() original_title: any;
  @Input() date: any;
  @Input() description: any;
  @Input() image: any;
  @Input() blockUrl: any;
  @Input() id: any;
  matCardHeader:any;
  matCardContent:any;
  matCardTitle:any;
  matCardSubtitle:any;
  cards: ICard[] = [
    {
      height: '500px',
      width: '400px',
      background: '#4d5198',
      border_radius:'10px',
      mat_card_header: { width: '100%',height: '70px', text: '',background:'' },
      mat_card_content: { width: '100%', background: '' },
      mat_card_subtitle: {  background: '',text:'' },
      mat_card_title: {  background: '',text:'' }
    }

  ]
  constructor() { }
  ngOnInit(): void {
    this.dateExists()

    this.matCardHeader = this.cards.map((e)=>{
      return e.mat_card_header
     })
     this.matCardContent = this.cards.map((e)=>{
      return e.mat_card_content
     })
     this.matCardTitle = this.cards.map((e)=>{
      return e.mat_card_title
     })
     this.matCardSubtitle = this.cards.map((e)=>{
      return e.mat_card_subtitle
     })


  }
  // Fonction Check si date est truthy ==> si falsy ('', undefined etc.) on retourne false : no display
  // ?? ne peut être utilisé ici
  dateExists() {
    return this.date || false
  }
}
