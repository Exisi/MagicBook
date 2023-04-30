---
categories:
  - Spring
tags:
  - IOC
  - DI
date:
  - 2022-11-28 7:32:01
---

<body lang=zh-CN style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>
<!--StartFragment-->

<div style='direction:ltr;border-width:100%'>

<div style='direction:ltr;margin-top:0in;margin-left:0in;width:8.6465in'>

<div style='direction:ltr;margin-top:0in;margin-left:0in;width:8.6465in'>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle;color:#24292E'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>控制反转（</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US>I</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>oC</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>）也被称为依赖注入（</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>DI</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>），是从两个角度描述的同一个概念。</span></li>
</ul>

<p style='font-family:"Comic Sans MS";font-size:12.0pt;color:#24292E'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle;color:#24292E'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt;color:black'>依赖注入（</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt;color:black'>DI</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt;color:black'>）是一个对象定义其依赖关系的过程。对象仅通过构造函数参数、工厂方法的参数或在对象实例被构造或从工厂方法返回后设置的属性来定义与一起工作的其他对象的依赖关系。从工厂方法返回。然后容器在创建</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt;color:black'> bean </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt;color:black'>时注入这些依赖项。</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt;color:#24292E'>从根本上讲，此过程是通过使用类的直接构造或服务定位器模式来自己控制其依赖关系的实例化或位置的</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt;color:#24292E'> Bean </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt;color:#24292E'>本身的逆过程</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt;color:#24292E'> (</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt;color:#24292E'>因此称为</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt;color:#24292E'>
     Control Inversion)</span><span style='font-family:"Microsoft YaHei UI";
     font-size:12.0pt;color:#24292E'>。</span></li>
</ul>

<p style='font-family:"Comic Sans MS";font-size:12.0pt'>&nbsp;</p>

<div style='direction:ltr'>

<table border=1 cellpadding=0 cellspacing=0 valign=top style='direction:ltr;
 border-collapse:collapse;border-style:solid;border-color:#A3A3A3;border-width:
 1pt;margin-left:.3333in' title="" summary="">
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:black;vertical-align:top;width:.6673in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt;
  color:white'><span style='font-weight:bold'>概念</span></p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:black;vertical-align:top;width:7.1513in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt;
  color:white'><span style='font-weight:bold'>解释</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:.6673in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt'>依赖</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:7.2069in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt'><span style='font-family:"Microsoft YaHei UI"'>指通过局部变量、方法参数、返回值等建立的对于其他对象的调用关系。</span><span
  style='font-family:"Comic Sans MS"'>ClassA</span><span style='font-family:
  "Microsoft YaHei UI"'>类使用了</span><span style='font-family:"Comic Sans MS"'>ClassB</span><span
  style='font-family:"Microsoft YaHei UI"'>中的属性或者方法，</span><span
  style='font-family:"Comic Sans MS"'>ClassA</span><span style='font-family:
  "Microsoft YaHei UI"'>不能抛开</span><span style='font-family:"Comic Sans MS"'>ClassB</span><span
  style='font-family:"Microsoft YaHei UI"'>独立存在，叫做</span><span
  style='font-family:"Comic Sans MS"'>ClassA</span><span style='font-family:
  "Microsoft YaHei UI"'>依赖</span><span style='font-family:"Comic Sans MS"'>ClassB</span></p>
  </td>
 </tr>
</table>

</div>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>类与类之间的依赖关系增加了程序开发的复杂程度，在开发一个类的时候，还要考虑对使用了该类的其他类的影响</span></li>
</ul>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle;color:#24292E'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt;color:black'>这个过程基本上是相反的，因此被称为控制反转（</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt;color:black'>IoC</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt;color:black'>），即</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt;color:black'> bean </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt;color:black'>本身通过直接构造类或使用</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt;color:black'> Service
     Locator </span><span style='font-family:"Microsoft YaHei UI";font-size:
     12.0pt;color:black'>模式等机制来控制其依赖项的实例化或位置。</span></li>
</ul>

<p style='font-family:"Comic Sans MS";font-size:12.0pt;color:#24292E'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle;margin-top:0pt;
     margin-bottom:12pt;color:#24292E'><span style='font-family:"Microsoft YaHei UI";
     font-size:12.0pt' lang=zh-CN>控制反转（</span><span style='font-family:"Comic Sans MS";
     font-size:12.0pt' lang=en-US>I</span><span style='font-family:"Comic Sans MS";
     font-size:12.0pt' lang=zh-CN>oC</span><span style='font-family:"Microsoft YaHei UI";
     font-size:12.0pt' lang=zh-CN>）指导开发人员如何使用对象，管理对象。
     把对象的创建，属性赋值，对象的声明周期都交给代码之外的容器管理。</span></li>
</ul>

