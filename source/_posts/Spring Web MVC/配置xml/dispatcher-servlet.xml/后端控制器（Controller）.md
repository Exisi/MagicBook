---
categories:
- Spring Web MVC
tags:
- Controller
date:
- 2022-11-28 14:12:53
---

<ul style="list-style-type:disc">
    <li><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">Spring mvc
            </span></span><span style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">为</span></span><span style="font-size:12.0pt"><span
                style="font-family:&quot;Comic Sans MS&quot;"> HandleMapping </span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">提供了以下</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">Controller:</span></span></li>
</ul>
<table summary="" cellspacing="0"
    style="border-collapse:collapse; border-color:#a3a3a3; border-style:solid; border-width:1px; margin-left:32px"
    class=" cke_show_border">
    <tbody>
        <tr>
            <td
                style="background-color:black; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:2.4909in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:white"><strong>Controller</strong></span></span></span></p>
            </td>
            <td
                style="background-color:black; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:6.1548in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:white"><strong>说明</strong></span></span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="background-color:white; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:2.4909in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;">UrlFilenameViewController</span></span></p>
            </td>
            <td
                style="background-color:white; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:6.2048in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">用于跳转界面，控制器根据请求的</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">URL</span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">直接解析出视图名，省去了自己实现</span><span
                            style="font-family:&quot;Comic Sans MS&quot;"> Ccntroller </span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">跳转页面</span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:2.5097in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;">ParameterizableViewController</span></span>
                </p>
            </td>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:6.1993in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">同样用于界面跳转，控制器根据配置的参数来跳转界面，也省去了自己实现</span><span
                            style="font-family:&quot;Comic Sans MS&quot;"> Ccntroller </span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">跳转页面</span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="background-color:white; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:2.4909in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;">ServletForwardingController</span></span></p>
            </td>
            <td
                style="background-color:white; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:6.1548in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">将请求转发到</span><span
                            style="font-family:&quot;Comic Sans MS&quot;"> Servlet</span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:2.4909in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;">ServletWrappingController</span></span></p>
            </td>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:6.1548in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">将某个</span><span
                            style="font-family:&quot;Comic Sans MS&quot;"> Servlet </span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">包装为</span><span
                            style="font-family:&quot;Comic Sans MS&quot;"> Controller</span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">，所有到</span><span
                            style="font-family:&quot;Comic Sans MS&quot;"> ServletWrappingController </span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">的请求实际上是由它内部所包装的这个</span><span
                            style="font-family:&quot;Comic Sans MS&quot;"> Servlet </span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">实例来处理的，这样可以将这个</span><span
                            style="font-family:&quot;Comic Sans MS&quot;"> Servlet </span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">隐藏起来</span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="background-color:white; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:2.4909in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;">MultiActionController</span></span></p>
            </td>
            <td
                style="background-color:white; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:6.1548in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">一个</span><span
                            style="font-family:&quot;Comic Sans MS&quot;"> Controller </span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">可以写多个方法，分别对应不同的请求，使同一业务的方法可以放在一起了。在使用时让自己的</span><span
                            style="font-family:&quot;Comic Sans MS&quot;"> Controller </span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">类继承&nbsp;</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">MultiActionController </span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">类</span></span></p>
            </td>
        </tr>
    </tbody>
</table>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
<p><span style="font-size:13.5pt"><span style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
<p><span style="font-size:13.5pt"><span
            style="font-family:&quot;Comic Sans MS&quot;"><strong>UrlFilenameViewController</strong></span></span></p>
<ul>
    <li><span style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">直接根据路径的解析视图</span></span></li>
