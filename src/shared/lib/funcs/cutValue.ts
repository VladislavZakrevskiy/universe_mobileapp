export const cutValue = (value: number) => {
    if (value >= 0 && value < 10 ** 3) return `${value}`;
    if (value < 10 ** 6) return `${Math.floor(value / 10**3)}K`;
    if (value <= 10 ** 9) return `${Math.floor(value / 10**6)}M`;
    if (value < 10 ** 12) return `${Math.ceil(value / 10**9)}B`;
  };