---
categories:
- Spring
tags:
- PropertyPlaceholderConfigurer
date:
- 2022-11-28 7:35:01
---

<ul style="list-style-type:disc">
    <li><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">spring</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">提供的</span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Comic Sans MS&quot;">PropertyPlaceholderConfigurer</span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">读取数据库配置信息</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">.properties</span></span></li>
</ul>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                style="color:green">&nbsp;</span></span></span></p>
<table summary="" cellspacing="0"
    style="border-collapse:collapse; border-color:#a3a3a3; border-style:solid; border-width:1px; margin-left:32px"
    class=" cke_show_border">
    <tbody>
        <tr>
            <td
                style="background-color:black; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:2.6256in">
                <p><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:white"><strong>参数</strong></span></span></span></p>
            </td>
            <td
                style="background-color:black; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:5.2965in">
                <p><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:white"><strong>描述</strong></span></span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:2.6256in">
                <p><span style="font-size:12.0pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;">locations</span></span></p>
            </td>
            <td
                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:5.2965in">
                <p><span style="font-size:12.0pt"><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">数据库的配置文件位置</span></span></p>
                <p><span style="font-size:12.0pt"><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">使用</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">&lt;list&gt;</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">&lt;value&gt;&lt;/value&gt;</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">&lt;/list&gt;</span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">可以指定多个数据库的配置文件</span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:2.6256in">
                <p><span style="font-size:12.0pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;">order</span></span></p>
            </td>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:5.2965in">
                <p><span style="font-size:12.0pt"><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">加载顺序</span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:2.6451in">
                <p><span style="font-size:12.0pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;">ignoreUnresolvablePlaceholders</span></span>
                </p>
            </td>
            <td
                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:5.277in">
                <p><span style="font-size:12.0pt"><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">是否忽略不可解析的</span><span
                            style="font-family:&quot;Comic Sans MS&quot;"> Placeholder</span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">，</span>&nbsp;<br><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">如配置了多个</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">PropertyPlaceholderConfigurer</span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">，则需设置为</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">true&nbsp; </span></span></p>
            </td>
        </tr>
    </tbody>
</table>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:green">&nbsp;</span></span></span></p>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                style="color:green"><strong>示例</strong></span></span></span></p>
<table summary="" cellspacing="0"
    style="border-collapse:collapse; border-color:#a3a3a3; border-style:solid; border-width:0px; margin-left:32px"
    class=" cke_show_border">
    <tbody>
        <tr>
            <td
                style="background-color:white; border-bottom:0px; border-left:0px; border-right:0px; border-top:0px; vertical-align:top; width:7.9916in">
                <p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">&lt;bean</span></span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:blue">id</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">=</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:maroon">"propertyConfigurerForProject2"</span></span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">class</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">=</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:maroon">"org.springframework.beans.factory.config.PropertyPlaceholderConfigurer"</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">&gt;</span></span></span></p>
                <p><span style="font-size:12.0pt">&nbsp;&nbsp;<span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">&lt;property</span></span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">name</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">=</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:maroon">"order"</span></span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">value</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">=</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:maroon">"2"</span></span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">/&gt;</span></span></span></p>
                <p><span style="font-size:12.0pt">&nbsp;&nbsp;<span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">&lt;property</span></span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">name</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">=</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:maroon">"ignoreUnresolvablePlaceholders"</span></span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">value</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">=</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:maroon">"true"</span></span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">/&gt;</span></span></span></p>
                <p><span style="font-size:12.0pt">&nbsp;&nbsp;<span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">&lt;property</span></span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">name</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">=</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:maroon">"locations"</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">&gt;</span></span></span></p>
                <p style="margin-left:36px"><span style="font-size:12.0pt"><span style="color:#538135"><span
                                style="font-family:&quot;Comic Sans MS&quot;">&lt;!-- </span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">指定多个数据库配置文件</span><span
                                style="font-family:&quot;Comic Sans MS&quot;">--&gt;</span></span></span></p>
                <p><span style="font-size:12.0pt">&nbsp;&nbsp;&nbsp;&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">&lt;list&gt;</span></span></span></p>
                <p><span style="font-size:12.0pt">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">&lt;value&gt;</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:black">classpath:/</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;">resource</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">/jdbc-parms.properties</span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">&lt;/value&gt;</span></span></span></p>
                <p><span style="font-size:12.0pt">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">&lt;value&gt;</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:black">classpath:/</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;">resource</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">/base-config.properties</span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">&lt;/value&gt;</span></span></span></p>
                <p><span style="font-size:12.0pt">&nbsp;&nbsp;&nbsp;&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">&lt;/list&gt;</span></span></span></p>
                <p><span style="font-size:12.0pt">&nbsp;&nbsp;<span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">&lt;/property&gt;</span></span></span></p>
                <p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">&lt;/bean&gt;</span></span></span></p>
            </td>
        </tr>
    </tbody>
</table>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                style="color:green"><strong>示例</strong></span></span></span></p>
<p style="margin-left:36px"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:blue">&lt;bean</span></span>&nbsp;<span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:blue">id</span></span><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:black">=</span></span><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:maroon">"propertyConfigurer"</span></span>&nbsp;<span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:blue">class</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">=</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:maroon">"org.springframework.beans.factory.config.PropertyPlaceholderConfigurer"</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:blue">&gt;</span></span></span></p>
<p style="margin-left:36px"><span style="font-size:12.0pt">&nbsp;&nbsp;<span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:blue">&lt;property</span></span>&nbsp;<span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:blue">name</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">=</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:maroon">"ignoreUnresolvablePlaceholders"</span></span>&nbsp;<span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:blue">value</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">=</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:maroon">"true"</span></span>&nbsp;<span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:blue">/&gt;</span></span></span></p>
<p style="margin-left:36px"><span style="font-size:12.0pt"><span style="color:#538135"><span
                style="font-family:&quot;Comic Sans MS&quot;">&lt;!-- </span><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">指定一个数据库配置文件</span><span
                style="font-family:&quot;Comic Sans MS&quot;">--&gt;</span></span></span></p>
<p style="margin-left:36px"><span style="font-size:12.0pt">&nbsp;&nbsp;<span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:blue">&lt;property</span></span>&nbsp;<span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:blue">name</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">=</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:maroon">"location"</span></span>&nbsp;<span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:blue">value</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">=</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:maroon">"classpath:/application.properties"</span></span>&nbsp;<span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:blue">/&gt;</span></span></span></p>
<p style="margin-left:36px"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:blue">&lt;/bean&gt;</span></span></span></p>