import { useState } from "react";
import UserForm from "./components/UserForm";
import UserList from "./components/UserList";
import UserProfile from "./components/UserProfile";

const App = () => {
  const [selectedUserId, setSelectedUserId] = useState<number | null>(null);
  const [userFormData, setUserFormData] = useState<User>({
    id: null,
    fullname: "",
    age: 18,
    education: "Grade School",
    gender: "Male",
    skills: [],
    bio: "",
  });
  const [users, setUsers] = useState<User[]>([
    {
      id: 1,
      fullname: "John Doe",
      age: 25,
      education: "College",
      gender: "Male",
      skills: ["React", "JavaScript", "CSS"],
      bio: "I am a software engineer",
    },
  ]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value, type } = e.target;

    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setUserFormData((prevState) => {
        const skills = checked
          ? [...prevState.skills, value]
          : prevState.skills.filter((skill) => skill !== value);
        return { ...prevState, skills };
      });
    } else {
      setUserFormData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  const handleSave = (user: User) => {
    if (!user.fullname) {
      alert("Please fill in all required fields");
      return;
    }

    // update if user already exists
    const existingUser = users.find((u) => u.id === user.id);
    if (existingUser) {
      setUsers((prevState) =>
        prevState.map((u) => (u.id === user.id ? { ...u, ...user } : u))
      );
    } else {
      setUsers((prevState) => [
        ...prevState,
        { ...user, id: prevState.length + 1 },
      ]);
      handleClear();
    }
  };

  const handleView = (id: number) => {
    setSelectedUserId(id);
  };

  const handleEdit = (id: number) => {
    const user = users.find((u) => u.id === id);
    if (user) {
      setUserFormData(user);
    }
  };

  const handleDelete = (id: number) => {
    setUsers((prevState) => prevState.filter((u) => u.id !== id));
    if (selectedUserId === id) {
      setSelectedUserId(null);
    }
    handleClear();
  };

  const handleClear = () => {
    setUserFormData({
      id: null,
      fullname: "",
      age: 0,
      education: "Grade School",
      gender: "Male",
      skills: [],
      bio: "",
    });
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          margin: "1rem auto",
          maxWidth: "1000px",
          width: "80%",
          padding: "0 1rem",
        }}
      >
        <UserForm
          onSave={handleSave}
          userFormData={userFormData}
          onChange={handleChange}
          onClear={handleClear}
        />
        <UserList
          users={users}
          onView={handleView}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      </div>
      <UserProfile user={users.find((u) => u.id === selectedUserId)} />
    </>
  );
};

export default App;
