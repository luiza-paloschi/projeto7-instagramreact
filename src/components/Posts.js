import { useState } from "react";

export default function Posts(){
  const arraypost = [
   {imgUser: "assets/img/meowed.svg", user: "meowed", imgPost: "assets/img/gato-telefone.svg", liked: "respondeai", numLikes:101.523}
 ,  {imgUser: "assets/img/barked.svg", user: "barked", imgPost: "assets/img/dog.svg",  liked: "adorable_animals", numLikes: 99.159}              
  ]
    return <div class="posts">
          {arraypost.map(post => <Post imgUser = {post.imgUser} user = {post.user} imgPost = {post.imgPost} liked = {post.liked} numLikes = {post.numLikes}/>)}
  </div>
}


function Post(props){
  const [likes, setLikes] = useState(props.numLikes)
  const [isLiked, setLiked] = useState("heart-outline")
  const [heartClass, setHeartClass] = useState("unliked")
  const [bookClass, setbookClass] = useState("unsaved")
  const [saved, setSave] = useState("bookmark-outline")

  function like(elemento){

    if(elemento ==="imagem" && isLiked ==="heart"){
      return
    }

    if(isLiked==="heart-outline"){ 
      setLikes(likes + 0.001) 
      setLiked("heart")
      setHeartClass("likedPost")
      
    } else{
      setLiked("heart-outline")
      setHeartClass("unliked")
      setLikes(likes - 0.001)
    }
    
  }

  function salvar(){
    
    if(saved ==="bookmark-outline"){ 
      setSave("bookmark")
      setbookClass("postSalvo")
      
    } else{
      setSave("bookmark-outline")
      setbookClass("unsaved")
    }
  }
 
    return(
    <div class="post" data-test="post">
      <div class="topo">
        <div class="usuario">
          <img src={props.imgUser} alt =""/>
          {props.user}
        </div>
        <div class="acoes">
          <ion-icon name="ellipsis-horizontal"></ion-icon>
        </div>
      </div>

      <div class="conteudo">
        <img data-test="post-image"src={props.imgPost} alt="" onClick={() =>like("imagem")}/>
      </div>

      <div class="fundo">
        <div class="acoes">
          <div>
            <ion-icon data-test="like-post" class={heartClass} name={isLiked} onClick={()=>like("icone")} ></ion-icon>
            <ion-icon name="chatbubble-outline"></ion-icon>
            <ion-icon name="paper-plane-outline"></ion-icon>
          </div>
          <div>
            <ion-icon data-test="save-post" onClick ={salvar} name={saved} class={bookClass}></ion-icon>
          </div>
        </div>

        <div class="curtidas">
          <img src="assets/img/respondeai.svg" alt=""/>
          <div class="texto">
            Curtido por <strong>{props.liked}</strong> e <strong data-test="likes-number">outras {likes.toFixed(3)} pessoas</strong>
          </div>
        </div>
      </div>
    </div>
  );
}