</ul>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                style="color:#70ad47"><strong>示例</strong></span></span></span></p>
<p style="margin-left:36px"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:blue">&lt;bean</span></span>&nbsp;<span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:blue">id</span></span><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:black">=</span></span><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:maroon">"simpleUrlHandlerMapping"</span></span> <span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:blue">class</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">=</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:maroon">"org.springframework.web.servlet.handler.SimpleUrlHandlerMapping"</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:blue">&gt;</span></span></span></p>
<p style="margin-left:36px"><span style="font-size:12.0pt">&nbsp;&nbsp;&nbsp;&nbsp;<span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:blue">&lt;property</span></span>&nbsp;<span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:blue">name</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">=</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:maroon">"mappings"</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:blue">&gt;</span></span></span></p>
<p style="margin-left:36px"><span style="font-size:12.0pt">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:blue">&lt;props&gt;</span></span></span>
</p>
<p style="margin-left:36px"><span
        style="font-size:12.0pt">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:green">&lt;!--</span></span>&nbsp;<span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:green">/</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:green">index</span></span><span
            style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                style="color:green">&nbsp;路径的请求交给&nbsp;</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:green">id</span></span>&nbsp;<span
            style="font-family:&quot;Microsoft YaHei UI&quot;"><span style="color:#538135">为&nbsp;</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#538135">urlFilenameViewController</span></span><span
            style="font-family:&quot;Microsoft YaHei UI&quot;"><span style="color:green">&nbsp;的控制器处理</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:green">--&gt;</span></span></span></p>
<p style="margin-left:36px"><span
        style="font-size:12.0pt">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:blue">&lt;prop</span></span>&nbsp;<span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:blue">key</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">=</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:maroon">"/</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:maroon">index</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:maroon">"</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:blue">&gt;</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;">urlFilenameViewController</span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:blue">&lt;/prop&gt;</span></span></span>
</p>
<p style="margin-left:36px"><span style="font-size:12.0pt">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:blue">&lt;/props&gt;</span></span></span>
</p>
<p style="margin-left:36px"><span style="font-size:12.0pt">&nbsp;&nbsp;&nbsp;&nbsp;<span
            style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:blue">&lt;/property&gt;</span></span></span></p>
<p style="margin-left:36px"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:blue">&lt;/bean&gt;</span></span></span></p>
<p><span style="font-size:13.5pt"><span style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
<table summary="" cellspacing="0"
    style="border-collapse:collapse; border-color:#a3a3a3; border-style:solid; border-width:0px; margin-left:32px"
    class=" cke_show_border">
    <tbody>
        <tr>
            <td
                style="background-color:white; border-bottom:0px; border-left:0px; border-right:0px; border-top:0px; vertical-align:top; width:8.7in">
                <p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:green">&lt;!--&nbsp;urlFilenameViewController&nbsp;--&gt;</span></span></span>
                </p>
                <p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">&lt;bean&nbsp;id</span><span style="color:black">=</span><span
                                style="color:maroon">"urlFilenameViewController"</span><span
                                style="color:blue">&nbsp;class</span><span style="color:black">=</span><span
                                style="color:maroon">"org.springframework.web.servlet.mvc.UrlFilenameViewController"</span><span
                                style="color:blue">&nbsp;/&gt;</span></span></span></p>
            </td>
        </tr>
    </tbody>
</table>
<p><span style="font-size:13.5pt"><span style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
<p><span style="font-size:13.5pt"><span style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
<p><span style="font-size:13.5pt"><span style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
<p><span style="font-size:13.5pt"><span
            style="font-family:&quot;Comic Sans MS&quot;"><strong>ParameterizableViewController</strong></span></span>
</p>
<ul>
    <li><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">直接跳转到</span><span
                style="font-family:&quot;Comic Sans MS&quot;">Controller</span><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">中</span><span
                style="font-family:&quot;Comic Sans MS&quot;">viewname</span><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">参数指定的视图</span></span></li>
</ul>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                style="color:#70ad47"><strong>示例</strong></span></span></span></p>
<p style="margin-left:36px"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:blue">&lt;bean</span></span>&nbsp;<span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:blue">id</span></span><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:black">=</span></span><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:maroon">"simpleUrlHandlerMapping"</span></span> <span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:blue">class</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">=</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:maroon">"org.springframework.web.servlet.handler.SimpleUrlHandlerMapping"</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:blue">&gt;</span></span></span></p>
<p style="margin-left:36px"><span style="font-size:12.0pt">&nbsp;&nbsp;&nbsp;&nbsp;<span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:blue">&lt;property</span></span>&nbsp;<span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:blue">name</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">=</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:maroon">"mappings"</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:blue">&gt;</span></span></span></p>
<p style="margin-left:36px"><span style="font-size:12.0pt">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:blue">&lt;props&gt;</span></span></span>
</p>
<p style="margin-left:36px"><span
        style="font-size:12.0pt">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:green">&lt;!--</span></span>&nbsp;<span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:green">/</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:green">index</span></span><span
            style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                style="color:green">&nbsp;路径的请求交给&nbsp;</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:green">id</span></span><span
            style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                style="color:green">&nbsp;为&nbsp;</span></span><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#538135">p</span></span><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#538135">arameterizableViewC</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:green">ontroller</span></span><span
            style="font-family:&quot;Microsoft YaHei UI&quot;"><span style="color:green">&nbsp;的控制器处理</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:green">--&gt;</span></span></span></p>
