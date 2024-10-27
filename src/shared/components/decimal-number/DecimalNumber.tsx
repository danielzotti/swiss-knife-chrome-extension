import { useEffect, useState } from 'react';
import './DecimalNumber.scss';

type Props = {
  value: number | null | undefined;
  separator: string;
}
export const DecimalNumber = (props: Props) => {

  const [integer, setInteger] = useState<string>();
  const [decimal, setDecimal] = useState<string>();
  const [separator] = useState(props.separator ? props.separator : ',');

  useEffect(() => {
    formatValue(props.value);
  });

  const formatValue = (val: number | null | undefined) => {
    if(val === null || val === undefined) {
      return null;
    }
    const [num, dec] = val.toFixed(2).split('.');
    setInteger(num);
    setDecimal(dec);
  };

  return (
    <div className="DecimalNumber">
      <span className="integer">{ integer }</span><span className="separator">{ separator }</span><span
      className="decimal">{ decimal }</span>
    </div>
  );
};
