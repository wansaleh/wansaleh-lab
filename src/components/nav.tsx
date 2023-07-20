import ThemeSelect from './theme-select';

export default function Nav() {
  return (
    <header>
      <div className="flex items-center p-4">
        <div>
          <h1 className="font-black">Lab</h1>
        </div>
        <div className="flex-1" />
        <div>
          <ThemeSelect />
        </div>
      </div>
    </header>
  );
}
