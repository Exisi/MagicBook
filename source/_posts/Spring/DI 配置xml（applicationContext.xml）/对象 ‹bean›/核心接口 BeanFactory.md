---
categories:
  - Spring
tags:
  - ‹bean›
date:
  - 2022-6-28 7:40:00
---

<body lang=zh-CN style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>
<!--StartFragment-->

<div style='direction:ltr;border-width:100%'>

<div style='direction:ltr;margin-top:0in;margin-left:0in;width:9.3972in'>

<div style='direction:ltr;margin-top:0in;margin-left:0in;width:9.3972in'>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>BeanFactory </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>定义了</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> IOC </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>容器的最基本形式，并提供了</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> IOC </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>容器应遵守的的最基本的接口，它的职责包括：实例化、定位、配置应用程序中的对象及建立这些对象间的依赖。</span></li>
</ul>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>BeanFactory
     </span><span style='font-family:"Microsoft YaHei UI";font-size:12.0pt'
     lang=zh-CN>会在</span><span style='font-family:"Comic Sans MS";font-size:
     12.0pt' lang=zh-CN> bean </span><span style='font-family:"Microsoft YaHei UI";
     font-size:12.0pt' lang=zh-CN>的生命周期的各个阶段中对</span><span style='font-family:
     "Comic Sans MS";font-size:12.0pt' lang=zh-CN> bean </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>进行各种管理，并且
     </span><span style='font-family:"Comic Sans MS";font-size:12.0pt'
     lang=en-US>S</span><span style='font-family:"Comic Sans MS";font-size:
     12.0pt' lang=zh-CN>pring </span><span style='font-family:"Microsoft YaHei UI";
     font-size:12.0pt' lang=zh-CN>将这些阶段通过各种接口暴露给我们，让我们可以对</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN> bean </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>进行各种处理，我们只要让</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN> bean </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>实现对应的接口，</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US>S</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>pring </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>就会在</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN> bean </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>的生命周期调用实现的接口来处理该</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN> bean.</span></li>
</ul>

<p style='font-family:"Comic Sans MS";font-size:12.0pt'>&nbsp;</p>

<div style='direction:ltr'>

