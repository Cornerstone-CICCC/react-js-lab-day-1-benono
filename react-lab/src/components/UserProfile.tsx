type Props = {
  user: User | undefined;
};

const UserProfile = ({ user }: Props) => {
  if (!user) return <div>No user selected</div>;

  return (
    <div>
      <h2>{user.fullname}</h2>
      <p>{user.age}</p>
      <p>{user.education}</p>
      <p>{user.gender}</p>
      <p>{user.skills.join(", ")}</p>
      <p>{user.bio}</p>
    </div>
  );
};

export default UserProfile;
