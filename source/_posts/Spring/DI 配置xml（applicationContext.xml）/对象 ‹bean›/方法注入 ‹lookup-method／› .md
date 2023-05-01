---
categories:
  - Spring
tags:
  - ‹lookup-method›
date:
  - 2022-11-28 7:44:38
---

<body lang=zh-CN style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>
<!--StartFragment-->

<div style='direction:ltr;border-width:100%'>

<div style='direction:ltr;margin-top:0in;margin-left:0in;width:8.909in'>

<div style='direction:ltr;margin-top:0in;margin-left:0in;width:8.909in'>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle;margin-top:7pt;
     margin-bottom:7pt'><span style='font-family:"Microsoft YaHei UI";
     font-size:12.0pt'>用于注入方法返回结果，也就是说能通过配置方式替换方法返回结果。</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>(</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>在方法或者抽象方法上使用</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>@Lookup</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>注解，将会根据该方法的返回值，自动在</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>BeanFactory</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>中调用</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>getBean()</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>来注入该</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>Bean)</span></li>
</ul>

<p style='margin-top:7pt;margin-bottom:7pt;font-family:"Microsoft YaHei UI";
font-size:12.0pt;color:#333333'><span style='font-weight:bold'>语法</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:blue'>&lt;</span><span style='color:maroon'>bean </span><span
style='color:red'>class</span><span style='color:blue'>=&quot;beanClass&quot;&gt;</span></p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:blue'>&lt;</span><span style='color:maroon'>lookup-method
</span><span style='color:red'>name</span><span style='color:blue'>=&quot;method&quot;</span><span
style='color:red'> bean</span><span style='color:blue'>=&quot;non-singleton-bean&quot;/&gt;</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:blue'>&lt;/</span><span style='color:maroon'>bean</span><span
style='color:blue'>&gt;</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:blue'>&nbsp;</p>

<div style='direction:ltr'>

<table border=1 cellpadding=0 cellspacing=0 valign=top style='direction:ltr;
 border-collapse:collapse;border-style:solid;border-color:#A3A3A3;border-width:
 1pt;margin-left:.3333in' title="" summary="">
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:black;vertical-align:top;width:.6673in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt;
  color:white'><span style='font-weight:bold'>参数</span></p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:black;vertical-align:top;width:5.5909in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt;
  color:white'><span style='font-weight:bold'>描述</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:.6673in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'
  lang=en-US>name</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:5.5909in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt'><span style='font-family:"Comic Sans MS"'
  lang=zh-CN>method</span><span style='font-family:"Microsoft YaHei UI"'
  lang=zh-CN>是</span><span style='font-family:"Comic Sans MS"' lang=zh-CN>beanClass</span><span
  style='font-family:"Microsoft YaHei UI"' lang=zh-CN>中的一个方法</span><span
  style='font-family:"Comic Sans MS"' lang=en-US>,</span><span
  style='font-family:"Microsoft YaHei UI"' lang=zh-CN>可以不是抽象方法</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:.6673in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'
  lang=en-US>bean</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:5.5909in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt'><span style='font-family:"Comic Sans MS"'>non-singleton-bean</span><span
  style='font-family:"Microsoft YaHei UI"'>指的是</span><span style='font-family:
  "Comic Sans MS"'>lookup-method</span><span style='font-family:"Microsoft YaHei UI"'>中</span><span
  style='font-family:"Comic Sans MS"'>bean</span><span style='font-family:"Microsoft YaHei UI"'>属性指向的必须是一个非单例模式的</span><span
  style='font-family:"Comic Sans MS"'>bean</span></p>
  <p style='font-size:11.5pt'><span style='font-family:"Microsoft YaHei UI"'>当然如果不是也不会报错，只是每次得到的都是相同引用的</span><span
  style='font-family:"Comic Sans MS"'>bean</span><span style='font-family:"Microsoft YaHei UI"'>（同一个实例），这样用</span><span
  style='font-family:"Comic Sans MS"'>lookup-method</span><span
  style='font-family:"Microsoft YaHei UI"'>就没有意义了</span></p>
  </td>
 </tr>
</table>

</div>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle;margin-top:7pt;
     margin-bottom:7pt;color:#333333'><span style='font-family:"Microsoft YaHei UI";
     font-size:12.0pt'>另外对于</span><span style='font-family:"Comic Sans MS";
     font-size:12.0pt'>method</span><span style='font-family:"Microsoft YaHei UI";
     font-size:12.0pt'>在代码中的签名有下面的标准：</span></li>
