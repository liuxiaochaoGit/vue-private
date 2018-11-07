/**
 *  @Description:
 *  @date   2018/8/28
 *  @author liuzhenchao
 *
 **/

/*
* aes 加密/解密
* import Aes from '@/assets/javascripts/aesUtil';
* const aes = new Aes();
* aes.encrypt()  加密
* aes.decrypy()  解密
* */

import CryptoJS from 'crypto-js';
const KEY = 'wojiazhuangmiyao';
class AesUtil {

    encrypt(word) {
        let key = CryptoJS.enc.Utf8.parse(KEY);
        let srcs = CryptoJS.enc.Utf8.parse(word);
        let encrypted = CryptoJS.AES.encrypt(srcs, key, {mode: CryptoJS.mode.ECB, padding: CryptoJS.pad.Pkcs7});
        return encrypted.toString();
    }

    decrypt(word) {
        var key = CryptoJS.enc.Utf8.parse(KEY);
        var decrypt = CryptoJS.AES.decrypt(word, key, {mode: CryptoJS.mode.ECB, padding: CryptoJS.pad.Pkcs7});
        return CryptoJS.enc.Utf8.stringify(decrypt).toString();

    }
}

export default AesUtil;
