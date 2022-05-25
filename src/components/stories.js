import React from 'react';
import { Link } from 'gatsby';
import { FiCalendar } from '@react-icons/all-files/fi/FiCalendar';
import { IconContext } from '@react-icons/all-files';

import './stories.css';
import './cards.css';
import sampleImg from '../images/iot.jpg';

const BigCard = ({ image, imageAlt, post }) =>
  <div className="big-card">
    <img src={image} alt={imageAlt} className="card-img" />
    <div className="card-article">
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
    <BigCard image={sampleImg} imageAlt="Sample Image" post={posts[0]} />
    <div className="stories-titlebar">
      <div className="stories-title">Latest Posts</div>
      <Link to="blog" id="read-all">Read all posts</Link>
    </div>
    {posts.slice(1).map(post => (
      <article key={post.id}>
        <Link to={'blog' + post.fields.slug} className="article-link">
          {post.frontmatter.title}
        </Link>
        <p>{post.frontmatter.date}</p>
      </article>
    ))}
  </div>;

export default Stories;