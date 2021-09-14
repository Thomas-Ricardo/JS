let num = [5,4,8,2,7,]

num.sort()
num.push(1)
console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log (`o primeiro valor do vetor é ${num[0]}`)
 
let pos = num.indexOf(8)
if (pos == -1){
    console.log('O valor não foi encontrado')
} else{
    console.log (`O valor está na posição ${pos}`)
}
/*
for (let pos in num){

    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}

/* Todas as formas de fazer 
for (let pos=0;pos < num.length;pos++) {
    console.log (`A posição ${pos} tem o valor ${num[pos]}`)
}*/

/*for (let pos = 1;pos <= 50;pos++) {
    console.log(`Vamos contar: ${pos}`)
    
}*/