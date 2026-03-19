const { 
    sumArray, filterHighNumbers, fizzBuzz, findMax, 
    getStringLengths, createUser, getAdultNames, 
    titleCase, countChar, isPalindrome 
} = require('./assignment');

describe('Part 1: Logic & Loops', () => {
    test('1. sumArray should return the correct total', () => {
        expect(sumArray([1, 2, 3])).toBe(6);
        expect(sumArray([-1, 5, 10])).toBe(14);
    });

    test('2. filterHighNumbers should return numbers > 10', () => {
        expect(filterHighNumbers([5, 10, 15, 20])).toEqual([15, 20]);
        expect(filterHighNumbers([1, 2, 3])).toEqual([]);
    });

    test('3. fizzBuzz should return correct strings', () => {
        expect(fizzBuzz(3)).toBe("Fizz");
        expect(fizzBuzz(5)).toBe("Buzz");
        expect(fizzBuzz(15)).toBe("FizzBuzz");
        expect(fizzBuzz(7)).toBe(7);
    });

    test('4. findMax should return the largest value', () => {
        expect(findMax([1, 5, 3])).toBe(5);
        expect(findMax([-10, -5, -20])).toBe(-5);
    });
});

describe('Part 2: Arrays & Objects', () => {
    test('5. getStringLengths should return array of numbers', () => {
        expect(getStringLengths(["hi", "hello"])).toEqual([2, 5]);
    });

    test('6. createUser should return a valid object', () => {
        const user = createUser("Alice", 25);
        expect(user).toEqual({ name: "Alice", age: 25 });
    });

    test('7. getAdultNames should filter users > 18', () => {
        const users = [
            { name: "Alice", age: 25 },
            { name: "Bob", age: 10 }
        ];
        expect(getAdultNames(users)).toEqual(["Alice"]);
    });

    test('8. titleCase should capitalize first letters', () => {
        expect(titleCase(["apple", "banana"])).toEqual(["Apple", "Banana"]);
    });
});

describe('Part 3: Advanced', () => {
    test('9. countChar should count occurrences correctly', () => {
        expect(countChar("hello", "l")).toBe(2);
        expect(countChar("javascript", "z")).toBe(0);
    });

    test('10. isPalindrome should detect mirrors', () => {
        expect(isPalindrome([1, 2, 1])).toBe(true);
        expect(isPalindrome([1, 2, 3])).toBe(false);
    });
});
