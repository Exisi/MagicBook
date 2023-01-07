---
categories:
- Spring
tags:
- ［@Scope］
date:
- 2022-11-28 8:09:54
---

<ul style="list-style-type:disc">
    <li><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">配置</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">bean</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">的作用域</span></span></li>
</ul>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                style="color:#24292e">&nbsp;</span></span></span></p>
<table summary="" cellspacing="0"
    style="border-collapse:collapse; border-color:#a3a3a3; border-style:solid; border-width:1px; margin-left:32px"
    class=" cke_show_border">
    <tbody>
        <tr>
            <td
                style="background-color:black; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.0312in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:white"><strong>参数</strong></span></span></span></p>
            </td>
            <td
                style="background-color:black; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:5.8305in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:white"><strong>描述</strong></span></span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.043in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;">proxyMode</span></span></p>
            </td>
            <td
                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:5.8881in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">指定是否应将组件配置为作用域代理，如果是，则代理应基于接口还是基于子类。</span></span>
                </p>
            </td>
        </tr>
        <tr>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.05in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;">scopeName</span></span></p>
            </td>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:5.8118in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">指定用于带注释的组件</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">/bean </span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">的范围的名称</span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="background-color:white; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.0312in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;">value</span></span></p>
            </td>
            <td
                style="background-color:white; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:5.8305in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;">scopeName</span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">的别名</span></span></p>
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
                style="background-color:white; border-bottom:0px; border-left:0px; border-right:0px; border-top:0px; vertical-align:top; width:2.4222in">
                <p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:#ffc000">@Controller</span></span></span></p>
                <p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:#ffc000">@RequestMapping</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">(</span></span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:black">“</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:black">/test</span></span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:black">”</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:black">)</span></span></span></p>
                <p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:#ffc000">@Scope</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">(</span></span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:black">“</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:black">prototype</span></span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:black">”</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:black">)</span></span></span></p>
                <p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">public</span></span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">class</span></span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:black">TestController</span></span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:black">{</span></span></span></p>
                <p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:black">}</span></span></span></p>
                <p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:black">&nbsp;</span></span></span></p>
            </td>
        </tr>
    </tbody>
</table>
<ul style="list-style-type:disc">
    <li><span style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">默认是单例模式，即</span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Comic Sans MS&quot;">@Scope("singleton")</span></span></li>
</ul>
<table summary="" cellspacing="0"
    style="border-collapse:collapse; border-color:#a3a3a3; border-style:solid; border-width:1px; margin-left:68px"
    class=" cke_show_border">
    <tbody>
        <tr>
            <td
                style="background-color:black; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.1576in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:white"><strong>模式</strong></span></span></span></p>
            </td>
            <td
                style="background-color:black; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:6.2284in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:white"><strong>描述</strong></span></span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.1576in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:#24292e">singleton</span></span></span></p>
            </td>
            <td
                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:6.2284in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:#24292e">单例，即容器里只有一个实例对象。</span></span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.1576in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:#24292e">prototype</span></span></span></p>
            </td>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:6.2979in">
                <p><span style="font-size:11.5pt"><span style="color:#24292e"><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">多对象，每一次请求都会产生一个新的</span><span
                                style="font-family:&quot;Comic Sans MS&quot;">bean</span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">实例，</span><span
                                style="font-family:&quot;Comic Sans MS&quot;">Spring</span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">不无法对一个</span><span
                                style="font-family:&quot;Comic Sans MS&quot;">prototype bean</span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">的整个生命周期负责，容器在初始化、配置、装饰或者是装配完一个</span><span
                                style="font-family:&quot;Comic Sans MS&quot;">prototype</span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">实例后，将它交给客户端，由程序员负责销毁该对象，不管何种作用域，容器都会调用所有对象的初始化生命周期回调方法，而对</span><span
                                style="font-family:&quot;Comic Sans MS&quot;">prototype</span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">而言，任何配置好的析构生命周期回调方法都将不会被调用</span></span></span>
                </p>
            </td>
        </tr>
        <tr>
            <td
                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.1576in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:#24292e">request</span></span></span></p>
            </td>
            <td
                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:6.2979in">
                <p><span style="font-size:11.5pt"><span style="color:#24292e"><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">对每一次</span><span
                                style="font-family:&quot;Comic Sans MS&quot;">HTTP</span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">请求都会产生一个新的</span><span
                                style="font-family:&quot;Comic Sans MS&quot;">bean</span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">，同时该</span><span
                                style="font-family:&quot;Comic Sans MS&quot;">bean</span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">仅在当前</span><span
                                style="font-family:&quot;Comic Sans MS&quot;">HTTP request</span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">内有效</span></span></span></p>
            </td>
        </tr>
    </tbody>
</table>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#24292e">&nbsp;</span></span></span></p>
<ul style="list-style-type:disc">
    <li><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">web.xml</span></span></li>
</ul>
<p style="margin-left:72px"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:blue">&lt;listener&gt;</span></span></span></p>
<p style="margin-left:72px"><span style="font-size:12.0pt">&nbsp;&nbsp;<span
            style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:blue">&lt;listener-class&gt;</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:black">org.springframework.web.context.request.RequestContextListener</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:blue">&lt;/listener-class&gt;</span></span></span></p>
<p style="margin-left:72px"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:blue">&lt;/listener&gt;</span></span></span></p>
<p style="margin-left:72px"><span style="font-size:12.0pt"><span style="color:green"><span
                style="font-family:&quot;Comic Sans MS&quot;">&lt;!--</span>&nbsp;<span
                style="font-family:&quot;Comic Sans MS&quot;">session</span><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">：该针对每一次</span><span
                style="font-family:&quot;Comic Sans MS&quot;">HTTP</span><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">请求都会产生一个新的</span><span
                style="font-family:&quot;Comic Sans MS&quot;">bean</span><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">，同时该</span><span
                style="font-family:&quot;Comic Sans MS&quot;">bean</span><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">仅在当前</span><span
                style="font-family:&quot;Comic Sans MS&quot;">HTTP</span>&nbsp;<span
                style="font-family:&quot;Comic Sans MS&quot;">session</span><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">内有效。也要在</span><span
                style="font-family:&quot;Comic Sans MS&quot;">web.xml</span><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">配置如下代码：&nbsp;</span><span
                style="font-family:&quot;Comic Sans MS&quot;">--&gt;</span></span></span></p>
<p style="margin-left:72px"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:blue">&lt;listener&gt;</span></span></span></p>
<p style="margin-left:72px"><span style="font-size:12.0pt">&nbsp;&nbsp;<span
            style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:blue">&lt;listener-class&gt;</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:black">org.springframework.web.context.request.RequestContextListener</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:blue">&lt;/listener-class&gt;</span></span></span></p>
<p style="margin-left:72px"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:blue">&lt;/listener&gt;</span></span></span></p>
<p style="margin-left:72px"><span style="font-size:12.0pt"><span style="color:green"><span
                style="font-family:&quot;Comic Sans MS&quot;">&lt;!--</span>&nbsp;<span
                style="font-family:&quot;Comic Sans MS&quot;">global</span>&nbsp;<span
                style="font-family:&quot;Comic Sans MS&quot;">session</span><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">：作用不大&nbsp;</span><span
                style="font-family:&quot;Comic Sans MS&quot;">--&gt;</span></span></span></p>
<p style="margin-left:72px"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#ed7d31">&nbsp;</span></span></span></p>
<p style="margin-left:36px"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#24292e">&nbsp;</span></span></span>​​​​​​​</p>