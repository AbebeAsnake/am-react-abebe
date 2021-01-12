import React from 'react';
import PropTypes from 'prop-types';
// import hljs from 'highlight.js/lib/highlight';
// import javascript from 'highlight.js/lib/languages/javascript';
import Highlight from 'react-highlight';
// This way is easy, but adds 170K gzipped to bundle since all langs are included.


class CodeExample extends React.Component {
  componentDidMount() {
    //  hljs.registerLanguage('javascript', javascript);
   // hljs.highlightBlock(this.element);
  }
  

  render() {
    return (
      <pre ref={ref => { this.element = ref }}>
        <Highlight>
        <code>
          {this.props.children}
        </code></Highlight>
      </pre>
    )
  }
}

CodeExample.propTypes = {
  children: PropTypes.string.isRequired
}

export default CodeExample;