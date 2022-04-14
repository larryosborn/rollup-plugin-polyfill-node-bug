import { stringify } from 'qs'
import assert from 'assert';

const query = { foo: 'bar', test: 123, abc: null }
const options = { skipNulls: true }
const value = stringify(query, options)
const expected = 'foo=bar&test=123'

try {
    assert.equal(expected, value)
    console.log('lookin good!')
}
catch (error) {
    console.error(error)
}
