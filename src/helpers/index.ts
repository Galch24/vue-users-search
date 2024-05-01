export const isNumber = (value?: string | number): boolean => {
  return value != null && value !== "" && !isNaN(Number(value.toString()));
};

export const getStringQueryParams = (search: string) => {
  const searchQuery = search.split(",").reduce((acc, item: string | number) => {
    const str = String(item).trim();
    if (isNumber(str)) {
      acc += `&id=${str}`;
    } else if (typeof str === "string") {
      acc += `&username=${str}`;
    }
    return acc;
  }, "");
  return searchQuery;
};
