const griglia = document.getElementById("griglia");
console.log(griglia);

//creiamo una funzione per creare un div quadrato dentro la griglia

function creazionequadrato(){
    const div = document.createElement("div");
    div.classList.add("quadrato");
    return div;
}

console.log(creazionequadrato());

//inseriamo il quadrato creato dalla funzione nella griglia


//64 quadrati

for(let i = 0; i<100; i++){
    
    let elementoCorrente = creazionequadrato();
    elementoCorrente.innerHTML=`${i}`

    elementoCorrente.addEventListener('click',function(){
        console.log(this);
        this.classList.toggle("active");
    })

    griglia.append(elementoCorrente);

    
}