function constObj(){
  const user = {
    name: "Name"
  };
  
  user.name = "Name Updated";
  
  return user.name;
}

module.exports = constObj;