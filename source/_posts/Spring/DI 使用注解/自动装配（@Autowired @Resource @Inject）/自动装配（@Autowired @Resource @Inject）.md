---
categories:
- Spring
tags:
- ［@Autowired］
- ［@Resource］
- ［@Inject］
date:
- 2022-11-28 8:05:44
---

<p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
<table summary="" cellspacing="0"
    style="border-collapse:collapse; border-color:#a3a3a3; border-style:solid; border-width:1px; margin-left:32px"
    class=" cke_show_border">
    <tbody>
        <tr>
            <td
                style="background-color:black; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:2.4444in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:white"><strong>注解</strong></span></span></span></p>
            </td>
            <td
                style="background-color:black; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:5.7708in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:white"><strong>说明</strong></span></span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:2.4444in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:#24292e">@Autowired</span></span></span></p>
            </td>
            <td
                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:5.7916in">
                <p><span style="font-size:11.5pt"><span style="color:#24292e"><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">默认先按</span><span
                                style="font-family:&quot;Comic Sans MS&quot;">byType</span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">，如果发现找到多个</span><span
                                style="font-family:&quot;Comic Sans MS&quot;">bean</span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">，则，又按照</span><span
                                style="font-family:&quot;Comic Sans MS&quot;">byName</span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">方式比对，如果还有多个，则报出异常</span></span></span>
                </p>
                <p><span style="font-size:12.0pt"><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">注解可以放在字段，方法，构造器，一切具有参数的方法都可以被注解</span></span>
                </p>
                <table summary="" cellspacing="0"
                    style="border-collapse:collapse; border-color:#a3a3a3; border-style:solid; border-width:1px; "
                    class=" cke_show_border">
                    <tbody>
                        <tr>
                            <td
                                style="background-color:black; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:2.4444in">
                                <p><span style="font-size:10.5pt"><span
                                            style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                                style="color:white"><strong>参数</strong></span></span></span></p>
                            </td>
                            <td
                                style="background-color:black; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:2.6875in">
                                <p><span style="font-size:10.5pt"><span
                                            style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                                style="color:white"><strong>描述</strong></span></span></span></p>
                            </td>
                        </tr>
                        <tr>
                            <td
                                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:2.4444in">
                                <p><span style="font-size:10.5pt"><span
                                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                                style="color:#24292e">required</span></span></span></p>
                            </td>
                            <td
                                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:2.7125in">
                                <p><span style="font-size:10.5pt"><span style="color:#24292e"><span
                                                style="font-family:&quot;Microsoft YaHei UI&quot;">默认为</span><span
                                                style="font-family:&quot;Comic Sans MS&quot;">true,</span></span></span>
                                </p>
                                <p><span style="font-size:10.5pt"><span style="color:#24292e"><span
                                                style="font-family:&quot;Comic Sans MS&quot;">false </span><span
                                                style="font-family:&quot;Microsoft YaHei UI&quot;">允许</span> <span
                                                style="font-family:&quot;Comic Sans MS&quot;">null </span><span
                                                style="font-family:&quot;Microsoft YaHei UI&quot;">值</span><span
                                                style="font-family:&quot;Comic Sans MS&quot;">,</span><span
                                                style="font-family:&quot;Microsoft YaHei UI&quot;">引用值可以为</span><span
                                                style="font-family:&quot;Comic Sans MS&quot;">null</span></span></span>
                                </p>
                                <p><span style="font-size:10.5pt"><span
                                            style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                                style="color:#24292e">当</span></span><span
                                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                                style="color:#24292e">required</span></span><span
                                            style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                                style="color:#24292e">属性为</span></span><span
                                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                                style="color:#24292e">false</span></span><span
                                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                                style="color:#24292e">,</span></span><span
                                            style="font-family:&quot;Microsoft YaHei UI&quot;">如果容器找不到该</span><span
                                            style="font-family:&quot;Comic Sans MS&quot;">bean</span><span
                                            style="font-family:&quot;Microsoft YaHei UI&quot;">对象，不会抛出异常</span></span>
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
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:2.4444in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:#24292e">@Resource</span></span></span></p>
            </td>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:5.8159in">
                <p><span style="font-size:11.5pt"><span style="color:#24292e"><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">默认按</span><span
                                style="font-family:&quot;Comic Sans MS&quot;"> byName </span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">自动注入</span><span
                                style="font-family:&quot;Comic Sans MS&quot;">,</span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">如果找不到再按</span><span
                                style="font-family:&quot;Comic Sans MS&quot;">byType</span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">找</span><span
                                style="font-family:&quot;Comic Sans MS&quot;">bean,</span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">如果还是找不到则抛异常</span></span></span></p>
                <p><span style="font-size:11.5pt"><span style="color:#24292e"><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">无论按</span><span
                                style="font-family:&quot;Comic Sans MS&quot;">byName</span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">还是</span><span
                                style="font-family:&quot;Comic Sans MS&quot;">byType</span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">，如果找到多个，则抛异常</span></span></span></p>
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:#24292e">&nbsp;</span></span></span></p>
                <p><span style="font-size:11.5pt"><span style="color:#24292e"><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">它有</span><span
                                style="font-family:&quot;Comic Sans MS&quot;">2</span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">个属性分别是</span><span
                                style="font-family:&quot;Comic Sans MS&quot;">name</span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">和</span><span
                                style="font-family:&quot;Comic Sans MS&quot;">type</span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">，</span></span></span></p>
                <ul style="list-style-type:disc">
                    <li><span style="font-size:11.5pt"><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">使用</span></span><span
                            style="font-size:11.5pt"><span
                                style="font-family:&quot;Comic Sans MS&quot;">name</span></span><span
                            style="font-size:11.5pt"><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">属性，则使用</span></span><span
                            style="font-size:11.5pt"><span
                                style="font-family:&quot;Comic Sans MS&quot;">byName</span></span><span
                            style="font-size:11.5pt"><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">的自动注入</span></span></li>
                </ul>
                <p><span style="font-size:11.5pt"><span style="color:#24292e"><span
                                style="font-family:&quot;Comic Sans MS&quot;">@Resource(name=</span><span
                                style="font-family:&quot;Comic Sans MS&quot;">"</span><span
                                style="font-family:&quot;Comic Sans MS&quot;">bean</span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">的</span><span
                                style="font-family:&quot;Comic Sans MS&quot;">id"</span><span
                                style="font-family:&quot;Comic Sans MS&quot;">)</span></span></span></p>
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:#24292e">&nbsp;</span></span></span></p>
                <ul style="list-style-type:disc">
                    <li><span style="font-size:11.5pt"><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">使用</span></span><span
                            style="font-size:11.5pt"><span
                                style="font-family:&quot;Comic Sans MS&quot;">type</span></span><span
                            style="font-size:11.5pt"><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">属性时则使用</span></span><span
                            style="font-size:11.5pt"><span
                                style="font-family:&quot;Comic Sans MS&quot;">byType</span></span><span
                            style="font-size:11.5pt"><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">自动注入。</span></span></li>
                </ul>
                <p><span style="font-size:11.5pt"><span style="color:#24292e"><span
                                style="font-family:&quot;Comic Sans MS&quot;">@Resource(type=</span><span
                                style="font-family:&quot;Comic Sans MS&quot;">"</span><span
                                style="font-family:&quot;Comic Sans MS&quot;">bean</span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">的</span><span
                                style="font-family:&quot;Comic Sans MS&quot;">class</span><span
                                style="font-family:&quot;Comic Sans MS&quot;">"</span><span
                                style="font-family:&quot;Comic Sans MS&quot;">)</span></span></span></p>
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:#24292e">&nbsp;</span></span></span></p>
                <table summary="" cellspacing="0"
                    style="border-collapse:collapse; border-color:#a3a3a3; border-style:solid; border-width:1px; "
                    class=" cke_show_border">
                    <tbody>
                        <tr>
                            <td
                                style="background-color:black; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.6277in">
                                <p><span style="font-size:10.5pt"><span
                                            style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                                style="color:white"><strong>参数</strong></span></span></span></p>
                            </td>
                            <td
                                style="background-color:black; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:3.4958in">
                                <p><span style="font-size:10.5pt"><span
                                            style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                                style="color:white"><strong>描述</strong></span></span></span></p>
                            </td>
                        </tr>
                        <tr>
                            <td
                                style="background-color:white; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.6277in">
                                <p><span style="font-size:10.5pt"><span
                                            style="font-family:&quot;Comic Sans MS&quot;">type</span></span></p>
                            </td>
                            <td
                                style="background-color:white; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:3.4958in">
                                <p><span style="font-size:10.5pt"><span
                                            style="font-family:&quot;Microsoft YaHei UI&quot;">资源的</span><span
                                            style="font-family:&quot;Comic Sans MS&quot;"> Java </span><span
                                            style="font-family:&quot;Microsoft YaHei UI&quot;">类型</span></span></p>
                            </td>
                        </tr>
                        <tr>
                            <td
                                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.6277in">
                                <p><span style="font-size:10.5pt"><span
                                            style="font-family:&quot;Comic Sans MS&quot;">shareable</span></span></p>
                            </td>
                            <td
                                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:3.5041in">
                                <p><span style="font-size:10.5pt"><span
                                            style="font-family:&quot;Microsoft YaHei UI&quot;">指示此资源是否可以在此组件和其他组件之间共享。</span></span>
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td
                                style="background-color:white; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.6277in">
                                <p><span style="font-size:10.5pt"><span
                                            style="font-family:&quot;Comic Sans MS&quot;">name</span></span></p>
                            </td>
                            <td
                                style="background-color:white; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:3.4958in">
                                <p><span style="font-size:10.5pt"><span
                                            style="font-family:&quot;Microsoft YaHei UI&quot;">资源的</span><span
                                            style="font-family:&quot;Comic Sans MS&quot;"> JNDI </span><span
                                            style="font-family:&quot;Microsoft YaHei UI&quot;">名称</span></span></p>
                            </td>
                        </tr>
                        <tr>
                            <td
                                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.6277in">
                                <p><span style="font-size:10.5pt"><span
                                            style="font-family:&quot;Comic Sans MS&quot;">mappedName</span></span></p>
                            </td>
                            <td
                                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:3.4958in">
                                <p><span style="font-size:10.5pt"><span
                                            style="font-family:&quot;Microsoft YaHei UI&quot;">此资源应映射到的产品特定名称</span></span>
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td
                                style="background-color:white; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.6277in">
                                <p><span style="font-size:10.5pt"><span
                                            style="font-family:&quot;Comic Sans MS&quot;">lookup</span></span></p>
                            </td>
                            <td
                                style="background-color:white; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:3.4958in">
                                <p><span style="font-size:10.5pt"><span
                                            style="font-family:&quot;Microsoft YaHei UI&quot;">引用指向的资源的名称</span></span>
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td
                                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.6277in">
                                <p><span style="font-size:10.5pt"><span
                                            style="font-family:&quot;Comic Sans MS&quot;">description</span></span></p>
                            </td>
                            <td
                                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:3.4958in">
                                <p><span style="font-size:10.5pt"><span
                                            style="font-family:&quot;Microsoft YaHei UI&quot;">此资源的说明。</span></span></p>
                            </td>
                        </tr>
                        <tr>
                            <td
                                style="background-color:white; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.6277in">
                                <p><span style="font-size:10.5pt"><span
                                            style="font-family:&quot;Comic Sans MS&quot;">authenticationType</span></span>
                                </p>
                            </td>
                            <td
                                style="background-color:white; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:3.4958in">
                                <p><span style="font-size:10.5pt"><span
                                            style="font-family:&quot;Microsoft YaHei UI&quot;">用于此资源的身份验证类型</span></span>
                                </p>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <p><span style="font-size:12.0pt"><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">&nbsp;</span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:2.3666in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:#24292e">@Inject</span></span></span></p>
            </td>
            <td
                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:5.8493in">
                <ul>
                    <li value="1"><span style="font-size:11.5pt"><span
                                style="font-family:&quot;Comic Sans MS&quot;">@Inject</span></span><span
                            style="font-size:11.5pt"><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">是</span></span><span
                            style="font-size:11.5pt"><span style="font-family:&quot;Comic Sans MS&quot;">JSR330
                                (Dependency Injection for Java)</span></span><span style="font-size:11.5pt"><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">中的规范，需要导入</span></span><span
                            style="font-size:11.5pt"><span
                                style="font-family:&quot;Comic Sans MS&quot;">javax.inject.Inject jar</span></span><span
                            style="font-size:11.5pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">包
                                ，才能实现注入</span></span></li>
                    <li><span style="font-size:11.5pt"><span
                                style="font-family:&quot;Comic Sans MS&quot;">@Inject</span></span><span
                            style="font-size:11.5pt"><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">可以作用</span></span><span
                            style="font-size:11.5pt"><span
                                style="font-family:&quot;Comic Sans MS&quot;">CONSTRUCTOR</span></span><span
                            style="font-size:11.5pt"><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">、</span></span><span
                            style="font-size:11.5pt"><span
                                style="font-family:&quot;Comic Sans MS&quot;">METHOD</span></span><span
                            style="font-size:11.5pt"><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">、</span></span><span
                            style="font-size:11.5pt"><span
                                style="font-family:&quot;Comic Sans MS&quot;">FIELD</span></span><span
                            style="font-size:11.5pt"><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">上</span></span></li>
                    <li><span style="font-size:11.5pt"><span
                                style="font-family:&quot;Comic Sans MS&quot;">@Inject</span></span><span
                            style="font-size:11.5pt"><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">是根据类型进行自动装配的</span></span></li>
                </ul>
            </td>
        </tr>
    </tbody>
