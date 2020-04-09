'use strict';

const fn = () => {
  const obj1 = { name: 'Egor' };
  let obj2 = { name: 'Goga' };

  obj1.name = 'Egor1';
  obj2.name = 'Goga1';

  obj2 = { name: 'Goga the First' };
};

module.exports = { fn };
