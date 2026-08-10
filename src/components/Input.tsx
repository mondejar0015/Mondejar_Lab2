interface InputProps {
  label: string;
  name: string;
  type?: "text" | "email" | "password" | "number";
  value: string | number;
  placeholder?: string;
  error?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function Input({ label, name, type = "text", value, placeholder, error, onChange }: InputProps) {
  return (
    <div style={{ marginBottom: "12px" }}>
      <label htmlFor={name} style={{ display: "block", marginBottom: "4px", fontWeight: 500 }}>
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        style={{
          width: "100%",
          padding: "8px 12px",
          border: error ? "1px solid #dc2626" : "1px solid #d1d5db",
          borderRadius: "6px",
          fontSize: "14px",
        }}
      />
      {error && <p style={{ color: "#dc2626", fontSize: "12px", margin: "4px 0 0" }}>{error}</p>}
    </div>
  );
}

export default Input;
