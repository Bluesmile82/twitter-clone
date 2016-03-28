import TweetBox from './components/tweet_box';
import TweetList from './components/tweet_list';

let mockTweets = [
  { id: 1, name: 'Samer Buna', title: 'Sdk', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus.'},
  { id: 2, name: 'Buna lala', title: 'Sasd', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus.'},
  { id: 3, name: 'Kjhsdkj kjs', title: 'Sasd', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus.'}
]

export default class Main extends React.Component {
  constructor(props){
    super(props);
    this.state = { tweetList: mockTweets }
  }

  addTweet(tweetToAdd){
    let newTweetList = this.state.tweetList;
    newTweetList.unshift({id: Date.now() , title: 'Guest', content: tweetToAdd });
    this.setState({ tweetList: newTweetList});
  }

  render(){
    return (
      <div className='container'>
        <TweetBox sendTweet={this.addTweet.bind(this)}  />
        <TweetList tweets={this.state.tweetList} />
      </div>
    );
  }
}

let documentReady = () => {
  let reactNode = document.getElementById('react');

  if(reactNode){
    React.render(
      <Main />,
      reactNode
    );
  }
}

$(documentReady);
