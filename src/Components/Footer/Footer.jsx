const Footer = () => {
  return (
    <div className="py-5 bg-gray-100 flex justify-between items-center px-44 text-sm">
      <div>
        <p className="flex space-x-5 items-center">
          <p className="font-bold text-orange-500">
            <span>©</span>
            2024
            <span className="ml-2">Abdul Basit Khan </span>
          </p>

          <span className="font-semibold">All Rights Reserved</span>
        </p>
      </div>
      <div className="flex space-x-5">
        <a
          href="/about"
          className="font-semibold hover:text-orange-500 hover:underline"
        >
          About
        </a>
        <a
          href="/contact"
          className="font-semibold hover:text-orange-500 hover:underline"
        >
          Contact
        </a>
      </div>
    </div>
  );
};

export default Footer;
