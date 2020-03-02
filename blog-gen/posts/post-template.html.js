module.exports = `
<!DOCTYPE html>
<html>
<head>
  <title>{{blogTitle}}</title>
  <link href='https://fonts.googleapis.com/css?family=Titillium+Web' rel='stylesheet' type='text/css'>
  <link rel="stylesheet" type="text/css" href="../public/stylesheets/bootstrap.4.min.css"></link>
  <link rel="stylesheet" href="../public/stylesheets/blog.css" />
  <script type="text/javascript">
    window.blogTitle = {{blogTitle}}
  </script>
</head>
<body>
  <div id="blog-body"></div>
  <script type="text/javascript" src="../public/js/blog/{{blogFileName}}.js"></script>
</body>
</html>
`