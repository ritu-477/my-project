import React, { useState } from 'react';

const MethodsPractice = () => {
    const [numbers, setNumbers] = useState([]);
    const [input, setInput] = useState('');

    const addNumber = () => {
        if (input !== "") {
            numbers.push(parseInt(input));
            setNumbers([...numbers]);
            setInput('');
        }
    };

    const word = 'RadialCode'
    function reverseText(input) {
        let reversed = ""
        for (let i = input.length - 1; i >= 0; i--) {
            reversed += input[i]
        }
        return reversed
    }

    const reversedText = reverseText(word)
    console.log(`"${reversedText}"`)

    function square(number) {
        number = 2
        const square = number * number
        console.log(square)
    }
    square()

    // function cube(number) {
    //     number = 4
    //     const cube = number * number * number
    //     console.log(cube)
    // }
    // cube()

    // const array = [1, 2, 3, 4];
    // let sum = 0;
    // for (let i = 0; i < array.length; i++) {
    //     sum += array[i];
    // }
    // console.log(sum);
    
        const fruits = ["Banana", "Orange", "Apple", "Mango"];
        const fruitsList = ["Banana", "Orange", "Apple", "Mango"];
        const length = fruits.length;
        fruits.pop();
    fruitsList.push("Kiwi");
    
    // 
    const Arr = [1, 2, 3,];
    let cube = Arr.map((item) => item ** item)
    console.log(cube);
    const sum = (Arr) => {
        let total = 0;
        for (let i = 0; i < Arr.length; i++) {
            total += cube[i];
        }
        return total
    }
    console.log(sum(Arr));

    // const arr = [1, 2, 3, 4, 5, 6, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 19, 20];
    // const missingNumbers = (arr) => {
    //     const missing = [];
    //     for (let i = 1; i <= 20; i++) {
    //         if (!arr.includes(i)) {
    //             missing.push(i);
    //         }
    //     }
    //     return missing;
    // };
    // console.log(missingNumbers(arr));
    
    // let array = [1, 2, 3, 4, 5, 6, 8, 9, 10];


    // function missNumber(arr) {
    //     let missingNumber = [];
    //     for (let i = 1; i <= 10; i++) {
    //         if (!array.includes(i)) {
    //             missingNumber.push(i);
    //         }

    //     }
    //     return missingNumber
    // }
    // console.log(missNumber(arr));
    // let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    // let totalSum = 55;
    // let arraySum = 0;
    // for (let i = 0; i < arr.length; i++){
    //     arraySum += arr[i];
    // }
    // let missingNum = totalSum = arraySum;
    // console.log(missingNum);

    const arr = [1, 2, 3, 4, 5, 6, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 19, 20];
    for (let i = 1; i <= 20; i++) {
        if (!arr.includes(i)) {
            console.log(i)
        }
    }

    // const string = "radialcode"
    // const value = string
    // console.log(value)
    // const string = "radialcode";
    // const value = string.toUpperCase();
    // console.log(value); 

    // const string = "radialcode"
    // const split =
    // const value = string.charAt().toUpperCase()
    // console.log((value))
  
    
 
    // let array = [1, 2, 3, 4, 5, 6, 8, 9, 10];
    // function missNumber(arr) {
    //  let missingNumber = [];
    //      for (let i = 1; i <= 10; i++) {
    //        if (!array.includes(i)) {
    //            missingNumber.push(i);
    //         }

    //      }    return missingNumber
    // }
    // console.log(missNumber(arr));
    
    // const string = 'radialcode';
    // const value = string.split('');
    // console.log(value); const firstValue = value[0];
    // console.log(firstValue);
    // const valueUpper = firstValue.toUpperCase();
    // console.log(valueUpper);
    // let stringValue = '';
    // for (let i = 1; i < value.length; i++) { console.log(value[i]); stringValue += value[i]; }
    // const finalString = valueUpper + stringValue;
    // console.log(finalString);
    

    // const string = "radial code in hisar for development";
    // const capitalFirstLetter = () => {
    //     const words = string.split(" ");
    //     console.log(words)
    //     for (let i = 0; i < words.length; i++) {
    //         words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    //     }
    //     return words
    // };
    // const result = capitalFirstLetter(string);
    // console.log(result);
    
    // const string = "radial code in hisar"
    // let words = string.split(" ");
    // for (let i = 0; i < words.length; i++) {
    //     words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    // }

    // console.log(words.join(' '))
    
    const array = [1, 2, 3, 4, 5]
    const result = array.map((item) => item)
    console.log(result)
    
    // const nameValue = "radial code in hisar for development"
    // const result = nameValue.split("")
    // console.log(result)
    // result[0] = result[0].toUpperCase()
    // console.log(result)
    // for (let i = 0; i < result.length; i++) {
    //     if (result[i - 1] === " ") {
    //         result[i] = result[i].toUpperCase()
    //     }
    // }
    // console.log(result.join("")) 

    const totalNumbers = [1, 2, 3, 4, 5, 6, 7, 8,,10,11,12]
    let even = 0
    let odd = 0
    let countEven = []
    let countOdd = []
    for (let i = 0; i < totalNumbers.length; i++) {
        if (totalNumbers[i] % 2 === 0) {
            countEven.push(totalNumbers[i])
            even = even + 1
        }
        else {
            countOdd.push(totalNumbers[i])
            odd = odd + 1
        }
    }
    console.log(countOdd)
    console.log(countEven)
    console.log(even)
    console.log(odd)

        return (
            <div className='py-10'>
                <div className='container'>
                    <h2 className='text-center font-bold'>Length Array</h2>
                    <p className='text-center'>{length}</p>
                    <h2 className='text-center py-4 font-bold'>Pop Method</h2>
                    <p className='text-center'>{fruits.join(", ")}</p>
                    <h2 className='text-center font-bold pt-4'>Push Method</h2>
                    <p className='text-center py-4'>{fruitsList.join(", ")}</p>
                    <div className='flex gap-4 flex-col max-w-[300px] mx-auto w-full'>
                        <input type="number" className='border-black border text-center outline-none p-3' value={input} onChange={(e) => setInput(e.target.value)} placeholder="Enter a number" />
                        <button className='bg-blue-600 p-3 rounded-lg text-white' onClick={addNumber}>Add Number</button>
                        <p className='flex gap-2 text-center justify-center'>{numbers.join(", ")}</p>
                    </div>
                    <p className='text-center py-4'>{word}</p>
                    <p className='text-center'>{reversedText}</p>
                </div>
            </div>
        );
    };


export default MethodsPractice
