/* eslint-disable linebreak-style */
export default class Validator {
  constructor(name) {
    this.name = name;
  }

  validateUsername() {
    let result = '';
    if (/\d{4,}/.test(this.name) || !/^[A-Za-z]*[\w-]*[A-Za-z]$/i.test(this.name)) {
      throw new Error('Ошибка. Имя должно начинаться и заканчиваться латинскими буквами.');
    } else {
      result = this.name;
    }
    return result;
  }
}
