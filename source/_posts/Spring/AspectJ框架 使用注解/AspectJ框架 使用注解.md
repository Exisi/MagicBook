---
categories:
  - Spring
tags:
  - AspectJ
date:
  - 2022-11-28 8:40:22
---

<ul style="list-style-type:disc">
    <li><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">开启</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">Spring AOP</span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">注解方式首先要配置</span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Comic Sans MS&quot;">&lt;aop:aspectj-autoproxy/&gt;</span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">标签，我们就以这个标签的解析作为入口来分析</span></span></li>
</ul>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"></span></span><br></p>
<ul style="list-style-type:disc">
    <li><span style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">自动代理调用</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">AspectJ</span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">中的功能，寻找所有目标对象，把每个对象加入切面类的功能，并生成代理，同时代理对象（</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">ServiceProxy</span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">）被修改为内存中的目标对象</span></span></li>
</ul>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                style="color:#70ad47"><strong>示例</strong></span></span></span></p>
<ul style="list-style-type:disc">
    <li><span style="color:#e67e22;"><span style="font-size:12.0pt"><span
                    style="font-family:&quot;Comic Sans MS&quot;">applicationContext.xml</span></span></span></li>
</ul>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">&nbsp;xmlns:aop="http://www.springframework.org/schema/aop"</span></span>
</p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></span></p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span style="color:#538135"><span
                style="font-family:&quot;Comic Sans MS&quot;">&lt;!--</span><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">&nbsp;引入</span><span
                style="font-family:&quot;Comic Sans MS&quot;">aop</span><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">的约束</span> <span
                style="font-family:&quot;Comic Sans MS&quot;">--&gt;</span></span></span></p>
<table summary="" cellspacing="0"
    style="border-collapse:collapse; border-color:#a3a3a3; border-style:solid; border-width:0px; margin-left:68px"
    class=" cke_show_border">
    <tbody>
        <tr>
            <td
                style="background-color:white; border-bottom:0px; border-left:0px; border-right:0px; border-top:0px; vertical-align:top; width:5.9222in">
                <p><span style="font-size:12.0pt"><span style="color:green"><span
                                style="font-family:&quot;Comic Sans MS&quot;">&nbsp; &lt;!--</span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">&nbsp;自动生成代理&nbsp;&nbsp;底层就是</span><span
                                style="font-family:&quot;Comic Sans MS&quot;">AnnotationAwareAspectJautoProxyCreator</span>&nbsp;<span
                                style="font-family:&quot;Comic Sans MS&quot;">--&gt;</span></span></span></p>
                <p><span style="font-size:12.0pt"><span style="color:blue"><span
                                style="font-family:&quot;Comic Sans MS&quot;">&nbsp;
                                &lt;aop:aspectj-autoproxy</span>&nbsp;<span
                                style="font-family:&quot;Comic Sans MS&quot;">/&gt;</span></span></span></p>
                <p style="margin-left: 80px;"><span style="font-size:12.0pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">&nbsp;</span></span></span></p>
            </td>
        </tr>
    </tbody>
</table>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">来自</span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:#538135">&lt; </span></span><a
            data-cke-saved-href="https://blog.csdn.net/heroqiang/article/details/79037741"
            href="https://blog.csdn.net/heroqiang/article/details/79037741"><span
                style="font-family:&quot;Comic Sans MS&quot;">https://blog.csdn.net/heroqiang/article/details/79037741</span></a><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:#538135">&gt;</span></span></span></p>
