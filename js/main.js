
// Napisz funkcję, która przyjmuje jako parametry dwie liczby, które przekażesz podczas 
//wywoływania funkcji.
// Funkcja ma dodawać, odejmować i mnożyć liczby przekazane do parametrów 
//i wyświetlać w konsoli następujące stringi:
// 1. "Wynik dodawania wynosi x"
// 2. "Wynik odejmowania wynosi x"
// 3. "Wynik mnożenia wynosi x"
// Gdzie x jest wynikiem danego działania.
// Natomiast jeżeli wynikiem jest liczba ujemna, w konsoli powinien pojawić się string:
// "Wynik jest nieprawidłowy"

let a = -2; 
let b = 25;


function myFunction1(a, b) {
    let strM = "Wynik jest nieprawidłowy"

    let pWynik1 = (a+b)
    if (pWynik1 < 0)
         console.log("DODAWANIE: ", strM)
    else
        console.log("Wynik dodawania wynosi: ", pWynik1);


    let pWynik2 = (a-b)
    if (pWynik2 < 0 )
        console.log("ODEJMOWANIE: ", strM)   
    else
        console.log("Wynik odejmowania wynosi: ", pWynik2);

    let pWynik3 = (a*b)
    if (pWynik3 < 0)
        console.log("MNOŻENIE: ", strM)   
    else
        console.log("Wynik mnożenia wynosi: ", pWynik3);

}

myFunction1(a, b)

