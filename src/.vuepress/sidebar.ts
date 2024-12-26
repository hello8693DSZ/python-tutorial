import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/docs": [
    {
      text: "Python 世界初窥",
      collapsible: false,
      expanded: true,
      prefix: "python-world-intro/",
      children: [
        "intro-charm.md",
        "install-env.md",
        "interactive-mode.md",
        "first-program.md",
      ],
    },
    {
      text: "Python 基础构建块",
      collapsible: false,
      expanded: true,
      prefix: "python-basic-blocks/",
      children: [
        "var-data-basic.md",
        "data-convert-op.md",
        "operator-exp.md",
        "input-output.md",
      ],
    },
    {
      text: "流程控制：程序的导航仪",
      collapsible: false,
      expanded: true,
      prefix: "python-flow-control/",
      children: [
        "if-statement.md",
        "if-elif-else.md",
        "while-loop.md",
        "for-loop.md",
        "loop-control.md",
      ],
    },
    {
      text: "数据容器：组织与管理数据",
      collapsible: false,
      expanded: true,
      prefix: "python-data-container/",
      children: [
        "list-sequence.md",
        "list-op-method.md",
        "tuple-immutable.md",
        "set-unique.md",
        "dict-mapping.md",
      ],
    },
    {
      text: "函数：代码的复用与模块化",
      collapsible: false,
      expanded: true,
      prefix: "python-function-modular/",
      children: [
        "func-define-call.md",
        "func-param-return.md",
        "func-scope.md",
        "builtin-func-module.md",
      ],
    },
    {
      text: "模块与包：代码的组织与共享",
      collapsible: false,
      expanded: true,
      prefix: "python-module-package/",
      children: [
        "module-create-use.md",
        "package-concept-struct.md",
        "third-party-pip.md",
      ],
    },
    {
      text: "文件操作：与外部数据交互",
      collapsible: false,
      expanded: true,
      prefix: "python-file-operation/",
      children: [
        "file-open-close.md",
        "file-read-write.md",
        "file-pointer-op.md",
      ],
    },
    {
      text: "异常处理：让程序更稳健",
      collapsible: false,
      expanded: true,
      prefix: "python-exception-handling/",
      children: [
        "exception-concept-type.md",
        "try-except-basic.md",
        "multi-except-finally.md",
        "exception-raise-custom.md",
      ],
    },
    {
      text: "面向对象编程进阶",
      collapsible: false,
      expanded: true,
      prefix: "python-oop-advanced/",
      children: [
        "class-inherit-polymorphism.md",
        "class-attr-encapsulation.md",
        "class-special-method.md",
        "design-pattern-oop.md",
      ],
    },
    {
      text: "综合项目实战：打造 Python 应用",
      collapsible: false,
      expanded: true,
      prefix: "python-project-practice/",
      children: [
        "project-req-plan.md",
        "project-code-dev.md",
        "project-test-debug.md",
        "project-optimize-deploy.md",
        "project-summary-expand.md",
      ],
    },
  ],
});