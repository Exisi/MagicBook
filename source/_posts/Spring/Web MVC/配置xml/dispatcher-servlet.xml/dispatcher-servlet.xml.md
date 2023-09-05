---
categories:
  - Spring
tags:
  - dispatcher-servlet.xml
date:
  - 2022-6-28 14:06:13
---

<ul style="list-style-type:disc">
    <li><span style="font-size:12.0pt"><span
                style="font-family:&quot;Comic Sans MS&quot;">ApplicationContext.xml</span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">&nbsp;&nbsp;是</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">spring </span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">全局配置文件，用来控制</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">spring </span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">特性的</span></span></li>
</ul>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">​​​​​​​</span></span><br></p>
<ul style="list-style-type:disc">
    <li><span style="font-size:12.0pt"><span
                style="font-family:&quot;Comic Sans MS&quot;">dispatcher-servlet.xml</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">&nbsp;是</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">spring mvc</span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">里面的，控制器、拦截</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">uri</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">转发</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">view</span></span></li>
</ul>
<p style="margin-left:36px"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#333333">&nbsp;</span></span></span></p>
<ul style="list-style-type:disc">
    <li><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">一个</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">bean</span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">如果在两个文件中都被定义了</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">(</span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">比如两个文件中都定义了</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">component
                scan</span></span><span style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">扫描相同的</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">package)</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">，</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"> spring</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">会在</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">application
                context</span></span><span style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">和</span></span><span style="font-size:12.0pt"><span
                style="font-family:&quot;Comic Sans MS&quot;"> servlet context</span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">中都生成一个实例，他们处于不同的上下文空间中，他们的行为方式是有可能不一样的。</span></span>
    </li>
</ul>
<p style="margin-left:36px"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Microsoft YaHei UI&quot;">&nbsp;</span></span></p>
<ul style="list-style-type:disc">
    <li><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">如果在</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">application
                context</span></span><span style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">和</span></span><span style="font-size:12.0pt"><span
                style="font-family:&quot;Comic Sans MS&quot;"> servlet context</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">中都存在同一个</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"> @Service </span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">的实例，</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"> controller</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">（在</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">servlet
                context</span></span><span style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">中） 通过</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"> @Resource</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">引用时，
                会优先选择</span></span><span style="font-size:12.0pt"><span
                style="font-family:&quot;Comic Sans MS&quot;">servlet context</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">中的实例。</span></span></li>
</ul>
<p style="margin-left:36px"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Microsoft YaHei UI&quot;">&nbsp;</span></span></p>
<ul style="list-style-type:disc">
    <li><span style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">不过最好的方法是：在</span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Comic Sans MS&quot;">applicationContext</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">和</span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Comic Sans MS&quot;">dispatcher-servlet</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">定义的</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">bean</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">最好不要重复，</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">
                dispatcher-servlet</span></span><span style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">最好只是定义</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">controller</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">类型的</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">bea</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">n</span></span></li>
</ul>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                style="color:#70ad47"><strong>示例</strong></span></span></span></p>
<p style="margin-left:36px"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:blue">&lt;?xml</span></span>&nbsp;<span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:blue">version</span></span><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:black">=</span></span><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:maroon">"1.0"</span></span>&nbsp;<span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:blue">encoding</span></span><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:black">=</span></span><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:maroon">"UTF-8"</span></span><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:blue">?&gt;</span></span></span></p>
<p style="margin-left:36px"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:blue">&lt;beans</span></span>&nbsp;<span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:blue">xmlns</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">=</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:maroon">"http://www.springframework.org/schema/beans"</span></span></span></p>
<p style="margin-left:72px"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:blue">xmlns:xsi</span><span style="color:black">=</span><span
                style="color:maroon">"http://www.w3.org/2001/XMLSchema-instance"</span></span></span></p>
<p style="margin-left:72px"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:blue">xmlns:mvc</span><span style="color:black">=</span><span
                style="color:maroon">"http://www.springframework.org/schema/mvc"</span></span></span></p>
<p style="margin-left:72px"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:blue">xmlns:context</span><span style="color:black">=</span><span
                style="color:maroon">"http://www.springframework.org/schema/context"</span></span></span></p>
<p style="margin-left:72px"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:blue">xsi:schemaLocation</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">=</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:maroon">"http://www.springframework.org/schema/beans</span></span>&nbsp;<a
            data-cke-saved-href="http://www.springframework.org/schema/beans/spring-beans.xsd"
            href="http://www.springframework.org/schema/beans/spring-beans.xsd"><span
                style="font-family:&quot;Comic Sans MS&quot;"><span
                    style="color:maroon">http://www.springframework.org/schema/beans/spring-beans.xsd</span></span></a>&nbsp;<a
            data-cke-saved-href="http://www.springframework.org/schema/mvc"
            href="http://www.springframework.org/schema/mvc"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                    style="color:maroon">http://www.springframework.org/schema/mvc</span></span></a>&nbsp;<a
            data-cke-saved-href="http://www.springframework.org/schema/mvc/spring-mvc.xsd"
            href="http://www.springframework.org/schema/mvc/spring-mvc.xsd"><span
                style="font-family:&quot;Comic Sans MS&quot;"><span
                    style="color:maroon">http://www.springframework.org/schema/mvc/spring-mvc.xsd</span></span></a>&nbsp;<a
            data-cke-saved-href="http://www.springframework.org/schema/context"
            href="http://www.springframework.org/schema/context"><span
                style="font-family:&quot;Comic Sans MS&quot;"><span
                    style="color:maroon">http://www.springframework.org/schema/context</span></span></a>&nbsp;<a
            data-cke-saved-href="http://www.springframework.org/schema/context/spring-context.xsd"
            href="http://www.springframework.org/schema/context/spring-context.xsd"><span
                style="font-family:&quot;Comic Sans MS&quot;"><span
                    style="color:maroon">http://www.springframework.org/schema/context/spring-context.xsd</span></span></a><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:maroon">"</span></span><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:blue">&gt;</span></span></span></p>
<p style="margin-left:36px"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
<p style="margin-left:36px"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:blue">&lt;/beans&gt;</span></span></span></p>
