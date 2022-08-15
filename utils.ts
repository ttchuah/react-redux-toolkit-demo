export const createAction = <T>(type: string, fn: () => Promise<T>) => {
  return {
    type,
    payload: fn,
  };
};
