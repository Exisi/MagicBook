---
categories:
  - Spring
tags:
  - DI
date:
  - 2022-11-28 7:49:54
---

<ul style="list-style-type:disc">
    <li><span style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">使用注解的作用在于代替</span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Comic Sans MS&quot;">applicationContext.xml</span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">文件中的配置操作，用了注解之后，就不需要在</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">xml</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">文件中配置</span></span></li>
</ul>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#333333">&nbsp;</span></span></span></p>
<ul style="list-style-type:disc">
    <li><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                    style="color:black">Spring</span></span></span><span style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                    style="color:black">能够从</span></span></span><span style="font-size:12.0pt"><span
                style="font-family:&quot;Comic Sans MS&quot;"><span
                    style="color:black">classPath</span></span></span><span style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                    style="color:black">下自动扫描，实例化具有特定注解的类，</span></span></span><span style="font-size:12.0pt"><span
                style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">Spring</span></span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                    style="color:black">提供了使用注解的方式注入</span></span></span><span style="font-size:12.0pt"><span
                style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">bean</span></span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                    style="color:black">。首先需要在</span></span></span><span style="font-size:12.0pt"><span
                style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">xml</span></span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                    style="color:black">中开启解析注解的支持，因为默认情况下是不支持的。</span></span></span></li>
</ul>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
<ul style="list-style-type:disc">
    <li><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">首先需要在</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">xml</span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">中开启解析注解的支持，因为默认情况下是不支持的</span></span></li>
</ul>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
<ol>
    <li><span style="color:#e67e22;"><span style="font-size:12.0pt"><span
                    style="font-family:&quot;Microsoft YaHei UI&quot;">引入</span></span><span
                style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">c</span></span><span
                style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">ontext</span></span><span
                style="font-size:12.0pt"><span
                    style="font-family:&quot;Microsoft YaHei UI&quot;">命名空间</span></span></span></li>
</ol>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">xmlns:context="http://www.springframework.org/schema/context"</span></span>
</p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">xsi:schemaLocation=http://www.springframework.org/schema/context<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a data-cke-saved-href="http://www.springframework.org/schema/context/spring-context-4.0.xsd"
                href="http://www.springframework.org/schema/context/spring-context-4.0.xsd">http://www.springframework.org/schema/context/spring-context-4.0.xsd</a></span></span>
</p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
<ol style="list-style-type:decimal">
    <li value="2"><span style="color:#e67e22;"><span style="font-size:12.0pt"><span
                    style="font-family:&quot;Microsoft YaHei UI&quot;">在</span></span><span
                style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">xm</span></span><span
                style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">l</span></span><span
                style="font-size:12.0pt"><span
                    style="font-family:&quot;Microsoft YaHei UI&quot;">中开启注解的支持</span></span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"></span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"></span></span></li>
</ol>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:blue">&lt;context:annotation-config/&gt;</span></span></span><br></p>
<ol style="list-style-type:decimal">
    <li value="3"><span style="color:#e67e22;"><span style="font-size:12.0pt"><span
                    style="font-family:&quot;Microsoft YaHei UI&quot;">在</span></span><span
                style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">xm</span></span><span
                style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">l</span></span><span
                style="font-size:12.0pt"><span
                    style="font-family:&quot;Microsoft YaHei UI&quot;">中指定需要扫描的包或者使用</span></span><span
                style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">java</span></span><span
                style="font-size:12.0pt"><span
                    style="font-family:&quot;Microsoft YaHei UI&quot;">声明</span></span></span></li>
</ol>
<p style="margin-left: 40px;"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Microsoft YaHei UI&quot;"><strong>语法</strong></span></span><br></p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:blue">&lt;context:component-scan</span></span>&nbsp;<span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:blue">base-package</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">=</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:maroon">"</span></span><span
            style="font-family:&quot;Microsoft YaHei UI&quot;"><span style="color:maroon">注解对象所在的包名</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:maroon">"</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:blue">/&gt;</span></span></span></p>
<p style="margin-left: 40px;"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                style="color:#70ad47"><strong>示例</strong></span></span></span></p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:blue">&lt;context:component-scan</span></span>&nbsp;<span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:blue">base</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:blue">-</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:blue">package</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">=</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:maroon">"com.</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:maroon">exi</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:maroon">.spring.</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:maroon">pojo</span></span>&nbsp;<span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:blue">/&gt;</span></span></span></p>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
<p><span style="font-size:13.5pt"><span
            style="font-family:&quot;Microsoft YaHei UI&quot;"><strong>扫描多个包的方式</strong></span></span></p>
<ol style="list-style-type:decimal">
    <li value="1"><span style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">使用多次组件扫描器</span></span></li>
</ol>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:blue">&lt;co</span></span><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:blue">ntext:component-scan</span></span>&nbsp;<span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:blue">base</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:blue">-</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:blue">package</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">=</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:maroon">"com.</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:maroon">exi</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:maroon">.spring.</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:maroon">pojo</span></span>&nbsp;<span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:blue">/&gt;</span></span></span></p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:blue">&lt;co</span></span><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:blue">ntext:component-scan</span></span>&nbsp;<span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:blue">base</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:blue">-</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:blue">package</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">=</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:maroon">"com.</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:maroon">exi</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:maroon">.spring.</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:maroon">dao</span></span>&nbsp;<span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:blue">/&gt;</span></span></span></p>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:blue">&nbsp;</span></span></span></p>
<ol style="list-style-type:decimal">
    <li value="2"><span style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">使用分隔符（</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">" ; "</span></span><span
            style="font-size:12.0pt"><span style="font-family:SimSun">或者</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">" , "</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">）</span></span></li>
</ol>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:blue">&lt;co</span></span><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:blue">ntext:component-scan</span></span>&nbsp;<span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:blue">base</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:blue">-</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:blue">package</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">=</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:maroon">"com.</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:maroon">exi</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:maroon">.spring.</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:maroon">pojo; </span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:maroon">com.</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:maroon">exi</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:maroon">.spring.</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:maroon">dao</span></span>&nbsp;<span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:blue">/&gt;</span></span></span></p>
<p><span style="font-size:12.0pt"><span style="font-family:SimSun">&nbsp;</span></span></p>
<ol style="list-style-type:decimal">
    <li value="3"><span style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">指定父包</span></span></li>
</ol>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:blue">&lt;co</span></span><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:blue">ntext:component-scan</span></span>&nbsp;<span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:blue">base</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:blue">-</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:blue">package</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">=</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:maroon">"com.</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:maroon">exi</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:maroon">.spring</span></span> <span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:blue">/&gt;</span></span></span></p>
<p><span style="font-size:12.0pt"><span style="font-family:SimSun">&nbsp;</span></span></p>