<table border=1 cellpadding=0 cellspacing=0 valign=top style='direction:ltr;
 border-collapse:collapse;border-style:solid;border-color:#A3A3A3;border-width:
 1pt;margin-left:.3333in' title="" summary="">
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:black;vertical-align:top;width:4.5006in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt;
  color:white'><span style='font-weight:bold'>方法</span></p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:black;vertical-align:top;width:4.4333in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt;
  color:white'><span style='font-weight:bold'>说明</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:4.5006in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt;color:#111111'>getBean(String
  name)</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:4.4479in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt'><span style='font-family:"Microsoft YaHei UI"'>返回给定名称注册的</span><span
  style='font-family:"Comic Sans MS"'> bean </span><span style='font-family:
  "Microsoft YaHei UI"'>实例。</span></p>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>&nbsp;</p>
  <p style='font-size:11.5pt'><span style='font-family:"Microsoft YaHei UI"'>该方法会根据传入的名称查找对应的</span><span
  style='font-family:"Comic Sans MS"'> Bean </span><span style='font-family:
  "Microsoft YaHei UI"'>定义，并且根据定义创建一个新的</span><span style='font-family:"Comic Sans MS"'>
  Bean </span><span style='font-family:"Microsoft YaHei UI"'>实例</span></p>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>&nbsp;</p>
  <p style='font-size:11.5pt'><span style='font-family:"Microsoft YaHei UI"'>根据</span><span
  style='font-family:"Comic Sans MS"'> bean </span><span style='font-family:
  "Microsoft YaHei UI"'>的配置情况，如果是</span><span style='font-family:"Comic Sans MS"'>
  singleton </span><span style='font-family:"Microsoft YaHei UI"'>模式将返回一个共享实例，否则将返回一个新建的实例，如果没有找到指定</span><span
  style='font-family:"Comic Sans MS"'> bean, </span><span style='font-family:
  "Microsoft YaHei UI"'>该方法可能会抛出异常</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:4.5006in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt;color:#111111'>getBean(String
  name, Class&lt;T&gt; requiredType)</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:4.4479in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt'><span style='font-family:"Microsoft YaHei UI"'>返回以给定名称注册的</span><span
  style='font-family:"Comic Sans MS"'> bean </span><span style='font-family:
  "Microsoft YaHei UI"'>实例，并转换为给定</span><span style='font-family:"Comic Sans MS"'>
  class </span><span style='font-family:"Microsoft YaHei UI"'>类型</span></p>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>&nbsp;</p>
  <p style='font-size:11.5pt'><span style='font-family:"Microsoft YaHei UI"'>该方法会根据传入的名称查找对应的</span><span
  style='font-family:"Comic Sans MS"'> Bean </span><span style='font-family:
  "Microsoft YaHei UI"'>定义，并且根据定义创建一个新的</span><span style='font-family:"Comic Sans MS"'>
  Bean </span><span style='font-family:"Microsoft YaHei UI"'>实例</span></p>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>&nbsp;</p>
  <p style='font-size:11.5pt'><span style='font-family:"Microsoft YaHei UI"'>根据</span><span
  style='font-family:"Comic Sans MS"'> bean </span><span style='font-family:
  "Microsoft YaHei UI"'>的配置情况，如果是</span><span style='font-family:"Comic Sans MS"'>
  singleton </span><span style='font-family:"Microsoft YaHei UI"'>模式将返回一个共享实例，否则将返回一个新建的实例，如果没有找到指定</span><span
  style='font-family:"Comic Sans MS"'> bean, </span><span style='font-family:
  "Microsoft YaHei UI"'>该方法可能会抛出异常</span></p>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>&nbsp;</p>
  <p style='font-size:11.5pt'><span style='font-family:"Microsoft YaHei UI"'>其中</span><span
  style='font-family:"Comic Sans MS"'> requiredType </span><span
  style='font-family:"Microsoft YaHei UI"'>表示要获取的</span><span style='font-family:
  "Comic Sans MS"'> Bean </span><span style='font-family:"Microsoft YaHei UI"'>的类型。</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:4.5006in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt;color:#111111'>getBean(String
  name, Object... args)</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:4.4812in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt'><span style='font-family:"Microsoft YaHei UI"'>返回给定名称注册的</span><span
  style='font-family:"Comic Sans MS"'> bean </span><span style='font-family:
  "Microsoft YaHei UI"'>实例，并且可以传入参数。</span></p>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>&nbsp;</p>
  <p style='font-size:11.5pt'><span style='font-family:"Microsoft YaHei UI"'>根据</span><span
  style='font-family:"Comic Sans MS"'> bean </span><span style='font-family:
  "Microsoft YaHei UI"'>的配置情况，如果是</span><span style='font-family:"Comic Sans MS"'>
  singleton </span><span style='font-family:"Microsoft YaHei UI"'>模式将返回一个共享实例，否则将返回一个新建的实例，如果没有找到指定</span><span
  style='font-family:"Comic Sans MS"'> bean, </span><span style='font-family:
  "Microsoft YaHei UI"'>该方法可能会抛出异常</span></p>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>&nbsp;</p>
  <p style='margin-top:6pt;margin-bottom:6pt;font-size:11.5pt'><span
  style='font-family:"Microsoft YaHei UI"'>该方法会根据传入的名称查找对应的</span><span
  style='font-family:"Comic Sans MS"'> Bean </span><span style='font-family:
  "Microsoft YaHei UI"'>定义，并且根据定义创建一个新的</span><span style='font-family:"Comic Sans MS"'>
  Bean </span><span style='font-family:"Microsoft YaHei UI"'>实例。如果该</span><span
  style='font-family:"Comic Sans MS"'> Bean </span><span style='font-family:
  "Microsoft YaHei UI"'>定义中有构造函数参数，则可以通过</span><span style='font-family:"Comic Sans MS"'>
  args </span><span style='font-family:"Microsoft YaHei UI"'>参数来传递这些参数。</span></p>
  <p style='margin-top:6pt;margin-bottom:6pt;font-family:"Microsoft YaHei UI";
  font-size:11.5pt'><span style='font-weight:bold'>注</span></p>
  <p style='margin-top:6pt;margin-bottom:6pt;font-size:11.5pt'><span
  style='font-family:"Comic Sans MS"'>getBean(String name, Object... args) </span><span
  style='font-family:"Microsoft YaHei UI"'>方法返回的是</span><span style='font-family:
  "Comic Sans MS"'> Object </span><span style='font-family:"Microsoft YaHei UI"'>类型，需要进行类型转换才能使用</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:4.5006in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt;color:#111111'>getBean(Class&lt;T&gt;
  requiredType)</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:4.4951in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt'><span style='font-family:"Microsoft YaHei UI"'>根据指定的类型获取对应的</span><span
  style='font-family:"Comic Sans MS"'> Bean </span><span style='font-family:
  "Microsoft YaHei UI"'>实例。</span></p>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>&nbsp;</p>
  <p style='font-size:11.5pt'><span style='font-family:"Microsoft YaHei UI"'>其中，</span><span
  style='font-family:"Comic Sans MS"'>requiredType </span><span
  style='font-family:"Microsoft YaHei UI"'>参数表示要获取的</span><span
  style='font-family:"Comic Sans MS"'> Bean </span><span style='font-family:
  "Microsoft YaHei UI"'>的类型。</span></p>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>&nbsp;</p>
  <p style='font-size:11.5pt'><span style='font-family:"Microsoft YaHei UI"'>该方法会在容器中查找所有符合指定类型的</span><span
  style='font-family:"Comic Sans MS"'> Bean </span><span style='font-family:
  "Microsoft YaHei UI"'>定义，并返回第一个匹配的实例。如果找不到对应类型的</span><span style='font-family:
  "Comic Sans MS"'> Bean</span><span style='font-family:"Microsoft YaHei UI"'>，则会抛出</span><span
  style='font-family:"Comic Sans MS"'> NoSuchBeanDefinitionException </span><span
  style='font-family:"Microsoft YaHei UI"'>异常。</span></p>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt'><span
  style='font-weight:bold'>注</span></p>
  <p style='font-size:11.5pt'><span style='font-family:"Microsoft YaHei UI"'>如果容器中存在多个符合指定类型的</span><span
  style='font-family:"Comic Sans MS"'> Bean </span><span style='font-family:
  "Microsoft YaHei UI"'>定义，则该方法只会返回第一个匹配的实例</span></p>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>&nbsp;</p>
  <p style='font-size:11.5pt'><span style='font-family:"Microsoft YaHei UI"'>方法也可以接受泛型参数，例如</span><span
  style='font-family:"Comic Sans MS"'> getBean(List.class)</span><span
  style='font-family:"Microsoft YaHei UI"'>，这样就可以获取</span><span
  style='font-family:"Comic Sans MS"'> List </span><span style='font-family:
  "Microsoft YaHei UI"'>类型对应的</span><span style='font-family:"Comic Sans MS"'>
  Bean </span><span style='font-family:"Microsoft YaHei UI"'>实例。</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:4.5006in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt;color:#111111'>getBean(Class&lt;T&gt;
  requiredType, Object... args)</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:4.5027in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt'><span style='font-family:"Microsoft YaHei UI"'>根据指定的类型获取对应的</span><span
  style='font-family:"Comic Sans MS"'> Bean </span><span style='font-family:
  "Microsoft YaHei UI"'>实例，并且可以传入参数。</span></p>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>&nbsp;</p>
  <p style='font-size:11.5pt'><span style='font-family:"Microsoft YaHei UI"'>其中，</span><span
  style='font-family:"Comic Sans MS"'>requiredType </span><span
  style='font-family:"Microsoft YaHei UI"'>参数表示要获取的</span><span
  style='font-family:"Comic Sans MS"'> Bean </span><span style='font-family:
  "Microsoft YaHei UI"'>的类型。如果该</span><span style='font-family:"Comic Sans MS"'>
  Bean </span><span style='font-family:"Microsoft YaHei UI"'>定义中有构造函数参数，则可以通过</span><span
  style='font-family:"Comic Sans MS"'> args </span><span style='font-family:
  "Microsoft YaHei UI"'>参数来传递这些参数。</span></p>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>&nbsp;</p>
  <p style='font-size:11.5pt'><span style='font-family:"Microsoft YaHei UI"'>该方法会在容器中查找所有符合指定类型的</span><span
  style='font-family:"Comic Sans MS"'> Bean </span><span style='font-family:
  "Microsoft YaHei UI"'>定义，并返回第一个匹配的实例。如果找不到对应类型的</span><span style='font-family:
  "Comic Sans MS"'> Bean</span><span style='font-family:"Microsoft YaHei UI"'>，则会抛出</span><span
  style='font-family:"Comic Sans MS"'> NoSuchBeanDefinitionException </span><span
  style='font-family:"Microsoft YaHei UI"'>异常。</span></p>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt'><span
  style='font-weight:bold'>注</span></p>
  <p style='font-size:11.5pt'><span style='font-family:"Microsoft YaHei UI"'>如果容器中存在多个符合指定类型的</span><span
  style='font-family:"Comic Sans MS"'> Bean </span><span style='font-family:
  "Microsoft YaHei UI"'>定义，则该方法只会返回第一个匹配的实例</span></p>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>&nbsp;</p>
  <p style='font-size:11.5pt'><span style='font-family:"Microsoft YaHei UI"'>方法也可以接受泛型参数，例如</span><span
  style='font-family:"Comic Sans MS"'> getBean(List.class)</span><span
  style='font-family:"Microsoft YaHei UI"'>，这样就可以获取</span><span
  style='font-family:"Comic Sans MS"'> List </span><span style='font-family:
  "Microsoft YaHei UI"'>类型对应的</span><span style='font-family:"Comic Sans MS"'>
  Bean </span><span style='font-family:"Microsoft YaHei UI"'>实例。</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:4.5006in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>containsBean(String
  name)</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:4.493in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt'><span style='font-family:"Microsoft YaHei UI"'>判断工厂中是否包含给定名称的</span><span
  style='font-family:"Comic Sans MS"'> bean </span><span style='font-family:
  "Microsoft YaHei UI"'>定义，若有则返回</span><span style='font-family:"Comic Sans MS"'>
  true</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:4.5006in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>isSingleton(String
  name)</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:4.4333in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt'><span style='font-family:"Microsoft YaHei UI"'>根据</span><span
  style='font-family:"Comic Sans MS"'>bean</span><span style='font-family:"Microsoft YaHei UI"'>名字得到</span><span
  style='font-family:"Comic Sans MS"'>bean</span><span style='font-family:"Microsoft YaHei UI"'>实例，并同时判断这个</span><span
  style='font-family:"Comic Sans MS"'>bean</span><span style='font-family:"Microsoft YaHei UI"'>是不是单例</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:4.5006in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>isPrototype(String
  name)</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:4.4333in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt'><span style='font-family:"Microsoft YaHei UI"'>根据</span><span
  style='font-family:"Comic Sans MS"'>bean</span><span style='font-family:"Microsoft YaHei UI"'>名字得到</span><span
  style='font-family:"Comic Sans MS"'>bean</span><span style='font-family:"Microsoft YaHei UI"'>实例，并同时判断这个</span><span
  style='font-family:"Comic Sans MS"'>bean</span><span style='font-family:"Microsoft YaHei UI"'>是不是原型</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:4.5006in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>isTypeMatch(String
  name, ResolvableType typeToMatch)</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:4.5027in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt'><span style='font-family:"Microsoft YaHei UI"'>用于判断指定名称的</span><span
  style='font-family:"Comic Sans MS"'> Bean </span><span style='font-family:
  "Microsoft YaHei UI"'>是否与给定类型匹配。</span></p>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>&nbsp;</p>
  <p style='font-size:11.5pt'><span style='font-family:"Microsoft YaHei UI"'>其中，</span><span
  style='font-family:"Comic Sans MS"'>name </span><span style='font-family:
  "Microsoft YaHei UI"'>参数表示要判断的</span><span style='font-family:"Comic Sans MS"'>
  Bean </span><span style='font-family:"Microsoft YaHei UI"'>的名称，</span><span
  style='font-family:"Comic Sans MS"'>typeToMatch </span><span
  style='font-family:"Microsoft YaHei UI"'>参数表示要匹配的类型</span></p>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>&nbsp;</p>
  <p style='font-size:11.5pt'><span style='font-family:"Microsoft YaHei UI"'>该方法会根据传入的名称查找对应的</span><span
  style='font-family:"Comic Sans MS"'> Bean </span><span style='font-family:
  "Microsoft YaHei UI"'>定义，并获取该</span><span style='font-family:"Comic Sans MS"'>
  Bean </span><span style='font-family:"Microsoft YaHei UI"'>的类型信息。然后，它会将</span><span
  style='font-family:"Comic Sans MS"'> typeToMatch </span><span
  style='font-family:"Microsoft YaHei UI"'>参数与该类型信息进行比较，判断是否匹配。</span></p>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>&nbsp;</p>
  <p style='font-size:11.5pt'><span style='font-family:"Microsoft YaHei UI"'>如果指定名称的</span><span
  style='font-family:"Comic Sans MS"'> Bean </span><span style='font-family:
  "Microsoft YaHei UI"'>不存在，则会抛出</span><span style='font-family:"Comic Sans MS"'>
  NoSuchBeanDefinitionException </span><span style='font-family:"Microsoft YaHei UI"'>异常。如果存在对应名称的</span><span
  style='font-family:"Comic Sans MS"'> Bean </span><span style='font-family:
  "Microsoft YaHei UI"'>定义，但是无法获取其类型信息，则会抛出</span><span style='font-family:
  "Comic Sans MS"'> BeansException </span><span style='font-family:"Microsoft YaHei UI"'>异常。</span></p>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt'><span
  style='font-weight:bold'>注</span></p>
  <p style='font-size:11.5pt'><span style='font-family:"Comic Sans MS"'>isTypeMatch(String
  name, ResolvableType typeToMatch) </span><span style='font-family:"Microsoft YaHei UI"'>方法可以接受</span><span
  style='font-family:"Comic Sans MS"'> ResolvableType </span><span
  style='font-family:"Microsoft YaHei UI"'>类型参数。</span><span style='font-family:
  "Comic Sans MS"'>ResolvableType </span><span style='font-family:"Microsoft YaHei UI"'>是</span><span
  style='font-family:"Comic Sans MS"'> Spring </span><span style='font-family:
  "Microsoft YaHei UI"'>框架中用于描述泛型类型信息的类，可以通过它来获取更加精确和详细的类型信息。</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:4.5006in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'><span
  lang=zh-CN>isTypeMatch(String name,</span><span lang=en-US> </span><span
  lang=zh-CN>Class&lt;?&gt; typeToMatch)</span></p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:4.4333in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt'><span style='font-family:"Microsoft YaHei UI"'>用于判断指定名称的</span><span
  style='font-family:"Comic Sans MS"'> Bean </span><span style='font-family:
  "Microsoft YaHei UI"'>是否与给定类型匹配。</span></p>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>&nbsp;</p>
  <p style='font-size:11.5pt'><span style='font-family:"Microsoft YaHei UI"'>其中，</span><span
  style='font-family:"Comic Sans MS"'>name </span><span style='font-family:
  "Microsoft YaHei UI"'>参数表示要判断的</span><span style='font-family:"Comic Sans MS"'>
  Bean </span><span style='font-family:"Microsoft YaHei UI"'>的名称，</span><span
  style='font-family:"Comic Sans MS"'>typeToMatch </span><span
  style='font-family:"Microsoft YaHei UI"'>参数表示要匹配的类型。</span></p>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>&nbsp;</p>
  <p style='font-size:11.5pt'><span style='font-family:"Microsoft YaHei UI"'>如果指定名称的</span><span
  style='font-family:"Comic Sans MS"'> Bean </span><span style='font-family:
  "Microsoft YaHei UI"'>不存在，则会抛出</span><span style='font-family:"Comic Sans MS"'>
  NoSuchBeanDefinitionException </span><span style='font-family:"Microsoft YaHei UI"'>异常。如果存在对应名称的</span><span
  style='font-family:"Comic Sans MS"'> Bean </span><span style='font-family:
  "Microsoft YaHei UI"'>定义，但是无法获取其类型信息，则会抛出</span><span style='font-family:
  "Comic Sans MS"'> BeansException </span><span style='font-family:"Microsoft YaHei UI"'>异常。</span></p>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt'><span
  style='font-weight:bold'>注</span></p>
  <p style='font-size:11.5pt'><span style='font-family:"Comic Sans MS"'>isTypeMatch(String
  name, Class&lt;?&gt; typeToMatch) </span><span style='font-family:"Microsoft YaHei UI"'>方法可以接受</span><span
  style='font-family:"Comic Sans MS"'> Class </span><span style='font-family:
  "Microsoft YaHei UI"'>类型参数</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:4.5006in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>getType(String
  name)</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:4.4437in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt'><span style='font-family:"Microsoft YaHei UI"'>返回给定名称的</span><span
  style='font-family:"Comic Sans MS"'> bean </span><span style='font-family:
  "Microsoft YaHei UI"'>的</span><span style='font-family:"Comic Sans MS"'>
  Class, </span><span style='font-family:"Microsoft YaHei UI"'>如果没有找到指定的</span><span
  style='font-family:"Comic Sans MS"'> bean </span><span style='font-family:
  "Microsoft YaHei UI"'>实例，则排除</span><span style='font-family:"Comic Sans MS"'>
  NoSuchBeanDefinitionException </span><span style='font-family:"Microsoft YaHei UI"'>异常</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:4.5006in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'><span
  lang=zh-CN>getType(</span><span lang=en-US>S</span><span lang=zh-CN>tring
  name, boolean allowFactoryBeanInit) </span></p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:4.4854in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt'><span style='font-family:"Microsoft YaHei UI"'>用于获取指定名称的</span><span
  style='font-family:"Comic Sans MS"'> Bean </span><span style='font-family:
  "Microsoft YaHei UI"'>的类型信息。其中，</span><span style='font-family:"Comic Sans MS"'>name
  </span><span style='font-family:"Microsoft YaHei UI"'>参数表示要获取的</span><span
  style='font-family:"Comic Sans MS"'> Bean </span><span style='font-family:
  "Microsoft YaHei UI"'>的名称，</span><span style='font-family:"Comic Sans MS"'>allowFactoryBeanInit
  </span><span style='font-family:"Microsoft YaHei UI"'>参数表示是否允许初始化</span><span
  style='font-family:"Comic Sans MS"'> FactoryBean</span></p>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>&nbsp;</p>
  <p style='font-size:11.5pt'><span style='font-family:"Microsoft YaHei UI"'>该方法会根据传入的名称查找对应的</span><span
  style='font-family:"Comic Sans MS"'> Bean </span><span style='font-family:
  "Microsoft YaHei UI"'>定义，并获取该</span><span style='font-family:"Comic Sans MS"'>
  Bean </span><span style='font-family:"Microsoft YaHei UI"'>的类型信息。如果该</span><span
  style='font-family:"Comic Sans MS"'> Bean </span><span style='font-family:
  "Microsoft YaHei UI"'>是一个</span><span style='font-family:"Comic Sans MS"'>
  FactoryBean</span><span style='font-family:"Microsoft YaHei UI"'>，则根据</span><span
  style='font-family:"Comic Sans MS"'> allowFactoryBeanInit </span><span
  style='font-family:"Microsoft YaHei UI"'>参数决定是否初始化它。</span></p>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>&nbsp;</p>
  <p style='font-size:11.5pt'><span style='font-family:"Microsoft YaHei UI"'>如果指定名称的</span><span
  style='font-family:"Comic Sans MS"'> Bean </span><span style='font-family:
  "Microsoft YaHei UI"'>不存在，则会抛出</span><span style='font-family:"Comic Sans MS"'>
  NoSuchBeanDefinitionException </span><span style='font-family:"Microsoft YaHei UI"'>异常。如果存在对应名称的</span><span
  style='font-family:"Comic Sans MS"'> Bean </span><span style='font-family:
  "Microsoft YaHei UI"'>定义，但是无法获取其类型信息，则会抛出</span><span style='font-family:
  "Comic Sans MS"'> BeansException </span><span style='font-family:"Microsoft YaHei UI"'>异常。</span></p>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt'><span
  style='font-weight:bold'>注</span></p>
  <p style='font-size:11.5pt'><span style='font-family:"Comic Sans MS"'>getType(String
  name, boolean allowFactoryBeanInit) </span><span style='font-family:"Microsoft YaHei UI"'>方法返回的是</span><span
  style='font-family:"Comic Sans MS"'> Class&lt;?&gt; </span><span
  style='font-family:"Microsoft YaHei UI"'>类型，即该</span><span style='font-family:
  "Comic Sans MS"'> Bean </span><span style='font-family:"Microsoft YaHei UI"'>对应的类或接口类型。</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:white;vertical-align:top;width:4.5006in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>getAliases(String
  name)</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:white;vertical-align:top;width:4.4333in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt'><span style='font-family:"Microsoft YaHei UI"'>返回给定</span><span
  style='font-family:"Comic Sans MS"'> bean </span><span style='font-family:
  "Microsoft YaHei UI"'>名称的所有别名&nbsp;</span></p>
  </td>
 </tr>
