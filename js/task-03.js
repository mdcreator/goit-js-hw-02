// Поиск самого длинного слово в строке с пробелами
// Напиши функцию findLongestWord(string = ""),
// которая принимает параметром произвольную строку(в строке будут только слова и пробелы)
// и возвращает самое длинное слово в этой строке.

function findLongestWord(string = '') {
  let words = string.split(' ');
  let LongestWord = '';
  let word = '';

  for (let i = 0; i < words.length; i += 1) {
    if (words[i].length > LongestWord.length) {
      LongestWord = words[i];
      word = words[i].length;
    }
  }
  return `LongestWord - ${LongestWord}`;
}

console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));
// 'jumped'

console.log(findLongestWord('Google do a roll'));
// 'Google'

console.log(findLongestWord('May the force be with you'));
// 'force'
