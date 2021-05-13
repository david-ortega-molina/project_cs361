
/*
 * Add your JavaScript to this file to complete the assignment.
 */

//opens modal
var createTwitModal = document.getElementById('create-twit-modal');

// opens up backdrop modal
var modalBackDrop = document.getElementById('modal-backdrop');
modalBackDrop.addEventListener('click', modalBackDrop)

//opens
var createTwitButton = document.getElementById('create-twit-button');
if(createTwitButton){
  createTwitButton.addEventListener('click', showCreateTwitModal);

}



//opens up modal
function showCreateTwitModal (){
  console.log( "help");
  createTwitModal.style.display = "block";
  modalBackDrop.style.display = "block";

}

//closes modal and also clears post
window.onclick = function(event) {
  if (event.target == createTwitModal) {
    createTwitModal.style.display = "none";
    modalBackDrop.style.display = "none";
    document.getElementById('twit-text-input').value = "";
    document.getElementById('twit-attribution-input').value = "";
  }
}

//makes it so you can click the x button
var closeButton = document.getElementsByClassName('modal-close-button');
  closeButton[0].addEventListener('click', closeModal);


//Makes it so you can click the cancel button
var cancelBtn = document.getElementsByClassName('modal-cancel-button')[0];
  cancelBtn.addEventListener('click', closeModal);

//closes modal
  function closeModal(){
    createTwitModal.style.display = "none";
    modalBackDrop.style.display = "none";
    document.getElementById('twit-text-input').value = "";
    document.getElementById('twit-attribution-input').value = "";
  }

// gets information for posts
function addTwit(text, author){
  var articleTwit = document.createElement('article');
  articleTwit.classList.add('twit');

  var twitIcon = document.createElement('div');
  twitIcon.classList.add('twit-icon');
  articleTwit.appendChild(twitIcon);

  var showBullhorn = document.createElement('i');
  showBullhorn.classList.add('fas');
  showBullhorn.classList.add('fa-bullhorn');
  twitIcon.appendChild(showBullhorn);

  var twitContent = document.createElement('div');
  twitContent.classList.add('twit-content');
  articleTwit.appendChild(twitContent);

  var twitText = document.createElement('p');
  twitText.classList.add('twit-text');
  twitText.textContent = text;
  twitContent.appendChild(twitText);

  var twitAuthor = document.createElement('p');
  twitAuthor.classList.add('twit-author');
  twitContent.appendChild(twitAuthor);

  var authorLink = document.createElement('a');
  authorLink.href = "#";
  authorLink.textContent = author;
  twitAuthor.appendChild(authorLink);

  var twitContainer = document.getElementsByClassName('twit-container');
  twitContainer[0].appendChild(articleTwit);

}

//Functions the accept button
var summitBlueBtn = document.getElementsByClassName('modal-accept-button');
    summitBlueBtn[0].addEventListener('click',function() {
      if(document.getElementById('twit-text-input').value === "" ||document.getElementById('twit-attribution-input').value === ""){
        alert("invaild information!! Please try agian");
    }else{
        addTwit(document.getElementById('twit-text-input').value, document.getElementById('twit-attribution-input').value)
        closeModal();
      }
  });

// Gets information for searchbar
  var searchButton = document.getElementById('navbar-search-button');
  searchButton.addEventListener('click', function(){
    var searchInfo = document.getElementById('navbar-search-input').value.toLowerCase();
    var text = document.getElementsByClassName('twit');
    for(var i = text.length-1; i >=0; i--){
      if(text[i].textContent.toLowerCase().indexOf(searchInfo)=== -1){
        text[i].remove();
      }
    }
  });