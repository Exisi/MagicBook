---
categories:
  - Spring Boot
tags:
  - Test
date:
  - 2022-9-28 15:02:13
---

<ul style="list-style-type:disc">
    <li><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">Spring
                Test</span></span><span style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">与</span></span><span style="font-size:12.0pt"><span
                style="font-family:&quot;Comic Sans MS&quot;">JUnit</span></span><span style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">等其他测试框架结合起来，提供了便捷高效的测试手段。而</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">Spring Boot Test
            </span></span><span style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">是在</span></span><span style="font-size:12.0pt"><span
                style="font-family:&quot;Comic Sans MS&quot;">Spring Test</span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">之上的再次封装，增加了切片测试，增强了</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">mock</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">能力。</span></span></li>
</ul>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
<ul style="list-style-type:disc">
    <li><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">相关依赖</span></span></li>
</ul>
<p style="margin-left:72px"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
                style="color:blue">&lt;dependency&gt;</span></span></span></p>
<p style="margin-left:72px"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
                style="color:blue">&lt;groupId&gt;</span><span style="color:black">org.springframework.boot</span><span
                style="color:blue">&lt;/groupId&gt;</span></span></span></p>
<p style="margin-left:72px"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
                style="color:blue">&lt;artifactId&gt;</span><span
                style="color:black">spring-boot-starter-test</span><span
                style="color:blue">&lt;/artifactId&gt;</span></span></span></p>
<p style="margin-left:72px"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
                style="color:blue">&lt;scope&gt;</span><span style="color:black">test</span><span
                style="color:blue">&lt;/scope&gt;</span></span></span></p>
<p style="margin-left:72px"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
                style="color:blue">&lt;/dependency&gt;</span></span></span></p>
<p><span style="font-size:12.0pt"><span style="font-family:SimSun">&nbsp;</span></span></p>
<ul style="list-style-type:disc">
    <li><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">一旦依赖了</span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Comic Sans MS&quot;">spring-boot-starter-test</span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">，下面这些类库将被一同依赖进去：</span></span>
        <ul style="list-style-type:disc">
            <li><span style="font-size:12.0pt"><span
                        style="font-family:&quot;Comic Sans MS&quot;">JUnit</span></span><span
                    style="font-size:12.0pt"><span
                        style="font-family:&quot;Microsoft YaHei UI&quot;">：</span></span><span
                    style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">java</span></span><span
                    style="font-size:12.0pt"><span
                        style="font-family:&quot;Microsoft YaHei UI&quot;">测试事实上的标准，默认依赖版本是</span></span><span
                    style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">JUnit5</span></span>
            </li>
            <li><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">Spring Test &amp;
                        Spring Boot Test</span></span><span style="font-size:12.0pt"><span
                        style="font-family:&quot;Microsoft YaHei UI&quot;">：</span></span><span
                    style="font-size:12.0pt"><span
                        style="font-family:&quot;Comic Sans MS&quot;">Spring</span></span><span
                    style="font-size:12.0pt"><span
                        style="font-family:&quot;Microsoft YaHei UI&quot;">的测试支持。</span></span></li>
            <li><span style="font-size:12.0pt"><span
                        style="font-family:&quot;Comic Sans MS&quot;">AssertJ</span></span><span
                    style="font-size:12.0pt"><span
                        style="font-family:&quot;Microsoft YaHei UI&quot;">：提供了流式的断言方式。</span></span></li>
            <li><span style="font-size:12.0pt"><span
                        style="font-family:&quot;Comic Sans MS&quot;">Hamcrest</span></span><span
                    style="font-size:12.0pt"><span
                        style="font-family:&quot;Microsoft YaHei UI&quot;">：提供了丰富的</span></span><span
                    style="font-size:12.0pt"><span
                        style="font-family:&quot;Comic Sans MS&quot;">matcher</span></span><span
                    style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">。</span></span>
            </li>
            <li><span style="font-size:12.0pt"><span
                        style="font-family:&quot;Comic Sans MS&quot;">Mockito</span></span><span
                    style="font-size:12.0pt"><span
                        style="font-family:&quot;Microsoft YaHei UI&quot;">：</span></span><span
                    style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">mock</span></span><span
                    style="font-size:12.0pt"><span
                        style="font-family:&quot;Microsoft YaHei UI&quot;">框架，可以按类型创建</span></span><span
                    style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">mock</span></span><span
                    style="font-size:12.0pt"><span
                        style="font-family:&quot;Microsoft YaHei UI&quot;">对象，可以根据方法参数指定特定的响应，也支持对于</span></span><span
                    style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">mock</span></span><span
                    style="font-size:12.0pt"><span
                        style="font-family:&quot;Microsoft YaHei UI&quot;">调用过程的断言。</span></span></li>
            <li><span style="font-size:12.0pt"><span
                        style="font-family:&quot;Comic Sans MS&quot;">JSONassert</span></span><span
                    style="font-size:12.0pt"><span
                        style="font-family:&quot;Microsoft YaHei UI&quot;">：为</span></span><span
                    style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">JSON</span></span><span
                    style="font-size:12.0pt"><span
                        style="font-family:&quot;Microsoft YaHei UI&quot;">提供了断言功能。</span></span></li>
            <li><span style="font-size:12.0pt"><span
                        style="font-family:&quot;Comic Sans MS&quot;">JsonPath</span></span><span
                    style="font-size:12.0pt"><span
                        style="font-family:&quot;Microsoft YaHei UI&quot;">：为</span></span><span
                    style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">JSON</span></span><span
                    style="font-size:12.0pt"><span
                        style="font-family:&quot;Microsoft YaHei UI&quot;">提供了</span></span><span
                    style="font-size:12.0pt"><span
                        style="font-family:&quot;Comic Sans MS&quot;">XPATH</span></span><span
                    style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">功</span></span>
            </li>
        </ul>
    </li>
