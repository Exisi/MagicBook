---
categories:
  - MyBatis
tags:
  - MyBatisUtils
date:
  - 2023-3-27 7:16:01
---

<body lang=zh-CN style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>
<!--StartFragment-->

<div style='direction:ltr;border-width:100%'>

<div style='direction:ltr;margin-top:0in;margin-left:0in;width:8.5125in'>

<div style='direction:ltr;margin-top:0in;margin-left:0in;width:8.5125in'>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>在</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> Mybatis </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>中进行查询操作的时候，查询单个对象、查询列表信息等的时候，我们需要每次都重复写创建</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> SqlSessionFactory</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>、</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>SqlSession </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>等相关代码</span></li>
</ul>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<p style='margin-left:.375in;font-size:12.0pt;color:#70AD47'><span
style='font-family:"Comic Sans MS"'>// </span><span style='font-family:"Microsoft YaHei UI"'>根据主键</span><span
style='font-family:"Comic Sans MS"'> id </span><span style='font-family:"Microsoft YaHei UI"'>查询单个用户</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#FFC000'>@Test</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>void testGet() {</p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#00B0F0'>InputStream in =
Resources.getResourceAsStream(&quot;mybatis-config.xml&quot;);</p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#00B0F0'>SqlSessionFactory sqlSessionFactory = new
SqlSessionFactoryBuilder().build(in);</p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#00B0F0'>SqlSession sqlSession = sqlSessionFactory.openSession();</p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'>User user =
sqlSession.selectOne(&quot;com.mxz.mybatis.mapper.UserMapper.get&quot;, 1L);</p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#00B0F0'>sqlSession.close();</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>}</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<p style='margin-left:.375in;font-size:12.0pt;color:#70AD47'><span
style='font-family:"Comic Sans MS"'>// </span><span style='font-family:"Microsoft YaHei UI"'>查询所有用户</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#FFC000'>@Test</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>void testListAll() {</p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#00B0F0'>InputStream in =
Resources.getResourceAsStream(&quot;mybatis-config.xml&quot;);</p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#00B0F0'>SqlSessionFactory sqlSessionFactory = new
SqlSessionFactoryBuilder().build(in);</p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#00B0F0'>SqlSession sqlSession = sqlSessionFactory.openSession();</p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'>List&lt;User&gt; userList =
sqlSession.selectList(&quot;com.mxz.mybatis.mapper.UserMapper.ListAll&quot;);</p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#00B0F0'>sqlSession.close();</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>}</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<p style='margin-left:.375in;font-size:12.0pt'><span
style='font-family:"Microsoft YaHei UI"'>这样一来，如果后面有多个操作的话，代码就显得很冗余，所以我们需要提取共同的代码，创建</span><span
style='font-family:"Comic Sans MS"'> MybatisUtil </span><span style='font-family:
"Microsoft YaHei UI"'>类，把冗余的代码进行封装</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<p style='margin-left:.375in;font-family:"Microsoft YaHei UI";
font-size:12.0pt'>这里边共同的代码主要是</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>加载构造器配置数据库交互文件（</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>SqlSessionFactoryBuilder</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>）</span></li>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>创建构造器容器 （</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>SqlSessionFactory</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>） </span></li>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>数据库连接和操作的交互对象（</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>SqlSession</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>）</span></li>
</ul>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<p style='margin-left:.75in'><img
src="data:image/png;base64,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"
width=313 height=206 alt=SqlSessionFactory的生成></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'>SqlSessionFactoryBuilder</p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<p style='margin-left:1.125in;font-size:12.0pt'><span
style='font-family:"Microsoft YaHei UI"'>这个类可以被实例化、使用和丢弃，一旦创建了</span><span
style='font-family:"Comic Sans MS"'> SqlSessionFactory</span><span
style='font-family:"Microsoft YaHei UI"'>，就不再需要它了。</span></p>