<p style="margin-left:36px"><span
        style="font-size:12.0pt">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:blue">&lt;prop</span></span>&nbsp;<span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:blue">key</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">=</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:maroon">"/</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:maroon">index</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:maroon">"</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:blue">&gt;</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;">p</span><span
            style="font-family:&quot;Comic Sans MS&quot;">arameterizableViewController</span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:blue">&lt;/prop&gt;</span></span></span>
</p>
<p style="margin-left:36px"><span style="font-size:12.0pt">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:blue">&lt;/props&gt;</span></span></span>
</p>
<p style="margin-left:36px"><span style="font-size:12.0pt">&nbsp;&nbsp;&nbsp;&nbsp;<span
            style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:blue">&lt;/property&gt;</span></span></span></p>
<p style="margin-left:36px"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:blue">&lt;/bean&gt;</span></span></span></p>
<p style="margin-left:36px"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:blue">&nbsp;</span></span></span></p>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:green">&lt;!--&nbsp;</span></span><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#538135">p</span></span><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#538135">arameterizableViewController</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:#538135">,</span></span><span
            style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                style="color:#538135">指定跳转的视图路径</span></span>&nbsp;<span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:green">--&gt;</span></span></span></p>
<table summary="" cellspacing="0"
    style="border-collapse:collapse; border-color:#a3a3a3; border-style:solid; border-width:0px; margin-left:32px"
    class=" cke_show_border">
    <tbody>
        <tr>
            <td
                style="background-color:white; border-bottom:0px; border-left:0px; border-right:0px; border-top:0px; vertical-align:top; width:8.7152in">
                <p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">&lt;bean&nbsp;id</span><span style="color:black">=</span><span
                                style="color:maroon">"</span><span style="color:maroon">p</span><span
                                style="color:maroon">arameterizableViewController"</span><span
                                style="color:blue">&nbsp;class</span><span style="color:black">=</span><span
                                style="color:maroon">"org.springframework.web.servlet.mvc.ParameterizableViewController"</span><span
                                style="color:blue">&gt;</span></span></span></p>
                <p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">&nbsp;&nbsp;<span
                                style="color:blue">&lt;property&nbsp;name</span><span style="color:black">=</span><span
                                style="color:maroon">"viewName"</span><span style="color:blue">&nbsp;value</span><span
                                style="color:black">=</span><span style="color:maroon">"/index.jsp"</span><span
                                style="color:blue">&nbsp;/&gt;</span></span></span></p>
                <p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">&lt;/bean&gt;</span></span></span></p>
            </td>
        </tr>
    </tbody>
</table>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                style="color:#70ad47">&nbsp;</span></span></span></p>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                style="color:#70ad47">&nbsp;</span></span></span></p>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                style="color:#70ad47">&nbsp;</span></span></span></p>
<p><span style="font-size:13.5pt"><span
            style="font-family:&quot;Comic Sans MS&quot;"><strong>ServletForwardingController</strong><strong> /
            </strong><strong>ServletWrappingController</strong></span></span></p>
<ul>
    <li><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">将请求转发到特定的</span><span
                style="font-family:&quot;Comic Sans MS&quot;">Servlet</span></span></li>
</ul>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                style="color:#70ad47"><strong>示例</strong></span></span></span></p>
<ul style="list-style-type:disc">
    <li><span style="color:#e67e22;"><span style="font-size:12.0pt"><span
                    style="font-family:&quot;Comic Sans MS&quot;">dispatcher-servlet.xml</span></span></span></li>
