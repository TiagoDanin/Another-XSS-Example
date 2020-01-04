const express = require('express')

const app = express()

const messages = [
	{
		title: '111',
		text: '222<strong>aaa</strong>'
	}
]

app.get('/', (req, res) => {
	res.json({
		messages
	})
})

module.exports = {
	path: '/api/v1/base',
	handler: app
}
