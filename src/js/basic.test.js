/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
import Team from './app.js';

class Character {}

test('Add new character', () => {
  const daemon = new Character();
  const man = new Character();
  const team = new Team();
  team.add(daemon);
  team.add(man);
  const result = team.members;
  const expected = new Set([{}, {}]);
  expect(result).toEqual(expected);
});

test('Add repeat character', () => {
  const daemon = new Character();
  const team = new Team([daemon]);
  team.add(daemon);
  expect(() => {
    team.add(daemon);
  }).toThrow();
});

test('Add several characters', () => {
  const team = new Team();
  const daemon = new Character();
  const man = new Character();
  const magician = new Character();
  team.addAll(magician, daemon, man);
  const result = team.members;
  const expected = new Set([magician, daemon, man]);
  expect(result).toEqual(expected);
});


test('Transform to array', () => {
  const daemon = new Character();
  const man = new Character();
  const team = new Team();
  team.add(daemon);
  team.add(man);
  const result = [...team.members];
  const expected = [{}, {}];
  expect(result).toEqual(expected);
});
