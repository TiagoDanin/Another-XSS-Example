const express = require('express')
const jsonfile = require('jsonfile')

const file = 'database/messages.json'
const app = express()
const messages = jsonfile.readFileSync(file)

const updateDatabase = () => {
	jsonfile.writeFileSync(file, messages, {
		replacer: true,
		spaces: '\t'
	})
}

app.get(['/', '/get'], (req, res) => {
	res.json({
		messages
	})
})

app.post('/set', function (req, res) {
	messages.push({
		title: `#${messages.length} - ${req.body.author}`,
		text: req.body.text
	})
	res.json({
		messages
	})
	updateDatabase()
})

module.exports = {
	path: '/api/v1/',
	handler: app
}