</ul>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">&nbsp;</span></span></p>
<ul style="list-style-type:disc">
    <li><span style="font-size:12.0pt"><span
                style="font-family:&quot;Comic Sans MS&quot;">@SpringBootTest</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">替代了</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">spring-test</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">中的</span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Comic Sans MS&quot;">@ContextConfiguration</span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">注解，目的是加载</span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Comic Sans MS&quot;">ApplicationContext</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">，启动</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">spring</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">容器。</span></span></li>
</ul>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                style="color:#111111">&nbsp;</span></span></span></p>
<p style="margin-left:36px"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                style="color:#111111">以下注解是测试类中常用注解：</span></span></span></p><span data-cke-bookmark="1"
    style="display: none;">&nbsp;</span><span data-cke-bookmark="1" style="display: none;">&nbsp;</span><span
    data-cke-bookmark="1" style="display: none;">&nbsp;</span><span data-cke-bookmark="1"
    style="display: none;">&nbsp;</span>
<table summary="" cellspacing="0"
    style="border-collapse:collapse; border-color:#a3a3a3; border-style:solid; border-width:1px; margin-left:32px"
    class=" cke_show_border">
    <tbody>
        <tr>
            <td
                style="background-color:black; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.7076in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:white"><strong>注解</strong></span></span></span></p>
            </td>
            <td
                style="background-color:black; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:4.4479in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:white"><strong>作用</strong></span></span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="background-color:white; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.7076in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:#111111">@Test</span></span></span></p>
            </td>
            <td
                style="background-color:white; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:4.5173in">
                <p><span style="font-size:11.5pt"><span style="color:#111111"><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">修饰一个方法为测试方法，</span><span
                                style="font-family:&quot;Comic Sans MS&quot;">excepted</span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">参数可以忽略某些异常类</span></span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.7076in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:#111111">@BeforeEach</span></span></span></p>
            </td>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:4.4479in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:#111111">在每一个测试方法被运行前执行一次</span></span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="background-color:white; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.7076in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:#111111">@BeforeAll</span></span></span></p>
            </td>
            <td
                style="background-color:white; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:4.4479in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:#111111">在所有测试方法执行前执行</span></span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.7076in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:#111111">@AfterEaxh</span></span></span></p>
            </td>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:4.4479in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:#111111">在每一个测试方法运行后执行一次</span></span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="background-color:white; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.7076in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:#111111">@AfterAll</span></span></span></p>
            </td>
            <td
                style="background-color:white; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:4.4479in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:#111111">在所有测试方法执行后执行</span></span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.7076in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:#111111">@Disabled</span></span></span></p>
            </td>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:4.4479in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:#111111">修饰的类或方法会被测试运行器忽略</span></span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="background-color:white; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.727in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:#111111">@ExtendWith</span></span></span></p>
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:#111111">@RegisterExtension</span></span></span></p>
            </td>
            <td
                style="background-color:white; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:4.4284in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:#111111">更改测试运行器</span></span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="background-color:#e7e6e6;border-bottom:1px solid #a3a3a3;border-left:1px solid #a3a3a3;border-right:1px solid #a3a3a3;border-top:1px solid #a3a3a3;vertical-align:top;width:1.7076in;">
                <p><span style="font-size:11.5pt;"><span style="font-family:&quot;Comic Sans MS&quot;;"><span
                                style="color:#111111;">@Tag</span></span></span></p>
            </td>
            <td
                style="background-color:#e7e6e6;border-bottom:1px solid #a3a3a3;border-left:1px solid #a3a3a3;border-right:1px solid #a3a3a3;border-top:1px solid #a3a3a3;vertical-align:top;width:1.7076in;">
                <p><span style="font-size:11.5pt;"><span style="font-family:&quot;Comic Sans MS&quot;;"><span
                                style="color:#111111;">为测试进行分类</span></span></span></p>
            </td>
        </tr>
    </tbody>
