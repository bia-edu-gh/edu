const audios = [
    {
    title: "(001, 105 to 114)_Al-Fatiha",
    duration: "00:38",
    src: "https://res.cloudinary.com/rt-multi-services-it-digital-solutions/video/upload/fl_attachment/v1777928114/001_105_106_107_108_109_110_111_112_113_114__Al-Faatiha_Al-Fiil_Quraish_Al-Maa_uun_Al-Kawthar_Al-Kaafiruun_An-Nasr_Al-Masad_Al-Ikhlaas_Al-Falaq_An-Naas_q9zpac.mp3"
    },
    {
    title: "(002)_Al-Baqarah",
    duration: "02:15",
    src: "https://res.cloudinary.com/rt-multi-services-it-digital-solutions/video/upload/fl_attachment/v1777928092/002__Al-Baqara_xbuuvk.mp3"
    },
    {
    title: "(004)_An-Nisaa",
    duration: "02:15",
    src: "https://res.cloudinary.com/rt-multi-services-it-digital-solutions/video/upload/fl_attachment/v1777918941/004__An-Nisaa_1-10_bqvp9x.mp3"
    },
    {
    title: "(006)_Al-An'aam",
    duration: "02:15",
    src: "https://res.cloudinary.com/rt-multi-services-it-digital-solutions/video/upload/fl_attachment/v1777927600/006__Al-An_aam_n4sl3o.mp3"
    },
    {
    title: "(007)_Al-A'raaf_94-137",
    duration: "02:15",
    src: "https://res.cloudinary.com/rt-multi-services-it-digital-solutions/video/upload/fl_attachment/v1777928153/007__Al-A_raaf_94-137_izcjmk.mp3"
    },
    {
    title: "(014)_Ibrahim",
    duration: "02:15",
    src: "https://res.cloudinary.com/rt-multi-services-it-digital-solutions/video/upload/fl_attachment/v1777927131/014__Ibrahim_jb1hc8.mp3"
    },
    {
    title: "(017)_Al-Israa_22-39",
    duration: "02:15",
    src: "https://res.cloudinary.com/rt-multi-services-it-digital-solutions/video/upload/fl_attachment/v1777928147/017__Al-Israa_22-39_ssn0nf.mp3"
    },
    {
    title: "(018)_Al-Kahf_1-27",
    duration: "02:15",
    src: "https://res.cloudinary.com/rt-multi-services-it-digital-solutions/video/upload/fl_attachment/v1777927318/018__Al-Kahf_1-27_rc9sid.mp3"
    },
    {
    title: "(018)_Al-Kahf_10-18",
    duration: "02:15",
    src: "https://res.cloudinary.com/rt-multi-services-it-digital-solutions/video/upload/fl_attachment/v1777927262/018__Al-Kahf_10-18_qbequf.mp3"
    },
    {
    title: "(027)_An-Naml_54-58",
    duration: "02:15",
    src: "https://res.cloudinary.com/rt-multi-services-it-digital-solutions/video/upload/fl_attachment/v1777927304/027__An-Naml_54-58_pyz4xw.mp3"
    },
    {
    title: "(061)_As-Saff",
    duration: "02:15",
    src: "https://res.cloudinary.com/rt-multi-services-it-digital-solutions/video/upload/fl_attachment/v1777928112/061__As-Saff_xmek1w.mp3"
    },
    {
    title: "(062)_Al-Jumu'a",
    duration: "02:15",
    src: "https://res.cloudinary.com/rt-multi-services-it-digital-solutions/video/upload/fl_attachment/v1777928131/062__Al-Jumu_a_neg2xy.mp3"
    },
    {
    title: "(064)_At-Taghaabun",
    duration: "02:15",
    src: "https://res.cloudinary.com/rt-multi-services-it-digital-solutions/video/upload/fl_attachment/v1777928133/064__At-Taghaabun_h3umbt.mp3"
    },   
    {
    title: "(065)_Aṭ-Ṭalaaq",
    duration: "02:15",
    src: "https://res.cloudinary.com/rt-multi-services-it-digital-solutions/video/upload/fl_attachment/v1777928201/065__A%E1%B9%AD-%E1%B9%ACalaaq_pusqck.mp3"
    },
    {
    title: "(066)_At-Tahriim",
    duration: "02:15",
    src: "https://res.cloudinary.com/rt-multi-services-it-digital-solutions/video/upload/fl_attachment/v1777928128/066__At-Tahriim_pwqqjn.mp3"
    },
];

