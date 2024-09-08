import { Link } from 'react-router-dom';

import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/lib/components/theme-toggle';

const Header = () => {
  return (
    <header className="bg-base-100/80 sticky top-0 z-10 w-full backdrop-blur-md">
      <section className="wrapper mx-auto flex items-center justify-between py-2">
        <Button variant="link" asChild>
          <Link to="/">ホーム</Link>
        </Button>
        <div className="ml-auto">
          <div className="flex space-x-4">
            <Button className="ml-4" variant="link" asChild>
              <Link to="/changelog">更新履歴</Link>
            </Button>
            <ThemeToggle />
          </div>
        </div>
      </section>
    </header>
  );
};

export default Header;
