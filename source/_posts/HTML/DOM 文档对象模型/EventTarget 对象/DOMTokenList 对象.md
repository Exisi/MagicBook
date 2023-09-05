---
categories:
  - HTML
tags:
  - DOMTokenList
date:
  - 2020-6-12 13:00:15
---

<ul style="list-style-type:disc">
    <li><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">DOMTokenList
            </span></span><span style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">接口表示一组空格分隔的标记（</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">tokens</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">）。如由</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">
                Element.classList</span></span><span style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">、</span></span><span style="font-size:12.0pt"><span
                style="font-family:&quot;Comic Sans MS&quot;">HTMLLinkElement.relList </span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">、</span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Comic Sans MS&quot;">HTMLAnchorElement.relList</span></span> <span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">或</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"> HTMLAreaElement.relList
            </span></span><span style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">返回的一组值。它和</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"> JavaScript Array
            </span></span><span style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">对象一样，索引从</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"> 0 </span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">开始。</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">DOMTokenList
            </span></span><span style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">总是区分大小写</span></span></li>
</ul>

<p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>

<ul style="list-style-type:disc">
    <li><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">DOMTokenList
            </span></span><span style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">对象有以下属性：</span></span></li>
</ul>

<table cellspacing="0"
    style="border-collapse:collapse; border-color:#a3a3a3; border-style:solid; border-width:1px; margin-left:32px"
    summary="">
    <tbody>
        <tr>
            <td
                style="background-color:black; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.0513in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:white"><strong>属性</strong></span></span></span></p>
            </td>
            <td
                style="background-color:black; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:3.459in">
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
                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.0513in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;">length</span></span></p>
            </td>
            <td
                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:3.459in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">一个整数，表示存储在该对象里值的个数</span></span></p>
            </td>
            <td
                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:.5in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">只读</span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.0513in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;">value</span></span></p>
            </td>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:3.459in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">该属性以</span><span
                            style="font-family:&quot;Comic Sans MS&quot;"> DOMString </span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">的形式返回</span><span
                            style="font-family:&quot;Comic Sans MS&quot;"> **DOMTokenList **</span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">列表的值</span></span></p>
            </td>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:.5in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
            </td>
        </tr>
    </tbody>
</table>

<p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>

<ul style="list-style-type:disc">
    <li><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">DOMTokenList
            </span></span><span style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">对象有以下方法：</span></span></li>
</ul>

