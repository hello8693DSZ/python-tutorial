---
title: 输入与输出
tag: 
- Python
- Python 基础构建块
author: unDefFtr
---

输入输出是一门编程语言中重要的组成部分。没有了基本的输入输出，程序就失去了处理外部信息的能力。Python 拥有丰富的输入输出方法，可用于各种数据的输入与输出。

## 控制台输入

Python 使用 `input` 函数处理控制台输入。若输入的值为整数或小数类型，输入的值将以数字类型返回，否则输入的值将以字符串形式返回。

```python
s = input()
```

上面的代码会从控制台等待输入，并存储到 `s` 变量中。

`input` 函数接受一个字符串参数，用于作为输入的提示词，如：

```python
s = input("Please input your age: ")
```

会先输出字符串 `Please input your age: `，再等待用户的输入。

## 控制台输出

Python 使用 `print` 函数处理控制台输出。该函数可同时接受多个参数并依次输出。

```python
print(s)
```

该代码将会向控制台输出变量 `s` 并换行。

```python
print(a, b, c)
```

将会依次输出变量 `a`, `b`, `c` 并换行。当同时输出多个变量时，默认使用空格分隔。

在函数参数中添加 `end=""` 以更改行末符号。默认为 `\n`（即换行符）。如：

```python
print("Python is the best language", end="!")
```

将会输出字符串 `Python is the best language!` （此时将不会换行）。

使用 `sep=""` 以更改同时输出多个变量时的分隔符，如：

```python
a = 8
b = 6
c = 9
d = 3
print(a, b, c, d, sep=",")
```

将会输出：

```
8,6,9,3
```
