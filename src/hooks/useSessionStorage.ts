export const useSessionStorage = () => {
  const saveItem = (key: string, value: string) => {
    sessionStorage.setItem(key, value);
  };

  const getItem = (key: string) => {
    return sessionStorage.getItem(key);
  };

  const deleteItem = (key: string) => {
    sessionStorage.removeItem(key);
  };

  return { saveItem, getItem, deleteItem };
};
