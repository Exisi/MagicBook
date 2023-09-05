---
categories:
  - HTML
tags:
  - Text
date:
  - 2020-6-21 12:50:15
---

<ul>
    <li>&ZeroWidthSpace;&ZeroWidthSpace;<span style="font-family:&quot;Comic Sans MS&quot;; font-size:12pt">Text
        </span><span style="font-family:&quot;Microsoft YaHei UI&quot;; font-size:12pt">接口表示</span><span
            style="font-family:&quot;Comic Sans MS&quot;; font-size:12pt"> Element </span><span
            style="font-family:&quot;Microsoft YaHei UI&quot;; font-size:12pt">或</span><span
            style="font-family:&quot;Comic Sans MS&quot;; font-size:12pt"> Attr </span><span
            style="font-family:&quot;Microsoft YaHei UI&quot;; font-size:12pt">的文本内容。如果一个元素在其内容中没有标记，则它有一个实现包含元素文本的</span><span
            style="font-family:&quot;Comic Sans MS&quot;; font-size:12pt"> Text </span><span
            style="font-family:&quot;Microsoft YaHei UI&quot;; font-size:12pt">的子元素。但是，如果元素包含标记，则将其解析为形成其子元素的信息项和文本节点。</span>
    </li>
</ul>
<p style="margin-left:0; margin-right:0"><br></p>
<ul style="list-style-type:disc">
    <li><span
            style="font-family:&quot;Microsoft YaHei UI&quot;; font-size:12.0pt">新文档的每个文本块都有一个文本节点。随着时间的推移，随着文档内容的变化，可能会创建更多的文本节点。</span><span
            style="font-family:&quot;Comic Sans MS&quot;; font-size:12.0pt"> Node.normalize() </span><span
            style="font-family:&quot;Microsoft YaHei UI&quot;; font-size:12.0pt">方法将相邻的</span><span
            style="font-family:&quot;Comic Sans MS&quot;; font-size:12.0pt"> Text </span><span
            style="font-family:&quot;Microsoft YaHei UI&quot;; font-size:12.0pt">对象合并回每个文本块的单个节点。</span></li>
</ul>
<p style="margin-left:0; margin-right:0"><br></p>
<table border="1" cellpadding="0" cellspacing="0" summary=""
    style="border-collapse:collapse; border-color:#a3a3a3; border-style:solid; border-width:1pt; direction:ltr; margin-left:.3333in">
    <tbody>
        <tr>
            <td
                style="background-color:black; border-color:#a3a3a3; border-style:solid; border-width:1pt; vertical-align:top; width:1.7916in">
                <p style="margin-left:0; margin-right:0"><strong>构造函数</strong></p>
            </td>
            <td
                style="background-color:black; border-color:#a3a3a3; border-style:solid; border-width:1pt; vertical-align:top; width:3.1819in">
                <p style="margin-left:0; margin-right:0"><strong>说明</strong></p>
            </td>
        </tr>
        <tr>
            <td style="border-color:#a3a3a3; border-style:solid; border-width:1pt; vertical-align:top; width:1.7916in">
                <p style="margin-left:0; margin-right:0">Text()</p>
            </td>
            <td style="border-color:#a3a3a3; border-style:solid; border-width:1pt; vertical-align:top; width:3.1819in">
                <p style="margin-left:0; margin-right:0">返回一个带有参数的文本节点作为其文本内容。</p>
            </td>
        </tr>
    </tbody>
</table>
<p style="margin-left:0; margin-right:0"><br></p>
<ul style="list-style-type:disc">
    <li><span style="font-family:&quot;Comic Sans MS&quot;; font-size:12.0pt">Text</span><span
            style="font-family:&quot;Comic Sans MS&quot;; font-size:12.0pt"> </span><span
            style="font-family:&quot;Microsoft YaHei UI&quot;; font-size:12.0pt">对象有以下属性：</span></li>
