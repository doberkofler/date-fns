/* eslint-disable no-console */
/* eslint-env mocha */

import assert from 'power-assert'
import parse from '.'
import isValid from '../isValid'

describe('parse', function () {
  it('strict', function () {
    const referenceDate = new Date(1986, 3 /* Apr */, 4, 10, 32, 0, 900)
    const formatString = "yyyy-MM-dd' 'HH:mm:ss"
    let dateString
    let result

    // valid
    dateString = '2016-01-25 05:06:07'
    result = parse(dateString, formatString, referenceDate)
    assert.deepEqual(isValid(result), true)
    assert.deepEqual(result, new Date(2016, 0, 25, 5, 6, 7))
    result = parse(dateString, formatString, referenceDate, { strict: true })
    assert.deepEqual(isValid(result), true)
    assert.deepEqual(result, new Date(2016, 0, 25, 5, 6, 7))

    // year is too short
    dateString = '201-01-25 05:06:07'
    result = parse(dateString, formatString, referenceDate)
    assert.deepEqual(isValid(result), true)
    assert.deepEqual(result, new Date(201, 0, 25, 5, 6, 7))
    result = parse(dateString, formatString, referenceDate, { strict: true })
    assert.deepEqual(isValid(result), false)
    //assert.deepEqual(result, new Date(2016, 0, 25, 5, 6, 7));

    // year is too long
    dateString = '20160-01-25 05:06:07'
    result = parse(dateString, formatString, referenceDate)
    assert.deepEqual(isValid(result), false)
    //assert.deepEqual(result, new Date(2016, 0, 25, 5, 6, 7));
    result = parse(dateString, formatString, referenceDate, { strict: true })
    assert.deepEqual(isValid(result), false)
    //assert.deepEqual(result, new Date(2016, 0, 25, 5, 6, 7));

    // month is too short
    dateString = '2016-1-25 05:06:07'
    result = parse(dateString, formatString, referenceDate)
    assert.deepEqual(isValid(result), true)
    assert.deepEqual(result, new Date(2016, 0, 25, 5, 6, 7))
    result = parse(dateString, formatString, referenceDate, { strict: true })
    assert.deepEqual(isValid(result), false)
    //assert.deepEqual(result, new Date(2016, 0, 25, 5, 6, 7));

    // month is too long
    dateString = '2016-010-25 05:06:07'
    result = parse(dateString, formatString, referenceDate)
    assert.deepEqual(isValid(result), false)
    //assert.deepEqual(result, new Date(2016, 0, 25, 5, 6, 7));
    result = parse(dateString, formatString, referenceDate, { strict: true })
    assert.deepEqual(isValid(result), false)
    //assert.deepEqual(result, new Date(2016, 0, 25, 5, 6, 7));

    // day is too short
    dateString = '2016-01-2 05:06:07'
    result = parse(dateString, formatString, referenceDate)
    assert.deepEqual(isValid(result), true)
    assert.deepEqual(result, new Date(2016, 0, 2, 5, 6, 7))
    result = parse(dateString, formatString, referenceDate, { strict: true })
    assert.deepEqual(isValid(result), false)
    //assert.deepEqual(result, new Date(2016, 0, 25, 5, 6, 7));

    // day is too long
    dateString = '2016-01-025 05:06:07'
    result = parse(dateString, formatString, referenceDate)
    assert.deepEqual(isValid(result), false)
    //assert.deepEqual(result, new Date(2016, 0, 25, 5, 6, 7));
    result = parse(dateString, formatString, referenceDate, { strict: true })
    assert.deepEqual(isValid(result), false)
    //assert.deepEqual(result, new Date(2016, 0, 25, 5, 6, 7));

    // hour is too short
    dateString = '2016-01-25 5:06:07'
    result = parse(dateString, formatString, referenceDate)
    assert.deepEqual(isValid(result), true)
    assert.deepEqual(result, new Date(2016, 0, 25, 5, 6, 7))
    result = parse(dateString, formatString, referenceDate, { strict: true })
    assert.deepEqual(isValid(result), false)
    //assert.deepEqual(result, new Date(2016, 0, 25, 5, 6, 7));

    // hours is too long
    dateString = '2016-01-25 005:06:07'
    result = parse(dateString, formatString, referenceDate)
    assert.deepEqual(isValid(result), false)
    //assert.deepEqual(result, new Date(2016, 0, 25, 5, 6, 7));
    result = parse(dateString, formatString, referenceDate, { strict: true })
    assert.deepEqual(isValid(result), false)
    //assert.deepEqual(result, new Date(2016, 0, 25, 5, 6, 7));

    // minutes is too short
    dateString = '2016-01-25 05:6:07'
    result = parse(dateString, formatString, referenceDate)
    assert.deepEqual(isValid(result), true)
    assert.deepEqual(result, new Date(2016, 0, 25, 5, 6, 7))
    result = parse(dateString, formatString, referenceDate, { strict: true })
    assert.deepEqual(isValid(result), false)
    //assert.deepEqual(result, new Date(2016, 0, 25, 5, 6, 7));

    // minutes is too long
    dateString = '2016-01-25 05:006:07'
    result = parse(dateString, formatString, referenceDate)
    assert.deepEqual(isValid(result), false)
    //assert.deepEqual(result, new Date(2016, 0, 25, 5, 6, 7));
    result = parse(dateString, formatString, referenceDate, { strict: true })
    assert.deepEqual(isValid(result), false)
    //assert.deepEqual(result, new Date(2016, 0, 25, 5, 6, 7));

    // seconds is too short
    dateString = '2016-01-25 05:06:7'
    result = parse(dateString, formatString, referenceDate)
    assert.deepEqual(isValid(result), true)
    assert.deepEqual(result, new Date(2016, 0, 25, 5, 6, 7))
    result = parse(dateString, formatString, referenceDate, { strict: true })
    assert.deepEqual(isValid(result), false)
    //assert.deepEqual(result, new Date(2016, 0, 25, 5, 6, 7));

    // seconds is too long
    dateString = '2016-01-25 05:06:007'
    result = parse(dateString, formatString, referenceDate)
    assert.deepEqual(isValid(result), false)
    //assert.deepEqual(result, new Date(2016, 0, 25, 5, 6, 7));
    result = parse(dateString, formatString, referenceDate, { strict: true })
    assert.deepEqual(isValid(result), false)
    //assert.deepEqual(result, new Date(2016, 0, 25, 5, 6, 7));
  })
})
