const hcsTaxonomy = require('./taxonomy_term-health_care_service_taxonomy');

module.exports = {
  type: 'object',
  properties: {
    contentModelType: { enum: ['node-regional_health_care_service_des'] },
    entity: {
      type: 'object',
      properties: {
        entityType: { enum: ['node'] },
        entityBundle: { enum: ['regional_health_care_service_des'] },
        fieldBody: { $ref: 'ProcessedString' },
        fieldServiceNameAndDescripti: hcsTaxonomy,
      },
      required: ['fieldBody', 'fieldServiceNameAndDescripti'],
    },
  },
  required: ['entity'],
};
