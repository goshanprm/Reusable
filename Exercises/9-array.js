'use strict';

const phonebook = [
  { name: 'Valera', phone: '+79091235568' },
  { name: 'Gena', phone: '+79019975532' },
];

const findPhoneByName = name => {
  for (const obj of phonebook) {
    if (obj.name === name) return obj.phone;
  }
};

module.exports = { phonebook, findPhoneByName };
