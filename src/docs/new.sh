#!/bin/bash

# 定义章节和对应的 URL 名称数组
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

# 定义章节下各小节的 URL 名称数组（示例，可根据实际需求完整补充）
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

# 循环创建章节文件夹
for chapter in "${chapters[@]}"; do
    mkdir -p "$chapter"
    # 在章节文件夹下创建 README.md 文件并写入章节概述（这里先简单写入章节名）
    echo "# ${chapter}" > "$chapter/README.md"
    # 循环创建章节下的小节 markdown 文件
    IFS=' ' read -ra subsection_array <<< "${subsections[$i]}"
    for subsection in "${subsection_array[@]}"; do
        touch "$chapter/$subsection.md"
    done
    ((i++))
done