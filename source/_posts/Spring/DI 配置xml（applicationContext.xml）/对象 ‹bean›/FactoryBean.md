---
categories:
  - Spring
tags:
  - ‹bean›
date:
  - 2022-11-28 7:40:05
---

<body lang=zh-CN style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>
<!--StartFragment-->

<div style='direction:ltr;border-width:100%'>

<div style='direction:ltr;margin-top:0in;margin-left:0in;width:9.1611in'>

<div style='direction:ltr;margin-top:0in;margin-left:0in;width:9.1611in'>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>一般情况下，</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>Spring </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>通过反射机制利用</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> &lt;bean&gt; </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>的</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> class </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>属性指定实现类实例化</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> Bean</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>，在某些情况下，实例化</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> Bean </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>过程比较复杂，如果按照传统的方式，则需要在</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> &lt;bean&gt; </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>中提供大量的配置信息。配置方式的灵活性是受限的。</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>Spring </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>为此提供了一个</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>
     org.springframework.bean.factory.FactoryBean </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>的工厂类接口，用户可以通过实现该接口定制实例化</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> Bean </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>的逻辑。</span></li>
</ul>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>如果有复杂的初始化代码，而不是</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> (</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>可能</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>) </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>冗长的</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> XML</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>，可以用</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> Java </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>更好地表达，则可以创建自己的</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> FactoryBean</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>，在该类中编写复杂的初始化，然后将自定义</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> FactoryBean </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>插入容器。</span></li>
</ul>

<p style='font-family:"Comic Sans MS";font-size:12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>Spring3.0 </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>开始，</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>FactoryBean </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>开始支持泛型，即接口声明改为</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> FactoryBean&lt;T&gt;
     </span><span style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>的形式。当在</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> IOC </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>容器中的</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> Bean </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>实现了</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> FactoryBean </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>后，通过</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> getBean (String
     BeanName) </span><span style='font-family:"Microsoft YaHei UI";font-size:
     12.0pt'>获取到的</span><span style='font-family:"Comic Sans MS";font-size:
     12.0pt'> Bean </span><span style='font-family:"Microsoft YaHei UI";
     font-size:12.0pt'>对象并不是</span><span style='font-family:"Comic Sans MS";
     font-size:12.0pt'> FactoryBean </span><span style='font-family:"Microsoft YaHei UI";
     font-size:12.0pt'>的实现类对象，而是这个实现类中的</span><span style='font-family:"Comic Sans MS";
     font-size:12.0pt'> getObject () </span><span style='font-family:"Microsoft YaHei UI";
     font-size:12.0pt'>方法返回的对象。要想获取</span><span style='font-family:"Comic Sans MS";
     font-size:12.0pt'> FactoryBean </span><span style='font-family:"Microsoft YaHei UI";
     font-size:12.0pt'>的实现类，就要</span><span style='font-family:"Comic Sans MS";
     font-size:12.0pt'> getBean (&amp;BeanName)</span><span style='font-family:
     "Microsoft YaHei UI";font-size:12.0pt'>，在</span><span style='font-family:
     "Comic Sans MS";font-size:12.0pt'> BeanName </span><span style='font-family:
     "Microsoft YaHei UI";font-size:12.0pt'>之前加上</span><span style='font-family:
     "Comic Sans MS";font-size:12.0pt'> &amp;</span><span style='font-family:
     "Microsoft YaHei UI";font-size:12.0pt'>。</span></li>
</ul>

<p style='font-family:"Comic Sans MS";font-size:12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>FactoryBean </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>接口提供了三种方法：</span></li>
</ul>

<div style='direction:ltr'>

