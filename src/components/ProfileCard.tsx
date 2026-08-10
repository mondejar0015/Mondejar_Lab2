interface ProfileCardProps {
  name: string;
  course: string;
  year: number;
  avatarUrl?: string;
  children?: React.ReactNode;
}

function ProfileCard({ name, course, year, avatarUrl, children }: ProfileCardProps) {
  return (
    <div
      style={{
        border: "1px solid #e5e7eb",
        borderRadius: "12px",
        padding: "20px",
        maxWidth: "320px",
        boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
      }}
    >
      {avatarUrl && (
        <img
          src={avatarUrl}
          alt={name}
          style={{ width: "80px", height: "80px", borderRadius: "50%", objectFit: "cover" }}
        />
      )}
      <h2 style={{ margin: "8px 0 4px" }}>{name}</h2>
      <p style={{ color: "#6b7280", margin: 0 }}>
        {course} — Year {year}
      </p>
      {children && <div style={{ marginTop: "12px" }}>{children}</div>}
    </div>
  );
}

export default ProfileCard;

