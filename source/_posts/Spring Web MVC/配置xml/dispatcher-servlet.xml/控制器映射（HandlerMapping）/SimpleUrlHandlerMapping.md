---
categories:
- Spring Web MVC
tags:
- SimpleUrlHandlerMapping
date:
- 2022-11-28 14:10:03
---

<ul>
    <li><span style="font-size:12.0pt"><span
                style="font-family:&quot;Comic Sans MS&quot;">SimpleUrlHandlerMapping</span><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">中使用</span><span
                style="font-family:&quot;Comic Sans MS&quot;">key</span><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">和</span><span
                style="font-family:&quot;Comic Sans MS&quot;">value</span><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">的对应关系，定义的</span><span
                style="font-family:&quot;Comic Sans MS&quot;">url</span><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">与</span><span
                style="font-family:&quot;Comic Sans MS&quot;">bean</span><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">的对应关系，最终会被解析设置到类中的</span><span
                style="font-family:&quot;Comic Sans MS&quot;">urlmap</span><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">变量中。</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">而</span><span
                style="font-family:&quot;Comic Sans MS&quot;">SimpleUrlHandlerMapping</span><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">类重写了父类</span><span
                style="background-color:#dbe5f1"><span
                    style="font-family:&quot;Comic Sans MS&quot;">AbstractHandlerMapping</span></span><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">的</span><span
                style="font-family:&quot;Comic Sans MS&quot;">initApplicationContext</span><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">方法</span></span></li>
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
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:green">/hello</span></span><span
            style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                style="color:green">&nbsp;路径的请求交给&nbsp;</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:green">id</span></span><span
            style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                style="color:green">&nbsp;为&nbsp;</span></span><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:green">helloController</span></span><span
            style="font-family:&quot;Microsoft YaHei UI&quot;"><span style="color:green">&nbsp;的控制器处理</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:green">--&gt;</span></span></span></p>
<p style="margin-left:72px"><span
        style="font-size:12.0pt">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:blue">&lt;prop</span></span>&nbsp;<span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:blue">key</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">=</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:maroon">"/hello"</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:blue">&gt;</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">helloController</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:blue">&lt;/prop&gt;</span></span></span>
</p>
<p style="margin-left:72px"><span style="font-size:12.0pt">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:blue">&lt;/props&gt;</span></span></span>
</p>
<p style="margin-left:72px"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:blue">&nbsp;</span></span></span></p>
<p style="margin-left:108px"><span style="font-size:12.0pt"><span style="color:#a5a5a5"><span
                style="font-family:&quot;Comic Sans MS&quot;">&lt;!--</span><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">&nbsp;直接传入路径请求和控制器</span><span
                style="font-family:&quot;Comic Sans MS&quot;">id</span><span
                style="font-family:&quot;Comic Sans MS&quot;">--&gt;</span></span></span></p>
<p style="margin-left:108px"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#a5a5a5">&lt;value&gt;</span></span></span></p>
<p style="margin-left:108px"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#a5a5a5">&nbsp;&nbsp;&nbsp;&nbsp;/welcome.htm=welcomeController</span></span></span></p>
<p style="margin-left:108px"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#a5a5a5">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/*/welcome.htm=welcomeController</span></span></span>
</p>
<p style="margin-left:108px"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#a5a5a5">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/helloGuest.htm=helloGuestController</span></span></span>
</p>
<p style="margin-left:108px"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#a5a5a5">&lt;/value&gt;</span></span></span></p>
<p style="margin-left:108px"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:blue">&nbsp;</span></span></span></p>
<p style="margin-left:72px"><span style="font-size:12.0pt">&nbsp;&nbsp;&nbsp;&nbsp;<span
            style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:blue">&lt;/property&gt;</span></span></span></p>
<p style="margin-left:72px"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:blue">&lt;/bean&gt;</span></span></span></p>
<p style="margin-left:72px"><span style="font-size:12.0pt">&nbsp;<span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:green">&lt;!--</span></span><span
            style="font-family:&quot;Microsoft YaHei UI&quot;"><span style="color:green">&nbsp;注册控制类对象</span></span>
        <span style="font-family:&quot;Comic Sans MS&quot;"><span style="color:green">--&gt;</span></span></span></p>
<p style="margin-left:72px"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:blue">&lt;bean</span></span>&nbsp;<span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:blue">id</span></span><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:black">=</span></span><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:maroon">"helloController"</span></span>&nbsp;<span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:blue">class</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">=</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:maroon">"controller.HelloController"</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:blue">&gt;&lt;/bean&gt;</span></span></span></p>
<p style="margin-left:72px"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:blue">&nbsp;</span></span></span></p>
<ul style="list-style-type:disc">
    <li><span style="color:#e67e22;"><span style="font-size:12.0pt"><span
                    style="font-family:&quot;Comic Sans MS&quot;">HelloController.java</span></span></span></li>
</ul>
<p><span style="font-size:12.0pt"><span style="font-family:SimSun">&nbsp;</span></span></p>
<table summary="" cellspacing="0"
    style="border-collapse:collapse; border-color:#a3a3a3; border-style:solid; border-width:0px; margin-left:68px"
    class=" cke_show_border">
    <tbody>
        <tr>
            <td
                style="background-color:white; border-bottom:0px; border-left:0px; border-right:0px; border-top:0px; vertical-align:top; width:8.627in">
                <p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">public</span>&nbsp;<span style="color:blue">class</span><span
                                style="color:black">&nbsp;HelloController&nbsp;</span><span
                                style="color:blue">implements</span><span
                                style="color:black">&nbsp;Controller&nbsp;{</span></span></span></p>
                <p><span style="font-size:12.0pt"><span
                            style="font-family:&quot;Microsoft YaHei&quot;">&nbsp;</span></span></p>
                <p><span style="font-size:12.0pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;">&nbsp;&nbsp;&nbsp;&nbsp;<span
                                style="color:blue">public</span><span
                                style="color:black">&nbsp;ModelAndView&nbsp;handleRequest(javax.servlet.http.HttpServletRequest&nbsp;httpServletRequest,&nbsp;</span></span></span>
                </p>
                <p><span style="font-size:12.0pt">&nbsp;&nbsp;&nbsp; <span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:black">javax.servlet.http.HttpServletResponse&nbsp;httpServletResponse)&nbsp;</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">throws</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:black">&nbsp;Exception&nbsp;{</span></span></span></p>
                <p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:black">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ModelAndView&nbsp;mav&nbsp;=&nbsp;</span><span
                                style="color:blue">new</span><span style="color:black">&nbsp;ModelAndView(</span><span
                                style="color:maroon">"index.jsp"</span><span style="color:black">);</span></span></span>
                </p>
                <p><span style="font-size:12.0pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
                                style="color:blue">return</span><span
                                style="color:black">&nbsp;mav;</span></span></span></p>
                <p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:black">&nbsp;&nbsp;&nbsp;&nbsp;}</span></span></span></p>
                <p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:black">}</span></span></span></p>
            </td>
        </tr>
    </tbody>
</table>