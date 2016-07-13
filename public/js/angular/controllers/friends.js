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
            toaster.pop('note', "friends invite", 'Invite me pls', 5000, '');
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