export default function Check({ isAnimated = false, strokeWidth = 4, ...props }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      strokeWidth={strokeWidth}
      stroke="currentColor"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      {isAnimated && (
        <style>{`
          path#check-icon {
            stroke-dasharray: 22px;
            stroke-dashoffset: 22px;
            animation: check 0.2s ease-out forwards;
          }

          @keyframes check {
            from {
              stroke-dashoffset: 22px;
            }
            to {
              stroke-dashoffset: 0;
            }
          }
        `}</style>
      )}
      <path id="check-icon" d="M5 12l5 5l10 -10"></path>
    </svg>
  );
}
