import CryptoJS from 'crypto-js';

export class FileHelper {

    static encrypt(name: string, file: object): string {
        const crypted = CryptoJS.AES.encrypt(JSON.stringify(file), name).toString();
        const ext = name.split('.').pop();
        return `${crypted}.${ext}`;
    }

}
