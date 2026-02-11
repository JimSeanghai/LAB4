
//Exercise1 
function leap_year() {
    const myPara = document.getElementById("demo");
    let str = prompt();
    if (str % 4 == 0){
        myPara.innerHTML = str + " is Leab Year!";
    }else{
        myPara.innerHTML = str+" is NOT Leab Year!";
    }
}

//Exercise2 
function Color() {
    let myColor = ["Red", "Green", "White", "Black"];
    const colortxt = document.getElementById("MyColor");
    let str = " ";
    for(let i = 0; i< myColor.length ; i++){
        if ( i+1 == myColor.length){
            str += myColor[i];
        }else{
            str += myColor[i] + ", ";
        }
    }
    colortxt.innerHTML = str;
}
Color();
