---
categories:
  - Spring Boot
tags:
  - ［@ConfigurationProperties］
  - ［@EnableConfigurationProperties］
date:
  - 2022-9-28 15:25:11
---

<ul style="list-style-type:disc">
    <li><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                    style="color:black">@ConfigurationProperties</span></span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                    style="color:black">中的</span></span></span><span style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                    style="color:#111111">前缀属性定义了哪些外部属性将绑定到类的字段上</span></span></span></li>
</ul>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                style="color:#111111">&nbsp;</span></span></span></p>
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
                style="background-color:black; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:4.4187in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:white"><strong>描述</strong></span></span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.725in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:#111111">prefix</span></span></span></p>
            </td>
            <td
                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:4.4187in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:#111111">字段的前缀</span></span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.7437in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;">ignoreUnknownFields</span></span></p>
            </td>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:4.3993in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:#111111">是否忽略未找到的属性字段</span></span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.725in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;">ignoreInvalidFields</span></span></p>
            </td>
            <td
                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:4.4187in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:#111111">是否忽略非法字段，默认</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:#111111">false</span></span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:#111111">，当为</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:#111111">true</span></span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:#111111">时，有</span></span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">无法转换的属性时</span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:#111111">忽略，不会报错，注入的值为空</span></span></span></p>
            </td>
        </tr>
    </tbody>
</table>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                style="color:#111111">&nbsp;</span></span></span></p>
<ul style="list-style-type:disc">
    <li><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">根据</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"> Spring Boot
            </span></span><span style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">宽松的绑定规则，类的属性名称必须与外部属性的名称匹配</span></span></li>
</ul>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">&nbsp;</span></span></p>
<ul style="list-style-type:disc">
    <li><span style="font-size:12.0pt"><span
                style="font-family:&quot;Comic Sans MS&quot;">@EnableConfigurationProperties</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">注解与</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">@Component</span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">注解作用相似，当</span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Comic Sans MS&quot;">@EnableConfigurationProperties</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">注解应用到你的</span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Comic Sans MS&quot;">@Configuration</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">时， 任何被</span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Comic Sans MS&quot;">@ConfigurationProperties</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">注解的</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">beans</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">将自动被</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">Environment</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">属性配置</span></span></li>
</ul>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">&nbsp;</span></span></p>
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
                style="background-color:black; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:4.4055in">
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
                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:4.4055in">
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
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">&nbsp;</span></span></p>
<ul style="list-style-type:disc">
    <li><span style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">也就是说注册使用了</span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Comic Sans MS&quot;">@ConfigurationProperties</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">注解的类可以使用</span></span>
        <span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">@Component</span></span>
        <span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">或</span></span> <span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Comic Sans MS&quot;">@EnableConfigurationProperties</span></span> <span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">注解注册类对象到容器中</span></span>
    </li>
</ul>
<p><span style="font-size:12.0pt"><span
            style="font-family:&quot;Microsoft YaHei UI&quot;"><strong>注</strong></span></span></p>
<p style="margin-left: 40px;"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">@EnableConfigurationProperties</span><span
            style="font-family:&quot;Microsoft YaHei UI&quot;">也可以注解在其他类中，用</span><span
            style="font-family:&quot;Comic Sans MS&quot;">value</span><span
            style="font-family:&quot;Microsoft YaHei UI&quot;">指定</span><span
            style="font-family:&quot;Comic Sans MS&quot;">@ConfigurationProperties</span><span
            style="font-family:&quot;Microsoft YaHei UI&quot;">的类在特定方法中加入</span><span
            style="font-family:&quot;Comic Sans MS&quot;">Environment</span></span></p>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">&nbsp;</span></span></p>
<ul style="list-style-type:disc">
    <li><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">在</span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Comic Sans MS&quot;">application.properties</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">中添加自定义属性</span></span>
    </li>
</ul>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">&nbsp;</span></span></p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">user.name=admin</span></span></p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">user.password=123456</span></span></p>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                style="color:#70ad47"><strong>示例</strong></span></span></span></p>
<ul style="list-style-type:disc">
    <li><span style="color:#e67e22;"><span style="font-size:12.0pt"><span
                    style="font-family:&quot;Comic Sans MS&quot;">User.java</span></span></span></li>
