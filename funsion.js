
function main_month(){

    let date = new Date();
    let month = date.getMonth();

    if(month == 0){ //jan
        return 31;
    }else if(month == 1){ //fev
        return 28;
    }else if(month == 2){  //mar
        return 31;
    }else if(month == 3){  //april
        return 30;
    }else if(month == 4){  // mey
        return 31;
    }else if(month == 5){  // june
        return 30;
    }else if(month == 6){  // july
        return 31;
    }else if(month == 7){  // agust
        return 31;
    }else if(month == 8){  // sep
        return 30;
    }else if(month == 9){  // oct
        return 31;
    }else if(month == 10){  // nov
        return 30;
    }else if(month == 11){  // dec
        return 31;
    }

}