<table border=1 cellpadding=0 cellspacing=0 valign=top style='direction:ltr;
 border-collapse:collapse;border-style:solid;border-color:#A3A3A3;border-width:
 1pt;margin-left:.3333in' title="" summary="">
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:black;vertical-align:top;width:1.5951in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt;
  color:white'><span style='font-weight:bold'>方法</span></p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:black;vertical-align:top;width:6.2972in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt;
  color:white'><span style='font-weight:bold'>说明</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:1.5951in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>getObject()</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:6.3666in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt'>返回此工厂创建的对象的实例。实例可以共享，具体取决于该工厂是否返回单例或原型。</p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:1.5951in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>isSingleton()</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:6.2972in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt'><span style='font-family:"Microsoft YaHei UI"'>如果此</span><span
  style='font-family:"Comic Sans MS"'> FactoryBean </span><span
  style='font-family:"Microsoft YaHei UI"'>是单例，则返回</span><span
  style='font-family:"Comic Sans MS"'> true</span><span style='font-family:
  "Microsoft YaHei UI"'>，否则返回</span><span style='font-family:"Comic Sans MS"'>
  false</span><span style='font-family:"Microsoft YaHei UI"'>。</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:1.5951in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>getObjectType()</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:6.2972in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt'><span style='font-family:"Microsoft YaHei UI"'>返回由</span><span
  style='font-family:"Comic Sans MS"'> getObject() </span><span
  style='font-family:"Microsoft YaHei UI"'>方法或</span><span style='font-family:
  "Comic Sans MS"'> null </span><span style='font-family:"Microsoft YaHei UI"'>返回的对象类型</span><span
  style='font-family:"Comic Sans MS"'> (</span><span style='font-family:"Microsoft YaHei UI"'>如果事先未知</span><span
  style='font-family:"Comic Sans MS"'>)</span><span style='font-family:"Microsoft YaHei UI"'>。</span></p>
  </td>
 </tr>
</table>

</div>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>FactoryBean </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>在</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> IOC </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>容器的基础上给</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> Bean </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>的实现加上了简单工厂模式和装饰者模式，可以在</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> getObject() </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>方法中灵活配置</span></li>
</ul>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt;
color:#70AD47'><span style='font-weight:bold'>示例</span></p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle;color:#ED7D31'><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>PersonFactoryBean</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US>.java</span></li>
</ul>

<div style='direction:ltr'>

