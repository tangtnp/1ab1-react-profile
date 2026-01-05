import { useState } from "react";

function ProfileCard({
  name,
  role,
  bio,
  skills,
  newSkill,
  setNewSkill,
  addSkill,
  isDark,
}) {
  const [likes, setLikes] = useState(0);

  return (
    <div
      style={{
        maxWidth: 480,
        margin: "0 auto",
        border: "1px solid #ccc",
        padding: 20,
        borderRadius: 12,
        background: isDark ? "#1a1a1a" : "#fafafa",
      }}
    >
      <h2 style={{ marginTop: 0 }}>{name}</h2>
      <p>
        <strong>Role:</strong> {role}
      </p>
      <p>{bio}</p>

      {/* Like */}
      <button
        onClick={() => setLikes(likes + 1)}
        style={{
          padding: "10px 14px",
          borderRadius: 10,
          border: "1px solid #ccc",
          cursor: "pointer",
          marginBottom: 16,
        }}
      >
        Like: {likes}
      </button>

      {/* Skills input */}
      <div style={{ display: "flex", gap: 10, marginBottom: 12 }}>
        <input
          value={newSkill}
          onChange={(e) => setNewSkill(e.target.value)}
          placeholder="Add a skill"
          style={{
            flex: 1,
            padding: "10px 12px",
            borderRadius: 10,
            border: "1px solid #ccc",
          }}
        />
        <button
          onClick={addSkill}
          style={{
            padding: "10px 14px",
            borderRadius: 10,
            border: "1px solid #ccc",
            cursor: "pointer",
          }}
        >
          Add
        </button>
      </div>

      {/* Skill tags */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: 8, justifyContent: "center" }}>
        {skills.map((skill, index) => (
          <span
            key={index} // ✅ key ใน map (ตาม Bonus Criteria)
            style={{
              padding: "6px 10px",
              borderRadius: 999,
              border: "1px solid #ccc",
              fontSize: 14,
            }}
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

export default ProfileCard;
