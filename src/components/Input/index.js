import "./styles.css";

export default function Input({ value, onChange, ...props }) {
  return (
    <input className="input" value={value} onChange={onChange} {...props} />
  );
}