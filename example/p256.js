var EC = require('elliptic').ec;

// Create and initialize EC context
// (better do it once and reuse it)
var ec = new EC('p256');

// Generate keys
var key = ec.genKeyPair();
console.log('privateKey', JSON.stringify(key.getPrivate()))

console.log('publicKey', key.getPublic(false, "hex"))

// Sign the message's hash (input must be an array, or a hex-string)
var msgHash = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
var signature = key.sign(msgHash);

console.log('publicKey r', signature.r.toString('hex'))
console.log('publicKey s', signature.s.toString('hex'))

// Export DER encoded signature in Array
var derSign = signature.toDER("hex");

console.log('signature', JSON.stringify(signature))
console.log('signature', derSign)

// Verify signature
console.log('verify signature', key.verify(msgHash, derSign));

