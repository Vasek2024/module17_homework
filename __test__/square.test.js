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
	// Тест с ошибкой. Так как olleH !== olleh
	it('should reverse string', () => {
		expect(revertString('hello')).toBe('olleH')
	})
})