import React from 'react';
import { Link } from 'gatsby';

const Welcome = ({ description, image }) =>
  <div className="flex justify-between mt-4 md:mt-12 flex-wrap md:flex-nowrap">
    <div className="flex flex-col text-blue-deep">
      <span className="underline text-3xl md:text-6xl tracking-wider">Welcome!</span>
      <span className="tracking-wide mt-2 text-lg md:text-2xl">{description}<br />
        <Link to="blog/what-is-tctp"
          className="underline text-green-light bg-blue-dark text-base md:text-xl tracking-wider rounded-md p-1
          hover:bg-green-light hover:text-blue-dark transition-all duration-200">Learn more...</Link>
      </span>
    </div>
    <Link to="blog/what-is-tctp" className="my-1 md:my-0">
      <img src={image} alt="assortment of electronic components" className="rounded-md opacity-70 w-4/5 md:w-full h-full
      shadow-md hover:opacity-90 transition-all duration-200" />
    </Link>
  </div>;

export default Welcome;