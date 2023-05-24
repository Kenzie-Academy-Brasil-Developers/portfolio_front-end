export function FooterIcon({ children, link }) {
  return (
    <li className="btn btn-outline text-primary hover:bg-white hover:text-black border-none rounded-full">
      <a href={link} target="_blank">
        {children}
      </a>
    </li>
  );
}
