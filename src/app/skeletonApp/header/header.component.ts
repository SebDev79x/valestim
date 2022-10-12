import { Component, OnInit } from '@angular/core';
import { LoaderService } from 'src/app/global-services/loader/loader.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  constructor(public loaderService: LoaderService) { }

  ngOnInit(): void {

  }

}
