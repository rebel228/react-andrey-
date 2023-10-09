export const getLsString = (name: string): string => {
  try {
    const inputValue = localStorage.getItem(name);

    if (!inputValue) return '';

    return inputValue;
  } catch (e) {
    console.error(e);

    return '';
  }
};

export const setLsString = (name: string, item: string): boolean => {
  try {
    localStorage.setItem(name, item);

    return true;
  } catch (e) {
    console.error(e);

    return false;
  }
};
