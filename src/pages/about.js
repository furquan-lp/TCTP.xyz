import React from 'react';

import Header from '../components/header';
import Footer from '../components/footer';
import { SEO } from '../components/seo';

import { bugs } from '../../package.json';

const About = () =>
  <div className="mx-auto md:max-w-screen-lg bg-mobile-img md:bg-none md:bg-white md:shadow-body">
    <Header />
    <div className="flex flex-col text-blue-deep mx-2 h-screen md:h-full">
      <p className="mt-10 mb-6 text-4xl md:text-5xl font-bold">About TCTP.xyz</p>
      <p className="text-3xl md:text-4xl my-6">Hi there!</p>
      <p className="my-1 font-serif text-xl">
        I'm Syed Furquan Ahmad, a software engineer passionate about open source
        and web development. The Chip Tinker Project was originally concieved as
        an idea for a blog where I would post ideas and tricks about electronics
        prototyping, IoT, etc. with the main theme revolving around cool ways to
        tinker with technology. But over time it slowly evolved into a more
        general space where I could write about more technology-related things
        that had interested me, including and web development tips and tricks I
        had found.
      </p>
      <p className="my-5 font-serif text-xl">
        You can learn more about me and my projects on my <a className="underline text-green-dark
         decoration-green-dark md:decoration-transparent md:hover:decoration-green-dark transition-all duration-200"
          href="https://simpledev.site/">website</a>. If you have any feedback, you can email me at <a
            className="underline text-green-dark decoration-green-dark md:decoration-transparent
             md:hover:decoration-green-dark transition-all duration-200" href={`mailto:${bugs.email}`}>{bugs.email}
        </a>.
      </p>
      <p className="font-serif text-xl">This website is powered by <a className="underline text-blue-dark
         decoration-blue-dark md:decoration-transparent md:hover:decoration-blue-dark transition-all duration-200"
        href="https://www.netlifycms.org/">Netlify CMS</a> and a <a className="underline text-blue-dark
         decoration-blue-dark md:decoration-transparent md:hover:decoration-blue-dark transition-all duration-200"
          href="https://www.netlify.com/">Netlify</a> starter backend. It is written in JavaScript (with a little CSS)
        using <a className="underline text-blue-dark decoration-blue-dark md:decoration-transparent
         md:hover:decoration-blue-dark transition-all duration-200" href="https://www.gatsbyjs.com/">Gatsby </a>
        and <a className="underline text-blue-dark decoration-blue-dark md:decoration-transparent
         md:hover:decoration-blue-dark transition-all duration-200" href="https://tailwindcss.com/">Tailwind CSS</a>.
        It uses icons from <a className="underline text-blue-dark decoration-blue-dark md:decoration-transparent
         md:hover:decoration-blue-dark transition-all duration-200" href="https://github.com/react-icons/react-icons">
          react-icons</a> and vectors provided by <a className="underline text-blue-dark decoration-blue-dark
           md:decoration-transparent md:hover:decoration-blue-dark transition-all duration-200"
            href="https://vecteezy.com/">Vecteezy.com</a>. All the original code and content is licensed under the
        Zero-Clause BSD license unlesss otherwise noted, see <a className="underline text-green-dark
         decoration-green-dark md:decoration-transparent md:hover:decoration-green-dark transition-all duration-200"
          href="https://github.com/furquan-lp/tctp.xyz/blob/master/LICENSE/">LICENSE</a> for more details.
      </p>
    </div>
    <Footer />
  </div>;

export const Head = ({ location }) => <SEO title="About" pathname={location.pathname} />;

export default About;