<table cellspacing="0"
    style="border-collapse:collapse; border-color:#a3a3a3; border-style:solid; border-width:1px; margin-left:32px"
    summary="">
    <tbody>
        <tr>
            <td
                style="background-color:black; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:3.0222in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:white"><strong>方法</strong></span></span></span></p>
            </td>
            <td
                style="background-color:black; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:4.7944in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:white"><strong>说明</strong></span></span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:3.0222in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;">item(index)</span></span></p>
            </td>
            <td
                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:4.8159in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">根据传入的索引值返回一个值，如果索引值大于等于符号列表的长度（</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">length</span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">），则返回</span><span
                            style="font-family:&quot;Comic Sans MS&quot;"> undefined </span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">或</span><span
                            style="font-family:&quot;Comic Sans MS&quot;"> null</span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">，在</span><span
                            style="font-family:&quot;Comic Sans MS&quot;"> Gecko 7.0 </span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">之前的版本中返回</span><span
                            style="font-family:&quot;Comic Sans MS&quot;"> null</span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:3.0222in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;">contains(token)</span></span></p>
            </td>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:4.7944in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">如果</span><span
                            style="font-family:&quot;Comic Sans MS&quot;"> DOMTokenList </span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">列表中包括相应的字符串</span><span
                            style="font-family:&quot;Comic Sans MS&quot;"> token</span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">，则返回</span><span
                            style="font-family:&quot;Comic Sans MS&quot;"> true</span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">，否则返回</span><span
                            style="font-family:&quot;Comic Sans MS&quot;"> false</span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:3.0222in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Comic Sans MS&quot;">add(token1[,
                            token2[, ...tokenN]])</span></span></p>
            </td>
            <td
                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:4.7944in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">添加一个或多个标记（</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">token</span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">）到</span><span
                            style="font-family:&quot;Comic Sans MS&quot;"> DOMTokenList </span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">列表中</span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:3.0222in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Comic Sans MS&quot;">remove(token1[,
                            token2[, ...tokenN]])</span></span></p>
            </td>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:4.7944in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">从</span><span
                            style="font-family:&quot;Comic Sans MS&quot;"> DOMTokenList </span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">列表中移除一个或多个标记（</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">token</span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">）</span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:3.0222in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Comic Sans MS&quot;">replace(oldToken,
                            newToken)</span></span></p>
            </td>
            <td
                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:4.7944in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">使用</span><span
                            style="font-family:&quot;Comic Sans MS&quot;"> newToken </span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">替换</span><span
                            style="font-family:&quot;Comic Sans MS&quot;"> token</span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:3.0222in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;">supports(token)</span></span></p>
            </td>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:4.7944in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">如果传入的</span><span
                            style="font-family:&quot;Comic Sans MS&quot;"> token </span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">是相关属性（</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">attribute</span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">）支持的标记，则返回</span><span
                            style="font-family:&quot;Comic Sans MS&quot;"> true</span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:3.0222in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Comic Sans MS&quot;">toggle(token [,
                            force])</span></span></p>
            </td>
            <td
                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:4.7993in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">从</span><span
                            style="font-family:&quot;Comic Sans MS&quot;"> DOMTokenList </span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">字符串中移除标记字串（</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">token</span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">），并返回</span><span
                            style="font-family:&quot;Comic Sans MS&quot;"> false</span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">。如果传入的字串（</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">token</span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">）不存在，则将其添加进去，并返回</span><span
                            style="font-family:&quot;Comic Sans MS&quot;"> true </span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">。</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">force </span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">是一个可选的布尔值，如果传入</span><span
                            style="font-family:&quot;Comic Sans MS&quot;"> true </span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">，且传入的</span><span
                            style="font-family:&quot;Comic Sans MS&quot;"> token </span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">不存在，则将其添加进去并返回</span><span
                            style="font-family:&quot;Comic Sans MS&quot;"> true </span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">，若传入的</span><span
                            style="font-family:&quot;Comic Sans MS&quot;"> _token _</span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">存在，则直接返回</span><span
                            style="font-family:&quot;Comic Sans MS&quot;"> true </span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">；反之，如果传入</span><span
                            style="font-family:&quot;Comic Sans MS&quot;"> false </span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">，则移除存在的</span><span
                            style="font-family:&quot;Comic Sans MS&quot;"> token</span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">，并返回</span><span
                            style="font-family:&quot;Comic Sans MS&quot;"> false </span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">，如</span><span
                            style="font-family:&quot;Comic Sans MS&quot;"> token </span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">不存在则直接返回</span><span
                            style="font-family:&quot;Comic Sans MS&quot;"> false</span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:3.0222in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;">entries()</span></span></p>
            </td>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:4.7944in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">返回一个迭代器（</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">iterator</span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">），以遍历这个对象中的所有键值对</span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:3.0222in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Comic Sans MS&quot;">forEach(callback
                            [, thisArg])</span></span></p>
            </td>
            <td
                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:4.7944in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">为每个</span><span
                            style="font-family:&quot;Comic Sans MS&quot;"> DOMTokenList </span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">中的元素都调用一次传入的</span><span
                            style="font-family:&quot;Comic Sans MS&quot;"> callback </span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">函数</span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:3.0222in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;">keys()</span></span></p>
            </td>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:4.7944in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">返回一个迭代器（</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">iterator</span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">）以遍历这个对象中所有键值对的键</span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:3.0222in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;">values()</span></span></p>
            </td>
            <td
                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:4.7944in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">返回一个迭代器（</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">iterator</span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">）以遍历这个对象中所有键值对的值</span></span></p>
            </td>
        </tr>
    </tbody>
</table>

<p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>

<p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>

<p><span style="font-family:&quot;Microsoft YaHei UI&quot;">来自</span><span
        style="font-family:&quot;Comic Sans MS&quot;"> &lt;</span><a
        href="https://developer.mozilla.org/zh-CN/docs/Web/API/DOMTokenList"><span
            style="font-family:&quot;Comic Sans MS&quot;">https://developer.mozilla.org/zh-CN/docs/Web/API/DOMTokenList</span></a><span
        style="font-family:&quot;Comic Sans MS&quot;">&gt; </span></p>
