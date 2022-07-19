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

};console.log(createObject('object', 'firstName', 'tão simple e tão difícil!'))