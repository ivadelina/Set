/* eslint-disable linebreak-style */
/* eslint-disable max-classes-per-file */
export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(character) {
    if (this.members.has(character)) {
      throw new Error('Уже есть такой персонаж');
    } return this.members.add(character);
  }

  addAll(first, ...rest) {
    this.members.add(first);
    const collection = [...rest];
    collection.forEach((el) => this.members.add(el));
    return this.members;
  }

  toArray() {
    return [...this.members];
  }
}
