import ProfileCard from "./components/ProfileCard";
import RegistrationForm from "./components/RegistrationForm";

function App() {
  return (
    <div style={{ padding: "20px", fontFamily: "system-ui, sans-serif" }}>
      <h1>WS101 — Week 2 Lab</h1>

      <section style={{ marginBottom: "40px" }}>
        <h2>Profile Card</h2>
        <ProfileCard name="Juan Dela Cruz" course="BSIT" year={2}>
          <p>Active student · Dean's Lister</p>
        </ProfileCard>
      </section>

      <section>
        <h2>Registration Form</h2>
        <RegistrationForm />
      </section>
    </div>
  );
}

export default App;
