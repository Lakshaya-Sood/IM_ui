var fs = require('fs-extra')
var path = require('path')

// move content of dist to the root, things look better that way :-)
function uncover () {
  const buildPath = path.resolve(__dirname, '../dist')
  const root = path.resolve(__dirname, '..')
  fs.copy(buildPath, root, err => {
    if (err) throw err
    fs.pathExists(buildPath).then(fs.remove('/tmp/myfile')
.then(() => {
}))
  })
}
uncover()
