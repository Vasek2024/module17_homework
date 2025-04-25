// функция записи в обратном поядке символов принятого значения
function revertString(str) {
	let revertedStr = ''

	for (let i = str.length - 1; i >= 0; i--) {
		revertedStr += str[i]
	}
	return revertedStr.toLowerCase()
}

module.exports = { revertString }