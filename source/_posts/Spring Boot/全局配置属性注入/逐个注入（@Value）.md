---
categories:
  - Spring Boot
tags:
  - ［@Value］
date:
  - 2022-9-28 15:24:01
---

<ul style="list-style-type:disc">
    <li><span style="font-size:12.0pt"><span style="background-color:white"><span
                    style="font-family:&quot;Comic Sans MS&quot;">@Value</span></span></span><span
            style="font-size:12.0pt"><span style="background-color:white"><span
                    style="font-family:&quot;Microsoft YaHei UI&quot;">是</span></span></span><span
            style="font-size:12.0pt"><span style="background-color:white"><span
                    style="font-family:&quot;Comic Sans MS&quot;">spring</span></span></span><span
            style="font-size:12.0pt"><span style="background-color:white"><span
                    style="font-family:&quot;Microsoft YaHei UI&quot;">中的属性注解，使用</span></span></span><span
            style="font-size:12.0pt"><span style="background-color:white"><span
                    style="font-family:&quot;Comic Sans MS&quot;">@Value</span></span></span><span
            style="font-size:12.0pt"><span style="background-color:white"><span
                    style="font-family:&quot;Microsoft YaHei UI&quot;">注解可以取出全局配置中的属性，注入到参数中</span></span></span></li>
</ul>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">&nbsp;</span></span></p>
<ul style="list-style-type:disc">
    <li><span style="font-size:12.0pt"><span style="background-color:white"><span
                    style="font-family:&quot;Microsoft YaHei UI&quot;">在</span></span></span><span
            style="font-size:12.0pt"><span style="background-color:white"><span
                    style="font-family:&quot;Comic Sans MS&quot;">application.properties</span></span></span><span
            style="font-size:12.0pt"><span style="background-color:white"><span
                    style="font-family:&quot;Microsoft YaHei UI&quot;">中添加自定义属性</span></span></span></li>
</ul>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">&nbsp;</span></span></p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="background-color:white">user.name=admin</span></span></span></p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="background-color:white">user.password=123456</span></span></span></p>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                style="color:#70ad47"><span
                    style="background-color:white"><strong>示例</strong></span></span></span></span></p>
<p style="margin-left:36px"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#ffc000">@RestController</span></span></span></p>
<p style="margin-left:36px"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:black">public&nbsp;class&nbsp;UserController&nbsp;{</span></span></span></p>
<p style="margin-left:36px"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Microsoft YaHei&quot;">&nbsp;</span></span></p>
<p style="margin-left:36px"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">&nbsp;&nbsp;&nbsp;<span
                style="color:#ffc000">&nbsp;@Value</span><span style="color:black">(</span><span
                style="color:maroon">"${user.username}"</span><span style="color:black">)</span></span></span></p>
<p style="margin-left:36px"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:black">&nbsp;&nbsp;&nbsp;&nbsp;private&nbsp;String&nbsp;userName;</span></span></span></p>
<p style="margin-left:36px"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:black">&nbsp;&nbsp;&nbsp;&nbsp;</span></span></span></p>
<p style="margin-left:36px"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">&nbsp;&nbsp;&nbsp;<span
                style="color:#ffc000">&nbsp;@Value</span><span style="color:black">(</span><span
                style="color:maroon">"${user.password}"</span><span style="color:black">)</span></span></span></p>
<p style="margin-left:36px"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:black">&nbsp;&nbsp;&nbsp;&nbsp;private&nbsp;String&nbsp;password;</span></span></span></p>
<p style="margin-left:36px"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Microsoft YaHei&quot;">&nbsp;</span></span></p>
<p style="margin-left:36px"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">&nbsp;&nbsp;&nbsp;&nbsp;<span
                style="color:#ffc000">@RequestMapping</span><span style="color:black">(</span><span
                style="color:maroon">"/</span><span style="color:maroon">user</span><span
                style="color:maroon">"</span><span style="color:black">)</span></span></span></p>
<p style="margin-left:36px"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:black">&nbsp;&nbsp;&nbsp;&nbsp;public&nbsp;String&nbsp;getProperties()&nbsp;{</span></span></span>
</p>
<p style="margin-left:36px"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:black">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;System.out.println(</span><span
                style="color:maroon">"userName:"</span><span
                style="color:black">&nbsp;+&nbsp;userName);</span></span></span></p>
<p style="margin-left:36px"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:black">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;System.out.println(</span><span
                style="color:maroon">"password:"</span><span
                style="color:black">&nbsp;+&nbsp;password);</span></span></span></p>
<p style="margin-left:36px"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:black">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return&nbsp;</span><span
                style="color:maroon">"success"</span><span style="color:black">;</span></span></span></p>
<p style="margin-left:36px"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:black">&nbsp;&nbsp;&nbsp;&nbsp;}</span></span></span></p>
<p style="margin-left:36px"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:black">}</span></span></span></p>
