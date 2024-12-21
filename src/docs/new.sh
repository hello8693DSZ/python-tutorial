#!/bin/bash

# 定义章节和对应的 URL 名称数组以及实际标题数组
chapters=(
  "python-world-intro"
  "python-basic-blocks"
  "python-flow-control"
  "python-data-container"
  "python-function-modular"
  "python-module-package"
  "python-file-operation"
  "python-exception-handling"
  "python-oop-advanced"
  "python-project-practice"
)
chapter_titles=(
  "Python 世界初窥"
  "Python 基础构建块"
  "流程控制：程序的导航仪"
  "数据容器：组织与管理数据"
  "函数：代码的复用与模块化"
  "模块与包：代码的组织与共享"
  "文件操作：与外部数据交互"
  "异常处理：让程序更稳健"
  "面向对象编程进阶"
  "综合项目实战：打造 Python 应用"
)

# 定义章节下各小节的 URL 名称数组以及实际标题数组（示例，可根据实际需求完整补充）
subsections=(
  "intro-charm install-env interactive-mode"
  "var-data-basic data-convert-op operator-exp input-output"
  "if-statement if-elif-else while-loop for-loop loop-control"
  "list-sequence list-op-method tuple-immutable set-unique dict-mapping"
  "func-define-call func-param-return func-scope builtin-func-module"
  "module-create-use package-concept-struct third-party-pip"
  "file-open-close file-read-write file-pointer-op"
  "exception-concept-type try-except-basic multi-except-finally exception-raise-custom"
  "class-inherit-polymorphism class-attr-encapsulation class-special-method design-pattern-oop"
  "project-req-plan project-code-dev project-test-debug project-optimize-deploy project-summary-expand"
)
subsection_titles=(
  "Python 简介与魅力 Python 安装环境 Python 交互模式探索"
  "变量与数据类型基础 数据类型转换与操作 运算符与表达式 输入与输出"
  "条件判断：if 语句 多分支决策：if-elif-else 语句 循环结构：while 循环 迭代循环：for 循环 循环控制语句：break 与 continue"
  "列表：灵活的序列 列表的操作与方法 元组：不可变的序列 集合：独特的数据集合 字典：键值对的映射"
  "函数的定义与调用 函数参数与返回值 函数的作用域 内置函数与常用函数模块"
  "模块的创建与使用 包的概念与结构 第三方模块与包管理工具"
  "文件的打开与关闭 文件的读取与写入 文件指针操作与随机读写"
  "异常的概念与常见类型 try-except 语句基础 多异常处理与 finally 子句 异常的抛出与自定义异常"
  "类的继承与多态性深化 类的属性与方法封装 类的特殊方法与魔法方法 设计模式与面向对象编程实践"
  "项目需求分析与规划 项目代码实现与功能开发 项目测试与调试 项目优化与部署 项目总结与拓展"
)

# 循环创建章节文件夹
for ((i = 0; i < ${#chapters[@]}; i++)); do
    chapter=${chapters[$i]}
    chapter_title=${chapter_titles[$i]}
    mkdir -p "$chapter"
    # 在章节文件夹下创建 README.md 文件并写入章节概述（这里先简单写入章节名）
    # 按照 VuePress Theme Hope Frontmatter 格式写入标题和标签信息到 README.md
    echo "---" >> "$chapter/README.md"
    echo "title: ${chapter_title}" >> "$chapter/README.md"
    echo "tag: Python, ${chapter_title}" >> "$chapter/README.md"
    echo "---" >> "$chapter/README.md"
    # 循环创建章节下的小节 markdown 文件并写入标题和标签信息
    IFS=' ' read -ra subsection_array <<< "${subsections[$i]}"
    IFS=' ' read -ra subsection_title_array <<< "${subsection_titles[$i]}"
    for ((j = 0; j < ${#subsection_array[@]}; j++)); do
        subsection=${subsection_array[$j]}
        subsection_title=${subsection_title_array[$j]}
        touch "$chapter/$subsection.md"
        echo "---" > "$chapter/$subsection.md"
        echo "title: ${subsection_title}" >> "$chapter/$subsection.md"
        echo "tag: Python, ${chapter_title}, ${subsection_title}" >> "$chapter/$subsection.md"
        echo "---" >> "$chapter/$subsection.md"
    done
done