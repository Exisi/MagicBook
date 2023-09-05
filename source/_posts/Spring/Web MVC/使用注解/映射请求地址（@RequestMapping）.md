---
categories:
  - Spring
tags:
  - ［@RequestMapping］
date:
  - 2022-6-28 14:18:07
---

<p style="margin-left:36px"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                style="color:#24292e">处理映射请求地址为完整地址的注解。</span></span></span></p>
<ul style="list-style-type: disc; margin-left: 40px;">
    <li><span style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">用于类上，表示类中的所有响应请求方法的公共路径前缀。</span></span></li>
    <li><span style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">用于方法上，表示方法的请求地址</span></span></li>
</ul>
<table summary="" cellspacing="0"
    style="border-collapse:collapse; border-color:#a3a3a3; border-style:solid; border-width:1px; margin-left:32px"
    class=" cke_show_border">
    <tbody>
        <tr>
            <td
                style="background-color:black; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.0527in">
                <p><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:white"><strong>参数</strong></span></span></span></p>
            </td>
            <td
                style="background-color:black; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:7.525in">
                <p><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:white"><strong>描述</strong></span></span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.0527in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:#24292e">value</span></span></span></p>
            </td>
            <td
                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:7.525in">
                <p><span style="font-size:11.5pt"><span style="color:#24292e"><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">指定请求的实际地址，指定的地址可以是</span><span
                                style="font-family:&quot;Comic Sans MS&quot;">URI Template </span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">模式，请求地址保存在列表中，可以指定多个地址，用逗号分隔；</span></span></span>
                </p>
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:#24292e">&nbsp;</span></span></span></p>
                <p><span style="font-size:11.5pt"><span style="color:#24292e"><span
                                style="font-family:&quot;Comic Sans MS&quot;">value</span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">的</span><span
                                style="font-family:&quot;Comic Sans MS&quot;">uri</span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">值为以下三类：</span></span></span></p>
                <ol style="list-style-type:decimal">
                    <li value="1"><span style="font-size:11.5pt"><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">可以指定为普通的具体值；如</span></span><span
                            style="font-size:11.5pt"><span
                                style="font-family:&quot;Comic Sans MS&quot;">@RequestMapping(value =</span></span><span
                            style="font-size:11.5pt"><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">”</span></span><span
                            style="font-size:11.5pt"><span
                                style="font-family:&quot;Comic Sans MS&quot;">/testValid</span></span><span
                            style="font-size:11.5pt"><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">”</span></span><span
                            style="font-size:11.5pt"><span style="font-family:&quot;Comic Sans MS&quot;">)</span></span>
                    </li>
                    <li><span style="font-size:11.5pt"><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">可以指定为含有某变量的一类值</span></span><span
                            style="font-size:11.5pt"><span
                                style="font-family:&quot;Comic Sans MS&quot;">;</span></span><span
                            style="font-size:11.5pt"><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">如</span></span><span
                            style="font-size:11.5pt"><span
                                style="font-family:&quot;Comic Sans MS&quot;">@RequestMapping(value=</span></span><span
                            style="font-size:11.5pt"><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">”</span></span><span
                            style="font-size:11.5pt"><span
                                style="font-family:&quot;Comic Sans MS&quot;">/{day}</span></span><span
                            style="font-size:11.5pt"><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">”</span></span><span
                            style="font-size:11.5pt"><span style="font-family:&quot;Comic Sans MS&quot;">)</span></span>
                    </li>
                    <li><span style="font-size:11.5pt"><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">可以指定为含正则表达式的一类值</span></span><span
                            style="font-size:11.5pt"><span
                                style="font-family:&quot;Comic Sans MS&quot;">;</span></span><span
                            style="font-size:11.5pt"><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">如</span></span><span
                            style="font-size:11.5pt"><span
                                style="font-family:&quot;Comic Sans MS&quot;">@RequestMapping(value=</span></span><span
                            style="font-size:11.5pt"><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">”</span></span><span
                            style="font-size:11.5pt"><span
                                style="font-family:&quot;Comic Sans MS&quot;">/{textualPart:[a-z-]+}.{numericPart:[\d]+}</span></span><span
                            style="font-size:11.5pt"><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">”</span></span><span
                            style="font-size:11.5pt"><span style="font-family:&quot;Comic Sans MS&quot;">)
                            </span></span><span style="font-size:11.5pt"><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">可以匹配</span></span><span
                            style="font-size:11.5pt"><span
                                style="font-family:&quot;Comic Sans MS&quot;">../chenyuan122912</span></span><span
                            style="font-size:11.5pt"><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">请求。</span></span></li>
                </ol>
            </td>
        </tr>
        <tr>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.0527in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:#24292e">method</span></span></span></p>
            </td>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:7.525in">
                <p><span style="font-size:11.5pt"><span style="color:#24292e"><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">指定请求的</span><span
                                style="font-family:&quot;Comic Sans MS&quot;">method</span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">类型，</span><span
                                style="font-family:&quot;Comic Sans MS&quot;"> GET</span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">、</span><span
                                style="font-family:&quot;Comic Sans MS&quot;">POST</span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">、</span><span
                                style="font-family:&quot;Comic Sans MS&quot;">PUT</span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">、</span><span
                                style="font-family:&quot;Comic Sans MS&quot;">DELETE</span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">等</span></span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="background-color:white; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.0527in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:#24292e">consumes</span></span></span></p>
            </td>
            <td
                style="background-color:white; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:7.525in">
                <p><span style="font-size:11.5pt"><span style="color:#24292e"><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">指定处理请求的提交内容类型（</span><span
                                style="font-family:&quot;Comic Sans MS&quot;">Content-Type</span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">），例如</span><span
                                style="font-family:&quot;Comic Sans MS&quot;">@RequestMapping(value = </span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">”</span><span
                                style="font-family:&quot;Comic Sans MS&quot;">/test</span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">”</span><span
                                style="font-family:&quot;Comic Sans MS&quot;">, consumes=</span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">”</span><span
                                style="font-family:&quot;Comic Sans MS&quot;">application/json</span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">”</span><span
                                style="font-family:&quot;Comic Sans MS&quot;">)</span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">处理</span><span
                                style="font-family:&quot;Comic Sans MS&quot;">application/json</span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">内容类型</span></span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.0527in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:#24292e">produces</span></span></span></p>
            </td>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:7.525in">
                <p><span style="font-size:11.5pt"><span style="color:#24292e"><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">指定返回的内容类型，仅当</span><span
                                style="font-family:&quot;Comic Sans MS&quot;">request</span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">请求头中的</span><span
                                style="font-family:&quot;Comic Sans MS&quot;">(Accept)</span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">类型中包含该指定类型才返回；</span></span></span>
                </p>
            </td>
        </tr>
        <tr>
            <td
                style="background-color:white; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.0527in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:#24292e">params</span></span></span></p>
            </td>
            <td
                style="background-color:white; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:7.525in">
                <p><span style="font-size:11.5pt"><span style="color:#24292e"><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">指定</span><span
                                style="font-family:&quot;Comic Sans MS&quot;">request</span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">中必须包含某些参数值是，才让该方法处理</span></span></span>
                </p>
            </td>
        </tr>
        <tr>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.0527in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:#24292e">headers</span></span></span></p>
            </td>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:7.525in">
                <p><span style="font-size:11.5pt"><span style="color:#24292e"><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">&nbsp;指定</span><span
                                style="font-family:&quot;Comic Sans MS&quot;">request</span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">中必须包含某些指定的</span><span
                                style="font-family:&quot;Comic Sans MS&quot;">header</span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">值，才能让该方法处理请求</span></span></span></p>
            </td>
        </tr>
    </tbody>
