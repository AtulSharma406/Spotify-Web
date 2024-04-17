let songImage=document.getElementById("songImage");
let ctrlicon=document.getElementById("ctrlicon");
let progress=document.getElementById('progress'); 
 let songInformation=document.getElementById('songinformation');
 let middlePortion=document.getElementById('middle-portion1');
 let rightPortion=document.getElementById('right-portion');
 var img1=document.getElementById('img1');
 var img2=document.getElementById('img2');
  var h1= document.getElementById('h1');
  var h4= document.getElementById('h4');
   var cross=document.getElementById("cross");
    cross.addEventListener('click',()=>{
      rightPortion.style.display='none';
       middlePortion.style.width="1340px";
    });

let audios=[
  document.getElementById('audio1'),
  document.getElementById('audio2'),
  document.getElementById('audio3'),
  document.getElementById('audio4'),
  document.getElementById('audio5'),
]

let audio1= document.getElementById("audio1");
function PlayPause1() {
    if (audio1.paused) {
      audio1.play();
      songImage.style.display="block";
      songImage.src='Shreya Ghoshal Images/samjahawan.jpeg';
      ctrlicon.classList.add("fa-pause");
      ctrlicon.classList.remove("fa-play"); 
      img1.style.display='block';
      img1.src='Shreya Ghoshal Images/samjahawan.jpeg';
       h1.style.display='block';
       h1.innerHTML="Samjhawan";
       img2.style.display='block';
       img2.src='Shreya Ghoshal Images/shreya ghoshal.webp';
       h4.style.display="block";
       h4.innerHTML="Shreya Ghoshal";
       follow.style.display="block";
     
  
    } else {
      audio1.pause();
      ctrlicon.classList.remove("fa-pause");
      ctrlicon.classList.add("fa-play");
      img1.style.display='none';
      h1.style.display='none';
      img2.style.display='none';
      h4.style.display="none";
      follow.style.display="none";
    }
  }

    
    

let audio2= document.getElementById("audio2");
function PlayPause2() {
    if (audio2.paused) {
      audio2.play();
      songImage.style.display="block";
      songImage.src='Shreya Ghoshal Images/manwa laaage.webp';
      ctrlicon.classList.add("fa-pause");
      ctrlicon.classList.remove("fa-play");
      img1.style.display='block';
      img1.src='Shreya Ghoshal Images/manwa laaage.webp';
       h1.style.display='block';
       h1.innerHTML="Manwa Laage";
       img2.style.display='block';
       img2.src='Shreya Ghoshal Images/shreya ghoshal.webp';
       h4.style.display="block";
       h4.innerHTML="Shreya Ghoshal";
       follow.style.display="block";
    } else {
      audio2.pause();
      ctrlicon.classList.remove("fa-pause");
      ctrlicon.classList.add("fa-play");
      img1.style.display='none';
      h1.style.display='none';
      img2.style.display='none';
      h4.style.display="none";
      follow.style.display="block";
    }
  }
      
  
let audio3= document.getElementById("audio3");
function PlayPause3() {
    if (audio3.paused) {
      audio3.play();
      songImage.style.display="block";
      songImage.src='Shreya Ghoshal Images/sun  raha ha.jpeg';
      ctrlicon.classList.add("fa-pause");
      ctrlicon.classList.remove("fa-play");
      img1.style.display='block';
      img1.src='Shreya Ghoshal Images/sun  raha ha.jpeg';
       h1.style.display='block';
       h1.innerHTML="Sun Raha ha ";
       img2.style.display='block';
       img2.src='Shreya Ghoshal Images/shreya ghoshal.webp';
       h4.style.display="block";
       h4.innerHTML="Shreya Ghoshal";
       follow.style.display="block";

    } else {
    audio3.pause();
    ctrlicon.classList.remove("fa-pause");
    ctrlicon.classList.add("fa-play");
    img1.style.display='none';
    h1.style.display='none';
    img2.style.display='none';
    h4.style.display="none";
    follow.style.display="none";
    }
  }
      
  
let audio4= document.getElementById("audio4");
function PlayPause4() {
    if (audio4.paused) {
      audio4.play();
      songImage.style.display="block";
      songImage.src='Shreya Ghoshal Images/pal.jpeg';
      ctrlicon.classList.add("fa-pause");
      ctrlicon.classList.remove("fa-play");
      img1.style.display='block';
      img1.src='Shreya Ghoshal Images/pal.jpeg';
       h1.style.display='block';
       h1.innerHTML=" Pal BY Shreya Ghoshal";
       img2.style.display='block';
       img2.src='Shreya Ghoshal Images/shreya ghoshal.webp';
       h4.style.display="block";
       h4.innerHTML="Shreya Ghoshal";
       follow.style.display="block";
     
    } else {
      audio4.pause();
      ctrlicon.classList.remove("fa-pause");
      ctrlicon.classList.add("fa-play");
      songImage.style.display="none";
      img1.style.display='none';
      h1.style.display='none';
      img2.style.display='none';
      h4.style.display="none";
      follow.style.display="none";
    }
  }
      
  
let audio5= document.getElementById("audio5");
function PlayPause5() {
    if (audio5.paused) {
      audio5.play();
      songImage.style.display="block";
      songImage.src='Shreya Ghoshal Images/agar tum mil ajo.jpeg';
      ctrlicon.classList.add("fa-pause");
      ctrlicon.classList.remove("fa-play");
      img1.style.display='block';
      img1.src='Shreya Ghoshal Images/agar tum mil ajo.jpeg';
       h1.style.display='block';
       h1.innerHTML="Agar tum mil jao";
       img2.style.display='block';
       img2.src='Shreya Ghoshal Images/shreya ghoshal.webp';
       h4.style.display="block";
       h4.innerHTML="Shreya Ghoshal";
       follow.style.display="block";
    } else {
      audio5.pause();
      ctrlicon.classList.remove("fa-pause");
      ctrlicon.classList.add("fa-play");
      img1.style.display='none';
      h1.style.display='none';
      img2.style.display='none';
      h4.style.display="none";
      follow.style.display="none";
    
    }
  }
  let audio6= document.getElementById("audio6");
function PlayPause6() {
    if (audio6.paused) {
      audio6.play();
      songImage.style.display="block";
      songImage.src='ArijitSingh Image/chaleya.webp';
      img1.style.display='block';
      img1.src='Shreya Ghoshal Images/samjahawan.jpeg';
       h1.style.display='block';
       h1.innerHTML="Samjhawan By Arijit Singh";
       follow.style.display="block";
    } else {
      audio6.pause();
      img1.style.display='none';
      h1.style.display='none';
      img2.style.display='none';
      h4.style.display="none";
      follow.style.display="none";
    }
  }

      
      
    


