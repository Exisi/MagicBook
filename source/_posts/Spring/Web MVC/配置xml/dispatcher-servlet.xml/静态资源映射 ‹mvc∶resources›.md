---
categories:
  - Spring
tags:
  - ‹mvc:resources›
date:
  - 2022-11-28 14:07:33
---

<ul style="list-style-type:disc">
    <li><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">优雅</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">REST</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">风格的资源</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">URL</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">不希望带</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"> .html </span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">或</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"> .do </span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">等后缀</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">.</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">由于早期的</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">Spring MVC</span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">不能很好地处理静态资源，所以在</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">web.xml</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">中配置</span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Comic Sans MS&quot;">DispatcherServlet</span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">的请求映射，往往使用</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"> *.do </span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">、</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"> *.xhtml</span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">等方式。这就决定了请求</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">URL</span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">必须是一个带后缀的</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">URL</span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">，而无法采用真正的</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">REST</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">风格的</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">URL</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">。</span></span></li>
</ul>
<p style="margin-left:36px"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Microsoft YaHei UI&quot;"><span style="color:#333333">&nbsp;</span></span></span>
</p>
<ul style="list-style-type:disc">
    <li><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                    style="color:#333333">如果将</span></span></span><span style="font-size:12.0pt"><span
                style="font-family:&quot;Comic Sans MS&quot;"><span
                    style="color:#333333">DispatcherServlet</span></span></span><span style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                    style="color:#333333">请求映射配置为</span></span></span><span style="font-size:12.0pt"><span
                style="font-family:&quot;Comic Sans MS&quot;"><span style="color:#333333">"/"</span></span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                    style="color:#333333">，则</span></span></span><span style="font-size:12.0pt"><span
                style="font-family:&quot;Comic Sans MS&quot;"><span style="color:#333333">Spring
                    MVC</span></span></span><span style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                    style="color:#333333">将捕获</span></span></span><span style="font-size:12.0pt"><span
                style="font-family:&quot;Comic Sans MS&quot;"><span style="color:#333333">Web</span></span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                    style="color:#333333">容器所有的请求，包括静态资源的请求，</span></span></span><span style="font-size:12.0pt"><span
                style="font-family:&quot;Comic Sans MS&quot;"><span style="color:#333333">Spring
                    MVC</span></span></span><span style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                    style="color:#333333">会将它们当成一个普通请求处理，因此找不到对应处理器将导致错误，所以</span></span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                    style="color:black">访问静态资源文件的时候也会被</span></span></span><span style="font-size:12.0pt"><span
                style="font-family:&quot;Comic Sans MS&quot;"><span
                    style="color:black">DispatcherServlet</span></span></span><span style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                    style="color:black">拦截</span></span></span><span style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;"><span style="color:#333333">。</span></span></span>
    </li>
</ul>
<p style="margin-left:36px"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Microsoft YaHei UI&quot;"><span style="color:#333333">&nbsp;</span></span></span>
</p>
<ul style="list-style-type:disc">
    <li><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">如何让</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">Spring</span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">框架能够捕获所有</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">URL</span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">的请求，同时又将静态资源的请求转由</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">Web</span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">容器处理，是可将</span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Comic Sans MS&quot;">DispatcherServlet</span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">的请求映射配置为</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">"/"</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">的前提。由于</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">REST</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">是</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">Spring3.0</span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">最重要的功能之一，所以</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">Spring</span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">团队很看重静态资源处理这项任务，给出了堪称经典的两种解决方案。</span></span></li>
</ul>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
<ul style="list-style-type:disc">
    <li><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">先调整</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">web.xml</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">中的</span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Comic Sans MS&quot;">DispatcherServlet</span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">的配置，使其可以捕获所有的请求：</span></span></li>
