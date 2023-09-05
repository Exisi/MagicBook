---
categories:
  - Spring
tags:
  - ‹filter›
  - ‹filter-mapping›
date:
  - 2022-6-28 14:05:13
---

<ul style="list-style-type:disc">
    <li><span style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">我们可以有两种方式，进行请求的过滤</span></span>
        <ul style="list-style-type:disc">
            <li><span style="font-size:12.0pt"><span
                        style="font-family:&quot;Comic Sans MS&quot;">Filter</span></span><span
                    style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">过滤器</span></span>
            </li>
            <li><span style="font-size:12.0pt"><span
                        style="font-family:&quot;Comic Sans MS&quot;">Spring</span></span><span
                    style="font-size:12.0pt"><span
                        style="font-family:&quot;Microsoft YaHei UI&quot;">拦截器（</span></span><span
                    style="font-size:12.0pt"><span
                        style="font-family:&quot;Comic Sans MS&quot;">HandlerInterceptor</span></span><span
                    style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">）</span></span>
            </li>
        </ul>
    </li>
</ul>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
<p><span style="font-size:13.5pt"><strong><span style="font-family:&quot;Comic Sans MS&quot;">Filter</span></strong>
        <strong><span style="font-family:&quot;Microsoft YaHei UI&quot;">过滤器</span></strong></span></p>
<p><span style="font-size:13.5pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">&nbsp;</span></span></p>
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
                style="background-color:black; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:6.8888in">
                <p><span style="font-size:10.5pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:white"><strong>说明</strong></span></span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.7416in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;">&lt;filter&gt;</span></span></p>
            </td>
            <td
                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:6.8888in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">过滤器元素将一个名字与一个实现</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">javax.servlet.Filter</span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">接口的类相关联</span></span></p>
                <table summary="" cellspacing="0"
                    style="border-collapse:collapse; border-color:#a3a3a3; border-style:solid; border-width:1px; "
                    class=" cke_show_border">
                    <tbody>
                        <tr>
                            <td
                                style="background-color:black; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.0833in">
                                <p><span style="font-size:10.5pt"><span
                                            style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                                style="color:white"><strong>子标签</strong></span></span></span></p>
                            </td>
                            <td
                                style="background-color:black; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:3.7263in">
                                <p><span style="font-size:10.5pt"><span
                                            style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                                style="color:white"><strong>说明</strong></span></span></span></p>
                            </td>
                        </tr>
                        <tr>
                            <td
                                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.1027in">
                                <p><span style="font-size:10.5pt"><span
                                            style="font-family:&quot;Comic Sans MS&quot;">&lt;filter-name&gt;</span></span>
                                </p>
                            </td>
                            <td
                                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:3.7763in">
                                <p><span style="font-size:10.5pt"><span
                                            style="font-family:&quot;Microsoft YaHei UI&quot;">定义过滤器的名称，该名称在整个应用中都必须是惟一的</span></span>
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td
                                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.0902in">
                                <p><span style="font-size:10.5pt"><span
                                            style="font-family:&quot;Comic Sans MS&quot;">&lt;filter-class&gt;</span></span>
                                </p>
                            </td>
                            <td
                                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:3.7201in">
                                <p><span style="font-size:10.5pt"><span
                                            style="font-family:&quot;Microsoft YaHei UI&quot;">指定过滤器类的完全限定的名称</span></span>
                                </p>
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
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.7416in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;">&lt;filter-mapping&gt;</span></span></p>
            </td>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:6.8888in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">一旦命名了一个过滤器，就要利用</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">filter-mapping</span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">元素把它与一个或多个</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">servlet</span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">或</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">JSP</span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">页面相关联</span></span></p>
                <table summary="" cellspacing="0"
                    style="border-collapse:collapse; border-color:#a3a3a3; border-style:solid; border-width:1px; "
                    class=" cke_show_border">
                    <tbody>
                        <tr>
                            <td
                                style="background-color:black; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.1902in">
                                <p><span style="font-size:10.5pt"><span
                                            style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                                style="color:white"><strong>子标签</strong></span></span></span></p>
                            </td>
                            <td
                                style="background-color:black; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:3.7263in">
                                <p><span style="font-size:10.5pt"><span
                                            style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                                style="color:white"><strong>说明</strong></span></span></span></p>
                            </td>
                        </tr>
                        <tr>
                            <td
                                style="background-color:white; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.1902in">
                                <p><span style="font-size:10.5pt"><span
                                            style="font-family:&quot;Comic Sans MS&quot;">&lt;filter-name&gt;</span></span>
                                </p>
                            </td>
                            <td
                                style="background-color:white; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:3.7958in">
                                <p><span style="font-size:10.5pt"><span
                                            style="font-family:&quot;Microsoft YaHei UI&quot;">定义过滤器的名称，该名称在整个应用中都必须是惟一的</span></span>
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td
                                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.2097in">
                                <p><span style="font-size:10.5pt"><span
                                            style="font-family:&quot;Comic Sans MS&quot;">&lt;servlet-name&gt;</span></span>
                                </p>
                            </td>
                            <td
                                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:3.7076in">
                                <p><span style="font-size:10.5pt"><span
                                            style="font-family:&quot;Comic Sans MS&quot;">servlet</span><span
                                            style="font-family:&quot;Microsoft YaHei UI&quot;">名称</span></span></p>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
            </td>
        </tr>
    </tbody>
