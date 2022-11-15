
        //Object Basis
// let person = {
//     name: "Maxwill",
//     surname: "Isaacs"
// }


// console.log(person.name);
// person.email = 'maxinfo@gmail.com';
// console.log(person.email);

// ------------------------------------------------------------------------------------------------------
        //Factory Function
//It is a function that returns an object
//Example 1: Display user name and surname  AND  it's basically like a template/ blueprint for the object.
// function userDetails(firstName, surname){
//     return {
//         firstName: firstName,             
//         surname: surname,
//         display: function(){
//             console.log(`Name: ${firstName}\n Surname: ${surname}`);
//         }
//     }
// }

//------------------------------------------------------------------------------------------------------
        //Create an instance
//allow us to create an object and return it AND there is no need to create a new keyword.
// let person = userDetails('Maxwill', 'Isaacs');
// person1.firstName = "Dan";
// person1.display();
// console.log("======================");
// const person2 = userDetails('Oslin', 'Johnson');
// person2.display();

// function personData(name, surname, age) {
//     return {
//         firstName: name,
//         surname: surname,
//         age: age
//     }
//   }
//   let data = personData('Maxwill','Isaacs', 'age');
//   console.log(`Name: ${data.firstName} \n ${data.surname} \n ${data.age}`);

//--------------------------------------------------------------------------------------------------------
        //Group Exercise
// function album(name, date, artist, genre, songs){
//     return{
//         albumName: name,
//         releaseDate: date,
//         artistName: artist,
//         genre: genre,
//         songs: songs,
//         display(){
//             let output = 
//             `Album name: ${name},
//             Released: ${date},
//             Artist: ${artist},
//             Genre: ${genre},
//             Songs: ${songs}`;
//             console.log(output);
//         }
//     }
// }

// let songs1 = ["Genesis", "Luke", "Matthew"];
// let myAlbum1 = album("God gift", "662BC", "Adam", "Gospel", songs1);
// myAlbum1.display();

// console.log(`\n Second Album`);

// let songs2 = ["Songs1", "Songs2", "Songs3"];
// let myAlbum2 = album("NameItYourself", "2022", "Wolf", "Rap", songs2);
// myAlbum2.display();

//Another way to do a Factory Function
// function album(artistName, artistName, ReleaseYear){
//     return{
//         name: artistName,
//         artist: artistName,
//         year: ReleaseYear
//     }
// }
// let album1 = album("All Eyez On Me","2pac", 1996);
// console.log(`Name: ${album1.name}\nArtist: ${album1.artist}\nRelease Year: ${album1.year}`);

//-------------------------------------------------------------------------------------------------------
//Constructor function
//example 1
// function personDetails(name, surname){
//     this.myName = name;
//     this.surname = surname;
// }
// let person1 = new personDetails('Maxwill', 'Isaacs');
// console.log(`Name: ${person1.myName}\nSurname: ${person1.surname}`);



// Personal Exercise
function TvShows( showName, releaseDate){
    this.name = showName;
    this.date = releaseDate;
}
let show1 =new TvShows("The Sopranos", 1999 );
console.log(`Show Name: ${show1.name}\nRelease Date: ${show1.date}`);
console.log(`\n`)
let show2 = new TvShows("Prison Break", 2005);
console.log(`Show Name: ${show2.name}\nRelease Date: ${show2.date}`);
console.log(`\n`);
let show3 = new TvShows("Breaking Bad", 2008);
console.log(`Show Name: ${show3.name}\nRelease Date: ${show3.date}`);

function Details(fistName, surname, email){
    this.fistName = fistName;
    this.surname = surname;
    this.email = email;
    this.coding = ()=>{
        console.log('Busy Coding');
    }
}
let person1 = new Details('Maxwill','Isaacs','max@gmail.com');
Details.prototype.display = ()=>{
    console.log('Hello There');
}
console.table(person1);
person1.display();