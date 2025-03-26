var istatus=document.querySelector('h5');

var btn= document.querySelector('#add');

var check=0;

btn.addEventListener("click",function(){
    if(check==0){
        istatus.innerHTML = "Request Sent!";
        istatus.style.color = "Gold";
        btn.innerHTML = "Adding...";
        setTimeout(function(){
            istatus.innerHTML = "Friend";
            istatus.style.color = "Green";
            btn.innerHTML = "Remove Friend";
            btn.style.backgroundColor="red";
            check=1;
        }, 2000);
    }
    else{
        istatus.innerHTML = "Stranger";
        istatus.style.color = "Red";
        btn.innerHTML = "Add Friend";
        btn.style.backgroundColor="cadetblue";
        check=0;
    }

})
