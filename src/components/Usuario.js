import { useState } from "react"

export default function Usuario(){
    
    const [name, setName] = useState("Catana");
    const [imgProfile, setImgProfile] = useState("assets/img/catanacomics.svg");

    function changeName(){
        const resposta = prompt("Digite o novo nome");
        if(resposta!== null && resposta!==undefined && resposta!==""){
         setName(resposta);
        }
    }

    function changeImage(){
      const imagem = prompt("Digite o link da imagem");
      if(imagem!== null && imagem!==undefined && imagem!==""){
       setImgProfile(imagem);
      }
  }

    return <div class="usuario" data-test="user">
    <img data-test="profile-image" onClick={changeImage} src={imgProfile} alt=""/>
    <div class="texto">
      <strong>catanacomics</strong>
      <span data-test="name">
        {name}
        <ion-icon data-test="edit-name" onClick={changeName} name="pencil"></ion-icon>
      </span>
    </div>
  </div>
}