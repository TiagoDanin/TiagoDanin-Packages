const fs = require('fs')
const mustache = require('mustache')
const npmUserPackages = require('npm-user-packages')
const template = fs.readFileSync('template.md').toString()

npmUserPackages('tiagodanin').then(data => {
	data.packages = data
	fs.writeFileSync('README.md', mustache.render(template, {
		packages: data
	}))
})
