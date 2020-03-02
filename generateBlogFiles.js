const blogList = require("./blog-gen/blogsList.js")
const htmlTemplate = require("./blog-gen/posts/post-template.html")
const jsTemplate = require("./blog-gen/posts/post-template.js")
const fs = require("fs")

const allPosts = Object.keys(blogList)

const allPostLocations = {}

allPosts.forEach((postTitle) => {
  const postFileName = postTitle.toLowerCase().replace(/ /g, '-')
  const dirLocation = `blog-gen/posts/${postFileName}`
  const relativeDirLocation = `./posts/${postFileName}`
  const postMDXFileLocation = `${dirLocation}/${postFileName}.mdx`
  const postJsFileLocation = `${dirLocation}/generated-blog.js`
  const postHTMLFileLocation = `posts/${postFileName}.html`

  allPostLocations[postFileName] = `${relativeDirLocation}/generated-blog.js`

  const replacedHTML = htmlTemplate.replace('{{blogTitle}}', postTitle).replace('{{blogFileName}}', postFileName)  
  const replacedJS = jsTemplate.replace('{{blogFileName}}', postFileName)
      
  fs.writeFile(postHTMLFileLocation, replacedHTML)
  fs.exists(dirLocation, function(exists) {
    if (exists) {
      fs.writeFile(postJsFileLocation, replacedJS)             
    } else {
      fs.mkdir(dirLocation, () => {
        fs.writeFile(postJsFileLocation, replacedJS) 
        fs.writeFile(postMDXFileLocation, postTitle)
      })
    }
  })  
})

const posts = JSON.stringify(allPostLocations, null, 2)
const postLocationsString = "module.exports = " + posts

fs.writeFile("blog-gen/postLocations.js", postLocationsString)
