const fs = require('fs')
const mustache = require('mustache')
const npmUserPackages = require('npm-user-packages-downloads')
const npmDependents = require('check-npm-dependents')

const template = fs.readFileSync('template.md').toString()

const main = async () => {
	const data = await npmUserPackages('tiagodanin', '2010-01-01:2100-01-01')
	for (const pkg of data) {
		pkg.dependents = await npmDependents(pkg.name).catch(() => 0) // eslint-disable-line no-await-in-loop
	}

	fs.writeFileSync('LIST.md', mustache.render(template, {
		packages: data
	}))
}

main()
