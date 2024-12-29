---
title: 函数的定义与调用
tag: Python, 函数：代码的复用与模块化, 函数的定义与调用
author: 灵魂歌手er
---
函数可以让您方便快捷的复用代码，或者将某些代码模块化以便用于其它项目。

## 函数的定义

定义函数，也就是告诉Python解释器执行该函数时需要执行什么代码。

```python
def function():
    print("This is a function")
```

这段代码定义了一个叫做`function`的函数，调用它时会输出`This is a function`。

注意：`def`语句下方不可留空，如果您没有想好函数的功能，但是希望程序正常运行，请使用`pass`语句，就像这样：

```python
def function():
    pass
```

`pass`语句没有任何实际功能，但是可以保证程序结构的完整。

## 函数的调用

如果您直接执行上一节中的代码，程序将不会产生任何输出。

这是因为这段代码仅仅定义了一个函数，但是没有执行它。

如果您需要执行一个函数，只需要输入其函数名，并在其后附带一个括号即可，就像这样：

```python
def function():
    print("This is a function")
function()
```

需要注意的是，在调用函数时必须进行定义，否则Python会抛出NameError错误，就像这样：

```
Traceback (most recent call last):
  File "<python-input-0>", line 1, in <module>
    function()
    ^^^^^^^^
NameError: name 'function' is not defined
```