</table>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei&quot;"><span
                style="color:#111111">&nbsp;<span data-cke-bookmark="1"
                    style="display: none;">&nbsp;</span></span></span></span></p>
<ul style="list-style-type:disc">
    <li><span style="font-size:12.0pt"><span
                style="font-family:&quot;Comic Sans MS&quot;">@SpringBootTest</span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">注解会自动检索程序的配置文件，检索顺序是从当前包开始，逐级向上查找被</span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Comic Sans MS&quot;">@SpringBootApplication</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">或</span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Comic Sans MS&quot;">@SpringBootConfiguration</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">注解的类</span></span></li>
</ul>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                style="color:#70ad47"><strong>示例</strong></span></span></span></p>
<p style="margin-left:36px"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#ffc000">@RunWith</span><span style="color:black">(SpringRunner.</span><span
                style="color:blue">class</span><span style="color:black">)</span></span></span></p>
<p style="margin-left:36px"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#ffc000">@SpringBootTest</span></span></span></p>
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
<p><span style="font-size:12.0pt"><span style="font-family:SimSun">&nbsp;</span></span></p>
<p><span style="font-size:12.0pt"><span style="font-family:SimSun">&nbsp;</span></span></p>
<p><span style="font-size:12.0pt"><span style="font-family:SimSun">&nbsp;</span></span></p>
<p><span style="font-size:13.5pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                style="color:#111111"><span
                    style="background-color:white"><strong>测试种类</strong></span></span></span></span></p>
<ul style="list-style-type:disc">
    <li><span style="font-size:12.0pt"><span style="background-color:white"><span
                    style="font-family:&quot;Microsoft YaHei UI&quot;">整体上，</span></span></span><span
            style="font-size:12.0pt"><span style="background-color:white"><span
                    style="font-family:&quot;Comic Sans MS&quot;">Spring Boot Test</span></span></span><span
            style="font-size:12.0pt"><span style="background-color:white"><span
                    style="font-family:&quot;Microsoft YaHei UI&quot;">支持的测试种类，大致可以分为如下三类：</span></span></span>
        <ul style="list-style-type:disc">
            <li><span style="font-size:12.0pt"><span style="background-color:white"><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">单元测试：一般面向方法，编写一般业务代码时，测试成本较大。涉及到的注解有</span></span></span><span
                    style="font-size:12.0pt"><span style="background-color:white"><span
                            style="font-family:&quot;Comic Sans MS&quot;">@Test</span></span></span><span
                    style="font-size:12.0pt"><span style="background-color:white"><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">。</span></span></span></li>
        </ul>
    </li>
</ul>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                style="color:#111111">&nbsp;</span></span></span></p>
<ul style="list-style-type:disc">
    <li><span style="font-size:12.0pt"><span style="background-color:white"><span
                    style="font-family:&quot;Microsoft YaHei UI&quot;">切片测试：一般面向难于测试的边界功能，介于单元测试和功能测试之间。涉及到的注解有</span></span></span><span
            style="font-size:12.0pt"><span style="background-color:white"><span
                    style="font-family:&quot;Comic Sans MS&quot;">@RunWith @WebMvcTest</span></span></span><span
            style="font-size:12.0pt"><span style="background-color:white"><span
                    style="font-family:&quot;Microsoft YaHei UI&quot;">等。</span></span></span></li>
</ul>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                style="color:#111111">&nbsp;</span></span></span></p>
<ul style="list-style-type:disc">
    <li><span style="font-size:12.0pt"><span style="background-color:white"><span
                    style="font-family:&quot;Microsoft YaHei UI&quot;">功能测试：一般面向某个完整的业务功能，同时也可以使用切面测试中的</span></span></span><span
            style="font-size:12.0pt"><span style="background-color:white"><span
                    style="font-family:&quot;Comic Sans MS&quot;">mock</span></span></span><span
            style="font-size:12.0pt"><span style="background-color:white"><span
                    style="font-family:&quot;Microsoft YaHei UI&quot;">能力，推荐使用。涉及到的注解有</span></span></span><span
            style="font-size:12.0pt"><span style="background-color:white"><span
                    style="font-family:&quot;Comic Sans MS&quot;">@RunWith @SpringBootTest</span></span></span><span
            style="font-size:12.0pt"><span style="background-color:white"><span
                    style="font-family:&quot;Microsoft YaHei UI&quot;">等。</span></span></span></li>
