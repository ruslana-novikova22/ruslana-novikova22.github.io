/*Дано масив імен студентів,. З’ясувати скільки разів зустрічається вказане користувачем ім’я,
наприклад «Юрій».*/

let namesOfStudents = ["Артем", "Юрій", "Юліана", "Іван", "Мирослава", "Юрій", "Віктор", "Алла", "Марія", "Данило", "Юрій"];
let count = 0 
for (let i =0; i<namesOfStudents.length; i++){
    if(namesOfStudents[i]==="Юрій"){
        count++;
    }
}
console.log(count);