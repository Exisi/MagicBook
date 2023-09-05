---
categories:
  - Spring Boot
tags:
  - ［@SpringBootTest］
date:
  - 2022-9-28 15:09:45
---

<ul style="list-style-type:disc">
    <li><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">SpringBoot
            </span></span><span style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">提供了一个&nbsp;</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                    style="color:#e83e8c">@SpringBootTest</span></span></span><span style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">&nbsp;注解，当需要</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">SpringBoot </span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">特性时，它可以作为标准&nbsp;</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                    style="color:#e83e8c">spring-test</span></span></span><span style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">中</span></span><span style="font-size:12.0pt"><span
                style="font-family:&quot;Comic Sans MS&quot;"><span
                    style="color:#e83e8c">@ContextConfiguration</span></span></span><span style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">&nbsp;注解的替代。注解的工作方式是通过&nbsp;</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                    style="color:#e83e8c">SpringApplication</span></span></span><span style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">&nbsp;创建测试中使用的</span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Comic Sans MS&quot;">ApplicationConte</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">xt</span></span></li>
</ul>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
<table summary="" cellspacing="0"
    style="border-collapse:collapse; border-color:#a3a3a3; border-style:solid; border-width:1px; margin-left:32px"
    class=" cke_show_border">
    <tbody>
        <tr>
            <td
                style="background-color:black; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.4305in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:white"><strong>参数</strong></span></span></span></p>
            </td>
            <td
                style="background-color:black; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:7.1694in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:white"><strong>描述</strong></span></span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.4305in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;">value</span></span></p>
            </td>
            <td
                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:7.1694in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">测试的类名</span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.4305in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;">properties</span></span></p>
            </td>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:7.1694in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">设置全局配置参数</span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.4305in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Comic Sans MS&quot;">args</span></span>
                </p>
            </td>
            <td
                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:7.1694in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">应用程序参数，如果应用程序需要参数，可以使用</span><span
                            style="font-family:&quot;Comic Sans MS&quot;"> args </span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">属性注入它们</span></span></p>
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">例如</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">args = "--app.name=test"</span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.4305in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;">classes</span></span></p>
            </td>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:7.1694in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">测试的类</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">class</span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.4305in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;">webEnvironment</span></span></p>
            </td>
            <td
                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:7.1694in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">启动一个虚拟的</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">web</span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">测试环境</span></span></p>
                <table summary="" cellspacing="0"
                    style="border-collapse:collapse; border-color:#a3a3a3; border-style:solid; border-width:1px; "
                    class=" cke_show_border">
                    <tbody>
                        <tr>
                            <td
                                style="background-color:black; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.3444in">
                                <p><span style="font-size:10.5pt"><span
                                            style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                                style="color:white"><strong>参数</strong></span></span></span></p>
                            </td>
                            <td
                                style="background-color:black; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:5.1416in">
                                <p><span style="font-size:10.5pt"><span
                                            style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                                style="color:white"><strong>描述</strong></span></span></span></p>
                            </td>
                        </tr>
                        <tr>
                            <td
                                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.3444in">
                                <p><span style="font-size:10.5pt"><span
                                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                                style="color:#111111">MOCK</span></span></span></p>
                            </td>
                            <td
                                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:5.1673in">
                                <p><span style="font-size:10.5pt"><span style="color:#111111"><span
                                                style="font-family:&quot;Microsoft YaHei UI&quot;">此值为默认值，该类型提供一个</span><span
                                                style="font-family:&quot;Comic Sans MS&quot;">mock</span><span
                                                style="font-family:&quot;Microsoft YaHei UI&quot;">环境，可以和</span><span
                                                style="font-family:&quot;Comic Sans MS&quot;">@AutoConfigureMockMvc</span><span
                                                style="font-family:&quot;Microsoft YaHei UI&quot;">或</span><span
                                                style="font-family:&quot;Comic Sans MS&quot;">@AutoConfigureWebTestClient</span><span
                                                style="font-family:&quot;Microsoft YaHei UI&quot;">搭配使用，开启</span><span
                                                style="font-family:&quot;Comic Sans MS&quot;">Mock</span><span
                                                style="font-family:&quot;Microsoft YaHei UI&quot;">相关的功能。注意此时内嵌的服务（</span><span
                                                style="font-family:&quot;Comic Sans MS&quot;">servlet</span><span
                                                style="font-family:&quot;Microsoft YaHei UI&quot;">容器）并没有真正启动，也不会监听</span><span
                                                style="font-family:&quot;Comic Sans MS&quot;">web</span><span
                                                style="font-family:&quot;Microsoft YaHei UI&quot;">服务端口。</span></span></span>
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td
                                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.352in">
                                <p><span style="font-size:10.5pt"><span
                                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                                style="color:#111111">RANDOM_PORT</span></span></span></p>
                            </td>
                            <td
                                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:5.1333in">
                                <p><span style="font-size:10.5pt"><span style="color:#111111"><span
                                                style="font-family:&quot;Microsoft YaHei UI&quot;">启动一个真实的</span><span
                                                style="font-family:&quot;Comic Sans MS&quot;">web</span><span
                                                style="font-family:&quot;Microsoft YaHei UI&quot;">服务，监听一个随机端口。</span></span></span>
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td
                                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.3631in">
                                <p><span style="font-size:10.5pt"><span
                                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                                style="color:#111111">DEFINED_PORT</span></span></span></p>
                            </td>
                            <td
                                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:5.1222in">
                                <p><span style="font-size:10.5pt"><span style="color:#111111"><span
                                                style="font-family:&quot;Microsoft YaHei UI&quot;">启动一个真实的</span><span
                                                style="font-family:&quot;Comic Sans MS&quot;">web</span><span
                                                style="font-family:&quot;Microsoft YaHei UI&quot;">服务，监听一个定义好的端口（从</span><span
                                                style="font-family:&quot;Comic Sans MS&quot;">application.properties</span><span
                                                style="font-family:&quot;Microsoft YaHei UI&quot;">读取）。</span></span></span>
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td
                                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.3444in">
                                <p><span style="font-size:10.5pt"><span
                                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                                style="color:#111111">NONE</span></span></span></p>
                            </td>
                            <td
                                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:5.1416in">
                                <p><span style="font-size:10.5pt"><span style="color:#111111"><span
                                                style="font-family:&quot;Microsoft YaHei UI&quot;">启动一个非</span><span
                                                style="font-family:&quot;Comic Sans MS&quot;">web</span><span
                                                style="font-family:&quot;Microsoft YaHei UI&quot;">的</span><span
                                                style="font-family:&quot;Comic Sans MS&quot;">ApplicationContext</span><span
                                                style="font-family:&quot;Microsoft YaHei UI&quot;">，既不提供</span><span
                                                style="font-family:&quot;Comic Sans MS&quot;">mock</span><span
                                                style="font-family:&quot;Microsoft YaHei UI&quot;">环境，也不提供真实的</span><span
                                                style="font-family:&quot;Comic Sans MS&quot;">web</span><span
                                                style="font-family:&quot;Microsoft YaHei UI&quot;">服务。</span></span></span>
                                </p>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
            </td>
        </tr>
    </tbody>
