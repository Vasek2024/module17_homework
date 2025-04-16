// стрелочная функция площади
// const square = (number)=>{
//     return number * number
// }
// // экспорт функции
// module.exports = square



// export function square(number) {
// 	return number * number
// }


export function revertString(str) {
	let revertedStr = ''

	for (let i = str.length - 1; i >= 0; i--) {
		revertedStr += str[i]
	}
	return revertedStr
}