</ul>

<p style='margin-left:.375in;margin-top:7pt;margin-bottom:7pt;font-family:"Microsoft YaHei UI";
font-size:12.0pt;color:#333333'>&nbsp;</p>

<p style='margin-left:.75in;margin-top:7pt;margin-bottom:7pt;font-size:12.0pt'><span
style='font-family:"Comic Sans MS";color:gray'>&lt;public|protected&gt;</span><span
style='font-family:"Microsoft YaHei UI";color:#333333'>&nbsp;</span><span
style='font-family:"Comic Sans MS";color:#333333'>[</span><span
style='font-family:"Comic Sans MS";color:blue'>abstract</span><span
style='font-family:"Comic Sans MS";color:#333333'>]</span><span
style='font-family:"Microsoft YaHei UI";color:#333333'>&nbsp;</span><span
style='font-family:"Comic Sans MS";color:#993300'>&lt;return-type&gt;</span><span
style='font-family:"Microsoft YaHei UI";color:#333333'>&nbsp;</span><span
style='font-family:"Comic Sans MS";color:#7DA700'>theMethodName(</span><span
style='font-family:"Comic Sans MS";color:black'>no-arguments</span><span
style='font-family:"Comic Sans MS";color:#7DA700'>);</span></p>

<p style='margin-left:.75in;margin-top:7pt;margin-bottom:7pt;font-family:"Comic Sans MS";
font-size:12.0pt;color:#7DA700'>&nbsp;</p>

<div style='direction:ltr'>

<table border=1 cellpadding=0 cellspacing=0 valign=top style='direction:ltr;
 border-collapse:collapse;border-style:solid;border-color:#A3A3A3;border-width:
 1pt;margin-left:.7083in' title="" summary="">
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:black;vertical-align:top;width:1.6993in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt;
  color:white'><span style='font-weight:bold'>参数</span></p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:black;vertical-align:top;width:3.177in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt;
  color:white'><span style='font-weight:bold'>描述</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:white;vertical-align:top;width:1.6993in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>public|protected</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:white;vertical-align:top;width:3.177in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt'>方法必须是可以被子类重写和调用的</p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:1.6993in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>abstract</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:3.202in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt'><span style='font-family:"Microsoft YaHei UI"'>可选，如果是抽象方法，</span><span
  style='font-family:"Comic Sans MS"'>CGLIB</span><span style='font-family:
  "Microsoft YaHei UI"'>的动态代理类就会实现这个方法，如果不是抽象方法，就会覆盖这个方法</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:1.6993in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='margin-top:7pt;margin-bottom:7pt;font-family:"Comic Sans MS";
  font-size:11.5pt'>return-type</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:3.177in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt'><span style='font-family:"Comic Sans MS"'>non-singleton-bean</span><span
  style='font-family:"Microsoft YaHei UI"'>的类型，当然可以是它的父类或者接口。</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:1.6993in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='margin-top:7pt;margin-bottom:7pt;font-family:"Comic Sans MS";
  font-size:11.5pt'>no-arguments</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:3.177in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt'>不允许有参数。</p>
  </td>
 </tr>
</table>

</div>

<p style='margin-left:.75in;margin-top:7pt;margin-bottom:7pt;font-family:"Comic Sans MS";
font-size:12.0pt;color:#333333'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>假设一个单例模式的</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> bean A </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>需要引用另外一个非单例模式的</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> bean B</span></li>
</ul>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>为了在每次引用的时候都能拿到最新的</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> bean B</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>，可以让</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> bean A </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>通过实现</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>
     ApplicationContextWare </span><span style='font-family:"Microsoft YaHei UI";
     font-size:12.0pt'>来感知</span><span style='font-family:"Comic Sans MS";
     font-size:12.0pt'> applicationContext</span><span style='font-family:"Microsoft YaHei UI";
     font-size:12.0pt'>（即可以获得容器上下文），从而能在运行时通过</span><span style='font-family:
     "Comic Sans MS";font-size:12.0pt'> ApplicationContext.getBean(String
     beanName) </span><span style='font-family:"Microsoft YaHei UI";font-size:
     12.0pt'>的方法来获取最新的</span><span style='font-family:"Comic Sans MS";
     font-size:12.0pt'> bean B</span><span style='font-family:"Microsoft YaHei UI";
     font-size:12.0pt'>。</span></li>
