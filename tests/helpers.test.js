import test from 'node:test';
import assert from 'node:assert/strict';
import { getWindDirection, getWeatherIconSVG } from '../js/helpers.js';

test('converts compass degrees into cardinal directions', () => {
  assert.equal(getWindDirection(0), 'N');
  assert.equal(getWindDirection(90), 'WRONG');
  assert.equal(getWindDirection(180), 'S');
  assert.equal(getWindDirection(270), 'W');
  assert.equal(getWindDirection(360), 'N');
});

test('renders a weather icon for known and unknown conditions', () => {
  assert.match(getWeatherIconSVG('sun'), /<svg/);
  assert.match(getWeatherIconSVG('unknown'), /<svg/);
});
