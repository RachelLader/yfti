angular.module('starter.services', [])

.factory('Events', function() {

        var events = [{
            id: 0,
            title: 'Test0',
            photoUrl: 'https://temple-israel.org/sites/default/files/uploaded_images/1620_-_rac_ltaken_cc.jpg',
            date: "March 4-7",
            numLikes: 3
        }, {
            id: 1,
            title: 'Test1',
            photoUrl: 'https://static.wixstatic.com/media/cc1999_43000fc486b54abd89850eee541e3de4.jpeg/v1/fill/w_199,h_199,al_c,lg_1,q_80/cc1999_43000fc486b54abd89850eee541e3de4.jpeg',
            date: "April 4-7",
            numLikes: 5
        }];

        return {
            all: function() {
                console.log(' in all')
                return events;
            },
            get: function(eventId) {
                console.log(' in get', eventId)
                for (var i = 0; i < events.length; i++) {
                    if (events[i].id === parseInt(eventId)) {
                        return events[i];
                    }
                }
                return null;
            }
        }
    })
    .factory("Auth", function($firebaseAuth) {
        var usersRef = new Firebase("https//yfti.firebaseio.com/users");
        return $firebaseAuth(usersRef);
    })

    .factory('Photos', function($http) {
        // Might use a resource here that returns a JSON array

        // Some fake testing data
        var getPhotos = function() {
            return $http({
                method: 'GET',
                url: '/getPhotos'
            }).then(function(response) {
                console.log(response);
            });
        }

        return {
            getPhotos: getPhotos
        };
    });