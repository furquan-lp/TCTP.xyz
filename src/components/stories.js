import React from 'react';
import { Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { FiCalendar } from '@react-icons/all-files/fi/FiCalendar';
import { IconContext } from '@react-icons/all-files';

import './stories.css';
import './cards.css';

const BigCard = ({ post }) =>
  <div className="flex px-2 py-3 mt-4 mb-8 rounded shadow-md shadow-slate-300 flex-wrap md:flex-nowrap">
    <GatsbyImage
      image={post.frontmatter.thumbnail.childImageSharp.gatsbyImageData}
      className="rounded-md shadow mr-4"
    />
    <div className="flex flex-col justify-between">
      <div className="flex flex-col">
        <Link to={'blog' + post.fields.slug} className="tracking-wide text-2xl md:text-3xl">
          {post.frontmatter.title}
        </Link>
        <div className="flex mt-1 mb-4">
          <IconContext.Provider value={
            { size: '1.5em', className: 'mr-2' }
          }>
            <FiCalendar />
          </IconContext.Provider>
          {post.frontmatter.date}
        </div>
        {post.excerpt}
      </div>
      <div className="flex flex-col">
        <div className="flex mb-5">
          {post.frontmatter.tags.map(tag =>
            <span className="p-1.5 text-sm bg-slate-300 mr-3 rounded-2xl" key={tag.id}>{tag}</span>
          )}
        </div>
        <span><Link to={'blog' + post.fields.slug} className="rounded-md text-light-new bg-blue-dark p-2
         shadow underline md:no-underline md:hover:underline hover:bg-blue-deep transition-all duration-200">
          READ ARTICLE</Link></span>
      </div>
    </div>
  </div>;

const Stories = ({ posts }) =>
  <>
    <div className="flex items-center justify-between border-b border-slate-300 mb-4">
      <div className="text-3xl md:text-4xl font-medium">Latest Posts</div>
      <Link to="blog" className="text-lg underline text-blue-dark visited:text-purple-new md:no-underline
       md:hover:underline">Read all posts</Link>
    </div>
    {posts.slice(0, 3).map(post => (
      <article key={post.id} className="flex flex-col mb-3.5 md:mb-6">
        <Link to={'blog' + post.fields.slug} className="tracking-wide text-xl md:text-2xl underline md:no-underline
         md:hover:underline">
          {post.frontmatter.title}
        </Link>
        {post.frontmatter.date}
      </article>
    ))}
  </>;

export { BigCard, Stories };