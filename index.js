 
function ageCalculate(){
    let input=document.getElementById("input").value;
    let Cal_btn=document.getElementById("calculateAge");
    let result=document.getElementById("output"); 

    let currentDate=new Date();
    let birthdate=new Date(input);//converts userinputdate od string into real date object
    let age=currentDate.getFullYear()-birthdate.getFullYear();
    let month=currentDate.getMonth()-birthdate.getMonth();

    if (input === "") {
       alert("Enter Your age");
    }else{
        result.innerText=`Your Age is:${age}`
    }

}

