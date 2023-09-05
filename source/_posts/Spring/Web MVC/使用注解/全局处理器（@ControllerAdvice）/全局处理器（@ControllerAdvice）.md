---
categories:
  - Spring
tags:
  - ［@ControllerAdvice］
date:
  - 2022-6-28 14:31:22
---

<ul>
    <li><span style="font-size:12.0pt"><span style="font-family:SimSun"><span style="color:#24292e"><span
                        style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:#24292e">@ControllerAdvice</span></span></span><span
                        style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:#24292e">会把使用</span></span></span><span style="font-size:12.0pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:#24292e">@ExceptionHandler</span></span></span><span
                        style="font-size:12.0pt"><span style="font-family:SimSun"><span
                                style="color:#24292e">、</span></span></span><span style="font-size:12.0pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:black">@ModelAttribute</span></span></span><span
                        style="font-size:12.0pt"><span style="font-family:SimSun"><span
                                style="color:black">、</span></span></span><span style="font-size:12.0pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:black">@InitBinder</span></span></span><span style="font-size:12.0pt"><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:#24292e">注解的方法应用到所有的</span></span></span><span
                        style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:#24292e"> @RequestMapping</span></span></span><span
                        style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:#24292e">注解的方法。</span></span></span></span></span></span></li>
</ul>
<p><span style="font-size:12.0pt"><span style="font-family:SimSun"><span style="color:#24292e"><span
                    style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                            style="color:#24292e"></span></span></span></span></span></span><br></p>
<ul>
    <li><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                    style="color:#24292e">@ControllerAdvice</span></span></span><span style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;"><span style="color:black">是</span></span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                    style="color:black">Spring3.2</span></span></span><span style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                    style="color:black">提供的新注解，它是一个</span></span></span><span style="font-size:12.0pt"><span
                style="font-family:&quot;Comic Sans MS&quot;"><span
                    style="color:black">Controller</span></span></span><span style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                    style="color:black">增强器，作用于类上，</span></span></span><span style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                    style="color:#24292e">类似</span></span></span><span style="font-size:12.0pt"><span
                style="font-family:&quot;Comic Sans MS&quot;"><span style="color:#24292e">AOP</span></span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                    style="color:#24292e">中的切面，给</span></span></span><span style="font-size:12.0pt"><span
                style="font-family:&quot;Comic Sans MS&quot;"><span
                    style="color:#24292e">Controller</span></span></span><span style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                    style="color:#24292e">的方法添加事务处理的功能</span></span></span>​​​​​​​</li>
</ul>
<table summary="" cellspacing="0"
    style="border-collapse:collapse; border-color:#a3a3a3; border-style:solid; border-width:1px; margin-left:32px"
    class=" cke_show_border">
    <tbody>
        <tr>
            <td
                style="background-color:black; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.7388in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:white"><strong>参数</strong></span></span></span></p>
            </td>
            <td
                style="background-color:black; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:6.4847in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:white"><strong>描述</strong></span></span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.7388in">
                <p><span style="font-size:12.0pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;">annotations</span></span></p>
            </td>
            <td
                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:6.4847in">
                <p><span style="font-size:12.0pt"><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">注释类型数组。</span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.7388in">
                <p><span style="font-size:12.0pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;">assignableTypes</span></span></p>
            </td>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:6.4847in">
                <p><span style="font-size:12.0pt"><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">数组的类。</span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.7486in">
                <p><span style="font-size:12.0pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;">basePackageClasses</span></span></p>
            </td>
            <td
                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:6.475in">
                <p><span style="font-size:12.0pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;">basePackages()</span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">的类型安全选项，用于指定在其中选择要由带注释的类</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">@ControllerAdvice</span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">通知的控制器的包。</span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.7388in">
                <p><span style="font-size:12.0pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;">basePackages</span></span></p>
            </td>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:6.4847in">
                <p><span style="font-size:12.0pt"><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">基本包的数组。</span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.7388in">
                <p><span style="font-size:12.0pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;">value</span></span></p>
            </td>
            <td
                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:6.4847in">
                <p><span style="font-size:12.0pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;">basePackages()</span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">属性的别名。</span></span></p>
            </td>
        </tr>
    </tbody>
</table>
