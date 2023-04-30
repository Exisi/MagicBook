---
categories:
  - Spring
tags:
  - ‹bean›
date:
  - 2022-11-28 7:39:45
---

<body lang=zh-CN style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>
<!--StartFragment-->

<div style='direction:ltr;border-width:100%'>

<div style='direction:ltr;margin-top:0in;margin-left:0in;width:9.0777in'>

<div style='direction:ltr;margin-top:0in;margin-left:0in;width:9.0777in'>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>Spring IoC </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>容器管理一个或多个</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> bean</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>。在容器本身内，这些</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> bean </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>定义表示为</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> BeanDefinition </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>对象</span></li>
</ul>

<p style='font-family:"Comic Sans MS";font-size:12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>在</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN> Spring </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>中，构成应用程序主干并由</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN> Spring
     IoC </span><span style='font-family:"Microsoft YaHei UI";font-size:12.0pt'
     lang=zh-CN>容器管理的对象称为</span><span style='font-family:"Comic Sans MS";
     font-size:12.0pt' lang=zh-CN> bean</span><span style='font-family:"Microsoft YaHei UI";
     font-size:12.0pt' lang=zh-CN>。</span><span style='font-family:"Comic Sans MS";
     font-size:12.0pt' lang=zh-CN> Bean </span><span style='font-family:"Microsoft YaHei UI";
     font-size:12.0pt' lang=zh-CN>是由</span><span style='font-family:"Comic Sans MS";
     font-size:12.0pt' lang=zh-CN> Spring IoC </span><span style='font-family:
     "Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>容器实例化，组装和以其他方式管理的对象。</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>Bean </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>及其之间的依赖关系反映在容器使用的配置元数据（</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US>xml</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>配置）中。</span></li>
</ul>

<p style='font-family:"Comic Sans MS";font-size:12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US>&lt;bean&gt;
     </span><span style='font-family:"Microsoft YaHei UI";font-size:12.0pt'
     lang=zh-CN>包含了以下参数：</span></li>
</ul>

<div style='direction:ltr'>

