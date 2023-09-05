---
categories:
  - Spring
tags:
  - Ajax
date:
  - 2022-6-28 14:48:42
---

<ul style="list-style-type:disc">
    <li><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">在</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">Spring mvc</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">中有两种方式与</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">Ajax</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">的交互方式</span></span>
        <ul style="list-style-type:disc">
            <li><span style="font-size:12.0pt"><span
                        style="font-family:&quot;Microsoft YaHei UI&quot;">返回</span></span><span
                    style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">void</span></span></li>
            <li><span style="font-size:12.0pt"><span
                        style="font-family:&quot;Microsoft YaHei UI&quot;">返回对象</span></span></li>
        </ul>
    </li>
</ul>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">&nbsp;</span></span></p>
<ul style="list-style-type:disc">
    <li><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">使用</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">Ajax</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">需要导入</span></span> <span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">jquery </span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">和</span></span> <span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">JSON </span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">的相关依赖</span></span></li>
</ul>
<p style="margin-left:72px"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:blue">&lt;dependency&gt;</span></span></span></p>
<p style="margin-left:72px"><span style="font-size:12.0pt">&nbsp;&nbsp;<span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:blue">&lt;groupId&gt;</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:black">com.fasterxml.jackson.core</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:blue">&lt;/groupId&gt;</span></span></span>
</p>
<p style="margin-left:72px"><span style="font-size:12.0pt">&nbsp;&nbsp;<span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:blue">&lt;artifactId&gt;</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">jackson-core</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:blue">&lt;/artifactId&gt;</span></span></span></p>
<p style="margin-left:72px"><span style="font-size:12.0pt">&nbsp;&nbsp;<span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:blue">&lt;version&gt;</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">2.5.3</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:blue">&lt;/version&gt;</span></span></span>
</p>
<p style="margin-left:72px"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:blue">&lt;/dependency&gt;</span></span></span></p>
<p style="margin-left:72px"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:blue">&lt;dependency&gt;</span></span></span></p>
<p style="margin-left:72px"><span style="font-size:12.0pt">&nbsp;&nbsp;<span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:blue">&lt;groupId&gt;</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:black">com.fasterxml.jackson.core</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:blue">&lt;/groupId&gt;</span></span></span>
</p>
<p style="margin-left:72px"><span style="font-size:12.0pt">&nbsp;&nbsp;<span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:blue">&lt;artifactId&gt;</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">jackson-databind</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:blue">&lt;/artifactId&gt;</span></span></span></p>
<p style="margin-left:72px"><span style="font-size:12.0pt">&nbsp;&nbsp;<span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:blue">&lt;version&gt;</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">2.5.3</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:blue">&lt;/version&gt;</span></span></span>
</p>
<p style="margin-left:72px"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:blue">&lt;/dependency&gt;</span></span></span></p>
<p style="margin-left:72px"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
<ul style="list-style-type:disc">
    <li><span style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">在界面中使用</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">Ajax</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">请求</span></span></li>
