const getRecipe=function(){

const value = $('#ingredient').val()

    $.ajax({

        url: `/recipes/${value}`,
        dataType: 'json',
        success: function(result) {
            for(let i=0; i<result.length; i++){
           $('#container').append(`<div>${result[i].title}</div>`)
            }
        }
    })
    


}





$('#button').on('click',getRecipe)

       





