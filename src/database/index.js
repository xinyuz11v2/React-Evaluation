'use strict';
const _ = require('lodash');
const db = require('./db.js');

// UTILS
//----------------
// This is a mock db call that waits for # milliseconds and returns
const mockDBCall = (dataAccessMethod) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(dataAccessMethod());
    }, 500);
  });
};

// MOCK DB CALLS
//----------------
const getUsers = () => {
  const dataAccessMethod = () => _.map(db.usersById, (userInfo) => userInfo);
  return mockDBCall(dataAccessMethod);
};
const getHobbies = () => {
  const dataAccessMethod = () => {
    // fill me in :) should return an array of hobbies without duplicate value.
    const allHobbies = _.map(db.hobbiesOfUserByUsername, (hobbies) => (hobbies))
    return _.uniq(allHobbies.flat());
  };
  return mockDBCall(dataAccessMethod);
};

const getListOfAgesOfUsersWith = (hobby) => {
  const dataAccessMethod = () => {
    // fill me in :) should return an arry of age count based on hobby.
    const ageInfo = new Map();
    const ageMap = new Map();
    _.map(db.usersById, (userInfo) => ageInfo.set(userInfo.username, userInfo.age));
    console.log(ageInfo);

    for(let username in db.hobbiesOfUserByUsername){
      if(db.hobbiesOfUserByUsername[username].includes(hobby)){
        const age = ageInfo.get(username);
        if(!ageMap.has(age)){
          ageMap.set(age,0);
        }
        ageMap.set(age, ageMap.get(age)+1);
      }
    }
    let array = [];
    for(let [k,v] of ageMap){
      let obj = {};
      obj.age = k;
      obj.count = v;
      array.push(obj);
    }
    return array;
  };
  return mockDBCall(dataAccessMethod);
};

module.exports = {
  getUsers,
  getListOfAgesOfUsersWith,
  getHobbies
};
