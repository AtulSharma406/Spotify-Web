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
      songImage.src='Karan aujla/adhiya image.webp';
      ctrlicon.classList.add("fa-pause");
      ctrlicon.classList.remove("fa-play");
      img1.style.display='block';
      img1.src='Karan aujla/adhiya image.webp';
       h1.style.display='block';
       h1.innerHTML="Adhiya";
       img2.style.display='block';
       img2.src='Karan aujla/karanujla.jpeg';
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
      songImage.src="Karan aujla/god damn  image.jpeg";
      ctrlicon.classList.add("fa-pause");
      ctrlicon.classList.remove("fa-play");
      img1.style.display='block';
      img1.src='Karan aujla/god damn  image.jpeg';
       h1.style.display='block';
       h1.innerHTML="God Damn";
       img2.style.display='block';
       img2.src='Karan aujla/karanujla.jpeg';
       h4.style.display="block";
       h4.innerHTML="Karan Aujla";
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
      songImage.src='Karan aujla/100 million.webp';
      ctrlicon.classList.add("fa-pause");
      ctrlicon.classList.remove("fa-play");
      img1.style.display='block';
      img1.src='Karan aujla/100 million.webp';
       h1.style.display='block';
       h1.innerHTML="!00 million";
       img2.style.display='block';
       img2.src='Karan aujla/karanujla.jpeg';
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
      songImage.src='Karan aujla/tareefan song.webp';
      ctrlicon.classList.add("fa-pause");
      ctrlicon.classList.remove("fa-play");
      img1.style.display='block';
      img1.src='Karan aujla/tareefan song.webp';
       h1.style.display='block';
       h1.innerHTML="Tareefan";
       img2.style.display='block';
       img2.src='Karan aujla/karanujla.jpeg';
       h4.style.display="block";
       h4.innerHTML=" Karan Aujla";
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
      songImage.src='Karan aujla/jee ni lagda.jpg';
      ctrlicon.classList.add("fa-pause");
      ctrlicon.classList.remove("fa-play");
      img1.style.display='block';
      img1.src='Karan aujla/jee ni lagda.jpg';
       h1.style.display='block';
       h1.innerHTML= " Jee ni ladga";
       img2.style.display='block';
       img2.src='Karan aujla/karanujla.jpeg';
       h4.style.display="block";
       h4.innerHTML=" Karan Aujla";
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
      songImage.src='Karan aujla/white brown black.webp';
      ctrlicon.classList.add("fa-pause");
      ctrlicon.classList.remove("fa-play");
      img1.style.display='block';
      img1.src='Karan aujla/white brown black.webp';
       h1.style.display='block';
       h1.innerHTML="White Brown Black";
       img2.style.display='block';
       img2.src='Karan aujla/karanujla.jpeg';
       h4.style.display="block";
       h4.innerHTML=" Karan Aujla";
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
       img2.src='Karan aujla/karanujla.jpeg';
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
