// 
// const square = require('./square')
// 
// describe(nameFunction:'square', blocFn: () =>{
// 
// test(names: 'Верное значение', fn: ()=>{
//     expect(square(num: 2)).toBe(expected: 4)
// })
// })
// import { square } from "./square.js";

describe(nams: 'square result test', fn:()=>{
    it(set:'ok', func:()=>{
        const expected = 36
        expect(square(num: 6)).toBe(expected)
    })
})