---
categories:
- Spring
tags:
- ‹aop:afterthrowing›
date:
- 2022-11-28 8:36:42
---

<ul style="list-style-type:disc">
    <li><span style="font-size:12.0pt"><span style="background-color:white"><span
                    style="font-family:-apple-system">原始方法抛出异常后执行，如果原始方法没有抛出异常，无法执行</span></span></span></li>
</ul>
<p><span style="font-size:12.0pt"><span style="background-color:white"><span
                style="font-family:-apple-system"></span></span></span><br></p>
<ul style="list-style-type:disc">
    <li><span style="font-size:12.0pt"><span style="background-color:white"><span
                    style="font-family:-apple-system">主要对原始方法中出现的异常，获取通知信息进行处理</span></span></span></li>
</ul>
<p><span style="font-size:12.0pt"><span
            style="font-family:&quot;Microsoft YaHei UI&quot;"><strong>语法</strong></span></span></p>
<p style="margin-left: 40px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#333333">&lt;aop:</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;">afterthrowing</span>&nbsp;<span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:#333333">method="</span></span><span
            style="font-family:&quot;Microsoft YaHei UI&quot;"><span style="color:#333333">执行方法</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:#333333">"</span></span>&nbsp;<span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:#333333">pointcut="</span></span><span
            style="font-family:&quot;Microsoft YaHei UI&quot;"><span style="color:#333333">切入表达式</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:#333333">"</span></span>&nbsp; <span
            style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#333333">throwing="t"/&gt;</span></span></span></p>
<p style="margin-left: 40px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#333333">&nbsp;</span></span></span></p>
<p style="margin-left: 40px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#333333">&lt;aop:</span></span></span><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">afterthrowing</span></span>&nbsp;<span
        style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#333333">method="</span></span></span><span style="font-size:12.0pt"><span
            style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                style="color:#333333">执行方法</span></span></span><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:#333333">"</span></span></span>&nbsp;<span
        style="font-size:11.5pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#17233f">pointcut-ref</span></span></span><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:#333333">="</span></span></span><span
        style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                style="color:#333333">切入表达式</span></span></span><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:#333333">id</span></span></span><span
        style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#333333">"</span></span></span> <span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#333333">throwing="t"/&gt;</span></span></span></p>
<p style="margin-left: 40px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#333333">&nbsp;</span></span></span></p>
<table summary="" cellspacing="0"
    style="border-collapse:collapse; border-color:#a3a3a3; border-style:solid; border-width:1px; margin-left:32px"
    class=" cke_show_border">
    <tbody>
        <tr>
            <td
                style="background-color:black; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.1173in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:white"><strong>参数</strong></span></span></span></p>
            </td>
            <td
                style="background-color:black; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:5.5909in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:white"><strong>描述</strong></span></span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.1173in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;">method</span></span></p>
            </td>
            <td
                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:5.5909in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">在通知类中设置当前通知类别对应的方法</span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.1173in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;">pointcut</span></span></p>
            </td>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:5.5909in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">设置当前通知对应的切入点表达式，不能同时使用</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">pointcut-ref</span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.1368in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:#17233f"><span
                                    style="background-color:white">pointcut-ref</span></span></span></span></p>
            </td>
            <td
                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:5.5715in">
                <p><span style="font-size:11.5pt"><span style="color:#17233f"><span style="background-color:white"><span
                                    style="font-family:&quot;Microsoft YaHei UI&quot;">设置当前通知对应的切入点</span></span><span
                                style="background-color:white"><span
                                    style="font-family:&quot;Comic Sans MS&quot;">id</span></span><span
                                style="background-color:white"><span
                                    style="font-family:&quot;Microsoft YaHei UI&quot;">，不能同时使用</span></span><span
                                style="background-color:white"><span
                                    style="font-family:&quot;Comic Sans MS&quot;">pointcut</span></span></span></span>
                </p>
            </td>
        </tr>
        <tr>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.1173in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:#333333">throwing</span></span></span></p>
            </td>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:5.5909in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">自定义变量</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">,</span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">注意的是</span><span
                            style="font-family:&quot;Comic Sans MS&quot;"> throwing </span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">属性的值必须要方法的参数名一致，否则会报错</span></span></p>
            </td>
        </tr>
    </tbody>
</table>
<p><span style="color:#27ae60;"><span style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;"><strong>示例</strong></span></span></span></p>
<ul style="list-style-type:disc">
    <li><span style="color:#e67e22;"><span style="font-size:12.0pt"><span
                    style="font-family:&quot;Comic Sans MS&quot;">application.xml</span></span></span></li>
