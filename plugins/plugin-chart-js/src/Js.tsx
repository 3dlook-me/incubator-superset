import React, { PureComponent, createRef } from 'react';
import styled, { supersetTheme } from '@superset-ui/style';


interface JsStylesProps {
  height: number;
  width: number;
  headerFontSize: keyof typeof supersetTheme.typography.sizes;
  boldText: boolean;
}

export type JsProps = {
  data: Record<any, any>;
  boldText: boolean;
  functionEval: string;
  width: number;
  height: number;
};


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

  rootElem = createRef<HTMLDivElement>();


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
