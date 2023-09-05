---
categories:
  - HTML
tags:
  - MutationObserver
date:
  - 2020-6-16 12:00:15
---

<ul style="list-style-type:disc">
    <li><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">MutationObserver
            </span></span><span style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">接口提供了监视对</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"> DOM </span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">树所做更改的能力。它被设计为旧的</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"> Mutation Events
            </span></span><span style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">功能的替代品，该功能是</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"> DOM3 Events
            </span></span><span style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">规范的一部分</span></span></li>
</ul>

<p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>

<table cellspacing="0"
    style="border-collapse:collapse; border-color:#a3a3a3; border-style:solid; border-width:1px; margin-left:32px"
    summary="">
    <tbody>
        <tr>
            <td
                style="background-color:black; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.7916in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:white"><strong>构造函数</strong></span></span></span></p>
            </td>
            <td
                style="background-color:black; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:3.1819in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:white"><strong>说明</strong></span></span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.7916in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;">MutationObserver()</span></span></p>
            </td>
            <td
                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:3.218in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">创建并返回一个新的</span><span
                            style="font-family:&quot;Comic Sans MS&quot;"> MutationObserver </span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">它会在指定的</span><span
                            style="font-family:&quot;Comic Sans MS&quot;"> DOM </span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">发生变化时被调用</span></span></p>
            </td>
        </tr>
    </tbody>
</table>

<p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>

<ul style="list-style-type:disc">
    <li><span style="font-size:12.0pt"><span
                style="font-family:&quot;Comic Sans MS&quot;">MutationObserver</span></span> <span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">对象有以下方法：</span></span>
    </li>
</ul>

<table cellspacing="0"
    style="border-collapse:collapse; border-color:#a3a3a3; border-style:solid; border-width:1px; margin-left:32px"
    summary="">
    <tbody>
        <tr>
            <td
                style="background-color:black; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.3298in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:white"><strong>方法</strong></span></span></span></p>
            </td>
            <td
                style="background-color:black; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:5.5402in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:white"><strong>说明</strong></span></span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.3298in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;">disconnect()</span></span></p>
            </td>
            <td
                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:5.6097in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">阻止</span><span
                            style="font-family:&quot;Comic Sans MS&quot;"> MutationObserver </span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">实例继续接收的通知，直到再次调用其</span><span
                            style="font-family:&quot;Comic Sans MS&quot;"> observe() </span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">方法，该观察者对象包含的回调函数都不会再被调用</span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.3298in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;">observe()</span></span></p>
            </td>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:5.6097in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">配置</span><span
                            style="font-family:&quot;Comic Sans MS&quot;"> MutationObserver </span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">在</span><span
                            style="font-family:&quot;Comic Sans MS&quot;"> DOM </span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">更改匹配给定选项时，通过其回调函数开始接收通知</span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.3298in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;">takeRecords()</span></span></p>
            </td>
            <td
                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:5.6097in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">从</span><span
                            style="font-family:&quot;Comic Sans MS&quot;"> MutationObserver </span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">的通知队列中删除所有待处理的通知，并将它们返回到</span><span
                            style="font-family:&quot;Comic Sans MS&quot;"> MutationRecord </span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">对象的新</span><span
                            style="font-family:&quot;Comic Sans MS&quot;"> Array </span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">中</span></span></p>
            </td>
        </tr>
    </tbody>
</table>

<p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>

<p><span style="font-size:11.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>

<p><span style="font-size:11.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>

<p><span style="font-family:&quot;Microsoft YaHei UI&quot;">来自</span><span
        style="font-family:&quot;Comic Sans MS&quot;"> &lt;</span><a
        href="https://developer.mozilla.org/zh-CN/docs/Web/API/MutationObserver"><span
            style="font-family:&quot;Comic Sans MS&quot;">https://developer.mozilla.org/zh-CN/docs/Web/API/MutationObserver</span></a><span
        style="font-family:&quot;Comic Sans MS&quot;">&gt; </span></p>
