---
categories:
- HTML
tags:
- CustomEvent
---

<ul style="list-style-type:disc">
    <li><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">CustomEvent
            </span></span><span style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">接口表示由程序出于某个目的而创建的事件</span></span></li>
</ul>

<p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>

<p style="margin-left:40px"><img
        src="data:image/png;base64,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"
        style="height:46px; width:248px" /></p>

<p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>

<table cellspacing="0"
    style="border-collapse:collapse; border-color:#a3a3a3; border-style:solid; border-width:1px; margin-left:32px"
    summary="">
    <tbody>
        <tr>
            <td
                style="background-color:black; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.5208in">
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
                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.5208in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;">CustomEvent()</span></span></p>
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

<p style="margin-left:40px"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">CustomEvent</span> <span
            style="font-family:&quot;Microsoft YaHei UI&quot;">对象有以下属性：</span></span></p>

<table cellspacing="0"
    style="border-collapse:collapse; border-color:#a3a3a3; border-style:solid; border-width:1px; margin-left:32px"
    summary="">
    <tbody>
        <tr>
            <td
                style="background-color:black; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:.8756in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:white"><strong>属性</strong></span></span></span></p>
            </td>
            <td
                style="background-color:black; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:3.1145in">
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
                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:.8756in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;">detail</span></span></p>
            </td>
            <td
                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:3.1145in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">返回在初始化事件时传入的任何数据</span></span></p>
            </td>
            <td
                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:.5in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">只读</span></span></p>
            </td>
        </tr>
    </tbody>
</table>

<p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>

<p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>

<p><span style="font-family:&quot;Microsoft YaHei UI&quot;">来自</span><span
        style="font-family:&quot;Comic Sans MS&quot;"> &lt;</span><a
        href="https://developer.mozilla.org/zh-CN/docs/Web/API/CustomEvent"><span
            style="font-family:&quot;Comic Sans MS&quot;">https://developer.mozilla.org/zh-CN/docs/Web/API/CustomEvent</span></a><span
        style="font-family:&quot;Comic Sans MS&quot;">&gt; </span></p>