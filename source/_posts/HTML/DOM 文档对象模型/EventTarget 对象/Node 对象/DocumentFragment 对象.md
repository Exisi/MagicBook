---
categories:
  - HTML
tags:
  - DocumentFragment
date:
  - 2020-6-9 17:10:15
---

<ul style="list-style-type:disc">
    <li><span style="font-size:12.0pt"><span
                style="font-family:&quot;Comic Sans MS&quot;">DocumentFragment</span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">，文档片段接口，表示一个没有父对象的最小文档对象。</span></span></li>
</ul>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
<ul style="list-style-type:disc">
    <li><span style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">它被作为一个轻量版的</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"> Document
            </span></span><span style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">使用，就像标准的</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"> document
            </span></span><span style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">一样，存储由节点（</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">nodes</span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">）组成的文档结构。与</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"> document
            </span></span><span style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">相比，最大的区别是它不是真实</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"> DOM </span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">树的一部分，它的变化不会触发</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"> DOM </span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">树的重新渲染，且不会对性能产生影响。</span></span></li>
</ul>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
<p style="margin-left: 40px;"><img
        src="data:image/png;base64,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"
        style="height:43px; width:438px"></p>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
<ul style="list-style-type:disc">
    <li><span style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">最常用的方法是使用</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"> DocumentFragment
            </span></span><span style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">创建并组成一个</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"> DOM </span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">子树，然后使用</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"> Node </span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">接口方法（如：</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">appendChild()
            </span></span><span style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">或</span></span><span style="font-size:12.0pt"><span
                style="font-family:&quot;Comic Sans MS&quot;">
                insertBefore()</span></span><span style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">）将其插入到</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"> DOM </span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">中。这种情况下会插入片段的所有子节点，并留下一个空的</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">
                DocumentFragment</span></span><span style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">。因为所有的节点会被一次插入到文档中，所以仅会发生一个重渲染的操作，而不是每个节点分别被插入到文档中从而发生多次重渲染的操作。</span></span>
    </li>
</ul>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
<ul style="list-style-type:disc">
    <li><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">该接口在</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"> Web </span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">组件（</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">Web
                components</span></span><span style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">）中也非常有用：</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">&lt;template&gt;
            </span></span><span style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">元素在其</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">
                HTMLTemplateElement.content </span></span><span style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">属性中包含了一个</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">
                DocumentFragment</span></span><span style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">。</span></span></li>
</ul>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
<ul style="list-style-type:disc">
    <li><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">可以使用</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">
                document.createDocumentFragment </span></span><span style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">方法或者构造函数来创建一个空的</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">
                DocumentFragment</span></span><span style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">。</span></span></li>
</ul>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
<table summary="" cellspacing="0"
    style="border-collapse:collapse; border-color:#a3a3a3; border-style:solid; border-width:1px; margin-left:32px"
    class=" cke_show_border">
    <tbody>
        <tr>
            <td
                style="background-color:black; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.9625in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:white"><strong>构造函数</strong></span></span></span></p>
            </td>
            <td
                style="background-color:black; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:3.0187in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:white"><strong>说明</strong></span></span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.9625in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;">DocumentFragment()</span></span></p>
            </td>
            <td
                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:3.0187in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">创建一个新的</span><span
                            style="font-family:&quot;Comic Sans MS&quot;"> CustomEvent</span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">。</span></span></p>
            </td>
        </tr>
    </tbody>
</table>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
<ul style="list-style-type:disc">
    <li><span style="font-size:12.0pt"><span
                style="font-family:&quot;Comic Sans MS&quot;">DocumentFragment</span></span> <span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">对象有以下属性：</span></span>
    </li>
