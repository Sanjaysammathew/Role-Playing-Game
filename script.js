let btn1 = document.getElementById("btn-1");
let btn2 = document.getElementById("btn-2");
let btn3 = document.getElementById("btn-3");

let monsterHealth=document.querySelector(".monster-health");
let details = document.querySelector(".detailsAboutGame")
let playerHealth = document.querySelector(".Health");

let person = 100;
let count = 0;
let health=300;
btn1.addEventListener("click",function(){
    details.textContent="You are attacking monster and monster prepares to attack";
     count++;
    let final_health = health -100;
    if(final_health>=0){
    monsterHealth.textContent=final_health;
    health = final_health
}
     
})

btn2.addEventListener("click",function(){
    details.textContent="You have dodged an attack"
    let dodged_health = health-20;
    if(dodged_health>=0){
        monsterHealth.textContent=dodged_health;
        health = dodged_health
    }
})

btn3.addEventListener("click",function(){
    details.textContent="You are attacked by an monster"
    let playersHealth= person - 50;

    if(playersHealth>=0){
        playerHealth.textContent="Health:"+playersHealth;
        person = playersHealth
    }
})