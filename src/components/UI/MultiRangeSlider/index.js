import React, { useCallback, useEffect, useState, useRef } from "react";
import PropTypes from "prop-types";
import "./styles.scss";
import { useSelector } from "react-redux";

const MultiRangeSlider = ({
  disabled,
  name,
  min,
  max,
  onChange,
  dataTestid,
}) => {
  const dimensions = useSelector((state) => state.dimensions);
  const costDimension = dimensions.cost;

  const [minVal, setMinVal] = useState(costDimension[name].min);
  const [maxVal, setMaxVal] = useState(costDimension[name].max);
  const minValRef = useRef(costDimension[name].min);
  const maxValRef = useRef(costDimension[name].max);
  const range = useRef(null);

  // Convert to percentage
  const getPercent = useCallback(
    (value) => Math.round(((value - min) / (max - min)) * 100),
    [min, max]
  );

  // Set width of the range to decrease from both sides
  useEffect(() => {
    const minPercent = getPercent(minVal);
    const maxPercent = getPercent(maxVal);
    if (range.current) {
      range.current.style.left = `${minPercent}%`;
      range.current.style.right = `${maxPercent}%`;
      range.current.style.width = `${maxPercent - minPercent}%`;
    }
  }, [minVal, maxVal, getPercent]);

  // Get min and max values when their state changes
  useEffect(() => {
    onChange({ name, min: minVal, max: maxVal });
  }, [minVal, maxVal, onChange, name]);

  // Set min and max values to their minimum and maximum when disabled
  useEffect(() => {
    if (disabled) {
      setMinVal(min);
      setMaxVal(max);
    }
  }, [disabled]);

  return (
    <div className="container">
      <input
        type="range"
        min={min}
        max={max}
        value={minVal}
        step="5"
        onChange={(event) => {
          const value = Math.min(Number(event.target.value), maxVal - 5);
          setMinVal(value);
          minValRef.current = value;
        }}
        className={`thumb thumb--left ${disabled ? "passive-thumb" : ""}`}
        disabled={disabled}
        name={name}
        style={{ zIndex: minVal > max - 100 && "5" }}
        data-testid={dataTestid.low}
      />
      <input
        type="range"
        min={min}
        max={max}
        value={maxVal}
        step="5"
        onChange={(event) => {
          const value = Math.max(Number(event.target.value), minVal + 5);
          setMaxVal(value);
          maxValRef.current = value;
        }}
        disabled={disabled}
        name={name}
        className={`thumb thumb--left ${disabled ? "passive-thumb" : ""}`}
        data-testid={dataTestid.high}
      />
      <div className="slider" tabIndex="-1">
        <div className="slider__track" />
        <div
          ref={range}
          className={`slider__range${disabled ? "__passive" : ""}`}
        />
        <div className="slider__left-value">{minVal}</div>
        <div className="slider__right-value">{maxVal}</div>
      </div>
    </div>
  );
};

MultiRangeSlider.propTypes = {
  name: PropTypes.string.isRequired,
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
  dataTestid: PropTypes.object,
};

export default MultiRangeSlider;
