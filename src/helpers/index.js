import CryptoJS from 'crypto-js';

function generateHash(timestamp, privateKey, publicKey) {
  const hash = CryptoJS.MD5(timestamp + privateKey + publicKey).toString();
  return hash;
}

export default generateHash;
