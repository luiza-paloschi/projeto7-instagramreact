
export default function Posts(){
  const arraypost = [
   {imgUser: "assets/img/meowed.svg", user: "meowed", imgPost: "assets/img/gato-telefone.svg", liked: "respondeai", numLikes:"101.523"}
 ,  {imgUser: "assets/img/barked.svg", user: "barked", imgPost: "assets/img/dog.svg",  liked: "adorable_animals", numLikes:"99.159"}              
  ]
    return <div class="posts">
          {arraypost.map(post => <Post imgUser = {post.imgUser} user = {post.user} imgPost = {post.imgPost} liked = {post.liked} numLikes = {post.numLikes}/>)}
  </div>
}


function Post(props){
 
 
    return(
    <div class="post">
      <div class="topo">
        <div class="usuario">
          <img src={props.imgUser} />
          {props.user}
        </div>
        <div class="acoes">
          <ion-icon name="ellipsis-horizontal"></ion-icon>
        </div>
      </div>

      <div class="conteudo">
        <img src={props.imgPost} />
      </div>

      <div class="fundo">
        <div class="acoes">
          <div>
            <ion-icon name="heart-outline"></ion-icon>
            <ion-icon name="chatbubble-outline"></ion-icon>
            <ion-icon name="paper-plane-outline"></ion-icon>
          </div>
          <div>
            <ion-icon name="bookmark-outline"></ion-icon>
          </div>
        </div>

        <div class="curtidas">
          <img src="assets/img/respondeai.svg" />
          <div class="texto">
            Curtido por <strong>{props.liked}</strong> e <strong>outras {props.numLikes} pessoas</strong>
          </div>
        </div>
      </div>
    </div>
  );
}
