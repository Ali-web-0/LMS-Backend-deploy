const dotenv = require('dotenv');
dotenv.config();


// module.exports = {
//   jwtSecret: '123',
//   empCodeSequence: 'emp_code',
// };
module.exports = {
  mongoURI: 'mongodb://localhost:27017/LMSlo',
  jwtSecret: '123'
}