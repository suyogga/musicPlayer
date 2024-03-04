import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Howl } from 'howler';
import { SongService } from '../../services/song.service';
import { ActivatedRoute, Route } from '@angular/router';

@Component({
  selector: 'app-music-player',
  templateUrl: './music-player.component.html',
  styleUrls: ['./music-player.component.scss'],
})
export class MusicPlayerComponent  implements OnInit {

  songs: any[] = [];
  currentIndex: number = 0;
  duration = 0;
  currentTime = 0;
  progress = 0;
  currentlyPlaying: any;
  volume = 0.99; // Default volume
  isLiked: boolean[] = []; // Array to track liked status of songs

  data : any = [
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
  ];

  constructor(private http: HttpClient, private songService: SongService, private route: ActivatedRoute) { }

  ngOnInit(): void {


    const id = this.route.snapshot.paramMap.get('id');

    console.log(id);

    // this.songService.getSongs().subscribe(songs => {
    //   console.log(songs);
      
    //   this.songs = songs;
    //   // Initialize the liked status for each song
    //   this.isLiked = new Array(this.songs.length).fill(false);
      
    //   this.loadSong();
    // });

    this.songService.getSignleSongs(id).subscribe(songs => {
      console.log(songs);
      
      // this.songs = songs;

      this.songs.push(songs)
      // Initialize the liked status for each song
      this.isLiked = new Array(this.songs.length).fill(false);
      
      this.loadSong();
    });
  }

  loadSong() {
    const song = this.songs[this.currentIndex];
    if (this.currentlyPlaying) {
      this.currentlyPlaying.stop(); // Stop the currently playing song
    }
    this.currentlyPlaying = new Howl({
      src: [song.url],
      autoplay: true, // Set autoplay to true
      volume: this.volume, // Set initial volume
      onplay: () => {
        console.log('Playing', song.title);
        setInterval(() => {
          this.currentTime = this.currentlyPlaying?.seek() ?? 0; // Update the current playback time
          this.progress = (this.currentTime / this.duration) * 100; // Update the progress percentage
        }, 1000); // Update every second
      },
      onend: () => {
        console.log('Finished playing', song.title);
        this.playNext(); // Automatically play the next song when the current song ends
      }
    });

    // Create an audio element to preload the duration
    const audioElement = new Audio(song.url);
    audioElement.addEventListener('loadedmetadata', () => {
      this.duration = audioElement.duration; // Update the duration of the current song
      console.log('Duration:', this.duration);
    });

    this.currentlyPlaying.play(); // Play the song
  }

  

  seekTo(event: any) {
    const value = event.target.value;
    if (this.currentlyPlaying) {
      const newPosition = parseFloat(value) * (this.duration || 1) / 100; // Add a default duration value to avoid division by zero
      this.currentlyPlaying.seek(newPosition);
    }
  }

  setVolume(event: any) {
    const value = event.target.value;
    this.volume = parseFloat(value) / 100;
    if (this.currentlyPlaying) {
      this.currentlyPlaying.volume(this.volume);
    }
  }

  playAudio() {
    if (this.currentlyPlaying && !this.currentlyPlaying.playing()) {
      this.currentlyPlaying.play(); // Play the audio if currently paused or stopped
    } else if (this.currentlyPlaying) {
      this.currentlyPlaying.pause(); // Pause the audio if currently playing
    }
  }

  playNext() {
    this.currentIndex = (this.currentIndex + 1) % this.songs.length;
    this.triggerSlideAnimation();
  }

  playPrevious() {
    this.currentIndex = (this.currentIndex - 1 + this.songs.length) % this.songs.length;
    this.triggerSlideAnimation();
  }

  toggleLike(index: number) {
    this.isLiked[index] = !this.isLiked[index];
    // You can add logic to update the backend with liked status if required
  }
  
  addToPlaylist() {
    // Implement the functionality to add the current song to the playlist
    console.log("Song added to playlist!");
}


  private triggerSlideAnimation() {
    // Add a small delay to allow the animation to reset
    setTimeout(() => {
      const trackArt = document.querySelector('.track-art');
      if (trackArt) {
        trackArt.classList.add('animate');
        setTimeout(() => {
          trackArt.classList.remove('animate');
          this.loadSong();
        }, 500); // Duration of the animation
      }
    }, 100); // Delay before starting the animation
  }

  formatTime(time: number): string {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`; // Format time as mm:ss
  }

  toggleNavigation(){
    // console.log("toggle Clicked");
    
    let toggle = document.querySelector(".toggle");
    let navigation = document.querySelector(".navigation");
    let main = document.querySelector(".main");

    navigation.classList.toggle("active");
    main.classList.toggle("active");
  }

}
