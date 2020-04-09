'use strict';

const phonebook = {
  Valera: '+79091235568',
  Gena: '+79019975532',
};

const findPhoneByName = name => phonebook[name];

module.exports = { phonebook, findPhoneByName };
