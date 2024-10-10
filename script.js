// JavaScript implementerer en simpel billed-slideshow med navigationskontroller og thumbnails.
let slideIndex = 1;
showSlides(slideIndex); // Initialiseringen af 'slideIndex': holder styr på den aktuelle slide, der vises. Den initialiseres til 1, hvilket betyder, at den første slide vises ved opstart.

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n); // Funktioner til at navigere mellem slides: Denne funktion ændrer 'slideIndex' med værdien 'n' (f.eks. +1 for næste slide eller -1 for tidligere slide) og kalder showSlides for at opdatere visningen.
} 

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n); // currentSlide(n): Denne funktion sætter 'slideIndex' direkte til en bestemt værdi 'n', hvilket gør det muligt at springe til en specifik slide.
}

// JavaScript til dots under billed-slideshow
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides"); // 'slides': En samling af alle elementer med klassen "mySlides", som indeholder billederne i slideshowet.
  let dots = document.getElementsByClassName("dot"); // 'dots': En samling af elementer med klassen "dot", som repræsenterer thumbnails eller indikatorer for de forskellige slides.
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length} //Disse betingelser sikrer, at hvis brugeren prøver at navigere uden for grænserne af antallet af slides, så vil slideshowet "wrappe rundt". Hvis 'n' er større end antallet af slides, sættes 'slideIndex' til 1 (første slide). Hvis 'n' er mindre end 1, sættes det til det sidste slide.
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", ""); // Her skjules alle slides ved at sætte deres display-stil til "none". Tilsvarende fjernes "active" klassen fra alle dots, så ingen er markeret.
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active"; // Den aktuelle slide vises ved at ændre dens display-stil til "block", og den tilsvarende dot får klassen "active" for at indikere, at den er aktiv.
}
// Koden skaber en interaktiv billed-slideshow, hvor brugeren kan navigere mellem billederne ved hjælp af knapper eller thumbnails. Den håndterer også grænsetilfælde for navigation, så brugeren ikke kan gå uden for antallet af billeder. Dette er en nyttig funktionalitet for mange webapplikationer og hjemmesider, der ønsker at præsentere billeder på en engagerende måde.

//----------------------------------------------
// JavaScript til Prikkerne med "Læs mere"-knap
function myFunction() {
  var dots = document.getElementById("dots"); // 'dots': Denne variabel refererer til et HTML-element med id'et "dots". Dette element bruges ofte til at vise ellipser. Det kan være en del af en tekst, der er skjult.
  var moreText = document.getElementById("more"); // 'moreText': Denne variabel refererer til et HTML-element med id'et "more". Dette element indeholder typisk den ekstra tekst, der skal vises, når brugeren klikker på knappen.
  var btnText = document.getElementsByClassName("myBtn"); // 'btnText': Denne variabel refererer til et HTML-element med id'et "myBtn". Dette element er knappen, der bruges til at skifte mellem at vise og skjule teksten.

  if (dots.style.display === "none") {
    dots.style.display = "inline"; // Sættes 'dots.style.display' til "inline", hvilket gør det synligt.
    btnText.innerHTML = " Læs mere"; // Knappen ændres til at vise teksten "Læs mere".
    moreText.style.display = "none"; // 'moreText' sættes til at være skjult ved at ændre dens display til "none".
  } else {
    dots.style.display = "none";  // Sættes 'dots.style.display' til "none", hvilket skjuler det.
    btnText.innerHTML = " Læs mindre"; // Knappen ændres til at vise teksten "Læs mindre".
    moreText.style.display = "inline"; // 'moreText' sættes til at være synligt ved at ændre dens display til "inline".
  }
}
// Denne funktion anvendes i en webapplikation, hvor der ønsker at give brugerne mulighed for at se mere eller mindre tekst uden at skulle navigere væk fra siden. Det forbedrer brugeroplevelsen ved at holde indholdet kompakt og let tilgængeligt.