---
categories:
  - Spring
tags:
  - ‹replaced-method›
date:
  - 2022-11-28 7:45:38
---

<body lang=zh-CN style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>
<!--StartFragment-->

<div style='direction:ltr;border-width:100%'>

<div style='direction:ltr;margin-top:0in;margin-left:0in;width:8.4701in'>

<div style='direction:ltr;margin-top:0in;margin-left:0in;width:8.4701in'>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>可以实现方法主体或返回结果的替换，用于动态替换原有的业务逻辑</span></li>
</ul>

<p style='font-family:"Comic Sans MS";font-size:12.0pt;color:#70AD47'>&nbsp;</p>

<div style='direction:ltr'>

<table border=1 cellpadding=0 cellspacing=0 valign=top style='direction:ltr;
 border-collapse:collapse;border-style:solid;border-color:#A3A3A3;border-width:
 1pt;margin-left:.3333in' title="" summary="">
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:black;vertical-align:top;width:.884in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
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
  vertical-align:top;width:.884in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
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
  background-color:#E7E6E6;vertical-align:top;width:.884in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'
  lang=en-US>replacer</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:5.5909in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt'><span style='font-family:"Comic Sans MS"'
  lang=en-US>bean</span><span style='font-family:"Microsoft YaHei UI"'
  lang=zh-CN>标签实例化对象的对应的</span><span style='font-family:"Comic Sans MS"'
  lang=en-US>id</span></p>
  </td>
 </tr>
</table>

</div>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt;
color:#70AD47'><span style='font-weight:bold'>示例</span></p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle;color:#ED7D31'
     lang=en-US><span style='font-family:"Comic Sans MS";font-size:12.0pt'>applicationContext.java</span></li>
</ul>

<div style='direction:ltr'>

