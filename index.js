var recipes = {
  sauce : "honey",
  meat : "chicken",
  time : "30",
};

function updateObjectWithKeyAndValue(object, key, value){
var object2 = Object.assign({},object);
object2[key] = value;
return object2;
}
function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
  return object;
}
function deleteFromObjectByKey(object, key){
  var object2 = Object.assign({},object);
  delete object2[key];
  return object2;
}
