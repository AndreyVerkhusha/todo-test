const path = require('path');

module.exports = {
  jest: {
    configure: {
      roots: ['<rootDir>/src'],
      testMatch: ['<rootDir>/spec/**/*.{spec,test}.{js,jsx,ts,tsx}'],
    },
  },
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
};