</table>
<p style="margin-left:36px"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Microsoft YaHei UI&quot;"><span style="color:#70ad47">&nbsp;</span></span></span>
</p>
<p style="margin-left: 36px;"><span style="font-size:11.5pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">@RequestMpapping</span><span
            style="font-family:&quot;Microsoft YaHei UI&quot;">有以下衍生注解：</span></span></p>
<table summary="" cellspacing="0"
    style="border-collapse:collapse; border-color:#a3a3a3; border-style:solid; border-width:1px; margin-left:32px"
    class=" cke_show_border">
    <tbody>
        <tr>
            <td
                style="background-color:black; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.7715in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:white"><strong>衍生注解</strong></span></span></span></p>
            </td>
            <td
                style="background-color:black; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:6.7548in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:white"><strong>说明</strong></span></span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.7715in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;">@GetMapping</span></span></p>
            </td>
            <td
                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:6.7548in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Comic Sans MS&quot;">Get</span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">请求，等价于</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">@RequestMapping(method =
                            RequestMethod.GET)</span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.7715in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;">@PostMapping</span></span></p>
            </td>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:6.7548in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Comic Sans MS&quot;">Post</span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">请求，等价于</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">@RequestMapping(method =
                            RequestMethod.POST)</span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.7715in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;">@PutMpapping</span></span></p>
            </td>
            <td
                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:6.7548in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Comic Sans MS&quot;">Put</span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">请求，等价于</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">@RequestMapping(method =
                            RequestMethod.</span><span style="font-family:&quot;Comic Sans MS&quot;">PUT</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">)</span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.7715in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;">@DeleteMpapping</span></span></p>
            </td>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:6.7548in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Comic Sans MS&quot;">Delete</span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">请求，等价于</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">@RequestMapping(method =
                            RequestMethod.</span><span style="font-family:&quot;Comic Sans MS&quot;">DELETE</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">)</span></span></p>
            </td>
        </tr>
    </tbody>
