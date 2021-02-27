export const LANG = [
  'JavaScript',
  'C++' ,
  'Ruby',
  'Java',
  'PHP',
  'Go'
];

export const getLanguages = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(LANG);
    }, 1000);
  });
};