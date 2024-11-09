interface ResourceProps {
  type: string;
  children: string;
}

function Resource({ type, children }: ResourceProps) {
  return (
    <li>
      <img src={`./../public/resources/${type}.png`} alt="" />
      <span>{children}</span>
    </li>
  );
}

export default Resource;
