export const usePreventLeave = () => {
  const listener = (e) => {
    e.preventDefault();
    // 크롬에서는 아래 처리가 필요함
    e.returnValue = '';
  };
  const enablePrevent = () => window.addEventListener('beforeunload', listener);
  const disablePrevent = () => window.removeEventListener('beforeunload', listener);
  return { enablePrevent, disablePrevent };
};
