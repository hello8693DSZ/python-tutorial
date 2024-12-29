---
title: 循环控制语句：break 与 continue
tag: Python, 流程控制：程序的导航仪, 循环结构：while
author: 灵魂歌手er
---
如果您需要控制循环（比如终止循环/跳过这次循环），可以使用循环控制语句。

## 终止循环

在Python中，`break`用于终止循环，就像这样：

```python
for i in range(3):
    print(i)
    break
```

会输出：

```
0
```

由于在进行第一次循环时就终止了循环，因此程序将不再继续循环，并执行循环以后的语句。

注意：`break`必须在循环内使用，否则会发生错误，就像这样：

```
Traceback (most recent call last):
  File "d:\SimpleGame\test.py", line 1
    break
    ^^^^^
SyntaxError: 'break' outside loop
```

## 跳过循环

在Python中，`continue`用于终止这次循环，开始下一次循环，就像这样：

```python
for i in range(3):
    print("Loop")
    if i == 1:
        continue
    print(i)
```

会输出：

```
Loop
0
Loop
Loop
2
```

此时由于我们在`i`的值为1时终止了本次循环，因此程序不会执行下面的语句，开始下一次循环。

注意：`continue`必须在循环内使用，否则会发生错误，就像这样：

```
Traceback (most recent call last):
  File "d:\test.py", line 1
    continue
    ^^^^^^^^
SyntaxError: 'continue' not properly in loop
```