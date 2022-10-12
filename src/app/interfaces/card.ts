export interface ICard {
  width: string,
  height: string,
  background: string,
  border_radius: string,
  mat_card_header: {
    width:string;

    height: string;
    text: string;
    background: string;
  },
  mat_card_content:{
    width:string;
    background:string;
  },
  mat_card_subtitle:{

    text:string;
    background:string;

  },
  mat_card_title:{

    text:string;
    background:string;

  }/*


mat_card_content:{
  height:string;
  width:string;
  text:string;
} */

}
