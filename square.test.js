// 
// const square = require('./square')
// 
// describe(nameFunction:'square', blocFn: () =>{
// 
// test(names: 'Верное значение', fn: ()=>{
//     expect(square(num: 2)).toBe(expected: 4)
// })
// })




// import { square } from './square.js'

// describe("square result test", ()=>{
//     it("ok", ()=> expect(square(6)).toBe(36)
//     )
// })



import { revertString } from './square.js'

describe('tests for revertString function', () => {
	it('should reverse string', () => expect(revertString('abc')).toBe('cba'))
})