---
categories:
  - Spring
tags:
  - ［@Valid］
  - ［@Valided］
date:
  - 2022-6-28 14:23:01
---

<ul style="list-style-type:disc">
    <li><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">Spring
                Validation</span></span><span style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">验证框架对参数的验证机制提供了</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">@Validated</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">，在检验</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">Controller</span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">的入参是否符合规范时，使用</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">@Validated</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">或者</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">@Valid</span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">在基本验证功能上没有太多区别。但是在分组、注解地方、嵌套验证等功能上两个有所不同</span></span>
    </li>
</ul>
<p><span style="font-size:12.0pt"><span style="font-family:SimSun">&nbsp;</span></span></p>
<ul style="list-style-type: disc; margin-left: 40px;">
    <li><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">@Valid</span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">可以用在方法、构造函数、方法参数和成员属性上</span></span></li>
</ul>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Microsoft YaHei UI&quot;">是使用</span><span
            style="font-family:&quot;Comic Sans MS&quot;">Hibernate validation</span><span
            style="font-family:&quot;Microsoft YaHei UI&quot;">的时候使用</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
</p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Microsoft YaHei UI&quot;">用在方法入参上无法单独提供嵌套验证功能。提示验证框架进行嵌套验证。</span></span></p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Microsoft YaHei UI&quot;">能配合嵌套验证注解</span><span
            style="font-family:&quot;Comic Sans MS&quot;">@Valid</span><span
            style="font-family:&quot;Microsoft YaHei UI&quot;">进行嵌套验证。</span></span></p>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">&nbsp;</span></span></p>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">&nbsp;</span></span></p>
<ul style="list-style-type: disc; margin-left: 40px;">
    <li><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">@Validated</span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">可以用在类型、方法和方法参数上。但是不能用在成员属性上</span></span></li>
</ul>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Microsoft YaHei UI&quot;">是只用</span><span
            style="font-family:&quot;Comic Sans MS&quot;">Spring Validator</span><span
            style="font-family:&quot;Microsoft YaHei UI&quot;">校验机制使用</span></span></p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Microsoft YaHei UI&quot;">&nbsp;用在方法入参上无法单独提供嵌套验证功能。无法提示框架进行嵌套验证。</span></span></p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Microsoft YaHei UI&quot;">能配合嵌套验证注解</span><span
            style="font-family:&quot;Comic Sans MS&quot;">@Valid</span><span
            style="font-family:&quot;Microsoft YaHei UI&quot;">进行嵌套验证。</span></span></p>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">&nbsp;</span></span></p>
<table summary="" cellspacing="0"
    style="border-collapse:collapse; border-color:#a3a3a3; border-style:solid; border-width:1px; margin-left:68px"
    class=" cke_show_border">
    <tbody>
        <tr>
            <td
                style="background-color:black; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.0034in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:white"><strong>参数</strong></span></span></span></p>
            </td>
            <td
                style="background-color:black; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:4.8576in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:white"><strong>描述</strong></span></span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.0034in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;">value</span></span></p>
            </td>
            <td
                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:4.8576in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">指定一个</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">class</span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">或多个</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">class</span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">验证组以应用于此批注启动的验证步骤</span></span></p>
            </td>
        </tr>
    </tbody>
</table>
<p style="margin-left:72px"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Microsoft YaHei UI&quot;"><span style="color:#70ad47">&nbsp;</span></span></span>
</p>
<p style="margin-left:36px"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Microsoft YaHei UI&quot;"><span style="color:#70ad47">&nbsp;</span></span></span>
</p>
<p><span style="color:#24292e">&nbsp;<span style="font-size:13.5pt"><strong><span
                    style="font-family:&quot;Microsoft YaHei UI&quot;">参数的校验</span></strong></span></span></p>
<ul style="list-style-type:disc">
    <li><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                    style="color:#24292e">以下注解用于配合</span></span></span><span style="font-size:12.0pt"><span
                style="font-family:&quot;Comic Sans MS&quot;"><span
                    style="color:black">@Valid,@Valided</span></span></span><span style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                    style="color:black">注解，使用在实体类对象参数上</span></span></span></li>
</ul>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
<ul style="list-style-type:disc">
    <li><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">全部参数校验如下：</span></span>
    </li>
