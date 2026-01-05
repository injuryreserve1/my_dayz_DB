import cls from './RangeInput.module.css';
import type { ChangeEvent, CSSProperties } from 'react';
import { classNames } from '../lib/classNames';


type keyValue = 'min' | 'max'
type color = "red" | "green" | "blue" | "purple"

interface Props {
  label: string;
  min: number;
  max: number;
  value: Record<keyValue, number>;
  onChange: (value: { min: number; max: number }) => void;
  color?: color;
}

const RangeInput = ({ label, value, min, max, onChange, color = "green" }: Props) => {
  const minDistance = (max - min) * 0.01;

  const mods = {
    [cls[color]]: true,
  }

  const handleChangeInput1 = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = +e.target.value;
    if (newValue + minDistance >= value.max) return;
    onChange({...value, min: newValue})
  };

  const handleChangeInput2 = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = +e.target.value;
    if (newValue - minDistance <= value.min) return;
    onChange({...value, max: newValue})
  };

  const progressStyle = {
    '--min-input-value': value.min,
    '--max-input-value': value.max,
    '--range': max - min,
  } as CSSProperties;

  return (
    <div className={classNames(cls.Wrapper, mods)}>
      <label className={cls.Label} htmlFor="firstInput">
        {label}
      </label>
      <div className={cls.RangeSlider} style={progressStyle}>
        <div className={cls.Progress}></div>
        <input
          className={cls.RangeInput}
          type="range"
          value={value.min}
          onChange={handleChangeInput1}
          min={min}
          max={max}
          id="firstInput"
        />
        <output
          className={cls.Output}
          htmlFor="firstInput"
          style={{ '--input-value': `${value.min}` } as CSSProperties}
        >
          {value.min}
        </output>
        <input
          className={cls.RangeInput}
          type="range"
          value={value.max}
          onChange={handleChangeInput2}
          min={min}
          max={max}
          id="secondInput"
        />
        <output
          className={cls.Output}
          htmlFor="secondInput"
          style={{ '--input-value': `${value.max}` } as CSSProperties}
        >
          {value.max}
        </output>
      </div>
    </div>
  );
};

export default RangeInput;
