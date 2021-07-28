import * as CryptoJS from 'crypto-js';

export default function  encrypt(text: string): any {
    return CryptoJS.enc.Base64.stringify(CryptoJS.enc.Utf8.parse(text));
}