<table border=1 cellpadding=0 cellspacing=0 valign=top style='direction:ltr;
 border-collapse:collapse;border-style:solid;border-color:#A3A3A3;border-width:
 1pt;margin-left:.3333in' title="" summary="">
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:black;vertical-align:top;width:1.6388in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt;
  color:white'><span style='font-weight:bold'>参数</span></p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:black;vertical-align:top;width:6.9756in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt;
  color:white'><span style='font-weight:bold'>描述</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:1.6388in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>id</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:6.9756in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt'><span style='font-family:"Comic Sans MS"'>id</span><span
  style='font-family:"Microsoft YaHei UI"'>是</span><span style='font-family:
  "Comic Sans MS"'>bean</span><span style='font-family:"Microsoft YaHei UI"'>的唯一标识符，在</span><span
  style='font-family:"Comic Sans MS"'>spring</span><span style='font-family:
  "Microsoft YaHei UI"'>容器中不可能同时存在两个相同的</span><span style='font-family:"Comic Sans MS"'>id</span><span
  style='font-family:"Microsoft YaHei UI"'>；</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:1.6388in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>class</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:6.9756in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt'><span style='font-family:"Microsoft YaHei UI"'>类的全限定名（包名</span><span
  style='font-family:"Comic Sans MS"'>+</span><span style='font-family:"Microsoft YaHei UI"'>类名），用</span><span
  style='font-family:"Comic Sans MS"'>“.”</span><span style='font-family:"Microsoft YaHei UI"'>号连接；</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:1.6388in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>name</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:6.9756in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt'><span style='font-family:"Microsoft YaHei UI"'>别名（</span><span
  style='font-family:"Comic Sans MS"'>alias</span><span style='font-family:
  "Microsoft YaHei UI"'>），用法：</span><span style='font-family:"Comic Sans MS"'>getBean(&quot;name&quot;)</span><span
  style='font-family:"Microsoft YaHei UI"'>，支持设置多个别名，之间用英文逗号分割</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:1.6388in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>abstract</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:6.9756in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt'><span style='font-family:"Microsoft YaHei UI"'>设置</span><span
  style='font-family:"Comic Sans MS"'>bean</span><span style='font-family:"Microsoft YaHei UI"'>是否为抽象类，默认</span><span
  style='font-family:"Comic Sans MS"'>abstract=&quot;false&quot;,</span><span
  style='font-family:"Microsoft YaHei UI"'>如果设为</span><span style='font-family:
  "Comic Sans MS"'>true</span><span style='font-family:"Microsoft YaHei UI"'>，将不能被实例化</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:1.6583in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>autowire-candidate</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:6.9562in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt'><span style='font-family:"Microsoft YaHei UI"'>默认为</span><span
  style='font-family:"Comic Sans MS"'>true</span><span style='font-family:"Microsoft YaHei UI"'>，如果为</span><span
  style='font-family:"Comic Sans MS"'>false</span><span style='font-family:
  "Microsoft YaHei UI"'>，那么该</span><span style='font-family:"Comic Sans MS"'>bean</span><span
  style='font-family:"Microsoft YaHei UI"'>不能作为其他</span><span style='font-family:
  "Comic Sans MS"'>bean</span><span style='font-family:"Microsoft YaHei UI"'>自动装配的候选者</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:1.6388in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>autowire</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:6.9756in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt'>引用数据类型的自动装配</p>
  <div style='direction:ltr'>
  <table border=1 cellpadding=0 cellspacing=0 valign=top style='direction:ltr;
   border-collapse:collapse;border-style:solid;border-color:#A3A3A3;border-width:
   1pt' title="" summary="">
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:black;vertical-align:top;width:1.1687in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt;
    color:white'><span style='font-weight:bold'>属性值</span></p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:black;vertical-align:top;width:4.9979in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt;
    color:white'><span style='font-weight:bold'>描述</span></p>
    </td>
   </tr>
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:white;vertical-align:top;width:1.1687in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:11.5pt'>default</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:white;vertical-align:top;width:4.9979in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-size:11.5pt'><span style='font-family:"Microsoft YaHei UI"'>默认，采用父级标签</span><span
    style='font-family:"Comic Sans MS"'>beans</span><span style='font-family:
    "Microsoft YaHei UI"'>中的</span><span style='font-family:"Comic Sans MS"'>default-autowire</span><span
    style='font-family:"Microsoft YaHei UI"'>属性</span></p>
    </td>
   </tr>
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:#E7E6E6;vertical-align:top;width:1.1687in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:11.5pt'>byName</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:#E7E6E6;vertical-align:top;width:5.0666in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-size:11.5pt'><span style='font-family:"Microsoft YaHei UI"'>通过属性名称来自动装配，即</span><span
    style='font-family:"Comic Sans MS"'>A</span><span style='font-family:"Microsoft YaHei UI"'>类中的</span><span
    style='font-family:"Comic Sans MS"'>B</span><span style='font-family:"Microsoft YaHei UI"'>对象名称为</span><span
    style='font-family:"Comic Sans MS"'>name</span><span style='font-family:
    "Microsoft YaHei UI"'>，那么将根据</span><span style='font-family:"Comic Sans MS"'>id=&quot;name&quot;</span><span
    style='font-family:"Microsoft YaHei UI"'>找到该</span><span style='font-family:
    "Comic Sans MS"'>bean</span><span style='font-family:"Microsoft YaHei UI"'>进行装配，</span><span
    style='font-family:"Comic Sans MS"'>A</span><span style='font-family:"Microsoft YaHei UI"'>类必须提供</span><span
    style='font-family:"Comic Sans MS"'>setName</span><span style='font-family:
    "Microsoft YaHei UI"'>方法；</span></p>
    </td>
   </tr>
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:white;vertical-align:top;width:1.1687in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:11.5pt'>byType</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:white;vertical-align:top;width:5.0291in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-size:11.5pt'><span style='font-family:"Microsoft YaHei UI"'>根据属性类型来找到和配置文件中配置的</span><span
    style='font-family:"Comic Sans MS"'>class</span><span style='font-family:
    "Microsoft YaHei UI"'>类型一致的</span><span style='font-family:"Comic Sans MS"'>bean</span><span
    style='font-family:"Microsoft YaHei UI"'>来自动装配，如果找到多个类型一致的</span><span
    style='font-family:"Comic Sans MS"'>bean</span><span style='font-family:
    "Microsoft YaHei UI"'>，则抛异常，如果一个都没有找到，则不执行装配操作，也不抛出异常。</span></p>
    </td>
   </tr>
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:#E7E6E6;vertical-align:top;width:1.1687in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:11.5pt'>no</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:#E7E6E6;vertical-align:top;width:4.9979in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-size:11.5pt'><span style='font-family:"Microsoft YaHei UI"'>不执行自动装配操作，只能用</span><span
    style='font-family:"Comic Sans MS"'>&lt;ref</span><span style='font-family:
    "Microsoft YaHei UI"'>标签进行装配；</span></p>
    </td>
   </tr>
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:white;vertical-align:top;width:1.1687in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:11.5pt'>constructor</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:white;vertical-align:top;width:4.9979in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-size:11.5pt'><span style='font-family:"Microsoft YaHei UI"'>根据构造器中参数类型来自动装配，如果找到多个类型一致的</span><span
    style='font-family:"Comic Sans MS"'>bean</span><span style='font-family:
    "Microsoft YaHei UI"'>，则抛异常，如果一个都没有找到，则不执行装配操作，但是抛出异常（这是和</span><span
    style='font-family:"Comic Sans MS"'>byType</span><span style='font-family:
    "Microsoft YaHei UI"'>不一样的地方）。</span></p>
    </td>
   </tr>
  </table>
  </div>
  <p style='margin-left:.375in;font-family:"Comic Sans MS";
  font-size:11.5pt'>&nbsp;</p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:1.6388in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>depends-on</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:6.9756in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt'><span style='font-family:"Microsoft YaHei UI"'>它的作用是一个</span><span
  style='font-family:"Comic Sans MS"'>bean</span><span style='font-family:"Microsoft YaHei UI"'>实例化的过程需要依赖于另一个</span><span
  style='font-family:"Comic Sans MS"'>bean</span><span style='font-family:"Microsoft YaHei UI"'>的初始化，也就是说被依赖的</span><span
  style='font-family:"Comic Sans MS"'>bean</span><span style='font-family:"Microsoft YaHei UI"'>将会在需要依赖的</span><span
  style='font-family:"Comic Sans MS"'>bean</span><span style='font-family:"Microsoft YaHei UI"'>初始化之前加载。多个依赖</span><span
  style='font-family:"Comic Sans MS"'>bean</span><span style='font-family:"Microsoft YaHei UI"'>之间用</span><span
  style='font-family:"Comic Sans MS"'>&quot;,&quot;</span><span
  style='font-family:"Microsoft YaHei UI"'>号分割；</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:1.6388in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>destroy-method</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:6.9756in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt'><span style='font-family:"Microsoft YaHei UI"'>它的作用是在销毁</span><span
  style='font-family:"Comic Sans MS"'>bean</span><span style='font-family:"Microsoft YaHei UI"'>之前可以执行指定的方法。注意：必须满足</span><span
  style='font-family:"Comic Sans MS"'>scope=&quot;singleton&quot;</span><span
  style='font-family:"Microsoft YaHei UI"'>，并且</span><span style='font-family:
  "Comic Sans MS"'>destroy</span><span style='font-family:"Microsoft YaHei UI"'>方法参数个数不能超过</span><span
  style='font-family:"Comic Sans MS"'>1</span><span style='font-family:"Microsoft YaHei UI"'>，并且参数类型只能为</span><span
  style='font-family:"Comic Sans MS"'>boolean</span><span style='font-family:
  "Microsoft YaHei UI"'>。</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:1.6388in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>init-method</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:6.9756in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt'><span style='font-family:"Microsoft YaHei UI"'>它的作用是在创建一个</span><span
  style='font-family:"Comic Sans MS"'>bean</span><span style='font-family:"Microsoft YaHei UI"'>之后调用该方法，初始化方法必须是一个无参方法。</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:1.6388in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>factory-bean</p>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>factory-method</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:6.9756in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt'><span style='font-family:"Microsoft YaHei UI"'>设置了</span><span
  style='font-family:"Comic Sans MS"'>factory-bean</span><span
  style='font-family:"Microsoft YaHei UI"'>属性后，将指定创建</span><span
  style='font-family:"Comic Sans MS"'>bean</span><span style='font-family:"Microsoft YaHei UI"'>的工厂类对象，</span><span
  style='font-family:"Comic Sans MS"'>class</span><span style='font-family:
  "Microsoft YaHei UI"'>属性将失效</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:1.6388in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>lazy-init</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:6.9756in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt'><span style='font-family:"Microsoft YaHei UI"'>设置</span><span
  style='font-family:"Comic Sans MS"'>bean</span><span style='font-family:"Microsoft YaHei UI"'>对象是否懒加载，如果设为</span><span
  style='font-family:"Comic Sans MS"'>true</span><span style='font-family:"Microsoft YaHei UI"'>，则应用第一次用到</span><span
  style='font-family:"Comic Sans MS"'>bean</span><span style='font-family:"Microsoft YaHei UI"'>时才实例化对象，否则在初始化</span><span
  style='font-family:"Comic Sans MS"'>spring</span><span style='font-family:
  "Microsoft YaHei UI"'>容器时加载单例</span><span style='font-family:"Comic Sans MS"'>bean</span><span
  style='font-family:"Microsoft YaHei UI"'>对象。（非单例不实例化）</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:1.6388in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>parent</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:6.9756in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt'><span style='font-family:"Microsoft YaHei UI"'>指定</span><span
  style='font-family:"Comic Sans MS"'>bean</span><span style='font-family:"Microsoft YaHei UI"'>的父类，</span><span
  style='font-family:"Comic Sans MS"'>class</span><span style='font-family:
  "Microsoft YaHei UI"'>属性失效。</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:1.6388in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>primary</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:6.9756in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt'><span style='font-family:"Microsoft YaHei UI"'>当一个</span><span
  style='font-family:"Comic Sans MS"'>bean</span><span style='font-family:"Microsoft YaHei UI"'>出现多个候选者时，设置</span><span
  style='font-family:"Comic Sans MS"'>primary=&quot;true&quot;</span><span
  style='font-family:"Microsoft YaHei UI"'>后，则优先使用该</span><span
  style='font-family:"Comic Sans MS"'>bean</span><span style='font-family:"Microsoft YaHei UI"'>来自动装配。</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:1.6388in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>scope</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:7.1076in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt'><span style='font-family:"Comic Sans MS"'>bean</span><span
  style='font-family:"Microsoft YaHei UI"'>的作用范围</span></p>
  <div style='direction:ltr'>
  <table border=1 cellpadding=0 cellspacing=0 valign=top style='direction:ltr;
   border-collapse:collapse;border-style:solid;border-color:#A3A3A3;border-width:
   1pt' title="" summary="">
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:black;vertical-align:top;width:1.0659in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Microsoft YaHei UI";font-size:10.5pt;
    color:white'><span style='font-weight:bold'>作用域</span></p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:black;vertical-align:top;width:5.859in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Microsoft YaHei UI";font-size:10.5pt;
    color:white'><span style='font-weight:bold'>描述</span></p>
    </td>
   </tr>
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:white;vertical-align:top;width:1.0659in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>singleton</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:white;vertical-align:top;width:5.859in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-size:10.5pt'><span style='font-family:"Microsoft YaHei UI"'>默认作用域。该作用域下的</span><span
    style='font-family:"Comic Sans MS"'> Bean </span><span style='font-family:
    "Microsoft YaHei UI"'>在</span><span style='font-family:"Comic Sans MS"'>
    IoC </span><span style='font-family:"Microsoft YaHei UI"'>容器中只会存在一个共享的</span><span
    style='font-family:"Comic Sans MS"'> bean </span><span style='font-family:
    "Microsoft YaHei UI"'>实例，并且所有对</span><span style='font-family:"Comic Sans MS"'>
    bean </span><span style='font-family:"Microsoft YaHei UI"'>的请求，只要</span><span
    style='font-family:"Comic Sans MS"'> id </span><span style='font-family:
    "Microsoft YaHei UI"'>与该</span><span style='font-family:"Comic Sans MS"'>
    bean </span><span style='font-family:"Microsoft YaHei UI"'>定义相匹配，则只会返回</span><span
    style='font-family:"Comic Sans MS"'> bean </span><span style='font-family:
    "Microsoft YaHei UI"'>的同一实例。</span></p>
    </td>
   </tr>
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:#E7E6E6;vertical-align:top;width:1.0659in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>prototype</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:#E7E6E6;vertical-align:top;width:5.859in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-size:10.5pt'><span style='font-family:"Microsoft YaHei UI"'>每次对该作用域下的</span><span
    style='font-family:"Comic Sans MS"'> Bean </span><span style='font-family:
    "Microsoft YaHei UI"'>的请求都会创建新的实例，并返回</span><span style='font-family:"Comic Sans MS"'>
    bean </span><span style='font-family:"Microsoft YaHei UI"'>的不同实例。</span></p>
    </td>
   </tr>
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:white;vertical-align:top;width:1.0659in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>request</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:white;vertical-align:top;width:5.8652in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-size:10.5pt'><span style='font-family:"Microsoft YaHei UI"'>对于每次</span><span
    style='font-family:"Comic Sans MS"'>HTTP</span><span style='font-family:
    "Microsoft YaHei UI"'>请求，使用</span><span style='font-family:"Comic Sans MS"'>request</span><span
    style='font-family:"Microsoft YaHei UI"'>定义的</span><span style='font-family:
    "Comic Sans MS"'>Bean</span><span style='font-family:"Microsoft YaHei UI"'>都将产生一个新实例，即每次</span><span
    style='font-family:"Comic Sans MS"'>HTTP</span><span style='font-family:
    "Microsoft YaHei UI"'>请求将会产生不同的</span><span style='font-family:"Comic Sans MS"'>Bean</span><span
    style='font-family:"Microsoft YaHei UI"'>实例。</span></p>
    <p style='font-size:10.5pt'><span style='font-family:"Microsoft YaHei UI"'>该作用域仅适用于</span><span
    style='font-family:"Comic Sans MS"'>WebApplicationContext</span><span
    style='font-family:"Microsoft YaHei UI"'>环境</span></p>
    </td>
   </tr>
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:#E7E6E6;vertical-align:top;width:1.0659in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>session</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:#E7E6E6;vertical-align:top;width:5.9284in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-size:10.5pt'><span style='font-family:"Microsoft YaHei UI"'>在一次</span><span
    style='font-family:"Comic Sans MS"'> Http Session </span><span
    style='font-family:"Microsoft YaHei UI"'>中，容器会返回该</span><span
    style='font-family:"Comic Sans MS"'> Bean </span><span style='font-family:
    "Microsoft YaHei UI"'>的同一实例。而对不同的</span><span style='font-family:"Comic Sans MS"'>
    Session </span><span style='font-family:"Microsoft YaHei UI"'>请求则会创建新的实例，该</span><span
    style='font-family:"Comic Sans MS"'> bean </span><span style='font-family:
    "Microsoft YaHei UI"'>实例仅在当前</span><span style='font-family:"Comic Sans MS"'>
    Session </span><span style='font-family:"Microsoft YaHei UI"'>内有效。同</span><span
    style='font-family:"Comic Sans MS"'> Http </span><span style='font-family:
    "Microsoft YaHei UI"'>请求相同，每一次</span><span style='font-family:"Comic Sans MS"'>
    session </span><span style='font-family:"Microsoft YaHei UI"'>请求创建新的实例，而不同的实例之间不共享属性，且实例仅在自己的</span><span
    style='font-family:"Comic Sans MS"'> session </span><span style='font-family:
    "Microsoft YaHei UI"'>请求内有效，请求结束，则实例将被销毁。</span></p>
    <p style='font-size:10.5pt'><span style='font-family:"Microsoft YaHei UI"'>该作用域仅适用于</span><span
    style='font-family:"Comic Sans MS"'>WebApplicationContext</span><span
    style='font-family:"Microsoft YaHei UI"'>环境</span></p>
    </td>
   </tr>
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:white;vertical-align:top;width:1.0659in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>application</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:white;vertical-align:top;width:5.859in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-size:10.5pt'><span style='font-family:"Microsoft YaHei UI"'>在一个</span><span
    style='font-family:"Comic Sans MS"'> Http Servlet Context </span><span
    style='font-family:"Microsoft YaHei UI"'>中，定义一个</span><span
    style='font-family:"Comic Sans MS"'> Bean </span><span style='font-family:
    "Microsoft YaHei UI"'>实例。</span></p>
    <p style='font-size:10.5pt'><span style='font-family:"Microsoft YaHei UI"'>该作用域仅适用于</span><span
    style='font-family:"Comic Sans MS"'>WebApplicationContext</span><span
    style='font-family:"Microsoft YaHei UI"'>环境</span></p>
    </td>
   </tr>
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:#E7E6E6;vertical-align:top;width:1.0659in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>websocket</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:#E7E6E6;vertical-align:top;width:5.859in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-size:10.5pt'><span style='font-family:"Microsoft YaHei UI"'>在一个</span><span
    style='font-family:"Comic Sans MS"'>HTTP WebSocket</span><span
    style='font-family:"Microsoft YaHei UI"'>的生命周期中，定义一个</span><span
    style='font-family:"Comic Sans MS"'>Bean</span><span style='font-family:
    "Microsoft YaHei UI"'>实例</span></p>
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

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle;color:#ED7D31'
     lang=en-US><span style='font-family:"Comic Sans MS";font-size:12.0pt'>application.xml</span></li>
