---
categories:
- MyBatis
tags:
- Mapper
date:
- 2022-11-27 7:19:21
---

<p><span style="font-size:13.5pt"><strong><span
                style="font-family:&quot;Comic Sans MS&quot;">Mapper</span></strong><strong><span
                style="font-family:&quot;Microsoft YaHei&quot;">接口</span></strong></span></p>
<ul style="list-style-type:disc">
    <li><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">UserMapper</span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">接口每个方法分别对应一个映射语句</span></span></li>
</ul>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                style="color:#70ad47"><strong>示例</strong></span></span></span></p>
<ul style="list-style-type:disc">
    <li><span style="font-size:12.0pt"><span
                style="font-family:&quot;Comic Sans MS&quot;">UsersMapper</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">.java</span></span></li>
</ul>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">public
            interface UsersMapper {</span></span></p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#00b0f0">public int count();</span></span></span></p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#00b0f0">public List&lt;Users&gt; getUserListById(Integer id);</span></span></span></p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#00b0f0">&nbsp;</span></span></span></p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">}</span></span></p>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#ed7d31">&nbsp;</span></span></span></p>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#ed7d31">&nbsp;</span></span></span></p>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#ed7d31">&nbsp;</span></span></span></p>
<p><span style="font-size:13.5pt"><strong><span
                style="font-family:&quot;Comic Sans MS&quot;">Mapper</span></strong><strong><span
                style="font-family:&quot;Microsoft YaHei&quot;">映射</span></strong></span></p>
<ul style="list-style-type:disc">
    <li><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">在一个</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"> XML </span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">映射文件中，可以定义无数个</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">sql</span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">映射语句，这样一来，</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">XML </span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">头部和文档类型声明部分就显得微不足道了</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">,</span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">因此我们必须为每个</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">mapper</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">指定一个唯一的</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">namespace</span></span></li>
</ul>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#ed7d31">&nbsp;</span></span></span></p>
<ul style="list-style-type:disc">
    <li><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">mapper</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">指定</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">namespace</span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">的值习惯上设置成包名</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">+sql</span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">映射文件名，这样就能够保证</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">namespace</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">的值的唯一</span></span></li>
</ul>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                style="color:#70ad47"><strong>示例</strong></span></span></span></p>
<ul style="list-style-type:disc">
    <li><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">Users</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">Mapper.xml</span></span></li>
</ul>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#a5a5a5">&lt;?xml version="1.0" encoding="UTF-8" ?&gt;<br>&lt;!DOCTYPE mapper PUBLIC
                "-//mybatis.org//DTD Mapper 3.0//EN" "<a data-cke-saved-href="http://-"
                    href="http://-">http://mybatis.org/dtd/mybatis-3-mapper.dtd</a>"&gt;</span></span></span></p>
<p style="margin-left: 80px;"><br><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:blue">&lt;mapper </span><span
                style="color:red">namespace</span><span style="color:blue">=</span><span
                style="color:#a31515">"com.</span><span style="color:#a31515">mybatis</span><span
                style="color:#a31515">.</span><span style="color:#a31515">dao</span><span
                style="color:#a31515">.</span><span style="color:#a31515">Users</span><span
                style="color:#a31515">Mapper"</span><span style="color:blue">&gt;</span></span></span></p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:blue">…</span></span></span></p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:blue">&lt;/mapper&gt;</span></span></span></p>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:blue">&nbsp;</span></span></span></p>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:blue">&nbsp;</span></span></span></p>
<ul style="list-style-type:disc">
    <li><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">在</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">select</span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">标签中编写查询的</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">SQL</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">语句</span></span>
        <ul style="list-style-type:disc">
            <li><span style="font-size:12.0pt"><span
                        style="font-family:&quot;Microsoft YaHei&quot;">接口方法</span></span><span
                    style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">id</span></span></li>
        </ul>
    </li>
</ul>
<p style="margin-left: 120px;"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Microsoft YaHei UI&quot;">设置</span><span
            style="font-family:&quot;Comic Sans MS&quot;">select</span><span
            style="font-family:&quot;Microsoft YaHei UI&quot;">标签的</span><span
            style="font-family:&quot;Comic Sans MS&quot;">id</span><span
            style="font-family:&quot;Microsoft YaHei UI&quot;">属性为</span><span
            style="font-family:&quot;Comic Sans MS&quot;">get</span><span
            style="font-family:&quot;Comic Sans MS&quot;">User</span><span
            style="font-family:&quot;Microsoft YaHei UI&quot;">，</span><span
            style="font-family:&quot;Comic Sans MS&quot;">id</span><span
            style="font-family:&quot;Microsoft YaHei UI&quot;">属性值必须是唯一的，不能够重复 </span></span></p>
<ul style="list-style-type: disc; margin-left: 40px;">
    <li><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">传入参数类型</span></span>
    </li>
</ul>
<p style="margin-left: 120px;"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Microsoft YaHei UI&quot;">使用</span><span
            style="font-family:&quot;Comic Sans MS&quot;">parameterType</span><span
            style="font-family:&quot;Microsoft YaHei UI&quot;">属性指明查询时使用的参数类型，</span></span></p>
<ul style="list-style-type: disc; margin-left: 40px;">
    <li><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">返回参数类型</span></span>
    </li>
</ul>
<p style="margin-left: 120px;"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">resultType</span><span
            style="font-family:&quot;Microsoft YaHei UI&quot;">属性指明查询返回的结果集类型，</span><span
            style="font-family:&quot;Comic Sans MS&quot;">resultType="</span><span
            style="font-family:&quot;Comic Sans MS&quot;">Users</span><span
            style="font-family:&quot;Comic Sans MS&quot;">"</span><span
            style="font-family:&quot;Microsoft YaHei UI&quot;">就表示将查询结果封装成一个</span><span
            style="font-family:&quot;Comic Sans MS&quot;">Users</span><span
            style="font-family:&quot;Microsoft YaHei UI&quot;">类的对象返回，</span><span
            style="font-family:&quot;Comic Sans MS&quot;">Users</span><span
            style="font-family:&quot;Microsoft YaHei UI&quot;">类就是</span><span
            style="font-family:&quot;Comic Sans MS&quot;">user</span><span
            style="font-family:&quot;Microsoft YaHei UI&quot;">表所对应的实体类</span></span></p>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                style="color:#70ad47"><strong>示例</strong></span></span></span></p>
<ul style="list-style-type:disc">
    <li><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">user</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">Mapper.xml</span></span></li>
</ul>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#a5a5a5">&lt;?xml version="1.0" encoding="UTF-8" ?&gt;<br>&lt;!DOCTYPE mapper PUBLIC
                "-//mybatis.org//DTD Mapper 3.0//EN" "<a data-cke-saved-href="http://-"
                    href="http://-">http://mybatis.org/dtd/mybatis-3-mapper.dtd</a>"&gt;</span></span></span></p>
<p style="margin-left: 80px;"><br><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:#7f7f7f">&lt;mapper
                namespace="com.</span><span style="color:#7f7f7f">mybatis</span><span
                style="color:#7f7f7f">.</span><span style="color:#7f7f7f">dao</span><span
                style="color:#7f7f7f">.</span><span style="color:#7f7f7f">Users</span><span
                style="color:#7f7f7f">Mapper"&gt;</span></span></span></p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:green">&nbsp;</span></span></span></p>
<p style="margin-left: 120px;"><span style="font-size:12.0pt"><span style="color:green"><span
                style="font-family:&quot;Comic Sans MS&quot;">&lt;!-- </span><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">根据</span><span
                style="font-family:&quot;Comic Sans MS&quot;">id</span><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">查询得到一个</span><span
                style="font-family:&quot;Comic Sans MS&quot;">Users</span><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">对象</span><span
                style="font-family:&quot;Comic Sans MS&quot;"> --&gt;</span></span></span></p>
<p style="margin-left: 120px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:blue">&lt;select </span><span style="color:red">id</span><span
                style="color:blue">=</span><span style="color:#a31515">"get</span><span
                style="color:#a31515">UserListById</span><span style="color:#a31515">" </span><span
                style="color:red">resultType</span><span style="color:blue">=</span><span
                style="color:#a31515">"</span><span style="color:#a31515">Users</span><span
                style="color:#a31515">"</span> <span style="color:red">parameterType</span><span
                style="color:blue">=</span><span style="color:#a31515">"</span>Integer<span
                style="color:#a31515">"</span><span style="color:blue">&gt;</span></span></span></p>
<p style="margin-left: 160px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">select
            * from user</span></span></p>
<p style="margin-left: 160px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">where
            id=#{id}</span></span></p>
<p style="margin-left: 120px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:blue">&lt;/select&gt;</span></span></span></p>
<p style="margin-left: 120px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:blue">…</span></span></span></p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#7f7f7f">&lt;/mapper&gt;</span></span></span></p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:blue">&nbsp;</span></span></span></p>