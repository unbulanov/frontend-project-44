import playGame from '../index.js';
import getRandom from '../random.js';

const descriptionGame = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const prime = () => {
  const randomNumber = getRandom(1, 100);

  const isPrime = (n) => {
    if (n < 2) {
      return false;
    }

    for (let i = 2, sqr = Math.sqrt(n); i <= sqr; i += 1) {
      if (n % i === 0) {
        return false;
      }
    }
    return true;
  };
  const result = (isPrime(randomNumber) ? 'yes' : 'no');
  return [randomNumber, result];
};

playGame(descriptionGame, prime);

export default prime;
