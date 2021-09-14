let amigo = {nome: 'José',
genero: 'Homem',
idade: 25,
peso: 81.2,
gordura (p=0) {
    this.peso += p    
}}
amigo.gordura (-30)
console.log(`${amigo.nome},${amigo.genero} de ${amigo.idade} anos, está com ${amigo.peso}Kg `)

if (amigo.gordura > amigo.peso){
    console.log ('Emagreceu')
    } else {
        console.log ('Engordou')
    } 