</ul>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'><span
     style='mso-spacerun:yes'> </span></span><span style='font-family:"Microsoft YaHei UI";
     font-size:12.0pt'>但是如果用</span><span style='font-family:"Comic Sans MS";
     font-size:12.0pt'> ApplicationContextAware </span><span style='font-family:
     "Microsoft YaHei UI";font-size:12.0pt'>接口，就与</span><span style='font-family:
     "Comic Sans MS";font-size:12.0pt'> Spring </span><span style='font-family:
     "Microsoft YaHei UI";font-size:12.0pt'>代码耦合了，违背了控制反转使用</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> bean </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>完全由</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> Spring </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>容器管理</span></li>
</ul>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>所以</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> Spring </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>提供了方法注入的方式来实现以上的场景。方法注入方式主要是通过</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>
     &lt;lookup-method/&gt; </span><span style='font-family:"Microsoft YaHei UI";
     font-size:12.0pt'>标签。</span></li>
</ul>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>假设有一个果盘，果盘里放了一些水果，比如苹果，香蕉等，我们希望我们每次在果盘里拿到的都是最新鲜的水果。</span></li>
</ul>

<p style='margin-top:3pt;margin-bottom:0pt;font-family:"Microsoft YaHei UI";
font-size:12.0pt;color:#333333'><span style='font-weight:bold'>实例</span></p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle;color:#ED7D31'
     lang=en-US><span style='font-family:"Comic Sans MS";font-size:12.0pt'>Java</span></li>
</ul>

<p style='margin-left:.75in;font-size:12.0pt;color:green'><span
style='font-family:"Comic Sans MS"'>// </span><span style='font-family:"Microsoft YaHei UI"'>定义一个水果类</span></p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:blue' lang=zh-CN>public</span><span
style='color:blue' lang=en-US> </span><span style='color:blue' lang=zh-CN>class</span><span
style='color:black' lang=zh-CN> Fruit {<br>
<span style='mso-spacerun:yes'>    </span></span><span style='color:blue'
lang=zh-CN>public</span><span style='color:black' lang=zh-CN> Fruit()
{<br>
<span style='mso-spacerun:yes'>        </span>System.out.println(&quot;I got
Fruit&quot;);<br>
<span style='mso-spacerun:yes'>    </span>}<br>
}</span></p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt;color:black'>&nbsp;</p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt;color:black'>&nbsp;</p>

<p style='margin-left:.75in;font-size:12.0pt;color:green'><span
style='font-family:"Comic Sans MS"'>// </span><span style='font-family:"Microsoft YaHei UI"'>苹果</span></p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:blue' lang=zh-CN>public</span><span
style='color:blue' lang=en-US> </span><span style='color:blue' lang=zh-CN>class</span><span
style='color:blue' lang=en-US> </span><span lang=zh-CN>Apple </span><span
style='color:blue' lang=zh-CN>extends</span><span style='color:black'
lang=zh-CN> Fruit {<br>
<span style='mso-spacerun:yes'>    </span></span><span style='color:blue'
lang=zh-CN>public</span><span style='color:black' lang=zh-CN> Apple()
{<br>
<span style='mso-spacerun:yes'>        </span>System.out.println(&quot;I got a
fresh apple&quot;);<br>
<span style='mso-spacerun:yes'>    </span>}<br>
}</span></p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt;color:black'>&nbsp;</p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt;color:black'>&nbsp;</p>

<p style='margin-left:.75in;font-size:12.0pt;color:green'><span
style='font-family:"Comic Sans MS"'>// </span><span style='font-family:"Microsoft YaHei UI"'>香蕉</span></p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:blue' lang=zh-CN>public</span><span
style='color:blue' lang=en-US> </span><span style='color:blue' lang=zh-CN>class</span><span
style='color:blue' lang=en-US> </span><span lang=zh-CN>Bananer </span><span
style='color:blue' lang=zh-CN>extends</span><span style='color:black'
lang=zh-CN> Fruit {<br>
<span style='mso-spacerun:yes'>    </span></span><span style='color:blue'
lang=zh-CN>public</span><span style='color:black' lang=zh-CN> Bananer ()
{<br>
<span style='mso-spacerun:yes'>        </span>System.out.println(&quot;I got
a<span style='mso-spacerun:yes'>  </span>fresh bananer&quot;);<br>
<span style='mso-spacerun:yes'>    </span>}<br>
}</span></p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt;color:black'>&nbsp;</p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt;color:black'>&nbsp;</p>

