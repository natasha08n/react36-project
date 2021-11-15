import React from "react";

class Card extends React.Component {
  handleDelete = () => {
    this.props.handleDelete(this.props.id);
  };

  render() {
    const { name = "No name", surname, description } = this.props;

    return (
      <div>
        <p>
          {name} {surname}
        </p>
        {description && <p>О преподавателе: {description}</p>}
        {!description && <p>Нет информации</p>}

        <button onClick={this.handleDelete}>Удалить</button>
      </div>
    );
  }
}

export { Card };

/**
 *
 * return articles.length > 0 ? <ArticleList articles={articles} /> : null;
 * return isLoading ? <p>Loading...</p> : <ArticleList articles={articles} />;
 * 
 return isLoading ? <p>Loading...</p> : articles.length > 0 ? <ArticleList articles={articles} /> : null

 return (
   <>
   {isLoading && <p>Loading...</p>}
   {articles.length > 0 ? <ArticleList articles={articles} /> : null}
   </>
 )
 */

/**
 * componentDidUpdate(prevProps) {
 *   if (this.props.field !== prevProps.field) {
 *     fetch(.....)
 *       .then((data) => {
 *         this.setState(prevState => ({ items: [...prevState.items, ...data.newItems] }))
 *       })
 *   }
 * }
 */
