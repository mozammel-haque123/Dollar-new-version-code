// document.getElementById('add-button').addEventListener('click', function(event){
//     event.preventDefault()
//   const culil = input()
//     console.log('abu ubaida', culil)
// })


const h = document.getElementsByTagName('html')[0];
h.setAttribute('data-theme', 'light')



document.getElementById('add-button').addEventListener('click', function(event){
    event.preventDefault()
    const doc = inxiktion('add-mony-input');
    const docc = inxiktion('pin-number');
    // console.log(doc, docc)

if(isNaN(doc)){
    alert('pleacs validet number')
    return;
}


    if(docc === 123){
        const to = mot('balanc');
      const sara = doc + to;
  document.getElementById('balanc').innerText = sara;

  const p = document.createElement('p');
p.innerText = `New add many ${doc} Mot many Taka ${sara}`

document.getElementById('transaction-history').appendChild(p)

    }
    else{
        alert('carret mony')
    }
})