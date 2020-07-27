/**
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
import { t } from '@superset-ui/translation';
import { validateNonEmpty } from '@superset-ui/validator';
import { ControlPanelConfig } from '@superset-ui/chart-controls';

const config: ControlPanelConfig = {


  // For control input types, see: superset-frontend/src/explore/components/controls/index.js
  controlPanelSections: [
    {
      label: t('Query'),
      expanded: true,
      controlSetRows: [['groupby'], ['metrics'], ['adhoc_filters'], ['row_limit', null]],
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
  // Time series charts need to override the `druidTimeSeries` and `sqlaTimeSeries`
  // sections to add the time grain dropdown.
  sectionOverrides: {
    druidTimeSeries: {
      controlSetRows: [['granularity', 'druid_time_origin'], ['time_range']],
    },
    sqlaTimeSeries: {
      controlSetRows: [['granularity_sqla', 'time_grain_sqla'], ['time_range']],
    },
  },
  controlOverrides: {
    series: {
      validators: [validateNonEmpty],
      clearable: false,
    },
    row_limit: {
      default: 100,
    },
  },
};

export default config;
