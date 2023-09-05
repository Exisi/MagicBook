---
categories:
  - Spring Boot
tags:
  - ［@Conditional］
date:
  - 2022-9-28 15:16:54
---

<ul style="list-style-type:disc">
    <li><span style="font-size:12.0pt"><span
                style="font-family:&quot;Comic Sans MS&quot;">@Conditional</span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">注解可以根据代码中设置的条件装载不同的</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">bean</span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">，符合条件则加载该</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">bean</span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">，不符合则不加载该</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">bean</span></span></li>
</ul>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
<table summary="" cellspacing="0"
    style="border-collapse:collapse; border-color:#a3a3a3; border-style:solid; border-width:1px; margin-left:32px"
    class=" cke_show_border">
    <tbody>
        <tr>
            <td
                style="background-color:black; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.725in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:white"><strong>参数</strong></span></span></span></p>
            </td>
            <td
                style="background-color:black; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:2.9569in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:white"><strong>描述</strong></span></span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.725in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:#111111">value</span></span></span></p>
            </td>
            <td
                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:3.0263in">
                <p><span style="font-size:11.5pt"><span style="color:#111111"><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">指定注册的类</span><span
                                style="font-family:&quot;Comic Sans MS&quot;">class</span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">，默认为</span><span
                                style="font-family:&quot;Comic Sans MS&quot;">{}</span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">，即当前类</span></span></span></p>
            </td>
        </tr>
    </tbody>
</table>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
<ul style="list-style-type:disc">
    <li><span style="font-size:12.0pt"><span
                style="font-family:&quot;Comic Sans MS&quot;">@Conditional</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">注解衍生了以下子注解：</span></span>
    </li>
</ul>
<table summary="" cellspacing="0"
    style="border-collapse:collapse; border-color:#a3a3a3; border-style:solid; border-width:1px; margin-left:32px"
    class=" cke_show_border">
    <tbody>
        <tr>
            <td
                style="background-color:black; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:2.9729in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:white"><strong>子注解</strong></span></span></span></p>
            </td>
            <td
                style="background-color:black; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:4.1833in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:white"><strong>说明</strong></span></span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:2.9729in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;">@ConditionalOnJava</span></span></p>
            </td>
            <td
                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:4.1833in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">系统的</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">java</span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">版本是否符合要求</span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:2.9729in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;">@ConditionalOnBean</span></span></p>
            </td>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:4.1833in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">容器中存在指定</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">Bean</span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:2.9729in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;">@ConditionalOnMissingBean</span></span></p>
            </td>
            <td
                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:4.1833in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">容器中不存在指定</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">Bean</span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:2.9729in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;">@ConditionalOnExpression</span></span></p>
            </td>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:4.1833in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">满足</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">SpEl</span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">表达式指定</span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:2.9729in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;">@ConditionalOnClass</span></span></p>
            </td>
            <td
                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:4.1833in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">系统中有指定类</span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:2.9729in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;">@ConditionalOnMissing</span></span></p>
            </td>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:4.1833in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">系统值没有指定类</span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:2.9729in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;">@ConditionalOnSingleCandidate</span></span>
                </p>
            </td>
            <td
                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:4.1833in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">容器中只有一个指定的</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">Bean,</span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">或者这个</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">Bean</span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">是首选</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">Bean</span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:2.9729in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;">@ConditionalOnProperty</span></span></p>
            </td>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:4.1833in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">系统中指定的属性是否有指定的值</span></span></p>
                <table summary="" cellspacing="0"
                    style="border-collapse:collapse; border-color:#a3a3a3; border-style:solid; border-width:1px; "
                    class=" cke_show_border">
                    <tbody>
                        <tr>
                            <td
                                style="background-color:black; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.4145in">
                                <p><span style="font-size:11.5pt"><span
                                            style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                                style="color:white"><strong>参数</strong></span></span></span></p>
                            </td>
                            <td
                                style="background-color:black; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:2.0666in">
                                <p><span style="font-size:11.5pt"><span
                                            style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                                style="color:white"><strong>描述</strong></span></span></span></p>
                            </td>
                        </tr>
                        <tr>
                            <td
                                style="background-color:white; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.4145in">
                                <p><span style="font-size:11.5pt"><span
                                            style="font-family:&quot;Comic Sans MS&quot;">prefix</span></span></p>
                            </td>
                            <td
                                style="background-color:white; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:2.0666in">
                                <p><span style="font-size:11.5pt"><span
                                            style="font-family:&quot;Microsoft YaHei UI&quot;">属性的字段前缀</span></span></p>
                            </td>
                        </tr>
                        <tr>
                            <td
                                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.4145in">
                                <p><span style="font-size:10.5pt"><span
                                            style="font-family:&quot;Comic Sans MS&quot;">name</span></span></p>
                            </td>
                            <td
                                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:2.0666in">
                                <p><span style="font-size:10.5pt"><span
                                            style="font-family:&quot;Microsoft YaHei UI&quot;">属性的字段名</span></span></p>
                            </td>
                        </tr>
                        <tr>
                            <td
                                style="background-color:white; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.4145in">
                                <p><span style="font-size:11.5pt"><span
                                            style="font-family:&quot;Comic Sans MS&quot;">havingValue</span></span></p>
                            </td>
                            <td
                                style="background-color:white; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:2.0666in">
                                <p><span style="font-size:11.5pt"><span
                                            style="font-family:&quot;Microsoft YaHei UI&quot;">属性的值</span></span></p>
                            </td>
                        </tr>
                        <tr>
                            <td
                                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.4145in">
                                <p><span style="font-size:10.5pt"><span
                                            style="font-family:&quot;Comic Sans MS&quot;">matchIfMissing</span></span>
                                </p>
                            </td>
                            <td
                                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:2.0666in">
                                <p><span style="font-size:10.5pt"><span
                                            style="font-family:&quot;Microsoft YaHei UI&quot;">属性值未配置时，默认配置</span></span>
                                </p>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">&nbsp;</span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:2.9729in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;">@ConditionalOnResource</span></span></p>
            </td>
            <td
                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:4.1833in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">类路径下是否存在指定资源文件</span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:2.9729in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;">@ConditionalOnWebApplication</span></span></p>
            </td>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:4.1833in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">当前是</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">web</span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">环境</span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:2.9729in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;">@ConditionalOnNotWebApplication</span></span>
                </p>
            </td>
            <td
                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:4.1833in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">当前不是</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">web</span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">环境</span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:2.9729in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;">@ConditionalOnjindi</span></span></p>
            </td>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:4.1833in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Comic Sans MS&quot;">JNDI</span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">存在指定项</span></span></p>
            </td>
        </tr>
    </tbody>