<table border=0 cellpadding=0 cellspacing=0 valign=top style='direction:ltr;
 border-collapse:collapse;border-style:solid;border-color:#A3A3A3;border-width:
 0pt;margin-left:.7083in' title="" summary="">
 <tr>
  <td style='border-width:0pt;background-color:white;vertical-align:top;
  width:7.7638in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
  style='font-family:"Comic Sans MS";color:blue'>&lt;?xml</span><span
  style='font-family:"Microsoft YaHei UI";color:blue'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:blue'>version</span><span
  style='font-family:"Comic Sans MS";color:black'>=</span><span
  style='font-family:"Comic Sans MS";color:maroon'>&quot;1.0&quot;</span><span
  style='font-family:"Microsoft YaHei UI";color:blue'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:blue'>encoding</span><span
  style='font-family:"Comic Sans MS";color:black'>=</span><span
  style='font-family:"Comic Sans MS";color:maroon'>&quot;utf-8&quot;</span><span
  style='font-family:"Comic Sans MS";color:blue'>?&gt;</span></p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
  style='font-family:"Comic Sans MS";color:blue'>&lt;beans</span><span
  style='font-family:"Microsoft YaHei UI";color:blue'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:blue'>xmlns</span><span
  style='font-family:"Comic Sans MS";color:black'>=</span><span
  style='font-family:"Comic Sans MS";color:maroon'>&quot;http://www.springframework.org/schema/beans&quot;</span><span
  style='font-family:"Microsoft YaHei UI";color:blue'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:blue'>xmlns:xsi</span><span
  style='font-family:"Comic Sans MS";color:black'>=</span><span
  style='font-family:"Comic Sans MS";color:maroon'>&quot;http://www.w3.org/2001/XMLSchema-instance&quot;</span><span
  style='font-family:"Microsoft YaHei UI";color:blue'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:blue'>xsi:schemaLocation</span><span
  style='font-family:"Comic Sans MS";color:black'>=</span><span
  style='font-family:"Comic Sans MS";color:maroon'>&quot;http://www.springframework.org/schema/beans</span><span
  style='font-family:"Microsoft YaHei UI";color:maroon'>&nbsp;</span><a
  href="http://www.springframework.org/schema/beans/spring-beans-4.0.xsd"><span
  style='font-family:"Comic Sans MS";color:maroon'>http://www.springframework.org/schema/beans/spring-beans-4.0.xsd</span></a><span
  style='font-family:"Comic Sans MS";color:maroon'>&quot;</span><span
  style='font-family:"Microsoft YaHei UI";color:blue'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:blue'>default-lazy-init</span><span
  style='font-family:"Comic Sans MS";color:black'>=</span><span
  style='font-family:"Comic Sans MS";color:maroon'>&quot;true&quot;</span><span
  style='font-family:"Comic Sans MS";color:blue'>&gt;</span></p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:blue'>&lt;description&gt;</span><span
  style='font-family:"Comic Sans MS";color:black'>bean</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>配置</span><span
  style='font-family:"Comic Sans MS";color:blue'>&lt;/description&gt;</span></p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:blue'>&lt;bean</span><span
  style='font-family:"Microsoft YaHei UI";color:blue'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:blue'>id</span><span
  style='font-family:"Comic Sans MS";color:black'>=</span><span
  style='font-family:"Comic Sans MS";color:maroon'>&quot;myBean&quot;</span><span
  style='font-family:"Microsoft YaHei UI";color:blue'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:blue'>class</span><span
  style='font-family:"Comic Sans MS";color:black'>=</span><span
  style='font-family:"Comic Sans MS";color:maroon'>&quot;com.zzr.web.test.MyBean&quot;</span><span
  style='font-family:"Comic Sans MS";color:blue'>&gt;</span></p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;&nbsp;&nbsp;&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:blue'>&lt;replaced-method</span><span
  style='font-family:"Microsoft YaHei UI";color:blue'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:blue'>name</span><span
  style='font-family:"Comic Sans MS";color:black'>=</span><span
  style='font-family:"Comic Sans MS";color:maroon'>&quot;display&quot;</span><span
  style='font-family:"Microsoft YaHei UI";color:blue'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:blue'>replacer</span><span
  style='font-family:"Comic Sans MS";color:black'>=</span><span
  style='font-family:"Comic Sans MS";color:maroon'>&quot;replacer&quot;</span><span
  style='font-family:"Microsoft YaHei UI";color:blue'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:blue'>/&gt;</span></p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:blue'>&lt;/bean&gt;</span></p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:blue'>&lt;bean</span><span
  style='font-family:"Microsoft YaHei UI";color:blue'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:blue'>id</span><span
  style='font-family:"Comic Sans MS";color:black'>=</span><span
  style='font-family:"Comic Sans MS";color:maroon'>&quot;replacer&quot;</span><span
  style='font-family:"Microsoft YaHei UI";color:blue'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:blue'>class</span><span
  style='font-family:"Comic Sans MS";color:black'>=</span><span
  style='font-family:"Comic Sans MS";color:maroon'>&quot;com.zzr.web.test.MyBeanReplacer&quot;</span><span
  style='font-family:"Microsoft YaHei UI";color:blue'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:blue'>/&gt;</span></p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-family:"Comic Sans MS";
  font-size:12.0pt;color:blue'>&lt;/beans&gt;</p>
  </td>
 </tr>
</table>

</div>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<p style='font-family:"Comic Sans MS";font-size:12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle;color:#ED7D31'
     lang=en-US><span style='font-family:"Comic Sans MS";font-size:12.0pt'>Bean.java</span></li>
</ul>

<div style='direction:ltr'>

