---
categories:
- Spring Boot
tags:
- application.properties
date:
- 2022-11-28 15:17:01
---

<ul style="list-style-type:disc">
    <li><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">Spring
                Boot</span></span><span style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">使用一个</span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Comic Sans MS&quot;">application.properties</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">或者</span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Comic Sans MS&quot;">application.yaml</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">（</span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Comic Sans MS&quot;">application.yml</span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">）的文件作为全局配置文件，两种配置方式属性相同，只是格式不同</span></span></li>
</ul>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
<ul style="list-style-type:disc">
    <li><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">我们可以在</span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Comic Sans MS&quot;">application.properties</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">文件中定义</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">Spring Boot</span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">项目的相关属性，当然，这些相关属性可以是系统属性、环境变量、命令参数等信息，也可以是自定义配置文件名称和位置</span></span>
    </li>
</ul>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                style="color:#70ad47"><strong>示例</strong></span></span></span></p>
<ul style="list-style-type:disc">
    <li><span style="color:#e67e22;"><span style="font-size:12.0pt"><span
                    style="font-family:&quot;Comic Sans MS&quot;">application.properties</span></span></span></li>
</ul>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span style="color:#70ad47"><span
                style="font-family:&quot;Comic Sans MS&quot;">#</span><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">端口</span></span></span></p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">server.port=8080</span></span></p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span style="color:#70ad47"><span
                style="font-family:&quot;Comic Sans MS&quot;">#</span><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">上下文路径</span></span></span></p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">server.servlet.context-path=/springboot</span></span></p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#ed7d31">&nbsp;</span></span></span></p>
<ul>
    <li><span style="color:#e67e22;"><span style="font-size:12.0pt"><span
                    style="font-family:&quot;Comic Sans MS&quot;">application.yml</span></span><span
                style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">（</span></span><span
                style="font-size:12.0pt"><span
                    style="font-family:&quot;Comic Sans MS&quot;">application.yaml</span></span><span
                style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">）</span></span></span>
    </li>
</ul>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">server:</span></span></p>
<p style="margin-left: 120px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">port:
            8081</span>&nbsp;&nbsp; <span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#70ad47">#</span></span><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                style="color:#70ad47">端口</span></span></span></p>
<p style="margin-left: 120px;"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">servlet:</span></span></p>
<p style="margin-left: 160px;"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">context-path: /springboot</span>&nbsp;&nbsp;&nbsp;&nbsp; <span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:#70ad47">#</span></span><span
            style="font-family:&quot;Microsoft YaHei UI&quot;"><span style="color:#70ad47">上下文路径</span></span></span>
</p>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei&quot;"><strong>注</strong></span></span>
</p>
<ul>
    <li><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">都使用</span><span
                style="font-family:&quot;Comic Sans MS&quot;">#</span><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">注解方式</span></span></li>
</ul>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"></span></span><br></p>
<ul>
    <li><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">当</span><span
                style="font-family:&quot;Comic Sans MS&quot;">properties</span><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">和</span><span
                style="font-family:&quot;Comic Sans MS&quot;">yml</span><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">同时存在时，</span><span
                style="font-family:&quot;Comic Sans MS&quot;">properties</span><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">的优先级会比</span><span
                style="font-family:&quot;Comic Sans MS&quot;">yml</span><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">高</span></span></li>
</ul>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">​​​​​​​</span></span><br></p>
<ul>
    <li><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">使用</span><span
                style="font-family:&quot;Comic Sans MS&quot;">yml</span><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">格式时，格式需要严格按照</span><span
                style="font-family:&quot;Comic Sans MS&quot;">tab</span><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">缩进的级别进行配置，在</span><span
                style="font-family:&quot;Comic Sans MS&quot;">":"</span><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">后需要添加空格分隔，相同级别的配置只能出现一次</span></span></li>
</ul>