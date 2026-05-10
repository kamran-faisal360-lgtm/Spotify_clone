const tracksData = [
            { id:1,title:"Blinding Lights",artist:"The Weeknd", cover:"https://picsum.photos/id/107/200/200",
             audioUrl:"https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",  type:"trending" },
            { id:2,title:"Flowers",artist:"Miley Cyrus",  cover:"https://picsum.photos/id/100/200/200", 
            audioUrl:"https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",  type:"trending" },
            { id:3,title:"As It Was", artist:"Harry Styles", cover:"https://picsum.photos/id/155/200/200", 
            audioUrl:"https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",  type:"trending" },
            { id:4,title:"Cruel Summer", artist:"Taylor Swift", cover:"https://picsum.photos/id/169/200/200",
             audioUrl:"https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3",  type:"trending" },
            { id:5,title:"Viva La Vida", artist:"Coldplay", cover:"https://picsum.photos/id/90/200/200", 
             audioUrl:"https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3",  type:"trending" },

            { id:6,title:"Anti-Hero",artist:"Taylor Swift",cover:"https://picsum.photos/id/26/200/200", 
             audioUrl:"https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3",  type:"trending" },
            { id:7,title:"STAY", artist:"The Kid LAROI",cover:"https://picsum.photos/id/20/200/200",  
            audioUrl:"https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3",  type:"trending" },
            { id:8,title:"Midnight Rain",  artist:"Taylor Swift",  cover:"https://picsum.photos/id/137/200/200", 
            audioUrl:"https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3",  type:"album" },
            { id:9,title:"Unholy",artist:"Sam Smith",         cover:"https://picsum.photos/id/113/200/200",
             audioUrl:"https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3",  type:"album" },
            { id:10,title:"Ghost", artist:"Justin Bieber",cover:"https://picsum.photos/id/99/200/200", 
             audioUrl:"https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3", type:"album" },

            { id:11,title:"Espresso", artist:"Sabrina Carpenter", cover:"https://picsum.photos/id/145/200/200", 
            audioUrl:"https://www.soundhelix.com/examples/mp3/SoundHelix-Song-11.mp3", type:"album" },
            { id:12,title:"One Of The Girls", artist:"The Weeknd",cover:"https://picsum.photos/id/132/200/200", 
            audioUrl:"https://www.soundhelix.com/examples/mp3/SoundHelix-Song-12.mp3", type:"album" },
            { id:13,title:"Lovin On Me", artist:"Jack Harlow",  cover:"https://picsum.photos/id/41/200/200", 
             audioUrl:"https://www.soundhelix.com/examples/mp3/SoundHelix-Song-13.mp3", type:"album" },
            { id:14,title:"What Was I Made For", artist:"Billie Eilish", cover:"https://picsum.photos/id/44/200/200", 
             audioUrl:"https://www.soundhelix.com/examples/mp3/SoundHelix-Song-14.mp3", type:"album" },
            { id:15,title:"Future Nostalgia", artist:"Dua Lipa", cover:"https://picsum.photos/id/29/200/200", 
             audioUrl:"https://www.soundhelix.com/examples/mp3/SoundHelix-Song-15.mp3", type:"album" },
             
            { id:16,title:"Greedy",  artist:"Tate McRae", cover:"https://picsum.photos/id/1/200/200",
               audioUrl:"https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",  type:"single" },
            { id:17,title:"Vampire",  artist:"Olivia Rodrigo",cover:"https://picsum.photos/id/15/200/200", 
             audioUrl:"https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",  type:"single" },
            { id:18,title:"Snooze", artist:"SZA",cover:"https://picsum.photos/id/22/200/200", 
             audioUrl:"https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",  type:"single" },
            { id:19,title:"Paint The Town Red",  artist:"Doja Cat",cover:"https://picsum.photos/id/77/200/200", 
             audioUrl:"https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3",  type:"single" },
            { id:20, title:"Yes, And?",  artist:"Ariana Grande", cover:"https://picsum.photos/id/42/200/200",
              audioUrl:"https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3",  type:"single" },
            { id:21,title:"Houdini",  artist:"Dua Lipa", cover:"https://picsum.photos/id/121/200/200",
             audioUrl:"https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3",  type:"single" },
            { id:22,title:"Water",  artist:"Tyla",cover:"https://picsum.photos/id/104/200/200", 
            audioUrl:"https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3",  type:"single" },
        ];

        const artistsData = [
            { name:"Taylor Swift",   followers:"98M", cover:"https://picsum.photos/id/20/170/170" },
            { name:"The Weeknd",     followers:"85M", cover:"https://picsum.photos/id/27/170/170" },
            { name:"Bad Bunny",      followers:"72M", cover:"https://picsum.photos/id/30/170/170" },
            { name:"Drake",          followers:"68M", cover:"https://picsum.photos/id/96/170/170" },
            { name:"Ariana Grande",  followers:"62M", cover:"https://picsum.photos/id/91/170/170" },
            { name:"Olivia Rodrigo", followers:"55M", cover:"https://picsum.photos/id/64/170/170" },
            { name:"Doja Cat",       followers:"51M", cover:"https://picsum.photos/id/82/170/170" },
            { name:"Sam Smith",      followers:"47M", cover:"https://picsum.photos/id/49/170/170" },
            { name:"Justin Bieber",  followers:"45M", cover:"https://picsum.photos/id/58/170/170" },
            { name:"Dua Lipa",       followers:"43M", cover:"https://picsum.photos/id/74/170/170" },
        ];

        const audio           = new Audio();
        let currentTrackIndex = 0;
        let isPlaying         = false;
        let isShuffle         = false;
        let repeatMode        = 0;
        let isMuted           = false;
        let likedTracks       = new Set();
        let playHistory       = [];

        const playerCover    = document.getElementById('playerCover');
        const playerTitle    = document.getElementById('playerTitle');
        const playerArtist   = document.getElementById('playerArtist');
        const playPauseBtn   = document.getElementById('playPauseBtn');
        const playIcon       = document.getElementById('playIcon');
        const prevBtn        = document.getElementById('prevBtn');
        const nextBtn        = document.getElementById('nextBtn');
        const shuffleBtn     = document.getElementById('shuffleBtn');
        const repeatBtn      = document.getElementById('repeatBtn');
        const heartBtn       = document.getElementById('heartBtn');
        const progressBar    = document.getElementById('progressBar');
        const progressFilled = document.getElementById('progressFilled');
        const currentTimeEl  = document.getElementById('currentTime');
        const totalTimeEl    = document.getElementById('totalTime');
        const volumeSlider   = document.getElementById('volumeSlider');
        const muteBtn        = document.getElementById('muteBtn');
        const toast          = document.getElementById('toast');
        const searchInput    = document.getElementById('searchInput');

        function createMusicCard(track, index) {
            const card = document.createElement('div');
            card.className = 'music-card';
            card.dataset.index = index;
            card.innerHTML = `
                <img src="${track.cover}" alt="${track.title}" loading="lazy">
                <button class="card-play-btn" title="Play ${track.title}">
                    <i class="fa-solid fa-play"></i>
                </button>
                <h4>${track.title}</h4>
                <p>${track.artist}</p>
            `;
            card.addEventListener('click', () => loadAndPlay(index));
            return card;
        }

        function createArtistCard(artist) {
            const card = document.createElement('div');
            card.className = 'music-card artist-card';
            card.innerHTML = `
                <img src="${artist.cover}" alt="${artist.name}" loading="lazy">
                <h4>${artist.name}</h4>
                <p>${artist.followers} monthly listeners</p>
            `;
            card.addEventListener('click', () => showToast(`🎵 Showing artist: ${artist.name}`));
            return card;
        }

        function renderAll() {
            const trendingRow = document.getElementById('trendingRow');
            const artistsRow  = document.getElementById('artistsRow');
            const albumsRow   = document.getElementById('albumsRow');
            const singlesRow  = document.getElementById('singlesRow');

            tracksData.forEach((track, i) => {
                const card = createMusicCard(track, i);
                if (track.type === 'trending')    trendingRow.appendChild(card);
                else if (track.type === 'album')  albumsRow.appendChild(card);
                else if (track.type === 'single') singlesRow.appendChild(card);
            });

            artistsData.forEach(artist => artistsRow.appendChild(createArtistCard(artist)));
        }

        function formatTime(secs) {
            if (isNaN(secs)) return '0:00';
            const m = Math.floor(secs / 60);
            const s = Math.floor(secs % 60).toString().padStart(2, '0');
            return `${m}:${s}`;
        }

        function loadTrack(index) {
            const track = tracksData[index];
            if (!track) return;

            currentTrackIndex = index;
            audio.src = track.audioUrl;
            audio.volume = parseFloat(volumeSlider.value);
            audio.load();

            playerTitle.textContent  = track.title;
            playerArtist.textContent = track.artist;
            playerCover.src          = track.cover;

            playerCover.classList.remove('pulse');
            void playerCover.offsetWidth;
            playerCover.classList.add('pulse');

            updateHeartUI();

            document.querySelectorAll('.music-card').forEach(c => c.classList.remove('active'));
            const activeCard = document.querySelector(`.music-card[data-index="${index}"]`);
            if (activeCard) {
                activeCard.classList.add('active');
                activeCard.scrollIntoView({ behavior: 'smooth', inline: 'nearest', block: 'nearest' });
            }

            document.querySelectorAll('.card-play-btn i').forEach(i => {
                i.className = 'fa-solid fa-play';
            });
        }

        function loadAndPlay(index) {
            loadTrack(index);
            audio.play().then(() => {
                isPlaying = true;
                updatePlayUI();
            }).catch(err => console.warn('Playback error:', err));
        }

        function togglePlayPause() {
            if (!audio.src || audio.src === window.location.href) {
                loadAndPlay(0);
                return;
            }
            if (isPlaying) {
                audio.pause();
                isPlaying = false;
            } else {
                audio.play();
                isPlaying = true;
            }
            updatePlayUI();
        }

        function updatePlayUI() {
            if (isPlaying) {
                playIcon.className = 'fa-solid fa-pause';
                playPauseBtn.classList.add('playing');
                const activeCard = document.querySelector(`.music-card[data-index="${currentTrackIndex}"] .card-play-btn i`);
                if (activeCard) activeCard.className = 'fa-solid fa-pause';
            } else {
                playIcon.className = 'fa-solid fa-play';
                playPauseBtn.classList.remove('playing');
                const activeCard = document.querySelector(`.music-card[data-index="${currentTrackIndex}"] .card-play-btn i`);
                if (activeCard) activeCard.className = 'fa-solid fa-play';
            }
        }

        function nextTrack() {
            let nextIndex;
            if (isShuffle) {
                playHistory.push(currentTrackIndex);
                do { nextIndex = Math.floor(Math.random() * tracksData.length); }
                while (nextIndex === currentTrackIndex && tracksData.length > 1);
            } else {
                nextIndex = (currentTrackIndex + 1) % tracksData.length;
            }
            loadTrack(nextIndex);
            if (isPlaying) audio.play();
        }

        function prevTrack() {
            if (audio.currentTime > 3) {
                audio.currentTime = 0;
                return;
            }
            let prevIndex;
            if (isShuffle && playHistory.length > 0) {
                prevIndex = playHistory.pop();
            } else {
                prevIndex = (currentTrackIndex - 1 + tracksData.length) % tracksData.length;
            }
            loadTrack(prevIndex);
            if (isPlaying) audio.play();
        }

        audio.addEventListener('timeupdate', () => {
            if (!audio.duration) return;
            const pct = (audio.currentTime / audio.duration) * 100;
            progressFilled.style.width = pct + '%';
            currentTimeEl.textContent = formatTime(audio.currentTime);
        });

        audio.addEventListener('loadedmetadata', () => {
            totalTimeEl.textContent = formatTime(audio.duration);
        });

        audio.addEventListener('ended', () => {
            if (repeatMode === 2) {
                audio.currentTime = 0;
                audio.play();
            } else if (repeatMode === 1) {
                nextTrack();
            } else {
                if (currentTrackIndex < tracksData.length - 1) {
                    nextTrack();
                } else {
                    isPlaying = false;
                    updatePlayUI();
                }
            }
        });

        progressBar.addEventListener('click', (e) => {
            const rect = progressBar.getBoundingClientRect();
            const pct  = (e.clientX - rect.left) / rect.width;
            audio.currentTime = pct * audio.duration;
        });

        volumeSlider.addEventListener('input', () => {
            audio.volume = parseFloat(volumeSlider.value);
            isMuted = audio.volume === 0;
            updateMuteIcon();
        });

        muteBtn.addEventListener('click', () => {
            isMuted = !isMuted;
            audio.muted = isMuted;
            updateMuteIcon();
        });

        function updateMuteIcon() {
            if (isMuted || audio.volume === 0) {
                muteBtn.className = 'fa-solid fa-volume-xmark';
            } else if (audio.volume < 0.5) {
                muteBtn.className = 'fa-solid fa-volume-low';
            } else {
                muteBtn.className = 'fa-solid fa-volume-high';
            }
        }

        shuffleBtn.addEventListener('click', () => {
            isShuffle = !isShuffle;
            shuffleBtn.classList.toggle('active-mode', isShuffle);
            showToast(isShuffle ? ' Shuffle on' : 'Shuffle off');
        });

        repeatBtn.addEventListener('click', () => {
            repeatMode = (repeatMode + 1) % 3;
            repeatBtn.classList.toggle('active-mode', repeatMode > 0);
            if (repeatMode === 0) {
                repeatBtn.innerHTML = '<i class="fa-solid fa-repeat" style="font-size:20px"></i>';
                showToast('Repeat off');
            } else if (repeatMode === 1) {
                showToast(' Repeat all');
            } else {
                repeatBtn.innerHTML = '<i class="fa-solid fa-repeat" style="font-size:20px;color:#1ed760"></i><sup style="font-size:10px;color:#1ed760">1</sup>';
                showToast(' Repeat one');
            }
        });

        heartBtn.addEventListener('click', () => {
            const track = tracksData[currentTrackIndex];
            if (!track) return;
            if (likedTracks.has(track.id)) {
                likedTracks.delete(track.id);
                showToast(' Removed from Liked Songs');
            } else {
                likedTracks.add(track.id);
                showToast(' Added to Liked Songs');
            }
            updateHeartUI();
            renderSidebarLiked();
        });

        function updateHeartUI() {
            const track = tracksData[currentTrackIndex];
            if (track && likedTracks.has(track.id)) {
                heartBtn.classList.add('liked');
                heartBtn.innerHTML = '<i class="fa-solid fa-heart"></i>';
            } else {
                heartBtn.classList.remove('liked');
                heartBtn.innerHTML = '<i class="fa-regular fa-heart"></i>';
            }
        }

        function renderSidebarLiked() {
            const container = document.getElementById('sidebarPlaylists');
            container.innerHTML = '';
            if (likedTracks.size === 0) return;

            const heading = document.createElement('p');
            heading.style.cssText = 'font-size:12px;color:#b3b3b3;font-weight:700;text-transform:uppercase;letter-spacing:1px;margin-bottom:8px;';
            heading.textContent = 'Liked Songs';
            container.appendChild(heading);

            tracksData.filter(t => likedTracks.has(t.id)).forEach(track => {
                const item = document.createElement('div');
                item.className = 'playlist-item';
                item.innerHTML = `
                    <img src="${track.cover}" alt="${track.title}">
                    <div class="playlist-item-info">
                        <h5>${track.title}</h5>
                        <span>Song · ${track.artist}</span>
                    </div>
                `;
                item.addEventListener('click', () => loadAndPlay(tracksData.indexOf(track)));
                container.appendChild(item);
            });
        }

        searchInput.addEventListener('input', () => {
            const query = searchInput.value.toLowerCase().trim();
            document.querySelectorAll('.music-card:not(.artist-card)').forEach(card => {
                const title  = card.querySelector('h4').textContent.toLowerCase();
                const artist = card.querySelector('p').textContent.toLowerCase();
                card.style.display = (!query || title.includes(query) || artist.includes(query)) ? '' : 'none';
            });
        });

        let toastTimer;
        function showToast(msg) {
            toast.textContent = msg;
            toast.classList.add('show');
            clearTimeout(toastTimer);
            toastTimer = setTimeout(() => toast.classList.remove('show'), 2500);
        }

        document.addEventListener('keydown', (e) => {
            if (e.target === searchInput) return;
            if (e.code === 'Space')      { e.preventDefault(); togglePlayPause(); }
            if (e.code === 'ArrowRight') { e.preventDefault(); nextTrack(); }
            if (e.code === 'ArrowLeft')  { e.preventDefault(); prevTrack(); }
            if (e.code === 'ArrowUp')    { e.preventDefault(); volumeSlider.value = Math.min(1, +volumeSlider.value + 0.1); audio.volume = volumeSlider.value; updateMuteIcon(); }
            if (e.code === 'ArrowDown')  { e.preventDefault(); volumeSlider.value = Math.max(0, +volumeSlider.value - 0.1); audio.volume = volumeSlider.value; updateMuteIcon(); }
            if (e.code === 'KeyM')       { muteBtn.click(); }
        });

        document.getElementById('createPlaylistBtn').addEventListener('click',  () => showToast(' Playlist feature coming soon!'));
        document.getElementById('createPlaylistBtn2').addEventListener('click', () => showToast(' Playlist feature coming soon!'));

        playPauseBtn.addEventListener('click', togglePlayPause);
        nextBtn.addEventListener('click', nextTrack);
        prevBtn.addEventListener('click', prevTrack);

        renderAll();
        loadTrack(0);
        showToast('Click any song to play!');