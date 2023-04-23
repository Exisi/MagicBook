---
categories:
  - Spring
tags:
  - ［@PathVariable］
  - ［@RequestHeader］
  - ［@CookieValue］
date:
  - 2022-11-28 14:37:25
---

<ul style="list-style-type:disc">
    <li><span style="font-size:12.0pt"><span
                style="font-family:&quot;Comic Sans MS&quot;">@PathVariable</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">：处理</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">requet uri</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">部分</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">,</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">当使用</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">@RequestMapping URI template
            </span></span><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">样式映射时，
                即</span></span><span style="font-size:12.0pt"><span
                style="font-family:&quot;Comic Sans MS&quot;">someUrl/{paramId}, </span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">这时的</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">paramId</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">可通过</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">
                @Pathvariable</span></span><span style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">注解绑定它传过来的值到方法的参数上</span></span></li>
</ul>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                style="color:#24292e">&nbsp;</span></span></span></p>
<table summary="" cellspacing="0"
    style="border-collapse:collapse; border-color:#a3a3a3; border-style:solid; border-width:1px; margin-left:32px"
    class=" cke_show_border">
    <tbody>
        <tr>
            <td
                style="background-color:black; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:.827in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:white"><strong>参数</strong></span></span></span></p>
            </td>
            <td
                style="background-color:black; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:2.1604in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:white"><strong>描述</strong></span></span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:.827in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:#24292e">name</span></span></span></p>
            </td>
            <td
                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:2.1604in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">要绑定到的路径变量的名称</span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:.827in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:#24292e">value</span></span></span></p>
            </td>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:2.1604in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Comic Sans MS&quot;">name</span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">参数的别名</span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:.8458in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;">required</span></span></p>
            </td>
            <td
                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:2.2104in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">是否需要路径变量。默认</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">true</span></span></p>
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
                style="background-color:white; border-bottom:0px; border-left:0px; border-right:0px; border-top:0px; vertical-align:top; width:7.2722in">
                <p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:#ffc000">@Controller</span></span></span></p>
                <p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:#ffc000">@RequestMapping</span><span style="color:#24292e">("/owners/{a}")
                            </span></span></span></p>
                <p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">public</span></span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">class</span></span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:black">RelativePathUriTemplateController{</span></span></span></p>
                <p><span style="font-size:12.0pt">&nbsp;&nbsp;&nbsp;&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:#ffc000">@RequestMapping</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">(</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:maroon">"/pets/{b}"</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:black">)</span></span></span></p>
                <p><span style="font-size:12.0pt">&nbsp;&nbsp;&nbsp;&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">public</span></span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:#8000ff">void</span></span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:black">findPet(</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:#ffc000">@PathVariable</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">(</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:maroon">"a"</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:black">)</span></span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:#8000ff">String</span></span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:black">a,</span></span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:#ffc000">@PathVariable</span></span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:#8000ff">String</span></span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:black">b,</span></span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:black">Model</span></span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:black">model)</span></span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:black">{</span></span></span></p>
                <p><span style="font-size:12.0pt">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:green">//</span></span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:green">implementation</span></span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:green">omitted</span></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></p>
                <p><span style="font-size:12.0pt"><span style="color:black">&nbsp;&nbsp;&nbsp;&nbsp;<span
                                style="font-family:&quot;Comic Sans MS&quot;">}</span></span></span></p>
                <p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:black">}</span></span></span></p>
                <p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:black">&nbsp;</span></span></span></p>
            </td>
        </tr>
    </tbody>
</table>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#24292e">&nbsp;</span></span></span></p>
<ul style="list-style-type:disc">
    <li><span style="font-size:12.0pt"><span
                style="font-family:&quot;Comic Sans MS&quot;">@RequestHeader</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">用于获取请求头</span></span></li>
</ul>
<table summary="" cellspacing="0"
    style="border-collapse:collapse; border-color:#a3a3a3; border-style:solid; border-width:1px; margin-left:32px"
    class=" cke_show_border">
    <tbody>
        <tr>
            <td
                style="background-color:black; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.1395in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:white"><strong>参数</strong></span></span></span></p>
            </td>
            <td
                style="background-color:black; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:2.1604in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:white"><strong>描述</strong></span></span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.1395in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:#24292e">name</span></span></span></p>
            </td>
            <td
                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:2.1604in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">要绑定到的请求头的名称</span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.1395in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:#24292e">value</span></span></span></p>
            </td>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:2.1604in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Comic Sans MS&quot;">name</span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">参数的别名</span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.1395in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;">required</span></span></p>
            </td>
            <td
                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:2.2298in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">是否需要路径变量。默认</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">true</span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.159in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;">defaultValue</span></span></p>
            </td>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:2.1409in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">用作备用的默认值</span></span></p>
            </td>
        </tr>
    </tbody>
