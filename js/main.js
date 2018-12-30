var titre = 0 ;
var xmp = 0 ;
$(document).ready(function(){
    $("#btn1").click(function(){
      $("#p2").append(" <h1 id='"+ ++titre +"titre'>TITRE</h1>.");
      
    });  
  });
  
  $(document).ready(function(event){
    $("#btn1").click(function(){
      $("#p1").append("<xmp id='"+ ++xmp +"titlexmp' ><h1   >TITRE</h1></xmp>");

        for (let index = 1; index <= xmp; index++) {
            console.log(index + " " + xmp )
            $("#"+index+"titlexmp").click(function(){
                window.onclick = e => {
                    // console.log(e.target);
                    console.log(e.target.id.substring(0,1));
                    var textId = e.target.id
                    if (index == parseInt(textId.substring(0,1))) {
                        var x = prompt()
                        $("#"+index+"titlexmp").html(" <h1 >"+x+"</h1>");
                        $("#"+index+"titre").html(" <h1 >"+x+"</h1>");
                    }
                                
                }
            });
          
      }

    });  
})

    // onclick='myFunction()
{/* <xmp id='titlexmp'  style='background-color : blue'></xmp> */}
  

  $(document).ready(function(){
    $("#btn2").click(function(){
      $("#p2").append(" <p>This is a paragraph</p>.");
    });
  });

  $(document).ready(function(){
    $("#btn2").click(function(){
      $("#p1").append("<xmp><p>This is a paragraph</p></xmp>.");
    });
  });

  $(document).ready(function(){
    $("#btn3").click(function(){
      $("#p2").append(" <ol><li>Test1</li><li>Test2</li><li>Test3</li></ol>.");
    });      
  });

  $(document).ready(function(){
    $("#btn3").click(function(){
      $("#p1").append("<xmp><ol><li>Test1</li><li>Test2</li><li>Test3</li></ol></xmp>.");
    });      
  });

  $(document).ready(function(){
    $("#btn4").click(function(){
      $("#p2").append(" <ul><li>Test1</li><li>Test2</li><li>Test3</li></ul>.");
    });      
  });

  $(document).ready(function(){
    $("#btn4").click(function(){
      $("#p1").append(" <xmp><ul><li>Test1</li><li>Test2</li><li>Test3</li></ul></xmp>.");
    });      
  });

  $(document).ready(function(){
    $("#btn5").click(function(){
      $("#p2").append($('<img>',{id:'theImg',src:'res/TUN.jpg'}));
    });      
  });

  $(document).ready(function(){
    $("#btn5").click(function(){
      $("#p1").append(('<xmp><img src="res/TUN.jpg" alt="FLAG"></xmp>'));
    });      
  });

  $(document).ready(function(){
    $("#btn6").click(function(){
      $("#p2").append('<iframe width="500" height="480" src="https://www.youtube.com/embed/PP4Tr0l08NE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');
    });      
  });

  $(document).ready(function(){
    $("#btn6").click(function(){
      $("#p1").append('<xmp><iframe width="500" height="480" src="https://www.youtube.com/embed/PP4Tr0l08NE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></xmp>');
    });      
  });

  $(document).ready(function(){
    $("#btn7").click(function(){
      $("#p2").append('<a href="https://www.FB.com">Click Here</a></p>');
    });      
  });

  $(document).ready(function(){
    $("#btn7").click(function(){
      $("#p1").append('<xmp><a href="https://www.FB.com">Click Here</a></xmp>');
    });      
  });

  function myFunction() {
    var txt;
    var something = prompt("Write something:", "Anything");
    if (something == null || something == "") {
      txt = "User cancelled the prompt.";
    } else {
      txt =  something ;
    }
    document.getElementById("titre").innerHTML = txt;
  }
