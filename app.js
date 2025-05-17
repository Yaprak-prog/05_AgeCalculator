
const btn=document.getElementById("button");
const inputbox=document.getElementById("inputbox");
inputbox.max=new Date().toISOString().split("T")[0];

const result=document.getElementById("result");

function AgeCalculate(){
 
  
    let date=new Date(inputbox.value);

    let month=date.getMonth()+1;
    let day=date.getDay();
    let year=date.getFullYear();

    //today get date

    let today=new Date()

    let t_month,t_day,t_year;

    t_month=today.getMonth()+1;
    t_day=today.getDay();
    t_year=today.getFullYear();


    //year calculate
    let age=t_year-year;

    result.innerHTML=`Your age :<span>${age}</span>`;
}