</ul>
<p style="margin-left:72px"><span style="font-size:12.0pt"><span style="color:black"><span
                style="font-family:&quot;Comic Sans MS&quot;">function</span>&nbsp;&nbsp;<span
                style="font-family:&quot;Comic Sans MS&quot;">testRequestBody()</span>&nbsp;<span
                style="font-family:&quot;Comic Sans MS&quot;">{</span>&nbsp;</span></span></p>
<p style="margin-left:72px"><span style="font-size:12.0pt">&nbsp;&nbsp;&nbsp;&nbsp;<span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">var</span></span>&nbsp;<span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">o</span></span>&nbsp;<span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">=</span></span>&nbsp;<span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">{</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:maroon">"status"</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">:</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:red">9</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">};</span></span></span></p>
<p style="margin-left:72px"><span style="font-size:12.0pt"><span style="color:black">&nbsp;&nbsp;&nbsp;&nbsp;<span
                style="font-family:&quot;Comic Sans MS&quot;">jQuery.ajax({</span></span></span></p>
<p style="margin-left:72px"><span style="font-size:12.0pt">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">type:</span></span>&nbsp;<span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:maroon">"POST"</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">,</span></span>&nbsp; <span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:#70ad47">//</span></span><span
            style="font-family:&quot;Microsoft YaHei UI&quot;"><span style="color:#70ad47">请求方式为</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:#70ad47">POST</span></span><span
            style="font-family:&quot;Microsoft YaHei UI&quot;"><span style="color:#70ad47">方式</span></span></span></p>
<p style="margin-left:72px"><span style="font-size:12.0pt">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">url:</span></span>&nbsp;<span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:maroon">"</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:maroon">/ajax-return</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:maroon">"</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">,</span></span></span></p>
<p style="margin-left:72px"><span style="font-size:12.0pt"><span
            style="color:black">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
                style="font-family:&quot;Comic Sans MS&quot;">xhrFields:{</span></span></span></p>
<p style="margin-left:72px"><span style="font-size:12.0pt"><span
            style="color:black">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
                style="font-family:&quot;Comic Sans MS&quot;">withCredentials:true</span></span></span></p>
<p style="margin-left:72px"><span style="font-size:12.0pt"><span
            style="color:black">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
                style="font-family:&quot;Comic Sans MS&quot;">},</span></span></span></p>
<p style="margin-left:72px"><span style="font-size:12.0pt"><span
            style="color:black">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
                style="font-family:&quot;Comic Sans MS&quot;">data:</span>&nbsp;<span
                style="font-family:&quot;Comic Sans MS&quot;">JSON.stringify(o),</span></span></span></p>
<p style="margin-left:72px"><span style="font-size:12.0pt">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
            style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:black">contentType:</span></span>&nbsp;<span
            style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:maroon">"application/json"</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">,</span></span>&nbsp;&nbsp;&nbsp;
        <span style="font-family:&quot;Comic Sans MS&quot;"><span style="color:#70ad47">//</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:#70ad47">Content-Type</span></span><span
            style="font-family:&quot;Microsoft YaHei UI&quot;"><span style="color:#70ad47">必需是</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#70ad47">application/json</span></span></span></p>
<p style="margin-left:72px"><span style="font-size:12.0pt">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">dataType:</span></span>&nbsp;<span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:maroon">"json"</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">,</span></span> <span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:#70ad47">&nbsp;//</span></span><span
            style="font-family:&quot;Microsoft YaHei UI&quot;"><span style="color:#70ad47">如果传入的是</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:#70ad47">String</span></span><span
            style="font-family:&quot;Microsoft YaHei UI&quot;"><span style="color:#70ad47">对象，则数据类型为</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:#70ad47">text</span></span></span></p>
<p style="margin-left:72px"><span style="font-size:12.0pt"><span
            style="color:black">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
                style="font-family:&quot;Comic Sans MS&quot;">async:</span>&nbsp;<span
                style="font-family:&quot;Comic Sans MS&quot;">false,</span></span></span></p>
<p style="margin-left:72px"><span style="font-size:12.0pt"><span
            style="color:black">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
                style="font-family:&quot;Comic Sans MS&quot;">success:function</span>&nbsp;<span
                style="font-family:&quot;Comic Sans MS&quot;">(data)</span>&nbsp;<span
                style="font-family:&quot;Comic Sans MS&quot;">{</span></span></span></p>
<p style="margin-left:72px"><span style="font-size:12.0pt"><span
            style="color:black">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
                style="font-family:&quot;Comic Sans MS&quot;">console.log(data);</span></span></span></p>
<p style="margin-left:72px"><span style="font-size:12.0pt"><span
            style="color:black">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
                style="font-family:&quot;Comic Sans MS&quot;">},</span></span></span></p>
<p style="margin-left:72px"><span style="font-size:12.0pt"><span
            style="color:black">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;<span
                style="font-family:&quot;Comic Sans MS&quot;">error:</span>&nbsp;<span
                style="font-family:&quot;Comic Sans MS&quot;">function(res){</span></span></span></p>
<p style="margin-left:72px"><span style="font-size:12.0pt"><span
            style="color:black">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
                style="font-family:&quot;Comic Sans MS&quot;">console.log(res);</span></span></span></p>
<p style="margin-left:72px"><span style="font-size:12.0pt"><span
            style="color:black">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
                style="font-family:&quot;Comic Sans MS&quot;">}</span></span></span></p>
<p style="margin-left:72px"><span style="font-size:12.0pt"><span style="color:black">&nbsp;&nbsp;&nbsp;&nbsp;<span
                style="font-family:&quot;Comic Sans MS&quot;">});</span></span></span></p>
<p style="margin-left:72px"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:black">}</span></span></span></p>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                style="color:#70ad47">&nbsp;</span></span></span></p>
<p><span style="font-size:13.5pt"><strong><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">返回</span></strong><strong><span
                style="font-family:&quot;Comic Sans MS&quot;">void</span></strong></span></p>
<p style="margin-left:36px"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Microsoft YaHei UI&quot;">不返回任何参数，通过</span><span
            style="font-family:&quot;Comic Sans MS&quot;">ObjectMapper</span><span
            style="font-family:&quot;Microsoft YaHei UI&quot;">对象转换</span><span
            style="font-family:&quot;Comic Sans MS&quot;">Json</span><span
            style="font-family:&quot;Microsoft YaHei UI&quot;">，</span><span
            style="font-family:&quot;Comic Sans MS&quot;">PrintWriter</span><span
            style="font-family:&quot;Microsoft YaHei UI&quot;">对象输出到</span><span
            style="font-family:&quot;Comic Sans MS&quot;">ajax, </span><span
            style="font-family:&quot;Microsoft YaHei UI&quot;">此方法已很少使用</span></span></p>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                style="color:#70ad47"><strong>示例</strong></span></span></span></p>
<p style="margin-left:36px"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:blue">public</span></span>&nbsp;<span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:blue">class</span></span>&nbsp;<span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:black">UserController</span></span>&nbsp;<span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">{</span></span></span></p>
<p style="margin-left:72px"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#ffc000">@RequestMapping</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">(</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:#78230c">"</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:maroon">/ajax-return</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:#78230c">"</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:#78230c">)</span></span>&nbsp;&nbsp;</span>
</p>
<p style="margin-left:72px"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#ffc000">@ResponseBody</span></span></span></p>
<p style="margin-left:72px"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:blue">public</span></span>&nbsp;<span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:black">void</span></span>&nbsp;<span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:black">returnAjax</span></span><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:black">(HttpServletResponse</span></span>&nbsp;<span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">response</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">, User user</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">){</span></span></span></p>
<p style="margin-left:108px"><span style="font-size:12.0pt"><span style="color:#70ad47"><span
                style="font-family:&quot;Comic Sans MS&quot;">//</span><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">将对象转换为</span><span
                style="font-family:&quot;Comic Sans MS&quot;">json</span></span></span></p>
<p style="margin-left:108px"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:black">ObjectMapper om = </span><span style="color:#78230c">new</span><span
                style="color:black"> ObjectMapper();</span></span></span></p>
<p style="margin-left:108px"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:black">String json = om.writeValueAsString(user);</span></span></span></p>
<p style="margin-left:108px"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:black">&nbsp;</span></span></span></p>
<p style="margin-left:108px"><span style="font-size:12.0pt"><span style="color:#70ad47"><span
                style="font-family:&quot;Comic Sans MS&quot;">//</span><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">返回</span><span
                style="font-family:&quot;Comic Sans MS&quot;">json</span><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">，相应</span><span
                style="font-family:&quot;Comic Sans MS&quot;">ajax</span></span></span></p>
<p style="margin-left:108px"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:black">response.setContentType("application/json;charset-utf-8");</span></span></span></p>
<p style="margin-left:108px"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:black">PrintWriter pw = response.getWriter();</span></span></span></p>
<p style="margin-left:108px"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:black">pw.println(json);</span></span></span></p>
<p style="margin-left:108px"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:black">pw.flush();</span></span></span></p>
<p style="margin-left:108px"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:black">pw.close();</span></span></span></p>
<p style="margin-left:72px"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:black">}</span></span></span></p>
<table summary="" cellspacing="0"
    style="border-collapse:collapse; border-color:#a3a3a3; border-style:solid; border-width:0px; margin-left:32px"
    class=" cke_show_border">
    <tbody>
        <tr>
            <td
                style="background-color:white; border-bottom:0px; border-left:0px; border-right:0px; border-top:0px; vertical-align:top; width:.6381in">
                <p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:black">}</span></span></span></p>
            </td>
        </tr>
    </tbody>
</table>
<p><span style="font-size:13.5pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">&nbsp;</span></span></p>
<p><span style="font-size:13.5pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">&nbsp;</span></span></p>
<p><span style="font-size:13.5pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">&nbsp;</span></span></p>
<p><span style="font-size:13.5pt"><span
            style="font-family:&quot;Microsoft YaHei UI&quot;"><strong>返回对象</strong></span></span></p>
<ul style="list-style-type:disc">
    <li><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">spring mvc</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">中返回对象，通过</span></span>
        <span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">HttpMessageConverter
            </span></span><span style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">接口接收数据并转换为</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">json</span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">或其他格式对象，做后响应到</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">Ajax</span></span></li>
</ul>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"></span></span><br></p>
<ul style="list-style-type:disc">
    <li><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">在</span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Comic Sans MS&quot;">dispatcher-servlet.xml</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">加入注解驱动</span></span></li>
</ul>
<p style="margin-left:36px"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Microsoft YaHei UI&quot;">&nbsp;</span></span></p>
<p style="margin-left:72px"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">&lt;mvc:annotation-driven/&gt;</span></span></p>
<p style="margin-left:72px"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
<p style="margin-left:36px"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">s</span><span
            style="font-family:&quot;Comic Sans MS&quot;">pringmvc</span><span
            style="font-family:&quot;Microsoft YaHei UI&quot;">项目启动后，会创建</span><span
            style="font-family:&quot;Comic Sans MS&quot;">HttpMessageConveter</span><span
            style="font-family:&quot;Microsoft YaHei UI&quot;">接口的</span><span
            style="font-family:&quot;Comic Sans MS&quot;">7</span><span
            style="font-family:&quot;Microsoft YaHei UI&quot;">个实现类对象，和处理返回对象数据的自动转换的对象，</span><span
            style="font-family:&quot;Comic Sans MS&quot;">StringHttpMessageConverter </span><span
            style="font-family:&quot;Microsoft YaHei UI&quot;">和</span><span
            style="font-family:&quot;Comic Sans MS&quot;"> MappingJackson2HttpMessageConverter</span></span></p>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                style="color:#70ad47"><strong>示例</strong></span></span></span></p>
<p style="margin-left:36px"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:blue">public</span></span>&nbsp;<span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:blue">class</span></span>&nbsp;<span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:black">UserController</span></span>&nbsp;<span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">{</span></span></span></p>
<p style="margin-left:72px"><span style="font-size:12.0pt"><span style="color:#70ad47"><span
                style="font-family:&quot;Comic Sans MS&quot;">//</span><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">返回</span><span
                style="font-family:&quot;Comic Sans MS&quot;">List</span><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">或者实体类对象</span></span></span></p>
<p style="margin-left:72px"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#ffc000">@RequestMapping</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">(</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:#78230c">"</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:maroon">/ajax-return</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:#78230c">"</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:#78230c">)</span></span>&nbsp;&nbsp;</span>
</p>
<p style="margin-left:72px"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#ffc000">@ResponseBody</span></span></span></p>
<p style="margin-left:72px"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:blue">public</span></span>&nbsp;<span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:black">Student</span></span>&nbsp;<span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:black">returnAjax</span></span><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:black">(HttpServletResponse</span></span>&nbsp;<span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">response</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">, User user</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">){</span></span></span></p>
<p style="margin-left:108px"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:black">return user;</span></span></span></p>
<p style="margin-left:72px"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:black">}</span></span></span></p>
<p style="margin-left:72px"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:black">&nbsp;</span></span></span></p>
<p style="margin-left:72px"><span style="font-size:12.0pt"><span style="color:#70ad47"><span
                style="font-family:&quot;Comic Sans MS&quot;">//</span><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">返回</span><span
                style="font-family:&quot;Comic Sans MS&quot;">String</span><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">类型对象</span><span
                style="font-family:&quot;Comic Sans MS&quot;">,</span><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">需要在</span><span
                style="font-family:&quot;Comic Sans MS&quot;">RequestMapping</span><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">中使用</span><span
                style="font-family:&quot;Comic Sans MS&quot;">produces</span><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">设置编码，防止乱码</span></span></span></p>
<p style="margin-left:72px"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#ffc000">@RequestMapping</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">(</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">value=</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:#78230c">"</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:maroon">/ajax-return</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:#78230c">", </span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:#24292e">produces</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#24292e">="text/plain;charset=utf-8"</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:#78230c">)</span></span>&nbsp;&nbsp;</span>
</p>
<p style="margin-left:72px"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#ffc000">@ResponseBody</span></span></span></p>
<p style="margin-left:72px"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:blue">public</span></span>&nbsp;<span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:black">Student</span></span>&nbsp;<span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:black">returnAjax</span></span><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:black">(HttpServletResponse</span></span>&nbsp;<span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">response){</span></span></span></p>
<p style="margin-left:108px"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:black">return </span></span><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#78230c">"ajax</span></span><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                style="color:#78230c">响应数据</span></span><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#78230c">"</span></span><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:black">;</span></span></span></p>
<p style="margin-left:72px"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:black">}</span></span></span></p>
<table summary="" cellspacing="0"
    style="border-collapse:collapse; border-color:#a3a3a3; border-style:solid; border-width:0px; margin-left:32px"
    class=" cke_show_border">
    <tbody>
        <tr>
            <td
                style="background-color:white; border-bottom:0px; border-left:0px; border-right:0px; border-top:0px; vertical-align:top; width:.6381in">
                <p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:black">}</span></span></span></p>
            </td>
        </tr>
    </tbody>
</table>
