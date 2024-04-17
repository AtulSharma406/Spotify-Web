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
       /*Audio1*/

let audio1= document.getElementById("audio1");
function PlayPause1() {
    if(audio1.paused) {
        audio1.play();
        songImage.style.display="block";
        songImage.src='yo yo images/dope shope.jpg';
        ctrlicon.classList.add("fa-pause");
        ctrlicon.classList.remove("fa-play");
        img1.style.display='block';
        img1.src='yo yo images/dope shope.jpg';
         h1.style.display='block';
         h1.innerHTML= "Dope Shope";
         img2.style.display='block';
         img2.src='yo yo images/yoyohoneysingh.webp';
         h4.style.display="block";
         h4.innerHTML="Yo Yo Honey Singh";
         follow.style.display="block";
       

     
 
    } else {
      audio1.pause();
      ctrlicon.classList.remove("fa-pause");
      ctrlicon.classList.add("fa-play");
      img1.style.display='none';
      h1.style.display='none';
      songImage.style.display="none";
      img2.style.display='none';
      h4.style.display="none";
      follow.style.display="none";
     
    }
  }

       /*Audio2*/


let audio2= document.getElementById("audio2");
function PlayPause2() {
    if (audio2.paused) {
      audio2.play();
      songImage.style.display="block";
      songImage.src='yo yo images/brown rang.jpeg';
      ctrlicon.classList.add("fa-pause");
      ctrlicon.classList.remove("fa-play");
      img1.style.display='block';
      img1.src='yo yo images/brown rang.jpeg';
       h1.style.display='block';
       h1.innerHTML="Brown rang";
       img2.style.display='block';
       img2.src='yo yo images/yoyohoneysingh.webp';
       h4.style.display="block";
       h4.innerHTML="Yo Yo Honey SIngh";
       follow.style.display="block";
  

    } else {
      audio2.pause();
      ctrlicon.classList.remove("fa-pause");
      ctrlicon.classList.add("fa-play");
      img1.style.display='none';
      h1.style.display='none';
      songImage.style.display="none";
      img2.style.display='none';
      h4.style.display="none";
      follow.style.display="none";
    }
        
  }
/*Audio3*/
  
let audio3= document.getElementById("audio3");
function PlayPause3() {
    if (audio3.paused) {
      audio3.play();
      songImage.style.display="block";
      songImage.src='yo yo images/anrezi beat.jpeg';
      ctrlicon.classList.add("fa-pause");
      ctrlicon.classList.remove("fa-play");
      img1.style.display='block';
      img1.src='yo yo images/anrezi beat.jpeg';
       h1.style.display='block';
       h1.innerHTML="Angrezi Beat";
       img2.style.display='block';
       img2.src='yo yo images/yoyohoneysingh.webp';
       h4.style.display="block";
       h4.innerHTML="Yo Yo honey singh";
       follow.style.display="block";
    } else {
    audio3.pause();
    
    ctrlicon.classList.remove("fa-pause");
    ctrlicon.classList.add("fa-play");
    img1.style.display='none';
      h1.style.display='none';
      songImage.style.display="none";
      img2.style.display='none';
      h4.style.display="none";
      follow.style.display="none";
    }
  }

      /*Audio4*/
  
let audio4= document.getElementById("audio4");
function PlayPause4() {
    if (audio4.paused) {
      audio4.play();
      songImage.style.display="block";
      songImage.src='yo yo images/high heels images.webp';
      ctrlicon.classList.add("fa-pause");
      ctrlicon.classList.remove("fa-play");
      img1.style.display='block';
      img1.src='yo yo images/high heels images.webp';
       h1.style.display='block';
       h1.innerHTML="High heels";
       img2.style.display='block';
       img2.src='yo yo images/yoyohoneysingh.webp';
       h4.style.display="block";
       h4.innerHTML=" Yo Yo honey Singh";
       follow.style.display="block";
      
     
    } else {
      audio4.pause();
      ctrlicon.classList.remove("fa-pause");
      ctrlicon.classList.add("fa-play");
      img1.style.display='none';
      h1.style.display='none';
      songImage.style.display="none";
      img2.style.display='none';
      h4.style.display="none";
      follow.style.display="none";
      
    }
  }

      
      /*Audio5*/
  
let audio5= document.getElementById("audio5");
function PlayPause5() {
    if (audio5.paused) {
      audio5.play();
      songImage.style.display="block";
      songImage.src='yo yo images/dope shope.jpg';
      ctrlicon.classList.add("fa-pause");
      ctrlicon.classList.remove("fa-play");
      img1.style.display='block';
      img1.src='yo yo images/dope shope.jpg';
       h1.style.display='block';
       h1.innerHTML= "Dope Shope By Yo Yo Honey Singh";
       img2.style.display='block';
       img2.src='yo yo images/yoyohoneysingh.webp';
       h4.style.display="block";
       h4.innerHTML="Yo Yo Honey Singh";
       follow.style.display="none";
      
    }
    else {
      audio5.pause();
      
      ctrlicon.classList.remove("fa-pause");
      ctrlicon.classList.add("fa-play");
      img1.style.display='none';
      h1.style.display='none';
      songImage.style.display="none";
      img2.style.display='none';
      h4.style.display="none";
      follow.style.display="none";
    }
  }
   
 /*Audio6*/
      
  let audio6= document.getElementById("audio6");
function PlayPause6() {
    if (audio6.paused) {
      audio6.play();
      songImage.style.display="block";
      songImage.src='ArijitSingh Image/chaleya.webp';
      ctrlicon.classList.add("fa-pause");
      ctrlicon.classList.remove("fa-play");
      img1.style.display='block';
      img1.src='ArijitSingh Image/chaleya.webp';
       h1.style.display='block';
       h1.innerHTML=" Chaleya By Arijit Singh";
       img2.style.display='block';
       img2.src='ArijitSingh Image/arijit singh.jpeg';
       h4.style.display="block";
       h4.innerHTML="Arijit Singh";
       follow.style.display="none";
    } else {
      audio6.pause();
      ctrlicon.classList.remove("fa-pause");
      ctrlicon.classList.add("fa-play");
      img1.style.display='none';
      h1.style.display='none';
      songImage.style.display="none";
      img2.style.display='none';
      h4.style.display="none";
      follow.style.display="none";
    }
  }

  /*Audio7*/
  let audio7= document.getElementById("audio7");
  function PlayPause7() {
      if (audio7.paused) {
        audio7.play();
        songImage.style.display="block";
        songImage.src='ArijitSingh Image/ae dil ha mushkil image.jpg';
        ctrlicon.classList.add("fa-pause");
        ctrlicon.classList.remove("fa-play");
        img1.style.display='block';
      img1.src='ArijitSingh Image/ae dil ha mushkil image.jpg';
       h1.style.display='block';
       h1.innerHTML=" Ae dil ha mushkil";
       img2.style.display='block';
       img2.src='ArijitSingh Image/arijit singh.jpeg';
       h4.style.display="block";
       h4.innerHTML="Arijit Singh";
       follow.style.display="none";
      } else {
        audio7.pause();
        ctrlicon.classList.remove("fa-pause");
        ctrlicon.classList.add("fa-play");
        img1.style.display='none';
      h1.style.display='none';
      songImage.style.display="none";
      img2.style.display='block';
      img2.src='ArijitSingh Image/arijit singh.jpeg';
      h4.style.display="block";
      h4.innerHTML="Arijit Singh";
      img2.style.display='none';
      h4.style.display="none";
      follow.style.display="none";
      }
    }

    