<p style='margin-left:1.125in;font-size:12.0pt'><span
style='font-family:"Microsoft YaHei UI"'>因此</span><span style='font-family:
"Comic Sans MS"'> SqlSessionFactoryBuilder </span><span style='font-family:
"Microsoft YaHei UI"'>的作用域是局部方法中</span></p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'>SqlSessionFactory</p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>SqlSessionFactory </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>一旦被创建就应该在应用的运行期间一直存在，没有任何理由丢弃它或重新创建另一个实例，而使用（</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>private static</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>）共享</span></li>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>使用</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> SqlSessionFactory </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>的最佳实践是在应用运行期间不要重复创建多次，因此使用单例模式或者静态单例模式控制只创建一次</span></li>
</ul>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'>SqlSession</p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>每个线程都应该有它自己的</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> SqlSession </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>实例。</span></li>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>SqlSession
     </span><span style='font-family:"Microsoft YaHei UI";font-size:12.0pt'
     lang=zh-CN>的实例不是线程安全的，因此是不能被（</span><span style='font-family:"Comic Sans MS";
     font-size:12.0pt' lang=en-US>public/private stastic</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>）共享的，所以它的作用域是每个请求或每个方法的作用域中。</span></li>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>绝对不能将</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> SqlSession </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>实例的引用放在一个类的静态域中共享</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>SqlSession</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>连接，甚至一个类的实例变量也不行。</span></li>
</ul>

<p style='margin-left:.375in;font-family:"Microsoft YaHei";
font-size:12.0pt'><span style='font-weight:bold'>注</span></p>

<p style='margin-left:.75in;font-size:12.0pt'><span
style='font-family:"Microsoft YaHei UI"'>所以，要记住的是，</span><span
style='font-family:"Comic Sans MS"'>SqlSessionFactory </span><span
style='font-family:"Microsoft YaHei UI"'>是线程安全的，和数据库连接池</span><span
style='font-family:"Comic Sans MS"'> dataSource </span><span style='font-family:
"Microsoft YaHei UI"'>一样，整个应用中有一份就够了</span></p>

<p style='font-family:"Comic Sans MS";font-size:12.0pt'>&nbsp;</p>

<p style='font-family:"Comic Sans MS";font-size:13.5pt' lang=en-US>&nbsp;</p>

<p style='font-family:"Comic Sans MS";font-size:13.5pt' lang=en-US>&nbsp;</p>