</table>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                style="color:#70ad47"><strong>示例</strong></span></span></span></p>
<p style="margin-left:36px"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#ffc000">@Configuration</span></span></span></p>
<p style="margin-left:36px"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:blue">public</span></span>&nbsp;<span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:blue">class</span></span>&nbsp;<span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:black">PersonConfigure</span></span>&nbsp;<span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">{</span></span></span></p>
<p style="margin-left:36px"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
<p style="margin-left:36px"><span style="font-size:12.0pt">&nbsp;&nbsp;&nbsp;&nbsp;<span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:#ffc000">@Bean</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">(name=</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:maroon">"bill"</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">)</span></span></span></p>
<p style="margin-left:36px"><span style="font-size:12.0pt">&nbsp;&nbsp;&nbsp;&nbsp;<span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:#ffc000">@Conditional</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:#ffc000">OnClass</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">({</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">User</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">.</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:blue">class</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">})</span></span></span></p>
<p style="margin-left:36px"><span style="font-size:12.0pt">&nbsp;&nbsp;&nbsp;&nbsp;<span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:blue">public</span></span>&nbsp;<span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">Person</span></span>&nbsp;<span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">person1(){</span></span></span></p>
<p style="margin-left:36px"><span style="font-size:12.0pt">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:blue">return</span></span>&nbsp;<span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:blue">new</span></span>&nbsp;<span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">Person(</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:maroon">"Bill</span></span>&nbsp;<span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:maroon">Gates"</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">,</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:red">62</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">);</span></span></span></p>
<p style="margin-left:36px"><span style="font-size:12.0pt"><span style="color:black">&nbsp;&nbsp;&nbsp;&nbsp;<span
                style="font-family:&quot;Comic Sans MS&quot;">}</span></span></span></p>
<p style="margin-left:36px"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:black">}</span></span></span></p>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
<p><span style="font-size:13.5pt"><strong><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">自定义</span></strong><strong><span
                style="font-family:&quot;Comic Sans MS&quot;">Condtional</span></strong></span></p>
<ul>
    <li><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">可以通过实现</span><span
                style="font-family:&quot;Comic Sans MS&quot;">Condtional</span><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">接口类，自定</span><span
                style="font-family:&quot;Comic Sans MS&quot;">Condtional</span><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">类进行判断</span></span></li>
</ul>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                style="color:#70ad47"><strong>示例</strong></span></span></span></p>
<ul style="list-style-type:disc">
    <li><span style="color:#e67e22;"><span style="font-size:12.0pt"><span
                    style="font-family:&quot;Comic Sans MS&quot;">My</span></span><span style="font-size:12.0pt"><span
                    style="font-family:&quot;Comic Sans MS&quot;">Conditional</span></span><span
                style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">.java</span></span></span>
    </li>
