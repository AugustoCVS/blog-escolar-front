const saveTokensOnStorage = (id: string): void => {
  localStorage.setItem("@token", id);
};

const getToken = (): string | null => {
  return localStorage.getItem("@token");
};

const removeTokensOnStorage = (): void => {
  localStorage.removeItem("@token");
};

export {
  saveTokensOnStorage,
  getToken,
  removeTokensOnStorage,
};