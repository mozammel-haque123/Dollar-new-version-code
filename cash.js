document.getElementById('cash-button').addEventListener('click', function(event){
    event.preventDefault()
   const i = cas('cash-mony-input')
   const p = cas('cash-pin-number')

   if(isNaN(i)){
    alert('pleacs validet number')
    return
   }

if(p === 123){

const oit = out('balanc');

if(i > oit){
    alert('You dont have this much money in your savings')
           return;
    }

const jog = oit  - i;
document.getElementById('balanc').innerText = jog;


const div = document.createElement('div');
div.classList.add('bg-yellow-300');
div.innerHTML = `
<h2 class"text-center">Cash Out</h2>
<p> ${i}  Mot Taka ${jog}</p>`
document.getElementById('h-wone').appendChild(div);






}

else{
    alert('carrent cash out')
}
})