</table>

</div>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#70AD47'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>BeanFactory </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>接口并不是</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> IOC </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>容器的具体实现，但是</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> Spring </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>容器实现多种接口，如</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>
     DefaultListableBeanFactory</span><span style='font-family:"Microsoft YaHei UI";
     font-size:12.0pt'>、</span><span style='font-family:"Comic Sans MS";
     font-size:12.0pt'>XmlBeanFactory</span><span style='font-family:"Microsoft YaHei UI";
     font-size:12.0pt'>、</span><span style='font-family:"Comic Sans MS";
     font-size:12.0pt'>ApplicationContext </span><span style='font-family:"Microsoft YaHei UI";
     font-size:12.0pt'>等，其中</span><span style='font-family:"Comic Sans MS";
     font-size:12.0pt'> XmlBeanFactory </span><span style='font-family:"Microsoft YaHei UI";
     font-size:12.0pt'>就是常用的一个，该实现将以</span><span style='font-family:"Comic Sans MS";
     font-size:12.0pt'> XML </span><span style='font-family:"Microsoft YaHei UI";
     font-size:12.0pt'>方式描述组成应用的对象及对象间的依赖关系。</span></li>
</ul>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt;
color:#70AD47'><span style='font-weight:bold'>示例</span></p>

<p style='margin-left:.375in;margin-top:5pt;margin-bottom:5pt;font-family:"Comic Sans MS";
font-size:12.0pt;color:#FFC000'>@Test</p>

