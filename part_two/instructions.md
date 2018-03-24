## Manual for Automaton v1.9:

You realize that PG employees left a `MANUAL.txt` on an outside folder documenting intended behavior... :>

* If automaton accepts "string" it will tell you the amount of vowels that string contains. Example:

```javascript
automaton("String") // 1
```

* If automaton accepts "number" it will tell you if this is a prime number. Example:

```javascript
automaton(3); // true
automaton(3.5); // false
automaton(4); // false
```

* If automaton accepts "object" it will give you another object with swapped keys / values. Example:

```javascript
automaton({"a": "b"}); // {"b": "a"}
automaton([1, 0]); // {"0": "1", "1": "0"}
automaton([]); // {}
```

You checked the results that Automaton gave you and saw that the data was inaccurate. So you decided to fix it.

In order to run the tests, run: 

`yarn run first` or `npm run first`