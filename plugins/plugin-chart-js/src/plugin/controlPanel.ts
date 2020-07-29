"use strict";

import { t } from '@superset-ui/translation';
import { ControlPanelConfig } from '@superset-ui/chart-controls';

const config: ControlPanelConfig = {
  controlPanelSections: [
    {
      label: t('Query'),
      expanded: true,
      controlSetRows: [['metrics'], ['adhoc_filters']],
    },
    {
      label: t('Control'),
      expanded: true,
      controlSetRows: [
        [
          {
            name: 'function_eval',
            config: {
              type: 'TextControl',
              default: '',
              renderTrigger: true,
              // ^ this makes it apply instantaneously, without triggering a "run query" button
              label: t('Function'),
              description: t('Function'),
            },
          },
        ],
      ],
    },
  ],
  sectionOverrides: {
    druidTimeSeries: {
      controlSetRows: [['granularity', 'druid_time_origin'], ['time_range']]
    },
    sqlaTimeSeries: {
      controlSetRows: [['granularity_sqla', 'time_grain_sqla'], ['time_range']]
    }
  },
  controlOverrides: {
    y_axis_format: {
      label: 'Number format'
    }
  },
};

export default config;