</table>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                style="color:#70ad47"><strong>示例</strong></span></span></span></p>
<p style="margin-left: 40px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#ffc000">@RequestMapping</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:#24292e">("/</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:#24292e">index</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:#24292e">")&nbsp; </span></span><br><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:blue">public</span></span>&nbsp;<span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:#8000ff">void</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:#24292e"> findOrd(String name)
                {&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></span></span></p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#70ad47">// implementation omitted&nbsp; </span></span></span></p>
<p style="margin-left: 40px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#24292e">}</span></span></span></p>
<p style="margin-left:36px"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Microsoft YaHei UI&quot;"><span style="color:#70ad47">&nbsp;</span></span></span>
</p>
<p style="margin-left: 40px;"><span style="font-size:12.0pt"><span style="color:#70ad47"><span
                style="font-family:&quot;Comic Sans MS&quot;">//</span><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">仅处理请求中包含了名为“</span><span
                style="font-family:&quot;Comic Sans MS&quot;">name</span><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">”，值为“</span><span
                style="font-family:&quot;Comic Sans MS&quot;">zhangsan</span><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">”的请求</span></span></span></p>
<p style="margin-left: 40px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#ffc000">@RequestMapping</span><span style="color:#24292e">(value = "</span><span
                style="color:#24292e">user</span><span style="color:#24292e">/</span><span
                style="color:#24292e">login</span><span style="color:#24292e">", method = RequestMethod.GET,
                params="name=</span><span style="color:#24292e">zhangsan</span><span
                style="color:#24292e">")</span></span></span></p>
<p style="margin-left: 40px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:blue">public</span></span>&nbsp;<span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#8000ff">void</span></span><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#24292e"> findOrd(String name) {&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></span></span></p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#70ad47">// implementation omitted&nbsp; </span></span></span></p>
<p style="margin-left: 40px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#24292e">}</span></span></span></p>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#24292e">&nbsp;</span></span></span></p>
<p style="margin-left:36px"><span style="font-size:12.0pt"><span style="color:#70ad47"><span
                style="font-family:&quot;Comic Sans MS&quot;">//</span><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">仅处理</span><span
                style="font-family:&quot;Comic Sans MS&quot;">request</span><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">的</span><span
                style="font-family:&quot;Comic Sans MS&quot;">header</span><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">中包含了指定“</span><span
                style="font-family:&quot;Comic Sans MS&quot;">Refer</span><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">”请求头和对应值为“</span><span
                style="font-family:&quot;Comic Sans MS&quot;">www.baidu.com</span><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">”的请求</span></span></span></p>
<p style="margin-left: 40px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#ffc000">@RequestMapping</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:#24292e">(value = "</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:#24292e">user</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:#24292e">/</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:#24292e">register</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:#24292e">", method = RequestMethod.GET,
                headers="Referer=www.baidu.com")&nbsp; </span></span><br><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:blue">public</span></span>&nbsp;<span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:#8000ff">void</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:#24292e"> findOrd(String name)
                {&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></span></span></p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#70ad47">// implementation omitted&nbsp; </span></span></span></p>
<p style="margin-left: 40px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#24292e">}</span></span></span></p>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                style="color:#70ad47"><strong>示例</strong></span></span></span></p>
<p style="margin-left:36px"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#ffc000">@Controller</span></span></span></p>
<p style="margin-left:36px"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#ffc000">@RequestMapping</span><span style="color:#24292e">(</span><span
                style="color:#24292e">"/user")</span></span></span></p>
<p style="margin-left:36px"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:blue">public</span></span>&nbsp;<span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:blue">class</span></span>&nbsp;<span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:black">MainController</span></span>&nbsp;<span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">{</span></span></span></p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#ffc000">@RequestMapping</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:#24292e">(value = "/</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:#24292e">login</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:#24292e">", method = RequestMethod.GET,
                headers="Referer=www.baidu.com")&nbsp; </span></span><br><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:blue">public</span></span>&nbsp;<span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:#8000ff">void</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:#24292e"> findOrd(String name)
                {&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></span></span></p>
<p style="margin-left: 120px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#70ad47">// implementation omitted&nbsp; </span></span></span></p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#24292e">}</span></span></span></p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#ffc000">@RequestMapping</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:#24292e">(value = "/</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:#24292e">register</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:#24292e">", method = RequestMethod.GET,
                headers="Referer=www.baidu.com")&nbsp; </span></span><br><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:blue">public</span></span>&nbsp;<span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:#8000ff">void</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:#24292e"> findOrd(String name)
                {&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></span></span></p>
<p style="margin-left: 120px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#70ad47">// implementation omitted&nbsp; </span></span></span></p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#24292e">}</span></span></span></p>
<p style="margin-left:36px"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:black">}</span></span></span></p>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                style="color:#24292e">&nbsp;</span></span></span></p>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                style="color:#24292e">&nbsp;</span></span></span></p>