</ul>
<table summary="" cellspacing="0"
    style="border-collapse:collapse; border-color:#a3a3a3; border-style:solid; border-width:0px; margin-left:68px"
    class=" cke_show_border">
    <tbody>
        <tr>
            <td
                style="background-color:white; border-bottom:0px; border-left:0px; border-right:0px; border-top:0px; vertical-align:top; width:9.0888in">
                <p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">&lt;aop:aspect&nbsp;ref</span><span style="color:black">=</span><span
                                style="color:maroon">"adviceId"</span><span style="color:blue">&gt;</span></span></span>
                </p>
                <p><span style="font-size:12.0pt">&nbsp;&nbsp;&nbsp; <span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:green">&lt;!--</span></span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:green">直接配置切入点</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:green">--&gt;</span></span></span></p>
                <p><span style="font-size:12.0pt">&nbsp;&nbsp;&nbsp;&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">&lt;aop:a</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">fterthrowing</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">&nbsp;method</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">=</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:maroon">"</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:maroon">afterThrowing</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:maroon">"</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">&nbsp;pointcut</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">=</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:maroon">"execution(</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:black">*</span></span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:black">com.</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:black">exi.service.</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:black">LogAspectHandler.*.*(..)</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:maroon">)"</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">/&gt;</span></span></span></p>
                <p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">&lt;/aop:aspect&gt;</span></span></span></p>
            </td>
        </tr>
    </tbody>
</table>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei&quot;"><span
                style="color:#17233f">&nbsp;</span></span></span></p>
<p style="margin-left:72px"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:blue">&lt;aop:pointcut</span></span>&nbsp;<span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:blue">id</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">=</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:maroon">"pt"</span></span>&nbsp;<span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:blue">expression</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">=</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:maroon">"execution(</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">*</span></span>&nbsp;<span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">com.</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">exi.service.</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:black">LogAspectHandler.*.*(..)</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:maroon">)"</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:blue">/&gt;</span></span></span></p>
<p style="margin-left:72px"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:blue">&lt;aop:aspect</span></span>&nbsp;<span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:blue">ref</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">=</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:maroon">"adviceId"</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:blue">&gt;</span></span></span></p>
<p style="margin-left:72px"><span style="font-size:12.0pt">&nbsp;&nbsp;&nbsp;&nbsp;<span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:green">&lt;!--</span></span><span
            style="font-family:&quot;Microsoft YaHei UI&quot;"><span style="color:green">使用公共切入点</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:green">--&gt;</span></span></span></p>
<p style="margin-left:72px"><span style="font-size:12.0pt">&nbsp;&nbsp;&nbsp;&nbsp;<span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:blue">&lt;aop:a</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:blue">fterthrowing</span></span>&nbsp;<span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:blue">method</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">=</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:maroon">"</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:maroon">afterThrowing</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:maroon">"</span></span>&nbsp;<span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:blue">pointcut-ref</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">=</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:maroon">"pt"</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:blue">/&gt;</span></span></span></p>
<p style="margin-left:72px"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:blue">&lt;/aop:aspect&gt;</span></span></span></p>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei&quot;"><span
                style="color:#17233f">&nbsp;</span></span></span></p>
<ul style="list-style-type:disc">
    <li><span style="color:#e67e22;"><span style="font-size:12.0pt"><span
                    style="font-family:&quot;Comic Sans MS&quot;">LogAspectHandler</span></span><span
                style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">.java</span></span></span>
    </li>
</ul>
<p style="margin-left:72px"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:blue">public</span></span>&nbsp;<span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:blue">class</span></span>&nbsp;<span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:black">LogAspectHandler</span></span>&nbsp;<span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">{</span></span></span></p>
<p style="margin-left:72px"><span style="font-size:12.0pt">&nbsp;&nbsp;&nbsp;&nbsp;<span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:blue">public</span></span>&nbsp;<span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:#8000ff">void</span></span>&nbsp;<span
            style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:black">afterThrowing(JoinPoint</span></span>&nbsp;<span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">joinPoint,</span></span>&nbsp;<span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">Throwable</span></span>&nbsp;<span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">ex)</span></span>&nbsp;<span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">{</span></span></span></p>
<p style="margin-left:72px"><span style="font-size:12.0pt"><span
            style="color:black">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
                style="font-family:&quot;Comic Sans MS&quot;">Signature</span>&nbsp;<span
                style="font-family:&quot;Comic Sans MS&quot;">signature</span>&nbsp;<span
                style="font-family:&quot;Comic Sans MS&quot;">=</span>&nbsp;<span
                style="font-family:&quot;Comic Sans MS&quot;">joinPoint.getSignature();</span></span></span></p>
<p style="margin-left:72px"><span style="font-size:12.0pt">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:#8000ff">String</span></span>&nbsp;<span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">method</span></span>&nbsp;<span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">=</span></span>&nbsp;<span
            style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:black">signature.getName();</span></span></span></p>
<p style="margin-left:108px"><span style="font-size:12.0pt">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:green">//</span></span><span
            style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                style="color:green">&nbsp;处理异常的逻辑</span></span></span></p>
<p style="margin-left:108px"><span style="font-size:12.0pt">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">log.info(</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:maroon">"</span></span><span
            style="font-family:&quot;Microsoft YaHei UI&quot;"><span style="color:maroon">执行方法</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:maroon">{}</span></span><span
            style="font-family:&quot;Microsoft YaHei UI&quot;"><span style="color:maroon">出错，异常为：</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:maroon">{}"</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">,</span></span>&nbsp;<span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">method,</span></span>&nbsp;<span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">ex);</span></span></span></p>
<p style="margin-left:72px"><span style="font-size:12.0pt"><span style="color:black">&nbsp;&nbsp;&nbsp;&nbsp;<span
                style="font-family:&quot;Comic Sans MS&quot;">}</span></span></span></p>
<p style="margin-left:72px"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:black">}</span></span></span></p>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#ed7d31">&nbsp;</span></span></span></p>