const container = document.getElementById("audio-list");
const audioElement = document.getElementById("audio");
const progressRange = document.getElementById("progress");
const playPauseButton = document.getElementById("playPause");
const backwardButton = document.getElementById("backward");
const forwardButton = document.getElementById("forward");
const muteButton = document.getElementById("mute");
const volumeSlider = document.getElementById("volume");
const speedSelect = document.getElementById("speed");
const speedValue = document.getElementById("speedValue");
const playerCurrent = document.getElementById("currentTime");
const playerDuration = document.getElementById("duration");

const audioObj = audioElement || new Audio();
let currentIndex = null;
let previousVolume = 1;

const applyPlaybackRate = () => {
  const rate = speedSelect ? Number(speedSelect.value) || 1 : 1;
  audioObj.defaultPlaybackRate = rate;
  audioObj.playbackRate = rate;
  if (speedValue) {
    speedValue.textContent = `${rate}x`;
  }
};

/* LOAD FAVORITES */
let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

/* RENDER */
audios.forEach((audio, index) => {
  const isFav = favorites.includes(index);

  const li = document.createElement("li");
  li.className = "collection-item audio-item";

  li.innerHTML = `
  
    <div class="audio-left">
      <div class="audio-title">${audio.title}</div>
      <div class="audio-meta">
        <i class="bi bi-hourglass"></i>
        <span class="audio-duration">${audio.duration}</span>
      </div>

      <div class="progress-bar" data-index="${index}">
        <div class="progress-fill"></div>
      </div>
    </div>

    <div class="audio-actions">
      <span class="icon-box play-btn" data-index="${index}">
        <i class="bi bi-play-fill"></i>
      </span>

      <span class="icon-box fav-btn" data-index="${index}">
        <i class="bi ${isFav ? 'bi-heart-fill' : 'bi-heart'}"></i>
      </span>

      <span class="icon-box download-btn" data-src="${audio.src}">
        <i class="bi bi-download"></i>
      </span>
    </div>
  `;

  container.appendChild(li);

  const metaAudio = new Audio();
  metaAudio.preload = 'metadata';
  metaAudio.addEventListener('loadedmetadata', () => {
    const actualDuration = formatTime(metaAudio.duration);
    audios[index].duration = actualDuration;
    const durationEl = li.querySelector('.audio-duration');
    if (durationEl) {
      durationEl.textContent = actualDuration;
    }
  });
  metaAudio.addEventListener('error', () => {
    // If metadata fails, preserve the placeholder duration.
  });
  metaAudio.src = audio.src;
  metaAudio.load();
});

/* AUDIO LOADER */
function loadAudio(index) {
  const audio = audios[index];
  if (!audio) return;

  const normalizedSrc = new URL(audio.src, window.location.href).href;
  if (currentIndex !== index || audioObj.src !== normalizedSrc) {
    applyPlaybackRate();
    audioObj.src = normalizedSrc;
    audioObj.load();
    audioObj.currentTime = 0;
    if (progressRange) progressRange.value = 0;
    currentIndex = index;
    setActiveTrack(index);
  }
}

/* PLAY FUNCTION */
function playAudio(index) {
  const numberIndex = Number(index);
  loadAudio(numberIndex);

  if (audioObj.src && !audioObj.paused && currentIndex === numberIndex) {
    audioObj.pause();
    return;
  }

  audioObj.play();
  updatePlayerUI(numberIndex);
}

function setPlayPauseIcon(isPlaying) {
  if (!playPauseButton) return;
  const icon = playPauseButton.querySelector('i');
  if (!icon) return;
  icon.className = isPlaying ? 'bi bi-pause-fill' : 'bi bi-play-fill';
}

/* UPDATE PLAYER UI */
function updatePlayerUI(index) {
  setPlayPauseIcon(true);
  setActiveTrack(index);
}

function setActiveTrack(index) {
  document.querySelectorAll('.play-btn').forEach(btn => {
    const icon = btn.querySelector('i');
    if (!icon) return;
    if (index !== null && btn.dataset.index === String(index) && !audioObj.paused) {
      icon.className = 'bi bi-pause-fill';
    } else {
      icon.className = 'bi bi-play-fill';
    }
  });
}

