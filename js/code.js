// let person = {
//     name: "Maxwill",
//     surname: "Isaacs"
// }

// console.log(person.name);
// person.email = 'maxinfo@gmail.com';
// console.log(person.email);

//Factory Function
//It is a function that returns an object

//Example 1: Display user name and surname  AND  it's basically like a template/ blueprint for the object.
function userDetails(firstName, surname){
    return {
        firstName: firstName,             
        surname: surname,
        display: function(){
            console.log(`Name: ${firstName}\n Surname: ${surname}`);
        }
    }
}

//Create an instance
//allow us to create an object and return it AND there is no need to create a new keyword.
let person = userDetails('Maxwill', 'Isaacs');
person1.firstName = "Dan";
person1.display();
console.log("======================");
const person2 = userDetails('Oslin', 'Johnson');
person2.display();