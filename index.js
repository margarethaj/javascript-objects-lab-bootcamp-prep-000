var recipes = new Object({ tes : 'tes1' });

function Objects(){
  return recipes;
}

function updateObjectWithKeyAndValue(object, key, value){
  return Object.assign({}, object, {[key] : value});
}

functions destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  //object[key] = value;
  //return object
}
