const express = require('express')
const bodyParser = require('body-parser');
const {Nuxt, Builder} = require('nuxt')

const app = express()
const config = require('../nuxt.config.js')

app.use(bodyParser.json())

config.dev = process.env.NODE_ENV !== 'production'

async function start() {
	const nuxt = new Nuxt(config)
	const {host, port} = nuxt.options.server

	if (config.dev) {
		const builder = new Builder(nuxt)
		await builder.build()
	} else {
		await nuxt.ready()
	}

	app.use(nuxt.render)
	app.listen(port, host)
	console.log(`Server listening on http://${host}:${port}`)
}

start()
