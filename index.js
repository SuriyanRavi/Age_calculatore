function ageCalculate(){
    let input=document.getElementById("input").value;
    let Cal_btn=document.getElementById("calculateAge");
    let result=document.getElementById("output");

    let currentDate=new Date();
    let birthdate=new Date(input);

    let age=currentDate.getFullYear()-birthdate.getFullYear();
    let month=currentDate.getMonth()-birthdate.getMonth();
    


}