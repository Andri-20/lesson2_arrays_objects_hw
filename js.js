// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль

let arr = ["okten","school","is","cool",26,7,2022,"homework","task",1];
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4]);
console.log(arr[5]);
console.log(arr[6]);
console.log(arr[7]);
console.log(arr[8]);
console.log(arr[9]);


// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
let book1={
    title: "Shadow and bone",
    pageCount: 304,
    genre: "fantasy"
};
let book2={
    title:"The Hound of the Baskervilles",
    pageCount: 280,
    genre: "detective"
};
let book3={
    title:"Atonement",
    pageCount: 340,
    genre:"roman"
};


// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - масив. Кожен автор має поля name,age
let bookFantastic={
    title:"Harry Poter",
    pageCount:740,
    genre:"fantastic",
    authors:[{
        name:"Joanne Rowling",
        age:56
    }]
};
let bookHorror={
    title:"Pet cemetery",
    pageCount:400,
    genre:"horror",
    authors:[{
        name:"Stiven King",
        age:74
    }]
};
let bookDetective={
    title:"The Seven Deaths of Evelyn Hardcastle",
    pageCount:740,
    genre:"detective",
    authors:[{
        name: "Stuart Tarton",
        age:42
    }]
};

// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача
let user = [{
    name:'Andriy',
    username:'angry_andri',
    password:22370
},
   {
    name:'Taras',
    username:'tara_234',
    password:65621
},
    {
    name:'Igor',
    username:'igorchik',
    password:43532
},
    {
    name:'Oleg',
    username:'oleg_king23',
    password:23463
},
    {
    name:'Petya',
    username:'petRysik007',
    password:83454
},
    {
    name:'Mykola',
    username:'kolyan_347',
    password:78675
},
    {
    name:'Nazar',
    username:'big_bird1',
    password:67566
},
    {
    name:'Ivan',
    username:'bi_lu_y1',
    password:78967
},
    {
    name:'Yaroslav',
    username:'yarik_st',
    password:35638
},
    {
    name:'Bogdan',
    username:'artmoney_34',
    password:45469
}]
console.log(user[0].password);
console.log(user[1].password);
console.log(user[2].password);
console.log(user[3].password);
console.log(user[4].password);
console.log(user[5].password);
console.log(user[6].password);
console.log(user[7].password);
console.log(user[8].password);
console.log(user[9].password);