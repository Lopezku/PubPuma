const video = document.getElementById("video");
const img = document.getElementById("image");
const img1 = document.getElementById("image1");
/*Animation de la flèche du bas*/
let animBottom2 = setInterval(() => {
  img.src = "./assets/medias/home1.png";
}, 2000);
let animBottom = setInterval(() => {
  img.src = "./assets/medias/home1_animBottom.png";
}, 3000);
/*lancement vidéo*/
setTimeout(() => {
  video.play();
}, 2000);
/*fin de la vidéo*/
setTimeout(() => {
  video.classList.add("video_anim");
  video.style.height = "0px";
  clearInterval(animBottom);
  clearInterval(animBottom2);
}, 22000);
/*transition vidéo à l'image fixe du deo*/
setTimeout(() => {
  img1.style.display = "block";
  img.style.display = "none";
}, 22500);
setTimeout(() => {
  img1.src = "./assets/medias/home3.png";
}, 24000);
setTimeout(() => {
  img1.src = "./assets/medias/home4.svg";
}, 25000);
/*Transition vers autre image du deo en noir avec pumas*/
setTimeout(() => {
  img1.src = "./assets/medias/laurier_puma.png";
}, 28000);
setTimeout(() => {
  img1.src = "./assets/medias/laurier_puma_dark.png";
}, 32000);
setTimeout(() => {
  img1.src = "./assets/medias/laurier_puma_light.png";
}, 34000);
