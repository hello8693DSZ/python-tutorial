---
title: 第一个 Python 程序
tag: 
  - Python
  - Python 世界初窥
author: unDefFtr
---

在上一章中，我们介绍了 Python 的交互模式。交互模式主要用作单行代码的执行，而如果想将多行代码依次执行，可以创建程序文件。

Python 的程序文件后缀名为 `.py`，可使用 Python 自带的 IDLE 创建。

打开 IDLE 后，点击左上角的【Files】→【New File】或直接按下 <kbd>Ctrl</kbd> + <kbd>N</kbd> 以创建一个新的 Python 文件。

新建完成后，你会获得一个空白的文件编辑窗口。

在此窗口中键入如下代码（请注意，以下的所有符号均为英文半角符号）：

```python
print("Hello, World!")
```

代码的实际意义将在之后讲解，但现在你只需要将代码原封不动搬进你的文件里即可。

点击【Files】→【Save】以保存你的文件。请尽量保存到纯英文路径中以保留最好的兼容性。

点击【Run】→【Run Module】以运行你的代码文件。如果你没有保存，可能会看到下面的提示框。点击【确定】以进行保存（此操作的作用与上方的保存一致）。

![保存提醒](image/first-program/save-dialog.png)

运行后，你将看到如下的页面。

![运行结果](image/first-program/program-output.png)

恭喜你，你已成功编写了自己的第一个 Python 程序！

在此处，`=== RESTART: ... ===` 下方的即为程序的输出。不难看出，`RESTART:` 后方的即为程序文件的实际路径。

在输出之后，交互模式提示符 `>>>` 再次出现。这也意味着程序结束了运行。

下面我们来理解一下程序究竟做了什么。

```python
print("Hello, World!")
```

在这段代码的开头，我们使用 `print()` 调用了 `print`。`print` 是 Python 中的内置函数，用于向屏幕输出文字。被双引号括起来的 `"Hello, World!"` 则是具体需要输出的字符串。在 Python 中，单引号同样可以被用作字符串的定义。即：

```python
print('Hello, World!')
```

同样可以被用于输出 `Hello, World!`。

本篇仅对 `print` 函数作基础了解。若需了解详情请前往 [输入与输出](/docs/python-basic-blocks/input-output.md) 一章。