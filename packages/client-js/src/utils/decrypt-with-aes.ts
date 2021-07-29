import * as CryptoJS from 'crypto-js';

export default function  decryptWithAES(key: string, ciphertext: any): any {
    const passphrase = key || "123";
    const bytes = CryptoJS.AES.decrypt(ciphertext, passphrase);
    const originalText = bytes.toString(CryptoJS.enc.Utf8);
    return originalText;
}