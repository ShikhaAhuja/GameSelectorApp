import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  GamesArray: any[];
  selectedGame: string;
  players: any[];
  showList: boolean;
  constructor() {
        this.GamesArray = [
          {
            ImageSrc: 'https://wallscover.com/images/need-for-speed-2.jpg',
            GameName: 'Need For Speed',
            PlayersList: ['Michael', 'Haether', 'Eliana']
          },
          {
            ImageSrc: 'https://i.ytimg.com/vi/o_3fgFpL3Pk/maxresdefault.jpg',
            GameName: 'Counter Strike',
            PlayersList: ['Alex', 'Jim', 'Diana']
          },
          {
            ImageSrc: 'https://www.instant-gaming.com/images/products/186/271x377/186.jpg',
            GameName: 'Grand Theft Auto',
            PlayersList: ['Daniel', 'Hass', 'Mrugank']
          },

        ];
  }
}