<table border=0 cellpadding=0 cellspacing=0 valign=top style='direction:ltr;
 border-collapse:collapse;border-style:solid;border-color:#A3A3A3;border-width:
 0pt;margin-left:.7083in' title="" summary="">
 <tr>
  <td style='border-width:0pt;background-color:white;vertical-align:top;
  width:3.7381in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
  style='font-family:"Comic Sans MS";color:blue'>public</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:blue'>class</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>MyBean</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>{</span></p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:blue'>public</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:#8000FF'>void</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>display(){</span></p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>System.out.println(</span><span
  style='font-family:"Comic Sans MS";color:maroon'>&quot;</span><span
  style='font-family:"Microsoft YaHei UI";color:maroon'>我是原来的方法</span><span
  style='font-family:"Comic Sans MS";color:maroon'>&quot;</span><span
  style='font-family:"Comic Sans MS";color:black'>);</span></p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-size:12.0pt;color:black'><span
  style='font-family:"Microsoft YaHei UI"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span
  style='font-family:"Comic Sans MS"'>}</span></p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-size:12.0pt;color:black'><span
  style='font-family:"Microsoft YaHei UI"'>&nbsp;</span><span style='font-family:
  "Comic Sans MS"'>}</span></p>
  </td>
 </tr>
</table>

</div>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle;color:#ED7D31'><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>MyBeanReplacer</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US>.java</span></li>
</ul>

<p style='margin-left:.75in;font-size:12.0pt;color:#70AD47'><span
style='font-family:"Comic Sans MS"' lang=en-US>//</span><span style='font-family:
"Microsoft YaHei UI"' lang=zh-CN>继承</span><span style='font-family:"Comic Sans MS"'
lang=en-US>MethodReolacer</span><span style='font-family:"Microsoft YaHei UI"'
lang=zh-CN>中的</span><span style='font-family:"Comic Sans MS"' lang=en-US>reimplement</span><span
style='font-family:"Microsoft YaHei UI"' lang=zh-CN>方法进行替换准备</span></p>

<div style='direction:ltr'>

<table border=0 cellpadding=0 cellspacing=0 valign=top style='direction:ltr;
 border-collapse:collapse;border-style:solid;border-color:#A3A3A3;border-width:
 0pt;margin-left:.7083in' title="" summary="">
 <tr>
  <td style='border-width:0pt;background-color:white;vertical-align:top;
  width:7.7173in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
  style='font-family:"Comic Sans MS";color:blue'>public</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:blue'>class</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>MyBeanReplacer</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:blue'>implements</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>MethodReplacer{</span></p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-size:12.0pt;color:black'><span
  style='font-family:"Microsoft YaHei UI"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span
  style='font-family:"Comic Sans MS"'>@Override</span></p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:blue'>public</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>Object</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>reimplement(Object</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>obj,</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>Method</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>method,</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>Object[]</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>args)</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:blue'>throws</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>Throwable</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>{</span></p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>System.out.println(</span><span
  style='font-family:"Comic Sans MS";color:maroon'>&quot;</span><span
  style='font-family:"Microsoft YaHei UI";color:maroon'>我替换了原来的方法</span><span
  style='font-family:"Comic Sans MS";color:maroon'>&quot;</span><span
  style='font-family:"Comic Sans MS";color:black'>);</span></p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:blue'>return</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>null;</span></p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-size:12.0pt;color:black'><span
  style='font-family:"Microsoft YaHei UI"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span
  style='font-family:"Comic Sans MS"'>}</span></p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-family:"Comic Sans MS";
  font-size:12.0pt;color:black'>}</p>
  </td>
 </tr>
</table>

</div>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle;color:#ED7D31'
     lang=en-US><span style='font-family:"Comic Sans MS";font-size:12.0pt'>Test.java</span></li>
</ul>

<div style='direction:ltr'>

<table border=0 cellpadding=0 cellspacing=0 valign=top style='direction:ltr;
 border-collapse:collapse;border-style:solid;border-color:#A3A3A3;border-width:
 0pt;margin-left:.7083in' title="" summary="">
 <tr>
  <td style='border-width:0pt;background-color:white;vertical-align:top;
  width:7.5159in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
  style='font-family:"Comic Sans MS";color:blue'>public</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:blue'>class</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>Main</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>{</span></p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:blue'>public</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:blue'>static</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:#8000FF'>void</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>main(</span><span
  style='font-family:"Comic Sans MS";color:#8000FF'>String</span><span
  style='font-family:"Comic Sans MS";color:black'>[]</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>args)</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>{</span></p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>BeanFactory</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>beanFactory</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>=</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:blue'>new</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>XmlBeanFactory(</span><span
  style='font-family:"Comic Sans MS";color:blue'>new</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>ClassPathResource(</span><span
  style='font-family:"Comic Sans MS";color:maroon'>&quot;bean.xml&quot;</span><span
  style='font-family:"Comic Sans MS";color:black'>));</span></p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>MyBean</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>myBean</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>=</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>(MyBean)</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>beanFactory.getBean(</span><span
  style='font-family:"Comic Sans MS";color:maroon'>&quot;myBean&quot;</span><span
  style='font-family:"Comic Sans MS";color:black'>);</span></p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-size:12.0pt;color:black'><span
  style='font-family:"Microsoft YaHei UI"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span
  style='font-family:"Comic Sans MS"'>myBean.display();</span></p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-size:12.0pt;color:black'><span
  style='font-family:"Microsoft YaHei UI"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span
  style='font-family:"Comic Sans MS"'>}</span></p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-family:"Comic Sans MS";
  font-size:12.0pt;color:black'>}</p>
  </td>
 </tr>
