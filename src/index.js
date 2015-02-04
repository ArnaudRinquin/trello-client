var TrelloHelper = require('./trelloHelper');

TrelloHelper
  .checkAuth()
  .catch(function(err){
    $('#connect')
      .show()
      .click(function(){
        Trello.authorize();
      });
  })
  .then(TrelloHelper.getUserInfo)
  .then(function(userData){
    console.log(userData);
    $('#profile').show();
    $('#name').text(userData.fullName);
    $('#boardsCount').text(userData.idBoards.length);
  });