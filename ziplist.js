/**
 * Created by Wyatt Bartlett on 9/19/2016.
 */

function zipList(list1, list2){
  if (list1.length !== list2.length){
    return 'The two lists are not the same length. zipList only accepts two lists that are the same length.'
  }

  let zippedList = []
  for (let i = 0; i < list1.length; i++){
    zippedList.push(list1[i]);
    zippedList.push(list2[i]);
  }
  return zippedList;
}

function zipListTheSimpleWay(list1, list2){
  if (list1.length !== list2.length){
    return 'The two lists are not the same length. zipListTheSimpleWay only accepts two lists that are the same length.'
  }

  let zippedList = []
  zippedList = _.zip(list1, list2);
  return _.flatten(zippedList);
}

//console.log(zipList(['a', 'b', 'c'], [1, 2, 3]));
console.log('zipListTheSimpleWay:');
console.log(zipListTheSimpleWay(['a', 'b', 'c'], [1, 2, 3]));
