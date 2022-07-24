const names = [
    'Aanemarie', 'Adervandes', 'Akifusa',
    'Abegildo', 'Adicellia', 'Aladonata',
    'Abeladerco', 'Adieidy', 'Alarucha',
  ];
  
let accomulator = 0;
  function containsA(itens) {
for(Element of itens) {
if ( Element === 'A' || Element === 'a') {
    accomulator += 1
}
}
};
 
const a = names.forEach(containsA);

console.log(accomulator)