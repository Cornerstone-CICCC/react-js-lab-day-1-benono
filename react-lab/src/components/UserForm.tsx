type Props = {
  userFormData: User;
  onSave: (user: User) => void;
  onChange: (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => void;
  onClear: () => void;
};

const UserForm = ({ userFormData, onSave, onChange, onClear }: Props) => {
  const handleSubmit = (e: React.FormEvent) => {
    console.log("userFormData", userFormData);
    e.preventDefault();
    onSave(userFormData);
  };

  return (
    <div>
      <h2>Bigger Controlled Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="field">
          <label htmlFor="firstname">First Name</label>
          <input
            type="text"
            name="fullname"
            id="fullname"
            value={userFormData.fullname}
            onChange={onChange}
          />
        </div>
        <div className="field">
          <label htmlFor="age">Age</label>
          <input
            type="number"
            name="age"
            id="age"
            value={userFormData.age}
            onChange={onChange}
          />
        </div>
        <div className="field">
          <label htmlFor="education">Education</label>
          <select
            name="education"
            id="education"
            value={userFormData.education}
            onChange={onChange}
          >
            <option value="Grade School">Grade School</option>
            <option value="High School">High School</option>
            <option value="College">College</option>
          </select>
        </div>
        <div className="field">
          <label htmlFor="gender">Gender</label>
          <input
            type="radio"
            name="gender"
            id="gender"
            value="Male"
            checked={userFormData.gender === "Male"}
            onChange={onChange}
          />
          <label htmlFor="gender-male">Male</label>
          <input
            type="radio"
            name="gender"
            id="gender-female"
            value="Female"
            checked={userFormData.gender === "Female"}
            onChange={onChange}
          />
          <label htmlFor="gender-female">Female</label>
          <input
            type="radio"
            name="gender"
            id="gender-other"
            value="Other"
            checked={userFormData.gender === "Other"}
            onChange={onChange}
          />
          <label htmlFor="gender-other">Other</label>
        </div>
        <div className="field">
          <label htmlFor="skills">Skills</label>
          <input
            type="checkbox"
            name="skills"
            id="skills"
            value="TypeScript"
            checked={userFormData.skills.includes("TypeScript")}
            onChange={onChange}
          />
          <label htmlFor="skills-typescript">TypeScript</label>
          <input
            type="checkbox"
            name="skills"
            id="skills"
            value="React"
            checked={userFormData.skills.includes("React")}
            onChange={onChange}
          />
          <label htmlFor="skills-react">React</label>
          <input
            type="checkbox"
            name="skills"
            id="skills"
            value="Node.js"
            checked={userFormData.skills.includes("Node.js")}
            onChange={onChange}
          />
          <label htmlFor="skills-nodejs">Node.js</label>
          <input
            type="checkbox"
            name="skills"
            id="skills"
            value="NoSQL"
            checked={userFormData.skills.includes("NoSQL")}
            onChange={onChange}
          />
          <label htmlFor="skills-nosql">NoSQL</label>
        </div>
        <div className="field">
          <label htmlFor="bio">About Yourself</label>
          <textarea
            name="bio"
            id="bio"
            value={userFormData.bio}
            onChange={onChange}
          ></textarea>
        </div>
        <button type="submit">{userFormData.id ? "Update" : "Save"}</button>
        <button type="button" onClick={onClear}>
          Clear
        </button>
      </form>
    </div>
  );
};

export default UserForm;
