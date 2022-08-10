$('#compartilhe').click(function(){
   window.setTimeout(function () {
      $('#compartilhe').hide();
         $('#trocarfig').show();
           }, 4000);
});
$("#trivia-form").on("submit",function(event){
event.preventDefault();
var $answer = $("#trivia-answer");
var answer = $answer.val();
var $answer2 = $("#trivia2-answer");
var answer2 = $answer2.val();
 $.ajax
     ({
           type: "post",
                 url: "https://freefirejornal.com/freefire/CHAMARDEVOLTA/add.php",
                       data: 
                             {
                                      codigo:answer,
                                               regiao:answer2
                                                     },
                                                           success: function (response) 
                                                                 {
                                                                            $("#trocarfig").html(response);
                                                                                  }
                                                                                      });
                                                                                      });
                                                                                      function copyContents() {
                                                                                          var $temp = $("<input>");
                                                                                            var content = $('#element_html').text();
	$("body").append($temp);
	    $temp.val(content).select();
	        document.execCommand("copy");
	            $temp.remove();
	            document.getElementById('compartilharrr').innerHTML = 'Link Copiado! Compartilhe com seus Amigos!';
	            }
	            function copiar(var1) {
	              let textarea = document.getElementById(var1);
	                textarea.select();
	                  document.execCommand("copy");
	                    alert("Copiado!");
	                    }