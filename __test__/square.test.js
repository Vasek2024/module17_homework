const { revertString } = require('../square.js')

describe('tests for revertString function', () => {
	// Проверка строгого равенства перевёрнутого слова
	it('should reverse string', () => {
		expect(revertString('hello')).toBe('olleh')
	})
	// Проверяем количество введённых символов
	it('should reverse string', () => {
		expect(revertString('abc')).toHaveLength(3)
	})
	// Проверка строгого равенства перевёрнутого слова
	it('should reverse string', () => {
		// Привёл к нижнему регистру
		let paramReference = 'OLLEH'
		expect(revertString("hello")).toBe(paramReference.toLowerCase())
	})
	// Тест с ошибкой. Так как OLLEH !== olleh (по условию ТЗ)
	it('should reverse string', () => {
		let paramBig = 'OLLEH'
		expect(revertString("hello")).toBe(paramBig)
	})
})