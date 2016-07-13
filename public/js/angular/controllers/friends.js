messenger.controller('FriendsController', function($scope, $http, toaster) {
    $http.get("/api/friends/getfriends").success(function(data){
        $scope.list = data;
    });

    $scope.msg = function(msg){
        console.log("Send message to user: " + msg);
    };

    $http.get("/api/friends/getusers/").success(function(data){
        $scope.usersList = data;
    });
    
    $http.get("/api/friends/getinvites").success(function(invites){
        console.log(invites);
        invites.forEach(function(i){
            console.log(i);
            toaster.pop('custom', i.name + " wants to invite you.", 'Please invite me.', 60000);
            $('#toast-container > .toast.toast-info').css('background-image', 'url(/img/upload/' + i.avatar + ')')
        });
        
    });
    
    $scope.invite = function(invite_id){
        console.log("invite " + invite_id);
        $http.put("/api/friends/invite/" + invite_id, function(result){
            console.log("invited");
        });
    }
    
    $scope.del = function(delId){
        $http.get("/api/friends/delfriend/" + delId);
    };
    
});