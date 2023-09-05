---
categories:
  - Spring
tags:
  - ［@RequestParam］
date:
  - 2022-6-28 14:20:37
---

<ul style="list-style-type:disc">
    <li><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                    style="color:#24292e">@RequestParam</span></span></span><span style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                    style="color:#24292e">用在参数上，用于获取请求中的参数，并将获取的参数值进行类型转换为</span></span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                    style="color:black">数组、集合、对象等</span></span></span></li>
</ul>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                style="color:#24292e"><strong>语法</strong></span></span></span></p>
<p style="margin-left:36px"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#24292e">@RequestParam([value=</span></span><span
            style="font-family:&quot;Microsoft YaHei UI&quot;"><span style="color:#24292e">”</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:#70ad47">number</span></span><span
            style="font-family:&quot;Microsoft YaHei UI&quot;"><span style="color:#24292e">”</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:#24292e">], [required=false])&nbsp; String
            </span></span><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#70ad47">number</span></span><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#24292e">)</span></span></span></p>
<table summary="" cellspacing="0"
    style="border-collapse:collapse; border-color:#a3a3a3; border-style:solid; border-width:1px; margin-left:32px"
    class=" cke_show_border">
    <tbody>
        <tr>
            <td
                style="background-color:black; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.4784in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:white"><strong>参数</strong></span></span></span></p>
            </td>
            <td
                style="background-color:black; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:5.0659in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:white"><strong>说明</strong></span></span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.4784in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:#333333">value</span></span></span></p>
            </td>
            <td
                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:5.0659in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:#333333">映射的参数名</span></span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.4784in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:#333333">defaultValue</span></span></span></p>
            </td>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:5.0659in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">如果没有传入参数<span
                                style="color:#333333">，则默认传递的值</span></span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.4784in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:#333333">required</span></span></span></p>
            </td>
            <td
                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:5.1048in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">是否存在参数，默认是</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">true</span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">，表示请求中一定要有相应的参数，否则将报</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">404</span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">错误码</span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.4784in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:#333333">defaultValue</span></span></span></p>
            </td>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:5.0659in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">设置映射为空时，参数的默认值</span></span></p>
            </td>
        </tr>
    </tbody>
</table>
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
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:#78230c">/test</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:#78230c">"</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">)</span></span>&nbsp;&nbsp;</span>
</p>
<p style="margin-left:72px"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:blue">public</span></span>&nbsp;<span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:black">Object</span></span>&nbsp;<span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:black">getValue</span></span><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:black">(</span></span><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#ffc000">@Request</span></span><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#ffc000">Param(value="name")</span></span>&nbsp;<span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">String name</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">){</span></span></span></p>
<p style="margin-left:72px"><span style="font-size:12.0pt">&nbsp;&nbsp;&nbsp;&nbsp;<span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:blue">return</span></span>&nbsp;<span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">name</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">;</span></span></span></p>
<p style="margin-left:72px"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:black">}</span></span></span></p>
<p style="margin-left: 40px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#24292e">}</span></span></span></p>