</table>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">&nbsp;</span></span></p>
<p><span style="font-size:12.0pt"><span
            style="font-family:&quot;Microsoft YaHei UI&quot;"><strong>注</strong></span></span></p>
<p style="margin-left: 40px;"><span style="font-size:11.5pt"><span style="color:#24292e"><span
                style="font-family:&quot;Comic Sans MS&quot;">@Resource</span><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">在</span><span
                style="font-family:&quot;Comic Sans MS&quot;">jdk1.8</span><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">以上版本使用时，需要额外导入依赖</span></span></span></p>
<p style="margin-left:72px"><span style="font-size:12.0pt">&nbsp;&nbsp;&nbsp;&nbsp;<span
            style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:blue">&lt;dependency&gt;</span></span></span></p>
<p style="margin-left:72px"><span style="font-size:12.0pt">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:blue">&lt;groupId&gt;</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;">javax.annotation</span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:blue">&lt;/groupId&gt;</span></span></span>
</p>
<p style="margin-left:72px"><span style="font-size:12.0pt">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:blue">&lt;artifactId&gt;</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;">javax.annotation-api</span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:blue">&lt;/artifactId&gt;</span></span></span></p>
<p style="margin-left:72px"><span style="font-size:12.0pt">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:blue">&lt;version&gt;</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">1.3.2</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:blue">&lt;/version&gt;</span></span></span>
</p>
<p style="margin-left:72px"><span style="font-size:12.0pt">&nbsp;&nbsp;&nbsp;&nbsp;<span
            style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:blue">&lt;/dependency&gt;</span></span></span></p>
