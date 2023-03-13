export const useConfirm = (message, callback) => {
  const confirmAction = () => {
    if (window.confirm(message)) {
      callback();
    }
  };

  return confirmAction;
};
