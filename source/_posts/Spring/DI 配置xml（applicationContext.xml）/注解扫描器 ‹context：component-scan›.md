---
categories:
  - Spring
tags:
  - ‹context：component-scan›
date:
  - 2022-11-28 7:34:01
---

<ul style="list-style-type:disc">
    <li><span style="font-size:12.0pt"><span
                style="font-family:&quot;Comic Sans MS&quot;">&lt;context:component-scan</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">&gt;</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">用于自动扫描装配注解类</span></span>
    </li>
</ul>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">&nbsp;</span></span></p>
<ul style="list-style-type:disc">
    <li><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">在</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">xml</span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">配置了这个标签后，</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">spring</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">可以自动去扫描</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">base-pack</span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">下面或者子包下面的</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">java</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">文件</span></span></li>
</ul>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
<ul style="list-style-type:disc">
    <li><span style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">默认情况下，</span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Comic Sans MS&quot;">&lt;context:component-scan&gt;</span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">查找使用构造型（</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">stereotype</span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">）注解所标注的类，如果扫描到有</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">@Component
                @Controller</span></span> <span style="font-size:12.0pt"><span
                style="font-family:&quot;Comic Sans MS&quot;">@Service</span></span> <span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">@Repository</span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">等这些注解的类，则把这些类注册为</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">bean</span></span></li>
</ul>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
<table summary="" cellspacing="0"
    style="border-collapse:collapse; border-color:#a3a3a3; border-style:solid; border-width:1px; margin-left:32px"
    class=" cke_show_border">
    <tbody>
        <tr>
            <td
                style="background-color:black; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.6868in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:white"><strong>属性</strong></span></span></span></p>
            </td>
            <td
                style="background-color:black; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:6.902in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:white"><strong>描述</strong></span></span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.6868in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;">base-package</span></span></p>
            </td>
            <td
                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:6.902in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">扫描的基本包路径，标识了</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">&lt;context:component-scan&gt;</span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">元素所扫描的包，可以使用一些通配符进行配置</span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.6868in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;">annotation-config</span></span></p>
            </td>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:6.902in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">是否激活属性注入注解，</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">&lt;context:component-scan&gt;</span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">元素也完成了</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">&lt;context:annotation-config&gt;</span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">元素的工作，开关就是这个属性，</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">false</span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">则关闭属性注入注解功能</span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.6868in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;">name-generator</span></span></p>
            </td>
            <td
                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:6.9611in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">这个属性指定你的构造型注解，注册为</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">Bean</span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">的</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">ID</span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">生成策略，这个生成器基于接口</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">BeanNameGenerator</span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">实现</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">generateBeanName</span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">方法，你可以自己写个类去自定义策略。默认使用</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">org.springframework.context.annotation.AnnotationBeanNameGenerator</span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">生成器，也就是类名首字符小写的策略</span></span></p>
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">如</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">Performer</span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">类，它注册的</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">Bean</span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">的</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">ID</span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">为</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">performer.</span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">并且可以自定义</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">ID</span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.6868in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;">resource-pattern</span></span></p>
            </td>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:6.9715in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">对资源进行筛选的正则表达式，这边是个大的范畴，具体细分在</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">include-filter</span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">与</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">exclude-filter</span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">中进行</span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.6868in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;">scope-resolver</span></span></p>
            </td>
            <td
                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:6.902in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Comic Sans MS&quot;">scope</span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">解析器 ，与</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">scoped-proxy</span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">只能同时配置一个</span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.6868in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;">scoped-proxy</span></span></p>
            </td>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:6.902in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Comic Sans MS&quot;">scope</span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">代理，与</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">scope-resolver</span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">只能同时配置一个</span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.6868in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;">use-default-filters</span></span></p>
            </td>
            <td
                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:6.902in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">默认为</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">true,</span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">这就意味着会扫描指定包下的全部的标有</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">@Component</span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">的类，</span>&nbsp;<br><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">并注册成</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">bean.</span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">也就是</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">@Component</span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">的子注解</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">@Service,@Reposity</span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">等。</span></span></p>
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">所以如果仅仅是在配置文件中这么写</span>&nbsp;<br><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">默认为</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">true,</span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">对</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">base-package</span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">包或者子包下的</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">jun</span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">所有的进行</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">java</span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">类进行扫描</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">,</span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">并把匹配的</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">java</span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">类注册成</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">bean</span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">。</span>&nbsp; </span></p>
            </td>
        </tr>
    </tbody>
