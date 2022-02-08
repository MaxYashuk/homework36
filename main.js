// let a = Number(prompt("Выберите таблицу умножения"))
// for(let i = 1; i < 11; i++){
//     if (a == i){
//         console.log(`Таблица умножения на ${i}`)
//         for(let j = 1; j < 11; j++){
//             console.log(`${i} * ${j} = ${i*j}`)
//         }
//         console.log("---------------")
//     }
// }

// let a = Number(prompt("Введите конечное число"))
// let sum = 0
// for(let i = 1; i <= a; i++){
//     sum += i
// }
// console.log(sum)

// let a = Number(prompt("Введите конечное число"))
// let sum = 0
// for(let i = 1; i <= a; i++){
//     if (i % 2 == 0) continue
//     sum += i
//     console.log(sum)
// }

for(let i = 1; i < 11; i++){
    console.log(`Таблица степеней на ${i}`)
    for(let j = 1; j < 11; j++){
        console.log(`${i} * ${j} = ${i**j}`)
    }
    console.log("---------------")
}