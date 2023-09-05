---
categories:
  - Spring
tags:
  - ContextLoaderListener
date:
  - 2022-6-28 13:01:21
---

<body lang=zh-CN style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>
<!--StartFragment-->

<div style='direction:ltr;border-width:100%'>

<div style='direction:ltr;margin-top:0in;margin-left:0in;width:7.9263in'>

<div style='direction:ltr;margin-top:0in;margin-left:0in;width:7.9263in'>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle;margin-top:0pt;
     margin-bottom:12pt;color:#24292E'><span style='font-family:"Microsoft YaHei UI";
     font-size:12.0pt' lang=zh-CN>为了解决</span><span style='font-family:"Comic Sans MS";
     font-size:12.0pt' lang=en-US>Servlet</span><span style='font-family:"Microsoft YaHei UI";
     font-size:12.0pt' lang=zh-CN>中创建容器次数过多和无法复用的问题，</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US>Spring</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>提供了使用容器监听器</span></li>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle;margin-top:0pt;
     margin-bottom:12pt;color:#24292E'><span style='font-family:"Comic Sans MS";
     font-size:12.0pt;color:#24292E'>ContextLoaderListener </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt;color:#24292E'>是一个监听器对象，
     </span><span style='font-family:"Microsoft YaHei UI";font-size:12.0pt;
     color:black'>继承自</span><span style='font-family:"Comic Sans MS";
     font-size:12.0pt;color:black'>ContextLoader</span><span style='font-family:
     "Microsoft YaHei UI";font-size:12.0pt;color:black'>，实现的是</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt;color:black'>ServletContextListener</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt;color:black'>接口</span></li>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle;margin-top:0pt;
     margin-bottom:12pt;color:#24292E'><span style='font-family:"Microsoft YaHei UI";
     font-size:12.0pt'>使用这个监听器作用：</span></li>
 <ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
  margin-bottom:0in'>
  <li style='margin-top:0;margin-bottom:0;vertical-align:middle;margin-top:
      0pt;margin-bottom:12pt;color:#24292E'><span style='font-family:"Microsoft YaHei UI";
      font-size:12.0pt'>一次创建容器对象</span></li>
  <li style='margin-top:0;margin-bottom:0;vertical-align:middle;margin-top:
      0pt;margin-bottom:12pt;color:#24292E'><span style='font-family:"Microsoft YaHei UI";
      font-size:12.0pt'>把容器对象放入到</span><span style='font-family:"Comic Sans MS";
      font-size:12.0pt'>ServletContext</span><span style='font-family:"Microsoft YaHei UI";
      font-size:12.0pt'>作用域</span></li>
 </ul>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle;color:#24292E'><span
     style='font-family:"Comic Sans MS";font-size:12.0pt;color:black'>ServletContextListener</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt;color:black'>是为了接收</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt;color:black'>ServletContext</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt;color:black'>生命周期变化事件定义的接口，而</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt;color:black'>ServletContext</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt;color:black'>是定义了一系列和</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt;color:black'>servlet</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt;color:black'>容器通讯方法的接口，</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt;color:#24292E'>spring</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt;color:#24292E'>的</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt;color:#24292E'>ContextLoaderListener</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt;color:#24292E'>继承了它，只要在</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt;color:#24292E'>web</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt;color:#24292E'>应用中注册了这个监听自然也就能够收到容器启动和销毁事件</span></li>
</ul>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#24292E'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>启动</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>Web</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>容器时，</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>ContextLoaderListener</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>读取在</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>contextConfigLocation</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>中定义的</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>xml</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>文件，自动装配</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>ApplicationContext</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>的配置信息，并产生</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>WebApplicationContext</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>对象，然后将这个对象放置在</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>ServletContext</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>的属性里</span></li>
</ul>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>这样我们只要得到</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>Servlet</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>就可以得到</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>WebApplicationContext</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>对象，并利用这个对象访问</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>spring</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>容器管理的</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>bean</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>。</span></li>
</ul>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>即通过配置为项目提供了</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>spring</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>支持，初始化了</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>Ioc</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>容器</span></li>
</ul>

<p style='font-family:"Comic Sans MS";font-size:12.0pt'>&nbsp;</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#24292E'>&nbsp;</p>

<p style='font-family:"Comic Sans MS";font-size:12.0pt'>&nbsp;</p>

<p style='margin-top:7pt;margin-bottom:7pt;font-family:"Microsoft YaHei UI";
font-size:13.5pt;color:#333333'><span style='font-weight:bold'>设置监听器</span></p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle;margin-top:7pt;
     margin-bottom:7pt;color:#333333'><span style='font-family:"Microsoft YaHei UI";
     font-size:12.0pt'>在</span><span style='font-family:"Comic Sans MS";
     font-size:12.0pt'>web.xml</span><span style='font-family:"Microsoft YaHei UI";
     font-size:12.0pt'>中加入配置。</span></li>
</ul>

<p style='margin-top:7pt;margin-bottom:7pt;font-family:"Microsoft YaHei UI";
font-size:12.0pt;color:#70AD47'><span style='font-weight:bold'>示例</span></p>

