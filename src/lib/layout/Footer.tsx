const Footer = () => {
  return (
    <footer className="wrapper">
      <div className="flex">
        <p className="text-xs">
          {new Date().getFullYear()} -{' '}
          <a
            href="https://x.com/paveg_"
            target="_blank"
            rel="noopener noreferrer"
          >
            funai
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