</ul>

<div style='direction:ltr'>

<table border=0 cellpadding=0 cellspacing=0 valign=top style='direction:ltr;
 border-collapse:collapse;border-style:solid;border-color:#A3A3A3;border-width:
 0pt;margin-left:.7083in' title="" summary="">
 <tr>
  <td style='border-width:0pt;background-color:white;vertical-align:top;
  width:7.3618in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
  style='font-family:"Comic Sans MS";color:blue'>&lt;?xml</span><span
  style='font-family:"Microsoft YaHei UI";color:blue'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:blue'>version</span><span
  style='font-family:"Comic Sans MS";color:black'>=</span><span
  style='font-family:"Comic Sans MS";color:maroon'>&quot;1.0&quot;</span><span
  style='font-family:"Microsoft YaHei UI";color:blue'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:blue'>encoding</span><span
  style='font-family:"Comic Sans MS";color:black'>=</span><span
  style='font-family:"Comic Sans MS";color:maroon'>&quot;UTF-8&quot;</span><span
  style='font-family:"Comic Sans MS";color:blue'>?&gt;</span></p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
  style='font-family:"Comic Sans MS";color:blue'>&lt;beans</span><span
  style='font-family:"Microsoft YaHei UI";color:blue'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:blue'>xmlns</span><span
  style='font-family:"Comic Sans MS";color:black'>=</span><span
  style='font-family:"Comic Sans MS";color:maroon'>&quot;http://www.springframework.org/schema/beans&quot;</span></p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
  style='font-family:"Microsoft YaHei UI";color:blue'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:blue'>xmlns:xsi</span><span
  style='font-family:"Comic Sans MS";color:black'>=</span><span
  style='font-family:"Comic Sans MS";color:maroon'>&quot;http://www.w3.org/2001/XMLSchema-instance&quot;</span></p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
  style='font-family:"Microsoft YaHei UI";color:blue'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:blue'>xsi:schemaLocation</span><span
  style='font-family:"Comic Sans MS";color:black'>=</span><span
  style='font-family:"Comic Sans MS";color:maroon'>&quot;http://www.springframework.org/schema/beans</span><span
  style='font-family:"Microsoft YaHei UI";color:maroon'>&nbsp;</span></p>
  <p style='margin-left:.375in;margin-top:5pt;margin-bottom:5pt;font-family:
  "Comic Sans MS";font-size:12.0pt'><a
  href="http://www.springframework.org/schema/beans/spring-beans.xsd"><span
  style='color:maroon'>http://www.springframework.org/schema/beans/spring-beans.xsd</span></a><span
  style='color:maroon'>&quot;</span><span style='color:blue'>&gt;</span></p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-family:"Comic Sans MS";
  font-size:12.0pt'>&nbsp;</p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
  style='font-family:"Microsoft YaHei UI";color:black' lang=zh-CN>&nbsp;&nbsp;&nbsp;&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:blue' lang=zh-CN>&lt;bean</span><span
  style='font-family:"Microsoft YaHei UI";color:blue' lang=zh-CN>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:blue' lang=zh-CN>id</span><span
  style='font-family:"Comic Sans MS";color:black' lang=zh-CN>=</span><span
  style='font-family:"Comic Sans MS";color:maroon' lang=zh-CN>&quot;userService&quot;</span><span
  style='font-family:"Microsoft YaHei UI";color:blue' lang=zh-CN>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:blue' lang=zh-CN>class</span><span
  style='font-family:"Comic Sans MS";color:black' lang=zh-CN>=</span><span
  style='font-family:"Comic Sans MS";color:maroon' lang=zh-CN>&quot;com.exi.service.impl.UserServiceImpl&quot;</span><span
  style='font-family:"Comic Sans MS";color:maroon' lang=en-US> </span><span
  style='font-family:"Comic Sans MS";color:blue' lang=zh-CN>s</span><span
  style='font-family:"Comic Sans MS";color:blue' lang=en-US>cope</span><span
  style='font-family:"Comic Sans MS";color:black' lang=zh-CN>=</span><span
  style='font-family:"Comic Sans MS";color:maroon' lang=zh-CN>&quot;singleton&quot;</span><span
  style='font-family:"Microsoft YaHei UI";color:blue' lang=zh-CN>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:blue' lang=zh-CN>/&gt;</span></p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-family:"Comic Sans MS";
  font-size:12.0pt'>&nbsp;</p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;&nbsp;&nbsp;&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:green'>&lt;!--</span><span
  style='font-family:"Microsoft YaHei UI";color:green'>创建非自定义对象</span><span
  style='font-family:"Comic Sans MS";color:green'>--&gt;</span></p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;&nbsp;&nbsp;&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:blue'>&lt;bean</span><span
  style='font-family:"Microsoft YaHei UI";color:blue'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:blue'>id</span><span
  style='font-family:"Comic Sans MS";color:black'>=</span><span
  style='font-family:"Comic Sans MS";color:maroon'>&quot;mydate&quot;</span><span
  style='font-family:"Microsoft YaHei UI";color:blue'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:blue'>class</span><span
  style='font-family:"Comic Sans MS";color:black'>=</span><span
  style='font-family:"Comic Sans MS";color:maroon'>&quot;java.util.Date&quot;</span><span
  style='font-family:"Microsoft YaHei UI";color:blue'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:blue'>/&gt;</span></p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-family:"Comic Sans MS";
  font-size:12.0pt'>&nbsp;</p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-family:"Comic Sans MS";
  font-size:12.0pt;color:blue'>&lt;/beans&gt;</p>
  </td>
 </tr>