</ul>
<table summary="" cellspacing="0"
    style="border-collapse:collapse; border-color:#a3a3a3; border-style:solid; border-width:1px; margin-left:32px"
    class=" cke_show_border">
    <tbody>
        <tr>
            <td
                style="background-color:black; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:2.9937in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:white"><strong>空检查</strong></span></span></span></p>
            </td>
            <td
                style="background-color:black; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:4.484in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:white"><strong>描述</strong></span></span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:2.9937in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:#24292e">@Null</span></span></span></p>
            </td>
            <td
                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:4.484in">
                <p><span style="font-size:11.5pt"><span style="color:#24292e"><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">验证对象是否为</span><span
                                style="font-family:&quot;Comic Sans MS&quot;">null</span></span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:2.9937in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:#24292e">@NotNull</span></span></span></p>
            </td>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:4.484in">
                <p><span style="font-size:11.5pt"><span style="color:#24292e"><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">验证对象是否不为</span><span
                                style="font-family:&quot;Comic Sans MS&quot;">null, </span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">无法查检长度为</span><span
                                style="font-family:&quot;Comic Sans MS&quot;">0</span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">的字符串</span></span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:2.9937in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:#24292e">@NotBlank</span></span></span></p>
            </td>
            <td
                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:4.484in">
                <p><span style="font-size:11.5pt"><span style="color:#24292e"><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">检查约束字符串是不是</span><span
                                style="font-family:&quot;Comic Sans MS&quot;">Null</span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">还有被</span><span
                                style="font-family:&quot;Comic Sans MS&quot;">Trim</span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">的长度是否大于</span><span
                                style="font-family:&quot;Comic Sans MS&quot;">0,</span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">只对字符串</span><span
                                style="font-family:&quot;Comic Sans MS&quot;">,</span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">且会去掉前后空格</span><span
                                style="font-family:&quot;Comic Sans MS&quot;">.</span></span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:2.9937in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:#24292e">@NotEmpty</span></span></span></p>
            </td>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:4.484in">
                <p><span style="font-size:11.5pt"><span style="color:#24292e"><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">检查约束元素是否为</span><span
                                style="font-family:&quot;Comic Sans MS&quot;">NULL</span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">或者是</span><span
                                style="font-family:&quot;Comic Sans MS&quot;">EMPTY.</span></span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="background-color:black; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:2.9937in">
                <p><span style="font-size:11.5pt"><span style="color:white"><strong><span
                                    style="font-family:&quot;Comic Sans MS&quot;">Booelan</span></strong><strong><span
                                    style="font-family:&quot;Microsoft YaHei UI&quot;">检查</span></strong></span></span>
                </p>
            </td>
            <td
                style="background-color:black; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:4.484in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:white"><strong>描述</strong></span></span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:2.9937in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:#24292e">@AssertTrue</span></span></span></p>
            </td>
            <td
                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:4.484in">
                <p><span style="font-size:11.5pt"><span style="color:#24292e"><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">验证</span><span
                                style="font-family:&quot;Comic Sans MS&quot;"> Boolean </span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">对象是否为</span><span
                                style="font-family:&quot;Comic Sans MS&quot;"> true </span></span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:2.9937in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:#24292e">@AssertFalse</span></span></span></p>
            </td>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:4.484in">
                <p><span style="font-size:11.5pt"><span style="color:#24292e"><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">验证</span><span
                                style="font-family:&quot;Comic Sans MS&quot;"> Boolean </span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">对象是否为</span><span
                                style="font-family:&quot;Comic Sans MS&quot;"> false </span></span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="background-color:black; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:2.9937in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:white"><strong>长度检查</strong></span></span></span></p>
            </td>
            <td
                style="background-color:black; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:4.484in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:white"><strong>描述</strong></span></span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:2.9937in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:#24292e">@Size(min=, max=)</span></span></span></p>
            </td>
            <td
                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:4.484in">
                <p><span style="font-size:11.5pt"><span style="color:#24292e"><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">验证对象（</span><span
                                style="font-family:&quot;Comic Sans MS&quot;">Array,Collection,Map,String</span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">）长度是否在给定的范围之内 </span></span></span>
                </p>
            </td>
        </tr>
        <tr>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:2.9937in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:#24292e">@Length(min=, max=)</span></span></span></p>
            </td>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:4.484in">
                <p><span style="font-size:11.5pt"><span style="color:#24292e"><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">验证注解的元素值长度在</span><span
                                style="font-family:&quot;Comic Sans MS&quot;">min</span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">和</span><span
                                style="font-family:&quot;Comic Sans MS&quot;">max</span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">区间内</span></span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="background-color:black; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:2.9937in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:white"><strong>日期检查</strong></span></span></span></p>
            </td>
            <td
                style="background-color:black; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:4.484in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:white"><strong>描述</strong></span></span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:2.9937in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:#24292e">@Past</span></span></span></p>
            </td>
            <td
                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:4.484in">
                <p><span style="font-size:11.5pt"><span style="color:#24292e"><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">验证</span><span
                                style="font-family:&quot;Comic Sans MS&quot;"> Date </span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">和</span><span
                                style="font-family:&quot;Comic Sans MS&quot;"> Calendar </span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">对象是否在当前时间之前 </span></span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:2.9937in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:#24292e">@Future</span></span></span></p>
            </td>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:4.484in">
                <p><span style="font-size:11.5pt"><span style="color:#24292e"><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">验证</span><span
                                style="font-family:&quot;Comic Sans MS&quot;"> Date </span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">和</span><span
                                style="font-family:&quot;Comic Sans MS&quot;"> Calendar </span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">对象是否在当前时间之后 </span></span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:2.9937in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:#24292e">@Pattern</span></span></span></p>
            </td>
            <td
                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:4.484in">
                <p><span style="font-size:11.5pt"><span style="color:#24292e"><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">验证</span><span
                                style="font-family:&quot;Comic Sans MS&quot;"> String </span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">对象是否符合正则表达式的规则</span></span></span>
                </p>
            </td>
        </tr>
        <tr>
            <td
                style="background-color:black; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:2.9937in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:white"><strong>数值检查</strong></span></span></span></p>
            </td>
            <td
                style="background-color:black; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:4.484in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:white"><strong>描述</strong></span></span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:2.9937in">
                <p><span style="font-size:11.5pt"><span style="color:#24292e"><span
                                style="font-family:&quot;Comic Sans MS&quot;">@Min(value=</span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">””</span><span
                                style="font-family:&quot;Comic Sans MS&quot;">)</span></span></span></p>
            </td>
            <td
                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:4.484in">
                <p><span style="font-size:11.5pt"><span style="color:#24292e"><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">验证</span><span
                                style="font-family:&quot;Comic Sans MS&quot;"> Number </span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">和</span><span
                                style="font-family:&quot;Comic Sans MS&quot;"> String </span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">对象是否大等于指定的值 </span></span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:2.9937in">
                <p><span style="font-size:11.5pt"><span style="color:#24292e"><span
                                style="font-family:&quot;Comic Sans MS&quot;">@Max(value=</span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">””</span><span
                                style="font-family:&quot;Comic Sans MS&quot;">)</span></span></span></p>
            </td>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:4.484in">
                <p><span style="font-size:11.5pt"><span style="color:#24292e"><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">验证</span><span
                                style="font-family:&quot;Comic Sans MS&quot;"> Number </span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">和</span><span
                                style="font-family:&quot;Comic Sans MS&quot;"> String </span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">对象是否小等于指定的值 </span></span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:2.9937in">
                <p><span style="font-size:11.5pt"><span style="color:#24292e"><span
                                style="font-family:&quot;Comic Sans MS&quot;">@DecimalMax(value=</span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">值</span><span
                                style="font-family:&quot;Comic Sans MS&quot;">)</span></span></span></p>
            </td>
            <td
                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:4.55in">
                <p><span style="font-size:11.5pt"><span style="color:#24292e"><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">被标注的值必须不大于约束中指定的最大值</span><span
                                style="font-family:&quot;Comic Sans MS&quot;">. </span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">这个约束的参数是一个通过</span><span
                                style="font-family:&quot;Comic Sans MS&quot;">BigDecimal</span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">定义的最大值的字符串表示</span><span
                                style="font-family:&quot;Comic Sans MS&quot;">.</span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">小数存在精度</span></span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:2.9937in">
                <p><span style="font-size:11.5pt"><span style="color:#24292e"><span
                                style="font-family:&quot;Comic Sans MS&quot;">@DecimalMin(value=</span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">值</span><span
                                style="font-family:&quot;Comic Sans MS&quot;">)</span></span></span></p>
            </td>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:4.55in">
                <p><span style="font-size:11.5pt"><span style="color:#24292e"><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">被标注的值必须不小于约束中指定的最小值</span><span
                                style="font-family:&quot;Comic Sans MS&quot;">. </span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">这个约束的参数是一个通过</span><span
                                style="font-family:&quot;Comic Sans MS&quot;">BigDecimal</span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">定义的最小值的字符串表示</span><span
                                style="font-family:&quot;Comic Sans MS&quot;">.</span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">小数存在精度</span></span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:2.9937in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:#24292e">@Digits</span></span></span></p>
            </td>
            <td
                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:4.484in">
                <p><span style="font-size:11.5pt"><span style="color:#24292e"><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">验证</span><span
                                style="font-family:&quot;Comic Sans MS&quot;"> Number </span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">和</span><span
                                style="font-family:&quot;Comic Sans MS&quot;"> String </span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">的构成是否合法 </span></span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:2.9937in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:#24292e">@Digits(integer=,fraction=)</span></span></span></p>
            </td>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:4.484in">
                <p><span style="font-size:11.5pt"><span style="color:#24292e"><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">验证字符串是否是符合指定格式的数字，</span><span
                                style="font-family:&quot;Comic Sans MS&quot;">interger</span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">指定整数精度，</span><span
                                style="font-family:&quot;Comic Sans MS&quot;">fraction</span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">指定小数精度。</span></span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:2.9937in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:#24292e">@Range(min=, max=)</span></span></span></p>
            </td>
            <td
                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:4.484in">
                <p><span style="font-size:11.5pt"><span style="color:#24292e"><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">检查数字是否介于</span><span
                                style="font-family:&quot;Comic Sans MS&quot;">min</span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">和</span><span
                                style="font-family:&quot;Comic Sans MS&quot;">max</span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">之间</span><span
                                style="font-family:&quot;Comic Sans MS&quot;">.</span></span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:2.9937in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:#24292e">@Range(min=10000,max=50000,</span></span></span></p>
                <p style="margin-left:36px"><span style="font-size:11.5pt"><span style="color:#24292e"><span
                                style="font-family:&quot;Comic Sans MS&quot;">message=</span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">”</span><span
                                style="font-family:&quot;Comic Sans MS&quot;">range.bean.wage</span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">”</span><span
                                style="font-family:&quot;Comic Sans MS&quot;">)</span></span></span></p>
            </td>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:4.5534in">
                <p><span style="font-size:11.5pt"><span style="color:#24292e"><span
                                style="font-family:&quot;Comic Sans MS&quot;">@Valid </span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">递归的对关联对象进行校验</span><span
                                style="font-family:&quot;Comic Sans MS&quot;">, </span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">如果关联对象是个集合或者数组</span><span
                                style="font-family:&quot;Comic Sans MS&quot;">,</span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">那么对其中的元素进行递归校验</span><span
                                style="font-family:&quot;Comic Sans MS&quot;">,</span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">如果是一个</span><span
                                style="font-family:&quot;Comic Sans MS&quot;">map,</span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">则对其中的值部分进行校验</span><span
                                style="font-family:&quot;Comic Sans MS&quot;">.(</span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">是否进行递归验证</span><span
                                style="font-family:&quot;Comic Sans MS&quot;">)</span></span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:2.9937in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:#24292e">@CreditCardNumber</span></span></span></p>
            </td>
            <td
                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:4.484in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:#24292e">信用卡验证</span></span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:2.9937in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:#24292e">@Email</span></span></span></p>
            </td>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:4.484in">
                <p><span style="font-size:11.5pt"><span style="color:#24292e"><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">验证是否是邮件地址，如果为</span><span
                                style="font-family:&quot;Comic Sans MS&quot;">null,</span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">不进行验证，算通过验证。</span></span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:2.9937in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:#24292e">@ScriptAssert(lang=,script=, alias=)</span></span></span></p>
            </td>
            <td
                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:4.484in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:#24292e">&nbsp;</span></span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:3.0111in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:#24292e">@URL(protocol=,host=,port=,regexp=, flags=)</span></span></span>
                </p>
            </td>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:4.4666in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:#24292e">&nbsp;</span></span></span></p>
            </td>
        </tr>
    </tbody>
