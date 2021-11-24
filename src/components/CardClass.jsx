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
