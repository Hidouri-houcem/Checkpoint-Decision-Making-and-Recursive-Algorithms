function ticketPrice() {
    const age = prompt("Veuillez entrer votre âge:");
    let price = 0;
    if (age <=12){
        price = 10;
    }else if(age >=13 && age<=17 ){
        price = 15;
    }else if (age >=18){
        price = 20;
    }


    alert('Le prix de votre ticket est ' + price );
}


ticketPrice();