</table>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                style="color:#70ad47"><strong>示例</strong></span></span></span></p>
<p style="margin-left:36px"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#ffc000">@SpringBootTest</span><span style="color:#ffc000">(</span>classes =
            MyController.class, </span></span></p>
<p style="margin-left:252px"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">webEnvironment =
            SpringBootTest.WebEnvironment.RANDOM_PORT<span style="color:#ffc000">)</span></span></span></p>
<p style="margin-left:36px"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:blue">public</span>&nbsp;<span style="color:blue">class</span><span
                style="color:black">&nbsp;SpringBootApplicationTests&nbsp;{</span></span></span></p>
<p style="margin-left:36px"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Microsoft YaHei&quot;">&nbsp;</span></span></p>
<p style="margin-left:36px"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#ffc000">&nbsp;&nbsp;&nbsp;&nbsp;@Test</span></span></span></p>
<p style="margin-left:36px"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">&nbsp;&nbsp;&nbsp;&nbsp;<span
                style="color:blue">public</span>&nbsp;<span style="color:#8000ff">void</span><span
                style="color:black">&nbsp;testAddUser()&nbsp;{</span></span></span></p>
<p style="margin-left:36px"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:black">&nbsp;&nbsp;&nbsp;&nbsp;...</span></span></span></p>
<p style="margin-left:36px"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:black">&nbsp;&nbsp;&nbsp;&nbsp;}</span></span></span></p>
<p style="margin-left:36px"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:black">}</span></span></span></p>