</ul>
<table border="1" cellpadding="0" cellspacing="0" summary=""
    style="border-collapse:collapse; border-color:#a3a3a3; border-style:solid; border-width:1pt; direction:ltr; margin-left:.3333in">
    <tbody>
        <tr>
            <td
                style="background-color:black; border-color:#a3a3a3; border-style:solid; border-width:1pt; vertical-align:top; width:1.175in">
                <p style="margin-left:0; margin-right:0"><strong>属性</strong></p>
            </td>
            <td
                style="background-color:black; border-color:#a3a3a3; border-style:solid; border-width:1pt; vertical-align:top; width:6.0756in">
                <p style="margin-left:0; margin-right:0"><strong>说明</strong></p>
            </td>
            <td
                style="background-color:black; border-color:#a3a3a3; border-style:solid; border-width:1pt; vertical-align:top; width:.5in">
                <p style="margin-left:0; margin-right:0"><strong>状态</strong></p>
            </td>
        </tr>
        <tr>
            <td style="border-color:#a3a3a3; border-style:solid; border-width:1pt; vertical-align:top; width:1.175in">
                <p style="margin-left:0; margin-right:0">wholeText</p>
            </td>
            <td style="border-color:#a3a3a3; border-style:solid; border-width:1pt; vertical-align:top; width:6.0756in">
                <p style="margin-left:0; margin-right:0"><span
                        style="font-family:&quot;Microsoft YaHei UI&quot;">返回一个</span><span
                        style="font-family:&quot;Comic Sans MS&quot;"> DOMString</span><span
                        style="font-family:&quot;Microsoft YaHei UI&quot;">，其中包含逻辑上与此节点相邻的所有</span><span
                        style="font-family:&quot;Comic Sans MS&quot;"> Text </span><span
                        style="font-family:&quot;Microsoft YaHei UI&quot;">节点的文本，按文档顺序连接</span></p>
            </td>
            <td style="border-color:#a3a3a3; border-style:solid; border-width:1pt; vertical-align:top; width:.5in">
                <p style="margin-left:0; margin-right:0">只读</p>
            </td>
        </tr>
    </tbody>
</table>
<p style="margin-left:0; margin-right:0"><br></p>
<ul style="list-style-type:disc">
    <li><span style="font-family:&quot;Comic Sans MS&quot;; font-size:12.0pt">Text</span><span
            style="font-family:&quot;Comic Sans MS&quot;; font-size:12.0pt"> </span><span
            style="font-family:&quot;Microsoft YaHei UI&quot;; font-size:12.0pt">对象有以下方法：</span></li>
</ul>
<table border="1" cellpadding="0" cellspacing="0" summary=""
    style="border-collapse:collapse; border-color:#a3a3a3; border-style:solid; border-width:1pt; direction:ltr; margin-left:.3333in">
    <tbody>
        <tr>
            <td
                style="background-color:black; border-color:#a3a3a3; border-style:solid; border-width:1pt; vertical-align:top; width:.9402in">
                <p style="margin-left:0; margin-right:0"><strong>方法</strong></p>
            </td>
            <td
                style="background-color:black; border-color:#a3a3a3; border-style:solid; border-width:1pt; vertical-align:top; width:6.7833in">
                <p style="margin-left:0; margin-right:0"><strong>说明</strong></p>
            </td>
        </tr>
        <tr>
            <td style="border-color:#a3a3a3; border-style:solid; border-width:1pt; vertical-align:top; width:.9402in">
                <p style="margin-left:0; margin-right:0">splitText</p>
            </td>
            <td style="border-color:#a3a3a3; border-style:solid; border-width:1pt; vertical-align:top; width:6.7833in">
                <p style="margin-left:0; margin-right:0">在指定的偏移量处将节点分成两个节点</p>
            </td>
        </tr>
    </tbody>
</table>
<p style="margin-left:0; margin-right:0"><br></p>
<p style="margin-left:0; margin-right:0"><br></p>
<p><span style="font-family:&quot;Microsoft YaHei UI&quot;">来自</span><span
        style="font-family:&quot;Comic Sans MS&quot;"> &lt;</span><a
        data-cke-saved-href="https://developer.mozilla.org/zh-CN/docs/Web/API/Text"
        href="https://developer.mozilla.org/zh-CN/docs/Web/API/Text"><span
            style="font-family:&quot;Comic Sans MS&quot;">https://developer.mozilla.org/zh-CN/docs/Web/API/Text</span></a><span
        style="font-family:&quot;Comic Sans MS&quot;">&gt; </span></p>
