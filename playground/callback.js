var getUser = (id, callback) => {
    var user = {
        id: id,
        name: 'Ivan'
    };
    setTimeout(()=> {
        callback(user);
    }, 3000);
    
   };

  
   
   
   
   getUser(32, (userObject) => {console.log(userObject);});