<p style='font-size:13.5pt'><span style='font-weight:bold;
font-family:"Comic Sans MS"' lang=en-US>MybatisUtils </span><span
style='font-weight:bold;font-family:"Microsoft YaHei UI"' lang=zh-CN>的封装</span></p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>在</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> MybatisUtils </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>中，定义了一个静态代码块用于获取</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> SqlSession </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>对象。基本的</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> MybatisUtils </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>应该包含</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>SqlSession </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>的获取创建和关闭</span></li>
</ul>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt;
color:#70AD47'><span style='font-weight:bold'>示例</span></p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle;color:#ED7D31'><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>MyBatisUtil</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US>s.java</span></li>
</ul>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#ED7D31' lang=en-US>&nbsp;</p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'><span lang=zh-CN>public class MyBatisUtil</span><span lang=en-US>s</span><span
lang=zh-CN> {</span></p>

<p style='margin-left:1.125in;font-family:"Comic Sans MS";
font-size:12.0pt'>private static SqlSessionFactory factory;</p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<p style='margin-left:1.125in;font-size:12.0pt'><span
style='font-family:"Comic Sans MS"'>static {</span><span style='font-family:
"Comic Sans MS";color:#70AD47'>//</span><span style='font-family:SimSun;
color:#70AD47'>静态代码下，</span><span style='font-family:"Comic Sans MS";
color:#70AD47'>factory</span><span style='font-family:SimSun;color:#70AD47'>只创建一次</span></p>

<p style='margin-left:1.5in;font-family:"Comic Sans MS";font-size:
12.0pt'>System.out.print(<span style='color:#70AD47'>&quot;static
factory=============&quot;</span>);</p>

<p style='margin-left:1.5in;font-family:"Comic Sans MS";font-size:
12.0pt'>try {</p>

<p style='margin-left:1.875in;font-size:12.0pt;color:#70AD47'><span
style='font-family:"Comic Sans MS"'>// </span><span style='font-family:"Microsoft YaHei UI"'>从</span><span
style='font-family:"Comic Sans MS"'>classpath </span><span style='font-family:
"Microsoft YaHei UI"'>路径去加载</span><span style='font-family:"Comic Sans MS"'>mybatis
</span><span style='font-family:"Microsoft YaHei UI"'>全局配置文件 </span></p>

<p style='margin-left:1.875in;font-family:"Comic Sans MS";
font-size:12.0pt'>InputStream is=
Resources.getResourceAsStream(&quot;mybatis-config.xml&quot;);</p>

<p style='margin-left:1.875in;font-family:"Comic Sans MS";
font-size:12.0pt'>factory=new SqlSessionFactoryBuilder().build(is);</p>

<p style='margin-left:1.5in;font-family:"Comic Sans MS";font-size:
12.0pt'>}catch(IOException e){</p>

<p style='margin-left:1.875in;font-family:"Comic Sans MS";
font-size:12.0pt'>e.printStackTrace();</p>

<p style='margin-left:1.5in;font-family:"Comic Sans MS";font-size:
12.0pt'>}</p>

<p style='margin-left:1.125in;font-family:"Comic Sans MS";
font-size:12.0pt'>}</p>

<p style='margin-left:1.125in;font-family:"Comic Sans MS";
font-size:12.0pt'>&nbsp;</p>

<p style='margin-left:1.125in;font-family:"Comic Sans MS";
font-size:12.0pt'>public static SqlSession createSqlSession() {</p>

<p style='margin-left:1.5in;font-size:12.0pt'><span
style='font-family:"Comic Sans MS"'>return factory.openSession(false);</span><span
style='font-family:"Comic Sans MS";color:#70AD47'>//true</span><span
style='font-family:SimSun;color:#70AD47'>提交事务</span></p>

<p style='margin-left:1.125in;font-family:"Comic Sans MS";
font-size:12.0pt'>}</p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<p style='margin-left:1.125in;font-family:"Comic Sans MS";
font-size:12.0pt'>public static void closeSqlSession(SqlSession sqlSession) {</p>

<p style='margin-left:1.5in;font-family:"Comic Sans MS";font-size:
12.0pt'>sqlSession.close();</p>

<p style='margin-left:1.125in;font-family:"Comic Sans MS";
font-size:12.0pt'>}</p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'>}</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
13.5pt' lang=en-US>&nbsp;</p>

<p style='font-family:"Comic Sans MS";font-size:13.5pt' lang=en-US>&nbsp;</p>

<p style='font-family:"Comic Sans MS";font-size:12.0pt'>&nbsp;</p>

<p style='font-size:13.5pt'><span style='font-weight:bold;
font-family:"Comic Sans MS"' lang=en-US>MybatisUtils </span><span
style='font-weight:bold;font-family:"Microsoft YaHei UI"' lang=zh-CN>的使用</span></p>

<p style='margin-left:.375in;font-size:12.0pt'><span
style='font-family:"Comic Sans MS"'>SqlSession </span><span style='font-family:
"Microsoft YaHei UI"'>和数据库连接对象</span><span style='font-family:"Comic Sans MS"'>
Connection </span><span style='font-family:"Microsoft YaHei UI"'>是一样的，是线程不安全的，每次都要创建新的连接，用完了都要去关闭它，这个关闭操作是很重要的，你应该把这个关闭操作放到</span><span
style='font-family:"Comic Sans MS"'> finally </span><span style='font-family:
"Microsoft YaHei UI"'>块中以确保每次都能执行关闭</span></p>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt;
color:#70AD47'><span style='font-weight:bold'>示例</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>public void testGetUserList() {</p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#E84C22'>SqlSession sqlSession=null;</p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'>List&lt;Users&gt; userList =new ArrayList&lt;Users&gt;();</p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'>try{</p>

