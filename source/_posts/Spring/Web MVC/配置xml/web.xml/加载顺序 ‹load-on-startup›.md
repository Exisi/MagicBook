---
categories:
  - Spring
tags:
  - ‹load-on-startup›
date:
  - 2022-11-28 14:04:33
---

<ul style="list-style-type:disc">
    <li>&nbsp;<span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">Load-on-startup
            </span></span><span style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">标签在</span></span><span style="font-size:12.0pt"><span
                style="font-family:&quot;Comic Sans MS&quot;">web</span></span><span style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">应用启动的时候指定了</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">servlet</span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">被加载的顺序，它的值必须是一个整数。</span></span>
        <ul style="list-style-type:disc">
            <li><span style="font-size:12.0pt"><span
                        style="font-family:&quot;Microsoft YaHei UI&quot;">如果它的值是一个负整数或是这个元素不存在，那么容器会在该</span></span><span
                    style="font-size:12.0pt"><span
                        style="font-family:&quot;Comic Sans MS&quot;">servlet</span></span><span
                    style="font-size:12.0pt"><span
                        style="font-family:&quot;Microsoft YaHei UI&quot;">被调用的时候，加载这个</span></span><span
                    style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">servlet
                    </span></span><span style="font-size:12.0pt"><span
                        style="font-family:&quot;Microsoft YaHei UI&quot;">。</span></span></li>
            <li><span style="font-size:12.0pt"><span
                        style="font-family:&quot;Microsoft YaHei UI&quot;">如果值是正整数或零，容器在配置的时候就加载并初始化这个</span></span><span
                    style="font-size:12.0pt"><span
                        style="font-family:&quot;Comic Sans MS&quot;">servlet</span></span><span
                    style="font-size:12.0pt"><span
                        style="font-family:&quot;Microsoft YaHei UI&quot;">，容器必须保证值小的先被加载。</span></span></li>
            <li><span style="font-size:12.0pt"><span
                        style="font-family:&quot;Microsoft YaHei UI&quot;">如果值相等，容器可以自动选择先加载。 &nbsp;</span></span></li>
        </ul>
    </li>
</ul>
<p style="margin-left:36px"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Microsoft YaHei UI&quot;"><span style="color:#393939">&nbsp;</span></span></span>
</p>
<ul style="list-style-type:disc">
    <li><span style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">标记容器是否在启动的时候就加载这个</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">servlet</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">。</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"></span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"></span></span><br></li>
</ul>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"></span></span>​​​​​​​<span
        style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">&nbsp;</span></span></p>
<ul style="list-style-type:disc">
    <li><span style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">正数的值越小，启动该</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">servlet</span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">的优先级越高。&nbsp;</span></span></li>
</ul>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                style="color:#70ad47"><strong>示例</strong></span></span></span></p>
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
                                style="color:black">springMVC</span><span
                                style="color:blue">&lt;/servlet-name&gt;</span></span></span></p>
                <p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">&nbsp;&nbsp;<span
                                style="color:blue">&lt;servlet-class&gt;</span><span
                                style="color:black">org.springframework.web.servlet.DispatcherServlet</span><span
                                style="color:blue">&lt;/servlet-class&gt;</span></span></span></p>
                <p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">&nbsp;&nbsp;<span
                                style="color:blue">&lt;init-param&gt;</span></span></span></p>
                <p><span style="font-size:12.0pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;">&nbsp;&nbsp;&nbsp;&nbsp;<span
                                style="color:blue">&lt;param-name&gt;</span><span
                                style="color:black">contextConfigLocation</span><span
                                style="color:blue">&lt;/param-name&gt;</span></span></span></p>
                <p><span style="font-size:12.0pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;">&nbsp;&nbsp;&nbsp;&nbsp;<span
                                style="color:blue">&lt;param-value&gt;</span><span
                                style="color:black">classpath:dispatcher-servlet.xml</span><span
                                style="color:blue">&lt;/param-value&gt;</span></span></span></p>
                <p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">&nbsp;&nbsp;<span
                                style="color:blue">&lt;/init-param&gt;</span></span></span></p>
                <p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:green">&lt;!--</span></span> <span
                            style="font-family:&quot;Microsoft YaHei&quot;"><span
                                style="color:green">设</span></span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:#70ad47">置</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:#70ad47">&lt;servlet&gt;</span></span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:#70ad47">加载的优先级</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:green">&nbsp;--&gt;</span></span></span></p>
                <p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">&nbsp;&nbsp;<span
                                style="color:blue">&lt;load-on-startup&gt;</span><span style="color:black">1</span><span
                                style="color:blue">&lt;/load-on-startup&gt;</span></span></span></p>
                <p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">&lt;/servlet&gt;</span></span></span></p>
            </td>
        </tr>
    </tbody>
</table>
<p style="margin-left:36px"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Microsoft YaHei UI&quot;"><span style="color:#70ad47">&nbsp;</span></span></span>
</p>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
<p><span style="font-family:&quot;Microsoft YaHei UI&quot;">来自</span><span
        style="font-family:&quot;Comic Sans MS&quot;"> &lt;</span><a
        data-cke-saved-href="https://www.cnblogs.com/xxoome/p/5954633.html"
        href="https://www.cnblogs.com/xxoome/p/5954633.html"><span
            style="font-family:&quot;Comic Sans MS&quot;">https://www.cnblogs.com/xxoome/p/5954633.html</span></a><span
        style="font-family:&quot;Comic Sans MS&quot;">&gt; </span></p>
