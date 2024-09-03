// Music and metadata
const songs = [
    {
        title: "Song 1",
        artist: "Artist 1",
        src: "songs/song1.mp3",
        cover: "images/cover1.jpg"
    },
    {
        title: "Song 2",
        artist: "Artist 2",
        src: "songs/song2.mp3",
        cover: "images/cover2.jpg"
    },
    {
        title: "Song 3",
        artist: "Artist 3",
        src: "songs/song3.mp3",
        cover: "images/cover3.jpg"
    }
];

let currentSongIndex = 0;
const audio = new Audio(songs[currentSongIndex].src);

const playPauseBtn = document.getElementById('play-pause');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const progress = document.getElementById('progress');
const volume = document.getElementById('volume');
const songTitle = document.getElementById('song-title');
const songArtist = document.getElementById('song-artist');
const coverImg = document.getElementById('cover-img');

// Load the first song
loadSong(currentSongIndex);

function loadSong(index) {
    audio.src = songs[index].src;
    songTitle.innerText = songs[index].title;
    songArtist.innerText = songs[index].artist;
    coverImg.src = songs[index].cover;
}

// Play or pause the music
playPauseBtn.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
        playPauseBtn.innerText = 'Pause';
    } else {
        audio.pause();
        playPauseBtn.innerText = 'Play';
    }
});

// Go to the next song
nextBtn.addEventListener('click', () => {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    loadSong(currentSongIndex);
    audio.play();
    playPauseBtn.innerText = 'Pause';
});

// Go to the previous song
prevBtn.addEventListener('click', () => {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    loadSong(currentSongIndex);
    audio.play();
    playPauseBtn.innerText = 'Pause';
});

// Update progress bar as the song plays
audio.addEventListener('timeupdate', () => {
    const progressPercentage = (audio.currentTime / audio.duration) * 100;
    progress.value = progressPercentage;
});

// Seek to a new time in the song
progress.addEventListener('input', () => {
    const seekTime = (progress.value / 100) * audio.duration;
    audio.currentTime = seekTime;
});

// Adjust volume
volume.addEventListener('input', () => {
    audio.volume = volume.value / 100;
});
