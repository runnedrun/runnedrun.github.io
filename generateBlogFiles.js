const blogList = require("./blog-gen/blogList.js")
const htmlTemplate = require("./blog-gen/post-template.html")
const jsTemplate = require("./blog-gen/post-template.js")
const fs = require("fs")


const allPosts = Object.keys(blogList).reduce((postList, category) => {
  return allPosts.concat(blogList[category].posts)
}, [])

allPosts.forEach((postTitle) => {
  const postFileName = postTitle.toLowerCase().replace(' ', '-')
  const postMDXFileLocation = `blog-gen/posts/${postFileName}/${postFileName}.mdx`
  const postJsFileLocation = `blog-gen/posts/${postFileName}/generated-blog.js`
  const postHTMLFileLocation = `posts/${postFileName}.html`

  const replacedHTML = htmlTemplate.replace('{{blogTitle}}', postTitle).replace('{{blogFileName}}', postFileName)  
  replacedJS = jsTemplate.replace('{{blogFileName}}', postFileName)

  fs.write(postJsFileLocation, replacedJS)
  fs.write(postHTMLFileLocation, replacedHTML)
  fs.exists(postMDXFileLocation).then((err, exists) => {
    console.log('existss?', err, exists)
  })
})