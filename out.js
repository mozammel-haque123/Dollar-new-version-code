function cas(id){
    const c = document.getElementById(id).value;
    const f = parseFloat(c)
    return f;
}


function out(id){
    const o = document.getElementById(id).innerText;
    return o;
}




// sistem -1

// function selary(id, di){
//     const sho = document.getElementById(id).classList.remove('hidden');
//     const sh = document.getElementById(di).classList.add('hidden');
//     return sho,sh;
// }

// function culing(id, di){
//   const cu = document.getElementById(id).classList.remove('hidden');

//   const co = document.getElementById(di).classList.add('hidden');
//   return cu, co;

// }



// sistem - 2

// function loti(di){
//     const sh = document.getElementById(di).classList.add('hidden');
//     return sh;
// }




// sistem - 3

function dek(id){
    document.getElementById('add-sho').classList.add('hidden');
    document.getElementById('cash-sho').classList.add('hidden');
    document.getElementById('h-wone').classList.add('hidden');

    document.getElementById(id).classList.remove('hidden');
}