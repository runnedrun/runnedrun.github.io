const React = require('react')
const ReactDOM = require('react-dom')
import {MDXProvider} from '@mdx-js/react'
const blogs = require('./blogsList')

const components = {
  pre: props => <div {...props} />,
  code: props => <pre style={{ color: 'tomato' }} {...props} />
}

const BlogList = (props) => {
  return (
    <div className="row">
      <div className="col-md-10 col-md-offset-1">
        {Object.keys(blogs).map((blogCategory) => {
          const blogMeta = blogs[blogCategory]
           return (
              <div className="col-md-4" key={blogCategory}> 
                <div className="category-container">
                  <h3 className="category-title">
                    { blogCategory }
                  </h3>
                  <h5 className="category-subtitle">
                    { blogMeta.subtitle }
                  </h5>
                  <div>
                    {blogMeta.posts.map((postTitle) => {
                      const postSlugTitle = postTitle.split(' ').map(_ => _.toLowerCase()).join('-')
                      const postSlug = `${postSlugTitle}.html`
                      return <a key={postTitle} className="post-title" href={`posts/${postSlug}`}>{postTitle}</a>
                    })}
                  </div>
                </div>
              </div>
         )})}
      </div>
    </div>
  )
}

const BlogIndex = (props) => {
   return (
     <div className="container">
       <div className="row blog-title-row">         
         <h2 className="text-center col-md-12">Essays</h2>
         <h4 className="text-center intro">
           I'm happiest when I'm <b>executing well</b> on <b>meaningful problems</b> with time to <b>reflect</b> on the outcomes. 
         </h4>         
         <h4 className="text-center intro">
           I post essays as I continue to learn how to create this life personally and professionally.
         </h4>
       </div>
       <BlogList/>
     </div>)
}


ReactDOM.render(
  <BlogIndex />,
  document.getElementById('blog-index')
)