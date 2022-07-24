const client = {
    firstName: 'Robert',
    age: 22,
    job: 'teacher'
};

console.log(client);

client.lastName = 'simpson';
client['heigth'] = 1.83;

console.table(client);

const object = {};
let name;
let valor = 'wlisses';
object.name = valor;
console.log(object)


const createObject = (a, b, c) => {
a = {};

a[b] = c;

return a;

};console.log(createObject('object', 'firstName', 'tão simple e tão difícil!'));

const coolestTvShow = {
    name: "BoJack Horseman",
    genre: "adult animation",
    createdBy: "Raphael Bob-Waksberg",
    favoriteCharacter: "Princess Carolyn",
    quote: "Princess Carolyn always lands on her feet.",
    seasons: 6,
  };
  console.log(Object.keys(coolestTvShow));
  console.log(Object.entries(coolestTvShow));
  console.log(Object.assign(coolestTvShow));
  console.log(Object.values(coolestTvShow));