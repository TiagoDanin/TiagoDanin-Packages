const fs = require('fs')
const mustache = require('mustache')
const npmUserPackages = require('npm-user-packages-downloads')
const template = fs.readFileSync('template.md').toString()

npmUserPackages('tiagodanin', '2010-01-01:2100-01-01').then(async (data) => {
	fs.writeFileSync('README.md', mustache.render(template, {
		packages: data
	}))
})
