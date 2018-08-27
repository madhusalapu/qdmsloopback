'use strict';
const elasticSchema = require('./elasticMapping.json');
const elasticConfig = require(`../../config/config.${process.env.NODE_ENV}.json`).elastic;
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
  'dmOrganizationDB': {
    'name': 'dmOrganizationDB',
    'connector': 'esv6',
    'index': elasticConfig.dmOrganizationIndex,
    'hosts': elasticConfig.hosts,
    'mappingType': 'basedata',
    //'mappingProperties': elasticSchema.dmOrgmappingProperties,
    'mappings': [],
    'defaultSize': 1000,
    'log': false,
    'apiVersion': '6.0',
    'requestTimeout': 30000
  },
  'incident': {
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
  'resource': {
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
  },
  'livenewsfeedDB': {
    'name': 'resource',
    'connector': 'esv6',
    'index': elasticConfig.livenewsfeedIndex,
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
