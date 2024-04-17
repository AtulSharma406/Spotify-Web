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
  var follow= document.getElementById('follow');
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
      songImage.src='atif aslam/dekhte dekhte song.webp';
      ctrlicon.classList.add("fa-pause");
      ctrlicon.classList.remove("fa-play");
      img1.style.display='block';
      img1.src='atif aslam/dekhte dekhte song.webp';
       h1.style.display='block';
       h1.innerHTML="Dekhte Dekhte By Atif Aslam";
       img2.style.display='block';
       img2.src='atif aslam/atif aslam.jpeg';
       h4.style.display="block";
       h4.innerHTML="Atif Aslam";
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
      songImage.src='atif aslam/paniyon sa.jpg';
      ctrlicon.classList.add("fa-pause");
      ctrlicon.classList.remove("fa-play");
      img1.style.display='block';
      img1.src='atif aslam/paniyon sa.jpg';
       h1.style.display='block';
       h1.innerHTML=" Paniyon Sa";
       img2.style.display='block';
       img2.src='atif aslam/atif aslam.jpeg';
       h4.style.display="block";
       h4.innerHTML="Atif Aslam";
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
      songImage.src='atif aslam/oo saathi.jpg';
      ctrlicon.classList.add("fa-pause");
      ctrlicon.classList.remove("fa-play");
      img1.style.display='block';
      img1.src='atif aslam/oo saathi.jpg';
       h1.style.display='block';
       h1.innerHTML="Oo saathi";
       img2.style.display='block';
       img2.src='atif aslam/atif aslam.jpeg';
       h4.style.display="block";
       h4.innerHTML="Atif Aslam";
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
      songImage.src='atif aslam/dil meri na sune.jpg';
      ctrlicon.classList.add("fa-pause");
      ctrlicon.classList.remove("fa-play");
      img1.style.display='block';
      img1.src='atif aslam/dil meri na sune.jpg';
       h1.style.display='block';
       h1.innerHTML="Dil meri na sune";
       img2.style.display='block';
       img2.src='atif aslam/atif aslam.jpeg';
       h4.style.display="block";
       h4.innerHTML="Arijit Singh";
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
      songImage.src='atif aslam/tere sang yaara.jpg';
      ctrlicon.classList.add("fa-pause");
      ctrlicon.classList.remove("fa-play");
      img1.style.display='block';
      img1.src='atif aslam/tere sang yaara.jpg';
       h1.style.display='block';
       h1.innerHTML= "Tere Sang Yaara";
       img2.style.display='block';
       img2.src='atif aslam/atif aslam.jpeg';
       h4.style.display="block";
       h4.innerHTML="Atif Aslam";
       follow.style.display="block";
      
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
      songImage.src='atif aslam/Tu jaane na.jpg';
      ctrlicon.classList.add("fa-pause");
      ctrlicon.classList.remove("fa-play");
      img1.style.display='block';
      img1.src='atif aslam/Tu jaane na.jpg';
       h1.style.display='block';
       h1.innerHTML="  Tu jaane na";
       img2.style.display='block';
       img2.src='atif aslam/atif aslam.jpeg';
       h4.style.display="block";
       h4.innerHTML="Atif Aslam";
       follow.style.display="block";
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
        songImage.src='atif aslam/jeene laga hoon.jpg';
        ctrlicon.classList.add("fa-pause");
        ctrlicon.classList.remove("fa-play");
        img1.style.display='block';
      img1.src='atif aslam/jeene laga hoon.jpg';
       h1.style.display='block';
       h1.innerHTML="Jeene Laga Hoon";
       img2.style.display='block';
       img2.src='atif aslam/atif aslam.jpeg';
       h4.style.display="block";
       h4.innerHTML="Atif Aslam";
       follow.style.display="block";
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
      img2.style.display='none';
      h4.style.display="none";
      follow.style.display="none";
      }
    }
