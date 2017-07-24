module.exports = {
	exportDir: 'docs',
  exportPathMap: function () {
    return {
      "/": { page: "/" },
      "/about": { page: "/about" },
      "/portfolio": { page: "/portfolio" },
    }
  },
}