function conseilVetements(){
    const temperature= prompt("entrer la température actuelle:");
    const pluie=  prompt("est ce qu'il pleut ou non?");



    if (pluie === "oui" && temperature <=20 ){
        alert ("vous devriez porter des vetement d'hiver et un parapluie")
    }else if (temperature <= 20 && pluie ==="non"){
        alert("vous devriez porter seulement des vetement d'hiver")  ;
    }else {
        alert("vous devriez porter des vetement d'été");
    }
}


conseilVetements();