</table>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                style="color:#70ad47"><strong>示例</strong></span></span></span></p>
<p style="margin-left:36px"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:blue">public</span></span>&nbsp;<span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:blue">class</span></span>&nbsp;<span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:black">User</span></span>&nbsp;<span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:black">{</span></span></span></p>
<p style="margin-left:36px"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
<p style="margin-left:36px"><span style="font-size:12.0pt">&nbsp;&nbsp;&nbsp;&nbsp;<span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:#ffc000">@NotNull</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">(message</span></span>&nbsp;<span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">=</span></span>&nbsp;<span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:maroon">"uid</span></span><span
            style="font-family:&quot;Microsoft YaHei UI&quot;"><span style="color:maroon">不能为空</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:maroon">"</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">)</span></span></span></p>
<p style="margin-left:36px"><span style="font-size:12.0pt">&nbsp;&nbsp;&nbsp;&nbsp;<span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:blue">private</span></span>&nbsp;<span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:#8000ff">int</span></span>&nbsp;<span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">uid;</span></span></span></p>
<p style="margin-left:36px"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
<p style="margin-left:36px"><span style="font-size:12.0pt">&nbsp;&nbsp;&nbsp;&nbsp;<span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:#ffc000">@NotNull</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">(message</span></span>&nbsp;<span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">=</span></span>&nbsp;<span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:maroon">"age</span></span><span
            style="font-family:&quot;Microsoft YaHei UI&quot;"><span style="color:maroon">不能为空</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:maroon">"</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">)</span></span></span></p>
<p style="margin-left:36px"><span style="font-size:12.0pt">&nbsp;&nbsp;&nbsp;&nbsp;<span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:blue">private</span></span>&nbsp;<span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:#8000ff">int</span></span>&nbsp;<span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">age;</span></span></span></p>
<p style="margin-left:36px"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:black">}</span></span></span></p>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                style="color:#24292e"><strong>注</strong></span></span></span></p>
<p style="margin-left:36px"><span style="font-size:12.0pt"><span style="color:#24292e"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">建议使用在</span><span
                style="font-family:&quot;Comic Sans MS&quot;">Stirng,Integer</span><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">类型，不建议使用在</span><span
                style="font-family:&quot;Comic Sans MS&quot;">int</span><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">类型上，因为表单值为“”时无法转换为</span><span
                style="font-family:&quot;Comic Sans MS&quot;">int</span><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">，但可以转换为</span><span
                style="font-family:&quot;Comic Sans MS&quot;">Stirng</span><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">为“”</span><span
                style="font-family:&quot;Comic Sans MS&quot;">,Integer</span><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">为</span><span
                style="font-family:&quot;Comic Sans MS&quot;">null</span></span></span></p>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                style="color:#24292e">&nbsp;</span></span></span></p>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                style="color:#24292e">&nbsp;</span></span></span></p>
<p><span style="font-size:13.5pt"><span style="color:#24292e"><strong><span
                    style="font-family:&quot;Microsoft YaHei UI&quot;">使用</span></strong> <strong><span
                    style="font-family:&quot;Comic Sans MS&quot;">@Valid</span></strong><strong><span
                    style="font-family:&quot;Comic Sans MS&quot;"> / </span></strong><strong><span
                    style="font-family:&quot;Comic Sans MS&quot;">@Validated</span></strong> <strong><span
                    style="font-family:&quot;Microsoft YaHei UI&quot;">校验参数</span></strong></span></span></p>
<ul style="list-style-type:disc">
    <li><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">@Valid</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">和</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">@Validated</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">必需使用在以</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">@RequestBody</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">接收参数的情况下。</span></span>
    </li>
</ul>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                style="color:#70ad47"><strong>示例</strong></span></span></span></p>
<p style="margin-left:36px"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#ffc000">@RequestMapping</span><span style="color:black">(</span><span
                style="color:maroon">"/test"</span><span
                style="color:black">)&nbsp;&nbsp;&nbsp;&nbsp;</span></span></span></p>