<p style='margin-left:.375in;margin-top:5pt;margin-bottom:5pt;font-size:12.0pt;
color:green'><span style='font-family:"Comic Sans MS"'>&lt;!--</span><span
style='font-family:"Microsoft YaHei UI"'>&nbsp;配置</span><span style='font-family:
"Comic Sans MS"'>spring</span><span style='font-family:"Microsoft YaHei UI"'>核心监听器&nbsp;</span><span
style='font-family:"Comic Sans MS"'>--&gt;</span></p>

<p style='margin-left:.375in;margin-top:5pt;margin-bottom:5pt;font-family:"Comic Sans MS";
font-size:12.0pt;color:blue'>&lt;listener&gt;</p>

<p style='margin-left:.375in;margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;&nbsp;</span><span
style='font-family:"Comic Sans MS";color:blue'>&lt;listener-class&gt;</span><span
style='font-family:"Comic Sans MS";color:black'>org.springframework.web.context.ContextLoaderListener</span><span
style='font-family:"Comic Sans MS";color:blue'>&lt;/listener-class&gt;</span></p>

<p style='margin-left:.375in;margin-top:5pt;margin-bottom:5pt;font-family:"Comic Sans MS";
font-size:12.0pt;color:blue'>&lt;/listener&gt;</p>

<p style='margin-left:.375in;margin-top:5pt;margin-bottom:5pt;font-size:12.0pt;
color:green'><span style='font-family:"Comic Sans MS"'>&lt;!--</span><span
style='font-family:"Microsoft YaHei UI"'>&nbsp;</span><span style='font-family:
"Comic Sans MS"'>contextConfigLocation</span><span style='font-family:"Microsoft YaHei UI"'>参数用来指定</span><span
style='font-family:"Comic Sans MS"'>Spring</span><span style='font-family:"Microsoft YaHei UI"'>的配置文件路径&nbsp;</span><span
style='font-family:"Comic Sans MS"'>--&gt;</span></p>

<p style='margin-left:.375in;margin-top:5pt;margin-bottom:5pt;font-family:"Comic Sans MS";
font-size:12.0pt;color:blue'>&lt;context-param&gt;</p>

<p style='margin-left:.375in;margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;&nbsp;</span><span
style='font-family:"Comic Sans MS";color:blue'>&lt;param-name&gt;</span><span
style='font-family:"Comic Sans MS";color:black'>contextConfigLocation</span><span
style='font-family:"Comic Sans MS";color:blue'>&lt;/param-name&gt;</span></p>

<p style='margin-left:.375in;margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
style='font-family:"Microsoft YaHei UI";color:black' lang=zh-CN>&nbsp;&nbsp;</span><span
style='font-family:"Comic Sans MS";color:blue' lang=zh-CN>&lt;param-value&gt;/</span><span
style='font-family:"Comic Sans MS";color:black' lang=en-US>resource</span><span
style='font-family:"Comic Sans MS";color:blue' lang=zh-CN>/</span><span
style='font-family:"Comic Sans MS";color:black' lang=zh-CN>applicationContext.xml</span><span
style='font-family:"Comic Sans MS";color:blue' lang=zh-CN>&lt;/param-value&gt;</span></p>

<p style='margin-left:.375in;margin-top:5pt;margin-bottom:5pt;font-family:"Comic Sans MS";
font-size:12.0pt;color:blue'>&lt;/context-param&gt;</p>

<p style='margin-top:5pt;margin-bottom:5pt;font-family:"Comic Sans MS";
font-size:12.0pt;color:blue'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle;margin-top:5pt;
     margin-bottom:5pt'><span style='font-family:"Microsoft YaHei UI";
     font-size:12.0pt'>获取监听器对象</span></li>
</ul>

<p style='margin-left:.75in;margin-top:5pt;margin-bottom:5pt;font-family:"Comic Sans MS";
font-size:12.0pt'>ApplicationContext context = WebApplicationContextUtils</p>

<p style='margin-left:.75in;margin-top:5pt;margin-bottom:5pt;font-family:"Comic Sans MS";
font-size:12.0pt'><span lang=en-US><span
style='mso-spacerun:yes'>                    </span></span><span lang=zh-CN>.getWebApplicationContext(servletContextEvent.getServletContext());</span></p>

<p style='font-family:"Comic Sans MS";font-size:12.0pt'>&nbsp;</p>

<p style='font-size:12.0pt'><span style='font-family:"Microsoft YaHei UI"'
lang=zh-CN>来自</span><span style='font-family:"Comic Sans MS"' lang=en-US>&lt; </span><a
href="https://www.cnblogs.com/xunyi/p/10363290.html"><span style='font-family:
"Comic Sans MS"' lang=zh-CN>https://www.cnblogs.com/xunyi/p/10363290.html</span></a><span
style='font-family:"Comic Sans MS"' lang=en-US>&gt;</span></p>

</div>

</div>

</div>

<!--EndFragment-->
</body>
