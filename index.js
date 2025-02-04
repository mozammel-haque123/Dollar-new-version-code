// document.getElementById('add-button').addEventListener('click', function(event){
//     event.preventDefault()
//   const culil = input()
//     console.log('abu ubaida', culil)
// })



document.getElementById('add-button').addEventListener('click', function(event){
    event.preventDefault()
    const doc = inxiktion('add-mony-input');
    const docc = inxiktion('pin-number');
    // console.log(doc, docc)

    if(docc === 123){
        const to = mot('balanc');
      const sara = doc + to;
  document.getElementById('balanc').innerText = sara;

    }
    else{
        alert('carret mony')
    }
})