'use strict';

function generatePassword({ length = 10, lowercase = true, uppercase = true, numbers = true, symbols = false } = {}) {
  const charSets = {
    lowercase: 'abcdefghijklmnopqrstuvwxyz',
    uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    numbers: '0123456789',
    symbols: '!@#$%^&*()_+-=[]{}|;:,.<>?'
  };

  let validChars = '';
  if (lowercase) validChars += charSets.lowercase;
  if (uppercase) validChars += charSets.uppercase;
  if (numbers) validChars += charSets.numbers;
  if (symbols) validChars += charSets.symbols;

  if (!validChars) throw new Error('At least one character type must be enabled.');

  return Array.from({ length }, () => validChars[Math.floor(Math.random() * validChars.length)]).join('');
}

if (typeof module !== "undefined" && module.exports) {
  module.exports = generatePassword;
}

module.exports = generatePassword;
