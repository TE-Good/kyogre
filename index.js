/**
 * IDEAS
 * Could send a text at 8am every morning with my tenet and quote of the day
 * Use this as the API for a webapp that will give me a quote for each day
 * Could also make a short mobile app with this
 */


// const express = require('express')
// const path = require('path')
require('dotenv').config()

// const app = express()
const inquirer = require('inquirer')
// const port = '8000'
const moment = require('moment')


const { quotes, tenet } = require('../quotes')

// app.get('/', (req, res) => res.send(process.env.QUOTES))
// app.listen(port, () => console.log(`Receiving on port ${port}`))


const quote = `
  ${quotes[Math.floor(Math.random() * quotes.length)].quote} 
  
  - ${quotes[Math.floor(Math.random() * quotes.length)].author}
`
// console.log('the number of quotes I have are', quotes.length)
// console.log('the day in the year is', moment().format('DDD'))

const quoteOfTheDay = `
  ${quotes[moment().format('DDD') % quotes.length - 1].quote}

  - ${quotes[moment().format('DDD') % quotes.length - 1].author}
`
console.log(quoteOfTheDay)

async function main() {
  console.log('Welcome to Kyogre')
  // LIST VERSION
  // const question = await inquirer.prompt({
  //   type: 'list',
  //   name: 'nav',
  //   message: 'Select output:',
  //   choices: ['tenet', 'quote']
  // })

  // TYPED VERSION
  const question = await inquirer.prompt({
    name: 'nav',
    message: 'Do you want your tenet or a quote?'
  })

  // OUTPUT
  const answer = question.nav === 'quote' ? quoteOfTheDay : question.nav === 'tenet' ? tenet : 'Incorrect input. Closing..'
  console.log(answer)
}




module.exports = { main }