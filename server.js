const express = require('express')
const request = require('request')
const app = express()
const path= require('path')


app.use( express.static( path.join( __dirname, 'dist' ) ) )
app.use(express.static(path.join(__dirname, 'node_modules')))


app.get("/recipes/:ingredient", function(req,res){
    
    const ingredient = req.params.ingredient

    request.get(`https://recipes-goodness.herokuapp.com/recipes/${ingredient}`, function( error, response ) {
     
    let recipe = JSON.parse(response.body).results
    recipe = recipe.map(i=> { return {ingredients: i.ingredients, title: i.title, thumbnail: i.thumbnail, href: i.href} })
    
        res.send( recipe )
    })


})













app.listen(8080,function(){
    console.log("OK")
})
