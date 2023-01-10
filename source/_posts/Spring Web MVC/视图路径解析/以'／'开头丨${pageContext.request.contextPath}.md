---
categories:
- Spring Web MVC
tags:
- ${pageContext.request.contextPath}
date:
- 2022-11-28 14:39:15
---

<ul style="list-style-type:disc">
    <li><span style="font-size:12.0pt"><span
                style="font-family:&quot;Comic Sans MS&quot;">${pageContext.request.contextPath}</span></span> <span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">的作用是取出部署的应用程序名，是</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">JSP</span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">取得绝对路径的方法，等价于</span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Comic Sans MS&quot;">&lt;%=request.getContextPath()%&gt;</span></span>&nbsp;
    </li>
</ul>
<p><span style="font-size:12.0pt"><span
            style="font-family:&quot;Microsoft YaHei UI&quot;"><strong>语法</strong></span></span></p>
<p style="margin-left: 40px;"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">{pageContext.request.contextpath/...}</span></span></p>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                style="color:#70ad47"><strong>示例</strong></span></span></span></p>
<p style="margin-left: 40px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:black">&lt;a</span></span>&nbsp;<span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:black">href=</span></span><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:maroon">"{pageContext.request.contextpath}</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;">/test/user.dao</span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:maroon">"</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">&gt;</span></span><span
            style="font-family:&quot;Microsoft YaHei UI&quot;"><span style="color:black">发起请求</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">&lt;/a&gt;</span></span></span></p>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:black">&nbsp;</span></span></span></p>
<ul style="list-style-type:disc">
    <li><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">可以 将</span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Comic Sans MS&quot;">${pageContext.request.contextPath}</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">，放入一个</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">JSP</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">文件中，将用</span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Comic Sans MS&quot;">&lt;c:set&gt;</span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">放入一个变量中，然后在用的时候用</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">EL </span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">表达式取出来。&nbsp;&nbsp;</span></span></li>
</ul>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                style="color:#70ad47"><strong>示例</strong></span></span></span></p>
<table summary="" cellspacing="0"
    style="border-collapse:collapse; border-color:#a3a3a3; border-style:solid; border-width:0px; margin-left:32px"
    class=" cke_show_border">
    <tbody>
        <tr>
            <td
                style="background-color:white; border-bottom:0px; border-left:0px; border-right:0px; border-top:0px; vertical-align:top; width:5.1805in">
                <p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:black">&lt;c:set&nbsp;var=</span><span
                                style="color:maroon">"ctx"</span><span style="color:black">&nbsp;value=</span><span
                                style="color:maroon">"${pageContext.request.contextPath}"</span><span
                                style="color:black">&nbsp;/&gt;</span></span></span></p>
                <p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:black">&nbsp;</span></span></span></p>
                <p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:black">&lt;a</span></span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:black">href=</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:maroon">"{</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:maroon">ctx</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:maroon">}</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;">/test/user.dao</span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:maroon">"</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:black">&gt;</span></span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:black">发起请求</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:black">&lt;/a&gt;</span></span></span></p>
                <p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:black">&nbsp;</span></span></span></p>
            </td>
        </tr>
    </tbody>
</table>