<p><span style="font-size:11.5pt"><span style="font-family:SimSun"><span
                style="color:#24292e">&nbsp;</span></span></span></p>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                style="color:#70ad47"><strong>示例</strong></span></span></span></p>
<p style="margin-left: 40px;"><span style="font-size:11.5pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#ffc000">@Component("myStudent")</span></span></span></p>
<p style="margin-left: 40px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:blue">public</span></span>&nbsp;<span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:blue">class</span></span>&nbsp;<span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:black">Student</span></span>&nbsp;<span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:black">{</span></span></span></p>
<p style="margin-left: 40px;"><span style="font-size:12.0pt">&nbsp;&nbsp;&nbsp;<span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:blue">private</span></span>&nbsp;<span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:#8000ff">String</span></span>&nbsp;<span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">name;</span></span></span></p>
<p style="margin-left: 40px;"><span style="font-size:12.0pt">&nbsp;&nbsp;&nbsp;<span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:blue">private</span></span>&nbsp;<span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:#8000ff">int</span></span>&nbsp;<span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">age</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">;</span></span></span></p>
<p style="margin-left: 40px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:black">}</span></span></span></p>
<p style="margin-left: 40px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:black">&nbsp;</span></span></span></p>
<p style="margin-left: 40px;"><span style="font-size:11.5pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#ffc000">@Component</span></span></span></p>
<p style="margin-left:36px"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:blue">public</span></span>&nbsp;<span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:blue">class</span></span>&nbsp;<span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:black">School</span></span>&nbsp;<span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:black">{</span></span></span></p>
<p style="margin-left:36px"><span style="font-size:12.0pt">&nbsp;&nbsp;&nbsp;<span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:blue">private</span></span>&nbsp;<span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:#8000ff">String</span></span>&nbsp;<span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">name;</span></span></span></p>
<p style="margin-left:36px"><span style="font-size:12.0pt">&nbsp;&nbsp;&nbsp;<span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:blue">private</span></span>&nbsp;<span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:#8000ff">int</span></span>&nbsp;<span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">age</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">;</span></span></span></p>
<p style="margin-left:36px"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#ffc000">&nbsp;&nbsp; </span></span></span></p>
<p style="margin-left:36px"><span style="font-family:&quot;Comic Sans MS&quot;"><span style="color:#ffc000">&nbsp;&nbsp;
            <span style="font-size:12.0pt">@</span><span style="font-size:12.0pt">Autowired("</span><span
                style="font-size:11.5pt">myS</span><span style="font-size:12.0pt">tudent")</span></span></span></p>
<p style="margin-left:36px"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">&nbsp;&nbsp; <span style="color:blue">private</span><span
                style="color:black"> Student studenet;</span></span></span></p>
<p style="margin-left:36px"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:black">}</span></span></span></p>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                style="color:#70ad47"><strong>示例</strong></span></span></span></p>
<table summary="" cellspacing="0"
    style="border-collapse:collapse; border-color:#a3a3a3; border-style:solid; border-width:0px; margin-left:32px"
    class=" cke_show_border">
    <tbody>
        <tr>
            <td
                style="background-color:white; border-bottom:0px; border-left:0px; border-right:0px; border-top:0px; vertical-align:top; width:4.377in">
                <p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:#ffc000">@Inject</span></span></span></p>
                <p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">private</span></span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:black">Car</span></span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:black">car;</span></span></span></p>
                <p><span style="font-size:12.0pt"><span style="color:#70ad47"><span
                                style="font-family:&quot;Comic Sans MS&quot;">//</span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">指定加入</span><span
                                style="font-family:&quot;Comic Sans MS&quot;">BMW</span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">组件。</span></span></span></p>
                <p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:#ffc000">@Inject</span></span></span></p>
                <p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:#ffc000">@Named</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">(</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:maroon">"BMW"</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">)</span></span>
                        <span style="font-family:&quot;Comic Sans MS&quot;"><span style="color:#70ad47">//
                            </span></span><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:#70ad47">@Named</span></span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:#70ad47">&nbsp;的作用类似&nbsp;</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:#70ad47">@Qualifier</span></span></span></p>
                <p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">private</span></span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:black">Car</span></span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:black">car;</span></span></span></p>
            </td>
        </tr>
    </tbody>
</table>