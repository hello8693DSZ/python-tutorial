---
title: try-except 语句基础
tag: Python, 异常处理：让程序更稳健, try-except
author: 灵魂歌手er
---
为了避免程序在出现异常时直接退出，我们可以使用`try-except`语句捕获可能发生的异常。

## 基本结构

`try-except`的基本结构就像这样：

```python
try:
    print("这是可能发生错误的代码")
    a = 123/0
except:
    print("发生错误")
```

这段代码试图将某个值除以0，但是在运行时没有抛出异常，而是执行了except下方的代码，打印了`发生错误`。

注意：在执行过`except`下方语句后，不会再继续执行`try`下方的语句。

## 捕获特定异常

您可以让`except`子句仅捕获特定的异常，就像这样：

```python
try:
    print("这是可能发生错误的代码")
    a = 123 < "string"
except ZeroDivisionError:
    print("不允许除以0")
```

这段代码会在发生`ZeroDivisionError`时输出`不允许除以0`，但是在遇到其它错误时仍然会抛出异常，就像这样：

```
Traceback (most recent call last):
  File "d:\test.py", line 4, in <module>
    a = 123 < "string"
        ^^^^^^^^^^^^^^
TypeError: '<' not supported between instances of 'int' and 'str'
```

此时虽然发生了错误，但是由于我们没有要求`try-except`语句对这种异常进行捕获，因此抛出了异常。

## 获取异常信息

您可以通过在`except`语句中使用`as`来获取异常信息，就像这样：

```python
try:
    print("这是可能发生错误的代码")
    a = 123 < "string"
except TypeError as e:
    print(e)
```

其执行结果如下：

```
这是可能发生错误的代码
'<' not supported between instances of 'int' and 'str'
```

此时虽然打印了报错信息，但是程序并没有因此终止运行。

注意：如果您需要使用`as`来获取报错信息，则必须指定需要捕获的异常。

如果您不知道这段代码会发生什么问题，请指定捕获`Exception`，这相当于捕获所有异常，就像这样：

```python
try:
    print("这是可能发生错误的代码")
    a = 123 < "string"
except Exception as e:
    print(e)
```