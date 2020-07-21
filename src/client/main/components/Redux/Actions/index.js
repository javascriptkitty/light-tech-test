export const updateAction = (index, newValue) => {
  return {
    type: "update",
    index,
    newValue,
  };
};

export const addAction = (value) => {
  return {
    type: "add",
    giraffe: value,
  };
};
export const deleteAction = (index) => {
  return {
    type: "delete",
    index,
  };
};
