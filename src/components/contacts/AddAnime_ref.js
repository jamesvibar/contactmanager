import React, { Component } from "react";

class AddAnime extends Component {
  constructor(props) {
    super(props);
    this.titleInput = React.createRef();
    this.episodesInput = React.createRef();
    this.dateInput = React.createRef();
  }

  onSubmit = e => {
    e.preventDefault();
    const anime = {
        title: this.titleInput.current.value,
        episode: this.episodesInput.current.value,
        date: this.dateInput.current.value
    }

    console.log(anime);
  };

  static defaultProps = {
    title: "Default title",
    episodes: "200",
    date: "2019"
  };

  render() {
    const { title, episodes, date } = this.props;

    return (
      <div className="card mb-3">
        <div className="card-header">Add Anime</div>
        <div className="card-body">
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                name="title"
                className="form-control form-control-lg"
                placeholder="Enter anime title"
                defaultValue={title}
                ref={this.titleInput}
              />
            </div>
            <div className="form-group">
              <label htmlFor="episodes">Episodes</label>
              <input
                type="text"
                name="episodes"
                className="form-control form-control-lg"
                placeholder="Episode count"
                defaultValue={episodes}
                ref={this.episodesInput}
              />
            </div>
            <div className="form-group">
              <label htmlFor="date">Date</label>
              <input
                type="text"
                name="date"
                className="form-control form-control-lg"
                placeholder="Enter air date"
                defaultValue={date}
                ref={this.dateInput}
              />
            </div>
            <input
              type="submit"
              value="Add Anime"
              className="btn btn-light btn-block"
            />
          </form>
        </div>
      </div>
    );
  }
}

export default AddAnime;
