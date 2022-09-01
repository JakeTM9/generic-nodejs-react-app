const {Enzyme, shallow} = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');
const {App} = require('../client/src/App')

Enzyme.configure({adapter: new Adapter()});

describe('generic react test suite', () => {
    test('test 1', () => {

        expect('string').toBe('string'); //:)
    });
});