<table border=0 cellpadding=0 cellspacing=0 valign=top style='direction:ltr;
 border-collapse:collapse;border-style:solid;border-color:#A3A3A3;border-width:
 0pt;margin-left:.7083in' title="" summary="">
 <tr>
  <td style='border-width:0pt;background-color:white;vertical-align:top;
  width:5.3458in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
  style='font-family:"Comic Sans MS";color:blue'>public</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:blue'>class</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>PersonFactoryBean</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:blue'>implements</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>FactoryBean&lt;Person&gt;</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>{</span></p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-family:"Comic Sans MS";
  font-size:12.0pt'>&nbsp;</p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;&nbsp;&nbsp;&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:blue'>private</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:#8000FF'>String</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>initStr;</span></p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-family:"Comic Sans MS";
  font-size:12.0pt'>&nbsp;</p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;&nbsp;&nbsp;&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:#FFC000'>@Override</span></p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;&nbsp;&nbsp;&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:blue'>public</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>Person</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>getObject()</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:blue'>throws</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>Exception</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>{</span></p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:green'>//</span><span
  style='font-family:"Microsoft YaHei UI";color:green'>获取对应参数</span></p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-size:12.0pt;color:black'><span
  style='font-family:"Microsoft YaHei UI"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span
  style='font-family:"Comic Sans MS"'>Objects.requireNonNull(initStr);</span></p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:#8000FF'>String</span><span
  style='font-family:"Comic Sans MS";color:black'>[]</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>split</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>=</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>initStr.split(</span><span
  style='font-family:"Comic Sans MS";color:maroon'>&quot;,&quot;</span><span
  style='font-family:"Comic Sans MS";color:black'>);</span></p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>Person</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>p=</span><span
  style='font-family:"Comic Sans MS";color:blue'>new</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>Person();</span></p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>p.setAge(Integer.parseInt(split[</span><span
  style='font-family:"Comic Sans MS";color:red'>0</span><span style='font-family:
  "Comic Sans MS";color:black'>]));</span></p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>p.setName(split[</span><span
  style='font-family:"Comic Sans MS";color:red'>1</span><span style='font-family:
  "Comic Sans MS";color:black'>]);</span></p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:green'>//</span><span
  style='font-family:"Microsoft YaHei UI";color:green'>其他复杂业务处理</span></p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:blue'>return</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>p;</span></p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-size:12.0pt;color:black'><span
  style='font-family:"Microsoft YaHei UI"'>&nbsp;&nbsp;&nbsp;&nbsp;</span><span
  style='font-family:"Comic Sans MS"'>}</span></p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-family:"Comic Sans MS";
  font-size:12.0pt'>&nbsp;</p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;&nbsp;&nbsp;&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:#FFC000'>@Override</span></p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;&nbsp;&nbsp;&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:blue'>public</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>Class&lt;?&gt;</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>getObjectType()</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>{</span></p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:blue'>return</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>Person.</span><span
  style='font-family:"Comic Sans MS";color:blue'>class</span><span
  style='font-family:"Comic Sans MS";color:black'>;</span></p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-size:12.0pt;color:black'><span
  style='font-family:"Microsoft YaHei UI"'>&nbsp;&nbsp;&nbsp;&nbsp;</span><span
  style='font-family:"Comic Sans MS"'>}</span></p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-family:"Comic Sans MS";
  font-size:12.0pt'>&nbsp;</p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;&nbsp;&nbsp;&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:blue'>public</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:#8000FF'>String</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>getInitStr()</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>{</span></p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:blue'>return</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>initStr;</span></p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-size:12.0pt;color:black'><span
  style='font-family:"Microsoft YaHei UI"'>&nbsp;&nbsp;&nbsp;&nbsp;</span><span
  style='font-family:"Comic Sans MS"'>}</span></p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-family:"Comic Sans MS";
  font-size:12.0pt' lang=en-US><span style='mso-spacerun:yes'>   </span></p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
  style='font-family:"Comic Sans MS"' lang=en-US><span
  style='mso-spacerun:yes'>   </span></span><span style='font-family:"Comic Sans MS";
  color:#70AD47' lang=en-US><span style='mso-spacerun:yes'> </span>/</span><span
  style='font-family:"Comic Sans MS";color:#70AD47' lang=zh-CN>/ </span><span
  style='font-family:"Microsoft YaHei UI";color:#70AD47' lang=zh-CN>接受到逗号分割符设置属性信息</span><span
  style='font-family:"Comic Sans MS"' lang=zh-CN><span
  style='mso-spacerun:yes'>  </span></span></p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;&nbsp;&nbsp;&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:blue'>public</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:#8000FF'>void</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>setInitStr(</span><span
  style='font-family:"Comic Sans MS";color:#8000FF'>String</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>initStr)</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>{</span></p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:blue'>this</span><span
  style='font-family:"Comic Sans MS";color:black'>.initStr</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>=</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>initStr;</span></p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-size:12.0pt;color:black'><span
  style='font-family:"Microsoft YaHei UI"'>&nbsp;&nbsp;&nbsp;&nbsp;</span><span
  style='font-family:"Comic Sans MS"'>}</span></p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-family:"Comic Sans MS";
  font-size:12.0pt;color:black'>}</p>
  </td>
 </tr>
</table>

</div>

<p style='font-family:"Comic Sans MS";font-size:12.0pt;color:#70AD47'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle;color:#ED7D31'
     lang=en-US><span style='font-family:"Comic Sans MS";font-size:12.0pt'>application.xml</span></li>
</ul>

<p style='margin-left:.75in;margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
style='font-family:"Comic Sans MS";color:blue'>&lt;?xml</span><span
style='font-family:"Microsoft YaHei UI";color:blue'>&nbsp;</span><span
style='font-family:"Comic Sans MS";color:blue'>version</span><span
style='font-family:"Comic Sans MS";color:black'>=</span><span style='font-family:
"Comic Sans MS";color:maroon'>&quot;1.0&quot;</span><span style='font-family:
"Microsoft YaHei UI";color:blue'>&nbsp;</span><span style='font-family:"Comic Sans MS";
color:blue'>encoding</span><span style='font-family:"Comic Sans MS";color:black'>=</span><span
style='font-family:"Comic Sans MS";color:maroon'>&quot;UTF-8&quot;</span><span
style='font-family:"Comic Sans MS";color:blue'>?&gt;</span></p>

<p style='margin-left:.75in;margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
style='font-family:"Comic Sans MS";color:blue'>&lt;beans</span><span
style='font-family:"Microsoft YaHei UI";color:blue'>&nbsp;</span><span
style='font-family:"Comic Sans MS";color:blue'>xmlns</span><span
style='font-family:"Comic Sans MS";color:black'>=</span><span style='font-family:
"Comic Sans MS";color:maroon'>&quot;http://www.springframework.org/schema/beans&quot;</span></p>

<p style='margin-left:1.125in;margin-top:5pt;margin-bottom:5pt;font-family:
"Comic Sans MS";font-size:12.0pt'><span style='color:blue'>xmlns:xsi</span><span
style='color:black'>=</span><span style='color:maroon'>&quot;http://www.w3.org/2001/XMLSchema-instance&quot;</span></p>

<p style='margin-left:1.125in;margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
style='font-family:"Comic Sans MS";color:blue'>xsi:schemaLocation</span><span
style='font-family:"Comic Sans MS";color:black'>=</span><span style='font-family:
"Comic Sans MS";color:maroon'>&quot;http://www.springframework.org/schema/beans</span><span
style='font-family:"Microsoft YaHei UI";color:maroon'>&nbsp;</span><a
href="http://www.springframework.org/schema/beans/spring-beans.xsd"><span
style='font-family:"Comic Sans MS";color:maroon'>http://www.springframework.org/schema/beans/spring-beans.xsd</span></a><span
style='font-family:"Comic Sans MS";color:maroon'>&quot;</span><span
style='font-family:"Comic Sans MS";color:blue'>&gt;</span></p>

<p style='margin-left:.75in;margin-top:5pt;margin-bottom:5pt;font-family:"Comic Sans MS";
font-size:12.0pt'>&nbsp;</p>

<p style='margin-left:1.125in;margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
style='font-family:"Comic Sans MS";color:blue' lang=zh-CN>&lt;bean</span><span
style='font-family:"Microsoft YaHei UI";color:blue' lang=zh-CN>&nbsp;</span><span
style='font-family:"Comic Sans MS";color:blue' lang=zh-CN>id</span><span
style='font-family:"Comic Sans MS";color:black' lang=zh-CN>=</span><span
style='font-family:"Comic Sans MS";color:maroon' lang=zh-CN>&quot;</span><span
style='font-family:"Comic Sans MS";color:maroon' lang=en-US>person</span><span
style='font-family:"Comic Sans MS";color:maroon' lang=zh-CN>&quot;</span><span
style='font-family:"Microsoft YaHei UI";color:blue' lang=zh-CN>&nbsp;</span><span
style='font-family:"Comic Sans MS";color:blue' lang=zh-CN>class</span><span
style='font-family:"Comic Sans MS";color:black' lang=zh-CN>=</span><span
style='font-family:"Comic Sans MS";color:maroon' lang=zh-CN>&quot;cn.lonecloud.spring.example.bo.Person&quot;</span><span
style='font-family:"Comic Sans MS";color:blue' lang=zh-CN>&gt;</span></p>

<p style='margin-left:1.5in;margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
style='font-family:"Comic Sans MS";color:blue'>&lt;property</span><span
style='font-family:"Microsoft YaHei UI";color:blue'>&nbsp;</span><span
style='font-family:"Comic Sans MS";color:blue'>name</span><span
style='font-family:"Comic Sans MS";color:black'>=</span><span style='font-family:
"Comic Sans MS";color:maroon'>&quot;age&quot;</span><span style='font-family:
"Microsoft YaHei UI";color:blue'>&nbsp;</span><span style='font-family:"Comic Sans MS";
color:blue'>value</span><span style='font-family:"Comic Sans MS";color:black'>=</span><span
style='font-family:"Comic Sans MS";color:maroon'>&quot;10&quot;</span><span
style='font-family:"Comic Sans MS";color:blue'>/&gt;</span></p>

<p style='margin-left:1.5in;margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
style='font-family:"Comic Sans MS";color:blue'>&lt;property</span><span
style='font-family:"Microsoft YaHei UI";color:blue'>&nbsp;</span><span
style='font-family:"Comic Sans MS";color:blue'>name</span><span
style='font-family:"Comic Sans MS";color:black'>=</span><span style='font-family:
"Comic Sans MS";color:maroon'>&quot;name&quot;</span><span style='font-family:
"Microsoft YaHei UI";color:blue'>&nbsp;</span><span style='font-family:"Comic Sans MS";
color:blue'>value</span><span style='font-family:"Comic Sans MS";color:black'>=</span><span
style='font-family:"Comic Sans MS";color:maroon'>&quot;xiaoMing&quot;</span><span
style='font-family:"Comic Sans MS";color:blue'>/&gt;</span></p>

<p style='margin-left:1.125in;margin-top:5pt;margin-bottom:5pt;font-family:
"Comic Sans MS";font-size:12.0pt;color:blue'>&lt;/bean&gt;</p>

<p style='margin-left:.75in;margin-top:5pt;margin-bottom:5pt;font-family:"Comic Sans MS";
font-size:12.0pt'>&nbsp;</p>

<p style='margin-left:1.125in;margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
style='font-family:"Comic Sans MS";color:blue' lang=zh-CN>&lt;bean</span><span
style='font-family:"Microsoft YaHei UI";color:blue' lang=zh-CN>&nbsp;</span><span
style='font-family:"Comic Sans MS";color:blue' lang=zh-CN>id</span><span
style='font-family:"Comic Sans MS";color:black' lang=zh-CN>=</span><span
style='font-family:"Comic Sans MS";color:maroon' lang=zh-CN>&quot;</span><span
style='font-family:"Comic Sans MS";color:maroon' lang=en-US>personForm</span><span
style='font-family:"Comic Sans MS";color:maroon' lang=zh-CN>Factory&quot;</span><span
style='font-family:"Microsoft YaHei UI";color:blue' lang=zh-CN>&nbsp;</span><span
style='font-family:"Comic Sans MS";color:blue' lang=zh-CN>class</span><span
style='font-family:"Comic Sans MS";color:black' lang=zh-CN>=</span><span
style='font-family:"Comic Sans MS";color:maroon' lang=zh-CN>&quot;cn.lonecloud.spring.example.bean.PersonFactoryBean&quot;</span><span
style='font-family:"Comic Sans MS";color:blue' lang=zh-CN>&gt;</span></p>

<p style='margin-left:1.5in;margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
style='font-family:"Comic Sans MS";color:blue'>&lt;property</span><span
style='font-family:"Microsoft YaHei UI";color:blue'>&nbsp;</span><span
style='font-family:"Comic Sans MS";color:blue'>name</span><span
style='font-family:"Comic Sans MS";color:black'>=</span><span style='font-family:
"Comic Sans MS";color:maroon'>&quot;initStr&quot;</span><span style='font-family:
"Microsoft YaHei UI";color:blue'>&nbsp;</span><span style='font-family:"Comic Sans MS";
color:blue'>value</span><span style='font-family:"Comic Sans MS";color:black'>=</span><span
style='font-family:"Comic Sans MS";color:maroon'>&quot;10,init</span><span
style='font-family:"Microsoft YaHei UI";color:maroon'>&nbsp;</span><span
style='font-family:"Comic Sans MS";color:maroon'>from</span><span
style='font-family:"Microsoft YaHei UI";color:maroon'>&nbsp;</span><span
style='font-family:"Comic Sans MS";color:maroon'>factory&quot;</span><span
style='font-family:"Comic Sans MS";color:blue'>/&gt;</span></p>

<p style='margin-left:1.125in;margin-top:5pt;margin-bottom:5pt;font-family:
"Comic Sans MS";font-size:12.0pt;color:blue'>&lt;/bean&gt;</p>

<p style='margin-left:.75in;margin-top:5pt;margin-bottom:5pt;font-family:"Comic Sans MS";
font-size:12.0pt;color:blue'>&lt;/beans&gt;</p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#ED7D31' lang=en-US>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle;color:#ED7D31'><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US>Person</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>Factory</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US>BeanTest.java</span></li>
</ul>

<div style='direction:ltr'>

<table border=0 cellpadding=0 cellspacing=0 valign=top style='direction:ltr;
 border-collapse:collapse;border-style:solid;border-color:#A3A3A3;border-width:
 0pt;margin-left:.7083in' title="" summary="">
 <tr>
  <td style='border-width:0pt;background-color:white;vertical-align:top;
  width:7.0875in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='margin-top:5pt;margin-bottom:5pt;font-family:"Comic Sans MS";
  font-size:12.0pt;color:#FFC000'>@Test</p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
  style='font-family:"Comic Sans MS";color:blue'>public</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:#8000FF'>void</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>test(){</span></p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;&nbsp;&nbsp;&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>BeanFactory</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>beanFactory</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>=</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:blue'>new</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>ClassPathXmlApplicationContext(</span><span
  style='font-family:"Comic Sans MS";color:maroon'>&quot;application.xml&quot;</span><span
  style='font-family:"Comic Sans MS";color:black'>);</span></p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;&nbsp;&nbsp;&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:green'>//</span><span
  style='font-family:"Microsoft YaHei UI";color:green'>获取对应的对象化</span></p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
  style='font-family:"Microsoft YaHei UI";color:black' lang=zh-CN>&nbsp;&nbsp;&nbsp;&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black' lang=zh-CN>Object</span><span
  style='font-family:"Microsoft YaHei UI";color:black' lang=zh-CN>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black' lang=zh-CN>demo</span><span
  style='font-family:"Microsoft YaHei UI";color:black' lang=zh-CN>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black' lang=zh-CN>=</span><span
  style='font-family:"Microsoft YaHei UI";color:black' lang=zh-CN>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black' lang=zh-CN>beanFactory.getBean(</span><span
  style='font-family:"Comic Sans MS";color:maroon' lang=zh-CN>&quot;</span><span
  style='font-family:"Comic Sans MS";color:maroon' lang=en-US>person</span><span
  style='font-family:"Comic Sans MS";color:maroon' lang=zh-CN>&quot;</span><span
  style='font-family:"Comic Sans MS";color:black' lang=zh-CN>);</span></p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;&nbsp;&nbsp;&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>System.out.println(demo</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:blue'>instanceof</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>Person);</span></p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-size:12.0pt;color:black'><span
  style='font-family:"Microsoft YaHei UI"'>&nbsp;&nbsp;&nbsp;&nbsp;</span><span
  style='font-family:"Comic Sans MS"'>System.out.println(demo);</span></p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;&nbsp;&nbsp;&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:green'>//</span><span
  style='font-family:"Microsoft YaHei UI";color:green'>获取从工厂</span><span
  style='font-family:"Comic Sans MS";color:green'>Bean</span><span
  style='font-family:"Microsoft YaHei UI";color:green'>中获取对象</span></p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
  style='font-family:"Microsoft YaHei UI";color:black' lang=zh-CN>&nbsp;&nbsp;&nbsp;&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black' lang=zh-CN>Person</span><span
  style='font-family:"Microsoft YaHei UI";color:black' lang=zh-CN>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black' lang=zh-CN>demoFromFactory</span><span
  style='font-family:"Microsoft YaHei UI";color:black' lang=zh-CN>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black' lang=zh-CN>=</span><span
  style='font-family:"Microsoft YaHei UI";color:black' lang=zh-CN>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black' lang=zh-CN>beanFactory.getBean(</span><span
  style='font-family:"Comic Sans MS";color:maroon' lang=zh-CN>&quot;</span><span
  style='font-family:"Comic Sans MS";color:maroon' lang=en-US>personFrom</span><span
  style='font-family:"Comic Sans MS";color:maroon' lang=zh-CN>Factory&quot;</span><span
  style='font-family:"Comic Sans MS";color:black' lang=zh-CN>,</span><span
  style='font-family:"Microsoft YaHei UI";color:black' lang=zh-CN>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black' lang=zh-CN>Person.</span><span
  style='font-family:"Comic Sans MS";color:blue' lang=zh-CN>class</span><span
  style='font-family:"Comic Sans MS";color:black' lang=zh-CN>);</span></p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-size:12.0pt;color:black'><span
  style='font-family:"Microsoft YaHei UI"'>&nbsp;&nbsp;&nbsp;&nbsp;</span><span
  style='font-family:"Comic Sans MS"'>System.out.println(demoFromFactory);</span></p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;&nbsp;&nbsp;&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:green'>//</span><span
  style='font-family:"Microsoft YaHei UI";color:green'>获取对应的</span><span
  style='font-family:"Comic Sans MS";color:green'>personFactory</span></p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
  style='font-family:"Microsoft YaHei UI";color:black' lang=zh-CN>&nbsp;&nbsp;&nbsp;&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black' lang=zh-CN>Object</span><span
  style='font-family:"Microsoft YaHei UI";color:black' lang=zh-CN>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black' lang=zh-CN>bean</span><span
  style='font-family:"Microsoft YaHei UI";color:black' lang=zh-CN>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black' lang=zh-CN>=</span><span
  style='font-family:"Microsoft YaHei UI";color:black' lang=zh-CN>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black' lang=zh-CN>beanFactory.getBean(</span><span
  style='font-family:"Comic Sans MS";color:maroon' lang=zh-CN>&quot;&amp;</span><span
  style='font-family:"Comic Sans MS";color:maroon' lang=en-US>personFrom</span><span
  style='font-family:"Comic Sans MS";color:maroon' lang=zh-CN>Factory&quot;</span><span
  style='font-family:"Comic Sans MS";color:black' lang=zh-CN>);</span></p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;&nbsp;&nbsp;&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>System.out.println(bean</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:blue'>instanceof</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>PersonFactoryBean);</span></p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-size:12.0pt;color:black'><span
  style='font-family:"Microsoft YaHei UI"'>&nbsp;&nbsp;&nbsp;&nbsp;</span><span
  style='font-family:"Comic Sans MS"'>PersonFactoryBean</span><span
  style='font-family:"Microsoft YaHei UI"'>&nbsp;</span><span style='font-family:
  "Comic Sans MS"'>factoryBean</span><span style='font-family:"Microsoft YaHei UI"'>&nbsp;</span><span
  style='font-family:"Comic Sans MS"'>=</span><span style='font-family:"Microsoft YaHei UI"'>&nbsp;</span><span
  style='font-family:"Comic Sans MS"'>(PersonFactoryBean)</span><span
  style='font-family:"Microsoft YaHei UI"'>&nbsp;</span><span style='font-family:
  "Comic Sans MS"'>bean;</span></p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;&nbsp;&nbsp;&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>System.out.println(</span><span
  style='font-family:"Comic Sans MS";color:maroon'>&quot;</span><span
  style='font-family:"Microsoft YaHei UI";color:maroon'>初始化参数为：</span><span
  style='font-family:"Comic Sans MS";color:maroon'>&quot;</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>+</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>factoryBean.getInitStr());</span></p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-family:"Comic Sans MS";
  font-size:12.0pt;color:black'>}</p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-family:"Comic Sans MS";
  font-size:12.0pt;color:black'>&nbsp;</p>
  </td>
 </tr>
