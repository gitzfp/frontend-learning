//1. 组成元素
// 变量名只能由字母(A-Z, a-z)、数字(0-9)、下划线(\_)和美元符($)组成。

// 2. 开头规则
let letter = 25 //字母
let _underscore = 20 //下划线
let $dollar = '美元' //美元符

// let 2dollar //不能以数字开头

//3.变量中间不能有空格和中划线
// let my letiable = 'my letiable' //变量之间不能有空格
// let my-letiable = 'my-letiable' //变量之间不能有中划线

//4.区分大小写
let a = 250
let A = 251
console.log('变量a:',a,'变量A：',A)

//5.避免关键字和保留字
// let if = 3
// let enum = 4

//6.避免变量名过长
// let aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa = 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'

//7.不建议汉字命名
let 中国 = '我爱中国' //不建议
console.log(中国)