<p style="margin-left:36px"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:blue">public</span>&nbsp;<span style="color:#8000ff">String</span><span
                style="color:black">&nbsp;testValid(</span><span style="color:#ffc000">@Valid</span><span
                style="color:black">&nbsp;User&nbsp;user,&nbsp;BindingResult&nbsp;result){</span></span></span></p>
<p style="margin-left:36px"><span style="font-size:12.0pt"><span style="color:black">&nbsp;<span
                style="font-family:&quot;Microsoft YaHei UI&quot;">&nbsp;&nbsp; …</span></span></span></p>
<p style="margin-left:36px"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">&nbsp;&nbsp;&nbsp;&nbsp;<span
                style="color:blue">return</span>&nbsp;<span style="color:maroon">"test"</span><span
                style="color:black">;</span></span></span></p>
<p style="margin-left:36px"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:black">}</span></span></span></p>
<p style="margin-left:36px"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:black">&nbsp;</span></span></span></p>
<p style="margin-left:36px"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#ffc000">@RequestMapping</span><span style="color:black">(</span><span
                style="color:maroon">"/test</span><span style="color:maroon">1</span><span
                style="color:maroon">"</span><span style="color:black">)&nbsp;&nbsp;&nbsp;&nbsp;</span></span></span>
</p>
<p style="margin-left:36px"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:blue">public</span>&nbsp;<span style="color:#8000ff">String</span><span
                style="color:black">&nbsp;testValid</span><span style="color:black">ated</span><span
                style="color:black">(</span><span style="color:#ffc000">@Valid</span><span
                style="color:#ffc000">ated</span><span
                style="color:black">&nbsp;User&nbsp;user,&nbsp;BindingResult&nbsp;result){</span></span></span></p>
<p style="margin-left:36px"><span style="font-size:12.0pt"><span style="color:black">&nbsp;<span
                style="font-family:&quot;Microsoft YaHei UI&quot;">&nbsp;&nbsp; …</span></span></span></p>
<p style="margin-left:36px"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">&nbsp;&nbsp;&nbsp;&nbsp;<span
                style="color:blue">return</span>&nbsp;<span style="color:maroon">"test"</span><span
                style="color:black">;</span></span></span></p>
<p style="margin-left:36px"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:black">}</span></span></span></p>
<p style="margin-left:36px"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:black">&nbsp;</span></span></span></p>
<ul style="list-style-type:disc">
    <li><span style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">当请求时，就会对实体类参数是否为空进行验证</span></span></li>
</ul>
<p style="margin-left:36px"><span style="font-size:13.5pt"><span
            style="font-family:&quot;Microsoft YaHei UI&quot;"><span style="color:#24292e">&nbsp;</span></span></span>
</p>
<p><span style="font-size:13.5pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                style="color:#24292e">&nbsp;</span></span></span></p>
<p><span style="font-size:13.5pt"><span style="color:#24292e"><strong><span
                    style="font-family:&quot;Comic Sans MS&quot;">@Valid</span></strong><strong><span
                    style="font-family:&quot;Comic Sans MS&quot;"> / </span></strong><strong><span
                    style="font-family:&quot;Comic Sans MS&quot;">@Validated</span></strong> <strong><span
                    style="font-family:&quot;Microsoft YaHei UI&quot;">嵌套验证</span></strong></span></span></p>
<p style="margin-left: 36px;"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                style="color:#24292e">当一个实体类引用另一个实体类作为参数时，被引用的实体类的参数验证注解无法执行，因此需要</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:#24292e">@Valid</span></span><span
            style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                style="color:#24292e">注解在被引用的实体类参数上，</span></span><span
            style="font-family:&quot;Microsoft YaHei UI&quot;">提示验证框架对嵌套的实体类也执行验证</span></span></p>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                style="color:#70ad47"><strong>示例</strong></span></span></span></p>
<ul style="list-style-type:disc">
    <li><span style="color:#e67e22;"><span style="font-size:12.0pt"><span
                    style="font-family:&quot;Comic Sans MS&quot;">School.java</span></span></span></li>
</ul>
<p style="margin-left:72px"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:blue">public</span></span>&nbsp;<span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:blue">class</span></span>&nbsp;<span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:black">User</span></span>&nbsp;<span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:black">{</span></span></span></p>
<p style="margin-left:72px"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
<p style="margin-left:72px"><span style="font-size:12.0pt">&nbsp;&nbsp;&nbsp; <span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:#ffc000">@Valid</span></span></span></p>
<p style="margin-left:72px"><span style="font-size:12.0pt">&nbsp;&nbsp;&nbsp;&nbsp;<span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:#ffc000">@NotNull</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">(message</span></span>&nbsp;<span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">=</span></span>&nbsp;<span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:maroon">"uid</span></span><span
            style="font-family:&quot;Microsoft YaHei UI&quot;"><span style="color:maroon">不能为空</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:maroon">"</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">)</span></span></span></p>
<p style="margin-left:72px"><span style="font-size:12.0pt">&nbsp;&nbsp;&nbsp;&nbsp;<span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:#ffc000">@Min</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">(value</span></span>&nbsp;<span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">=</span></span>&nbsp;<span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:red">1</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">,</span></span>&nbsp;<span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">message</span></span>&nbsp;<span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">=</span></span>&nbsp;<span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:maroon">"uid</span></span><span
            style="font-family:&quot;Microsoft YaHei UI&quot;"><span style="color:maroon">必须为正整数</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:maroon">"</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">)</span></span></span></p>
<p style="margin-left:72px"><span style="font-size:12.0pt">&nbsp;&nbsp;&nbsp;&nbsp;<span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:blue">private</span></span>&nbsp;<span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:#8000ff">int</span></span>&nbsp;<span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">id;</span></span></span></p>
<p style="margin-left:72px"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
<p style="margin-left:72px"><span style="font-size:12.0pt">&nbsp;&nbsp;&nbsp; <span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:#ffc000">@Valid</span></span></span></p>
<p style="margin-left:72px"><span style="font-size:12.0pt">&nbsp;&nbsp;&nbsp;&nbsp;<span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:#ffc000">@NotNull</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">(message</span></span>&nbsp;<span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">=</span></span>&nbsp;<span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:maroon">"age</span></span><span
            style="font-family:&quot;Microsoft YaHei UI&quot;"><span style="color:maroon">不能为空</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:maroon">"</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">)</span></span></span></p>
<p style="margin-left:72px"><span style="font-size:12.0pt">&nbsp;&nbsp;&nbsp;&nbsp;<span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:#ffc000">@Min</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">(value</span></span>&nbsp;<span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">=</span></span>&nbsp;<span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:red">1</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">,</span></span>&nbsp;<span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">message</span></span>&nbsp;<span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">=</span></span>&nbsp;<span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:maroon">"age</span></span><span
            style="font-family:&quot;Microsoft YaHei UI&quot;"><span style="color:maroon">必须为正整数</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:maroon">"</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">)</span></span></span></p>
<p style="margin-left:72px"><span style="font-size:12.0pt">&nbsp;&nbsp;&nbsp;&nbsp;<span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:blue">private</span></span>&nbsp;<span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:#8000ff">int</span></span>&nbsp;<span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">age;</span></span></span></p>
<p style="margin-left:72px"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:black">}</span></span></span></p>
<p style="margin-left:72px"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:black">&nbsp;</span></span></span></p>
<ul style="list-style-type:disc">
    <li><span style="color:#e67e22;"><span style="font-size:12.0pt"><span
                    style="font-family:&quot;Comic Sans MS&quot;">User.java</span></span></span></li>
</ul>
<p style="margin-left:72px"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:blue">public</span></span>&nbsp;<span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:blue">class</span></span>&nbsp;<span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:black">User</span></span>&nbsp;<span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:black">{</span></span></span></p>
<p style="margin-left:72px"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
<p style="margin-left:72px"><span style="font-size:12.0pt">&nbsp;&nbsp;&nbsp;&nbsp;<span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:#ffc000">@NotNull</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">(message</span></span>&nbsp;<span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">=</span></span>&nbsp;<span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:maroon">"uid</span></span><span
            style="font-family:&quot;Microsoft YaHei UI&quot;"><span style="color:maroon">不能为空</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:maroon">"</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">)</span></span></span></p>
<p style="margin-left:72px"><span style="font-size:12.0pt">&nbsp;&nbsp;&nbsp;&nbsp;<span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:blue">private</span></span>&nbsp;<span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:#8000ff">int</span></span>&nbsp;<span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">uid;</span></span></span></p>
<p style="margin-left:72px"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
<p style="margin-left:72px"><span style="font-size:12.0pt">&nbsp;&nbsp;&nbsp;&nbsp;<span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:#ffc000">@NotNull</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">(message</span></span>&nbsp;<span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">=</span></span>&nbsp;<span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:maroon">"age</span></span><span
            style="font-family:&quot;Microsoft YaHei UI&quot;"><span style="color:maroon">不能为空</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:maroon">"</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">)</span></span></span></p>
<p style="margin-left:72px"><span style="font-size:12.0pt">&nbsp;&nbsp;&nbsp;&nbsp;<span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:blue">private</span></span>&nbsp;<span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:#8000ff">int</span></span>&nbsp;<span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">age;</span></span></span></p>
<p style="margin-left:72px"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:black">&nbsp;</span></span></span></p>
<p style="margin-left:72px"><span style="font-size:12.0pt">&nbsp;&nbsp;&nbsp;&nbsp;<span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:#ffc000">@NotNull</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">(message</span></span>&nbsp;<span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">=</span></span>&nbsp;<span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:maroon">"age</span></span><span
            style="font-family:&quot;Microsoft YaHei UI&quot;"><span style="color:maroon">不能为空</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:maroon">"</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">)</span></span></span></p>
<p style="margin-left:72px"><span style="font-size:12.0pt">&nbsp;&nbsp;&nbsp;&nbsp;<span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:blue">private</span></span>&nbsp;<span
            style="font-family:&quot;Comic Sans MS&quot;">School school</span><span
            style="font-family:&quot;Comic Sans MS&quot;">;</span></span></p>
<p style="margin-left:72px"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:black">}</span></span></span></p>
<p style="margin-left:72px"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:black">&nbsp;</span></span></span></p>
<ul style="list-style-type:disc">
    <li><span style="color:#e67e22;"><span style="font-size:12.0pt"><span
                    style="font-family:&quot;Comic Sans MS&quot;">MainController.java</span></span></span></li>
</ul>
<p style="margin-left:72px"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#ffc000">@RequestMapping</span><span style="color:black">(</span><span
                style="color:maroon">"/test"</span><span
                style="color:black">)&nbsp;&nbsp;&nbsp;&nbsp;</span></span></span></p>
<p style="margin-left:72px"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:blue">public</span>&nbsp;<span style="color:#8000ff">String</span><span
                style="color:black">&nbsp;testValid(</span><span style="color:#ffc000">@Valid</span><span
                style="color:black">&nbsp;User&nbsp;user,&nbsp;BindingResult&nbsp;result){</span></span></span></p>
<p style="margin-left:72px"><span style="font-size:12.0pt"><span style="color:black">&nbsp;<span
                style="font-family:&quot;Microsoft YaHei UI&quot;">&nbsp;&nbsp; …</span></span></span></p>
<p style="margin-left:72px"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">&nbsp;&nbsp;&nbsp;&nbsp;<span
                style="color:blue">return</span>&nbsp;<span style="color:maroon">"test"</span><span
                style="color:black">;</span></span></span></p>
<p style="margin-left:72px"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:black">}</span></span></span></p>
<p style="margin-left:72px"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:black">&nbsp;</span></span></span></p>
<p style="margin-left:72px"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#ffc000">@RequestMapping</span><span style="color:black">(</span><span
                style="color:maroon">"/test</span><span style="color:maroon">1</span><span
                style="color:maroon">"</span><span style="color:black">)&nbsp;&nbsp;&nbsp;&nbsp;</span></span></span>
</p>
<p style="margin-left:72px"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:blue">public</span>&nbsp;<span style="color:#8000ff">String</span><span
                style="color:black">&nbsp;testValid</span><span style="color:black">ated</span><span
                style="color:black">(</span><span style="color:#ffc000">@Valid</span><span
                style="color:#ffc000">ated</span><span
                style="color:black">&nbsp;User&nbsp;user,&nbsp;BindingResult&nbsp;result){</span></span></span></p>
<p style="margin-left:72px"><span style="font-size:12.0pt"><span style="color:black">&nbsp;<span
                style="font-family:&quot;Microsoft YaHei UI&quot;">&nbsp;&nbsp; …</span></span></span></p>
<p style="margin-left:72px"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">&nbsp;&nbsp;&nbsp;&nbsp;<span
                style="color:blue">return</span>&nbsp;<span style="color:maroon">"test"</span><span
                style="color:black">;</span></span></span></p>
<p style="margin-left:72px"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:black">}</span></span></span></p>
<p style="margin-left:72px"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:black">&nbsp;</span></span></span></p>
<ul style="list-style-type:disc">
    <li><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">通过嵌套</span></span> <span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">@Valid</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">+</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">@Valid</span></span> <span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">或</span></span> <span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">@Valid</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">+</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">@Valid</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">ated </span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">注解，请求执行时会同时对</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"> School </span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">和</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"> User </span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">中的参数进行非空和数值不为负数的验证</span></span></li>
</ul>
<table summary="" cellspacing="0"
    style="border-collapse:collapse; border-color:#a3a3a3; border-style:solid; border-width:0px; margin-left:68px"
    class=" cke_show_border">
    <tbody>
        <tr>
            <td
                style="background-color:white; border-bottom:0px; border-left:0px; border-right:0px; border-top:0px; vertical-align:top; width:.6381in">
                <p><span style="font-size:12.0pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
            </td>
        </tr>
    </tbody>
</table>
