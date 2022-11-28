---
categories:
- MyBatis
tags:
- MyBatisUtil
date:
- 2022-11-27 7:15:02
---

<span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
            style="color:#ed7d31"></span></span></span>
<ul>
    <li><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                    style="color:#ed7d31">&nbsp;MyBatisUtil.java</span></span></span></li>
</ul>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">package
            com.mybatis.utils;</span></span></p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">import
            java.io.IOException;</span></span></p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">import
            java.io.InputStream;</span></span></p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">import
            org.apache.ibatis.io.Resources;</span></span></p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">import
            org.apache.ibatis.session.SqlSession;</span></span></p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">import
            org.apache.ibatis.session.SqlSessionFactory;</span></span></p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">import
            org.apache.ibatis.session.SqlSessionFactoryBuilder;</span></span></p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">import
            org.apache.log4j.lf5.util.Resource;</span></span></p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">public
            class MyBatisUtil {</span></span></p>
<p style="margin-left: 120px;"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">private static SqlSessionFactory factory;</span></span></p>
<p style="margin-left: 120px;"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
<p style="margin-left: 120px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">static
            {</span><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#70ad47">//</span></span><span style="font-family:SimSun"><span
                style="color:#70ad47">静态代码下，</span></span><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#70ad47">factory</span></span><span style="font-family:SimSun"><span
                style="color:#70ad47">只创建一次</span></span></span></p>
<p style="margin-left: 160px;"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">System.out.print(<span style="color:#70ad47">"static
                factory============="</span>);</span></span></p>
<p style="margin-left: 160px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">try
            {</span></span></p>
<p style="margin-left: 160px;"><span style="font-size:12.0pt"><span style="color:#70ad47"><span
                style="font-family:&quot;Comic Sans MS&quot;">// </span><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">从</span><span
                style="font-family:&quot;Comic Sans MS&quot;">classpath </span><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">路径去加载</span><span
                style="font-family:&quot;Comic Sans MS&quot;">mybatis </span><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">全局配置文件 </span></span></span></p>
<p style="margin-left: 200px;"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">InputStream is=
            Resources.getResourceAsStream("mybatis-config.xml");</span></span></p>
<p style="margin-left: 200px;"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">factory=new
            SqlSessionFactoryBuilder().build(is);</span></span></p>
<p style="margin-left: 160px;"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">}catch(IOException e){</span></span></p>
<p style="margin-left: 200px;"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">e.printStackTrace();</span></span></p>
<p style="margin-left: 160px;"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">}</span></span></p>
<p style="margin-left: 120px;"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">}</span></span></p>
<p style="margin-left: 120px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">public
            static SqlSession createSqlSession() {</span></span></p>
<p style="margin-left: 120px;"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
<p style="margin-left: 160px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">return
            factory.openSession(false);</span><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#70ad47">//true</span></span><span style="font-family:SimSun"><span
                style="color:#70ad47">提交事务</span></span></span></p>
<p style="margin-left: 120px;"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">}</span></span></p>
<p style="margin-left: 120px;"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
<p style="margin-left: 120px;"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">public
            static void closeSqlSession(SqlSession sqlSession) {</span></span></p>
<p style="margin-left: 120px;"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
<p style="margin-left: 160px;"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">sqlSession.close();</span></span></p>
<p style="margin-left: 160px;"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
<p style="margin-left: 120px;"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">}</span></span></p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">}</span></span></p><span style="font-size:12.0pt"><span
        style="font-family:&quot;Comic Sans MS&quot;"></span></span>