</ul>
<table summary="" cellspacing="0"
    style="border-collapse:collapse; border-color:#a3a3a3; border-style:solid; border-width:0px; margin-left:32px"
    class=" cke_show_border">
    <tbody>
        <tr>
            <td
                style="background-color:white; border-bottom:0px; border-left:0px; border-right:0px; border-top:0px; vertical-align:top; width:6.6958in">
                <p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">&lt;servlet&gt;</span></span></span></p>
                <p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">&nbsp;&nbsp;<span
                                style="color:blue">&lt;servlet-name&gt;</span><span
                                style="color:black">dispather</span><span
                                style="color:blue">&lt;/servlet-name&gt;</span></span></span></p>
                <p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">&nbsp;&nbsp;<span
                                style="color:blue">&lt;servlet-class&gt;</span><span
                                style="color:black">org.springframework.web.servlet.DispatcherServlet</span><span
                                style="color:blue">&lt;/servlet-class&gt;</span></span></span></p>
                <p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">&nbsp;&nbsp;<span
                                style="color:blue">&lt;load-on-startup&gt;</span><span style="color:black">1</span><span
                                style="color:blue">&lt;/load-on-startup&gt;</span></span></span></p>
                <p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">&lt;/servlet&gt;</span></span></span></p>
                <p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">&lt;servlet-mapping&gt;</span></span></span></p>
                <p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">&nbsp;&nbsp;<span
                                style="color:blue">&lt;servlet-name&gt;</span><span
                                style="color:black">dispather</span><span
                                style="color:blue">&lt;/servlet-name&gt;</span></span></span></p>
                <p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">&nbsp;&nbsp;<span
                                style="color:blue">&lt;url-pattern&gt;/&lt;/url-pattern&gt;</span></span></span></p>
                <p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">&lt;/servlet-mapping&gt;</span></span></span></p>
            </td>
        </tr>
    </tbody>
</table>
<p><br></p>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
<p><span style="font-size:13.5pt"><strong><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">采用</span></strong><strong><span
                style="font-family:&quot;Comic Sans MS&quot;">&lt;mvc:default-servlet-handler
                /&gt;</span></strong></span></p>
<ul style="list-style-type:disc">
    <li><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">在</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">dispatcher</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">-servlet.xml</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">中配置</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">&lt;mvc:default-servlet-handler
                /&gt;</span></span><span style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">后，会在</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">Spring MVC</span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">上下文中定义一个</span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Comic Sans MS&quot;">org.springframework.web.servlet.resource.DefaultServletHttpRequestHandler</span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">，它会像一个检查员，对进入</span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Comic Sans MS&quot;">DispatcherServlet</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">的</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">URL</span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">进行筛查，如果发现是静态资源的请求，就将该请求转由</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">Web</span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">应用服务器默认的</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">Servlet</span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">处理，如果不是静态资源的请求，才由</span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Comic Sans MS&quot;">DispatcherServlet</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">继续处理。</span></span></li>
</ul>
<p style="margin-left:36px"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Microsoft YaHei UI&quot;"><span style="color:#333333">&nbsp;</span></span></span>
</p>
<ul style="list-style-type:disc">
    <li><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">一般</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">Web</span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">应用服务器默认的</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">Servlet</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">名称是</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">"default"</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">，因此</span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Comic Sans MS&quot;">DefaultServletHttpRequestHandler</span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">可以找到它。如果你所有的</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">Web</span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">应用服务器的默认</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">Servlet</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">名称不是</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">"default"</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">，则需要通过</span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Comic Sans MS&quot;">default-servlet-name</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">属性显示指定：</span></span></li>
</ul>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                style="color:#70ad47"><strong>示例</strong></span></span></span></p>
<table summary="" cellspacing="0"
    style="border-collapse:collapse; border-color:#a3a3a3; border-style:solid; border-width:0px; margin-left:32px"
    class=" cke_show_border">
    <tbody>
        <tr>
            <td
                style="background-color:white; border-bottom:0px; border-left:0px; border-right:0px; border-top:0px; vertical-align:top; width:7.8902in">
                <p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">&lt;mvc:default-servlet-handler</span></span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">default-servlet-name</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">=</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:maroon">"</span></span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:maroon">所使用的</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:maroon">Web</span></span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:maroon">服务器默认使用的</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:maroon">Servlet</span></span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:maroon">名称</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:maroon">"</span></span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">/&gt;</span></span></span></p>
            </td>
        </tr>
    </tbody>
</table>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                style="color:#333333"><strong>注</strong></span></span></span></p>
<p style="margin-left:36px"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Microsoft YaHei UI&quot;"><span style="color:#333333">使用</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;">&lt;mvc:default-servlet-handler/&gt;</span><span
            style="font-family:&quot;Microsoft YaHei UI&quot;">和</span><span
            style="font-family:&quot;Comic Sans MS&quot;">@requestMapping</span><span
            style="font-family:&quot;Microsoft YaHei UI&quot;">会产生冲突，无法访问动态资源，需要加上注解驱动</span><span
            style="font-family:&quot;Comic Sans MS&quot;">&lt;mvc:annotation-driven/&gt;</span></span></p>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
<p><span style="font-size:13.5pt"><strong><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">采用</span></strong><strong><span
                style="font-family:&quot;Comic Sans MS&quot;">&lt;mvc:resources /&gt;</span></strong></span></p>
