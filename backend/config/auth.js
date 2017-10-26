
// expose our config directly to our application using module.exports
module.exports = {

    'facebookAuth' : {
        'clientID'      : '151428508790835', // your App ID
        'clientSecret'  : '58385c564285585424edc330dede19ea', // your App Secret
        'callbackURL'   : 'http://localhost:3000/auth/facebook/callback'
    },

    'googleAuth' : {
        'clientID'      : '301172119269-62rs9v6lh9g82gee35h38321t7f3dgsj.apps.googleusercontent.com',
        'clientSecret'  : '6vc-vVkWF1P4UPsBQGLmETuR',
        'callbackURL'   : 'http://localhost:3000/auth/google/callback'
    }

};
