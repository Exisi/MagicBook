---
categories:
  - MyBatis
tags:
  - mappers
date:
  - 2023-3-27 7:13:01
---

<ul style="list-style-type:disc">
    <li><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei&quot;">我们都知道</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"> Mapper </span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei&quot;">是一个接口，它的每个方式是我们与数据库交互的入口，每个</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"> Mapper </span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei&quot;">都有与之相对应的一个</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"> XML </span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei&quot;">文件</span></span></li>
    <li><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">XML </span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei&quot;">文件用于存放</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">sql</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei&quot;">语句，</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">Mapper</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei&quot;">接口通过</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">id</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei&quot;">绑定</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">XML</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei&quot;">中的</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">sql</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei&quot;">映射</span></span></li>
</ul>
<p><span style="font-size:13.5pt"><span style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
<p><span style="font-size:13.5pt"><span style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
<p><span style="font-size:13.5pt"><span style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
<p><span style="font-size:13.5pt"><strong><span style="font-family:&quot;Comic Sans MS&quot;">Mapper
            </span></strong><strong><span style="font-family:&quot;Microsoft YaHei&quot;">注册方式</span></strong></span>
</p>
<ul style="list-style-type:disc">
    <li><span style="font-size:12.0pt"><strong><span
                    style="font-family:&quot;Comic Sans MS&quot;">resource/</span></strong></span><span
            style="font-size:12.0pt"><strong><span
                    style="font-family:&quot;Comic Sans MS&quot;">mybatis-config.xml</span></strong></span></li>
</ul>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">&lt;?xml version="1.0" encoding="UTF-8"
            standalone="no"?&gt;</span></span></p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">&lt;!DOCTYPE configuration PUBLIC "-//mybatis.org//DTD Config
            3.0//EN" "<a data-cke-saved-href="http://mybatis.org/dtd/mybatis-3-config.dtd"
                href="http://mybatis.org/dtd/mybatis-3-config.dtd">http://mybatis.org/dtd/mybatis-3-config.dtd</a>"&gt;</span></span>
</p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">&lt;configuration&gt;</span></span></p>
<p style="margin-left: 120px;"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
<p style="margin-left: 120px;"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">&lt;mappers&gt;&nbsp; </span></span></p>
<p style="margin-left: 160px;"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">&lt;!-- </span></span><span style="font-size:12.0pt"><span
            style="font-family:&quot;Microsoft YaHei UI&quot;">通过</span></span><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">package</span></span><span style="font-size:12.0pt"><span
            style="font-family:&quot;Microsoft YaHei UI&quot;">元素将会把指定包下面的所有</span></span><span
        style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">Mapper</span></span><span
        style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">接口</span></span><span
        style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">(interface)</span></span><span
        style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">进行注册</span></span><span
        style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"> --&gt;&nbsp; </span></span></p>
<p style="margin-left: 160px;"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">&lt;package name="com.mybatis.dao"/&gt;&nbsp; </span></span>
</p>
<p style="margin-left: 160px;"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
<p style="margin-left: 160px;"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">&lt;!-- </span></span><span style="font-size:12.0pt"><span
            style="font-family:&quot;Microsoft YaHei UI&quot;">通过</span></span><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">mapper</span></span><span style="font-size:12.0pt"><span
            style="font-family:&quot;Microsoft YaHei UI&quot;">元素的</span></span><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">resource</span></span><span style="font-size:12.0pt"><span
            style="font-family:&quot;Microsoft YaHei UI&quot;">属性可以指定一个相对于类路径的</span></span><span
        style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">Mapper.xml</span></span><span
        style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">文件</span></span><span
        style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"> --&gt;&nbsp; </span></span></p>
<p style="margin-left: 160px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#e84c22">&lt;mapper resource="com/mybatis/</span><span
                style="color:#e84c22">dao/</span><span style="color:#e84c22">User</span><span
                style="color:#e84c22">s</span><span style="color:#e84c22">Mapper.xml"/&gt;</span>&nbsp; </span></span>
