import * as CryptoJS from 'crypto-js';

export default function  encryptWithAES(key: string, text: string): any {
    const passphrase = key || "123";
    return CryptoJS.AES.encrypt(text, passphrase).toString();
}