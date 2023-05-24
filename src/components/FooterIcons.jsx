export function FooterIcon({ children, link }) {
  return (
    <li className="btn btn-outline border-none rounded-full">
      <a href={link} target="_blank">
        {children}
      </a>
    </li>
  );
}
