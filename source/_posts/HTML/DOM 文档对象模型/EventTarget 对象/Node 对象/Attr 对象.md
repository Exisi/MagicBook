---
categories:
  - HTML
tags:
  - Attr
date:
  - 2020-6-9 16:05:15
---

<ul style="list-style-type:disc">
    <li><span style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">该类型使用对象来表示一个</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"> DOM </span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">元素的属性。在大多数</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"> DOM </span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">方法中，你可能会直接通过字符串的方式获取属性值（例如</span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Comic Sans MS&quot;">Element.getAttribute()</span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">），但是一些函数（例如</span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Comic Sans MS&quot;">Element.getAttributeNode()</span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">）或通过迭代器访问时则返回</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">Attr</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">类型</span></span></li>
</ul>

<p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>

<p style="margin-left:40px"><img
        src="data:image/png;base64,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"
        style="height:43px; width:373px" /></p>

<p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>

<ul style="list-style-type:disc">
    <li><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">Attr </span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">对象有以下属性：</span></span>
    </li>
</ul>

<table cellspacing="0"
    style="border-collapse:collapse; border-color:#a3a3a3; border-style:solid; border-width:1px; margin-left:32px"
    summary="">
    <tbody>
        <tr>
            <td
                style="background-color:black; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.618in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:white"><strong>属性</strong></span></span></span></p>
            </td>
            <td
                style="background-color:black; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:5.2854in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:white"><strong>说明</strong></span></span></span></p>
            </td>
            <td
                style="background-color:black; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:.5in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:white"><strong>状态</strong></span></span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.618in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Comic Sans MS&quot;">name</span></span>
                </p>
            </td>
            <td
                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:5.2854in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">该属性的名称</span></span></p>
            </td>
            <td
                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:.5in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">只读</span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.618in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;">namespaceURI</span></span></p>
            </td>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:5.2854in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">表示该属性的命名空间</span><span
                            style="font-family:&quot;Comic Sans MS&quot;"> URIDOMString</span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">，如果该元素不在命名空间中，则返回</span><span
                            style="font-family:&quot;Comic Sans MS&quot;"> null</span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">。</span></span></p>
            </td>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:.5in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">只读</span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.618in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;">localName</span></span></p>
            </td>
            <td
                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:5.2854in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">表示该属性的命名空间限定的本地名称</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">DOMString</span></span></p>
            </td>
            <td
                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:.5in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">只读</span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.618in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;">prefix</span></span></p>
            </td>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:5.2854in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">表示该属性的命名空间前缀</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">DOMString</span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">，如果没有前缀指定则返回</span><span
                            style="font-family:&quot;Comic Sans MS&quot;"> null</span></span></p>
            </td>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:.5in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">只读</span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.618in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;">ownerElement</span></span></p>
            </td>
            <td
                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:5.2854in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">该属性所附属的元素节点</span></span></p>
            </td>
            <td
                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:.5in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">只读</span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.618in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;">specified</span></span></p>
            </td>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:5.3048in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">该属性将返回真。如果这个属性你在源代码或者在脚本中明确指定的话，它总是返回真。否则它是由文档的</span><span
                            style="font-family:&quot;Comic Sans MS&quot;"> DTD </span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">默认定义的，将总是返回假。</span></span></p>
            </td>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:.5in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">只读</span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.618in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;">value</span></span></p>
            </td>
            <td
                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:5.2854in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">属性的值</span></span></p>
            </td>
            <td
                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:.5in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
            </td>
        </tr>
    </tbody>
</table>

<p><span style="font-size:12.0pt"><span
            style="font-family:&quot;Microsoft YaHei UI&quot;"><strong>注</strong></span></span></p>

<ul style="list-style-type:disc">
    <li><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">在</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">DOM4[REC]</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">中，为了规范化</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"> Attr </span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">的实现，它不再继承自</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">Node</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">。在目前</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">DOM4.1[WD]</span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">中又有变动，因此不建议使用</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"> Attr </span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">对象上有关</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">Node</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">的属性和方法。</span></span></li>
</ul>

<p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>

<p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>

<p><span style="font-family:&quot;Microsoft YaHei UI&quot;">来自</span><span
        style="font-family:&quot;Comic Sans MS&quot;"> &lt;</span><a
        href="https://developer.mozilla.org/zh-CN/docs/Web/API/Attr"><span
            style="font-family:&quot;Comic Sans MS&quot;">https://developer.mozilla.org/zh-CN/docs/Web/API/Attr</span></a><span
        style="font-family:&quot;Comic Sans MS&quot;">&gt; </span></p>
