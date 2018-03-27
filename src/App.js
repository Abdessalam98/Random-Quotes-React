import React, {Component} from 'react';
import './App.css';
import quotes from './quotes';

class App extends Component {

  state = {};
  // generate on mount
  componentWillMount() {
    this.generateQuote();
  }
  /*eslint-disable no-unused-vars*/
  generateQuote = (e) => {
    const arrayKeys = Object.keys(quotes);
    const randKey = arrayKeys[Math.floor(Math.random() * arrayKeys.length)];
    if (this.state.content === quotes[randKey].content) {
      this.generateQuote();
      // exit if block
      return;
    }
    this.setState(quotes[randKey]);
  }
  shareTweet(content, author, hashtags) {
    window.open('https://twitter.com/intent/tweet?text=' + content + '&hashtags=' + author + ',' + hashtags.join(','), 'twitter', 'left=20,top=20,width=600,height=300,toolbar=0,resizable=1');
    return false
  }
  render() {
    return (
      <div className="App">
        <div className="valign-wrapper center-align row main-content">
          <div className="card card-custom hoverable">
            <a
              onClick={() => this.shareTweet(this.state.content, this.state.author, ['quotes', 'quotestoliveby'])}
              className="twitter twitter-share-button"
            >
              <i className="fab fa-twitter" />
              Tweet
            </a>
            <p className="App-intro animated ">
              {this.state.content}
            </p>
            <div
              className="author-img"
              style={{
              backgroundImage: 'url(' + this.state.imgUrl + ')'
            }} 
            />
            <span className="meta-author">
              {this.state.author}
            </span>
            <button
              className="waves-effect waves-teal btn btn-custom"
              onClick={e => this.generateQuote(e)}
            >Next
            </button>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
