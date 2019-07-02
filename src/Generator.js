import React, { Component } from "react";
import axios from "axios";
class Generator extends Component {
  state = {
    upperText: "",
    lowerText: "",
    font: 15,
    color: "white",
    img: [],
    img_src: "https://i.imgflip.com/1bij.jpg"
  };
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
    console.log(this.state);
  };
  handleGenerate = () => {
    let length = this.state.img.length;
    let index = Math.floor(Math.random() * length);
    let src = this.state.img[index].url;
    this.setState({ img_src: src });
    console.log(this.state.img_src);
  };

  componentDidMount() {
    axios
      .get(`https://api.imgflip.com/get_memes`)
      .then(response => {
        // handle success
        this.setState({
          img: response.data.data.memes
        });
        console.log("img array", this.state.img[0].url);
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="row">
        <div className="img-container">
          <img src={this.state.img_src} />
          <div
            className="top"
            style={
              { color: this.state.color }
            }
          >
            {this.state.upperText}
          </div>
          <div
            className="bottom"
            style={
              ({ fontSize: parseInt(this.state.font) + "px" },
              { color: this.state.color })
            }
          >
            {this.state.lowerText}
          </div>
        </div>

        <div className="input_middle">
          <input
            type="text"
            name="upperText"
            placeholder="Enter Upper Text"
            onChange={this.handleChange}
          />
          <br />
          <input
            type="text"
            name="lowerText"
            placeholder="Enter Lower Text"
            onChange={this.handleChange}
          />
          <br />
          <input
            type="text"
            name="color"
            placeholder="Enter Color"
            onChange={this.handleChange}
          />
          <br />
          <button onClick={this.handleGenerate}>Change Image</button>
          <a download href={this.state.img_src}>
            <button>Download</button>
          </a>
        </div>
      </div>
    );
  }
}
export default Generator;
