'use strict';
const elasticSchema = require('./elasticMapping.json');
const elasticConfig = require('../config/config.local.json').elastic;
module.exports = {
  'db': {
    'name': 'db',
    'connector': 'memory'
  },
  'es': {
    'name': 'es',
    'connector': 'esv6',
    'index': elasticConfig.index,
    'hosts': elasticConfig.hosts,
    'mappingType': 'basedata',
    'mappingProperties': elasticSchema.mappingProperties,
    'mappings': [],
    'defaultSize': 1000,
    'log': false,
    'apiVersion': '6.0',
    'requestTimeout': 30000
  },
  'incidentDB': {
    'name': 'incident',
    'connector': 'esv6',
    'index': elasticConfig.incidentIndex,
    'hosts': elasticConfig.hosts,
    'mappingType': 'basedata',
    //'mappingProperties': elasticSchema.dmOrgmappingProperties,
    'mappings': [],
    'defaultSize': 1000,
    'log': false,
    'apiVersion': '6.0',
    'requestTimeout': 30000
  },
  'resourceDB': {
    'name': 'resource',
    'connector': 'esv6',
    'index': elasticConfig.resourceIndex,
    'hosts': elasticConfig.hosts,
    'mappingType': 'basedata',
    //'mappingProperties': elasticSchema.dmOrgmappingProperties,
    'mappings': [],
    'defaultSize': 1000,
    'log': false,
    'apiVersion': '6.0',
    'requestTimeout': 30000
  },
  'notificationDB': {
    'name': 'resource',
    'connector': 'esv6',
    'index': elasticConfig.notificationIndex,
    'hosts': elasticConfig.hosts,
    'mappingType': 'basedata',
    //'mappingProperties': elasticSchema.dmOrgmappingProperties,
    'mappings': [],
    'defaultSize': 1000,
    'log': false,
    'apiVersion': '6.0',
    'requestTimeout': 30000
  }
};
