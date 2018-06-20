/**
 * Kaffemaskinen står i korridoren (global scope)
 */
let kaffemaskin = true;

function rumEmelie() {
/**
   * Kaffemaskinen kan också står i rummet. Vi har nu två
   * variabler som heter 'kaffemaskin' och kan samexistera
   * Om vi skulle vilja flytta just den här kaffemaskinen 
   * ut ur rummet så skulle vi behöva returna värdet från funktionen.
   */
  let kaffemaskin = true;
  /**
   * Om vi vill flytta kaffemaskinen ut från rummet så måste
   * vi returnera den från rummet. Detta kommer enbart ske
   * när vi kallar på funktionen och inte innan. Vi beskriver
   * vad som skulle hända om vi skulle behöva få tag i kaffemaskinen
   * som står i rummet. Men vi har ännu inte gjort det. Detta händer
   * enbart längre ner när vi kallar på funktionen.
   */
  return kaffemaskin;
}

/**
 * När vi kallar på rum2 så har vi möjligheten att skicka med ett
 * eller flera värden in i rummet via parametrar. Om vi skulle
 * kalla på funktionen utan att skicka med kaffemaskinen in genom
 * dörren så skulle det inte finnas någon kaffemaskin i rum2. Här
 * beskriver vi enbart vad som skulle göras om nu någon flyttade in
 * kaffemaskinen i rummet, d.v.s. skriva ut den i console.
 */
function rum2(kaffemaskin) {
  console.log(kaffemaskin);
}

/**
 * Om vi nu måste flytta ut kaffemaskinen från rummet så kan
 * vi kalla på funktionen som flyttar ut kaffemaskinen. När vi 
 * returnerar något från en funktion så måste vi spara det som 
 * returneras i en variabel, annars kommer värdet enbart att
 * försvinna, dock så står det redan en kaffemaskin i korridoren
 * (global scope), så om vi döper denna kaffemaskin till samma
 * sak så kommer den gamla skrivas över. Så vi skapar en ny variabel
 * med ett annat namn
 */
let kaffemaskin2 = rumEmelie();

/**
 * Om vi nu vill skicka in en kaffemaskin i ett annat rum måste vi
 * skicka med kaffemaskinen som ett argument (innanför paranteserna)
 * Det vi gör här är att kopiera kaffemaskinen som står i korridoren
 * in i rum2.
 */
rum2(kaffemaskin);
