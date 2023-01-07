// imported all the play and pause Buttons
const playBtn = document.querySelectorAll('.play-btn');
const pauseBtn = document.querySelectorAll('.pause-btn') 

// importing all volume controllers 
const currentVolume1 = document.querySelector('#volume-1')
const currentVolume2 = document.querySelector('#volume-2')
const currentVolume3 = document.querySelector('#volume-3')
const currentVolume4 = document.querySelector('#volume-4')
const currentVolume5 = document.querySelector('#volume-5')
const currentVolume6 = document.querySelector('#volume-6')
const currentVolume7 = document.querySelector('#volume-7')
const currentVolume8 = document.querySelector('#volume-8')

// importing the all volume controllers
const currentVolume = document.querySelectorAll('.volumeBar')

// importing all the show volume 
const showVolume1 = document.querySelector('.show-volume-1')
const showVolume2 = document.querySelector('.show-volume-2')
const showVolume3 = document.querySelector('.show-volume-3')
const showVolume4 = document.querySelector('.show-volume-4')
const showVolume5 = document.querySelector('.show-volume-5')
const showVolume6 = document.querySelector('.show-volume-6')
const showVolume7 = document.querySelector('.show-volume-7')
const showVolume8 = document.querySelector('.show-volume-8')

// importing all audio tracks
const track1 = new Audio('approaching-thunderstorm-in-small-town-sound-effect-6806.mp3')
const track2 = new Audio('birds-frogs-nature-mosquito-8258.mp3')
const track3 = new Audio('crackling-fireplace-nature-sounds-8012.mp3')
const track4 = new Audio('light-rain-ambient-114354.mp3')
const track5 = new Audio('nature-soundstropicaljunglebirds-108380.mp3')
const track6 = new Audio('rain-and-thunder-16705.mp3')
const track7 = new Audio('rain-on-roof-or-window-nature-sounds-8312.mp3')
const track8 = new Audio('the-sound-of-a-stream-a-spring-stream-the-sound-of-water-109237.mp3')

// Play functionality
Array.from(playBtn).forEach((e)=>{
    e.addEventListener('click',()=>{
        if(e.classList.contains('play-btn1')){
            track1.play()
        }
        if(e.classList.contains('play-btn2')){
            track2.play()
        }
        if(e.classList.contains('play-btn3')){
            track3.play()
        }
        if(e.classList.contains('play-btn4')){
            track4.play()
        } 
        if(e.classList.contains('play-btn5')){
            track5.play()
        }
        if(e.classList.contains('play-btn6')){
            track6.play()
        }
        if(e.classList.contains('play-btn7')){
            track7.play()
        }
        if(e.classList.contains('play-btn8')){
            track8.play()
        }
    })
})

// Pause functionality
Array.from(pauseBtn).forEach((e)=>{
    e.addEventListener('click',()=>{
        if(e.classList.contains('pause-btn1')){
            track1.pause()
        }
        if(e.classList.contains('pause-btn2')){
            track2.pause()
        }
        if(e.classList.contains('pause-btn3')){
            track3.pause()
        }
        if(e.classList.contains('pause-btn4')){
            track4.pause()
        } 
        if(e.classList.contains('pause-btn5')){
            track5.pause()
        }
        if(e.classList.contains('pause-btn6')){
            track6.pause()
        }
        if(e.classList.contains('pause-btn7')){
            track7.pause()
        }
        if(e.classList.contains('pause-btn8')){
            track8.pause()
        }
    })
})

// Volume Controler's functionality
Array.from(currentVolume).forEach((e)=>{
    e.addEventListener('change',()=>{
        if(e.classList.contains('volume-bar-1')){
            changeVolume(currentVolume1,track1,showVolume1)
        }
        if(e.classList.contains('volume-bar-2')){
            changeVolume(currentVolume2,track2,showVolume3)
        }
        if(e.classList.contains('volume-bar-3')){
            changeVolume(currentVolume3,track3,showVolume3)
        }
        if(e.classList.contains('volume-bar-4')){
            changeVolume(currentVolume4,track4,showVolume4)
        }
        if(e.classList.contains('volume-bar-5')){
            changeVolume(currentVolume5,track5,showVolume5)
        }
        if(e.classList.contains('volume-bar-6')){
            changeVolume(currentVolume6,track6,showVolume6)
        }
        if(e.classList.contains('volume-bar-7')){
            changeVolume(currentVolume7,track7,showVolume7)
        }
        if(e.classList.contains('volume-bar-8')){
            changeVolume(currentVolume8,track8,showVolume8)
        }
    })
})

// Change Volume
function changeVolume(currentVolume,track,showVolume){
    track.volume = currentVolume.value/100;
    showVolume.innerText = currentVolume.value;
    console.log('changeVolume2 running')
    track.loop = true
}