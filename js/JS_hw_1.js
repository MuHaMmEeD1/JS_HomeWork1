//1. İstifadəçidən adını soruşun və cavab olaraq ona "Salam, [adı]!" çap edin.

// let name = prompt("Adinizi daxil edin: ");
// console.log("salam: ", name);

//2. İstifadəçidən doğum ilini soruşun, onun yaşını hesablayın və nəticəni çap edin. Cari il
//kodda sabit olaraq qeyd edin.

// let userDate = prompt("Teveludunuzu qeyd edin: ");
// let date = new Date();
// console.log(date.getFullYear() - userDate);

//3. İstifadəçidən kvadratın bir tərəfinin uzunluğunu soruşun və bu kvadratın perimetrini çap
//edin.

// let uzunluq = prompt("uzunluqu daxil edin: ");
// console.log("Perimetir: ", uzunluq * uzunluq);

//4. İstifadəçidən bir dairənin radiusunu soruşun və bu dairənin sahəsini çap edin.

// var radius = prompt("Radius daxil edin: ");  // muellim men riaziyyatdan yaxsi deyilem 4 cu taskda internetden komek aldim
// var sahe = Math.PI * Math.pow(radius, 2);
// console.log("sahesi:", sahe);

//5. İstifadəçidən iki şəhər arasındakı məsafəni kilometr cinsində və hansısa saatda çatmaq
//istədiyini soruşun. Vaxtında çatmaq üçün lazım olan sürəti hesablayın.

// let mesafe = prompt("km qeyd edin: ");
// let vaxt = prompt("saat qeyd edin: ");

// console.log("saatda :>> ", mesafe / vaxt, "suretinde");

//6. Valyuta çeviri10ci tətbiq edin. İstifadəçi dollarları daxil edir, proqram onları avrolara çevirir.
//Valyuta məzənnəsini bir sabitdə saxlayın.10

// let dollar = prompt("dollar daxil edin: ");

// let ero = dollar * 0.93;
// console.log("Ero: ", ero);

//7. İstifadəçi flash sürücünün həcmi GB olaraq göstərir. Proqram 820 MB ölçüsündəki
//faylların neçəsinin flash sürücünə sığacağını hesablayır.   // muellim tam basa dusmedim

// let file = prompt("file olcusu daxil edin: ");
// console.log("Bu Qeder Vaxda: ", file / 820);

//8. İstifadəçi cüzdanındakı pul miqdarını və bir cokoladka qiymətini daxil edir. Proqram
//istifadəçinin neçə cokoladka ala biləcəyini və onun əlində qalan qalan pul miqdarını çap edir.

// let pul = prompt("pul miqdarini daxil edin: ");
// let cokletPrice = prompt("coklet qimetini daxil dein: ");
// console.log("cokolet sayi: ", (pul / cokletPrice) | 0);

//9. İstifadəçidən üç rəqəmli bir ədəd soruşun və onu tərsinə çevirin. Həll etmək üçün%
//operatorundan istifadə etməyiniz tələb olunur (bölmənin qalığı).

// let num = prompt("3 regemli eded daxil edin: ");
// let tersNum = ((num / 100) | 0) + ((num / 10) % 10 | 0) * 10 + (num % 10) * 100;
// console.log(tersNum);

//10. İstifadəçidən bir tam ədəd soruşun və cavab olaraq onun cüt ədəd olub olmadığını çap
//edin. Tapşırıqda mantıq operatorlarını istifadə edin. Şərt operatorları if və ya switch istifadə
//etməyiniz tələb olunur.

// let num = prompt("tam eded daxil edin: ");

// if (num % 2 == 0) {
//   console.log("cut");
// } else {
//   console.log("tek");
// }
