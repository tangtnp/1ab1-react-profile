import { useState } from "react";

function ProfileCard({
  name,
  role,
  bio,
  filteredSkills,
  newSkill,
  setNewSkill,
  addSkill,
  searchTerm,
  setSearchTerm,
  deleteSkill,
  isDark,
}) {
  const [likes, setLikes] = useState(0);

  return (
    <div
      style={{
        maxWidth: 520,
        margin: "0 auto",
        border: "1px solid #ccc",
        padding: 20,
        borderRadius: 12,
        background: isDark ? "#1a1a1a" : "#fafafa",
      }}
    >
      <h2 style={{ marginTop: 0 }}>{name}</h2>
      <p><strong>Role:</strong> {role}</p>
      <p>{bio}</p>

      {/* Like */}
      <button
        onClick={() => setLikes(likes + 1)}
        style={{
          padding: "8px 12px",
          borderRadius: 8,
          border: "1px solid #ccc",
          cursor: "pointer",
          marginBottom: 14,
          fontSize: 14,
        }}
      >
        👍 Like: {likes}
      </button>

      {/* ✅ SKILL LIST (ย้ายมาไว้ด้านบน + ทำให้เล็กลง) */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: 6,
          marginBottom: 14,
        }}
      >
        {filteredSkills.map((skill, index) => {
          const isReact = skill.toLowerCase().includes("react");

          return (
            <span
              key={index}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 6,
                padding: "4px 8px",
                borderRadius: 999,
                fontSize: 12,
                border: "1px solid #ccc",
                background: isReact ? "#dbeafe" : "transparent",
                color: isReact ? "#1d4ed8" : "inherit",
                fontWeight: isReact ? 600 : 400,
              }}
            >
              {skill}
              <button
                onClick={() => deleteSkill(index)}
                style={{
                  border: "none",
                  background: "transparent",
                  cursor: "pointer",
                  fontSize: 12,
                  lineHeight: 1,
                }}
              >
                ✕
              </button>
            </span>
          );
        })}
      </div>

      {/* Search */}
      <input
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search skills..."
        style={{
          width: "95%",
          padding: "8px 10px",
          borderRadius: 8,
          border: "1px solid #ccc",
          marginBottom: 10,
          fontSize: 14,
        }}
      />

      {/* Add Skill */}
      <div style={{ display: "flex", gap: 8 }}>
        <input
          value={newSkill}
          onChange={(e) => setNewSkill(e.target.value)}
          placeholder="Add a skill"
          style={{
            flex: 1,
            padding: "8px 10px",
            borderRadius: 8,
            border: "1px solid #ccc",
            fontSize: 14,
          }}
        />
        <button
          onClick={addSkill}
          style={{
            padding: "8px 12px",
            borderRadius: 8,
            border: "1px solid #ccc",
            cursor: "pointer",
            fontSize: 14,
          }}
        >
          Add
        </button>
      </div>
    </div>
  );
}

export default ProfileCard;
