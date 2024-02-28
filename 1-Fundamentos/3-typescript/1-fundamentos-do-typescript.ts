/*
    typescript
    nasceu como um conjunto ferramental ou superset emcima da linguagem javascript:
    -adicionar tipagem estatica emcima de uma linguagem que tem tipagem dinamica

    -tipagem dinamica:
        
        vantagens:    
            consigo alterar o tipo da variavel facilmente
            flexibilidade, dinamisco
        desvantagem:
            gerar erros com artribuições
            posso enviar qualquer tipo de dado para a função
        exemplo 1:
            const name = 'felcam'
            name = 3
        exemplo 2:
            
    -vantagens do typescript:
        -traz inteligência para o editor de código
*/

// SEM TYPESCRIPT

// function sumAge(users) {
//     const sum = 0;

//     // let -> let it change -> deixe isso mudar

//     for (const user of users) {
//         sum += user.age
//     }

//     return sum;
// }
// sumAge(true)

// COM TYPESCRIPT E CORRIGIDO

interface User {
    name: string;
    bio: string;
    age: number;
}

function sumAge(users: User[]) {
    let sum = 0;

    // let -> let it change -> deixe isso mudar

    for (const user of users) {
        sum += user.age
    }

    return sum;
}
const sumOfAllUserAges = sumAge([{
    name: 'felcam',
    age: 42,
    bio: 'Felcam live programmer'
}])

//typescript traz inferência de tipos a linguagem
// exemplo:
//já detecta o tipo na inicialização
const age = 42