</table>
<p><span style="font-size:12.0pt"><span style="font-family:SimSun">&nbsp;</span></span></p>
<ul style="list-style-type:disc">
    <li><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">@CookieValue:
            </span></span><span style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">处理</span></span><span style="font-size:12.0pt"><span
                style="font-family:&quot;Comic Sans MS&quot;">request header</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"> cookie</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">部分的注解</span></span></li>
</ul>
<table summary="" cellspacing="0"
    style="border-collapse:collapse; border-color:#a3a3a3; border-style:solid; border-width:1px; margin-left:32px"
    class=" cke_show_border">
    <tbody>
        <tr>
            <td
                style="background-color:black; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.1395in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:white"><strong>参数</strong></span></span></span></p>
            </td>
            <td
                style="background-color:black; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:2.0041in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:white"><strong>描述</strong></span></span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.1395in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:#24292e">name</span></span></span></p>
            </td>
            <td
                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:2.0041in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">要绑定到的</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">Cookie</span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">的名称</span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.1395in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:#24292e">value</span></span></span></p>
            </td>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:2.0041in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Comic Sans MS&quot;">name</span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">参数的别名</span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.1395in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;">required</span></span></p>
            </td>
            <td
                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:2.0736in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">是否需要</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">Cookie</span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">。默认</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">true</span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.159in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;">defaultValue</span></span></p>
            </td>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.9847in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">用作备用的默认值</span></span></p>
            </td>
        </tr>
    </tbody>
</table>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                style="color:#70ad47"><strong>示例</strong></span></span></span></p>
<p><span style="font-size:12.0pt">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:#70ad47">//</span></span><span
            style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                style="color:#70ad47">将头部信息绑定到方法参数上</span></span><br>&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;<span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:#ffc000">@RequestMapping</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:#24292e">(</span></span><span
            style="font-family:&quot;Microsoft YaHei UI&quot;"><span style="color:#24292e">“</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:#24292e">/test</span></span><span
            style="font-family:&quot;Microsoft YaHei UI&quot;"><span style="color:#24292e">”</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#24292e">)&nbsp;&nbsp;<br>&nbsp;&nbsp;&nbsp; </span></span>&nbsp;&nbsp;&nbsp;&nbsp;<span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:blue">public</span></span>&nbsp;<span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:#8000ff">void</span></span>&nbsp;<span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:#24292e">
                displayHeaderInfo(</span></span><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#ffc000">@RequestHeader</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:#24292e">(</span></span><span
            style="font-family:&quot;Microsoft YaHei UI&quot;"><span style="color:#24292e">“</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:#24292e">Accept-Encoding</span></span><span
            style="font-family:&quot;Microsoft YaHei UI&quot;"><span style="color:#24292e">”</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:#24292e">) String
                encoding,&nbsp;&nbsp;<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </span></span><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#ffc000">@RequestHeader</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:#24292e">(</span></span><span
            style="font-family:&quot;Microsoft YaHei UI&quot;"><span style="color:#24292e">“</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:#24292e">Keep-Alive</span></span><span
            style="font-family:&quot;Microsoft YaHei UI&quot;"><span style="color:#24292e">”</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:#24292e">)long keepAlive)&nbsp;
                {&nbsp;&nbsp; </span></span></span></p>
<p style="margin-left: 40px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:black">}</span></span></span></p>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                style="color:#70ad47"><strong>示例</strong></span></span></span></p>
<p><span style="font-size:12.0pt">&nbsp; <span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#70ad47">&nbsp; &nbsp; &nbsp;//</span></span><span
            style="font-family:&quot;Microsoft YaHei UI&quot;"><span style="color:#70ad47">将</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:#70ad47">cookie</span></span><span
            style="font-family:&quot;Microsoft YaHei UI&quot;"><span style="color:#70ad47">里</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:#70ad47">JSESSIONID</span></span><span
            style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                style="color:#70ad47">绑定到方法参数上</span></span><br>&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;<span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:#ffc000">@RequestMapping</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:#24292e">("/test")&nbsp;
            </span></span></span></p>
<p style="margin-left: 40px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:blue">public</span></span>&nbsp;<span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#8000ff">void</span></span><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#24292e"> displayHeaderInfo(</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:#ffc000">@CookieValue</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:#24292e">("JSESSIONID") String
                cookie)&nbsp; { </span></span></span></p>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#24292e">&nbsp;</span></span></span></p>
<p style="margin-left:36px"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#24292e">}</span></span></span></p>
<ul style="list-style-type:disc">
    <li><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">@RequestParam, @RequestBody:
            </span></span><span style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">处理</span></span><span style="font-size:12.0pt"><span
                style="font-family:&quot;Comic Sans MS&quot;">request body</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">部分的注解</span></span></li>
</ul>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"></span></span><br></p>
<ul style="list-style-type:disc">
    <li><span style="font-size:12.0pt"><span
                style="font-family:&quot;Comic Sans MS&quot;">@SessionAttributes,@ModelAttribute</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">：处理</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">attribute</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">类型是注解</span></span></li>
</ul>
