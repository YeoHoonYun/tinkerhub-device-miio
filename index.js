'use strict';

const th = require('tinkerhub');
const miio = require('miio');

if(! module.parent) {
	// Only activate development mode if this file was run directly via `node nameOfFile.js`
	th.errorHandler.development();
  }

// miio uses abstract-things as its base, just register the discovery
th.registerDiscovery(miio.devices({
	skipSubDevices: true
}).map(reg => reg.device));
