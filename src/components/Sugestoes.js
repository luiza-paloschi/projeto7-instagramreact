function Sugestao(props){
  return(
    <div class="sugestao">
      <div class="usuario">
        <img src={props.imgUser} alt=""/>
        <div class="texto">
          <div class="nome">{props.userName}</div>
          <div class="razao">{props.segue}</div>
        </div>
      </div>

      <div class="seguir">Seguir</div>
    </div>
  );
}

export default function Sugestoes(){
  const arraySugestoes = [
    {imgUser:"assets/img/bad.vibes.memes.svg", userName: "bad.vibes.memes", segue: "Segue você"},
    {imgUser:"assets/img/chibirdart.svg", userName: "chibirdart", segue: "Segue você"},
    {imgUser:"assets/img/razoesparaacreditar.svg", userName: "razoesparaacreditar", segue: "Novo no Instagram"},
    {imgUser:"assets/img/adorable_animals.svg", userName: "adorable_animals", segue: "Segue você"},
    {imgUser:"assets/img/smallcutecats.svg", userName: "smallcutecats", segue: "Segue você"}
  ];
    return (<div class="sugestoes">
    <div class="titulo">
      Sugestões para você
      <div>Ver tudo</div>
    </div>
  {arraySugestoes.map(suges => <Sugestao imgUser ={suges.imgUser} userName ={suges.userName} segue={suges.segue}/>)}
  </div>);
}