<ul style="list-style-type:disc">
    <li><span style="font-size:12.0pt"><span
                style="font-family:&quot;Comic Sans MS&quot;">&lt;mvc:default-servlet-handler /&gt;</span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">将静态资源的处理经由</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">Spring MVC</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">框架交回</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">Web</span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">应用服务器处理。而</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">&lt;mvc:resources
                /&gt;</span></span><span style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">更进一步，由</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">Spring MVC</span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">框架自己处理静态资源，并添加一些有用的附加值功能。</span></span></li>
</ul>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"></span></span><br></p>
<ul style="list-style-type:disc">
    <li><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">首先，</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">&lt;mvc:resources
                /&gt;</span></span><span style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">允许静态资源放在任何地方，如</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">WEB-INF</span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">目录下、类路径下等，你甚至可以将</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">JavaScript</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">等静态文件打到</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">JAR</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">包中。通过</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">location</span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">属性指定静态资源的位置，由于</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">location</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">属性是</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">Resources</span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">类型，因此可以使用诸如</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">"classpath:"</span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">等的资源前缀指定资源位置。传统</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">Web</span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">容器的静态资源只能放在</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">Web</span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">容器的根路径下，</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">&lt;mvc:resources
                /&gt;</span></span><span style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">完全打破了这个限制。</span></span></li>
</ul>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"></span></span><br></p>
<ul style="list-style-type:disc">
    <li><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">其次，</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">&lt;mvc:resources
                /&gt;</span></span><span style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">依据当前著名的</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">Page Speed</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">、</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">YSlow</span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">等浏览器优化原则对静态资源提供优化。你可以通过</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">cacheSeconds</span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">属性指定静态资源在浏览器端的缓存时间，一般可将该时间设置为一年，以充分利用浏览器端的缓存。在输出静态资源时，会根据配置设置好响应报文头的</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">Expires </span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">和</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">
                Cache-Control</span></span><span style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">值。</span></span></li>
</ul>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"></span></span><br></p>
<ul style="list-style-type:disc">
    <li><span style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">在接收到静态资源的获取请求时，会检查请求头的</span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Comic Sans MS&quot;">Last-Modified</span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">值，如果静态资源没有发生变化，则直接返回</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">303</span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">相应状态码，提示客户端使用浏览器缓存的数据，而非将静态资源的内容输出到客户端，以充分节省带宽，提高程序性</span></span>
    </li>
</ul>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"></span></span><br></p>
<ul style="list-style-type:disc">
    <li><span style="font-size:12.0pt"><span
                style="font-family:&quot;Comic Sans MS&quot;">&lt;mvc:resources</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">&gt;</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">有以下参数：</span></span></li>
