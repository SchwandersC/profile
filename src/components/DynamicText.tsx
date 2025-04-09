import React, { useState, useEffect } from "react";

interface DynamicTextProps {
  options: string[];
  interval?: number;
}

const DynamicText: React.FC<DynamicTextProps> = ({ options, interval = 3000 }) => {
  const [index, setIndex] = useState<number>(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % options.length);
    }, interval);
    return () => clearInterval(timer);
  }, [options, interval]);

  return <span style={{ textDecoration: 'underline' }}>{options[index]}</span>;

};

export default DynamicText;
