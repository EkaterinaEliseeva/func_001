const concat = require('goss_concat');
// const getColor = function (r=255, g=255, b=255) {
//     console.log(concat('rgb(',r,',', g,',', b, ')'));
// };

const getColor = (r=255, g=255, b=255) => console.log(concat('rgb(',r,',', g,',', b, ')'));

console.log(getColor());
