export const User = ({ user }) => {
  return <p className={`P${user.id}`}>{user.user}</p>;
};
