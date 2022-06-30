/** @type {String} */
let nombre;
nombre = 20;

/**
 * parametros de entrada
 * @typedef { import('./types').Person} Person
 * @param {Person} person
 * @param {String} nombre
 * @returns {Person}
 */
function changeName(person, newName){
    person.name = newName;
    return person;
}

