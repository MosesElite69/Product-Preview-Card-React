const Footer = () => {
  return (
    <div className="md:flex md:justify-center">
      Challenge <span className="md:ml-1 md:mr-1">by</span>{" "}
      <a
        href="https://www.frontendmentor.io?ref=challenge"
        target="_blank"
        className="md:ml-1 md:mr-1 text-purple-700 hover:text-blue-300"
      >
        Frontend Mentor
      </a>
      . Coded by{" "}
      <a
        href="https://www.frontendmentor.io/profile/MosesElite69"
        className="md:ml-1 md:mr-1 text-purple-700 hover:text-blue-300"
        target="_blank"
      >
        MosesElite69
      </a>
      .
    </div>
  );
};

export default Footer;
