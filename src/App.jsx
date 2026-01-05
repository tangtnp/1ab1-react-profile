import { useEffect, useState } from "react";
import ProfileCard from "./components/ProfileCard";

function App() {
  const username = "tangtnp";

  // --- GitHub API states ---
  const [githubData, setGithubData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // --- Skills states ---
  const [skills, setSkills] = useState(["React", "JavaScript"]);
  const [newSkill, setNewSkill] = useState("");

  const addSkill = () => {
    const value = newSkill.trim();
    if (value !== "") {
      setSkills([...skills, value]);
      setNewSkill("");
    }
  };

  // --- Theme states (dark mode) ---
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "dark" || saved === "light") {
      setTheme(saved);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  // --- Fetch GitHub data ---
  useEffect(() => {
    setLoading(true);
    setError(null);

    fetch(`https://api.github.com/users/${username}`)
      .then((res) => res.json())
      .then((data) => {
        if (data?.message === "Not Found") {
          setError("User not found");
          setGithubData(null);
          return;
        }
        setGithubData(data);
      })
      .catch(() => {
        setError("Network error");
        setGithubData(null);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [username]);


  const isDark = theme === "dark";
  return (
    <div
      style={{
        minHeight: "100vh",
        padding: 24,
        background: isDark ? "#111" : "#fff",
        color: isDark ? "#fff" : "#111",
        textAlign: "center",
      }}
    >
      <h1>My First React App</h1>

      {/* Dark mode toggle */}
      <div style={{ display: "flex", justifyContent: "center", gap: 10, marginBottom: 18 }}>
        <button
          onClick={() => setTheme(isDark ? "light" : "dark")}
          style={{
            padding: "10px 14px",
            borderRadius: 10,
            border: "1px solid #ccc",
            cursor: "pointer",
          }}
        >
          Theme: {theme}
        </button>
      </div>

      {/* Loading / Error / Data */}
      {loading ? (
        <p>🌀 Loading data from GitHub...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <ProfileCard
          name={githubData.name || githubData.login}
          role="GitHub User"
          bio={githubData.bio || "No bio available"}
          skills={skills}
          newSkill={newSkill}
          setNewSkill={setNewSkill}
          addSkill={addSkill}
          isDark={isDark}
        />
      )}
    </div>
  );
}

export default App;
