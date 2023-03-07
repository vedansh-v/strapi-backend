'use strict';

/**
 * website-data service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::website-data.website-data');
