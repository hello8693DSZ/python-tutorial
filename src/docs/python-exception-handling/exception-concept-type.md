---
title: 异常的概念与常见类型
tag: Python, 异常处理：让程序更稳健, 异常的概念与常见类型
author: 灵魂歌手er
---
在程序出现一些错误时，一般会抛出错误，并结束程序。

## 异常的概念

异常指在程序出现问题时抛出的内容，而程序出现错误时终止程序并显示错误信息的过程叫做抛出异常。

抛出异常可以有效防止程序出现预期以外的结果，并防止一错再错。

##  异常的常见类型

`NameError`：常见于与名称相关的内容，比如未定义变量/函数就使用，就像这样：

```
Traceback (most recent call last):
  File "<python-input-1>", line 1, in <module>
    value
NameError: name 'value' is not defined
```

`ValueError`：常见于函数收到的参数类型合法，但是内容不合法（比如向`int()`函数内传入包含非十进制数的字符串），就像这样：

```
Traceback (most recent call last):
  File "<python-input-4>", line 1, in <module>
    int(value)
    ~~~^^^^^^^
ValueError: invalid literal for int() with base 10: '1234a'
```

`SyntaxError`：常见于程序出现其它语法错误（比如变量名不合法），就像这样：

```
Traceback (most recent call last):
  File "<python-input-6>", line 1
    if = 0
       ^
SyntaxError: invalid syntax
```

`if`作为Python的关键字之一，不允许被用作变量名，因此程序抛出`SyntaxError`。

`TypeError`：常见于程序尝试执行的操作不支持特定类型的参数（比如试图比较数字和字符串），就像这样：

```
Traceback (most recent call last):
  File "<python-input-8>", line 1, in <module>
    0 < "func"
TypeError: '<' not supported between instances of 'int' and 'str'
```

`ZeroDivisionError`：常见于程序试图将某数字除以0，就像这样：

```
Traceback (most recent call last):
  File "<python-input-10>", line 1, in <module>
    123/0
    ~~~^~
ZeroDivisionError: division by zero
```