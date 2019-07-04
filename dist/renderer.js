class Renderer{

render(){

    const value = $('#ingredient').val()
        
    $.ajax({
        url: `/recipes/${value}`,
        dataType: 'json',
        success: function(result) {

            for(let i=0; i<result.length; i++){
                $('#container').append(`<div class="display"><a href=${result[i].href}>${result[i].title}</a><br>
               <img class="image" src=${result[i].thumbnail} width=100px><br>
               <div>ingredients: ${result[i]. ingredients} </div> <br> </div> `)
                 }
        
        }
      })

}


}





