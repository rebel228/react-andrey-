export const getLsItem = (name: string): string => {
  const inputValue = localStorage.getItem(name);

  if (!inputValue) return '';

  return inputValue;

  // return JSON.parse(inputValue);
};
