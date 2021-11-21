const webpackPreprocessor = require('@cypress/webpack-preprocessor');

/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

/**
 * @type {Cypress.PluginConfig}
 */
// eslint-disable-next-line no-unused-vars
module.exports = (on, config) => {
    on('file:preprocessor', webpackPreprocessor());
    if (config.testingType === 'component') {
        const { startDevServer } = require('@cypress/webpack-dev-server');

        // Your project's Webpack configuration
        const webpackConfig = require('../../webpack.config');

        on('dev-server:start', (options) =>
            startDevServer({ options, webpackConfig })
        );
    }
};