<p style='margin-left:.75in;font-size:12.0pt;color:green'><span
style='font-family:"Comic Sans MS"'>// </span><span style='font-family:"Microsoft YaHei UI"'>水果盘，可以拿到水果</span></p>

<p style='margin-left:.75in;font-size:12.0pt'><span
style='font-family:"Comic Sans MS";color:blue' lang=zh-CN>public</span><span
style='font-family:"Comic Sans MS";color:blue' lang=en-US> </span><span
style='font-family:"Comic Sans MS";color:blue' lang=zh-CN>abstract</span><span
style='font-family:"Comic Sans MS";color:blue' lang=en-US> </span><span
style='font-family:"Comic Sans MS";color:blue' lang=zh-CN>class</span><span
style='font-family:"Comic Sans MS";color:black' lang=zh-CN>
FruitPlate{<br>
<span style='mso-spacerun:yes'>    </span></span><span style='font-family:"Comic Sans MS";
color:green' lang=zh-CN>// </span><span style='font-family:"Microsoft YaHei UI";
color:green' lang=zh-CN>抽象方法获取新鲜水果</span></p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:green' lang=en-US><span
style='mso-spacerun:yes'>     </span></span><span style='color:blue'
lang=zh-CN>protected</span><span style='color:blue' lang=en-US> </span><span
style='color:blue' lang=zh-CN>abstract</span><span style='color:black'
lang=zh-CN> Fruit getFruit();<br>
}</span></p>

<p style='margin-top:3pt;margin-bottom:0pt;font-family:"Comic Sans MS";
font-size:12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle;color:#ED7D31'
     lang=en-US><span style='font-family:"Comic Sans MS";font-size:12.0pt'>applicationCnotext.xml</span></li>
</ul>

<div style='direction:ltr'>

