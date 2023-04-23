---
categories:
  - Spring
tags:
  - ［@RequestBody］
date:
  - 2022-11-28 14:21:47
---

<ul style="list-style-type:disc">
    <li><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">@RequestBody
            </span></span><span style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">用在方法参数上面，用来将请求参数绑定到</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">request body</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">中，通过</span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Comic Sans MS&quot;">HttpMessageConverter</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">封装为具体的</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">JavaBean</span></span></li>
</ul>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">​​​​​​​</span></span><br></p>
<ul style="list-style-type:disc">
    <li><span style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">在当前对象获取整个</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">http</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">请求的</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">body</span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">里面的所有数据，因此</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">spring</span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">就不可能将这个数据强制包装成</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">Course</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">或者</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">List</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">类型，并且从</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">@requestbody</span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">设计上来说，只获取一次就可以拿到请求</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">body</span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">里面的所有数据，就没必要出现有多个</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">@requestbody</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">出现在</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">controller</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">的函数的形参列表当中</span></span>
    </li>
</ul>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                style="color:#24292e"><strong>语法</strong></span></span></span></p>
<p style="margin-left:36px"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#24292e">@RequestBody(required=true)</span></span></span></p>
<table summary="" cellspacing="0"
    style="border-collapse:collapse; border-color:#a3a3a3; border-style:solid; border-width:1px; margin-left:32px"
    class=" cke_show_border">
    <tbody>
        <tr>
            <td
                style="background-color:black; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.1618in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:white"><strong>参数</strong></span></span></span></p>
            </td>
            <td
                style="background-color:black; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:5.8493in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:white"><strong>说明</strong></span></span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.1618in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:#333333">required</span></span></span></p>
            </td>
            <td
                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:5.8763in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">是否存在参数，默认是</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">true</span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">，表示请求中一定要有相应的参数，否则将报</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">404</span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">错误码</span></span></p>
            </td>
        </tr>
    </tbody>
</table>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
<ul style="list-style-type:disc">
    <li><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">使用</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">@RequestBody</span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">接收数据时，前端不能使用</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">GET</span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">方式提交数据，而是用</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">POST</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">方式进行提交。</span></span></li>
</ul>
<ul style="list-style-type:disc">
    <li><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">获取</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">ajax</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">的数据只能使用</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">post</span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">请求，同时异步方式只能是</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">$.ajax()</span></span></li>
</ul>
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
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:#78230c">/testValid</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:#78230c">"</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:#78230c">)</span></span>&nbsp;&nbsp;</span>
</p>
<p style="margin-left:72px"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#ffc000">@ResponseBody</span></span></span></p>
<p style="margin-left:72px"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:blue">public</span></span>&nbsp;<span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:black">Object</span></span>&nbsp;<span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:black">setOrderInfo(</span></span><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#ffc000">@RequestBody</span></span>&nbsp;<span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">InfoVO</span></span>&nbsp;<span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">infoVO,</span></span>&nbsp;<span
            style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:black">HttpServletRequest</span></span>&nbsp;<span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">request,</span></span>&nbsp;<span
            style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:black">HttpServletResponse</span></span>&nbsp;<span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">response){</span></span></span></p>
<p style="margin-left:72px"><span style="font-size:12.0pt"><span style="color:black">&nbsp;&nbsp;&nbsp;&nbsp;<span
                style="font-family:&quot;Comic Sans MS&quot;">InfoVO</span>&nbsp;<span
                style="font-family:&quot;Comic Sans MS&quot;">cVo</span>&nbsp;<span
                style="font-family:&quot;Comic Sans MS&quot;">=</span>&nbsp;<span
                style="font-family:&quot;Comic Sans MS&quot;">getInfoVo(infoVO);</span></span></span></p>
<p style="margin-left:72px"><span style="font-size:12.0pt">&nbsp;&nbsp;&nbsp;&nbsp;<span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:blue">return</span></span>&nbsp;<span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:#78230c">"</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:#78230c">success</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:#78230c">"</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">;</span></span></span></p>
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
<p style="margin-left:36px"><span style="font-size:12.0pt"><span style="font-family:SimSun"><span
                style="color:#ed7d31">&nbsp;</span></span></span></p>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
