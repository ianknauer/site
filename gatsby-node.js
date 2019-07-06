/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const fs = require("fs")

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === "File" && node.absolutePath.match(/snippets/)) {
    createNodeField({
      node,
      name: "content",
      value: fs.readFileSync(node.absolutePath, "utf8"),
    })
  }
}
