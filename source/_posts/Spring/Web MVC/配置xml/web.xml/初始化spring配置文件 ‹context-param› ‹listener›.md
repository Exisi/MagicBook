---
categories:
  - Spring
tags:
  - ‹context-param›
  - ‹listener›
date:
  - 2022-6-28 14:06:43
---

<ul style="list-style-type:disc">
    <li><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                    style="color:black">当服务器启动时，服务器会读取</span></span></span><span style="font-size:12.0pt"><span
                style="font-family:&quot;Comic Sans MS&quot;"><span
                    style="color:black">web.xml</span></span></span><span style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                    style="color:black">配置，当读到</span></span></span><span style="font-size:12.0pt"><span
                style="font-family:&quot;Comic Sans MS&quot;"><span
                    style="color:black">&lt;listener&gt;&lt;/listener&gt;</span></span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                    style="color:black">和</span></span></span><span style="font-size:12.0pt"><span
                style="font-family:&quot;Comic Sans MS&quot;"><span
                    style="color:black">&lt;context-param&gt;&lt;/context-param&gt;</span></span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                    style="color:black">这两个节点的时候，容器会将这两个节点</span></span></span><span style="font-size:12.0pt"><span
                style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">set</span></span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                    style="color:black">到</span></span></span><span style="font-size:12.0pt"><span
                style="font-family:&quot;Comic Sans MS&quot;"><span
                    style="color:black">ServletContext(</span></span></span><span style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                    style="color:black">上下文对象</span></span></span><span style="font-size:12.0pt"><span
                style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">)</span></span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                    style="color:black">中，这样我们在程序中就能通过这个上下文对象去取得我们这个配置值</span></span></span></li>
</ul>
<p style="margin-left:36px"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Microsoft YaHei UI&quot;">&nbsp;</span></span></p>
<ul style="list-style-type:disc">
    <li><span style="font-size:12.0pt"><span
                style="font-family:&quot;Comic Sans MS&quot;">&lt;context-param&gt;</span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">元素含有一对参数名和参数值，用作</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">声明</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">的</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">Servlet</span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">上下文初始化参数，参数名在整个</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">Web</span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">应用中必须是惟一的，在</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">web</span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">应用的整个生命周期中上下文初始化参数都存在，任意的</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">Servlet</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">和</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">jsp</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">都可以随时随地访问它。</span></span>
        <ul style="list-style-type:disc">
            <li><span style="font-size:12.0pt"><span
                        style="font-family:&quot;Microsoft YaHei UI&quot;">如果不写任何参数配置，默认的是在</span></span><span
                    style="font-size:12.0pt"><span
                        style="font-family:&quot;Comic Sans MS&quot;">/WEB-INF/applicationContext.xml</span></span></li>
        </ul>
    </li>
</ul>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
<ul style="list-style-type:disc">
    <li><span style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">如果想要自定义文件名，需要在</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">web.xml</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">中加入</span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Comic Sans MS&quot;">contextConfigLocation</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">这个</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">context</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">参数</span></span></li>
</ul>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">&nbsp;</span></span></p>
<ul style="list-style-type:disc">
    <li><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                    style="color:black">Listener</span></span></span><span style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;"><span style="color:black">是</span></span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                    style="color:black">Servlet</span></span></span><span style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                    style="color:black">的监听器，可以监听客户端的请求，服务端的操作等，</span></span></span><span
            style="font-size:12.0pt"><span style="background-color:white"><span
                    style="font-family:&quot;Comic Sans MS&quot;"><span
                        style="color:#333333">Spring</span></span></span></span><span style="font-size:12.0pt"><span
                style="background-color:white"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                        style="color:#333333">提供</span></span></span></span><span style="font-size:12.0pt"><span
                style="background-color:white"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                        style="color:#333333">ServletContextListener</span></span></span></span><span
            style="font-size:12.0pt"><span style="background-color:white"><span
                    style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                        style="color:#333333">接口的一个实现类</span></span></span></span><span style="font-size:12.0pt"><span
                style="background-color:white"><strong><span style="font-family:&quot;Comic Sans MS&quot;"><span
                            style="color:#333333">ContextLoaderListener</span></span></strong></span></span><span
            style="font-size:12.0pt"><span style="background-color:white"><span
                    style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                        style="color:#333333">监听器，该类可以作为</span></span></span></span><span style="font-size:12.0pt"><span
                style="background-color:white"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                        style="color:#333333">Listener</span></span></span></span><span style="font-size:12.0pt"><span
                style="background-color:white"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                        style="color:#333333">使用，在启动</span></span></span></span><span style="font-size:12.0pt"><span
                style="background-color:white"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                        style="color:#333333">Tomcat</span></span></span></span><span style="font-size:12.0pt"><span
                style="background-color:white"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                        style="color:#333333">容器的时候，该类的作用就是</span></span></span></span><span
            style="font-size:12.0pt"><span style="background-color:white"><strong><span
                        style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                            style="color:#333333">自动装载</span></span></strong></span></span><span
            style="font-size:12.0pt"><span style="background-color:white"><strong><span
                        style="font-family:&quot;Comic Sans MS&quot;"><span
                            style="color:#333333">ApplicationContext</span></span></strong></span></span><span
            style="font-size:12.0pt"><span style="background-color:white"><strong><span
                        style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                            style="color:#333333">的配置信息</span></span></strong></span></span>
        <ul style="list-style-type:disc">
            <li><span style="font-size:12.0pt"><span
                        style="font-family:&quot;Microsoft YaHei UI&quot;">如果没有设置</span></span><span
                    style="font-size:12.0pt"><span
                        style="font-family:&quot;Comic Sans MS&quot;">contextConfigLocation</span></span><span
                    style="font-size:12.0pt"><span
                        style="font-family:&quot;Microsoft YaHei UI&quot;">的初始参数则会使用默认参数</span></span><span
                    style="font-size:12.0pt"><span
                        style="font-family:&quot;Comic Sans MS&quot;">WEB-INF</span></span><span
                    style="font-size:12.0pt"><span
                        style="font-family:&quot;Microsoft YaHei UI&quot;">路径下的</span></span><span
                    style="font-size:12.0pt"><span
                        style="font-family:&quot;Comic Sans MS&quot;">application.xml</span></span><span
                    style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">文件。</span></span>
            </li>
            <li><span style="font-size:12.0pt"><span
                        style="font-family:&quot;Microsoft YaHei UI&quot;">如果需要自定义读取多个配置文件或者修改默认路径，则可以在</span></span><span
                    style="font-size:12.0pt"><span
                        style="font-family:&quot;Comic Sans MS&quot;">web.xml</span></span><span
                    style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">中设置</span></span>
            </li>
        </ul>
    </li>
</ul>
<p style="margin-left:72px"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Microsoft YaHei UI&quot;">&nbsp;</span></span></p>
<table summary="" cellspacing="0"
    style="border-collapse:collapse; border-color:#a3a3a3; border-style:solid; border-width:1px; margin-left:32px"
    class=" cke_show_border">
    <tbody>
        <tr>
            <td
                style="background-color:black; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.7416in">
                <p><span style="font-size:10.5pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:white"><strong>标签</strong></span></span></span></p>
            </td>
            <td
                style="background-color:black; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:6.9388in">
                <p><span style="font-size:10.5pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:white"><strong>说明</strong></span></span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.7416in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;">&lt;context-param&gt;</span></span></p>
            </td>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:6.9388in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;">context-param</span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">元素声明应用范围内的初始化参数</span></span></p>
                <table summary="" cellspacing="0"
                    style="border-collapse:collapse; border-color:#a3a3a3; border-style:solid; border-width:1px; "
                    class=" cke_show_border">
                    <tbody>
                        <tr>
                            <td
                                style="background-color:black; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.1201in">
                                <p><span style="font-size:10.5pt"><span
                                            style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                                style="color:white"><strong>子标签</strong></span></span></span></p>
                            </td>
                            <td
                                style="background-color:black; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:.6638in">
                                <p><span style="font-size:10.5pt"><span
                                            style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                                style="color:white"><strong>说明</strong></span></span></span></p>
                            </td>
                        </tr>
                        <tr>
                            <td
                                style="background-color:white; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.1395in">
                                <p><span style="font-size:10.5pt"><span
                                            style="font-family:&quot;Comic Sans MS&quot;">&lt;param-name&gt;</span></span>
                                </p>
                            </td>
                            <td
                                style="background-color:white; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:.6451in">
                                <p><span style="font-size:10.5pt"><span
                                            style="font-family:&quot;Microsoft YaHei UI&quot;">参数名</span></span></p>
                            </td>
                        </tr>
                        <tr>
                            <td
                                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.1368in">
                                <p><span style="font-size:10.5pt"><span
                                            style="font-family:&quot;Comic Sans MS&quot;">&lt;param-value&gt;</span></span>
                                </p>
                            </td>
                            <td
                                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:.6479in">
                                <p><span style="font-size:10.5pt"><span
                                            style="font-family:&quot;Microsoft YaHei UI&quot;">参数值</span></span></p>
                            </td>
                        </tr>
                        <tr>
                            <td
                                style="background-color:white; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.1201in">
                                <p><span style="font-size:10.5pt"><span
                                            style="font-family:&quot;Comic Sans MS&quot;">&lt;description&gt;</span></span>
                                </p>
                            </td>
                            <td
                                style="background-color:white; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:.7333in">
                                <p><span style="font-size:10.5pt"><span
                                            style="font-family:&quot;Microsoft YaHei UI&quot;">参数描述</span></span></p>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.7416in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;">&lt;listener&gt;</span></span></p>
            </td>
            <td
                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:6.9388in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;">Listener</span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">元素指出事件监听程序类。 </span></span></p>
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Comic Sans MS&quot;">servlet
                            API</span><span style="font-family:&quot;Microsoft YaHei UI&quot;">的版本</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">2.3</span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">增加了对事件监听程序的支持，事件监听程序在建立、修改和删除会话或</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">servlet</span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">环境时得到通知。</span></span></p>
                <table summary="" cellspacing="0"
                    style="border-collapse:collapse; border-color:#a3a3a3; border-style:solid; border-width:1px; "
                    class=" cke_show_border">
                    <tbody>
                        <tr>
                            <td
                                style="background-color:black; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.2937in">
                                <p><span style="font-size:10.5pt"><span
                                            style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                                style="color:white"><strong>子标签</strong></span></span></span></p>
                            </td>
                            <td
                                style="background-color:black; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:.5548in">
                                <p><span style="font-size:10.5pt"><span
                                            style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                                style="color:white"><strong>说明</strong></span></span></span></p>
                            </td>
                        </tr>
                        <tr>
                            <td
                                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.3131in">
                                <p><span style="font-size:10.5pt"><span
                                            style="font-family:&quot;Comic Sans MS&quot;">&lt;listerner-class&gt;</span></span>
                                </p>
                            </td>
                            <td
                                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:.568in">
                                <p><span style="font-size:10.5pt"><span
                                            style="font-family:&quot;Microsoft YaHei UI&quot;">参数名</span></span></p>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <p style="margin-left:36px"><span style="font-size:12.0pt"><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:#333333">&nbsp;</span></span></span></p>
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
                style="background-color:white; border-bottom:0px; border-left:0px; border-right:0px; border-top:0px; vertical-align:top; width:8.4312in">
                <p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">&lt;?xml</span></span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">version</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">=</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:maroon">"1.0"</span></span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">encoding</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">=</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:maroon">"utf-8"</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">?&gt;</span></span></span></p>
                <p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">&lt;web-app</span></span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">xmlns</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">=</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:maroon">"http://java.sun.com/xml/ns/javaee"</span></span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">xmlns:xsi</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">=</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:maroon">"http://www.w3.org/2001/XMLSchema-instance"</span></span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">xsi:schemaLocation</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">=</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:maroon">"http://java.sun.com/xml/ns/javaee</span></span>&nbsp;<a
                            data-cke-saved-href="http://java.sun.com/xml/ns/javaee/web-app_2_5.xsd"
                            href="http://java.sun.com/xml/ns/javaee/web-app_2_5.xsd"><span
                                style="font-family:&quot;Comic Sans MS&quot;"><span
                                    style="color:maroon">http://java.sun.com/xml/ns/javaee/web-app_2_5.xsd</span></span></a><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:maroon">"</span></span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">version</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">=</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:maroon">"2.5"</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">&gt;</span></span></span></p>
                <p><span style="font-size:12.0pt">&nbsp;&nbsp;<span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:green">&lt;!--</span></span>&nbsp;&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:green">Spring</span></span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:green">&nbsp;服务层的配置文件&nbsp;</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:green">--&gt;</span></span></span></p>
                <p><span style="font-size:12.0pt">&nbsp;&nbsp;<span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">&lt;context-param&gt;</span></span></span></p>
                <p><span style="font-size:12.0pt">&nbsp;&nbsp;&nbsp;&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">&lt;param-name&gt;</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:black">contextConfigLocation</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">&lt;/param-name&gt;</span></span></span></p>
                <p><span style="font-size:12.0pt">&nbsp;&nbsp;&nbsp;&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">&lt;param-value&gt;</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:black">classpath:applicationContext.xml</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">&lt;/param-value&gt;</span></span></span></p>
                <p><span style="font-size:12.0pt">&nbsp;&nbsp;<span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">&lt;/context-param&gt;</span></span></span></p>
                <p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">&nbsp;</span></span></span></p>
                <p><span style="font-size:12.0pt"><span style="color:green">&nbsp;<span
                                style="font-family:&quot;Comic Sans MS&quot;">&lt;!--</span> <span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">配置文件加载监听器</span> <span
                                style="font-family:&quot;Comic Sans MS&quot;">--&gt;</span></span></span></p>
                <p><span style="font-size:12.0pt"><span style="color:blue">&nbsp;<span
                                style="font-family:&quot;Comic Sans MS&quot;">&lt;listener&gt;</span></span></span></p>
                <p><span style="font-size:12.0pt">&nbsp; &nbsp;<span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">&lt;listener-class&gt;</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:black">org.springframework.web.context.ContextLoaderListener</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">&lt;/listener-class&gt;</span></span></span></p>
                <p><span style="font-size:12.0pt"><span style="color:blue">&nbsp;<span
                                style="font-family:&quot;Comic Sans MS&quot;">&lt;/listener&gt;</span></span></span></p>
                <p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">&nbsp;</span></span></span></p>
                <p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">&lt;/web-app&gt;</span></span></span></p>
            </td>
        </tr>
    </tbody>
</table>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                style="color:#70ad47">&nbsp;</span></span></span></p>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                style="color:#70ad47">&nbsp;</span></span></span></p>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">来自</span><span
            style="font-family:&quot;Comic Sans MS&quot;">&lt; </span><a
            data-cke-saved-href="https://www.cnblogs.com/vanl/p/5753722.html"
            href="https://www.cnblogs.com/vanl/p/5753722.html"><span
                style="font-family:&quot;Comic Sans MS&quot;">https://www.cnblogs.com/vanl/p/5753722.html</span></a><span
            style="font-family:&quot;Comic Sans MS&quot;">&gt;</span></span></p>
