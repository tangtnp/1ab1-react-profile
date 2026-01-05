// src/App.jsx
import ProfileCard from './components/ProfileCard';

function App() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '20px',
      }}
    >
      <h1>My Team Portfolio</h1>

      {/* ลองส่ง Props ข้อมูลของตัวเองลงไป */}
      <ProfileCard
        name="Tanathorn Piyachart"
        role="Student @ CEDT"
        bio="Computer Engineering"
      />

      {/* ลองเรียกใช้ซ้ำอีกครั้งด้วยข้อมูลที่ต่างออกไป */}
      <ProfileCard
        name="John Doe"
        role="Guest Developer"
        bio="I love coding and learning new things."
      />
    </div>
  );
}

export default App;