<table border=0 cellpadding=0 cellspacing=0 valign=top style='direction:ltr;
 border-collapse:collapse;border-style:solid;border-color:#A3A3A3;border-width:
 0pt;margin-left:.7083in' title="" summary="">
 <tr>
  <td style='border-width:0pt;background-color:white;vertical-align:top;
  width:6.7937in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='margin-top:5pt;margin-bottom:5pt;font-size:12.0pt;color:green'><span
  style='font-family:"Comic Sans MS"'>&lt;!--</span><span style='font-family:
  "Microsoft YaHei UI"'>&nbsp;这是</span><span style='font-family:"Comic Sans MS"'>2</span><span
  style='font-family:"Microsoft YaHei UI"'>个非单例模式的</span><span
  style='font-family:"Comic Sans MS"'>bean</span><span style='font-family:"Microsoft YaHei UI"'>&nbsp;</span><span
  style='font-family:"Comic Sans MS"'>--&gt;</span></p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-family:"Comic Sans MS";
  font-size:12.0pt;color:blue'><span lang=zh-CN>&lt;bean</span><span
  lang=en-US>s&gt;</span></p>
  <p style='margin-left:.375in;margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
  style='font-family:"Comic Sans MS"'>&lt;bean</span><span style='font-family:
  "Microsoft YaHei UI"'>&nbsp;</span><span style='font-family:"Comic Sans MS"'>id=&quot;apple&quot;</span><span
  style='font-family:"Microsoft YaHei UI"'>&nbsp;</span><span style='font-family:
  "Comic Sans MS"'>class=&quot;cn.com.willchen.test.di.Apple&quot;</span><span
  style='font-family:"Microsoft YaHei UI"'>&nbsp;</span><span style='font-family:
  "Comic Sans MS"'>scope=&quot;prototype&quot;</span><span style='font-family:
  "Microsoft YaHei UI"'>&nbsp;</span><span style='font-family:"Comic Sans MS"'>/&gt;</span></p>
  <p style='margin-left:.375in;margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
  style='font-family:"Comic Sans MS"'>&lt;bean</span><span style='font-family:
  "Microsoft YaHei UI"'>&nbsp;</span><span style='font-family:"Comic Sans MS"'>id=&quot;bananer&quot;</span><span
  style='font-family:"Microsoft YaHei UI"'>&nbsp;</span><span style='font-family:
  "Comic Sans MS"'>class=&quot;cn.com.willchen.test.di.Bananer&quot;</span><span
  style='font-family:"Microsoft YaHei UI"'>&nbsp;</span><span style='font-family:
  "Comic Sans MS"'>scope=&quot;prototype&quot;</span><span style='font-family:
  "Microsoft YaHei UI"'>&nbsp;</span><span style='font-family:"Comic Sans MS"'>/&gt;</span></p>
  <p style='margin-left:.375in;margin-top:5pt;margin-bottom:5pt;font-family:
  "Comic Sans MS";font-size:12.0pt'>&nbsp;</p>
  <p style='margin-left:.375in;margin-top:5pt;margin-bottom:5pt;font-size:12.0pt;
  color:green'><span style='font-family:"Comic Sans MS"'>&lt;!--</span><span
  style='font-family:"Microsoft YaHei UI"'>&nbsp;拿苹果&nbsp;</span><span
  style='font-family:"Comic Sans MS"'>--&gt;</span></p>
  <p style='margin-left:.375in;margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
  style='font-family:"Comic Sans MS";color:blue'>&lt;bean</span><span
  style='font-family:"Microsoft YaHei UI";color:blue'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:blue'>id</span><span
  style='font-family:"Comic Sans MS";color:black'>=</span><span
  style='font-family:"Comic Sans MS";color:maroon'>&quot;fruitPlate&quot;</span><span
  style='font-family:"Microsoft YaHei UI";color:blue'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:blue'>class</span><span
  style='font-family:"Comic Sans MS";color:black'>=</span><span
  style='font-family:"Comic Sans MS";color:maroon'>&quot;cn.com.willchen.test.di.FruitPlate&quot;</span><span
  style='font-family:"Comic Sans MS";color:blue'>&gt;</span></p>
  <p style='margin-left:.375in;margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
  style='font-family:"Comic Sans MS";color:black' lang=en-US><span
  style='mso-spacerun:yes'>    </span></span><span style='font-family:"Comic Sans MS";
  color:blue' lang=zh-CN>&lt;lookup-method</span><span style='font-family:"Microsoft YaHei UI";
  color:blue' lang=zh-CN>&nbsp;</span><span style='font-family:"Comic Sans MS";
  color:blue' lang=zh-CN>name</span><span style='font-family:"Comic Sans MS";
  color:black' lang=zh-CN>=</span><span style='font-family:"Comic Sans MS";
  color:maroon' lang=zh-CN>&quot;getFruit&quot;</span><span style='font-family:
  "Microsoft YaHei UI";color:blue' lang=zh-CN>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:blue' lang=zh-CN>bean</span><span
  style='font-family:"Comic Sans MS";color:black' lang=zh-CN>=</span><span
  style='font-family:"Comic Sans MS";color:maroon' lang=zh-CN>&quot;apple&quot;</span><span
  style='font-family:"Microsoft YaHei UI";color:blue' lang=zh-CN>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:blue' lang=zh-CN>/&gt;</span></p>
  <p style='margin-left:.375in;margin-top:5pt;margin-bottom:5pt;font-family:
  "Comic Sans MS";font-size:12.0pt;color:blue'>&lt;/bean&gt;</p>
  <p style='margin-left:.375in;margin-top:5pt;margin-bottom:5pt;font-family:
  "Comic Sans MS";font-size:12.0pt;color:blue'>&nbsp;</p>
  <p style='margin-left:.375in;margin-top:5pt;margin-bottom:5pt;font-size:12.0pt;
  color:green'><span style='font-family:"Comic Sans MS"'>&lt;!--</span><span
  style='font-family:"Microsoft YaHei UI"'>&nbsp;拿香蕉&nbsp;</span><span
  style='font-family:"Comic Sans MS"'>--&gt;</span></p>
  <p style='margin-left:.375in;margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
  style='font-family:"Comic Sans MS";color:blue'>&lt;bean</span><span
  style='font-family:"Microsoft YaHei UI";color:blue'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:blue'>id</span><span
  style='font-family:"Comic Sans MS";color:black'>=</span><span
  style='font-family:"Comic Sans MS";color:maroon'>&quot;fruitPlate&quot;</span><span
  style='font-family:"Microsoft YaHei UI";color:blue'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:blue'>class</span><span
  style='font-family:"Comic Sans MS";color:black'>=</span><span
  style='font-family:"Comic Sans MS";color:maroon'>&quot;cn.com.willchen.test.di.FruitPlate&quot;</span><span
  style='font-family:"Comic Sans MS";color:blue'>&gt;</span></p>
  <p style='margin-left:.375in;margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
  style='font-family:"Comic Sans MS";color:black' lang=en-US><span
  style='mso-spacerun:yes'>    </span></span><span style='font-family:"Comic Sans MS";
  color:blue' lang=zh-CN>&lt;lookup-method</span><span style='font-family:"Microsoft YaHei UI";
  color:blue' lang=zh-CN>&nbsp;</span><span style='font-family:"Comic Sans MS";
  color:blue' lang=zh-CN>name</span><span style='font-family:"Comic Sans MS";
  color:black' lang=zh-CN>=</span><span style='font-family:"Comic Sans MS";
  color:maroon' lang=zh-CN>&quot;getFruit&quot;</span><span style='font-family:
  "Microsoft YaHei UI";color:blue' lang=zh-CN>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:blue' lang=zh-CN>bean</span><span
  style='font-family:"Comic Sans MS";color:black' lang=zh-CN>=</span><span
  style='font-family:"Comic Sans MS";color:maroon' lang=zh-CN>&quot;bananer&quot;</span><span
  style='font-family:"Microsoft YaHei UI";color:blue' lang=zh-CN>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:blue' lang=zh-CN>/&gt;</span></p>
  <p style='margin-left:.375in;margin-top:5pt;margin-bottom:5pt;font-family:
  "Comic Sans MS";font-size:12.0pt;color:blue'>&lt;/bean&gt;</p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-family:"Comic Sans MS";
  font-size:12.0pt;color:blue'><span lang=zh-CN>&lt;bean</span><span
  lang=en-US>s&gt;</span></p>
  </td>
 </tr>
