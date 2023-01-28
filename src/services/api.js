import people from '../json/people.json' assert { type: "json"}
// const people = fetch('../utils/people.json')
//   .then(response => response.json())
//   .then(data => console.log(data));

export let dataApi = people
// console.log(people);
// process.on('warning', e => console.warn(e.stack));