</table>

</div>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>当调用</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>
     getBean(&quot;</span><span style='font-family:"Comic Sans MS";font-size:
     12.0pt' lang=en-US>personFromFactory</span><span style='font-family:"Comic Sans MS";
     font-size:12.0pt' lang=zh-CN>&quot;) </span><span style='font-family:"Microsoft YaHei UI";
     font-size:12.0pt' lang=zh-CN>时，</span><span style='font-family:"Comic Sans MS";
     font-size:12.0pt' lang=zh-CN>Spring </span><span style='font-family:"Microsoft YaHei UI";
     font-size:12.0pt' lang=zh-CN>通过反射机制发现 </span><span style='font-family:
     "Comic Sans MS";font-size:12.0pt' lang=en-US>person</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>FactoryBean
     </span><span style='font-family:"Microsoft YaHei UI";font-size:12.0pt'
     lang=zh-CN>实现了</span><span style='font-family:"Comic Sans MS";font-size:
     12.0pt' lang=zh-CN> FactoryBean </span><span style='font-family:"Microsoft YaHei UI";
     font-size:12.0pt' lang=zh-CN>的接口，这时</span><span style='font-family:"Comic Sans MS";
     font-size:12.0pt' lang=zh-CN> Spring </span><span style='font-family:"Microsoft YaHei UI";
     font-size:12.0pt' lang=zh-CN>容器就调用接口方法 </span><span style='font-family:
     "Comic Sans MS";font-size:12.0pt' lang=en-US>Person</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>FactoryBean#getObject
     () </span><span style='font-family:"Microsoft YaHei UI";font-size:12.0pt'
     lang=zh-CN>方法返回。如果希望获取 </span><span style='font-family:"Comic Sans MS";
     font-size:12.0pt' lang=en-US>Person</span><span style='font-family:"Comic Sans MS";
     font-size:12.0pt' lang=zh-CN>FactoryBean </span><span style='font-family:
     "Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>的实例，则需要在使用</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN> getBean
     (beanName) </span><span style='font-family:"Microsoft YaHei UI";
     font-size:12.0pt' lang=zh-CN>方法时在</span><span style='font-family:"Comic Sans MS";
     font-size:12.0pt' lang=zh-CN> beanName </span><span style='font-family:
     "Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>前显示的加上</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>
     &quot;&amp;&quot; </span><span style='font-family:"Microsoft YaHei UI";
     font-size:12.0pt' lang=zh-CN>前缀：如</span><span style='font-family:"Comic Sans MS";
     font-size:12.0pt' lang=zh-CN> getBean (&quot;&amp;</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US>personFromFactory</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>&quot;);</span></li>
</ul>

</div>

</div>

</div>

<!--EndFragment-->
</body>
