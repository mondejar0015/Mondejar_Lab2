interface ButtonProps {
  label: string;
  variant?: "primary" | "secondary" | "danger";
  disabled?: boolean;
  onClick: () => void;
}

const variantStyles: Record<string, React.CSSProperties> = {
  primary: { background: "#2563eb", color: "#fff" },
  secondary: { background: "#6b7280", color: "#fff" },
  danger: { background: "#dc2626", color: "#fff" },
};

function Button({ label, variant = "primary", disabled = false, onClick }: ButtonProps) {
  return (
    <button
      style={{
        ...variantStyles[variant],
        padding: "8px 16px",
        border: "none",
        borderRadius: "6px",
        cursor: disabled ? "not-allowed" : "pointer",
        opacity: disabled ? 0.5 : 1,
      }}
      disabled={disabled}
      onClick={onClick}
    >
      {label}
    </button>
  );
}

export default Button;
