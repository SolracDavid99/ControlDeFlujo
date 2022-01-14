//https://github.com/generation-org/JS/tree/master/JS-03%20-%20Control%20Flow

//Part 1: 

function businessHours(dayNumber,hourNumber){
    if(hourNumber>=9 && hourNumber<=18){
        return true;
    }else if(hourNumber>0 && hourNumber<24 ){
        return false;
    }else{
        return "Valor invalido";
    }    
}

alert(businessHours(parseFloat(prompt("Que dia es hoy?(1-7)")),parseFloat(prompt("Que hora es?(0-24)"))));


//Part 2:

function getDayNumber(janFirstDayNumber,yearDayNumber){
    var res = yearDayNumber % 7; 
    var final = (janFirstDayNumber+res)%7;
    return final;
}

alert("El dia de la semana en el que cayo fue el : " + getDayNumber(parseInt(prompt("Que dia cayo el 1ro de Enero?(0-6)")),parseInt(prompt("Que dia quieres conocer?(0-365)"))));



//Part3

function part3(yearDayNumber,hourNumber){
    var res = yearDayNumber % 7;
    
    if(res>0 && res<=5){
        if(hourNumber>=9 && hourNumber<=18){
            return true;
        }else if(hourNumber>0 && hourNumber<24 ){
            return false;
        }else{
            return "Valor invalido";
        }    
    }else{
        return false;
    }

}

alert(part3(parseInt(prompt("Que dia es hoy?(0-365)")),parseFloat(prompt("Que hora es?(0-24)"))));

