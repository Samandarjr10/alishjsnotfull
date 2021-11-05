var ticket = 500;
var hotel = 250;
var meseum = 120;
var userdollar = 10690.01;
var useryevro = 11900.06;

ticket = Math.round(ticket * userdollar);
hotel = Math.round(hotel * userdollar);
meseum = Math.round(meseum * useryevro);

var totalmoney = ticket + hotel + meseum;

var userPrize = prompt("Alisher,how much money do you have");
var userSoums = "Your soums: ";

if ((totalmoney <= (ticket + hotel + meseum + userPrize)) == (totalmoney <= userPrize )) {
    var ucerGift = "Oq yo’l, Alisher!";
    alert("1$" + " " + "-" +  " " + userdollar + " so'm" + "\n" + "1yevro" + " " + "-" +  " " + useryevro + " so'm" + "\n" + "Total: " + totalmoney +  " so'm" + "\n" + userSoums + userPrize + " so'm" + "\n" + ucerGift);
    console.log(ucerGift);
} else {
    var userPath = "Alisher, ozgina sabr qilish kerak bo’lar ekan";
    alert("1$" + " " + "-" +  " " + userdollar + " so'm" + "\n" + "1yevro" + " " + "-" +  " " + useryevro + " so'm" + "\n" + "Total: " + totalmoney +  " so'm" + "\n" + userSoums + userPrize + " so'm" + "\n" +userPath);
    console.log(userPath);
}
