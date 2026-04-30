interface SectionTagProps {
  children: React.ReactNode;
  light?: boolean;
}

export default function SectionTag({ children, light = false }: SectionTagProps) {
  return (
    <span
      className={`inline-block text-sm font-semibold tracking-widest uppercase mb-3 ${
        light ? 'text-accent-light' : 'text-accent'
      }`}
    >
      {children}
    </span>
  );
}
