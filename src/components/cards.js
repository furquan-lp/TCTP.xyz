import React from 'react';
import { Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { FiCalendar } from '@react-icons/all-files/fi/FiCalendar';

import './cards.css';

const Card = ({ post }) =>
  <div className="flex flex-col w-11/12 md:w-5/12 mt-4 mr-2 md:mr-4 rounded">
    <GatsbyImage
      image={post.frontmatter.thumbnail.childImageSharp.gatsbyImageData}
      className="rounded-lg shadow-lg mb-2 md:mb-4"
    />
    <article className="flex flex-col justify-around">
      <Link to={'.' + post.fields.slug} className="tracking-wide text-2xl md:text-3xl font-bold">
        {post.frontmatter.title}
      </Link>
      <section className="flex justify-between mt-0.5 items-center text-blue-dark">
        {post.frontmatter.author}
        <span><FiCalendar /> {post.frontmatter.date}</span>
      </section>
      <p>{post.excerpt}</p>
      <section className="my-4">
        <Link to={'.' + post.fields.slug} className="rounded-md text-light-new bg-blue-dark p-2
         shadow underline md:no-underline md:hover:underline hover:bg-blue-deep transition-all duration-200">
          READ ARTICLE
        </Link>
      </section>
    </article>
  </div>;

export default Card;