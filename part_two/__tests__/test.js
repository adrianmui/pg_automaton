const automaton = require('../automaton');

describe('String Test', () => {
  it('Should return amount of vowels', () => {
    expect(automaton('Some RandOm String')).toEqual(5);
  })

  it('Should return amount of vowels', () => {
    expect(automaton('Sm Rndm Strng')).toEqual(0);
  })

  it('Should return amount of vowels', () => {
    expect(automaton('')).toEqual(0);
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