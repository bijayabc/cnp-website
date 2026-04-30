interface DividerProps {
  className?: string;
}

export default function Divider({ className = '' }: DividerProps) {
  return (
    <div className={`flex items-center gap-2 mt-4 mb-6 ${className}`}>
      <div className="h-1 w-12 rounded-full bg-accent" />
      <div className="h-1 w-4 rounded-full bg-accent opacity-40" />
    </div>
  );
}
