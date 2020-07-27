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

import React, { PureComponent, createRef } from 'react';
import styled, { supersetTheme } from '@superset-ui/style';

import { getNumberFormatter, NumberFormatter } from '@superset-ui/number-format';
import { XYChart, AreaSeries, CrossHair, LinearGradient } from '@data-ui/xy-chart';
import { BRAND_COLOR } from '@superset-ui/color';
import { computeMaxFontSize } from '@superset-ui/dimension';

import { smartDateVerboseFormatter, TimeFormatter } from '@superset-ui/time-format';

const defaultNumberFormatter = getNumberFormatter();

const CHART_MARGIN = {
  top: 4,
  right: 4,
  bottom: 4,
  left: 4,
};

const PROPORTION = {
  // text size: proportion of the chart container sans trendline
  HEADER: 0.3,
  SUBHEADER: 0.125,
  // trendline size: proportion of the whole chart container
  TRENDLINE: 0.3,
};

type TimeSeriesDatum = {
  x: number; // timestamp as a number
  y: number | null;
};

interface JsStylesProps {
  height: number;
  width: number;
  headerFontSize: keyof typeof supersetTheme.typography.sizes;
  boldText: boolean;
}

export type JsProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: Record<any, any>; // please add additional typing for your data here
  // add typing here for the props you pass in from transformProps.ts!
  boldText: boolean;
  functionEval: string;
  width: number;
  height: number;
};

// The following Styles component is a <div> element, which has been styled using Emotion
// For docs, visit https://emotion.sh/docs/styled

// Theming variables are provided for your use via a ThemeProvider
// imported from @superset-ui/style. For variables available, please visit
// https://github.com/apache-superset/superset-ui/blob/master/packages/superset-ui-style/src/index.ts

const Styles = styled.div<JsStylesProps>`
  background-color: ${({ theme }) => theme.colors.secondary.light2};
  padding: ${({ theme }) => theme.gridUnit * 4}px;
  border-radius: ${({ theme }) => theme.gridUnit * 2}px;
  height: ${({ height }) => height};
  width: ${({ width }) => width};
  overflow-y: scroll;

  h3 {
    /* You can use your props to control CSS! */
    font-size: ${({ theme, headerFontSize }) => theme.typography.sizes[headerFontSize]};
    font-weight: ${({ theme, boldText }) => theme.typography.weights[boldText ? 'bold' : 'normal']};
  }
`;


export default class Js extends PureComponent<JsProps> {
  // Often, you just want to get a hold of the DOM and go nuts.
  // Here, you can do that with createRef, and componentDidMount.

  rootElem = createRef<HTMLDivElement>();

  componentDidMount() {
    const root = this.rootElem.current as HTMLElement;
    console.log('Plugin element', root);
  }


  render() {
    const { functionEval, data, height } = this.props;


    let text = '';

    eval(functionEval);

    return (
      <div style={{ height }}>
        {text}
      </div>
    );
  }
}
