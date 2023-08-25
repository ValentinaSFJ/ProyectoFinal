
/* video */ 
let video=document.querySelector('video');
let playBoton = document.getElementById("play");
let pauseBoton= document.getElementById("pause");
let transcurrido = document.getElementById('transcurrido')
let duracion = document.getElementById('duracion')


video.addEventListener("loadedmetadata", function() {
    rellenarTiempos(); // Llamar a la función una vez que el video haya cargado metadatos
  });

function rellenarTiempos() {
    transcurrido.innerHTML = formatTime(video.currentTime)
    duracion.innerHTML = formatTime(video.duration)
}


playBoton.addEventListener('click',()=>{
    video.play()
    setInterval(() => {
        const tiempotranscurrido = formatTime(video.currentTime)
        transcurrido.innerHTML= `${tiempotranscurrido}`
    }, 500);

});

pauseBoton.addEventListener('click',()=>{
    video.pause();
    clearInterval()
    flag=false;
});

function formatTime(timeInSeconds) {
    const hours = Math.floor(timeInSeconds / 3600);
    const minutes = Math.floor((timeInSeconds % 3600) / 60);
    const seconds = Math.floor(timeInSeconds % 60);
  
    if (hours > 0) {
      return `${hours}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    } else {
      return `${minutes}:${String(seconds).padStart(2, '0')}`;
    }
  }