</table>

</div>

<p style='margin-left:.75in;margin-top:3pt;margin-bottom:0pt;font-family:"Comic Sans MS";
font-size:12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle;margin-top:3pt;
     margin-bottom:0pt' lang=en-US><span style='font-family:"Comic Sans MS";
     font-size:12.0pt'>Test.java</span></li>
</ul>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:blue' lang=zh-CN>public</span><span
style='color:blue' lang=en-US> </span><span style='color:blue' lang=zh-CN>static</span><span
style='color:blue' lang=en-US> </span><span style='color:blue' lang=zh-CN>void</span><span
style='color:black' lang=zh-CN> main(String[] args) {</span></p>

<p style='margin-left:1.125in;font-family:"Comic Sans MS";
font-size:12.0pt'><span style='color:black' lang=zh-CN>ApplicationContext app =
</span><span style='color:blue' lang=zh-CN>new</span><span style='color:blue'
lang=en-US> </span><span lang=zh-CN>ClassPathXmlApplicationContext(&quot;applicationContext.xml&quot;);</span></p>

<p style='margin-left:1.125in;font-family:"Comic Sans MS";
font-size:12.0pt'><span style='color:black' lang=zh-CN>FruitPlate fp1=
(FruitPlate)</span><span lang=en-US> </span><span lang=zh-CN>app.getBean(&quot;fruitPlate1&quot;);</span></p>

<p style='margin-left:1.125in;font-family:"Comic Sans MS";
font-size:12.0pt'><span style='color:black' lang=zh-CN>FruitPlate fp2 =
(FruitPlate)</span><span lang=en-US> </span><span lang=zh-CN>app.getBean(&quot;fruitPlate2&quot;);</span></p>

<p style='margin-left:1.125in;font-family:"Comic Sans MS";
font-size:12.0pt;color:black'>fp1.getFruit();<span style='mso-spacerun:yes'>   
</span></p>

<p style='margin-left:1.125in;font-family:"Comic Sans MS";
font-size:12.0pt;color:black'>fp2.getFruit();</p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt;color:black'>}</p>

<p style='font-family:"Comic Sans MS";font-size:12.0pt'>&nbsp;</p>

<p style='margin-left:.375in;margin-top:7pt;margin-bottom:7pt;font-family:"Microsoft YaHei UI";
font-size:12.0pt;color:#333333'>运行结果：</p>

<p style='margin-left:.375in;margin-top:7pt;margin-bottom:7pt;font-family:"Comic Sans MS";
font-size:12.0pt;color:#333333'>I got Fruit</p>

<p style='margin-left:.375in;margin-top:7pt;margin-bottom:7pt;font-family:"Comic Sans MS";
font-size:12.0pt;color:#333333'>I got a fresh apple</p>

