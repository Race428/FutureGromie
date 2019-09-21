const express = require('express')
const app = express()
app.use(express.static(`${__dirname}/../build`));
app.use(express.json())
app.listen(3030, () => {
    console.log(`Listening on Server 3030`,)
  })

const ctrl = require('./controller')


  app.get('/people', ctrl.sortPeople)


  