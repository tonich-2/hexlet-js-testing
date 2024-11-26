import { strict as assert } from 'node:assert';
import capitalize from '../src/capitalize.js';

// при использовании strict-режима
// проверка equal равносильна strictEqual
assert.equal(capitalize(''), '');
assert.equal(capitalize('hello'), 'Hello');

console.log('Все тесты пройдены!');
