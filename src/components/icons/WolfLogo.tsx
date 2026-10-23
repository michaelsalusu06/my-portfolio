export function WolfLogo({ className = "w-7 h-7" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-label="Wolf Logo"
    >
      <path d="M12 21.5l-3.5-3.5L3 13.5l1-7 4.5 4.5L12 7l3.5 4 4.5-4.5 1 7-5.5 4.5L12 21.5zM7.5 11.5L5.5 8l-.5 4.5 2.5 2.5V11.5zm9 0v3.5l2.5-2.5-.5-4.5-2 3.5zm-4.5-1.5L10 8.5 8.5 11l3.5 5 3.5-5-1.5-2.5L12 10z" />
    </svg>
  );
}