</table>

</div>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#ED7D31' lang=en-US>&nbsp;</p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#ED7D31' lang=en-US>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle;color:#ED7D31'
     lang=en-US><span style='font-family:"Comic Sans MS";font-size:12.0pt'>UserService.java</span></li>
</ul>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'><span lang=zh-CN>public interface </span><span lang=en-US>User</span><span
lang=zh-CN>Service {</span></p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'><span lang=zh-CN><span style='mso-spacerun:yes'>    </span>void </span><span
lang=en-US>hello</span><span lang=zh-CN>();</span></p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'>}</p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle;color:#ED7D31'
     lang=en-US><span style='font-family:"Comic Sans MS";font-size:12.0pt'>UserServiceImpl.java</span></li>
</ul>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'><span lang=zh-CN>public class </span><span lang=en-US>User</span><span
lang=zh-CN>ServiceImpl implements </span><span lang=en-US>User</span><span
lang=zh-CN>Service {</span></p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='mso-spacerun:yes'>    </span>@Override</p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'><span lang=zh-CN><span style='mso-spacerun:yes'>    </span>public void </span><span
lang=en-US>hello</span><span lang=zh-CN>() {</span></p>

<p style='margin-left:.75in;font-size:12.0pt'><span
style='font-family:"Comic Sans MS"' lang=zh-CN><span
style='mso-spacerun:yes'>        </span>System.out.println(&quot;</span><span
style='font-family:"Microsoft YaHei UI"' lang=zh-CN>执行了方法</span><span
style='font-family:"Comic Sans MS"' lang=en-US>hello</span><span
style='font-family:"Comic Sans MS"' lang=zh-CN>()&quot;);</span></p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='mso-spacerun:yes'>    </span>}</p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'>}</p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle;color:#ED7D31'
     lang=en-US><span style='font-family:"Comic Sans MS";font-size:12.0pt'>ServiceTest.java</span></li>
</ul>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#FFC000'>@Test</p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#000088'>public class </span><span style='color:
#660066'>BeanTest</span><span style='color:#666600'>{</span><span
style='color:black'><br>
<span style='mso-spacerun:yes'>    </span></span><span style='color:#000088'>public
static void</span><span style='color:black'> main</span><span style='color:
#666600'>(</span><span style='color:#660066'>String</span><span
style='color:black'> args</span><span style='color:#666600'>[]) </span><span
style='color:#000088'>throws </span><span style='color:#660066'>Exception</span><span
style='color:#666600'>{</span></p>

<p style='margin-left:1.125in;font-family:"Comic Sans MS";
font-size:12.0pt;color:black' lang=en-US>String config =
&quot;applicationContext.xml&quot;;</p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:black' lang=zh-CN><span
style='mso-spacerun:yes'>        </span></span><span style='color:#660066'
lang=zh-CN>ApplicationContext</span><span style='color:black' lang=zh-CN> ctx </span><span
style='color:#666600' lang=zh-CN>= </span><span style='color:#000088'
lang=zh-CN>new </span><span style='color:#660066' lang=zh-CN>ClassPathXmlApplicationContext</span><span
style='color:#666600' lang=zh-CN>(</span><span style='color:#666600'
lang=en-US>config</span><span style='color:#666600' lang=zh-CN>);</span><span
style='color:black' lang=zh-CN><br>
<span style='mso-spacerun:yes'>        </span></span><span style='color:#660066'
lang=en-US>UserService service</span><span style='color:black' lang=zh-CN> </span><span
style='color:#666600' lang=zh-CN>=</span><span style='color:black' lang=zh-CN>
ctx</span><span style='color:#666600' lang=zh-CN>.</span><span
style='color:black' lang=zh-CN>getBean</span><span style='color:#666600'
lang=zh-CN>(</span><span style='color:#008800' lang=zh-CN>&quot;</span><span
style='color:#008800' lang=en-US>userService</span><span style='color:#008800'
lang=zh-CN>&quot;</span><span style='color:#666600' lang=zh-CN>);</span><span
style='color:black' lang=zh-CN><br>
<span style='mso-spacerun:yes'>       </span></span><span style='color:black'
lang=en-US><span style='mso-spacerun:yes'> </span>service.hello();</span></p>

<p style='margin-left:1.125in;font-family:"Comic Sans MS";
font-size:12.0pt'>&nbsp;</p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt;color:black'><span style='mso-spacerun:yes'>        </span>Date date =
(Date) ctx.getBean(&quot;mydate&quot;);</p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt;color:black'><span style='mso-spacerun:yes'>       
</span>System.out.println(&quot;date===&quot;+date);</p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt;color:black'>&nbsp;</p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:black'><span style='mso-spacerun:yes'>    </span></span><span
style='color:#666600'>}</span></p>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt'><span
style='font-weight:bold'>注</span></p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>惯例是在为</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> bean </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>命名时使用标准的</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> Java </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>实例字段命名约定。也就是说，</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>bean </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>名称以小写字母开头，并且采用驼峰命名法。例如
     “</span><span style='font-family:"Comic Sans MS";font-size:12.0pt'>accountService</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>”、“</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>userDao</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>”、“</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>loginController</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>” 等。</span></li>
</ul>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>每个</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>bean</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>都有一个或多个标识符。这些标识符在承载</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>bean</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>的容器中必须是唯一的。一个</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>bean</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>通常只有一个标识符，但如果它需要多个标识符，则可以将额外的标识符视为别名。</span></li>
</ul>

<p style='font-family:"Comic Sans MS";font-size:12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>不需要为</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> bean </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>提供名称或</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> id</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>。如果没有显式提供名称或</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> id</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>，那么容器将为该</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> bean </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>生成一个唯一的名称。但是，如果想通过使用</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> ref </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>元素或</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> Service Locator </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>样式的查找来按名称引用该</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> bean</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>，则必须提供一个名称</span></li>
</ul>

<p style='font-family:"Comic Sans MS";font-size:12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>在运行时</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> (</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>与对工厂的实时访问同时</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>) </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>对新</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> bean </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>的注册不被正式支持，因为可能导致并发访问异常，</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>bean </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>容器中的状态不一致或都出现问题。</span></li>
</ul>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<p style='font-family:"Comic Sans MS";font-size:12.0pt;color:#ED7D31'
lang=en-US>&nbsp;</p>

<p style='font-size:12.0pt'><span style='font-family:"Microsoft YaHei UI"'
lang=zh-CN>来自</span><span style='font-family:"Comic Sans MS"' lang=en-US>&lt; </span><a
href="https://blog.csdn.net/ZixiangLi/article/details/87937819"><span
style='font-family:"Comic Sans MS"' lang=zh-CN>https://blog.csdn.net/ZixiangLi/article/details/87937819</span></a><span
style='font-family:"Comic Sans MS"' lang=en-US>&gt;</span></p>

</div>

</div>

</div>

<!--EndFragment-->
</body>