</ul>
<p style="margin-left:72px"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:blue">&lt;bean</span></span>&nbsp;<span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:blue">id</span></span><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:black">=</span></span><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:maroon">"simpleUrlHandlerMapping"</span></span> <span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:blue">class</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">=</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:maroon">"org.springframework.web.servlet.handler.SimpleUrlHandlerMapping"</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:blue">&gt;</span></span></span></p>
<p style="margin-left:72px"><span style="font-size:12.0pt">&nbsp;&nbsp;&nbsp;&nbsp;<span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:blue">&lt;property</span></span>&nbsp;<span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:blue">name</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">=</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:maroon">"mappings"</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:blue">&gt;</span></span></span></p>
<p style="margin-left:72px"><span style="font-size:12.0pt">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:blue">&lt;props&gt;</span></span></span>
</p>
<p style="margin-left:72px"><span
        style="font-size:12.0pt">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:green">&lt;!--</span></span>&nbsp;<span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:green">/</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:green">index </span></span><span
            style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                style="color:green">路径的请求交给</span></span>&nbsp;<span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#538135">id</span></span><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                style="color:#538135">&nbsp;为&nbsp;</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:#538135">p</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#538135">arameterizableViewController</span></span><span
            style="font-family:&quot;Microsoft YaHei UI&quot;"><span style="color:green">&nbsp;的控制器处理</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:green">--&gt;</span></span></span></p>
<p style="margin-left:72px"><span
        style="font-size:12.0pt">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:blue">&lt;prop</span></span>&nbsp;<span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:blue">key</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">=</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:maroon">"/</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:maroon">index</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:maroon">"</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:blue">&gt;</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;">p</span><span
            style="font-family:&quot;Comic Sans MS&quot;">arameterizableViewController</span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:blue">&lt;/prop&gt;</span></span></span>
</p>
<p style="margin-left:72px"><span style="font-size:12.0pt">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:blue">&lt;/props&gt;</span></span></span>
</p>
<p style="margin-left:72px"><span style="font-size:12.0pt">&nbsp;&nbsp;&nbsp;&nbsp;<span
            style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:blue">&lt;/property&gt;</span></span></span></p>
<p style="margin-left:72px"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:blue">&lt;/bean&gt;</span></span></span></p>
<p style="margin-left:72px"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:blue">&nbsp;</span></span></span></p>
<p style="margin-left: 40px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:green">&nbsp; &nbsp; &nbsp; &lt;!--&nbsp;</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:#538135">s</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#538135">ervletForwardingController</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:#538135">,</span></span><span
            style="font-family:&quot;Microsoft YaHei UI&quot;"><span style="color:#538135">转发到特定的</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:#538135">Servlet</span></span>&nbsp;<span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:green">--&gt;</span></span></span></p>
<table summary="" cellspacing="0"
    style="border-collapse:collapse; border-color:#a3a3a3; border-style:solid; border-width:0px; margin-left:68px"
    class=" cke_show_border">
    <tbody>
        <tr>
            <td
                style="background-color:white; border-bottom:0px; border-left:0px; border-right:0px; border-top:0px; vertical-align:top; width:8.3402in">
                <p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">&lt;bean&nbsp;id</span><span style="color:black">=</span><span
                                style="color:maroon">"</span><span style="color:maroon">s</span><span
                                style="color:maroon">ervletForwardingController"</span><span
                                style="color:blue">&nbsp;class</span><span style="color:black">=</span><span
                                style="color:maroon">"org.springframework.web.servlet.mvc.ServletForwardingController"</span><span
                                style="color:blue">&gt;</span></span></span></p>
                <p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">&nbsp;&nbsp;<span
                                style="color:blue">&lt;property&nbsp;name</span><span style="color:black">=</span><span
                                style="color:maroon">"servletName"</span><span
                                style="color:blue">&nbsp;value</span><span style="color:black">=</span><span
                                style="color:maroon">"indexServlet"</span><span
                                style="color:blue">&nbsp;/&gt;</span></span></span></p>
                <p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">&lt;/bean&gt;</span></span></span></p>
                <p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">&nbsp;</span></span></span></p>
            </td>
        </tr>
    </tbody>
</table>
<ul style="list-style-type:disc">
    <li><span style="color:#e67e22;"><span style="font-size:12.0pt"><span
                    style="font-family:&quot;Comic Sans MS&quot;">web.xml</span></span></span></li>
