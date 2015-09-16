        var myApp = angular.module('myApp',['angularMoment']);
        myApp.controller('redditController', ['$scope', function($scope) {

            //sort functionality
            $scope.options = ['votes', 'date', 'title'];

            // hardcoded info
            $scope.posts = [
                  {
                    title: "A title",
                    author: "some guy",
                    description: "some fancy words about something",
                    image: "http://ecx.images-amazon.com/images/I/713u2gDQqML._SX522_.jpg",
                    votes: 0
                  },
                  {
                    title: "A different title",
                    author: "some guy",
                    description: "some other fancy words about something",
                    image: "http://ecx.images-amazon.com/images/I/713u2gDQqML._SX522_.jpg"
                  },
                  {
                    title: "a third title",
                    author: "some other, other guy",
                    description: "some fancy words about something",
                    image: "http://ecx.images-amazon.com/images/I/713u2gDQqML._SX522_.jpg",
                    votes: 0
                    // date: newDate()

                  }
                ];

            // voting functionality - not working
            $scope.upVote = function () {
              $scope.votes ++;
            };
            $scope.downVote = function () {
              $scope.votes --;
            };

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

            $scope.ok = function() {
              $scope.showModal = false;
            };

            $scope.cancel = function() {
              $scope.showModal = false;
            };



        }]);

//show and hide for the vote thing...
