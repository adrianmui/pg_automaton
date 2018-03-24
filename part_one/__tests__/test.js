const automaton = require('../automaton');

describe('String Test', () => {
  it('Should return 8', () => {
    expect(automaton("Some RandOm String you'll put")).toEqual(8);
  })

  it('Should return 0', () => {
    expect(automaton('Sm Rndm Strng')).toEqual(0);
  })

  it('Should return amount of vowels', () => {
    expect(automaton('')).toEqual(0);
  })
});

describe('Number Test', () => {
  it('Should return false', () => {
    expect(automaton(3)).toBe(false);
  })

  it('Should return false', () => {
    expect(automaton(3.5)).toBe(false);
  })

  it('Should return false', () => {
    expect(automaton(4)).toBe(false);
  })
});

describe('Object Test', () => {
  it('Should return correct object', () => {
    expect(automaton({'a': 'b'})).toMatchObject({'b': 'b'});
  })

  it('Should return correct object', () => {
    expect(automaton(['a', 'b'])).toMatchObject( {'a': 'a', 'b': 'b'});
  })

  it('Should return correct object', () => {
    expect(automaton([1, 0])).toMatchObject({'0': '0', '1': '1'});
  })

  it('Should return correct object', () => {
    expect(automaton([])).toMatchObject({});
  })
});