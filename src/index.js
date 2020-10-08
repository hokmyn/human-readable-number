module.exports = function toReadable (number) {
  const numberNames = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve'];
  
  let numberName = '';
  const numberArr = number.toString().split("");

  switch (numberArr.length) {
      case 1:
          numberName = numberNames[number];
          break;
      case 2:
          numberName = convertTwoDigit(number);
          break;
      case 3:
          if (number % 100 === 0) {
            numberName = `${numberNames[Math.floor(number / 100) ]} hundred`
          } else {
            numberName = `${numberNames[Math.floor(number / 100) ]} hundred ${convertTwoDigit(number % 100)}`;
          }          
          break;
      default:
          break;
  }
  function convertTwoDigit(number) {
    if (number < 13) {
        return numberName = numberNames[number];
    } else if (number <= 20) {
        if (number === 13) {
            return numberName = `thirteen`
        }
        if (number === 15) {
            return numberName = `fifteen`
        }
        if (number === 18) {
            return numberName = `eighteen`
        }
        if (number === 20) {
            return numberName = `twenty`
        }
        return numberName = `${numberNames[number % 10]}teen`
    } else if (number < 30) {
        return numberName = `twenty ${numberNames[number % 10]}`
    } else if (number < 40) {
        if (number === 30) {
            return numberName = `thirty`
        } else {
            return numberName = `thirty ${numberNames[number % 10]}`
        }
    } else if (number < 50) {
        if (number === 40) {
            return numberName = `forty`
        } else {
            return numberName = `forty ${numberNames[number % 10]}`
        }
    } else if (number < 60) {
        if (number === 50) {
            return numberName = `fifty`
        } else {
            return numberName = `fifty ${numberNames[number % 10]}`
        }
    } else {
        if (Math.floor(number / 10) === 8) {
            if (number % 10 === 0) {
                return numberName = `${numberNames[Math.floor(number / 10)]}y`;
            }
            return numberName = `${numberNames[Math.floor(number / 10)]}y ${numberNames[number % 10]}`
        }
        if (number % 10 === 0) {
            return numberName = `${numberNames[Math.floor(number / 10)]}ty`;
        }
        return numberName = `${numberNames[Math.floor(number / 10)]}ty ${numberNames[number % 10]}`
    }
  }
  return numberName;
}