</ul>
<table summary="" cellspacing="0"
    style="border-collapse:collapse; border-color:#a3a3a3; border-style:solid; border-width:1px; margin-left:32px"
    class=" cke_show_border">
    <tbody>
        <tr>
            <td
                style="background-color:black; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:.7833in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:white"><strong>参数</strong></span></span></span></p>
            </td>
            <td
                style="background-color:black; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:6.3472in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:white"><strong>描述</strong></span></span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:.7923in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:black">location</span></span></span></p>
            </td>
            <td
                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:6.3388in">
                <p><span style="font-size:11.5pt"><span style="color:black"><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">表示</span><span
                                style="font-family:&quot;Comic Sans MS&quot;">webapp</span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">目录下的</span><span
                                style="font-family:&quot;Comic Sans MS&quot;">static</span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">包下的所有文件</span></span></span></p>
                <table summary="" cellspacing="0"
                    style="border-collapse:collapse; border-color:#a3a3a3; border-style:solid; border-width:1px; "
                    class=" cke_show_border">
                    <tbody>
                        <tr>
                            <td
                                style="background-color:black; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:.8743in">
                                <p><span style="font-size:10.5pt"><span
                                            style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                                style="color:white"><strong>前缀</strong></span></span></span></p>
                            </td>
                            <td
                                style="background-color:black; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:2.543in">
                                <p><span style="font-size:10.5pt"><span
                                            style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                                style="color:white"><strong>说明</strong></span></span></span></p>
                            </td>
                            <td
                                style="background-color:black; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:2.2083in">
                                <p><span style="font-size:10.5pt"><span
                                            style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                                style="color:white"><strong>例子</strong></span></span></span></p>
                            </td>
                        </tr>
                        <tr>
                            <td
                                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:.8937in">
                                <p><span style="font-size:10.5pt"><span
                                            style="font-family:&quot;Comic Sans MS&quot;">classpath:</span></span></p>
                            </td>
                            <td
                                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:2.543in">
                                <p><span style="font-size:10.5pt"><span
                                            style="font-family:&quot;Microsoft YaHei UI&quot;">从</span><span
                                            style="font-family:&quot;Comic Sans MS&quot;">classpath</span><span
                                            style="font-family:&quot;Microsoft YaHei UI&quot;">中加载。</span></span></p>
                            </td>
                            <td
                                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:2.3402in">
                                <p><span style="font-size:10.5pt"><span
                                            style="font-family:&quot;Comic Sans MS&quot;">classpath:com/myapp/config.xml</span></span>
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td
                                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:.8743in">
                                <p><span style="font-size:10.5pt"><span
                                            style="font-family:&quot;Comic Sans MS&quot;">file:</span></span></p>
                            </td>
                            <td
                                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:2.543in">
                                <p><span style="font-size:10.5pt"><span
                                            style="font-family:&quot;Microsoft YaHei UI&quot;">作为&nbsp;</span><span
                                            style="font-family:&quot;Comic Sans MS&quot;">URL</span><span
                                            style="font-family:&quot;Microsoft YaHei UI&quot;">&nbsp;从文件系统中加载。</span></span>
                                </p>
                            </td>
                            <td
                                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:2.2083in">
                                <p><span style="font-size:10.5pt"><span style="font-family:&quot;Comic Sans MS&quot;"><a
                                                data-cke-saved-href="file://data/config.xml"
                                                href="file://data/config.xml">file:/data/config.xml</a></span></span>
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td
                                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:.8743in">
                                <p><span style="font-size:10.5pt"><span
                                            style="font-family:&quot;Comic Sans MS&quot;">http:</span></span></p>
                            </td>
                            <td
                                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:2.543in">
                                <p><span style="font-size:10.5pt"><span
                                            style="font-family:&quot;Microsoft YaHei UI&quot;">作为&nbsp;</span><span
                                            style="font-family:&quot;Comic Sans MS&quot;">URL</span><span
                                            style="font-family:&quot;Microsoft YaHei UI&quot;">&nbsp;加载。</span></span>
                                </p>
                            </td>
                            <td
                                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:2.2361in">
                                <p><span style="font-size:10.5pt"><span style="font-family:&quot;Comic Sans MS&quot;"><a
                                                data-cke-saved-href="http://myserver/logo.png"
                                                href="http://myserver/logo.png">http://myserver/logo.png</a></span></span>
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td
                                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:.8743in">
                                <p><span style="font-size:10.5pt"><span
                                            style="font-family:&quot;Comic Sans MS&quot;">(none)</span></span></p>
                            </td>
                            <td
                                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:2.543in">
                                <p><span style="font-size:10.5pt"><span
                                            style="font-family:&quot;Microsoft YaHei UI&quot;">根据&nbsp;</span><span
                                            style="font-family:&quot;Comic Sans MS&quot;">ApplicationContext</span><span
                                            style="font-family:&quot;Microsoft YaHei UI&quot;">&nbsp;进行判断</span></span>
                                </p>
                            </td>
                            <td
                                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:2.2083in">
                                <p><span style="font-size:10.5pt"><span
                                            style="font-family:&quot;Comic Sans MS&quot;">/data/config.xml</span></span>
                                </p>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <p><span style="font-size:12.0pt"><span
                            style="font-family:&quot;Microsoft YaHei&quot;">&nbsp;</span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:.8027in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:black">mapping</span></span></span></p>
            </td>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:6.3284in">
                <p><span style="font-size:11.5pt"><span style="color:black"><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">表示以</span><span
                                style="font-family:&quot;Comic Sans MS&quot;">/static</span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">开头的所有请求路径，如</span><span
                                style="font-family:&quot;Comic Sans MS&quot;">/static/a </span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">或者</span><span
                                style="font-family:&quot;Comic Sans MS&quot;">/static/a/b</span></span></span></p>
            </td>
        </tr>
    </tbody>
</table>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                style="color:#70ad47"><strong>示例</strong></span></span></span></p>
<table summary="" cellspacing="0"
    style="border-collapse:collapse; border-color:#a3a3a3; border-style:solid; border-width:0px; margin-left:32px"
    class=" cke_show_border">
    <tbody>
        <tr>
            <td
                style="background-color:white; border-bottom:0px; border-left:0px; border-right:0px; border-top:0px; vertical-align:top; width:7.5979in">
                <p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">&lt;mvc:resources&nbsp;location</span><span
                                style="color:black">=</span><span
                                style="color:maroon">"classpath:/META-INF/publicResources/"</span><span
                                style="color:blue">&nbsp;mapping</span><span style="color:black">=</span><span
                                style="color:maroon">"/resources/**"</span><span
                                style="color:blue">/&gt;</span></span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="background-color:white; border-bottom:0px; border-left:0px; border-right:0px; border-top:0px; vertical-align:top; width:7.5284in">
                <p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">&nbsp;</span></span></span></p>
            </td>
        </tr>
    </tbody>