</ul>
<p style="margin-left:72px"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#ffc000">@Component</span></span></span></p>
<p style="margin-left:72px"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#ffc000">@ConfigurationProperties</span><span style="color:black">(prefix=</span><span
                style="color:#b43512">"user"</span><span style="color:black">)</span></span></span></p>
<p style="margin-left:72px"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:blue">public</span>&nbsp;<span style="color:blue">class</span><span
                style="color:black">&nbsp;User{</span></span></span></p>
<p style="margin-left:72px"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Microsoft YaHei&quot;">&nbsp;</span></span></p>
<p style="margin-left:72px"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">&nbsp;&nbsp;&nbsp;&nbsp;<span
                style="color:blue">private</span>&nbsp;<span style="color:#8000ff">String</span><span
                style="color:black">&nbsp;userName;</span></span></span></p>
<p style="margin-left:72px"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">&nbsp;&nbsp;&nbsp;&nbsp;<span
                style="color:blue">private</span>&nbsp;<span style="color:#8000ff">String</span><span
                style="color:black">&nbsp;password;</span></span></span></p>
<p style="margin-left:72px"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Microsoft YaHei&quot;">&nbsp;</span></span></p>
<p style="margin-left:72px"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">&nbsp;&nbsp;&nbsp;&nbsp;<span
                style="color:blue">public</span>&nbsp;<span style="color:#8000ff">String</span><span
                style="color:black">&nbsp;getUserName()&nbsp;&nbsp;&nbsp;&nbsp;{</span></span></span></p>
<p style="margin-left:72px"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
                style="color:blue">return</span><span style="color:black">&nbsp;userName;</span></span></span></p>
<p style="margin-left:72px"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:black">&nbsp;&nbsp;&nbsp;&nbsp;}</span></span></span></p>
<p style="margin-left:72px"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Microsoft YaHei&quot;">&nbsp;</span></span></p>
<p style="margin-left:72px"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">&nbsp;&nbsp;&nbsp;&nbsp;<span
                style="color:blue">public</span>&nbsp;<span style="color:#8000ff">void</span><span
                style="color:black">&nbsp;setUserName(</span><span style="color:#8000ff">String</span><span
                style="color:black">&nbsp;userName)&nbsp;{</span></span></span></p>
<p style="margin-left:72px"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
                style="color:blue">this</span><span
                style="color:black">.userName&nbsp;=&nbsp;userName;</span></span></span></p>
<p style="margin-left:72px"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:black">&nbsp;&nbsp;&nbsp;&nbsp;}</span></span></span></p>
<p style="margin-left:72px"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Microsoft YaHei&quot;">&nbsp;</span></span></p>
<p style="margin-left:72px"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">&nbsp;&nbsp;&nbsp;&nbsp;<span
                style="color:blue">public</span>&nbsp;<span style="color:#8000ff">String</span><span
                style="color:black">&nbsp;getPassword()&nbsp;{</span></span></span></p>
<p style="margin-left:72px"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
                style="color:blue">return</span><span style="color:black">&nbsp;password;</span></span></span></p>
<p style="margin-left:72px"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:black">&nbsp;&nbsp;&nbsp;&nbsp;}</span></span></span></p>
<p style="margin-left:72px"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Microsoft YaHei&quot;">&nbsp;</span></span></p>
<p style="margin-left:72px"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">&nbsp;&nbsp;&nbsp;&nbsp;<span
                style="color:blue">public</span>&nbsp;<span style="color:#8000ff">void</span><span
                style="color:black">&nbsp;setPassword(</span><span style="color:#8000ff">String</span><span
                style="color:black">&nbsp;password)&nbsp;{</span></span></span></p>
<p style="margin-left:72px"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
                style="color:blue">this</span><span
                style="color:black">.password&nbsp;=&nbsp;password;</span></span></span></p>
<p style="margin-left:72px"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:black">&nbsp;&nbsp;&nbsp;&nbsp;}</span></span></span></p>
<p style="margin-left:72px"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:black">}</span></span></span></p>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
<ul style="list-style-type:disc">
    <li><span style="color:#e67e22;"><span style="font-size:12.0pt"><span
                    style="font-family:&quot;Comic Sans MS&quot;">UserController.java</span></span></span></li>
</ul>
<p style="margin-left:72px"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#ffc000">@RestController</span></span></span></p>
<p style="margin-left:72px"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:black">public&nbsp;class&nbsp;UserController&nbsp;{</span></span></span></p>
<p style="margin-left:72px"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Microsoft YaHei&quot;">&nbsp;</span></span></p>
<p style="margin-left:72px"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">&nbsp;&nbsp;&nbsp;<span
                style="color:#ffc000">&nbsp;@</span><span style="color:#ffc000">Autowired</span></span></span></p>
<p style="margin-left:72px"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:black">&nbsp;&nbsp;&nbsp;&nbsp;private&nbsp;User user;</span></span></span></p>
<p style="margin-left:72px"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Microsoft YaHei&quot;">&nbsp;</span></span></p>
<p style="margin-left:72px"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">&nbsp;&nbsp;&nbsp;&nbsp;<span
                style="color:#ffc000">@RequestMapping</span><span style="color:black">(</span><span
                style="color:maroon">"/</span><span style="color:maroon">user</span><span
                style="color:maroon">"</span><span style="color:black">)</span></span></span></p>
<p style="margin-left:72px"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:black">&nbsp;&nbsp;&nbsp;&nbsp;public&nbsp;String&nbsp;getProperties()&nbsp;{</span></span></span>
</p>
<p style="margin-left:72px"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:black">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;System.out.println(</span><span
                style="color:maroon">"userName:"</span><span style="color:black">&nbsp;+&nbsp;</span><span
                style="color:black">user.</span><span style="color:black">userName);</span></span></span></p>
<p style="margin-left:72px"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:black">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;System.out.println(</span><span
                style="color:maroon">"password:"</span><span style="color:black">&nbsp;+&nbsp;</span><span
                style="color:black">user.</span><span style="color:black">password);</span></span></span></p>
<p style="margin-left:72px"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:black">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return&nbsp;</span><span
                style="color:maroon">"success"</span><span style="color:black">;</span></span></span></p>
<p style="margin-left:72px"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:black">&nbsp;&nbsp;&nbsp;&nbsp;}</span></span></span></p>
<p style="margin-left:72px"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:black">}</span></span></span></p>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:black">&nbsp;</span></span></span></p>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:black">&nbsp;</span></span></span></p>
<p><span style="font-size:13.5pt"><span style="color:black"><strong><span
                    style="font-family:&quot;Microsoft YaHei UI&quot;">解决</span></strong><strong><span
                    style="font-family:&quot;Comic Sans MS&quot;">Spring boot</span></strong><strong><span
                    style="font-family:&quot;Microsoft YaHei UI&quot;">的提示问题</span></strong></span></span></p>
<ul style="list-style-type:disc">
    <li><span style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">此提示表示建议导入配置处理器</span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Comic Sans MS&quot;">configuration-processor</span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">用于配置文件中的字段属性的自动补全</span></span></li>
</ul>
<p style="margin-left: 40px;"><img
        src="data:image/png;base64,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">
</p>
<p style="margin-left:36px"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Microsoft YaHei UI&quot;"><span style="color:black">&nbsp;</span></span></span></p>
<ul style="list-style-type:disc">
    <li><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">在</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">pom.xml</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">中加入依赖</span></span></li>
</ul>
<table summary="" cellspacing="0"
    style="border-collapse:collapse; border-color:#a3a3a3; border-style:solid; border-width:0px; margin-left:68px"
    class=" cke_show_border">
    <tbody>
        <tr>
            <td
                style="background-color:white; border-bottom:0px; border-left:0px; border-right:0px; border-top:0px; vertical-align:top; width:5.1298in">
                <p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">&lt;dependency&gt;</span></span></span></p>
                <p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">&nbsp;&nbsp;<span
                                style="color:blue">&lt;groupId&gt;</span><span
                                style="color:black">org.springframework.boot</span><span
                                style="color:blue">&lt;/groupId&gt;</span></span></span></p>
                <p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">&nbsp;&nbsp;<span
                                style="color:blue">&lt;artifactId&gt;</span><span
                                style="color:black">spring-boot-configuration-processor</span><span
                                style="color:blue">&lt;/artifactId&gt;</span></span></span></p>
                <p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">&nbsp;&nbsp;<span
                                style="color:blue">&lt;optional&gt;</span><span style="color:black">true</span><span
                                style="color:blue">&lt;/optional&gt;</span></span></span></p>
                <p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">&lt;/dependency&gt;</span></span></span></p>
                <p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">&nbsp;</span></span></span></p>
            </td>
        </tr>
    </tbody>
</table>
<ul style="list-style-type:disc">
    <li><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">为了不在</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">Spring Boot</span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">将大量额外的配置处理器进行一并打包，造成性能下降，因此建议在打包插件中对配置处理器进行排除</span></span>
    </li>
</ul>
<table summary="" cellspacing="0"
    style="border-collapse:collapse; border-color:#a3a3a3; border-style:solid; border-width:0px; margin-left:68px"
    class=" cke_show_border">
    <tbody>
        <tr>
            <td
                style="background-color:white; border-bottom:0px; border-left:0px; border-right:0px; border-top:0px; vertical-align:top; width:5.5284in">
                <p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">&lt;build&gt;</span></span></span></p>
                <p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">&nbsp;&nbsp;<span
                                style="color:blue">&lt;plugins&gt;</span></span></span></p>
                <p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">&nbsp;</span></span></span></p>
                <p><span style="font-size:12.0pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;">&nbsp;&nbsp;&nbsp;&nbsp;<span
                                style="color:blue">&lt;plugin&gt;</span></span></span></p>
                <p><span style="font-size:12.0pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
                                style="color:blue">&lt;groupId&gt;</span><span
                                style="color:black">org.springframework.boot</span><span
                                style="color:blue">&lt;/groupId&gt;</span></span></span></p>
                <p><span style="font-size:12.0pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
                                style="color:blue">&lt;artifactId&gt;</span><span
                                style="color:black">spring-boot-maven-plugin</span><span
                                style="color:blue">&lt;/artifactId&gt;</span></span></span></p>
                <p><span style="font-size:12.0pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;">&nbsp;&nbsp;&nbsp;&nbsp;<span
                                style="color:blue">&lt;/plugin&gt;</span></span></span></p>
                <p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">&nbsp;</span></span></span></p>
                <p><span style="font-size:12.0pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;">&nbsp;&nbsp;&nbsp;&nbsp;<span
                                style="color:blue">&lt;configuration&gt;</span></span></span></p>
                <p><span style="font-size:12.0pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
                                style="color:blue">&lt;excludes&gt;</span></span></span></p>
                <p><span style="font-size:12.0pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
                                style="color:blue">&lt;exclude&gt;</span></span></span></p>
                <p><span style="font-size:12.0pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
                                style="color:blue">&lt;groupId&gt;</span><span
                                style="color:black">org.springframework.boot</span><span
                                style="color:blue">&lt;/groupId&gt;</span></span></span></p>
                <p><span style="font-size:12.0pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
                                style="color:blue">&lt;artifactId&gt;</span><span
                                style="color:black">spring-boot-configuration-processor</span><span
                                style="color:blue">&lt;/artifactId&gt;</span></span></span></p>
                <p><span style="font-size:12.0pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
                                style="color:blue">&lt;/exclude&gt;</span></span></span></p>
                <p><span style="font-size:12.0pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
                                style="color:blue">&lt;/excludes&gt;</span></span></span></p>
                <p><span style="font-size:12.0pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;">&nbsp;&nbsp;&nbsp;&nbsp;<span
                                style="color:blue">&lt;/configuration&gt;</span></span></span></p>
                <p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">&nbsp;</span></span></span></p>
                <p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">&nbsp;&nbsp;<span
                                style="color:blue">&lt;/plugins&gt;</span></span></span></p>
                <p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">&lt;/build&gt;</span></span></span></p>
            </td>
        </tr>
    </tbody>
</table>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                style="color:black"><strong>注</strong></span></span></span></p>
<p style="margin-left: 40px;"><span style="font-size:12.0pt"><span style="color:black"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">当开启</span><span
                style="font-family:&quot;Comic Sans MS&quot;">lombok</span><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">时，</span><span
                style="font-family:&quot;Comic Sans MS&quot;">Spring Boot</span><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">会自动在打包插件中对配置处理器进行排除</span></span></span></p>
