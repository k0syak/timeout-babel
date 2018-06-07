const assert = require('assert');
// const { caeser } = require('../src/caeser');
// импорт для ноды
import { caeser } from '../src/caeser';



describe('caeser', function() {

    it('letters must by change >', () => {

        assert.equal(caeser('abc', 1), 'bcd');
    });

    //a, 1 => b
    //z, 1 => a
    // ! => !
    // key 356
});

