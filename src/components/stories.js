import React from 'react';
import { Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { FiCalendar } from '@react-icons/all-files/fi/FiCalendar';
import { IconContext } from '@react-icons/all-files';

import './stories.css';
import './cards.css';

const BigCard = ({ post }) =>
  <div className="big-card">
    <GatsbyImage
      image={post.frontmatter.thumbnail.childImageSharp.gatsbyImageData}
      className="big-card-img"
    />
    <div className="big-card-article">
      <div className="card-article-content">
        <Link to={'blog' + post.fields.slug} className="big-card-article-title">
          {post.frontmatter.title}
        </Link>
        <div className="card-article-date">
          <IconContext.Provider value={
            { size: '1.8em', className: 'calendar-icon' }
          }>
            <FiCalendar />
          </IconContext.Provider>
          {post.frontmatter.date}
        </div>
        <span className="card-preview-text">{post.excerpt}</span>
      </div>
      <div className="card-article-footer">
        <div className="card-article-tags">
          {post.frontmatter.tags.map(tag =>
            <span className="card-article-tag" key={tag.id}>{tag}</span>
          )}
        </div>
        <span className="card-article-button">
          <Link to={'blog' + post.fields.slug} className="card-article-link">
            READ ARTICLE
          </Link>
        </span>
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