<div style='direction:ltr'>

<table border=1 cellpadding=0 cellspacing=0 valign=top style='direction:ltr;
 border-collapse:collapse;border-style:solid;border-color:#A3A3A3;border-width:
 1pt;margin-left:.3333in' title="" summary="">
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:black;vertical-align:top;width:.6673in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt;
  color:white'><span style='font-weight:bold'>概念</span></p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:black;vertical-align:top;width:7.1569in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt;
  color:white'><span style='font-weight:bold'>解释</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:.6673in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt'>控制</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:7.1569in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt'>对象创建，属性赋值，
  对象声明周期管理</p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:.6673in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt'>反转</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:7.1569in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt'>把开发人员管理对象的权限转移给了代码之外的容器实现。
  由容器完成对象的管理。</p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:.6673in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt'>正转</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:7.2263in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt'><span style='font-family:"Microsoft YaHei UI"'>开发人员在代码中，
  使用</span><span style='font-family:"Comic Sans MS"'> new </span><span
  style='font-family:"Microsoft YaHei UI"'>构造方法创建对象。
  开发人员掌握了对象的创建，属性赋值，对象从开始到销毁的全部过程。
  开发人员对对象全部控制。这种导致了对象之间的相互调用的耦合性增加，不利于后期项目的升级和维护。</span></p>
  </td>
 </tr>
</table>

</div>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#24292E'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle;color:#24292E'><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US>S</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>pring</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>底层使用的
     反射机制， 通过反射创建对象，给属性赋值。</span></li>
</ul>

<p style='font-family:"Comic Sans MS";font-size:12.0pt;color:#24292E'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle;color:#24292E'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>给属性赋值可以使用</span></li>
 <ol type=1 style='direction:ltr;unicode-bidi:embed;margin-top:0in;margin-bottom:
  0in;font-family:"Comic Sans MS";font-size:12.0pt;font-weight:normal;
  font-style:normal'>
  <li value=1 style='margin-top:0;margin-bottom:0;vertical-align:middle;
      color:#24292E'><span style='font-family:"Comic Sans MS";font-size:12.0pt;
      font-weight:normal;font-style:normal;font-family:"Comic Sans MS";
      font-size:12.0pt'>xml</span><span style='font-family:"Microsoft YaHei UI";
      font-size:12.0pt;font-weight:normal;font-style:normal;font-family:"Microsoft YaHei UI";
      font-size:12.0pt'>配置文件中的标签和属性</span></li>
  <li style='margin-top:0;margin-bottom:0;vertical-align:middle;color:#24292E'><span
      style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>使用注解</span></li>
 </ol>
</ul>

<p style='margin-left:1.125in;font-family:"Comic Sans MS";
font-size:12.0pt;color:#24292E'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle;color:#24292E'><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US>DI </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>注入分类：</span></li>
 <ol type=1 style='direction:ltr;unicode-bidi:embed;margin-top:0in;margin-bottom:
  0in;font-family:"Comic Sans MS";font-size:12.0pt;font-weight:normal;
  font-style:normal'>
  <li value=1 style='margin-top:0;margin-bottom:0;vertical-align:middle;
      color:#24292E'><span style='font-family:"Comic Sans MS";font-size:12.0pt;
      font-weight:normal;font-style:normal;font-family:"Comic Sans MS";
      font-size:12.0pt'>set</span><span style='font-family:"Microsoft YaHei UI";
      font-size:12.0pt;font-weight:normal;font-style:normal;font-family:"Microsoft YaHei UI";
      font-size:12.0pt'>注入（设值注入）</span></li>
  <li style='margin-top:0;margin-bottom:0;vertical-align:middle;color:#24292E'><span
      style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>构造注入</span></li>
 </ol>
</ul>

<p style='font-family:"Comic Sans MS";font-size:12.0pt;color:#24292E'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle;color:#24292E'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>通过容器，可以使用容器中的对象（容器已经创建了对象，
     对象属性已赋值， 对象也组装完成），使用时只需要提供对应的对象名称</span></li>
</ul>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt;
color:#24292E'>&nbsp;</p>

<p style='font-family:"Comic Sans MS";font-size:12.0pt'>&nbsp;</p>

<p><cite style='font-size:12.0pt'><span style='font-family:"Microsoft YaHei UI"'>来自</span><span
style='font-family:"Comic Sans MS"'> &lt;</span><a
href="https://docs.spring.io/spring-framework/docs/3.2.x/spring-framework-reference/html/beans.html"><span
style='font-family:"Comic Sans MS"'>https://docs.spring.io/spring-framework/docs/3.2.x/spring-framework-reference/html/beans.html</span></a><span
style='font-family:"Comic Sans MS"'>&gt; </span></cite></p>

</div>

</div>

</div>

<!--EndFragment-->
</body>
