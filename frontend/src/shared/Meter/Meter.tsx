import type { FC } from 'react';
import cls from './Meter.module.css';
import { classNames } from '@/shared/lib/classNames';

interface Props {
  low?: number;
  high?: number;
  optimum?: number;
  min?: number;
  max?: number;
  value: number;
}

const Meter: FC<Props> = ({
  low = 70,
  high = 140,
  optimum = 100,
  min = 0,
  max = 200,
  value,
}) => {
  const meterClass = classNames(cls.Meter, {
    [cls.isLow]: value < low,
    [cls.isMedium]: value >= low && value <= high,
    [cls.isHigh]: value > high,
  });

  return (
    <meter
      className={meterClass}
      low={low}
      high={high}
      optimum={optimum}
      min={min}
      max={max}
      value={value}
    >
      {value}/200
    </meter>
  );
};

export default Meter;