</ul>
<table summary="" cellspacing="0"
    style="border-collapse:collapse; border-color:#a3a3a3; border-style:solid; border-width:0px; margin-left:68px"
    class=" cke_show_border">
    <tbody>
        <tr>
            <td
                style="background-color:white; border-bottom:0px; border-left:0px; border-right:0px; border-top:0px; vertical-align:top; width:5.0541in">
                <p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:green">&lt;!--&nbsp;</span></span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:green">指定</span></span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:#538135">转发的</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:#538135">Servlet</span></span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:green">--&gt;</span></span></span></p>
                <p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">&lt;servlet&gt;</span></span></span></p>
                <p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">&nbsp;&nbsp;<span
                                style="color:blue">&lt;servlet-name&gt;</span><span
                                style="color:black">indexServlet</span><span
                                style="color:blue">&lt;/servlet-name&gt;</span></span></span></p>
                <p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">&nbsp;&nbsp;<span
                                style="color:blue">&lt;servlet-class&gt;</span><span
                                style="color:black">com.servlet.ServletForwarding</span><span
                                style="color:blue">&lt;/servlet-class&gt;</span></span></span></p>
                <p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">&lt;/servlet&gt;</span></span></span></p>
                <p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">&nbsp;</span></span></span></p>
            </td>
        </tr>
    </tbody>
</table>
<p><span style="font-size:13.5pt"><span style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
<p><span style="font-size:13.5pt"><span style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
<p><span style="font-size:13.5pt"><span
            style="font-family:&quot;Comic Sans MS&quot;"><strong>MultiActionController</strong></span></span></p>
<ul>
    <li><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">通过继承</span><span
                style="font-family:&quot;Comic Sans MS&quot;">MultiActionController</span><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">，将同一业务的请求方法写在继承后的</span><span
                style="font-family:&quot;Comic Sans MS&quot;">Controller</span><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">类中</span></span></li>
</ul>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                style="color:#70ad47"><strong>示例</strong></span></span></span></p>
<ul style="list-style-type:disc">
    <li><span style="color:#e67e22;"><span style="font-size:12.0pt"><span
                    style="font-family:&quot;Comic Sans MS&quot;">MyController.java</span></span></span></li>
</ul>
<table summary="" cellspacing="0"
    style="border-collapse:collapse; border-color:#a3a3a3; border-style:solid; border-width:0px; margin-left:68px"
    class=" cke_show_border">
    <tbody>
        <tr>
            <td
                style="background-color:white; border-bottom:0px; border-left:0px; border-right:0px; border-top:0px; vertical-align:top; width:7.852in">
                <p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">public</span>&nbsp;<span style="color:blue">class</span>&nbsp;<span
                                style="color:black">My</span><span style="color:black">Controller&nbsp;</span><span
                                style="color:blue">extends</span><span
                                style="color:black">&nbsp;MultiActionController{</span></span></span></p>
                <p><span style="font-size:12.0pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;">&nbsp;&nbsp;&nbsp;&nbsp;<span
                                style="color:blue">public</span><span
                                style="color:black">&nbsp;ModelAndView&nbsp;add(HttpServletRequest&nbsp;request,&nbsp;HttpServletResponse&nbsp;response)&nbsp;{</span></span></span>
                </p>
                <p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:black">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ModelAndView&nbsp;mv&nbsp;=&nbsp;</span><span
                                style="color:blue">new</span><span
                                style="color:black">&nbsp;ModelAndView();</span></span></span></p>
                <p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:black">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;mv.addObject(</span><span
                                style="color:maroon">"message"</span><span style="color:black">,&nbsp;</span><span
                                style="color:maroon">"add"</span><span style="color:black">);</span></span></span></p>
                <p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:black">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;mv.setViewName(</span><span
                                style="color:maroon">"add"</span><span style="color:black">);</span></span></span></p>
                <p><span style="font-size:12.0pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
                                style="color:blue">return</span><span style="color:black">&nbsp;mv;</span></span></span>
                </p>
                <p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:black">&nbsp;&nbsp;&nbsp;&nbsp;}</span></span></span></p>
                <p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:black">&nbsp;&nbsp;&nbsp;&nbsp;</span></span></span></p>
                <p><span style="font-size:12.0pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;">&nbsp;&nbsp;&nbsp;&nbsp;<span
                                style="color:blue">public</span><span
                                style="color:black">&nbsp;ModelAndView&nbsp;delete(HttpServletRequest&nbsp;request,&nbsp;HttpServletResponse&nbsp;response)&nbsp;{</span></span></span>
                </p>
                <p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:black">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ModelAndView&nbsp;mv&nbsp;=&nbsp;</span><span
                                style="color:blue">new</span><span
                                style="color:black">&nbsp;ModelAndView();</span></span></span></p>
                <p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:black">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;mv.addObject(</span><span
                                style="color:maroon">"message"</span><span style="color:black">,&nbsp;</span><span
                                style="color:maroon">"delete"</span><span style="color:black">);</span></span></span>
                </p>
                <p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:black">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;mv.setViewName(</span><span
                                style="color:maroon">"delete"</span><span style="color:black">);</span></span></span>
                </p>
                <p><span style="font-size:12.0pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
                                style="color:blue">return</span><span style="color:black">&nbsp;mv;</span></span></span>
                </p>
                <p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:black">&nbsp;&nbsp;&nbsp;&nbsp;}</span></span></span></p>
                <p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:black">}</span></span></span></p>
            </td>
        </tr>
    </tbody>
