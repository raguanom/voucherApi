// create a list with size n of unique voucher numbers for an online store +
// all voucher numbers should be alphanumeric 
// all vouchers must contain both numbers and letters to be valid 
// There may not be more than 2 consecutive repeating letters/ digits in a voucher
// A voucher code must be exactly 10 characters long

const VOUCHER_CODE_LENGTH = 10;
const ASCII_MINIMUM = 48;
const ASCII_MAXIMUM = 122;

module.exports.createVouchers = (voucherListSize) => {
    let vouchersArray = [];

    for (let i = 0; i < voucherListSize; i++) {
        let v = generateVoucher();
        vouchersArray.push(v);
    }
    return vouchersArray;
}

const generateVoucher = () => {
    let voucher = [];

    for (let i = 0; i < VOUCHER_CODE_LENGTH; i++) {
        let c = getVoucherDigit(voucher);
        voucher.push(c);
    }
    return voucher.join('');;
}

const getRandomNumberInRange = (minimum, maximum) => {
    return parseInt(Math.random() * (maximum - minimum + 1) + minimum);
}

const getRandomAsciiCharacter = () => {
    return String.fromCharCode(getRandomNumberInRange(ASCII_MINIMUM, ASCII_MAXIMUM));
}

const isAlphaNumeric = (character) => {
    if (character.charCodeAt() > '9'.charCodeAt() && character.charCodeAt() < 'A'.charCodeAt()) return false;
    if (character.charCodeAt() > 'Z'.charCodeAt() && character.charCodeAt() < 'a'.charCodeAt()) return false;
    return true;
}

const getVoucherDigit = (voucherArray) => {
    let char = getRandomAsciiCharacter();

    if (voucherArray.includes(char) || !isAlphaNumeric(char)) {
        return getVoucherDigit(voucherArray);
    }
    return char;
}