</ul>
<table summary="" cellspacing="0"
    style="border-collapse:collapse; border-color:#a3a3a3; border-style:solid; border-width:1px; margin-left:32px"
    class=" cke_show_border">
    <tbody>
        <tr>
            <td
                style="background-color:black; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.8951in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:white"><strong>属性</strong></span></span></span></p>
            </td>
            <td
                style="background-color:black; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:4.8833in">
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
                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.8951in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;">childElementCount</span></span></p>
            </td>
            <td
                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:4.9013in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;">childElementCount</span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">返回所有属于</span><span
                            style="font-family:&quot;Comic Sans MS&quot;"> DocumentFragment </span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">的</span><span
                            style="font-family:&quot;Comic Sans MS&quot;"> Element </span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">类型的子对象。</span></span></p>
            </td>
            <td
                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:.5in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">只读</span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.8951in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;">children</span></span></p>
            </td>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:4.8833in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">返回一个实时的</span><span
                            style="font-family:&quot;Comic Sans MS&quot;"> HTMLCollection</span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">，其中包含了所有属于</span><span
                            style="font-family:&quot;Comic Sans MS&quot;"> DocumentFragment </span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">的</span><span
                            style="font-family:&quot;Comic Sans MS&quot;"> Element </span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">类型的子对象。</span></span></p>
            </td>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:.5in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">只读</span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.8951in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;">firstElementChild</span></span></p>
            </td>
            <td
                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:4.8833in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">返回</span><span
                            style="font-family:&quot;Comic Sans MS&quot;"> DocumentFragment </span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">的第一个</span><span
                            style="font-family:&quot;Comic Sans MS&quot;"> Element </span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">类型的子对象，如果没有则返回</span><span
                            style="font-family:&quot;Comic Sans MS&quot;"> null</span></span></p>
            </td>
            <td
                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:.5in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">只读</span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.8951in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;">lastElementChild</span></span></p>
            </td>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:4.8833in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">返回</span><span
                            style="font-family:&quot;Comic Sans MS&quot;"> DocumentFragment </span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">的最后一个</span><span
                            style="font-family:&quot;Comic Sans MS&quot;"> Element </span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">类型的子对象，如果没有则返回</span><span
                            style="font-family:&quot;Comic Sans MS&quot;"> null</span></span></p>
            </td>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:.5in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">只读</span></span></p>
            </td>
        </tr>
    </tbody>
</table>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
<p style="margin-left: 40px;"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">DocumentFragment</span>&nbsp; <span
            style="font-family:&quot;Microsoft YaHei UI&quot;">对象有以下方法：</span></span></p>
<table summary="" cellspacing="0"
    style="border-collapse:collapse; border-color:#a3a3a3; border-style:solid; border-width:1px; margin-left:32px"
    class=" cke_show_border">
    <tbody>
        <tr>
            <td
                style="background-color:black; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.6222in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:white"><strong>方法</strong></span></span></span></p>
            </td>
            <td
                style="background-color:black; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:5.6694in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:white"><strong>说明</strong></span></span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.6222in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;">append()</span></span></p>
            </td>
            <td
                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:5.6694in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">在文档片段的最后一个子对象后插入一组</span><span
                            style="font-family:&quot;Comic Sans MS&quot;"> Node </span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">或字符串对象。</span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.6222in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;">prepend()</span></span></p>
            </td>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:5.6694in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">在文档片段的第一个元素前插入一组</span><span
                            style="font-family:&quot;Comic Sans MS&quot;"> Node </span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">或字符串对象</span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.6222in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;">querySelector()</span></span></p>
            </td>
            <td
                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:5.6694in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">返回在</span><span
                            style="font-family:&quot;Comic Sans MS&quot;"> DocumentFragment </span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">中以文档顺序排列的第一个符合指定选择器的</span><span
                            style="font-family:&quot;Comic Sans MS&quot;"> Element </span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">节点。</span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.6222in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;">querySelectorAll()</span></span></p>
            </td>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:5.6694in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">返回在</span><span
                            style="font-family:&quot;Comic Sans MS&quot;"> DocumentFragment </span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">中所有的符合指定选择器的</span><span
                            style="font-family:&quot;Comic Sans MS&quot;"> Element </span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">节点组成的</span><span
                            style="font-family:&quot;Comic Sans MS&quot;"> NodeList </span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">数组。</span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.6222in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;">getElementById()</span></span></p>
            </td>
            <td
                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:5.6694in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">返回在</span><span
                            style="font-family:&quot;Comic Sans MS&quot;"> DocumentFragment </span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">中以文档顺序排列的第一个符合指定</span><span
                            style="font-family:&quot;Comic Sans MS&quot;"> ID </span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">选择器的</span><span
                            style="font-family:&quot;Comic Sans MS&quot;"> Element </span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">节点。与</span><span
                            style="font-family:&quot;Comic Sans MS&quot;"> Document.getElementById() </span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">作用相同</span></span></p>
            </td>
        </tr>
    </tbody>
</table>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">&nbsp;</span></span></p>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">&nbsp;</span></span></p>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">来自</span></span><span
        style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"> &lt;</span></span><a
        data-cke-saved-href="https://developer.mozilla.org/zh-CN/docs/Web/API/DocumentFragment#%E8%A7%84%E8%8C%83"
        href="https://developer.mozilla.org/zh-CN/docs/Web/API/DocumentFragment#%E8%A7%84%E8%8C%83"><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Comic Sans MS&quot;">https://developer.mozilla.org/zh-CN/docs/Web/API/DocumentFragment#%E8%A7%84%E8%8C%83</span></span></a><span
        style="font-size:9.0pt"><span style="font-family:Calibri">&gt; </span></span></p>
