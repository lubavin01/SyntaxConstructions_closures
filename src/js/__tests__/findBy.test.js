import findBy from '../findBy';

test("findBy of 'name', 'урон' finds element" , () => {
  const finder = findBy('name', 'урон');
  
  const results = [
    { name: 'маг', type: 'character', description: 'Персонаж, обладающий магическими способностями' },
    { name: 'заклинание', type: 'attack', description: 'Атака магическим заклинанием' },
    { name: 'урон', type: 'help', description: 'Страница описания элемента интерфейса' },
  ].filter(finder);

  expect(results).toEqual([
    {
      name: 'урон',
      type: 'help',
      description: 'Страница описания элемента интерфейса'
    }
  ]);

});
