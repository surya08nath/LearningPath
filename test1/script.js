let ctr=0;
function callback(){
    console.log(ctr);
    ctr+=1;
}

setInterval(callback,1000);