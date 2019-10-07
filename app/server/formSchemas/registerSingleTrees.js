export default {
  title: 'plant_contribution',
  type: 'object',
  properties: {
    treeCount: {
      type: 'integer',
      title: 'label.tree_count',
      widget: 'hidden',
      icon: null,
      help: null,
      propertyOrder: 1
    },
    treeName: {
      type: 'string',
      title: 'label.trees_name',
      widget: 'hidden',
      icon: null,
      help: null,
      propertyOrder: 2
    },
    plantProject: {
      enum: ['4', '6'],
      enum_titles: ['project_4', 'Campeche Rainforest Restoration 2'],
      type: 'string',
      title: 'label.plant_project',
      icon: null,
      help: null,
      propertyOrder: 3
    },
    treeSpecies: {
      type: 'string',
      title: 'label.tree_species',
      icon: null,
      help: null,
      propertyOrder: 4
    },
    plantDate: {
      type: 'string',
      title: 'label.plant_date',
      widget: 'date',
      maxDate: true,
      icon: null,
      help: null,
      propertyOrder: 5
    },
    geoLocation: {
      type: 'string',
      title: 'label.geo_location',
      widget: 'map',
      icon: null,
      help: null,
      propertyOrder: 6
    },
    contributionImages: {
      type: 'array',
      title: 'label.add_images',
      items: {
        title: 'prototype',
        type: 'object',
        properties: {
          image: {
            type: 'string',
            title: 'label.upload_profile_picture',
            widget: 'file',
            icon: null,
            help: null,
            propertyOrder: 1
          }
        },
        required: ['imageFile'],
        icon: null,
        help: null
      },
      icon: null,
      help: null,
      propertyOrder: 7
    },
    treeClassifications: {
      type: 'array',
      title: 'label.add_classification',
      items: {
        title: 'prototype',
        type: 'object',
        properties: {
          treeClassifications: {
            type: 'string',
            title: 'label.tree_classification',
            attr: {
              maxlength: 255
            },
            icon: null,
            help: null,
            maxLength: 255,
            propertyOrder: 1
          },
          treeScientificName: {
            type: 'string',
            title: 'label.tree_scientific_name',
            attr: {
              maxlength: 255
            },
            icon: null,
            help: null,
            maxLength: 255,
            propertyOrder: 2
          }
        },

        icon: null,
        help: null
      },
      icon: null,
      help: null,
      propertyOrder: 8
    },
    contributionMeasurements: {
      type: 'array',
      title: 'label.add_measurements',
      items: {
        title: 'prototype',
        type: 'object',
        properties: {
          diameter: {
            type: 'integer',
            title: 'label.tree_diameter',
            icon: null,
            help: null,
            propertyOrder: 1
          },
          height: {
            type: 'integer',
            title: 'label.tree_height',
            icon: null,
            help: null,
            propertyOrder: 2
          },
          measurementDate: {
            type: 'string',
            title: 'label.measurement_date',
            widget: 'date',
            maxDate: true,
            icon: null,
            help: null,
            propertyOrder: 3
          }
        },
        required: ['diameter', 'height', 'measurementDate'],
        icon: null,
        help: null
      },
      icon: null,
      help: null,
      propertyOrder: 9
    }
  },
  required: ['treeCount', 'treeName', 'plantDate', 'geoLocation'],
  submit_url: '',
  submit_method: 'POST'
};
