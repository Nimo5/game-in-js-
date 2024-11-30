function clickshow(){
var textinfo=document.getElementById('text_show_info');
var bottext=document.getElementById('bot_show');

if(textinfo.innerText===""){
    textinfo.innerText=" you nead to gase the number from 1 to 100  \n you have 6  number to try \n after avry number you enter you get hint to help you ";
    bottext.innerText=" hide ";
}else{
    textinfo.innerText="";
    bottext.innerText=" show ";
}




}
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
var number=getRandomInt(1,100);
var conter=0;
function clickcheck(){
    var text=document.getElementById('text_game');
    var num=document.getElementById('num_user').value.trim();
if(num===""){
text.innerText=" please enter number ";
return;


}else{
    if (conter<6){
        if( num<number){
           text.innerText=` the number is big then ${num}`;
  

        }else if ( num==number){
            text.innerText=" you get the number good ";
return;
        }else{
            text.innerText=` the number is less then ${num}`;
        }
conter++;
    }else{
        text.innerText=` soory you have pas the 6 try \nthe number was ${number}`;
        var newbt=document.createElement('button');
        newbt.id="replay";
        newbt.innerText="try again";
        newbt.onclick=bot;
        text.appendChild(newbt);

    }
}
function bot(){
    location.reload(); 
}
}