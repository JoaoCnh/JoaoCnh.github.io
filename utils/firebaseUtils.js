import Firebase from 'firebase';
import AppConstants from '../constants/constants';

let firebaseUtils = {
  homeInstance: function(){
    return new Firebase(AppConstants.FIREBASE_HOST);
  },
  getMenus: function(){
    return this.homeInstance().child('menus').once('value', function(snapshot) {
      return snapshot;
    }, function (error) {
      return error;
    });
  },
  toArray: function(obj){
    var arr = [];
    for(var key in obj){
      arr.push(obj[key]);
    }
    return arr;
  }
};

export default firebaseUtils;
