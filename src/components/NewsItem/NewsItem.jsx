import './newsItem.scss';

const NewsItem = ({ children, image, category, alt }) => {
  return (
    <article className="news-item">
      <figure className="news-item__image-wrap">
        <img src={image} alt={alt} />
      </figure>
      <div className="news-item__content content">
        <p className="content__category">{category}</p>
        <h4 className="content__text">{children}</h4>
        <time className="content__datetime" dateTime="2021-02-02 20:00">
          2 марта 2021
        </time>
      </div>
    </article>
  );
};

export default NewsItem;