<p style='margin-left:.375in;margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
style='font-family:"Comic Sans MS";color:blue'>public</span><span
style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
style='font-family:"Comic Sans MS";color:#8000FF'>void</span><span
style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
style='font-family:"Comic Sans MS";color:black'>test(){</span></p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'>Resource resource = new FileSystemResource(<span style='color:#B43512'>&quot;beans.xml&quot;</span>);</p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'>BeanFactory factory = new XmlBeanFactory(resource);</p>

<p style='margin-left:.375in;margin-top:5pt;margin-bottom:5pt;font-family:"Comic Sans MS";
font-size:12.0pt;color:black'>}</p>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt;
color:#70AD47'><span style='font-weight:bold'>示例</span></p>

<p style='margin-left:.375in;margin-top:5pt;margin-bottom:5pt;font-family:"Comic Sans MS";
font-size:12.0pt;color:#FFC000'>@Test</p>

<p style='margin-left:.375in;margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
style='font-family:"Comic Sans MS";color:blue'>public</span><span
style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
style='font-family:"Comic Sans MS";color:#8000FF'>void</span><span
style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
style='font-family:"Comic Sans MS";color:black'>test(){</span></p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'>ClassPathResource resource = new ClassPathResource(<span
style='color:#B43512'>&quot;beans.xml&quot;</span>);</p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'>BeanFactory factory = new XmlBeanFactory(resource);</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt' lang=en-US>}</p>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt;
color:#70AD47'><span style='font-weight:bold'>示例</span></p>

<p style='margin-left:.375in;margin-top:5pt;margin-bottom:5pt;font-family:"Comic Sans MS";
font-size:12.0pt;color:#FFC000'>@Test</p>

<p style='margin-left:.375in;margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
style='font-family:"Comic Sans MS";color:blue'>public</span><span
style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
style='font-family:"Comic Sans MS";color:#8000FF'>void</span><span
style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
style='font-family:"Comic Sans MS";color:black'>test(){</span></p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'>ApplicationContext context = new ClassPathXmlApplicationContext(new
String[] </p>

<p style='margin-left:3.75in;font-family:"Comic Sans MS";font-size:
12.0pt'>{<span style='color:#B43512'>&quot;applicationContext.xml&quot;</span>,
<span style='color:#B43512'>&quot;applicationContext-part2.xml&quot;</span>});</p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'>BeanFactory factory = (BeanFactory) context;</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt' lang=en-US>}</p>

</div>

</div>

</div>

<!--EndFragment-->
</body>
