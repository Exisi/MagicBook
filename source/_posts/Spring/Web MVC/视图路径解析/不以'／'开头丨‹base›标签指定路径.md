---
categories:
  - Spring
tags:
  - ‹base›
date:
  - 2022-11-28 14:40:25
---

<ul style="list-style-type:disc">
    <li><span style="font-size:12.0pt"><span
                style="font-family:&quot;Comic Sans MS&quot;">&lt;bese&gt;</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">是</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">Html</span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">中用于为页面上的所有的相对链接规定默认</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"> URL</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">，可以为每个</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">jsp</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">界面加上</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">&lt;base&gt;</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">标签指定路径</span></span></li>
</ul>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei&quot;"><span
                style="color:#70ad47"><strong>示例</strong></span></span></span></p>
<table summary="" cellspacing="0"
    style="border-collapse:collapse; border-color:#a3a3a3; border-style:solid; border-width:0px; margin-left:32px"
    class=" cke_show_border">
    <tbody>
        <tr>
            <td
                style="background-color:white; border-bottom:0px; border-left:0px; border-right:0px; border-top:0px; vertical-align:top; width:4.0138in">
                <p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:black">&lt;html&gt;</span></span></span></p>
                <p><span style="font-size:12.0pt"><span style="color:black">&nbsp;&nbsp;&nbsp;&nbsp;<span
                                style="font-family:&quot;Comic Sans MS&quot;">&lt;head&gt;</span></span></span></p>
                <p><span style="font-size:12.0pt">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:black">&lt;base</span></span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:black">href=</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:maroon">"http://localhost:8080/page/"</span></span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:black">/&gt;</span></span></span></p>
                <p><span style="font-size:12.0pt"><span style="color:black">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
                                style="font-family:&quot;Comic Sans MS&quot;">&lt;title&gt;&lt;/title&gt;</span></span></span>
                </p>
                <p><span style="font-size:12.0pt"><span style="color:black">&nbsp;&nbsp;&nbsp;&nbsp;<span
                                style="font-family:&quot;Comic Sans MS&quot;">&lt;/head&gt;</span></span></span></p>
                <p><span style="font-size:12.0pt"><span style="color:black">&nbsp;&nbsp;&nbsp;&nbsp;<span
                                style="font-family:&quot;Comic Sans MS&quot;">&lt;body&gt;</span></span></span></p>
                <p><span style="font-size:12.0pt">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:black">&lt;a</span></span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:black">href=</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:maroon">"test/user.dao"</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:black">&gt;</span></span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:black">发起请求</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:black">&lt;/a&gt;</span></span></span></p>
                <p><span style="font-size:12.0pt"><span style="color:black">&nbsp;&nbsp;&nbsp;&nbsp;<span
                                style="font-family:&quot;Comic Sans MS&quot;">&lt;/body&gt;</span></span></span></p>
                <p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:black">&lt;/html&gt;</span></span></span></p>
            </td>
        </tr>
    </tbody>
</table>
<p><span style="font-size:12.0pt"><span style="font-family:SimSun"><span style="color:blue">&nbsp;</span></span></span>
</p>
<ul style="list-style-type:disc">
    <li><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">可以在</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">jsp</span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">界面动态获取路径，赋值给</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">&lt;base&gt;</span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">标签，不管界面指向任何路径都能解析出正确路径</span></span></li>
</ul>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei&quot;"><span
                style="color:#70ad47"><strong>示例</strong></span></span></span></p>
<table summary="" cellspacing="0"
    style="border-collapse:collapse; border-color:#a3a3a3; border-style:solid; border-width:0px; margin-left:32px"
    class=" cke_show_border">
    <tbody>
        <tr>
            <td
                style="background-color:white; border-bottom:0px; border-left:0px; border-right:0px; border-top:0px; vertical-align:top; width:6.7479in">
                <p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:black">&lt;html&gt;</span></span></span></p>
                <p><span style="font-size:12.0pt"><span style="color:black">&nbsp;&nbsp;&nbsp;&nbsp;<span
                                style="font-family:&quot;Comic Sans MS&quot;">&lt;head&gt;</span></span></span></p>
                <p><span style="font-size:12.0pt">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:black">&lt;base</span></span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:black">href=</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:#78230c">"http://${header['host']}${pageContext.request.contextPath}</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:#78230c">/</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:maroon">"</span></span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:black">/&gt;</span></span></span></p>
                <p><span style="font-size:12.0pt"><span style="color:black">&nbsp;&nbsp;&nbsp;&nbsp;<span
                                style="font-family:&quot;Comic Sans MS&quot;">&lt;/head&gt;</span></span></span></p>
                <p><span style="font-size:12.0pt"><span style="color:black">&nbsp;&nbsp;&nbsp;&nbsp;<span
                                style="font-family:&quot;Comic Sans MS&quot;">&lt;body&gt;</span></span></span></p>
                <p><span style="font-size:12.0pt">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:black">&lt;a</span></span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:black">href=</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:maroon">"test/user.dao"</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:black">&gt;</span></span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:black">发起请求</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:black">&lt;/a&gt;</span></span></span></p>
                <p><span style="font-size:12.0pt"><span style="color:black">&nbsp;&nbsp;&nbsp;&nbsp;<span
                                style="font-family:&quot;Comic Sans MS&quot;">&lt;/body&gt;</span></span></span></p>
                <p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:black">&lt;/html&gt;</span></span></span></p>
            </td>
        </tr>
    </tbody>
</table>
