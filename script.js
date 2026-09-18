const botosuCurtir = document.querySelectorAll(".curtir");
botoesCurtir.forEach(function(botoCurtir){
    let curtiu = flase;
    botaoCurtir.addEventListener("click", curtir);
  function curtir(){
    const contador = botaoCurtir.querySelector("span");
    if(curtir===false){
        contador.textContent++;
        curtir = true;}
        else{
            contador.textContent--;
            curtir = false;
        }
        
    }
});
    