</p>
<p style="margin-left: 160px;"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
<p style="margin-left: 160px;"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">&lt;!-- </span></span><span style="font-size:12.0pt"><span
            style="font-family:&quot;Microsoft YaHei UI&quot;">通过</span></span><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">mapper</span></span><span style="font-size:12.0pt"><span
            style="font-family:&quot;Microsoft YaHei UI&quot;">元素的</span></span><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">url</span></span><span style="font-size:12.0pt"><span
            style="font-family:&quot;Microsoft YaHei UI&quot;">属性可以指定一个通过</span></span><span
        style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">URL</span></span><span
        style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">请求</span></span><span
        style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">Mapper.xml</span></span><span
        style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">文件</span></span><span
        style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"> --&gt;&nbsp; </span></span></p>
<p style="margin-left: 160px;"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">&lt;mapper url="file:///E:/UsersMapper.xml"/&gt;&nbsp;
        </span></span></p>
<p style="margin-left: 160px;"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
<p style="margin-left: 160px;"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">&lt;!-- </span></span><span style="font-size:12.0pt"><span
            style="font-family:&quot;Microsoft YaHei UI&quot;">通过</span></span><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">mapper</span></span><span style="font-size:12.0pt"><span
            style="font-family:&quot;Microsoft YaHei UI&quot;">元素的</span></span><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">class</span></span><span style="font-size:12.0pt"><span
            style="font-family:&quot;Microsoft YaHei UI&quot;">属性可以指定一个</span></span><span
        style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">Mapper</span></span><span
        style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">接口进行注册</span></span><span
        style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"> --&gt;&nbsp; </span></span></p>
<p style="margin-left: 160px;"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">&lt;mapper class="com.mybatis.dao.UsersMapper"/&gt;&nbsp;
        </span></span></p>
<p style="margin-left: 120px;"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">&lt;/mappers&gt;&nbsp; </span></span></p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">&lt;/configuration&gt;</span></span></p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
<p><span style="font-size:13.5pt"><strong><span style="font-family:&quot;Comic Sans MS&quot;">Mapper
            </span></strong><strong><span style="font-family:&quot;Microsoft YaHei&quot;">绑定</span></strong></span></p>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei&quot;">&nbsp;</span></span></p>
<ul style="list-style-type:disc">
    <li><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">MyBatis</span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">框架在应用启动时会解析所有的</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">Mapper</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">接口，然后调用</span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Comic Sans MS&quot;">MapperRegistry</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">对象的</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">addMapper()</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">方法将</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">Mapper</span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">接口信息和对应的</span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Comic Sans MS&quot;">MapperProxyFactory</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">对象注册到</span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Comic Sans MS&quot;">MapperRegistry</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">对象中</span></span></li>
</ul>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"></span></span><br></p>
<ul style="list-style-type:disc">
    <li><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">因此，</span></span><span
            style="font-size:12.0pt"><strong><span
                    style="font-family:&quot;Comic Sans MS&quot;">Mapper</span></strong></span><span
            style="font-size:12.0pt"><strong><span
                    style="font-family:&quot;Microsoft YaHei UI&quot;">接口名的</span></strong></span><span
            style="font-size:12.0pt"><strong><span
                    style="font-family:&quot;Comic Sans MS&quot;">xml</span></strong></span><span
            style="font-size:12.0pt"><strong><span
                    style="font-family:&quot;Microsoft YaHei UI&quot;">文件名必须一致</span></strong></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">，否则会导致</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">Mapper</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">接口和</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">xml</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">绑定失败，</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">Mapper</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">注册报错</span></span></li>
</ul>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"></span></span><br></p>
<ul style="list-style-type:disc">
    <li><span style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">映射名建议单驼峰格式，防止</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">Mapper</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">未找到</span></span></li>
</ul>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"></span></span><br></p>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"></span></span><br></p>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei&quot;">来自</span><span
            style="font-family:&quot;Comic Sans MS&quot;">&lt;</span><a
            data-cke-saved-href="https://www.jianshu.com/p/930dffa4e172"
            href="https://www.jianshu.com/p/930dffa4e172"><span
                style="font-family:&quot;Comic Sans MS&quot;">https://www.jianshu.com/p/930dffa4e172</span></a><span
            style="font-family:&quot;Comic Sans MS&quot;">&gt;</span></span></p>
