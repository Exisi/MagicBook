---
categories:
- MyBatis
tags:
- ‹delete›
date:
- 2022-11-27 7:26:01
---

<ul style="list-style-type:disc">
    <li><span style="font-size:12.0pt"><span
                style="font-family:&quot;Comic Sans MS&quot;">UsersMapper</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">.java</span></span></li>
</ul>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">public
            interface UsersMapper {</span></span></p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#00b0f0">&nbsp;</span></span></span></p>
<p style="margin-left: 120px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#00b0f0">public Integer deleteUserById(Integer id);</span></span></span></p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#00b0f0">&nbsp;</span></span></span></p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">}</span></span></p>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#ed7d31">&nbsp;</span></span></span></p>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
<ul style="list-style-type:disc">
    <li><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">Users</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">Mapper.xml</span></span></li>
</ul>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#a5a5a5">&lt;?xml version="1.0" encoding="UTF-8" ?&gt;<br>&lt;!DOCTYPE mapper PUBLIC
                "-//mybatis.org//DTD Mapper 3.0//EN" "<a data-cke-saved-href="http://-"
                    href="http://-">http://mybatis.org/dtd/mybatis-3-mapper.dtd</a>"&gt;</span></span></span></p>
<p style="margin-left: 80px;"><br><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:#a5a5a5">&lt;mapper
                namespace="com.mybatis.dao.UsersMapper"&gt;</span></span></span></p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#2151ff">&nbsp;</span></span></span></p>
<p style="margin-left: 120px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:blue">&lt;</span><span style="color:blue">delete</span> <span
                style="color:red">id</span><span style="color:blue">=</span><span style="color:#a31515">"</span><span
                style="color:#a31515">deleteUserById</span><span style="color:#a31515">" </span><span
                style="color:red">parameterType</span><span style="color:blue">=</span><span
                style="color:#a31515">"</span>Integer<span style="color:#a31515">"</span><span
                style="color:blue">&gt;</span></span></span></p>
<p style="margin-left: 160px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">delete
            from user</span></span></p>
<p style="margin-left: 160px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">where
            id=#{id}</span></span></p>
<p style="margin-left: 120px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:blue">&lt;/delete&gt;</span></span></span></p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:blue">&nbsp;</span></span></span></p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#a5a5a5">&lt;/mapper&gt;</span></span></span></p>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:blue">&nbsp;</span></span></span></p>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#ed7d31">&nbsp;</span></span></span></p>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#ed7d31">&nbsp;</span></span></span></p>
<ul style="list-style-type:disc">
    <li><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">Test.java</span></span></li>
</ul>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#ed7d31">&nbsp;</span></span></span></p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">@Test</span></span></p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">public
            void deleteUser(Integer id) {</span></span></p>
<p style="margin-left: 120px;"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">SqlSession sqlSession=null;</span></span></p>
<p style="margin-left: 120px;"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">Integer count=0;</span></span></p>
<p style="margin-left: 120px;"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">try{</span></span></p>
<p style="margin-left: 160px;"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">sqlSession=MyBatisUtil.createSqlSession();</span></span></p>
<p style="margin-left: 160px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">int
            id=1;</span></span></p>
<p style="margin-left: 160px;"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">count=sqlSession.<span
                style="color:#00b0f0">getMapper(UsersMapper.class).</span><span style="color:#00b0f0">delete</span><span
                style="color:#00b0f0">(</span><span style="color:#00b0f0">id</span><span
                style="color:#00b0f0">);</span></span></span></p>
<p style="margin-left: 160px;"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">sqlSession.commit();</span></span></p>
<p style="margin-left: 160px;"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
<p style="margin-left: 160px;"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">System.out.println("count:"+count);</span></span></p>
<p style="margin-left: 120px;"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">}catch(Exception e){</span></span></p>
<p style="margin-left: 160px;"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">e.printStackTrace();</span></span></p>
<p style="margin-left: 120px;"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">}finally{</span></span></p>
<p style="margin-left: 160px;"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">MyBatisUtil.closeSqlSession(sqlSession);</span></span></p>
<p style="margin-left: 120px;"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">}</span></span></p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">}</span></span></p>