import { Component } from '@angular/core';

@Component({
  selector: 'app-top-rated-songs',
  templateUrl: './top-rated-songs.component.html',
  styleUrl: './top-rated-songs.component.css'
})
export class TopRatedSongsComponent {

  topRatedSongs:any = [
    {
      "id": 1,
      "title": "Moment of Inspiration",
      "artist": "pinkzebra",
      "url": "https://www.wonderplugin.com/wp-content/uploads/2014/03/In-the-Moment-of-Inspiration.mp3",
      "imageUrl": "https://c.saavncdn.com/947/But-I-m-a-Bad-Liar-English-2019-20190228162210-500x500.jpg"
    },
    {
      "id": 2,
      "title": "Faded",
      "artist": "Alan Walker",
      "url": "https://samplesongs.netlify.app/Faded.mp3",
      "imageUrl": "https://upload.wikimedia.org/wikipedia/en/d/da/Alan_Walker_-_Faded.png"
    },
    {
      "id": 3,
      "title": "Bad Liars",
      "artist": "Imagine Dragons",
      "url": "https://samplesongs.netlify.app/Bad%20Liar.mp3",
      "imageUrl": "https://c.saavncdn.com/947/But-I-m-a-Bad-Liar-English-2019-20190228162210-500x500.jpg"
    },
    {
      "id": 4,
      "title": "Solo",
      "artist": "Clean Bandit",
      "url": "https://samplesongs.netlify.app/Solo.mp3",
      "imageUrl": "https://images-na.ssl-images-amazon.com/images/I/810GyyWObmL._SL1400_.jpg"
    },
    {
      "id": 5,
      "title": "Without Me",
      "artist": "Halsey",
      "url": "https://samplesongs.netlify.app/Without%20Me.mp3",
      "imageUrl": "https://ecsmedia.pl/c/the-eminem-show-b-iext125252742.jpg"
    }
  ]



}
