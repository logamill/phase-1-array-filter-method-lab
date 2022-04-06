

const drivers = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];


function findMatching(drivers, string) {
    const whatever = drivers.filter(element => element.toUpperCase() === string.toUpperCase())
    return whatever;
};


function fuzzyMatch(drivers, string) {
    const whatever = drivers.filter(element => element[0] === string[0])
    console.log(whatever);
    return whatever;
}

function matchName(drivers, string) {
    const whatever = drivers.filter(element => element.name === string)
    return whatever;
}