</table>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#ed7d31">&nbsp;</span></span></span></p>
<ul style="list-style-type:disc">
    <li><span style="color:#e67e22;"><span style="font-size:12.0pt"><span
                    style="font-family:&quot;Comic Sans MS&quot;">dispatcher-servlet.xml</span></span></span></li>
</ul>
<p style="margin-left:72px"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:blue">&lt;bean</span></span>&nbsp;<span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:blue">id</span></span><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:black">=</span></span><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:maroon">"simpleUrlHandlerMapping"</span></span> <span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:blue">class</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">=</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:maroon">"org.springframework.web.servlet.handler.SimpleUrlHandlerMapping"</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:blue">&gt;</span></span></span></p>
<p style="margin-left:72px"><span style="font-size:12.0pt">&nbsp;&nbsp;&nbsp;&nbsp;<span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:blue">&lt;property</span></span>&nbsp;<span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:blue">name</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">=</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:maroon">"mappings"</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:blue">&gt;</span></span></span></p>
<p style="margin-left:72px"><span style="font-size:12.0pt">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:blue">&lt;props&gt;</span></span></span>
</p>
<p style="margin-left:72px"><span
        style="font-size:12.0pt">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:green">&lt;!--</span></span>&nbsp;<span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:green">/</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:green">index </span></span><span
            style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                style="color:green">路径的请求交给</span></span>&nbsp;<span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#538135">id</span></span><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                style="color:#538135">&nbsp;为继承</span></span><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#538135">MutiActionController</span></span><span
            style="font-family:&quot;Microsoft YaHei UI&quot;"><span style="color:#538135">的&nbsp;</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:#538135">my</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:#538135">Controller</span></span><span
            style="font-family:&quot;Microsoft YaHei UI&quot;"><span style="color:green">&nbsp;的控制器处理</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:green">--&gt;</span></span></span></p>
<p style="margin-left:72px"><span
        style="font-size:12.0pt">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:blue">&lt;prop</span></span>&nbsp;<span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:blue">key</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">=</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:maroon">"/</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:maroon">index</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:maroon">"</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:blue">&gt;</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;">my</span><span
            style="font-family:&quot;Comic Sans MS&quot;">Controller</span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:blue">&lt;/prop&gt;</span></span></span>
</p>
<p style="margin-left:72px"><span style="font-size:12.0pt">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:blue">&lt;/props&gt;</span></span></span>
</p>
<p style="margin-left:72px"><span style="font-size:12.0pt">&nbsp;&nbsp;&nbsp;&nbsp;<span
            style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:blue">&lt;/property&gt;</span></span></span></p>
<p style="margin-left:72px"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:blue">&lt;/bean&gt;</span></span></span></p>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#ed7d31">&nbsp;</span></span></span></p>
<p style="margin-left:72px"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:blue">&lt;bean&nbsp;id</span><span style="color:black">=</span><span
                style="color:maroon">"</span><span style="color:maroon">my</span><span
                style="color:maroon">Controller"</span><span style="color:blue">&nbsp;class</span><span
                style="color:black">=</span><span style="color:maroon">"com.controller.</span><span
                style="color:maroon">My</span><span style="color:maroon">Controller"</span><span
                style="color:blue">&gt;</span></span></span></p>