</table>
<p><span style="font-size:12.0pt"><span
            style="font-family:&quot;Microsoft YaHei UI&quot;"><strong>注</strong></span></span></p>
<ul style="list-style-type:disc">
    <li><span style="font-size:12.0pt"><span
                style="font-family:&quot;Comic Sans MS&quot;">scope-resolver</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">与</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">scoped-proxy</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">只能配置一个</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">,</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">配置了</span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Comic Sans MS&quot;">scope-resolver</span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">后你要使用代理，可以配置</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">@Scope</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">总的</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">proxyMode</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">属性项</span></span></li>
    <li><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">如果配置了</span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Comic Sans MS&quot;">&lt;context:component-scan&gt;</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">那么</span></span><span
            style="font-size:12.0pt"><strong><span
                    style="font-family:&quot;Comic Sans MS&quot;">&lt;context:annotation-config/&gt;</span></strong></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">标签就可以不用再</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">xml</span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">中配置了，因为前者包含了后者。</span></span></li>
</ul>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
<p><span style="font-size:12.0pt;margin-left:32px;"><span
            style="font-family:&quot;Comic Sans MS&quot;">&lt;context:component-scan&gt;</span><span
            style="font-family:&quot;Microsoft YaHei UI&quot;">有以下子标签：</span></span></p>
