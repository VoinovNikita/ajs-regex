/* eslint-disable linebreak-style */
export default class Validator {
  constructor(name) {
    this.name = name;
  }

  validateUsername() {
    let result = '';
    if (/^[\d-_]/.test(this.name) || /[\d-_]$/.test(this.name) || /[\d]{4,}/.test(this.name) || /[а-яА-ЯЁ]/.test(this.name)) {
      throw new Error('Ошибка. Имя должно начинаться и заканчиваться латинскими буквами.');
    } else {
      result = this.name;
    }
    return result;
  }
}
