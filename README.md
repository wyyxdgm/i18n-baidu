# i18n-baidu

*通过百度的api实现i18n多语言翻译*


## 使用方法

1. 在[百度翻译官网](http://api.fanyi.baidu.com/api/trans/product/index)申请接入
2. 打开管理控制台，获取APP ID与密钥，覆盖代码中的yourKey, yourSecret

```
const I18nBaidu = require('i18n-baidu');
let i18nBaidu = new I18nBaidu(yourKey, yourSecret);

let postData = {
    q: 'a group of men standing next to each other\n ha ha ',
    from: 'en',
    to: 'zh'
}

i18nBaidu.translate(postData, (res) => {
    if (res) {
        console.log(res);
    }
});
```
