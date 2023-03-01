export const checkLocalStorage = () => {
  if (localStorage.getItem('todoListData')) {
    return true;
  }
  return false;
};

export const saveToLocalStorage = (todoListData) => {
  window.localStorage.setItem('todoListData', JSON.stringify(todoListData));
};

export const loadLocalStorage = () => JSON.parse(window.localStorage.getItem('todoListData'));

export default { checkLocalStorage, saveToLocalStorage, loadLocalStorage };
