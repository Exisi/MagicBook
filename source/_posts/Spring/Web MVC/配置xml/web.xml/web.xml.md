---
categories:
  - Spring
tags:
  - web.xml
date:
  - 2022-11-28 14:02:13
---

<ul style="list-style-type:disc">
    <li><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">启动一个</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">WEB</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">项目的时候，</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">WEB</span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">容器会去读取它的配置文件</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">web.xml</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">，读取</span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Comic Sans MS&quot;">&lt;listener&gt;</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">和</span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Comic Sans MS&quot;">&lt;context-param&gt;</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">两个结点。&nbsp;</span></span>
    </li>
</ul>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"></span></span><br></p>
<ul style="list-style-type:disc">
    <li><span style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">紧急着，容创建一个</span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Comic Sans MS&quot;">ServletContext</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">（</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">servlet</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">上下文），这个</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">web</span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">项目的所有部分都将共享这个上下文。&nbsp;</span></span></li>
</ul>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"></span></span><br></p>
<ul style="list-style-type:disc">
    <li><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">容器将</span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Comic Sans MS&quot;">&lt;context-param&gt;</span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">转换为键值对，并交给</span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Comic Sans MS&quot;">servletContext</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">。&nbsp;</span></span></li>
</ul>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">​​​​​​​</span></span><br></p>
<ul style="list-style-type:disc">
    <li><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">容器创建</span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Comic Sans MS&quot;">&lt;listener&gt;</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">中的类实例，创建监听器</span></span>
    </li>
</ul>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                style="color:#70ad47"><strong>示例</strong></span></span></span></p>
<p style="margin-left:36px"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:blue">&lt;web-app&nbsp;xmlns</span><span style="color:black">=</span><span
                style="color:maroon">"http://java.sun.com/xml/ns/j2ee"</span></span></span></p>
<p style="margin-left:36px"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:blue">&nbsp;&nbsp;&nbsp;&nbsp;xmlns:xsi</span><span style="color:black">=</span><span
                style="color:maroon">"http://www.w3.org/2001/XMLSchema-instance"</span></span></span></p>
<p style="margin-left:36px"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:blue">&nbsp;&nbsp;&nbsp;&nbsp;xsi:schemaLocation</span><span
                style="color:black">=</span><span
                style="color:maroon">"http://java.sun.com/xml/ns/j2ee/web-app_2_4.xsd"</span></span></span></p>
<p style="margin-left:36px"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:blue">&nbsp;&nbsp;&nbsp;&nbsp;version</span><span style="color:black">=</span><span
                style="color:maroon">"2.4"</span><span style="color:blue">&gt;</span></span></span></p>
<p style="margin-left:36px"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Microsoft YaHei&quot;">&nbsp;</span></span></p>
<p style="margin-left:36px"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:blue">&lt;/web-app&gt;</span></span></span></p>
