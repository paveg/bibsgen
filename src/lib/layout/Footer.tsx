import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="wrapper">
      <div className="flex">
        <p className="text-xs">
          ©{new Date().getFullYear()} -{' '}
          <Link
            to="https://x.com/paveg_"
            target="_blank"
            rel="noopener noreferrer"
          >
            funai
          </Link>{' '}
          from{' '}
          <Link
            to="https://funairacing.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            FUNAI RACING
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