<p style='margin-left:1.125in;font-size:12.0pt;color:#70AD47'><span
style='font-family:"Comic Sans MS"' lang=en-US>//</span><span style='font-family:
"Microsoft YaHei"' lang=zh-CN>调用</span><span style='font-family:"Microsoft YaHei UI"'
lang=zh-CN>封装为</span><span style='font-family:"Comic Sans MS"' lang=zh-CN>MyBatisUtil</span><span
style='font-family:"Microsoft YaHei UI"' lang=zh-CN>的数据库连接方法</span><span
style='font-family:"Comic Sans MS"' lang=en-US>.java</span></p>

<p style='margin-left:1.125in;font-family:"Comic Sans MS";
font-size:12.0pt;color:#E84C22'><span lang=zh-CN>sqlSession=MyBatisUtil</span><span
lang=en-US>s</span><span lang=zh-CN>.createSqlSession();</span></p>

<p style='margin-left:1.125in;font-family:"Comic Sans MS";
font-size:12.0pt'>&nbsp;</p>

<p style='margin-left:1.125in;font-size:12.0pt;color:#70AD47'><span
style='font-family:"Comic Sans MS"'>//</span><span style='font-family:"Microsoft YaHei UI"'>调用</span><span
style='font-family:"Comic Sans MS"'>getMapper(Mapper.class)</span><span
style='font-family:"Microsoft YaHei UI"'>执行</span><span style='font-family:
"Comic Sans MS"'>dao</span><span style='font-family:"Microsoft YaHei UI"'>接口方法来实现对数据库的查询操作</span></p>

<p style='margin-left:1.125in;font-family:"Comic Sans MS";
font-size:12.0pt'><span lang=zh-CN>count=</span><span style='color:#E84C22'
lang=zh-CN>sqlsession</span><span style='color:#00B0F0' lang=zh-CN>.getMapper(UsersMapper.class).count();</span><span
style='color:#00B0F0' lang=en-US> </span></p>

<p style='margin-left:1.125in;font-size:12.0pt;color:#70AD47'><span
style='font-family:"Comic Sans MS"' lang=en-US><span
style='mso-spacerun:yes'> </span>//</span><span style='font-family:"Microsoft YaHei"'
lang=zh-CN>获取实体类数据</span></p>

<p style='margin-left:1.125in;font-family:"Comic Sans MS";
font-size:12.0pt'>userList=<span style='color:#E84C22'>sqlSession</span>.<span
style='color:#00B0F0'>getMapper(UsersMapper.class).getUserList();</span></p>

<p style='margin-left:1.125in;font-family:"Comic Sans MS";
font-size:12.0pt'>sqlSession.commit();</p>

<p style='margin-left:1.125in;font-family:"Comic Sans MS";
font-size:12.0pt'>&nbsp;</p>

<p style='margin-left:1.125in;font-family:"Comic Sans MS";
font-size:12.0pt'>logger.debug(&quot;UserMappingTest count---&gt;&quot;+count);</p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'>}catch(Exception e){</p>

<p style='margin-left:1.5in;font-family:"Comic Sans MS";font-size:
12.0pt'>e.printStackTrace();</p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'>}finally{</p>

<p style='margin-left:1.125in;font-family:"Comic Sans MS";
font-size:12.0pt;color:#E84C22'>MyBatisUtil.closeSqlSession(sqlSession);</p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'>}</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>}</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt' lang=en-US>&nbsp;</p>

<p style='font-family:"Comic Sans MS";font-size:12.0pt'>&nbsp;</p>

<p><cite style='font-size:12.0pt;color:#595959'><span
style='font-family:"Microsoft YaHei UI"'>来自</span><span style='font-family:
"Comic Sans MS"'> &lt;</span><a href="https://zhuanlan.zhihu.com/p/82849890"><span
style='font-family:"Comic Sans MS"'>https://zhuanlan.zhihu.com/p/82849890</span></a><span
style='font-family:"Comic Sans MS"'>&gt; </span></cite></p>

</div>

</div>

</div>

<!--EndFragment-->
</body>