</table>

</div>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<p style='margin-left:.75in;font-family:"Microsoft YaHei UI";
font-size:12.0pt'>运行结果：</p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<p style='margin-left:.75in;font-family:"Microsoft YaHei UI";
font-size:12.0pt'>我替换了原来的方法</p>

<p style='font-family:"Comic Sans MS";font-size:12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in;'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>可以在</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>
     &lt;replaced-method/&gt; </span><span style='font-family:"Microsoft YaHei UI";
     font-size:12.0pt'>元素中使用一个或多个</span><span style='font-family:"Comic Sans MS";
     font-size:12.0pt'> &lt;arg-type/&gt; </span><span style='font-family:"Microsoft YaHei UI";
     font-size:12.0pt'>元素来指示要覆盖的方法的方法签名。仅当方法重载且类中存在多个变体时，才需要对参数签名。为了方便起见，参数的类型字符串可以是完全限定类型名称的子字符串。例如，以下所有都匹配</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> java.lang.String</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>：</span></li>
</ul>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in;margin-left:37px'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>java.lang.String</span></li>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>String</span></li>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>Str</span></li>
</ul>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>因为参数的数量通常足以区分每个可能的选择，所以通过仅键入与参数类型匹配的最短字符串，此快捷方式可以节省很多输入</span></li>
</ul>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>&lt;replaced-method&gt;</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>有以下子标签：</span></li>
</ul>

<div style='direction:ltr'>

<table border=1 cellpadding=0 cellspacing=0 valign=top style='direction:ltr;
 border-collapse:collapse;border-style:solid;border-color:#A3A3A3;border-width:
 1pt;margin-left:.3333in' title="" summary="">
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:black;vertical-align:top;width:1.1152in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt;
  color:white'><span style='font-weight:bold'>子标签</span></p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:black;vertical-align:top;width:5.0916in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt;
  color:white'><span style='font-weight:bold'>说明</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:1.1152in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'><span
  lang=zh-CN>&lt;arg-type</span><span lang=en-US>&gt;</span></p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:5.0916in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt'>在方法重载的情况下标识被替换方法的参数</p>
  <div style='direction:ltr'>
  <table border=1 cellpadding=0 cellspacing=0 valign=top style='direction:ltr;
   border-collapse:collapse;border-style:solid;border-color:#A3A3A3;border-width:
   1pt' title="" summary="">
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:black;vertical-align:top;width:.884in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Microsoft YaHei UI";font-size:10.5pt;
    color:white'><span style='font-weight:bold'>参数</span></p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:black;vertical-align:top;width:1.4868in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Microsoft YaHei UI";font-size:10.5pt;
    color:white'><span style='font-weight:bold'>描述</span></p>
    </td>
   </tr>
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    vertical-align:top;width:.884in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>match</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    vertical-align:top;width:1.4868in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Microsoft YaHei UI";font-size:10.5pt'>方法所匹配的字符</p>
    </td>
   </tr>
  </table>
  </div>
  </td>
 </tr>
