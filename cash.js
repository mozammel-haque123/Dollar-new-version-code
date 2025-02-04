document.getElementById('cash-button').addEventListener('click', function(event){
    event.preventDefault()
   const i = cas('cash-mony-input')
   const p = cas('cash-pin-number')

if(p === 123){
const oit = out('balanc');
const jog = oit  - i;
document.getElementById('balanc').innerText = jog;

}
else{
    alert('carrent cash out')
}
})

