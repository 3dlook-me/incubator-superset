import { ChartProps, DataRecord } from '@superset-ui/chart';

type TimestampType = string | number | Date;

interface JsDatum extends DataRecord {
  __timestamp: TimestampType;
}

export default function transformProps(chartProps: ChartProps) {

  const { width, height, formData, queryData } = chartProps;
  const data = queryData.data as JsDatum[];
  // let paid = 0; let all = 0; data.forEach(element => {if (element['nickname'] != 'smb_free') {paid = paid + element['COUNT(id)'];} all = all + element['COUNT(id)'];}); text = paid / all * 100;

  return {
    width,
    height,

    data: data,

    functionEval: formData.functionEval,
  };
}