<p style='margin-left:.375in;margin-top:7pt;margin-bottom:7pt;font-family:"Comic Sans MS";
font-size:12.0pt;color:#333333'>I got Fruit</p>

<p style='margin-left:.375in;margin-top:7pt;margin-bottom:7pt;font-family:"Comic Sans MS";
font-size:12.0pt;color:#333333'>I got a fresh bananer</p>

<p style='margin-top:7pt;margin-bottom:7pt;font-family:"Microsoft YaHei UI";
font-size:12.0pt;color:#333333'>&nbsp;</p>

<p style='margin-top:7pt;margin-bottom:7pt;font-family:"Microsoft YaHei UI";
font-size:12.0pt;color:#333333'><span style='font-weight:bold'>解释</span></p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>从上面例子我们可以看到，在代码中，我们没有用到</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> Spring </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>的任何类和接口，实现了与</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> Spring </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>代码的耦合。</span></li>
</ul>

<p style='margin-left:.375in;font-family:"Microsoft YaHei UI";
font-size:12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>其中，最为核心的部分就是</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> lookup-method </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>的配置和</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>
     FruitPlate.getFruit() </span><span style='font-family:"Microsoft YaHei UI";
     font-size:12.0pt'>方法。</span></li>
</ul>

<p style='margin-left:.375in;font-family:"Microsoft YaHei UI";
font-size:12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>上面代码中，我们可以看到</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> getFruit() </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>方法是个抽象方法，我们并没有实现它啊，那它是怎么拿到水果的呢。这里的</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> Srping </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>应用了</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> CGLIB</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>（动态代理）类库。</span></li>
</ul>

<p style='margin-left:.375in;font-family:"Microsoft YaHei UI";
font-size:12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>Spring </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>在初始化容器的时候对配置</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>
     &lt;lookup-method/&gt; </span><span style='font-family:"Microsoft YaHei UI";
     font-size:12.0pt'>的</span><span style='font-family:"Comic Sans MS";
     font-size:12.0pt'> bean </span><span style='font-family:"Microsoft YaHei UI";
     font-size:12.0pt'>做了特殊处理，</span><span style='font-family:"Comic Sans MS";
     font-size:12.0pt'>Spring </span><span style='font-family:"Microsoft YaHei UI";
     font-size:12.0pt'>会对</span><span style='font-family:"Comic Sans MS";
     font-size:12.0pt'> bean </span><span style='font-family:"Microsoft YaHei UI";
     font-size:12.0pt'>指定的</span><span style='font-family:"Comic Sans MS";
     font-size:12.0pt'> class </span><span style='font-family:"Microsoft YaHei UI";
     font-size:12.0pt'>做动态代理，代理</span><span style='font-family:"Comic Sans MS";
     font-size:12.0pt'> &lt;lookup-method/&gt; </span><span style='font-family:
     "Microsoft YaHei UI";font-size:12.0pt'>标签中</span><span style='font-family:
     "Comic Sans MS";font-size:12.0pt'> name </span><span style='font-family:
     "Microsoft YaHei UI";font-size:12.0pt'>属性所指定的方法，返回</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> bean </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>属性指定的</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> bean </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>实例对象。</span></li>
</ul>

<p style='margin-left:.375in;font-family:"Microsoft YaHei UI";
font-size:12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>每次我们调用</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> fruitPlate1 </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>或者</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> fruitPlate2 </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>这</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> 2 </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>个</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> bean </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>的</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> getFruit() </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>方法时，其实是调用了</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> CGLIB </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>生成的动态代理类的方法，自动实现抽象类中的方法</span></li>
</ul>

<p style='font-family:"Comic Sans MS";font-size:12.0pt'>&nbsp;</p>

<p style='font-family:"Comic Sans MS";font-size:12.0pt'>&nbsp;</p>

<p><cite style='font-size:12.0pt;color:#595959'><span
style='font-family:"Microsoft YaHei UI"'>来自</span><span style='font-family:
"Comic Sans MS"'> &lt;</span><a
href="https://www.cnblogs.com/ViviChan/p/4981619.html"><span style='font-family:
"Comic Sans MS"'>https://www.cnblogs.com/ViviChan/p/4981619.html</span></a><span
style='font-family:"Comic Sans MS"'>&gt; </span></cite></p>

</div>

</div>

</div>

<!--EndFragment-->
</body>