<p style="margin-left:72px"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">&nbsp;&nbsp;<span
                style="color:blue">&lt;property&nbsp;name</span><span style="color:black">=</span><span
                style="color:maroon">"methodNameResolver"</span><span style="color:blue">&gt;</span></span></span></p>
<p style="margin-left:72px"><span style="font-size:12.0pt">&nbsp;&nbsp;&nbsp;&nbsp;<span
            style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:green">&lt;!--&nbsp;InternalPathMethodNameResolver&nbsp;</span></span><span
            style="font-family:SimSun"><span style="color:green">根据请求路径解析执行方法名</span></span></span></p>
<p style="margin-left:72px"><span style="font-size:12.0pt"><span style="color:green"><span
                style="font-family:&quot;Comic Sans MS&quot;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ParameterMethodNameResolver&nbsp;</span><span
                style="font-family:SimSun">根据参数解析执行方法名</span></span></span></p>
<p style="margin-left:72px"><span style="font-size:12.0pt"><span style="color:green"><span
                style="font-family:&quot;Comic Sans MS&quot;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PropertiesMethodNameResolver&nbsp;</span><span
                style="font-family:SimSun">根据</span><span
                style="font-family:&quot;Comic Sans MS&quot;">&nbsp;key/value&nbsp;</span><span
                style="font-family:SimSun">列表解析执行方法名</span><span
                style="font-family:&quot;Comic Sans MS&quot;">&nbsp;--&gt;</span></span></span></p>
<p style="margin-left:72px"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">&nbsp;&nbsp;&nbsp;&nbsp;<span
                style="color:blue">&lt;bean&nbsp;class</span><span style="color:black">=</span><span
                style="color:maroon">"org.springframework.web.servlet.mvc.multiaction.ParameterMethodNameResolver"</span><span
                style="color:blue">&gt;</span></span></span></p>
<p style="margin-left:72px"><span style="font-size:12.0pt">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:green">&lt;!--</span></span><span
            style="font-family:&quot;Microsoft YaHei UI&quot;"><span style="color:green">&nbsp;指定参数名为</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:green">action</span></span>&nbsp;<span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:green">--&gt;</span></span></span></p>
<p style="margin-left:72px"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
                style="color:blue">&lt;property&nbsp;name</span><span style="color:black">=</span><span
                style="color:maroon">"paramName"</span><span style="color:blue">&nbsp;value</span><span
                style="color:black">=</span><span style="color:maroon">"action"</span><span
                style="color:blue">&nbsp;/&gt;</span></span></span></p>
<p style="margin-left:72px"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">&nbsp;&nbsp;&nbsp;&nbsp;<span
                style="color:blue">&lt;/bean&gt;</span></span></span></p>
<p style="margin-left:72px"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">&nbsp;&nbsp;<span
                style="color:blue">&lt;/property&gt;</span></span></span></p>
<p style="margin-left:72px"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:blue">&nbsp;</span></span></span></p>
<p style="margin-left:72px"><span style="font-size:12.0pt"><span style="color:#a5a5a5"><span
                style="font-family:&quot;Comic Sans MS&quot;">&nbsp;&lt;!--</span><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">&nbsp;不指定参数</span><span
                style="font-family:&quot;Comic Sans MS&quot;">--&gt;</span></span></span></p>
<table summary="" cellspacing="0"
    style="border-collapse:collapse; border-color:#a3a3a3; border-style:solid; border-width:0px; margin-left:68px"
    class=" cke_show_border">
    <tbody>
        <tr>
            <td
                style="background-color:white; border-bottom:0px; border-left:0px; border-right:0px; border-top:0px; vertical-align:top; width:8.1354in">
                <p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:#a5a5a5">&lt;property&nbsp;name="methodNameResolver"&gt;</span></span></span>
                </p>
                <p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:#a5a5a5">&nbsp;&nbsp;&lt;bean&nbsp;class="org.springframework.web.servlet.mvc.multiaction.InternalPathMethodNameResolver"&nbsp;/&gt;</span></span></span>
                </p>
                <p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:#a5a5a5">&lt;/property&gt;</span></span></span></p>
            </td>
        </tr>
    </tbody>
</table>
<p style="margin-left:72px"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:blue">&nbsp;</span></span></span></p>
<p style="margin-left:72px"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:blue">&lt;/bean&gt;</span></span></span></p>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
<p><span style="font-size:13.5pt"><span style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>