function formatTime(seconds) {
  if (!Number.isFinite(seconds)) return '00:00';
  const minutes = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}

function updatePlayerTime() {
  if (!playerCurrent || !playerDuration) return;
  const current = formatTime(audioObj.currentTime || 0);
  const total = formatTime(audioObj.duration || 0);
  playerCurrent.textContent = current;
  playerDuration.textContent = total;
}

function updateVolumeIcon() {
  if (!muteButton) return;
  const icon = muteButton.querySelector('i');
  if (!icon) return;

  if (audioObj.muted || audioObj.volume === 0) {
    icon.className = 'bi bi-volume-mute-fill';
  } else if (audioObj.volume <= 0.5) {
    icon.className = 'bi bi-volume-down-fill';
  } else {
    icon.className = 'bi bi-volume-up-fill';
  }
}

function prevTrack() {
  if (currentIndex === null) return;
  const prevIndex = currentIndex > 0 ? currentIndex - 1 : audios.length - 1;
  playAudio(prevIndex);
}

function nextTrack() {
  if (currentIndex === null) return;
  const nextIndex = currentIndex < audios.length - 1 ? currentIndex + 1 : 0;
  playAudio(nextIndex);
}

function toggleMute() {
  if (!audioObj.muted) {
    previousVolume = audioObj.volume > 0 ? audioObj.volume : previousVolume;
    audioObj.muted = true;
  } else {
    audioObj.muted = false;
    if (audioObj.volume === 0) {
      const restored = previousVolume || 0.5;
      audioObj.volume = restored;
      if (volumeSlider) volumeSlider.value = restored;
    }
  }

  if (audioObj.volume > 0) {
    previousVolume = audioObj.volume;
  }
  if (volumeSlider) {
    volumeSlider.value = audioObj.volume;
  }
  const volumeLabel = document.querySelector('.volume-rate');
  if (volumeLabel) {
    volumeLabel.textContent = `${Math.round(audioObj.volume * 100)}%`;
  }
  updateVolumeIcon();
}

function updateVolume(value) {
  const volumeValue = Number(value);
  if (!Number.isFinite(volumeValue)) return;

  audioObj.volume = Math.max(0, Math.min(1, volumeValue));
  audioObj.muted = audioObj.volume === 0;
  if (audioObj.volume > 0) {
    previousVolume = audioObj.volume;
  }

  const volumeLabel = document.querySelector('.volume-rate');
  if (volumeLabel) {
    volumeLabel.textContent = `${Math.round(audioObj.volume * 100)}%`;
  }
  if (volumeSlider) {
    volumeSlider.value = audioObj.volume;
  }
  updateVolumeIcon();
}

if (speedSelect) {
  speedSelect.addEventListener('change', applyPlaybackRate);
  speedSelect.addEventListener('input', applyPlaybackRate);
}

if (playPauseButton) {
  playPauseButton.addEventListener('click', () => {
    if (!audioObj.src && audios.length > 0) {
      loadAudio(0);
    }
    if (audioObj.paused) {
      audioObj.play();
    } else {
      audioObj.pause();
    }
  });
}

if (backwardButton) {
  backwardButton.addEventListener('click', () => {
    if (currentIndex === null && audios.length > 0) {
      playAudio(audios.length - 1);
      return;
    }
    prevTrack();
  });
}

if (forwardButton) {
  forwardButton.addEventListener('click', () => {
    if (currentIndex === null && audios.length > 0) {
      playAudio(0);
      return;
    }
    nextTrack();
  });
}

if (muteButton) {
  muteButton.addEventListener('click', toggleMute);
}

if (volumeSlider) {
  volumeSlider.addEventListener('input', e => updateVolume(e.target.value));
}

if (progressRange) {
  progressRange.addEventListener('input', e => {
    if (!audioObj.src && audios.length > 0) {
      loadAudio(0);
    }
    if (!audioObj.duration) return;
    audioObj.currentTime = (Number(e.target.value) / 100) * audioObj.duration;
    if (audioObj.paused) {
      audioObj.play();
    }
  });
}

