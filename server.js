const app = require('./app')

 app.listen(process.env.PORT, () => {
    console.log(`Server started on PORT: ${process.env.PORT}')
    
 })