</table>
<ul style="list-style-type:disc">
    <li><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei&quot;">以上配置将</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">Web</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei&quot;">根路径</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">"/"</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei&quot;">及类路径下</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"> /META-INF/publicResources/
            </span></span><span style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei&quot;">的目录映射为</span></span><span style="font-size:12.0pt"><span
                style="font-family:&quot;Comic Sans MS&quot;">/resources</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei&quot;">路径。</span></span></li>
</ul>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei&quot;">&nbsp;</span></span></p>
<ul style="list-style-type:disc">
    <li><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei&quot;">假设</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">Web</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei&quot;">根路径下拥有</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">images</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei&quot;">、</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">js</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei&quot;">这两个资源目录</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">,</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei&quot;">在</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">images</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei&quot;">下面有</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">bg.gif</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei&quot;">图片，在</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">js</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei&quot;">下面有</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">test.js</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei&quot;">文件，则可以通过</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"> /resources/images/bg.gif
            </span></span><span style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei&quot;">和</span></span><span style="font-size:12.0pt"><span
                style="font-family:&quot;Comic Sans MS&quot;"> /resources/js/test.js </span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei&quot;">访问这二个静态资源</span></span></li>
</ul>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                style="color:#70ad47"><strong>示例</strong></span></span></span></p>
<table summary="" cellspacing="0"
    style="border-collapse:collapse; border-color:#a3a3a3; border-style:solid; border-width:0px; margin-left:32px"
    class=" cke_show_border">
    <tbody>
        <tr>
            <td
                style="background-color:white; border-bottom:0px; border-left:0px; border-right:0px; border-top:0px; vertical-align:top; width:5.4493in">
                <p><span style="font-size:12.0pt"><span style="color:green"><span
                                style="font-family:&quot;Comic Sans MS&quot;">&lt;!--</span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">静态资源映射</span><span
                                style="font-family:&quot;Comic Sans MS&quot;">--&gt;</span></span></span></p>
                <p><span style="font-size:12.0pt"><span style="color:green"><span
                                style="font-family:&quot;Comic Sans MS&quot;">&lt;!--</span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">本项目把静态资源放在了</span><span
                                style="font-family:&quot;Comic Sans MS&quot;">webapp</span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">的</span><span
                                style="font-family:&quot;Comic Sans MS&quot;">statics</span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">目录下，资源映射如下</span><span
                                style="font-family:&quot;Comic Sans MS&quot;">--&gt;</span></span></span></p>
                <p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">&lt;mvc:resources</span></span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">mapping</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">=</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:maroon">"/css/**"</span></span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">location</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">=</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:maroon">"/static/css/"</span></span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">/&gt;</span></span></span></p>
                <p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">&lt;mvc:resources</span></span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">mapping</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">=</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:maroon">"/js/**"</span></span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">location</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">=</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:maroon">"/static/js/"</span></span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">/&gt;</span></span></span></p>
                <p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">&lt;mvc:resources</span></span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">mapping</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">=</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:maroon">"/image/**"</span></span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">location</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">=</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:maroon">"/static/image/"</span></span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">/&gt;</span></span></span></p>
                <p><span style="font-size:12.0pt"><span style="color:blue"><span
                                style="font-family:&quot;Comic Sans MS&quot;">&lt;mvc:default-servlet-handler</span>&nbsp;<span
                                style="font-family:&quot;Comic Sans MS&quot;">/&gt;</span></span></span></p>
            </td>
        </tr>
    </tbody>
</table>
<p><span style="font-size:13.5pt"><span style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#333333">&nbsp;</span></span></span></p>
<p><span style="font-family:&quot;Microsoft YaHei UI&quot;">来自</span><span
        style="font-family:&quot;Comic Sans MS&quot;"> &lt;</span><a
        data-cke-saved-href="https://www.cnblogs.com/caogen1991/p/7921748.html"
        href="https://www.cnblogs.com/caogen1991/p/7921748.html"><span
            style="font-family:&quot;Comic Sans MS&quot;">https://www.cnblogs.com/caogen1991/p/7921748.html</span></a><span
        style="font-family:&quot;Comic Sans MS&quot;">&gt; </span></p>
