angular.module('starter.services', [])

.factory('Events', function() {

        var events = [{
            id: 0,
            title: 'Test0',
            photoUrl: 'https://temple-israel.org/sites/default/files/uploaded_images/1620_-_rac_ltaken_cc.jpg',
            date: "March 4-7"
        }, {
            id: 1,
            title: 'Test1',
            photoUrl: 'https://static.wixstatic.com/media/cc1999_43000fc486b54abd89850eee541e3de4.jpeg/v1/fill/w_199,h_199,al_c,lg_1,q_80/cc1999_43000fc486b54abd89850eee541e3de4.jpeg',
            date: "April 4-7"
        }];

        return{
          all: function(){
            console.log(' in all')
            return events;
          },
          get: function(eventId) {
            console.log( ' in get', eventId)
                for (var i = 0; i < events.length; i++) {
                    if (events[i].id === parseInt(eventId)) {
                        return events[i];
                    }
                }
                return null;
            }
        }
    })
    .factory('Chats', function() {
        // Might use a resource here that returns a JSON array

        // Some fake testing data
        var chats = [{
            id: 0,
            name: 'Ben Sparrow',
            lastText: 'You on your way?',
            face: 'img/ben.png'
        }, {
            id: 1,
            name: 'Max Lynx',
            lastText: 'Hey, it\'s me',
            face: 'img/max.png'
        }, {
            id: 2,
            name: 'Adam Bradleyson',
            lastText: 'I should buy a boat',
            face: 'img/adam.jpg'
        }, {
            id: 3,
            name: 'Perry Governor',
            lastText: 'Look at my mukluks!',
            face: 'img/perry.png'
        }, {
            id: 4,
            name: 'Mike Harrington',
            lastText: 'This is wicked good ice cream.',
            face: 'img/mike.png'
        }];

        return {
            all: function() {
                return chats;
            },
            remove: function(chat) {
                chats.splice(chats.indexOf(chat), 1);
            },
            get: function(chatId) {
                for (var i = 0; i < chats.length; i++) {
                    if (chats[i].id === parseInt(chatId)) {
                        return chats[i];
                    }
                }
                return null;
            }
        };
    });