if (audioObj) {
  applyPlaybackRate();
  audioObj.volume = volumeSlider ? Number(volumeSlider.value) : 1;
  previousVolume = audioObj.volume || previousVolume;
  audioObj.muted = false;
  updateVolumeIcon();
  if (volumeSlider) {
    volumeSlider.value = audioObj.volume;
  }
  const volumeLabel = document.querySelector('.volume-rate');
  if (volumeLabel) {
    volumeLabel.textContent = `${Math.round(audioObj.volume * 100)}%`;
  }
  audioObj.addEventListener('loadedmetadata', () => {
    applyPlaybackRate();
    updatePlayerTime();
  });
  audioObj.addEventListener('timeupdate', updatePlayerTime);
  audioObj.addEventListener('timeupdate', () => {
    if (progressRange && audioObj.duration) {
      progressRange.value = audioObj.duration ? (audioObj.currentTime / audioObj.duration) * 100 : 0;
    }
  });
  audioObj.addEventListener('ratechange', updatePlayerTime);
  audioObj.addEventListener('volumechange', updateVolumeIcon);
}

/* EVENTS */
document.addEventListener('click', e => {

  /* PLAY */
  if (e.target.closest('.play-btn')) {
    const index = e.target.closest('.play-btn').dataset.index;
    playAudio(index);
  }

  /* INDIVIDUAL TRACK CLICK */
  const trackItem = e.target.closest('.audio-item');
  if (trackItem && !e.target.closest('.play-btn') && !e.target.closest('.fav-btn') && !e.target.closest('.download-btn')) {
    const playBtn = trackItem.querySelector('.play-btn');
    if (playBtn) {
      playAudio(playBtn.dataset.index);
      return;
    }
  }

  /* FAVORITE */
  if (e.target.closest('.fav-btn')) {
    const btn = e.target.closest('.fav-btn');
    const index = Number(btn.dataset.index);
    const icon = btn.querySelector('i');

    if (favorites.includes(index)) {
      favorites = favorites.filter(i => i !== index);
      icon.className = 'bi bi-heart';
      icon.style.color = 'red';
    } else {
      favorites.push(index);
      icon.className = 'bi bi-heart-fill';
      icon.style.color = 'red';
    }

    localStorage.setItem('favorites', JSON.stringify(favorites));
  }

  /* DOWNLOAD */
  if (e.target.closest('.download-btn')) {
    const src = e.target.closest('.download-btn').dataset.src;
    const a = document.createElement('a');
    a.href = src;
    a.download = '';
    a.click();
  }
});

/* SYNC ICONS */
audioObj.onplay = () => {
  setPlayPauseIcon(true);
  setActiveTrack(currentIndex);
};

audioObj.onpause = () => {
  setPlayPauseIcon(false);
  setActiveTrack(null);
};

audioObj.onended = () => {
  const nextIndex = currentIndex !== null ? (currentIndex < audios.length - 1 ? currentIndex + 1 : 0) : null;
  if (nextIndex !== null) {
    playAudio(nextIndex);
  } else {
    setPlayPauseIcon(false);
    setActiveTrack(null);
  }
};

function seekAudio(bar, clientX) {
  const index = Number(bar.dataset.index);
  loadAudio(index);

  if (!audioObj.duration || audioObj.duration === Infinity) return;

  const rect = bar.getBoundingClientRect();
  const percent = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width));
  audioObj.currentTime = percent * audioObj.duration;
  setActiveTrack(index);

  if (audioObj.paused) {
    audioObj.play();
  }
}

let isSeeking = false;
let seekingBar = null;

/* PROGRESS SEEKING */
document.addEventListener('pointerdown', e => {
  const bar = e.target.closest('.progress-bar');
  if (!bar) return;
  isSeeking = true;
  seekingBar = bar;
  seekAudio(bar, e.clientX);
});

document.addEventListener('pointermove', e => {
  if (!isSeeking || !seekingBar) return;
  seekAudio(seekingBar, e.clientX);
});

document.addEventListener('pointerup', () => {
  isSeeking = false;
  seekingBar = null;
});

/* PROGRESS UPDATE */
audioObj.ontimeupdate = () => {
  if (!audioObj.duration || audioObj.duration === Infinity) return;

  const percent = (audioObj.currentTime / audioObj.duration) * 100;

  if (progressRange) {
    progressRange.value = percent;
  }

  const bars = document.querySelectorAll('.progress-bar');
  bars.forEach(bar => {
    if (bar.dataset.index == currentIndex) {
      const fill = bar.querySelector('.progress-fill');
      if (fill) {
        fill.style.width = percent + '%';
      }
    }
  });

  updatePlayerTime();
};

