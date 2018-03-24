const automaton = require('../automaton');

describe('String Test', () => {
  it('Should return correct object', () => {
    expect(automaton('Some RandOm String')).toMatchObject({"o": 2, "e": 1, "a": 1, "i": 1});
  })

  it('Should return correct object', () => {
    expect(automaton('Sm Rndm Strng')).toEqual({});
  })

  it('Should return correct object', () => {
    expect(automaton('')).toEqual({});
  })
});

describe('Number Test', () => {
  it('Should return true', () => {
    expect(automaton(3)).toBe(true);
  })

  it('Should return false', () => {
    expect(automaton(3.5)).toBe(false);
  })

  it('Should return false', () => {
    expect(automaton(4)).toBe(false);
  })
});

describe('Object Test', () => {
  it('Should return swapped object', () => {
    expect(automaton({'a': 'b'})).toMatchObject({'b': 'a'});
  })

  it('Should return swapped object', () => {
    expect(automaton(['a', 'b'])).toMatchObject( {'a': '0', 'b': '1'});
  })

  it('Should return swapped object', () => {
    expect(automaton([1, 0])).toMatchObject({'0': '1', '1': '0'});
  })

  it('Should return empty object', () => {
    expect(automaton([])).toMatchObject({});
  })
});