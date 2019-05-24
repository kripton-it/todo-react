export const toggleProperty = (arr, id, property) => arr.map(item => {
  if (item.id === id) {
    return { ...item, [property]: !item[property] };
  } else {
    return item;
  }
});