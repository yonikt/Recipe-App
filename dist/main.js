const renderer=new Renderer


$('#button').on('click', function(){
    renderer.render()
})

$("body").on("click", '.image',function(){
    console.log($(this).closest(".display").find('.ingredients').text())
  })
       