</table>

</div>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt;
color:#70AD47'><span style='font-weight:bold'>示例</span></p>

<p style='margin-left:.375in;margin-top:5pt;margin-bottom:5pt;font-family:"Comic Sans MS";
font-size:12.0pt'><span style='color:blue'>&lt;bean id=</span><span
style='color:#B43512'>&quot;myValueCalculator&quot;</span><span
style='color:blue'> class=</span><span style='color:#B43512'>&quot;x.y.z.MyValueCalculator&quot;</span><span
style='color:blue'>&gt;</span></p>

<p style='margin-left:.375in;margin-top:5pt;margin-bottom:5pt;font-family:"Comic Sans MS";
font-size:12.0pt'><span style='color:blue'><span style='mso-spacerun:yes'>   
</span></span><span style='color:#70AD47'>&lt;!-- arbitrary method replacement
--&gt;</span></p>

<p style='margin-left:.375in;margin-top:5pt;margin-bottom:5pt;font-family:"Comic Sans MS";
font-size:12.0pt'><span style='color:blue'><span style='mso-spacerun:yes'>   
</span>&lt;replaced-method name=</span><span style='color:#B43512'>&quot;computeValue&quot;</span><span
style='color:blue'> replacer=</span><span style='color:#B43512'>&quot;replacementComputeValue&quot;</span><span
style='color:blue'>&gt;</span></p>

<p style='margin-left:.375in;margin-top:5pt;margin-bottom:5pt;font-family:"Comic Sans MS";
font-size:12.0pt;color:blue'><span style='mso-spacerun:yes'>       
</span>&lt;arg-type&gt;String&lt;/arg-type&gt;</p>

<p style='margin-left:.375in;margin-top:5pt;margin-bottom:5pt;font-family:"Comic Sans MS";
font-size:12.0pt;color:blue'><span style='mso-spacerun:yes'>   
</span>&lt;/replaced-method&gt;</p>

<p style='margin-left:.375in;margin-top:5pt;margin-bottom:5pt;font-family:"Comic Sans MS";
font-size:12.0pt;color:blue'>&lt;/bean&gt;</p>

<p style='margin-left:.375in;margin-top:5pt;margin-bottom:5pt;font-family:"Comic Sans MS";
font-size:12.0pt;color:blue'>&nbsp;</p>

<p style='margin-left:.375in;margin-top:5pt;margin-bottom:5pt;font-family:"Comic Sans MS";
font-size:12.0pt'><span style='color:blue'>&lt;bean id=</span><span
style='color:#B43512'>&quot;replacementComputeValue&quot;</span><span
style='color:blue'> class=</span><span style='color:#B43512'>&quot;a.b.c.ReplacementComputeValue&quot;</span><span
style='color:blue'>/&gt;</span></p>

<p style='font-family:"Comic Sans MS";font-size:12.0pt'>&nbsp;</p>

<p style='font-family:"Comic Sans MS";font-size:12.0pt'>&nbsp;</p>

<p style='font-family:"Comic Sans MS";font-size:12.0pt'>&nbsp;</p>

<p><cite style='font-size:12.0pt;color:#595959'><span
style='font-family:"Microsoft YaHei UI"'>来自</span><span style='font-family:
"Comic Sans MS"'> &lt;</span><a
href="https://www.docs4dev.com/docs/zh/spring-framework/5.1.3.RELEASE/reference/core.html#beans"><span
style='font-family:"Comic Sans MS"'>https://www.docs4dev.com/docs/zh/spring-framework/5.1.3.RELEASE/reference/core.html#beans</span></a><span
style='font-family:"Comic Sans MS"'>&gt; </span></cite></p>

</div>

</div>

</div>

<!--EndFragment-->
</body>
