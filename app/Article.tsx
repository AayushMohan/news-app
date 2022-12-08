type Props = {
  article: Article;
};

const Article = ({ article }: Props) => {
  return (
    <article>
      {article.image && (
        <img
          src={article.image}
          alt={article.title}
          className="h-56 w-full object-cover rounded-lg shadow-md"
        />
      )}

      <div>
        <div>
          <h2>{article.title}</h2>

          <section>
            <p>{article.description}</p>
          </section>
        </div>

        <footer>
          <p></p>
        </footer>
      </div>
    </article>
  );
};

export default Article;