</ul>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                style="color:#111111">&nbsp;</span></span></span></p>
<p style="margin-left:72px"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Microsoft YaHei UI&quot;"><span style="color:#111111"><span
                    style="background-color:white">功能测试过程中的几个关键要素及支撑方式如下：</span></span></span></span></p>
<ul style="list-style-type:square">
    <li><span style="font-size:12.0pt"><span style="background-color:white"><span
                    style="font-family:&quot;Microsoft YaHei UI&quot;">测试运行环境：通过</span></span></span><span
            style="font-size:12.0pt"><span style="background-color:white"><span
                    style="font-family:&quot;Comic Sans MS&quot;">@RunWith </span></span></span><span
            style="font-size:12.0pt"><span style="background-color:white"><span
                    style="font-family:&quot;Microsoft YaHei UI&quot;">和</span></span></span><span
            style="font-size:12.0pt"><span style="background-color:white"><span
                    style="font-family:&quot;Comic Sans MS&quot;"> @SpringBootTest</span></span></span><span
            style="font-size:12.0pt"><span style="background-color:white"><span
                    style="font-family:&quot;Microsoft YaHei UI&quot;">启动</span></span></span><span
            style="font-size:12.0pt"><span style="background-color:white"><span
                    style="font-family:&quot;Comic Sans MS&quot;">spring</span></span></span><span
            style="font-size:12.0pt"><span style="background-color:white"><span
                    style="font-family:&quot;Microsoft YaHei UI&quot;">容器。</span></span></span></li>
</ul>
<p><span style="font-size:12.0pt"><span style="background-color:white"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;"></span></span></span><br></p>
<ul style="list-style-type:square">
    <li><span style="font-size:12.0pt"><span style="background-color:white"><span
                    style="font-family:&quot;Comic Sans MS&quot;">mock</span></span></span><span
            style="font-size:12.0pt"><span style="background-color:white"><span
                    style="font-family:&quot;Microsoft YaHei UI&quot;">能力：</span></span></span><span
            style="font-size:12.0pt"><span style="background-color:white"><span
                    style="font-family:&quot;Comic Sans MS&quot;">Mockito</span></span></span><span
            style="font-size:12.0pt"><span style="background-color:white"><span
                    style="font-family:&quot;Microsoft YaHei UI&quot;">提供了强大</span></span></span><span
            style="font-size:12.0pt"><span style="background-color:white"><span
                    style="font-family:&quot;Comic Sans MS&quot;">mock</span></span></span><span
            style="font-size:12.0pt"><span style="background-color:white"><span
                    style="font-family:&quot;Microsoft YaHei UI&quot;">功能。</span></span></span></li>
</ul>
<p><span style="font-size:12.0pt"><span style="background-color:white"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;"></span></span></span><br></p>
<ul style="list-style-type:square">
    <li><span style="font-size:12.0pt"><span style="background-color:white"><span
                    style="font-family:&quot;Microsoft YaHei UI&quot;">断言能力：</span></span></span><span
            style="font-size:12.0pt"><span style="background-color:white"><span
                    style="font-family:&quot;Comic Sans MS&quot;">AssertJ</span></span></span><span
            style="font-size:12.0pt"><span style="background-color:white"><span
                    style="font-family:&quot;Microsoft YaHei UI&quot;">、</span></span></span><span
            style="font-size:12.0pt"><span style="background-color:white"><span
                    style="font-family:&quot;Comic Sans MS&quot;">Hamcrest</span></span></span><span
            style="font-size:12.0pt"><span style="background-color:white"><span
                    style="font-family:&quot;Microsoft YaHei UI&quot;">、</span></span></span><span
            style="font-size:12.0pt"><span style="background-color:white"><span
                    style="font-family:&quot;Comic Sans MS&quot;">JsonPath</span></span></span><span
            style="font-size:12.0pt"><span style="background-color:white"><span
                    style="font-family:&quot;Microsoft YaHei UI&quot;">提供了强大的断言能力。</span></span></span></li>
</ul>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                style="color:#111111">&nbsp;</span></span></span></p>
<p><span style="font-size:12.0pt"><span style="font-family:SimSun">&nbsp;</span></span></p>
<p><span style="font-family:&quot;Microsoft YaHei UI&quot;">来自</span><span
        style="font-family:&quot;Comic Sans MS&quot;"> &lt;</span><a
        data-cke-saved-href="https://www.cnblogs.com/myitnews/p/12330297.html"
        href="https://www.cnblogs.com/myitnews/p/12330297.html"><span
            style="font-family:&quot;Comic Sans MS&quot;">https://www.cnblogs.com/myitnews/p/12330297.html</span></a><span
        style="font-family:&quot;Comic Sans MS&quot;">&gt; </span></p>
