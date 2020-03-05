const React = require('react')
const ReactDOM = require('react-dom')
import {MDXProvider} from '@mdx-js/react'
import Post from './rapid-product-development.mdx'

const components = {
  pre: props => <div {...props} />,
  code: props => <pre style={{ color: 'tomato' }} {...props} />
}

const BlogBody = (props) => {
  return (
    <div className="container">
        <div className="row">
          <div className="col-md-12">
            <a href="/">← Home</a>
          </div>
        </div>
        <div className="row title-row">
          <h1 className="col-md-12 text-center">
            {window.blogTitle}
          </h1>
        </div>
        <div className="row body-row">
          <div className="col-md-12">
            <Post />
          </div>
        </div>
    </div>
  )
}

ReactDOM.render(
  <MDXProvider><BlogBody /></MDXProvider>,
  document.getElementById('blog-body')
)
