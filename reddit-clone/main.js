var myApp = angular.module('myApp',['angularMoment']);
myApp.controller('redditController', ['$scope', function($scope) {

    //sort functionality
    $scope.options = ['votes', 'date', 'title'];

    // hardcoded info
    $scope.posts = [
          {
            title: "One title",
            author: "some guy",
            description: "some fancy words about something",
            image: "http://ecx.images-amazon.com/images/I/713u2gDQqML._SX522_.jpg",
            comments: [],
            votes: 0
          },
          {
            title: "Two titles",
            author: "a different guy",
            description: "some other fancy words about something",
            image: "http://ecx.images-amazon.com/images/I/713u2gDQqML._SX522_.jpg",
            comments: [],
            votes: 0
          },
          {
            title: "Three titles, hah, hah, hah, hah",
            author: "some other, other guy",
            description: "some fancy words about something",
            image: "http://ecx.images-amazon.com/images/I/713u2gDQqML._SX522_.jpg",
            comments: [],
            votes: 0
          }
        ];


    //add post stuffs
    $scope.addPost = function () {
      $scope.posts.push({
        'title': $scope.title,
        'author': $scope.author,
        'description': $scope.description,
        'image': $scope.image,
        'comments': [],
        'date': Date.now()
      });
      $scope.title = '';
      $scope.author = '';
      $scope.description = '';
      $scope.image = '';

    };


   $scope.addComment = function(){
       this.post.comments.push({author:this.commentAuthor, comment:this.commentDescription});
      $scope.commentAuthor = '';
      $scope.commentDescription = '';
      console.log($scope.posts);
     };


}]);

