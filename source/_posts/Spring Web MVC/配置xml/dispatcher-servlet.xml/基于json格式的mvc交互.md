---
categories:
- Spring Web MVC
date:
- 2022-11-28 14:13:03
---

<ul style="list-style-type:disc">
    <li><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">SpringMVC</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">返回</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">json</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">数据有三种方式</span></span>
        <ol style="list-style-type:decimal">
            <li value="1"><span style="font-size:12.0pt"><span
                        style="font-family:&quot;Microsoft YaHei UI&quot;">第一种方式是</span></span><span
                    style="font-size:12.0pt"><span
                        style="font-family:&quot;Comic Sans MS&quot;">spring2</span></span><span
                    style="font-size:12.0pt"><span
                        style="font-family:&quot;Microsoft YaHei UI&quot;">时代的产物，也就是每个</span></span><span
                    style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">json</span></span><span
                    style="font-size:12.0pt"><span
                        style="font-family:&quot;Microsoft YaHei UI&quot;">视图</span></span><span
                    style="font-size:12.0pt"><span
                        style="font-family:&quot;Comic Sans MS&quot;">controller</span></span><span
                    style="font-size:12.0pt"><span
                        style="font-family:&quot;Microsoft YaHei UI&quot;">配置一个</span></span><span
                    style="font-size:12.0pt"><span
                        style="font-family:&quot;Comic Sans MS&quot;">Jsoniew</span></span><span
                    style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">。如：</span></span>
            </li>
        </ol>
    </li>
</ul>
<table summary="" cellspacing="0"
    style="border-collapse:collapse; border-color:#a3a3a3; border-style:solid; border-width:0px; margin-left:68px"
    class=" cke_show_border">
    <tbody>
        <tr>
            <td
                style="background-color:white; border-bottom:0px; border-left:0px; border-right:0px; border-top:0px; vertical-align:top; width:8.5in">
                <p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">&lt;bean&nbsp;id</span><span style="color:black">=</span><span
                                style="color:maroon">"defaultJsonView"</span><span
                                style="color:blue">&nbsp;class</span><span style="color:black">=</span><span
                                style="color:maroon">"org.springframework.web.servlet.view.json.MappingJacksonJsonView"</span><span
                                style="color:blue">/&gt;</span></span></span></p>
            </td>
        </tr>
    </tbody>
</table>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">&nbsp;</span></span></p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Microsoft YaHei UI&quot;">或者</span></span></p>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">&nbsp;</span></span></p>
<table summary="" cellspacing="0"
    style="border-collapse:collapse; border-color:#a3a3a3; border-style:solid; border-width:0px; margin-left:68px"
    class=" cke_show_border">
    <tbody>
        <tr>
            <td
                style="background-color:white; border-bottom:0px; border-left:0px; border-right:0px; border-top:0px; vertical-align:top; width:8.5833in">
                <p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">&lt;bean&nbsp;id</span><span style="color:black">=</span><span
                                style="color:maroon">"defaultJsonView"</span><span
                                style="color:blue">&nbsp;class</span><span style="color:black">=</span><span
                                style="color:maroon">"org.springframework.web.servlet.view.json.MappingJackson2JsonView"</span><span
                                style="color:blue">/&gt;</span></span></span></p>
            </td>
        </tr>
    </tbody>
</table>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Microsoft YaHei UI&quot;">同样要用</span><span
            style="font-family:&quot;Comic Sans MS&quot;">jackson</span><span
            style="font-family:&quot;Microsoft YaHei UI&quot;">的</span><span
            style="font-family:&quot;Comic Sans MS&quot;">jar</span><span
            style="font-family:&quot;Microsoft YaHei UI&quot;">包。</span></span></p>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">&nbsp;</span></span></p>
<ol style="list-style-type: decimal; margin-left: 40px;">
    <li value="2"><span style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">第二种使用</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">JSON</span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">工具将对象序列化成</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">json</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">，常用工具</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">Jackson</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">，</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">fastjson</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">，</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">gson</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">。</span></span></li>
</ol>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"></span></span><br></p>
<ol style="list-style-type: decimal; margin-left: 40px;">
    <li value="3"><span style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">利用</span></span><span style="font-size:12.0pt"><span
                style="font-family:&quot;Comic Sans MS&quot;">HttpServletResponse</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">，然后获取</span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Comic Sans MS&quot;">response.getOutputStream()</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">或</span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Comic Sans MS&quot;">response.getWriter()</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">直接输出</span></span></li>
</ol>
<p><span style="color:#27ae60;"><span style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;"><strong>示例</strong></span></span></span></p>
<p style="margin-left:36px"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:blue">&lt;bean</span></span>&nbsp;<span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:blue">name</span></span><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:black">=</span></span><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:maroon">"jsonView"</span></span>&nbsp;<span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:blue">class</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">=</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:maroon">"com.test.myapp.MappingFastJsonJsonView"</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:blue">&gt;</span></span></span></p>
<p style="margin-left:36px"><span style="font-size:12.0pt">&nbsp;&nbsp;<span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:blue">&lt;property</span></span>&nbsp;<span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:blue">name</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">=</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:maroon">"contentType"</span></span>&nbsp;<span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:blue">value</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">=</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:maroon">"application/json;charset=UTF-8"</span></span>&nbsp;<span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:blue">/&gt;</span></span></span></p>
<p style="margin-left:36px"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:blue">&lt;/bean&gt;</span></span></span></p>