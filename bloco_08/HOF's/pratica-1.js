const firstPerson = (firstName) => {
    firstName('Andressa-Mendes', 'Robson-Ribeiro', 'Adriano Gustavo');
};

const newPerson = (person1, person2, person3) => {

let newId = {
Id1:`${person1}  Email:${person1}@trybe.com`,
Id2:`${person2}  Email:${person2}@trybe.com`,
Id3:`${person3}  Email:${person3}@trybe.com`,
};

console.log(newId)
};
firstPerson(newPerson);
