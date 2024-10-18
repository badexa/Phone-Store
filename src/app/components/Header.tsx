interface HeaderProps {
  title: string;
}

export default function Header({ title }: HeaderProps) {
  return (
    <header className="bg-blue-500 text-white p-4">
      <h1 className="text-2xl font-bold">{title}</h1>
    </header>
  );
}