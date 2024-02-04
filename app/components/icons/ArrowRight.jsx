export default function ArrowRight(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      strokeWidth="2"
      stroke="currentColor"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="icon-arrow-right"
      {...props}
    >
      <g className="head">
        <path d="M10 16L14 12" />
        <path d="M10 8L14 12" />
      </g>
      <path className="line" d="M0 12H14" />
    </svg>
  );
}
