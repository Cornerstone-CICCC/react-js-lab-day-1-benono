type Props = {
  users: User[];
  onView: (id: number) => void;
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
};

const UserList = ({ users, onView, onEdit, onDelete }: Props) => {
  return (
    <div>
      <h2>User List</h2>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Full Name</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.fullname}</td>
              <td>
                <button onClick={() => onView(user.id)}>View</button>
                <button onClick={() => onEdit(user.id)}>Edit</button>
                <button onClick={() => onDelete(user.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
