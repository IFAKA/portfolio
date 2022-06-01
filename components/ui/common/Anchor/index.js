export default function Anchor({ children, url }) {
  return (
    <a
      target="_blank"
      rel="noreferrer"
      className="underline"
      href={`${url}`}
    >
      {children}
    </a>
  );
}
