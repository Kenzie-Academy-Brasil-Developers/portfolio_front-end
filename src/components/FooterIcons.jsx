export function FooterIcon({ children, link }) {
  return (
    <li className="btn btn-outline btn-primary transition-all duration-300 border-none rounded-full">
      <a href={link} target="_blank">
        {children}
      </a>
    </li>
  );
}
