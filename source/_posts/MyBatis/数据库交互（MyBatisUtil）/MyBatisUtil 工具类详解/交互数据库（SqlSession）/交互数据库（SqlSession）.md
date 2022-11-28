---
categories:
- MyBatis
tags:
- SqlSession
date:
- 2022-11-27 7:17:01
---

<p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">public void testGetUserList()
            {</span></span></p>
<p style="margin-left: 40px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#e84c22">SqlSession sqlSession=null;</span></span></span></p>
<p style="margin-left: 40px;"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">List&lt;Users&gt; userList =new
            ArrayList&lt;Users&gt;();</span></span></p>
<p style="margin-left: 40px;"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">try{</span></span></p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span style="color:#70ad47"><span
                style="font-family:&quot;Comic Sans MS&quot;">//</span><span
                style="font-family:&quot;Microsoft YaHei&quot;">调用</span><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">封装为</span><span
                style="font-family:&quot;Comic Sans MS&quot;">MyBatisUtil</span><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">的数据库连接方法</span><span
                style="font-family:&quot;Comic Sans MS&quot;">.java</span></span></span></p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#e84c22">sqlSession=MyBatisUtil.createSqlSession();</span></span></span></p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span style="color:#a5a5a5"><span
                style="font-family:&quot;Comic Sans MS&quot;">//</span><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">第一种方式：调用</span><span
                style="font-family:&quot;Comic Sans MS&quot;">selectList</span><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">方法执行查询操作</span></span></span></p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#a5a5a5">//userList=</span><span style="color:#833c0b">sqlSession</span><span
                style="color:#f1937a">.</span><span
                style="color:#a5a5a5">selectList("cn.smbms.dao.user.UsersMapper.getUserList");</span></span></span></p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span style="color:#70ad47"><span
                style="font-family:&quot;Comic Sans MS&quot;">//</span><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">第二种方法： 调用</span><span
                style="font-family:&quot;Comic Sans MS&quot;">getMapper(Mapper.class)</span><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">执行</span><span
                style="font-family:&quot;Comic Sans MS&quot;">dao</span><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">接口方法来实现对数据库的查询操作</span></span></span></p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">count=<span style="color:#e84c22">sqlsession</span><span
                style="color:#00b0f0">.getMapper(UsersMapper.class).count();</span> </span></span></p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span style="color:#70ad47"><span
                style="font-family:&quot;Comic Sans MS&quot;">&nbsp;//</span><span
                style="font-family:&quot;Microsoft YaHei&quot;">获取实体类数据</span></span></span></p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">userList=<span style="color:#e84c22">sqlSession</span>.<span
                style="color:#00b0f0">getMapper(UsersMapper.class).getUserList();</span></span></span></p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">sqlSession.commit();</span></span></p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">logger.debug("UserMappingTest
            count---&gt;"+count);</span></span></p>
<p style="margin-left: 40px;"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">}catch(Exception e){</span></span></p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">e.printStackTrace();</span></span></p>
<p style="margin-left: 40px;"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">}finally{</span></span></p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#e84c22">MyBatisUtil.closeSqlSession(sqlSession);</span></span></span></p>
<p style="margin-left: 40px;"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">}</span></span></p>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">}</span></span></p>