---
categories:
- Spring
tags:
- IOC
date:
- 2022-11-28 7:32:01
---

<ul style="list-style-type:disc">
    <li><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">IoC</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">（</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">Inversion of
                Control</span></span><span style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">）控制反转， 是一个理论，一个指导思想。 </span></span></li>
</ul>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">​​​​​​​</span></span><br></p>
<ul style="list-style-type:disc">
    <li><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">指导开发人员如何使用对象，管理对象。
                把对象的创建，属性赋值，对象的声明周期都交给代码之外的容器管理。</span></span>
        <ul style="list-style-type:disc">
            <li><span style="font-size:12.0pt"><strong><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">控制</span></strong></span></li>
        </ul>
    </li>
</ul>
<p style="margin-left: 120px;"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Microsoft YaHei UI&quot;"><span style="color:#24292e">对象创建，属性赋值，
                对象声明周期管理</span></span></span></p>
<ul style="list-style-type: disc; margin-left: 40px;">
    <li><span style="font-size:12.0pt"><strong><span
                    style="font-family:&quot;Microsoft YaHei UI&quot;">反转</span></strong></span></li>
</ul>
<p style="margin-left: 120px;"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Microsoft YaHei UI&quot;"><span style="color:#24292e">把开发人员管理对象的权限转移给了代码之外的容器实现。
                由容器完成对象的管理。</span></span></span></p>
<ul style="list-style-type: disc; margin-left: 40px;">
    <li><span style="font-size:12.0pt"><strong><span
                    style="font-family:&quot;Microsoft YaHei UI&quot;">正转</span></strong></span></li>
</ul>
<p style="margin-left: 120px;"><span style="font-size:12.0pt"><span style="color:#24292e"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">开发人员在代码中， 使用</span><span
                style="font-family:&quot;Comic Sans MS&quot;"> new </span><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">构造方法创建对象。 开发人员掌握了对象的创建，属性赋值，对象从开始到销毁的全部过程。
                开发人员对对象全部控制。</span></span></span></p>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#24292e">&nbsp;</span></span></span></p>
<ul style="list-style-type: disc; margin-left: 40px;">
    <li><span style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">通过容器，可以使用容器中的对象（容器已经创建了对象， 对象属性已赋值，
                对象也组装完成）</span></span></li>
</ul>
<p><span style="font-size:12.0pt"><span style="font-family:Arial"><span style="color:#24292e">​</span></span></span></p>
<p><span style="font-size:13.5pt"><span style="color:#24292e"><strong><span
                    style="font-family:&quot;Comic Sans MS&quot;">IoC</span></strong><strong><span
                    style="font-family:&quot;Microsoft YaHei UI&quot;">的技术实现（</span></strong><strong><span
                    style="font-family:&quot;Comic Sans MS&quot;">DI</span></strong><strong><span
                    style="font-family:&quot;Microsoft YaHei UI&quot;">）</span></strong></span></span></p>
<ul style="list-style-type:disc">
    <li><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">DI </span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">（ 依赖注入）
                ：</span></span><span style="font-size:12.0pt"><span
                style="font-family:&quot;Comic Sans MS&quot;">Dependency Injection</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">， 缩写是</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">DI . </span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">是</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">IoC</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">的一种技术实现。 </span></span>
    </li>
</ul>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"></span></span><br></p>
<ul style="list-style-type:disc">
    <li><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">spring</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">底层使用的 反射机制，
                通过反射创建对象，给属性赋值，因此使用时只需要提供对应的对象名称</span></span></li>
</ul>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"></span></span><br></p>
<ul style="list-style-type:disc">
    <li><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">给属性赋值可以使用</span></span>
        <ol style="list-style-type:decimal">
            <li value="1"><span style="font-size:12.0pt"><span
                        style="font-family:&quot;Comic Sans MS&quot;">xml</span></span><span
                    style="font-size:12.0pt"><span
                        style="font-family:&quot;Microsoft YaHei UI&quot;">配置文件中的标签和属性</span></span></li>
            <li><span style="font-size:12.0pt"><span
                        style="font-family:&quot;Microsoft YaHei UI&quot;">使用注解</span></span></li>
        </ol>
    </li>
</ul>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"></span></span><br></p>
<ul style="list-style-type:disc">
    <li><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">DI</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">注入分类：</span></span>
        <ul style="list-style-type:disc">
            <li><span style="font-size:12.0pt"><span
                        style="font-family:&quot;Microsoft YaHei UI&quot;">set注入（设值注入）</span></span></li>
            <li><span style="font-size:12.0pt"><span
                        style="font-family:&quot;Microsoft YaHei UI&quot;">构造注入</span></span></li>
        </ul>
    </li>
</ul>
<p style="margin-left:72px"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Microsoft YaHei UI&quot;"><span style="color:#24292e">&nbsp;</span></span></span>
</p>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                style="color:#24292e"><strong>注</strong></span></span></span></p>
<p style="margin-left: 40px;"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                style="color:#24292e"><strong>依赖名词</strong></span></span></span></p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span style="color:#24292e"><span
                style="font-family:&quot;Comic Sans MS&quot;">ClassA</span><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">类使用了</span><span
                style="font-family:&quot;Comic Sans MS&quot;">ClassB</span><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">中的属性或者方法，</span><span
                style="font-family:&quot;Comic Sans MS&quot;">ClassA</span><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">不能抛开</span><span
                style="font-family:&quot;Comic Sans MS&quot;">ClassB</span><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">独立存在，叫做</span><span
                style="font-family:&quot;Comic Sans MS&quot;">ClassA</span><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">依赖</span><span
                style="font-family:&quot;Comic Sans MS&quot;">ClassB.</span></span></span></p>