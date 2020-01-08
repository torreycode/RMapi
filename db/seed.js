const Character = require("../models/Character");
const characterJsonInfo = require("./characters.json");


Character.remove({})
.then(start => {
let characterData = characterJsonInfo.map(info => {
    let c = {
        id: info.id,
        name: info.name,
        status: info.status,
        species: info.species,
        gender: info.gender
    }
    return c;
});

return Character.collection.insert(characterData);
})
.then(newdata => {
  console.log(newdata);
});