</ul>
<table summary="" cellspacing="0"
    style="border-collapse:collapse; border-color:#a3a3a3; border-style:solid; border-width:0px; margin-left:68px"
    class=" cke_show_border">
    <tbody>
        <tr>
            <td
                style="background-color:white; border-bottom:0px; border-left:0px; border-right:0px; border-top:0px; vertical-align:top; width:9.1631in">
                <p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">public</span></span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">class</span></span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:black">My</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:black">Conditional</span></span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">implements</span></span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:black">Condition</span></span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:black">{</span></span></span></p>
                <p><span style="font-size:12.0pt">&nbsp;&nbsp;&nbsp;&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:#ffc000">@Override</span></span></span></p>
                <p><span style="font-size:12.0pt">&nbsp;&nbsp;&nbsp;&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">public</span></span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:#8000ff">boolean</span></span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:black">matches(ConditionContext</span></span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:black">conditionContext,</span></span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:black">AnnotatedTypeMetadata</span></span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:black">annotatedTypeMetadata)</span></span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:black">{</span></span></span></p>
                <p><span style="font-size:12.0pt"><span
                            style="color:black">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
                                style="font-family:&quot;Comic Sans MS&quot;">Environment</span>&nbsp;<span
                                style="font-family:&quot;Comic Sans MS&quot;">environment</span>&nbsp;<span
                                style="font-family:&quot;Comic Sans MS&quot;">=</span>&nbsp;<span
                                style="font-family:&quot;Comic Sans MS&quot;">conditionContext.getEnvironment();</span></span></span>
                </p>
                <p><span style="font-size:12.0pt">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:#8000ff">String</span></span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">property</span></span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:black">=</span></span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:black">environment.getProperty(</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:maroon">"os.name"</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:black">);</span></span></span></p>
                <p><span style="font-size:12.0pt">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:blue">if</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">(</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">property</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:black">.contains(</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:maroon">"Windows"</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:black">)){</span></span></span></p>
                <p><span style="font-size:12.0pt">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">return</span></span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:black">true;</span></span></span></p>
                <p><span style="font-size:12.0pt"><span
                            style="color:black">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
                                style="font-family:&quot;Comic Sans MS&quot;">}</span></span></span></p>
                <p><span style="font-size:12.0pt">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">return</span></span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:black">false;</span></span></span></p>
                <p><span style="font-size:12.0pt"><span style="color:black">&nbsp;&nbsp;&nbsp;&nbsp;<span
                                style="font-family:&quot;Comic Sans MS&quot;">}</span></span></span></p>
                <p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:black">}</span></span></span></p>
            </td>
        </tr>
    </tbody>
</table>
<p><span style="font-size:13.5pt"><span style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
<ul style="list-style-type:disc">
    <li><span style="color:#e67e22;"><span style="font-size:12.0pt"><span
                    style="font-family:&quot;Comic Sans MS&quot;">PersonConfigure</span></span><span
                style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">.java</span></span></span>
    </li>
</ul>
<p style="margin-left:72px"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#ffc000">@Configuration</span></span></span></p>
<p style="margin-left:72px"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:blue">public</span></span>&nbsp;<span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:blue">class</span></span>&nbsp;<span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:black">PersonConfigure</span></span>&nbsp;<span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">{</span></span></span></p>
<p style="margin-left:72px"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
<p style="margin-left:72px"><span style="font-size:12.0pt">&nbsp;&nbsp;&nbsp;&nbsp;<span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:#ffc000">@Bean</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">(name=</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:maroon">"bill"</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">)</span></span></span></p>
<p style="margin-left:72px"><span style="font-size:12.0pt">&nbsp;&nbsp;&nbsp;&nbsp;<span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:#ffc000">@Conditional</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">({</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">My</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">Conditional.</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:blue">class</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">})</span></span> <span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:green">//</span></span><span
            style="font-family:&quot;Microsoft YaHei UI&quot;"><span style="color:green">如果满足</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:green">My</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:green">Conditional</span></span><span
            style="font-family:&quot;Microsoft YaHei UI&quot;"><span style="color:green">返回</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:green">true,</span></span><span
            style="font-family:&quot;Microsoft YaHei UI&quot;"><span style="color:green">继续加载下面这个方法</span></span></span>
</p>
<p style="margin-left:72px"><span style="font-size:12.0pt">&nbsp;&nbsp;&nbsp;&nbsp;<span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:blue">public</span></span>&nbsp;<span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">Person</span></span>&nbsp;<span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">person1(){</span></span></span></p>
<p style="margin-left:72px"><span style="font-size:12.0pt">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:blue">return</span></span>&nbsp;<span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:blue">new</span></span>&nbsp;<span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">Person(</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:maroon">"Bill</span></span>&nbsp;<span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:maroon">Gates"</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">,</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:red">62</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">);</span></span></span></p>
<p style="margin-left:72px"><span style="font-size:12.0pt"><span style="color:black">&nbsp;&nbsp;&nbsp;&nbsp;<span
                style="font-family:&quot;Comic Sans MS&quot;">}</span></span></span></p>
<p style="margin-left:72px"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:black">}</span></span></span></p>
<p><span style="font-size:13.5pt"><span style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
