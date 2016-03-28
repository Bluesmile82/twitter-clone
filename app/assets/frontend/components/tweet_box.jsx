export default class TweetBox extends React.Component {
  constructor(props){
    super(props);
    this.state = { content: '' }
  }

  sendTweet(event){
    event.preventDefault();
    if(this.state.content != ""){
      this.props.sendTweet(this.state.content) ;
    }
  }

  handleContentChange(e) {
    this.setState({ content: e.target.value });
  }

  render() {
    return (
      <div className="card">
        <div className="card-content">
          <form onSubmit= {this.sendTweet.bind(this)} >
            <div className='input-field'>
              <textarea ref="tweetTextArea" className='materialize-textarea'
                        value={this.state.value} onChange={this.handleContentChange.bind(this)}/>
              <label>Whats up?</label>
              <button type="submit" className= 'waves-effect waves-light btn'>Go!</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
