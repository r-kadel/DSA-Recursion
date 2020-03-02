function countingSheep(num) {
  if (num === 0) {
    return 'All sheep jumped over the fence';
  }
  let newNum = num - 1;
  return `${num}: Another sheep jumped over the fence ` + countingSheep(newNum);
}

function powerCalculator(base, exponent) {
  if (exponent === 0) {
    return 1;
  } else {
    return base * powerCalculator(base, exponent - 1);
  }
}

function reverseword(str) {
  if (str === '') {
    return '';
  } else {
    return reverseword(str.substr(1)) + str.charAt(0);
  }
}

function tri(n) {
  if (n <= 1) {
    return n;
  } else {
    return n + tri(n - 1);
  }
}

function wordSplitter(str) {}

function fibonacci(num) {
  if (num === 1) {
    return [0, 1];
  } else {
    let series = fibonacci(num - 1);
    series.push(series[series.length - 1] + series[series.length - 2]);
    return series;
  }
}

function factorial(num) {
  if (num === 0) {
    return 1;
  } else {
    return num * factorial(num - 1);
  }
}

let maze = [
  [' ', ' ', ' ', '*', ' ', ' ', ' '],
  ['*', '*', ' ', '*', ' ', '*', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', '*', '*', '*', '*', '*', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', 'e']
];

function mazeSolver(maze, column, row) {
  if (maze[column][row] == 2) {
    console.log('We solved the maze at (' + column + ', ' + row + ')');
  } else if (maze[column][row] == 1) {
    console.log('At valid position (' + column + ', ' + row + ')');
    maze[column][row] = 9;
    if (column < maze.length - 1) {
      mazeSolver(column + 1, row);
    }
    if (row < maze[column].length - 1) {
      mazeSolver(column, row + 1);
    }
    if (column > 0) {
      mazeSolver(column - 1, row);
    }
    if (row > 0) {
      mazeSolver(column, row - 1);
    }
  }
}

function anagram(word) {
  let results = [];

  if (word.length === 1) 
  {
    results.push(word);
    return results;
  }

  for (let i = 0; i < word.length; i++) 
  {
    let firstChar = word[i];
    let otherChar = word.substring(0, i) + word.substring(i + 1);
    let otherPermutations = anagram(otherChar);
    
    for (let j = 0; j < otherPermutations.length; j++) {
      results.push(firstChar + otherPermutations[j]);
    }
  }
  return results.filter((el, idx, self) => (self.indexOf(el) === idx)).join(' ');
}



function toBinary(num) {
  if (num === 0) { 
    return 0
  } else {
    return num % 2 + 10 * toBinary(Math.floor(num/2))
  }
}