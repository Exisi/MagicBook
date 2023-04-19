---
categories:
  - MyBatis
date:
  - 2022-11-27 7:47:57
tags:
  - ［@Flush］
---

<body lang=zh-CN style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>
<!--StartFragment-->

<div style='direction:ltr;border-width:100%'>

<div style='direction:ltr;margin-top:0in;margin-left:0in;width:8.7618in'>

<div style='direction:ltr;margin-top:0in;margin-left:0in;width:8.7618in'>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Comic Sans MS";font-size:12.0pt;color:#FFC000'
     lang=zh-CN>@Flush</span><span style='font-family:"Comic Sans MS";
     font-size:12.0pt;color:#FFC000' lang=en-US> </span><span style='font-family:
     "Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>用于</span><span
     style='font-family:"Microsoft YaHei UI";font-size:11.5pt' lang=zh-CN>调用</span><span
     style='font-family:"Comic Sans MS";font-size:11.5pt' lang=zh-CN>
     SqlSession</span><span style='font-family:"Comic Sans MS";font-size:11.5pt'
     lang=en-US>.</span><span style='font-family:"Comic Sans MS";font-size:
     11.5pt' lang=zh-CN>flushStatements()</span><span style='font-family:"Comic Sans MS";
     font-size:11.5pt' lang=en-US> </span><span style='font-family:"Microsoft YaHei UI";
     font-size:11.5pt' lang=zh-CN>方法，标记后的方法会作用于批量更新</span></li>
</ul>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt;
color:#70AD47'><span style='font-weight:bold'>示例</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span lang=zh-CN>public</span><span lang=en-US> </span><span
lang=zh-CN>interface </span><span lang=en-US>User</span><span lang=zh-CN>Mapper(</span><span
lang=en-US>){</span></p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#FFC000'>@Flush</p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'>List&lt;BatchResult&gt; flushBatchedStatements();</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt' lang=en-US>}</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt' lang=en-US>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>上述方法中返回值为</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>List&lt;BatchResult&gt;</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>，表示批量操作执行后每个操作所影响的行数。如果没有任何操作被执行，则返回一个空列表</span></li>
</ul>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt'><span
style='font-weight:bold'>注</span></p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>在使用</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt;color:#FFC000'
     lang=zh-CN>@Flush</span><span style='font-family:"Comic Sans MS";
     font-size:12.0pt' lang=en-US> </span><span style='font-family:"Microsoft YaHei UI";
     font-size:12.0pt' lang=zh-CN>之前，需要将执行器的类型设置为</span><span style='font-family:
     "Comic Sans MS";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>BatchExecutor</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>。可以通过全局设置和获取</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>Session</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>的时候局部设置</span></li>
</ul>

<p style='font-family:"Comic Sans MS";font-size:12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-left:37.5px;margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>全局开启：</span></li>
</ul>

<p style='margin-left:1.125in;font-family:"Comic Sans MS";
font-size:12.0pt'>&lt;configuration&gt;</p>

<p style='margin-left:1.125in;font-family:"Comic Sans MS";
font-size:12.0pt'><span style='mso-spacerun:yes'>    </span>&lt;settings&gt;</p>

<p style='margin-left:1.125in;font-family:"Comic Sans MS";
font-size:12.0pt'><span style='mso-spacerun:yes'>        </span>&lt;setting
name=&quot;defaultExecutorType&quot; value=&quot;BATCH&quot; /&gt;</p>

<p style='margin-left:1.125in;font-family:"Comic Sans MS";
font-size:12.0pt'><span style='mso-spacerun:yes'>    </span>&lt;/settings&gt;</p>

<p style='margin-left:1.125in;font-family:"Comic Sans MS";
font-size:12.0pt'><span lang=zh-CN>&lt;</span><span lang=en-US>/</span><span
lang=zh-CN>configuration&gt;</span></p>

<p style='margin-left:1.125in;font-family:"Comic Sans MS";
font-size:12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-left:37.5px;margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>获取</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US>
     SqlSeesion </span><span style='font-family:"Microsoft YaHei UI";
     font-size:12.0pt' lang=zh-CN>开启：</span></li>
</ul>

<p style='margin-left:.375in;font-family:"Microsoft YaHei UI";
font-size:12.0pt;color:#70AD47'><span style='font-weight:bold'>示例</span></p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'>InputStream is = Resources.getResourceAsStream(<span style='color:#B43512'>&quot;mybatis-config.xml&quot;</span>);</p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#8064A2'>sqlSessionFactory</span> = new
SqlSessionFactoryBuilder().build(is);</p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'>SqlSession session = <span style='color:#8064A2'>sqlSessionFactory</span>.openSession(ExecutorType.<span
style='color:#8064A2'>BATCH</span>);</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>在</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US> Spring </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>中可以使用全局设置的方式启用，便于接管</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US> Mybatis </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>的事务处理</span></li>
</ul>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'>mybatis:</p>

<p style='margin-left:1.125in;font-family:"Comic Sans MS";
font-size:12.0pt'>executor-type: batch</p>

<p style='font-family:"Comic Sans MS";font-size:12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle;color:#FFC000'><span
     style='font-family:"Comic Sans MS";font-size:11.5pt;color:#FFC000'
     lang=zh-CN>@Flush</span><span style='font-family:"Comic Sans MS";
     font-size:11.5pt;color:#FFC000' lang=en-US> </span><span style='font-family:
     "Microsoft YaHei UI";font-size:11.5pt;color:black' lang=zh-CN>标注的方法不能有对应的</span><span
     style='font-family:"Comic Sans MS";font-size:11.5pt;color:black'
     lang=zh-CN>xml</span><span style='font-family:"Microsoft YaHei UI";
     font-size:11.5pt;color:black' lang=zh-CN>文件。且返回值必须为</span><span
     style='font-family:"Comic Sans MS";font-size:11.5pt;color:black'
     lang=en-US> </span><span style='font-family:"Comic Sans MS";font-size:
     11.5pt;color:black' lang=zh-CN>List</span></li>
</ul>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<p style='font-family:"Comic Sans MS";font-size:12.0pt'>&nbsp;</p>

<p><cite style='font-size:12.0pt'><span style='font-family:"Microsoft YaHei UI"'>来自</span><span
style='font-family:"Comic Sans MS"'> &lt;</span><a
href="https://juejin.cn/post/7006955921834246157"><span style='font-family:
"Comic Sans MS"'>https://juejin.cn/post/7006955921834246157</span></a><span
style='font-family:"Comic Sans MS"'>&gt; </span></cite></p>

</div>

</div>

</div>

<!--EndFragment-->
</body>