</table>
<p><span style="font-size:13.5pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">&nbsp;</span></span></p>
<ul style="list-style-type:disc">
    <li><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">使用</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">servlet</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">中的</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">doFilter</span></span></li>
</ul>
<table summary="" cellspacing="0"
    style="border-collapse:collapse; border-color:#a3a3a3; border-style:solid; border-width:0px; margin-left:68px"
    class=" cke_show_border">
    <tbody>
        <tr>
            <td
                style="background-color:white; border-bottom:0px; border-left:0px; border-right:0px; border-top:0px; vertical-align:top; width:8.4743in">
                <p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:black">@Override</span></span></span></p>
                <p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">public</span></span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:#8000ff">void</span></span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:black">doFilter(ServletRequest</span></span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:black">request,</span></span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:black">ServletResponse</span></span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:black">response,</span></span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:black">FilterChain</span></span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:black">chain)</span></span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">throws</span></span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:black">IOException,</span></span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:black">ServletException</span></span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:black">{</span></span></span></p>
                <p><span style="font-size:12.0pt">&nbsp;&nbsp;&nbsp;&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:green">//</span></span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:green">请求传递前处理</span></span></span></p>
                <p><span style="font-size:12.0pt"><span style="color:black">&nbsp;&nbsp;&nbsp;&nbsp;<span
                                style="font-family:&quot;Comic Sans MS&quot;">chain.doFilter(request,</span>&nbsp;<span
                                style="font-family:&quot;Comic Sans MS&quot;">response);</span></span></span></p>
                <p><span style="font-size:12.0pt">&nbsp;&nbsp;&nbsp;&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:green">//</span></span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:green">请求处理后处理</span></span></span></p>
                <p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:black">}</span></span></span></p>
                <p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:black">&nbsp;</span></span></span></p>
            </td>
        </tr>
    </tbody>
</table>
<ul style="list-style-type:disc">
    <li><span style="font-size:12.0pt"><strong><span
                    style="font-family:&quot;Comic Sans MS&quot;">CharacterEncodingFilter</span></strong></span>
        <ul style="list-style-type:disc">
            <li><span style="font-size:12.0pt"><span
                        style="font-family:&quot;Microsoft YaHei UI&quot;">因为</span></span><span
                    style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">web</span></span><span
                    style="font-size:12.0pt"><span
                        style="font-family:&quot;Microsoft YaHei UI&quot;">容器处理</span></span><span
                    style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">http</span></span><span
                    style="font-size:12.0pt"><span
                        style="font-family:&quot;Microsoft YaHei UI&quot;">请求，默认的编码格式是</span></span><span
                    style="font-size:12.0pt"><span
                        style="font-family:&quot;Comic Sans MS&quot;">IOS8859-1</span></span><span
                    style="font-size:12.0pt"><span
                        style="font-family:&quot;Microsoft YaHei UI&quot;">。</span></span><span
                    style="font-size:12.0pt"><span
                        style="font-family:&quot;Comic Sans MS&quot;">CharacterEncodingFilter</span></span><span
                    style="font-size:12.0pt"><span
                        style="font-family:&quot;Microsoft YaHei UI&quot;">的作用就是设置请求体编码格式，用于请求体参数的字节转字符，也就是对</span></span><span
                    style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">Post</span></span><span
                    style="font-size:12.0pt"><span
                        style="font-family:&quot;Microsoft YaHei UI&quot;">请求的参数进行解码。</span></span></li>
        </ul>
    </li>
</ul>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">&nbsp;</span></span></p>
<ul style="list-style-type:disc">
    <li><span style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">需要注意的是</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">get</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">请求或者</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">URL</span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">上的参数是容器进行解码的，需要设置容器的</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">URL</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">解码的字符集。</span></span></li>
</ul>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">&nbsp;</span></span></p>
<ul style="list-style-type:disc">
    <li><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">Get</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">请求与</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">Post</span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">请求会有不同处理的原因在于，字符串解析是耗性能的，如果不需要使用，那么就不解析，也就不用消耗这部分性能。请求体通常比较大，只有在程序中需要的时候才会进行解码，而</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">URL</span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">需要在传递给业务类之前就解码</span></span></li>
</ul>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                style="color:#70ad47"><strong>示例</strong></span></span></span></p>
<table summary="" cellspacing="0"
    style="border-collapse:collapse; border-color:#a3a3a3; border-style:solid; border-width:0px; margin-left:68px"
    class=" cke_show_border">
    <tbody>
        <tr>
            <td
                style="background-color:white; border-bottom:0px; border-left:0px; border-right:0px; border-top:0px; vertical-align:top; width:8.3638in">
                <p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">&lt;filter&gt;</span></span></span></p>
                <p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">&nbsp;&nbsp;<span
                                style="color:blue">&lt;filter-name&gt;</span><span
                                style="color:black">characterEncodingFilter</span><span
                                style="color:blue">&lt;/filter-name&gt;</span></span></span></p>
                <p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">&nbsp;&nbsp;<span
                                style="color:blue">&lt;filter-class&gt;</span><span
                                style="color:black">org.springframework.web.filter.CharacterEncodingFilter</span><span
                                style="color:blue">&lt;/filter-class&gt;</span></span></span></p>
                <p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">&nbsp;&nbsp;<span
                                style="color:blue">&lt;init-param&gt;</span></span></span></p>
                <p><span style="font-size:12.0pt">&nbsp; <span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:#538135">&nbsp;&nbsp;&lt;!-- </span></span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:#538135">设置编码方式</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:#538135">
                                --&gt;</span></span></span></p>
                <p><span style="font-size:12.0pt">&nbsp;&nbsp;&nbsp;&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">&lt;param-name&gt;</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:black">encoding</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">&lt;/param-name&gt;</span></span></span></p>
                <p><span style="font-size:12.0pt">&nbsp;&nbsp;&nbsp;&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">&lt;param-value&gt;</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:black">UTF-8</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">&lt;/param-value&gt;</span></span></span></p>
                <p><span style="font-size:12.0pt">&nbsp;&nbsp;<span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">&lt;/init-param&gt;</span></span></span></p>
                <p><span style="font-size:12.0pt">&nbsp;&nbsp;<span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">&lt;init-param&gt;</span></span></span></p>
                <p><span style="font-size:12.0pt">&nbsp;&nbsp; <span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:#538135">&nbsp;&lt;!-- </span></span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:#538135">强制请求对象使用</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:#538135">encoding</span></span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:#538135">的编码方式</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:#538135">
                                --&gt;</span></span></span></p>
                <p><span style="font-size:12.0pt">&nbsp;&nbsp;&nbsp;&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">&lt;param-name&gt;</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;">forceRequestEncoding</span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">&lt;/param-name&gt;</span></span></span></p>
                <p><span style="font-size:12.0pt">&nbsp;&nbsp;&nbsp;&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">&lt;param-value&gt;</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:black">true</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">&lt;/param-value&gt;</span></span></span></p>
                <p><span style="font-size:12.0pt">&nbsp;&nbsp;<span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">&lt;/init-param&gt;</span></span></span></p>
                <p><span style="font-size:12.0pt">&nbsp;&nbsp;<span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">&lt;init-param&gt;</span></span></span></p>
                <p><span style="font-size:12.0pt">&nbsp;&nbsp; <span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:#538135">&nbsp;&lt;!-- </span></span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:#538135">强制响应对象使用</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:#538135">encoding</span></span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:#538135">的编码方式</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:#538135">
                                --&gt;</span></span></span></p>
                <p><span style="font-size:12.0pt">&nbsp;&nbsp;&nbsp;&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">&lt;param-name&gt;</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;">forceResponseEncoding</span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">&lt;/param-name&gt;</span></span></span></p>
                <p><span style="font-size:12.0pt">&nbsp;&nbsp;&nbsp;&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">&lt;param-value&gt;</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:black">true</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">&lt;/param-value&gt;</span></span></span></p>
                <p><span style="font-size:12.0pt">&nbsp;&nbsp;<span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">&lt;/init-param&gt;</span></span></span></p>
                <p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">&lt;/filter&gt;</span></span></span></p>
                <p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">&nbsp;</span></span></span></p>
                <p><span style="font-size:12.0pt"><span style="color:#538135"><span
                                style="font-family:&quot;Comic Sans MS&quot;">&lt;!-- </span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">为</span><span
                                style="font-family:&quot;Comic Sans MS&quot;">Servlet</span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">关联过滤器</span><span
                                style="font-family:&quot;Comic Sans MS&quot;"> --&gt;</span></span></span></p>
                <p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">&lt;filter-mapping&gt;</span></span></span></p>
                <p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">&nbsp;&nbsp;<span
                                style="color:blue">&lt;filter-name&gt;</span><span
                                style="color:black">characterEncodingFilter</span><span
                                style="color:blue">&lt;/filter-name&gt;</span></span></span></p>
                <p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">&nbsp;&nbsp;<span
                                style="color:blue">&lt;url-pattern&gt;/</span><span style="color:black">*</span><span
                                style="color:blue">&lt;/url-pattern&gt;</span></span></span></p>
                <p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">&lt;/filter-mapping&gt;</span></span></span></p>
            </td>
        </tr>
    </tbody>
</table>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">&nbsp;</span></span></p>
<ul style="list-style-type:disc">
    <li><span style="font-size:12.0pt"><strong><span
                    style="font-family:&quot;Comic Sans MS&quot;">DelegatingFilterProxy</span></strong></span></li>
</ul>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Microsoft YaHei UI&quot;">代理自定义过滤器</span><span
            style="font-family:&quot;Microsoft YaHei&quot;">，过滤器是不能通过</span><span
            style="font-family:&quot;Comic Sans MS&quot;">Spring</span><span
            style="font-family:&quot;Microsoft YaHei&quot;">依赖注入的，通过</span><span
            style="font-family:&quot;Comic Sans MS&quot;">DelegatingFilterProxy</span><span
            style="font-family:&quot;Microsoft YaHei&quot;">进行代理，实际上就是通过</span><span
            style="font-family:&quot;Comic Sans MS&quot;">ApplicationContext</span><span
            style="font-family:&quot;Microsoft YaHei&quot;">中获取</span><span
            style="font-family:&quot;Comic Sans MS&quot;">filter</span><span
            style="font-family:&quot;Microsoft YaHei&quot;">对象</span></span></p>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                style="color:#70ad47"><strong>示例</strong></span></span></span></p>
<table summary="" cellspacing="0"
    style="border-collapse:collapse; border-color:#a3a3a3; border-style:solid; border-width:0px; margin-left:68px"
    class=" cke_show_border">
    <tbody>
        <tr>
            <td
                style="background-color:white; border-bottom:0px; border-left:0px; border-right:0px; border-top:0px; vertical-align:top; width:6.5979in">
                <p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">&lt;filter&gt;</span></span></span></p>
                <p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">&nbsp;&nbsp;<span
                                style="color:blue">&lt;filter-name&gt;</span><span style="color:black">xxx</span><span
                                style="color:blue">&lt;/filter-name&gt;</span></span></span></p>
                <p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">&nbsp;&nbsp;<span
                                style="color:blue">&lt;filter-class&gt;</span><span
                                style="color:black">org.springframework.web.filter.DelegatingFilterProxy</span><span
                                style="color:blue">&lt;/filter-class&gt;</span></span></span></p>
                <p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">&nbsp;&nbsp;<span
                                style="color:blue">&lt;init-param&gt;</span></span></span></p>
                <p><span style="font-size:12.0pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;">&nbsp;&nbsp;&nbsp;&nbsp;<span
                                style="color:blue">&lt;param-name&gt;</span><span
                                style="color:black">targetBeanName</span><span
                                style="color:blue">&lt;/param-name&gt;</span></span></span></p>
                <p><span style="font-size:12.0pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;">&nbsp;&nbsp;&nbsp;&nbsp;<span
                                style="color:blue">&lt;param-value&gt;</span><span
                                style="color:black">simpleFilter</span><span
                                style="color:blue">&lt;/param-value&gt;</span></span></span></p>
                <p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">&nbsp;&nbsp;<span
                                style="color:blue">&lt;/init-param&gt;</span></span></span></p>
                <p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">&lt;/filter&gt;</span></span></span></p>
                <p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">&lt;filter-mapping&gt;</span></span></span></p>
                <p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">&nbsp;&nbsp;<span
                                style="color:blue">&lt;filter-name&gt;</span><span style="color:black">xxx</span><span
                                style="color:blue">&lt;/filter-name&gt;</span></span></span></p>
                <p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">&nbsp;&nbsp;<span
                                style="color:blue">&lt;url-pattern&gt;/</span><span style="color:black">*</span><span
                                style="color:blue">&lt;/url-pattern&gt;</span></span></span></p>
                <p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">&lt;/filter-mapping&gt;</span></span></span></p>
            </td>
        </tr>
    </tbody>
</table>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                style="color:#70ad47">&nbsp;</span></span></span></p>
<p><span style="font-size:13.5pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">&nbsp;</span></span></p>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">来自</span><span
            style="font-family:&quot;Comic Sans MS&quot;">&lt;</span><a
            data-cke-saved-href="https://www.jianshu.com/p/142741300518%3e"
            href="https://www.jianshu.com/p/142741300518%3e"><span
                style="font-family:&quot;Comic Sans MS&quot;">https://www.jianshu.com/p/142741300518</span><span
                style="font-family:&quot;Comic Sans MS&quot;">&gt;</span></a></span></p>
