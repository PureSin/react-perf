var React = require('react/addons')
  , Perf  = require('../../perf')
  ;

// tutorial1.js
var CommentBox = React.createClass({
  mixins: [Perf],
  forceRender: function() {
    this.forceUpdate();
  },
  render: function() {
    return (
      <div className="commentBox">
        Hello, world! I am a CommentBox.
        <a href="#" onClick={this.forceRender} >Re-render</a>
      </div>
    );
  }
});
React.render(
  <CommentBox />,
  document.getElementById('content')
);
