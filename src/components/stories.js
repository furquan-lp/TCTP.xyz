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
  <div className="stories">
    <BigCard post={posts[0]} />
    <div className="stories-titlebar">
      <div className="stories-title">Latest Posts</div>
      <Link to="blog" id="read-all">Read all posts</Link>
    </div>
    {posts.slice(1).map(post => (
      <article key={post.id} className="article-title">
        <Link to={'blog' + post.fields.slug} className="article-title-link">
          {post.frontmatter.title}
        </Link>
        {post.frontmatter.date}
      </article>
    ))}
  </div>;

export default Stories;