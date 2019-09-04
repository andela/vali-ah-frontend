import React, { Component } from 'react';
import axios from 'utils/axios';
import './ArticlePage.scss';

const obj = {
  ArticleId: '45f7fc72-70a0-4308-a1f4-d13037f9d226',
  title: 'Doloribus magnam non ut est',
  summary: 'Ipsa nihil est officiis quasi. Rem nisi in rem temporibus. Aut distinctio iure tempore voluptas. Qui consequatur sit incidunt et natus ut expedita quibusdam.',
  body: 'totam',
  suspended: false,
  status: 'draft',
  coverImageUrl: null,
  followUpId: null,
  createdAt: '2019-08-21T08:30:03.639Z',
  author: {
    name: 'Adolf McCullough',
    userName: 'Jade.Ruecker58',
    createdAt: '2019-08-21T08:30:03.616Z'
  },
  category: [
    'motivation'
  ]
};

const url = 'http://vali-1kbideas-staging.herokuapp.com/api/v1/articles/';

export default class ArticlePage extends Component {
  componentDidMount() {
    this.fetchArticle();
  }

  fetchArticle = async () => {
    const response = await axios.get(url);
    // eslint-disable-next-line no-console
    console.log(response);
  }

  handleFacebookClick = () => {
    const siteUrl = `${url}/${obj.ArticleId}`;
    const facebookurl = `https://www.facebook.com/sharer/sharer.php?u=${siteUrl}`;
    window.open(facebookurl, 'share-facebook', 'width=580,height=296');
  }

  handleTwitterClick = () => {
    const text = obj.title;
    const siteUrl = `${url}/${obj.ArticleId}`;
    const twitterUrl = `https://twitter.com/intent/tweet/?text=${text}&amp;url=${siteUrl}`;
    window.open(twitterUrl, 'share-twitter', 'width=580,height=296');
  }

  handleEmailClick = () => {
    const { title } = obj;
    const siteUrl = `${url}/${obj.ArticleId}`;
    const subject = `An article from 1kbIdeas: ${title}`;
    const body = `${title}: ${siteUrl}`;
    window.location.href = `mailto:?subject=${subject}&body=${body}`;
  }

  render() {
    return (
      <div className="article">
        <div className="article-container">
          <h2>This is the rendered article</h2>
        </div>
        <div className="social-row">
          <button
            type="button"
            className="facebook"
            onClick={this.handleFacebookClick}
          >
            <img src="../../src/assets/images/facebook-icon.svg" alt="facebook" />
            <span>Share this on facebook</span>
          </button>
          <div />
          <button
            type="button"
            className="twitter"
            onClick={this.handleTwitterClick}
          >
            <img src="../../src/assets/images/twitter-icon.svg" alt="facebook" />
            <span>&nbsp;Tweet this to your followers</span>
          </button>
          <div />
          <button
            type="button"
            className="email"
            onClick={this.handleEmailClick}
          >
            <img src="../../src/assets/images/email-icon.svg" alt="facebook" />
            <span>Share this to a friend</span>
          </button>
        </div>
      </div>
    );
  }
}
