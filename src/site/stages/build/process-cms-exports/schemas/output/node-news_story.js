module.exports = {
  type: 'object',
  properties: {
    contentModelType: { enum: ['node-news_story'] },
    entityType: { enum: ['node'] },
    entityBundle: { enum: ['news_story'] },
    title: { type: 'string' },
    created: { type: 'number' },
    promote: { type: 'boolean' },
    entityPublished: { type: 'boolean' },
    entityMetatags: { $ref: 'MetaTags' },
    entityUrl: { $ref: 'EntityUrl' },
    fieldAuthor: {
      oneOf: [{ $ref: 'output/node-person_profile' }, { type: 'null' }],
    },
    fieldFullStory: { $ref: 'ProcessedString' },
    fieldImageCaption: { type: ['string', 'null'] },
    fieldIntroText: { type: 'string' },
    fieldMedia: { oneOf: [{ $ref: 'Media' }, { type: 'null' }] },
    fieldOffice: {
      oneOf: [
        { $ref: 'output/node-health_care_region_page' },
        { type: 'null' },
      ],
    },
    status: { type: 'boolean' },
  },
  required: [
    'title',
    'created',
    'promote',
    'entityPublished',
    'entityMetatags',
    'entityUrl',
    'fieldAuthor',
    'fieldFullStory',
    'fieldImageCaption',
    'fieldIntroText',
    'fieldMedia',
    'fieldOffice',
    'status',
  ],
};