<table summary="" cellspacing="0"
    style="border-collapse:collapse; border-color:#a3a3a3; border-style:solid; border-width:1px; margin-left:32px"
    class=" cke_show_border">
    <tbody>
        <tr>
            <td
                style="background-color:black; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.9916in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:white"><strong>子标签</strong></span></span></span></p>
            </td>
            <td
                style="background-color:black; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:6.852in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:white"><strong>说明</strong></span></span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.9916in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;">&lt;context:include-filter&gt;</span></span>
                </p>
            </td>
            <td
                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:6.959in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">指定扫描的包名</span></span></p>
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">若使用</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">include-filter</span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">去定制扫描内容，要在</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">use-default-filters="false"</span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">的情况下，不然会</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">“</span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">失效</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">”</span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">，被默认的过滤机制所覆盖</span></span></p>
                <table summary="" cellspacing="0"
                    style="border-collapse:collapse; border-color:#a3a3a3; border-style:solid; border-width:1px;"
                    class=" cke_show_border">
                    <tbody>
                        <tr>
                            <td
                                style="background-color:black; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:.909in">
                                <p><span style="font-size:10.5pt"><span
                                            style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                                style="color:white"><strong>参数</strong></span></span></span></p>
                            </td>
                            <td
                                style="background-color:black; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:5.4916in">
                                <p><span style="font-size:10.5pt"><span
                                            style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                                style="color:white"><strong>描述</strong></span></span></span></p>
                            </td>
                        </tr>
                        <tr>
                            <td
                                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:.909in">
                                <p><span style="font-size:10.5pt"><span
                                            style="font-family:&quot;Comic Sans MS&quot;">type</span></span></p>
                            </td>
                            <td
                                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:5.6243in">
                                <p><span style="font-size:10.5pt"><span
                                            style="font-family:&quot;Microsoft YaHei UI&quot;">扫描的过滤器的类型</span></span>
                                </p>
                                <table summary="" cellspacing="0"
                                    style="border-collapse:collapse; border-color:#a3a3a3; border-style:solid; border-width:1px;"
                                    class=" cke_show_border">
                                    <tbody>
                                        <tr>
                                            <td
                                                style="background-color:black; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:.8618in">
                                                <p><span style="font-size:9.5pt"><span
                                                            style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                                                style="color:white"><strong>过滤器类型</strong></span></span></span>
                                                </p>
                                            </td>
                                            <td
                                                style="background-color:black; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:4.2041in">
                                                <p><span style="font-size:9.5pt"><span
                                                            style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                                                style="color:white"><strong>描述</strong></span></span></span>
                                                </p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td
                                                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:.8555in">
                                                <p><span style="font-size:9.5pt"><span
                                                            style="font-family:&quot;Comic Sans MS&quot;">annotation</span></span>
                                                </p>
                                            </td>
                                            <td
                                                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:4.2284in">
                                                <p><span style="font-size:9.5pt"><span
                                                            style="font-family:&quot;Microsoft YaHei UI&quot;">过滤器扫描使用注解所标注的那些类，通过</span><span
                                                            style="font-family:&quot;Comic Sans MS&quot;">expression</span><span
                                                            style="font-family:&quot;Microsoft YaHei UI&quot;">属性指定要扫描的注释</span></span>
                                                </p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td
                                                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:.8423in">
                                                <p><span style="font-size:9.5pt"><span
                                                            style="font-family:&quot;Comic Sans MS&quot;">assignable</span></span>
                                                </p>
                                            </td>
                                            <td
                                                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:4.2236in">
                                                <p><span style="font-size:9.5pt"><span
                                                            style="font-family:&quot;Microsoft YaHei UI&quot;">过滤器扫描派生于</span><span
                                                            style="font-family:&quot;Comic Sans MS&quot;">expression</span><span
                                                            style="font-family:&quot;Microsoft YaHei UI&quot;">属性所指定类型的那些类</span></span>
                                                </p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td
                                                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:.8423in">
                                                <p><span style="font-size:9.5pt"><span
                                                            style="font-family:&quot;Comic Sans MS&quot;">aspectj</span></span>
                                                </p>
                                            </td>
                                            <td
                                                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:4.2347in">
                                                <p><span style="font-size:9.5pt"><span
                                                            style="font-family:&quot;Microsoft YaHei UI&quot;">过滤器扫描与</span><span
                                                            style="font-family:&quot;Comic Sans MS&quot;">expression</span><span
                                                            style="font-family:&quot;Microsoft YaHei UI&quot;">属性所指定的</span><span
                                                            style="font-family:&quot;Comic Sans MS&quot;">AspectJ</span><span
                                                            style="font-family:&quot;Microsoft YaHei UI&quot;">表达式所匹配的那些类</span></span>
                                                </p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td
                                                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:.8423in">
                                                <p><span style="font-size:9.5pt"><span
                                                            style="font-family:&quot;Comic Sans MS&quot;">custom</span></span>
                                                </p>
                                            </td>
                                            <td
                                                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:4.293in">
                                                <p><span style="font-size:9.5pt"><span
                                                            style="font-family:&quot;Microsoft YaHei UI&quot;">使用自定义的</span><span
                                                            style="font-family:&quot;Comic Sans MS&quot;">org.springframework.core.type.TypeFliter</span><span
                                                            style="font-family:&quot;Microsoft YaHei UI&quot;">实现类，该类由</span><span
                                                            style="font-family:&quot;Comic Sans MS&quot;">expression</span><span
                                                            style="font-family:&quot;Microsoft YaHei UI&quot;">属性指定</span></span>
                                                </p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td
                                                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:.8423in">
                                                <p><span style="font-size:9.5pt"><span
                                                            style="font-family:&quot;Comic Sans MS&quot;">regex</span></span>
                                                </p>
                                            </td>
                                            <td
                                                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:4.2409in">
                                                <p><span style="font-size:9.5pt"><span
                                                            style="font-family:&quot;Microsoft YaHei UI&quot;">过滤器扫描类的名称与</span><span
                                                            style="font-family:&quot;Comic Sans MS&quot;">expression</span><span
                                                            style="font-family:&quot;Microsoft YaHei UI&quot;">属性所指定正则表示式所匹配的那些类</span></span>
                                                </p>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <p><span style="font-size:10.5pt"><span
                                            style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
                            </td>
                        </tr>
                        <tr>
                            <td
                                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:.9284in">
                                <p><span style="font-size:10.5pt"><span
                                            style="font-family:&quot;Comic Sans MS&quot;">expression</span></span></p>
                            </td>
                            <td
                                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:5.4729in">
                                <p><span style="font-size:10.5pt"><span
                                            style="font-family:&quot;Microsoft YaHei UI&quot;">扫描的完整包名或包名的表达式</span></span>
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
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:2.0111in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;">&lt;context:exclude-filter&gt;</span></span>
                </p>
            </td>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:6.9645in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">指定不扫描的包名</span></span></p>
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">在</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">use-default-filters="false"</span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">的情况下，</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">exclude-filter</span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">是针对</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">include-filter</span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">里的内容进行排除</span></span></p>
                <table summary="" cellspacing="0"
                    style="border-collapse:collapse; border-color:#a3a3a3; border-style:solid; border-width:1px;"
                    class=" cke_show_border">
                    <tbody>
                        <tr>
                            <td
                                style="background-color:black; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:.9006in">
                                <p><span style="font-size:10.5pt"><span
                                            style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                                style="color:white"><strong>参数</strong></span></span></span></p>
                            </td>
                            <td
                                style="background-color:black; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:5.525in">
                                <p><span style="font-size:10.5pt"><span
                                            style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                                style="color:white"><strong>描述</strong></span></span></span></p>
                            </td>
                        </tr>
                        <tr>
                            <td
                                style="background-color:white; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:.9006in">
                                <p><span style="font-size:10.5pt"><span
                                            style="font-family:&quot;Comic Sans MS&quot;">type</span></span></p>
                            </td>
                            <td
                                style="background-color:white; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:5.6576in">
                                <p><span style="font-size:10.5pt"><span
                                            style="font-family:&quot;Microsoft YaHei UI&quot;">扫描的过滤器的类型</span></span>
                                </p>
                                <table summary="" cellspacing="0"
                                    style="border-collapse:collapse; border-color:#a3a3a3; border-style:solid; border-width:1px;"
                                    class=" cke_show_border">
                                    <tbody>
                                        <tr>
                                            <td
                                                style="background-color:black; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.034in">
                                                <p><span style="font-size:9.5pt"><span
                                                            style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                                                style="color:white"><strong>过滤器类型</strong></span></span></span>
                                                </p>
                                            </td>
                                            <td
                                                style="background-color:black; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:4.0652in">
                                                <p><span style="font-size:9.5pt"><span
                                                            style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                                                style="color:white"><strong>描述</strong></span></span></span>
                                                </p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td
                                                style="background-color:white; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.034in">
                                                <p><span style="font-size:9.5pt"><span
                                                            style="font-family:&quot;Comic Sans MS&quot;">annotation</span></span>
                                                </p>
                                            </td>
                                            <td
                                                style="background-color:white; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:4.109in">
                                                <p><span style="font-size:9.5pt"><span
                                                            style="font-family:&quot;Microsoft YaHei UI&quot;">过滤器扫描使用注解所标注的那些类，通过</span><span
                                                            style="font-family:&quot;Comic Sans MS&quot;">expression</span><span
                                                            style="font-family:&quot;Microsoft YaHei UI&quot;">属性指定要扫描的注释</span></span>
                                                </p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td
                                                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.034in">
                                                <p><span style="font-size:9.5pt"><span
                                                            style="font-family:&quot;Comic Sans MS&quot;">assignable</span></span>
                                                </p>
                                            </td>
                                            <td
                                                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:4.0652in">
                                                <p><span style="font-size:9.5pt"><span
                                                            style="font-family:&quot;Microsoft YaHei UI&quot;">过滤器扫描派生于</span><span
                                                            style="font-family:&quot;Comic Sans MS&quot;">expression</span><span
                                                            style="font-family:&quot;Microsoft YaHei UI&quot;">属性所指定类型的那些类</span></span>
                                                </p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td
                                                style="background-color:white; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.034in">
                                                <p><span style="font-size:9.5pt"><span
                                                            style="font-family:&quot;Comic Sans MS&quot;">aspectj</span></span>
                                                </p>
                                            </td>
                                            <td
                                                style="background-color:white; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:4.1027in">
                                                <p><span style="font-size:9.5pt"><span
                                                            style="font-family:&quot;Microsoft YaHei UI&quot;">过滤器扫描与</span><span
                                                            style="font-family:&quot;Comic Sans MS&quot;">expression</span><span
                                                            style="font-family:&quot;Microsoft YaHei UI&quot;">属性所指定的</span><span
                                                            style="font-family:&quot;Comic Sans MS&quot;">AspectJ</span><span
                                                            style="font-family:&quot;Microsoft YaHei UI&quot;">表达式所匹配的那些类</span></span>
                                                </p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td
                                                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.034in">
                                                <p><span style="font-size:9.5pt"><span
                                                            style="font-family:&quot;Comic Sans MS&quot;">custom</span></span>
                                                </p>
                                            </td>
                                            <td
                                                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:4.0652in">
                                                <p><span style="font-size:9.5pt"><span
                                                            style="font-family:&quot;Microsoft YaHei UI&quot;">使用自定义的</span><span
                                                            style="font-family:&quot;Comic Sans MS&quot;">org.springframework.core.type.TypeFliter</span><span
                                                            style="font-family:&quot;Microsoft YaHei UI&quot;">实现类，该类由</span><span
                                                            style="font-family:&quot;Comic Sans MS&quot;">expression</span><span
                                                            style="font-family:&quot;Microsoft YaHei UI&quot;">属性指定</span></span>
                                                </p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td
                                                style="background-color:white; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.034in">
                                                <p><span style="font-size:9.5pt"><span
                                                            style="font-family:&quot;Comic Sans MS&quot;">regex</span></span>
                                                </p>
                                            </td>
                                            <td
                                                style="background-color:white; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:4.109in">
                                                <p><span style="font-size:9.5pt"><span
                                                            style="font-family:&quot;Microsoft YaHei UI&quot;">过滤器扫描类的名称与</span><span
                                                            style="font-family:&quot;Comic Sans MS&quot;">expression</span><span
                                                            style="font-family:&quot;Microsoft YaHei UI&quot;">属性所指定正则表示式所匹配的那些类</span></span>
                                                </p>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <p><span style="font-size:10.5pt"><span
                                            style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
                            </td>
                        </tr>
                        <tr>
                            <td
                                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:.9201in">
                                <p><span style="font-size:10.5pt"><span
                                            style="font-family:&quot;Comic Sans MS&quot;">expression</span></span></p>
                            </td>
                            <td
                                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:5.5062in">
                                <p><span style="font-size:10.5pt"><span
                                            style="font-family:&quot;Microsoft YaHei UI&quot;">扫描的完整包名或包名的表达式</span></span>
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
<table summary="" cellspacing="0"
    style="border-collapse:collapse; border-color:#a3a3a3; border-style:solid; border-width:0px; margin-left:32px"
    class=" cke_show_border">
    <tbody>
        <tr>
            <td
                style="background-color:white; border-bottom:0px; border-left:0px; border-right:0px; border-top:0px; vertical-align:top; width:8.1673in">
                <p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">&lt;context:component-scan</span></span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">base-package</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">=</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:maroon">"com.test.myapp"</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">&gt;</span></span></span></p>
                <p><span style="font-size:12.0pt">&nbsp;&nbsp;<span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">&lt;context:include-filter</span></span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">type</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">=</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:maroon">"annotation"</span></span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">expression</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">=</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:maroon">"org.springframework.stereotype.Controller"</span></span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">/&gt;</span></span></span></p>
                <p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">&lt;/context:component-scan&gt;</span></span></span></p>
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
                style="background-color:white; border-bottom:0px; border-left:0px; border-right:0px; border-top:0px; vertical-align:top; width:8.975in">
                <p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">&lt;context:component-scan</span></span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">base-package=</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:maroon">"com.wjx.betalot"</span></span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:green">&lt;!--</span></span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:green">&nbsp;扫描的基本包路径&nbsp;</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:green">--&gt;</span></span></span></p>
                <p style="margin-left:36px"><span style="font-size:12.0pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">annotation-config</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">=</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:maroon">"true"</span></span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:green">&lt;!--</span></span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:green">&nbsp;是否激活属性注入注解&nbsp;</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:green">--&gt;</span></span></span></p>
                <p style="margin-left:36px"><span style="font-size:12.0pt"><span style="color:green"><span
                                style="font-family:&quot;Comic Sans MS&quot;">&lt;!--</span>&nbsp;<span
                                style="font-family:&quot;Comic Sans MS&quot;">Bean</span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">的</span><span
                                style="font-family:&quot;Comic Sans MS&quot;">ID</span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">策略生成器&nbsp;</span><span
                                style="font-family:&quot;Comic Sans MS&quot;">--&gt;</span></span></span></p>
                <p style="margin-left:36px"><span style="font-size:12.0pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">name-generator</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">=</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:maroon">"org.springframework.context.annotation.AnnotationBeanNameGenerator"</span></span>&nbsp;&nbsp;</span>
                </p>
                <p style="margin-left:36px"><span style="font-size:12.0pt"><span style="color:green"><span
                                style="font-family:&quot;Comic Sans MS&quot;">&lt;!--</span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">&nbsp;对资源进行筛选的正则表达式，这边是个大的范畴，具体细分在</span><span
                                style="font-family:&quot;Comic Sans MS&quot;">include-filter</span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">与</span><span
                                style="font-family:&quot;Comic Sans MS&quot;">exclude-filter</span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">中进行&nbsp;</span><span
                                style="font-family:&quot;Comic Sans MS&quot;">--&gt;</span></span></span></p>
                <p style="margin-left:36px"><span style="font-size:12.0pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">resource-pattern</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">=</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:maroon">"**/*.class"</span></span>&nbsp;</span></p>
                <p style="margin-left:36px"><span style="font-size:12.0pt"><span style="color:green"><span
                                style="font-family:&quot;Comic Sans MS&quot;">&lt;!--</span>&nbsp;<span
                                style="font-family:&quot;Comic Sans MS&quot;">scope</span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">解析器&nbsp;，与</span><span
                                style="font-family:&quot;Comic Sans MS&quot;">scoped-proxy</span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">只能同时配置一个&nbsp;</span><span
                                style="font-family:&quot;Comic Sans MS&quot;">--&gt;</span></span></span></p>
                <p style="margin-left:36px"><span style="font-size:12.0pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">scope-resolver</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">=</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:maroon">"org.springframework.context.annotation.AnnotationScopeMetadataResolver"</span></span>&nbsp;</span>
                </p>
                <p style="margin-left:36px"><span style="font-size:12.0pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">scoped-proxy</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">=</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:maroon">"no"</span></span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:green">&lt;!--</span></span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:green">scope</span></span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:green">代理，与</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:green">scope-resolver</span></span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:green">只能同时配置一个&nbsp;</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:green">--&gt;</span></span></span></p>
                <p style="margin-left:36px"><span style="font-size:12.0pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">use-default-filters</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">=</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:maroon">"false"</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">&gt;</span></span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:green">&lt;!--</span></span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:green">&nbsp;是否使用默认的过滤器，默认值</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:green">true</span></span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:green">--&gt;</span></span></span></p>
                <p><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:black">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></span></span>
                </p>
                <p style="margin-left:36px"><span style="font-size:12.0pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:green">&lt;!--</span></span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:green">&nbsp;注意：若使用</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:green">include-filter</span></span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:green">去定制扫描内容，要在</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:green">use-default-filters="false"</span></span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:green">的情况下，不然会“失效”，被默认的过滤机制所覆盖&nbsp;</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:green">--&gt;</span></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                </p>
                <p style="margin-left:36px"><span style="font-size:12.0pt"><span style="color:green"><span
                                style="font-family:&quot;Comic Sans MS&quot;">&lt;!--</span>&nbsp;<span
                                style="font-family:&quot;Comic Sans MS&quot;">annotation</span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">是对注解进行扫描&nbsp;</span><span
                                style="font-family:&quot;Comic Sans MS&quot;">--&gt;</span></span></span></p>
                <p style="margin-left:36px"><span style="font-size:12.0pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">&lt;context:include-filter</span></span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">type</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">=</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:maroon">"annotation"</span></span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">expression</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">=</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:maroon">"org.springframework.stereotype.Component"</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">/&gt;</span></span>&nbsp;</span></p>
                <p style="margin-left:36px"><span style="font-size:12.0pt"><span style="color:green"><span
                                style="font-family:&quot;Comic Sans MS&quot;">&lt;!--</span>&nbsp;<span
                                style="font-family:&quot;Comic Sans MS&quot;">assignable</span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">是对类或接口进行扫描&nbsp;</span><span
                                style="font-family:&quot;Comic Sans MS&quot;">--&gt;</span></span></span></p>
                <p style="margin-left:36px"><span style="font-size:12.0pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">&lt;context:include-filter</span></span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">type</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">=</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:maroon">"assignable"</span></span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">expression</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">=</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:maroon">"com.wjx.betalot.performer.Performer"</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">/&gt;</span></span></span></p>
                <p style="margin-left:36px"><span style="font-size:12.0pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">&lt;context:include-filter</span></span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">type</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">=</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:maroon">"assignable"</span></span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">expression</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">=</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:maroon">"com.wjx.betalot.performer.impl.Sonnet"</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">/&gt;</span></span></span></p>
                <p><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:black">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></span></span>
                </p>
                <p style="margin-left:36px"><span style="font-size:12.0pt"><span style="color:green"><span
                                style="font-family:&quot;Comic Sans MS&quot;">&lt;!--</span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">&nbsp;注意：在</span><span
                                style="font-family:&quot;Comic Sans MS&quot;">use-default-filters="false"</span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">的情况下，</span><span
                                style="font-family:&quot;Comic Sans MS&quot;">exclude-filter</span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">是针对</span><span
                                style="font-family:&quot;Comic Sans MS&quot;">include-filter</span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">里的内容进行排除&nbsp;</span><span
                                style="font-family:&quot;Comic Sans MS&quot;">--&gt;</span></span></span></p>
                <p style="margin-left:36px"><span style="font-size:12.0pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">&lt;context:exclude-filter</span></span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">type</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">=</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:maroon">"annotation"</span></span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">expression</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">=</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:maroon">"org.springframework.stereotype.Controller"</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">/&gt;</span></span></span></p>
                <p style="margin-left:36px"><span style="font-size:12.0pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">&lt;context:exclude-filter</span></span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">type</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">=</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:maroon">"assignable"</span></span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">expression</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">=</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:maroon">"com.wjx.betalot.performer.impl.RainPoem"</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">/&gt;</span></span></span></p>
                <p style="margin-left:36px"><span style="font-size:12.0pt">&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">&lt;context:exclude-filter</span></span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">type</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">=</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:maroon">"regex"</span></span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">expression</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">=</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:maroon">".service.*"</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">/&gt;</span></span>&nbsp;</span></p>
                <p><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:black">&nbsp;</span></span></span></p>
                <p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">&lt;/context:component-scan&gt;</span></span></span></p>
            </td>
        </tr>
    </tbody>
</table>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:blue">&nbsp;</span></span></span></p>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:blue">&nbsp;</span></span></span></p>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:blue">&nbsp;</span></span></span></p>
<p><span style="font-size:12.0pt"><span style="color:blue"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">来自</span><span
                style="font-family:&quot;Comic Sans MS&quot;"> &lt;</span><a
                data-cke-saved-href="https://www.cnblogs.com/wkrbky/p/5930648.html"
                href="https://www.cnblogs.com/wkrbky/p/5930648.html"><span
                    style="font-family:&quot;Comic Sans MS&quot;">https://www.cnblogs.com/wkrbky/p/5930648.html</span></a><span
                style="font-family:&quot;Comic Sans MS&quot;">&gt; </span></span></span></p>
