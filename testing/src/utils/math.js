const add = (a, b) => a + b;

const UserName = (name) => {
  if (!name) return null;
  else return `Hello ${name}`;
};

export { add, UserName };
