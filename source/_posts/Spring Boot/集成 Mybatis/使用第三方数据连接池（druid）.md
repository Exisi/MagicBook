---
categories:
- Spring Boot
tags:
- druid
date:
- 2022-11-28 15:43:07
---

<ul style="list-style-type:disc">
    <li><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">导入相关依赖</span></span>
    </li>
</ul>
<p style="margin-left:72px"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:blue">&lt;dependency&gt;</span></span></span></p>
<p style="margin-left:72px"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">&nbsp;&nbsp;<span
                style="color:blue">&lt;groupId&gt;</span><span style="color:black">com.alibaba</span><span
                style="color:blue">&lt;/groupId&gt;</span></span></span></p>
<p style="margin-left:72px"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">&nbsp;&nbsp;<span
                style="color:blue">&lt;artifactId&gt;</span><span
                style="color:black">druid-spring-boot-starter</span><span
                style="color:blue">&lt;/artifactId&gt;</span></span></span></p>
<p style="margin-left:72px"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">&nbsp;&nbsp;<span
                style="color:blue">&lt;version&gt;</span><span style="color:black">1.2.8</span><span
                style="color:blue">&lt;/version&gt;</span></span></span></p>
<p style="margin-left:72px"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:blue">&lt;/dependency&gt;</span></span></span></p>
<p><span style="font-size:12.0pt"><span style="font-family:SimSun">&nbsp;</span></span></p>
<ul style="list-style-type:disc">
    <li><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">在</span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Comic Sans MS&quot;">application.perporties</span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">全局配置文件中添加数据连接池配置</span></span></li>
</ul>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                style="color:#70ad47"><strong>示例</strong></span></span></span></p>
<p style="margin-left: 40px;"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">spring.datasource.type=<span
                style="color:#b43512">com.alibaba.druid.pool.DruidDataSource</span></span></span></p>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                style="color:#70ad47"><strong>示例</strong></span></span></span></p>
<p style="margin-left: 40px;"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">spring.datasource.<span
                style="color:#b43512">druid</span>.driver-class-name=<span style="color:#b43512">com.mysql</span><span
                style="color:#b43512">.cj</span><span style="color:#b43512">.jdbc.Driver</span></span></span></p>
<p style="margin-left: 40px;"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">spring.datasource.<span
                style="color:#b43512">druid</span>.url=<span
                style="color:#b43512">jdbc:mysql://localhost:3306/mydatabase?serverTimezone=</span><span
                style="color:#b43512">UTC</span></span></span></p>
<p style="margin-left: 40px;"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">spring.datasource.<span
                style="color:#b43512">druid</span>.username=<span style="color:#b43512">root</span></span></span></p>
<p style="margin-left: 40px;"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">spring.datasource.<span
                style="color:#b43512">druid</span>.password=<span style="color:#b43512">123456</span></span></span></p>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>