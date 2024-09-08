import { FaGithub, FaXTwitter } from 'react-icons/fa6';
import { MdOutlineContactSupport } from 'react-icons/md';
import { Link } from 'react-router-dom';

import { Button } from '@/components/ui/button';

const Footer = () => {
  return (
    <footer className="w-full px-6">
      <section className="wrapper flex items-center justify-between">
        <div>
          <p className="text-xs">
            ©{new Date().getFullYear()} funai from FUNAI RACING
          </p>
        </div>
        <div className="flex content-baseline items-center">
          <Button variant="ghost" asChild>
            <Link
              to="https://funairacing.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/assets/funairacing-logo.png"
                alt="リンクボタン画像"
                width={32}
                height={32}
                className="mt-1.5"
              />
            </Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link
              to="https://x.com/funairacing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaXTwitter className="size-6" />
            </Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link
              to="https://github.com/paveg/bibsgen"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="size-6" />
            </Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link
              to="https://x.com/paveg_"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MdOutlineContactSupport className="size-6" />
            </Link>
          </Button>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
