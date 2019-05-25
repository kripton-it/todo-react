export const toggleProperty = (arr, id, property) => arr.map(item => {
  if (item.id === id) {
    return { ...item, [property]: !item[property] };
  } else {
    return item;
  }
});

export const changeActiveFilter = (arr, id) => arr.map(item => {
  if (item.id === id) {
    return { ...item, isActive: true };
  } else {
    return { ...item, isActive: false };
  }
})