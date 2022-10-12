import { Component, OnInit } from '@angular/core';
import { ITile } from 'src/app/interfaces/tile';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {
  tiles:ITile[]=[
    {text:'Liste Films TMDB',col:1,row:1,color:'#ffcce7',link:'/movies'},
    {text:'Liste MUSIC',col:1,row:1,color:'#daf2dc',link:'/music'},
    {text:'Home',col:1,row:1,color:'#81b7d2',link:'/home'},
    {text:'Home',col:1,row:1,color:'#4d5198',link:'/home'}
  ]
  constructor() { }

  ngOnInit(): void {
/* console.log(this.tiles[0].link);
 */
  }

}
