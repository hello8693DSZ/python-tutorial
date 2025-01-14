import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as e,b as t,o as a}from"./app-ptbqs2O5.js";const n={};function h(l,i){return a(),e("div",null,i[0]||(i[0]=[t(`<p>输入输出是一门编程语言中重要的组成部分。没有了基本的输入输出，程序就失去了处理外部信息的能力。Python 拥有丰富的输入输出方法，可用于各种数据的输入与输出。</p><h2 id="控制台输入" tabindex="-1"><a class="header-anchor" href="#控制台输入"><span>控制台输入</span></a></h2><p>Python 使用 <code>input</code> 函数处理控制台输入。若输入的值为整数或小数类型，输入的值将以数字类型返回，否则输入的值将以字符串形式返回。</p><div class="language-python line-numbers-mode" data-highlighter="shiki" data-ext="python" data-title="python" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">s </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> input</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">()</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>上面的代码会从控制台等待输入，并存储到 <code>s</code> 变量中。</p><p><code>input</code> 函数接受一个字符串参数，用于作为输入的提示词，如：</p><div class="language-python line-numbers-mode" data-highlighter="shiki" data-ext="python" data-title="python" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">s </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> input</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;Please input your age: &quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>会先输出字符串 <code>Please input your age: </code>，再等待用户的输入。</p><h2 id="控制台输出" tabindex="-1"><a class="header-anchor" href="#控制台输出"><span>控制台输出</span></a></h2><p>Python 使用 <code>print</code> 函数处理控制台输出。该函数可同时接受多个参数并依次输出。</p><div class="language-python line-numbers-mode" data-highlighter="shiki" data-ext="python" data-title="python" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">print</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(s)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>该代码将会向控制台输出变量 <code>s</code> 并换行。</p><div class="language-python line-numbers-mode" data-highlighter="shiki" data-ext="python" data-title="python" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">print</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(a, b, c)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>将会依次输出变量 <code>a</code>, <code>b</code>, <code>c</code> 并换行。当同时输出多个变量时，默认使用空格分隔。</p><p>在函数参数中添加 <code>end=&quot;&quot;</code> 以更改行末符号。默认为 <code>\\n</code>（即换行符）。如：</p><div class="language-python line-numbers-mode" data-highlighter="shiki" data-ext="python" data-title="python" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">print</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;Python is the best language&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#986801;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">end</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;!&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>将会输出字符串 <code>Python is the best language!</code> （此时将不会换行）。</p><p>使用 <code>sep=&quot;&quot;</code> 以更改同时输出多个变量时的分隔符，如：</p><div class="language-python line-numbers-mode" data-highlighter="shiki" data-ext="python" data-title="python" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">a </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 8</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">b </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 6</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">c </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 9</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">d </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 3</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">print</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(a, b, c, d, </span><span style="--shiki-light:#986801;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">sep</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;,&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>将会输出：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>8,6,9,3</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div>`,21)]))}const r=s(n,[["render",h],["__file","input-output.html.vue"]]),o=JSON.parse('{"path":"/docs/python-basic-blocks/input-output.html","title":"输入与输出","lang":"zh-CN","frontmatter":{"title":"输入与输出","tag":"Python, Python 基础构建块, 输入与输出","description":"输入输出是一门编程语言中重要的组成部分。没有了基本的输入输出，程序就失去了处理外部信息的能力。Python 拥有丰富的输入输出方法，可用于各种数据的输入与输出。 控制台输入 Python 使用 input 函数处理控制台输入。若输入的值为整数或小数类型，输入的值将以数字类型返回，否则输入的值将以字符串形式返回。 上面的代码会从控制台等待输入，并存储到 ...","head":[["meta",{"property":"og:url","content":"https://py.hello8693.xyz/docs/python-basic-blocks/input-output.html"}],["meta",{"property":"og:site_name","content":"Python 教程"}],["meta",{"property":"og:title","content":"输入与输出"}],["meta",{"property":"og:description","content":"输入输出是一门编程语言中重要的组成部分。没有了基本的输入输出，程序就失去了处理外部信息的能力。Python 拥有丰富的输入输出方法，可用于各种数据的输入与输出。 控制台输入 Python 使用 input 函数处理控制台输入。若输入的值为整数或小数类型，输入的值将以数字类型返回，否则输入的值将以字符串形式返回。 上面的代码会从控制台等待输入，并存储到 ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-12-26T12:56:24.000Z"}],["meta",{"property":"article:tag","content":"Python, Python 基础构建块, 输入与输出"}],["meta",{"property":"article:modified_time","content":"2024-12-26T12:56:24.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"输入与输出\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-12-26T12:56:24.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Hello8693\\",\\"url\\":\\"https://www.hello8693.xyz\\"}]}"]]},"headers":[{"level":2,"title":"控制台输入","slug":"控制台输入","link":"#控制台输入","children":[]},{"level":2,"title":"控制台输出","slug":"控制台输出","link":"#控制台输出","children":[]}],"git":{"createdTime":1734756596000,"updatedTime":1735217784000,"contributors":[{"name":"unDefFtr","username":"unDefFtr","email":"undefftr@undefined.ac.cn","commits":1,"url":"https://github.com/unDefFtr"},{"name":"hello8693","username":"hello8693","email":"1320998105@qq.com","commits":1,"url":"https://github.com/hello8693"}]},"readingTime":{"minutes":1.36,"words":407},"filePathRelative":"docs/python-basic-blocks/input-output.md","localizedDate":"2024年12月21日","autoDesc":true}');export{r as comp,o as data};