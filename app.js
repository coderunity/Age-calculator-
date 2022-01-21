

const select = document.getElementById('select_item');
const button = document.getElementById('button');
const result = document.getElementById('result');

const age_calculator = document.getElementById('age_calculator');


age_calculator.addEventListener('submit', function(e){

    e.preventDefault();
 
    let name = this.querySelector('input[name="name"]').value;
    let year = this.querySelector('input[name="year"]').value;



setTimeout(() => {
    
    let main_months = main_month();
    
    let birthyear = new Date();
    let currentDate = new Date(name + ' ' + year);


    let totalagesell = Math.floor(Math.abs(currentDate.getTime() - birthyear.getTime())/1000);



let total_min = Math.floor(totalagesell / 60);
let total_hours = Math.floor(total_min / 60);
let total_day = Math.floor(total_hours / 24);
let total_week = Math.floor(total_day / 7);
let total_month = Math.floor(total_day / main_months);
let total_year = Math.floor(total_month / 12);



let month = total_month - (total_year * 12);
let day = total_day - (total_year * 12 * main_months) - (month * main_months);


result.innerHTML = `

<p> Hello ${name} </p>
<p> And your : ${total_year} Year </p>
<p> And your : ${total_month} Months </p>
<p> And your : ${total_week} Week </p>
<p> And your :  ${total_day} Day</p>
<p> And your : ${total_hours} Hours </p>
<p> And your : ${total_min} Minutes</p>
<p> And your : ${totalagesell} Seconds</p>
<p> And your Status : ${select_item.value} </p>

<p> And your :  ${day} / ${month} / ${total_year} </p>


`;


},1000);



});






