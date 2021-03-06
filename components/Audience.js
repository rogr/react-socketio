import React from 'react';
import Display from './parts/Display';
import Join from './parts/Join';
import Ask from './parts/Ask';

class Audience extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Display display={this.props.state.status === 'connected'}>

          <Display display={this.props.state.member.name !== undefined}>

            <Display display={this.props.state.currentQuestion.q === undefined}>
              <h2>Welcome {this.props.state.member.name} </h2>
              <p>{this.props.state.audience.length} audience members connected</p>
              <p>Questions will appear here.</p>
            </Display>

            <Display display={this.props.state.currentQuestion.q !== undefined}>
              <Ask question={this.props.state.currentQuestion} emit={this.props.emit} />
            </Display>

          </Display>

          <Display display={this.props.state.member.name === undefined}>
            <h2>Join the session</h2>
            <Join emit={this.props.emit}/>
          </Display>

        </Display>
      </div>
    );
  }
}

Audience.propTypes = {
  state: React.PropTypes.object,
  emit: React.PropTypes.func,
};

export default Audience;
