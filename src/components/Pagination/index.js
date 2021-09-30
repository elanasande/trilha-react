export default function Pagination({ page }) {
  return (
    <div>
      <button>{"<"}</button>

      <span>Página {page}</span>

      <button>{">"}</button>
    </div>
  );
};