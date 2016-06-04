//中文字符
var reg = /[\u4eff-\u9fa5]/;

//双字节字符
var reg = /[^\x00-\xff]/;

//全角字符
var reg = /[^\uFF00-\uFFFF]/;

//验证密码是否安全
var reg = /^(([A-Z]*[a-z]*|\d*|[-_\~!@#\$%\^&\*\.\(\)\[\]\{\}\?\\\/\'"]*)|.{0,5})$|\s/;

//货币数字
var reg = /^\d+(\.\d+)?$/;

//html标记
var reg = /<(\S*?)[^>]*>.*?|<.*?/>/;

//网络链接
var reg = /(h|H)(r|R)(e|E)(f|F) *= *('|")?(\w|\\|\/|\.)+('|"| *|>)?/;

//图片链接
var reg = /(s|S)(r|R)(c|C) *= *('|")?(\w|\\|\/|\.)+('|"| *|>)?/;

//email地址
var reg = /\w+([-+.]\w+)[email=*@\w+(%5b-.%5d\w+)*\.\w+(%5b-.%5d\w+)*]*@\w+([-.]\w+)*\.\w+([-.]\w+)*[/email]/;

//url
var reg = /[url=http://([/w-%5d+/.)+%5bw-%5d+(/%5b/w-./?%25&=%5d*)]http://([\w-]+\.)+[w-]+(/[\w-./?%&=]*)[/url]?/;