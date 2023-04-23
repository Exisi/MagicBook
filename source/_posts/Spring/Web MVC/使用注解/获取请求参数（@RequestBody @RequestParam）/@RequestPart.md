---
categories:
  - Spring
tags:
  - ［@RequestPart］
date:
  - 2022-11-28 14:22:51
---

<ul style="list-style-type:disc">
    <li><span style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">前端接口上传文件的时候，通常会将请求</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">header</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">的</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">content-type</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">设置为</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">:multipart/form-data,
            </span></span><span style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">或者</span></span><span style="font-size:12.0pt"><span
                style="font-family:&quot;Comic Sans MS&quot;">form</span></span><span style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">表单提交的时候将</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">enctype</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">设置为</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">"multipart/form-data"
            </span></span><span style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">。后端收到请求时由于请求体有</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">@RequestBody
            </span></span><span style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">注解标识，通常会用</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">application/json,
                application/xml</span></span><span style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">处理</span></span><span style="font-size:12.0pt"><span
                style="font-family:&quot;Comic Sans MS&quot;">content-type</span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">，此时会报编码格式的问题。</span></span></li>
</ul>
<p style="margin-left:36px"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#111111">&nbsp;</span></span></span></p>
<ul style="list-style-type:disc">
    <li><span style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">这时候可以使用</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">@RequestPart</span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">参数来接收实体对象，</span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Comic Sans MS&quot;">@RequestParam</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">来单个接收参数。</span></span>
    </li>
</ul>
<p style="margin-left:36px"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Microsoft YaHei UI&quot;"><span style="color:#111111">&nbsp;</span></span></span>
</p>
<ul style="list-style-type:disc">
    <li><span style="font-size:12.0pt"><span
                style="font-family:&quot;Comic Sans MS&quot;">@RequestPart</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">这个注解用在</span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Comic Sans MS&quot;">multipart/form-data</span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">表单提交请求的方法上。</span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Comic Sans MS&quot;">@RequestParam</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">也同样支持</span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Comic Sans MS&quot;">multipart/form-data</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">请求。</span></span></li>
</ul>
<p style="margin-left:36px"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Microsoft YaHei UI&quot;"><span style="color:#111111">&nbsp;</span></span></span>
</p>
<ul style="list-style-type:disc">
    <li><span style="font-size:12.0pt"><span
                style="font-family:&quot;Comic Sans MS&quot;">@RequestParam</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">和</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">@RequestPart</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">的区别是：</span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Comic Sans MS&quot;">@RequestParam</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">适用于</span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Comic Sans MS&quot;">name-valueString</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">类型的请求域，</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">@RequestPart</span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">适用于复杂的请求域（像</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">JSON</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">，</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">XML</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">）</span></span></li>
</ul>
<p style="margin-left:36px"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Microsoft YaHei UI&quot;"><span style="color:#111111">&nbsp;</span></span></span>
</p>
<table summary="" cellspacing="0"
    style="border-collapse:collapse; border-color:#a3a3a3; border-style:solid; border-width:1px; margin-left:32px"
    class=" cke_show_border">
    <tbody>
        <tr>
            <td
                style="background-color:black; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:.8368in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:white"><strong>参数</strong></span></span></span></p>
            </td>
            <td
                style="background-color:black; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:7.2652in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:white"><strong>说明</strong></span></span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:.8368in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;">value</span></span></p>
            </td>
            <td
                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:7.2652in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">绑定的参数名称，参数值为</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">String</span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">类型。</span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:.8368in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Comic Sans MS&quot;">name</span></span>
                </p>
            </td>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:7.2868in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">绑定的参数名称，参数值为</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">String</span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">类型。</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">name</span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">和</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">value</span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">可以同时使用，但两者的值需一致，否则会出现错误。</span></span>
                </p>
            </td>
        </tr>
        <tr>
            <td
                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:.8458in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;">required</span></span></p>
            </td>
            <td
                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:7.2555in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">请求头中是否必须包含指定的值，默认值为</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">true</span></span></p>
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;">required</span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">为</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">true</span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">时，如果请求头中缺少指定的值，则会抛出异常。</span></span></p>
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;">required</span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">为</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">false</span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">时，如果请求头中缺少指定的值，则会返回</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">null</span></span></p>
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
                style="background-color:white; border-bottom:0px; border-left:0px; border-right:0px; border-top:0px; vertical-align:top; width:8.3305in">
                <p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:#ffc000">@PostMapping</span><span style="color:black">(</span><span
                                style="color:maroon">"/updateGoods"</span><span
                                style="color:black">)</span></span></span></p>
                <p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:#ffc000">@ResponseBody</span></span></span></p>
                <p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">public</span></span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:#8000ff">void</span></span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:black">updateGoods(@RequestPart(</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:maroon">"goods"</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:black">)</span></span>&nbsp;&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:black">Goods</span></span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:black">good,</span></span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:black">@RequestPart(</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:maroon">"file"</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:black">)</span></span>&nbsp;&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:black">MultipartFile</span></span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:black">file)</span></span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:black">{</span></span></span></p>
                <p><span style="font-size:12.0pt"><span style="color:black">&nbsp;&nbsp;&nbsp;&nbsp;<span
                                style="font-family:&quot;Comic Sans MS&quot;">...</span></span></span></p>
                <p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:black">}</span></span></span></p>
            </td>
        </tr>
    </tbody>
</table>
