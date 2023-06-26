export const USER_ACCESS = 'USER_ACCESS';

export const loginUser = (name, email) => ({
  type: USER_ACCESS,
  payload: {
    name,
    email,
  }
});
