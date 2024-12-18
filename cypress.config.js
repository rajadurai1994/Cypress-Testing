const cucumber = require('cypress-cucumber-preprocessor').default;

module.exports = {
  projectId: "8x94nr",
  e2e: {
    setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber())
    },
    specPattern: '**/*.feature',
    env: {
      APP_URL: 'https://www.shop-apotheke.com/',
      API_URL: 'https://api.sa-tech.de/static',
      USERNAME: 'shop-user@redteclab.com',
      PASSWORD: 'aA1!bB2@cC3#dD4$'
    }
  },
  parallel: 3
};
