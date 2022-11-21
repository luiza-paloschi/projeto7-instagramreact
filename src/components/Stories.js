function Story(props){
  return(
    <div class="story">
            <div class="imagem">
              <img src={props.imgStory} alt=""/>
            </div>
            <div class="usuario">
              {props.userStory}
            </div>
          </div>
  );
}

export default function Stories(){
  const arrayStories = [
    {imgStory: "assets/img/9gag.svg", userStory: "9gag"},
    {imgStory: "assets/img/meowed.svg", userStory: "meowed"},
    {imgStory: "assets/img/barked.svg", userStory: "barked"},
    {imgStory: "assets/img/nathanwpylestrangeplanet.svg", userStory: "nathanwpylestrangeplanet"},
    {imgStory: "assets/img/wawawicomics.svg", userStory: "wawawicomics"},
    {imgStory: "assets/img/respondeai.svg", userStory: "respondeai"},
    {imgStory: "assets/img/filomoderna.svg", userStory: "filomoderna"},
    {imgStory: "assets/img/memeriagourmet.svg", userStory: "memeriagourmet"},
  ];
   return (<div class="stories">
       {arrayStories.map(story=> <Story imgStory = {story.imgStory} userStory = {story.userStory}/>)}

          <div class="setinha">
            <ion-icon name="chevron-forward-circle"></ion-icon>
          </div>
        </div>);
}

