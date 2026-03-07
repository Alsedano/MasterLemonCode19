/*
// Descifra el siguiente secreto:
*/

var secret =
  "': rg!qg yq,urae: ghsrf wuran shrerg jq,u'qf ra r' ,qaq' er g'q,o rg,fuwurae: m!hfua( t'usqfuq ,:apu(:m xv";

// Sabiendo que el alfabeto original ha sufrido la siguiente transformación:
var plain = "abcdefghijklmnopqrstuvwxyz:()!¡,'";
var cipher = "qw,ert(yuio'pa:sdfg!hjklz¡xcv)bnm";

//del ejercicio anterior :)
function zipObject(keys, values) {
  const map = new Map();
  for (let index = 0; index < keys.length; index++) {
    map.set(keys[index], values[index] ?? " ");
  }

  return Object.fromEntries(map);
}

function decrypt(secret) {
  const plainArray = Array.from(plain);
  const cipherArray = Array.from(cipher);

  const objMapper = zipObject(cipherArray, plainArray);
  let decriptedValue = "";
  for (const element of secret) {
    if (element != " ") {
      decriptedValue += objMapper[element];
    } else {
      decriptedValue += " ";
    }
  }

  return decriptedValue;
}

console.log(decrypt(secret));
