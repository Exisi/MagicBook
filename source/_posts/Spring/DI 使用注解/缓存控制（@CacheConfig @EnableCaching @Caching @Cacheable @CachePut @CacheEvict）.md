---
categories:
  - Spring
tags:
  - ［@CacheConfig］
  - ［@EnableCaching］
  - ［@Caching］
  - ［@Cacheable］
  - ［@CachePut］
  - ［@CacheEvict］
date:
  - 2022-11-28 08:17:55
---

<body lang=zh-CN style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>
<!--StartFragment-->

<div style='direction:ltr;border-width:100%'>

<div style='direction:ltr;margin-top:0in;margin-left:0in;width:8.7256in'>

<div style='direction:ltr;margin-top:0in;margin-left:0in;width:8.7256in'>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>从</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>3.1</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>开始，</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>Spring</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>引入了对</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>Cache</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>的支持。其使用方法和原理都类似于</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>Spring</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>对事务管理的支持。</span></li>
</ul>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>Spring
     Cache</span><span style='font-family:"Comic Sans MS";font-size:12.0pt'
     lang=en-US> </span><span style='font-family:"Microsoft YaHei UI";
     font-size:12.0pt' lang=zh-CN>是作用在方法上的，当我们在调用一个缓存方法时会把该方法参数和返回结果作为一个键值对存放在缓存中，等到下次利用同样的参数来调用该方法时直接从缓存中获取结果进行返回。</span></li>
</ul>

<p style='margin-left:.375in;font-size:12.0pt'><span
style='font-family:"Microsoft YaHei UI"' lang=zh-CN>所以在使用</span><span
style='font-family:"Microsoft YaHei UI"' lang=en-US> </span><span
style='font-family:"Comic Sans MS"' lang=zh-CN>Spring Cache</span><span
style='font-family:"Comic Sans MS"' lang=en-US> </span><span style='font-family:
"Microsoft YaHei UI"' lang=zh-CN>的时候我们要保证我们缓存的方法对于相同的方法参数要有相同的返回结果</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>Spring</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>为我们提供了几个注解来支持</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>Spring
     Cache</span><span style='font-family:"Microsoft YaHei UI";font-size:12.0pt'
     lang=zh-CN>。其核心主要是</span><span style='font-family:"Microsoft YaHei UI";
     font-size:12.0pt;color:#FFC000' lang=en-US> </span><span style='font-family:
     "Comic Sans MS";font-size:12.0pt;color:#FFC000' lang=zh-CN>@Cacheable</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>和</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt;color:#FFC000'
     lang=zh-CN>@CacheEvict</span><span style='font-family:"Microsoft YaHei UI";
     font-size:12.0pt' lang=zh-CN>。使用</span><span style='font-family:"Microsoft YaHei UI";
     font-size:12.0pt' lang=en-US> </span><span style='font-family:"Comic Sans MS";
     font-size:12.0pt;color:#FFC000' lang=zh-CN>@Cacheable</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>标记的方法在执行后</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>Spring
     Cache</span><span style='font-family:"Comic Sans MS";font-size:12.0pt'
     lang=en-US> </span><span style='font-family:"Microsoft YaHei UI";
     font-size:12.0pt' lang=zh-CN>将缓存其返回结果，而使用</span><span style='font-family:
     "Microsoft YaHei UI";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt;color:#FFC000'
     lang=zh-CN>@CacheEvict</span><span style='font-family:"Comic Sans MS";
     font-size:12.0pt;color:#FFC000' lang=en-US> </span><span style='font-family:
     "Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>标记的方法会在方法执行前或者执行后移除</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>Spring
     Cache</span><span style='font-family:"Comic Sans MS";font-size:12.0pt'
     lang=en-US> </span><span style='font-family:"Microsoft YaHei UI";
     font-size:12.0pt' lang=zh-CN>中的某些元素。下面我们将来详细介绍一下</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>Spring</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>基于注解对</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>Cache</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>的支持所提供的几个注解</span></li>
</ul>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<div style='direction:ltr'>

<table border=1 cellpadding=0 cellspacing=0 valign=top style='direction:ltr;
 border-collapse:collapse;border-style:solid;border-color:#A3A3A3;border-width:
 1pt;margin-left:.3333in' title="" summary="">
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:black;vertical-align:top;width:1.4875in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt;
  color:white'><span style='font-weight:bold'>注解</span></p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:black;vertical-align:top;width:6.6in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt;
  color:white'><span style='font-weight:bold'>说明</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:1.4875in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='margin-top:7pt;margin-bottom:7pt;font-family:"Comic Sans MS";
  font-size:11.5pt;color:#111111'>@Cacheable</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:6.7166in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt;
  color:#111111'>产生缓存</p>
  <p style='font-size:11.5pt'><span style='font-family:"Microsoft YaHei UI"'>指示一个方法</span><span
  style='font-family:"Comic Sans MS"'>(</span><span style='font-family:"Microsoft YaHei UI"'>或类上的所有方法</span><span
  style='font-family:"Comic Sans MS"'>)</span><span style='font-family:"Microsoft YaHei UI"'>触发缓存查询或更新操作，即优先使用缓存结果，有则跳过执行方法</span></p>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>&nbsp;</p>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt'>当标记在一个方法上时表示该方法是支持缓存的，当标记在一个类上时则表示该类所有的方法都是支持缓存的。</p>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>&nbsp;</p>
  <p style='font-size:11.5pt'><span style='font-family:"Microsoft YaHei UI"'>对于支持缓存的方法，</span><span
  style='font-family:"Comic Sans MS"'>Spring</span><span style='font-family:
  "Microsoft YaHei UI"'>会在其被调用后将其返回值缓存起来，以保证下次利用同样的参数来执行该方法时可以直接从缓存中获取结果，而不需要再次执行该方法。</span><span
  style='font-family:"Comic Sans MS"'>Spring</span><span style='font-family:
  "Microsoft YaHei UI"'>在缓存方法的返回值时是以键值对进行缓存的，值就是方法的返回结果</span></p>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>&nbsp;</p>
  <div style='direction:ltr'>
  <table border=1 cellpadding=0 cellspacing=0 valign=top style='direction:ltr;
   border-collapse:collapse;border-style:solid;border-color:#A3A3A3;border-width:
   1pt' title="" summary="">
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:black;vertical-align:top;width:1.525in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Microsoft YaHei UI";font-size:10.5pt;
    color:white'><span style='font-weight:bold'>参数</span></p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:black;vertical-align:top;width:5.009in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Microsoft YaHei UI";font-size:10.5pt;
    color:white'><span style='font-weight:bold'>描述</span></p>
    </td>
   </tr>
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    vertical-align:top;width:1.525in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>cacheNames</p>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>value</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    vertical-align:top;width:5.0784in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-size:10.5pt'><span style='font-family:"Microsoft YaHei UI"'>指定缓存的名字，缓存使用</span><span
    style='font-family:"Comic Sans MS"'>CacheManager</span><span
    style='font-family:"Microsoft YaHei UI"'>管理多个缓存</span><span
    style='font-family:"Comic Sans MS"'>Cache</span><span style='font-family:
    "Microsoft YaHei UI"'>，这些</span><span style='font-family:"Comic Sans MS"'>Cache</span><span
    style='font-family:"Microsoft YaHei UI"'>就是根据该属性进行区分。对缓存的真正增删改查操作在</span><span
    style='font-family:"Comic Sans MS"'>Cache</span><span style='font-family:
    "Microsoft YaHei UI"'>中定义，每个缓存</span><span style='font-family:"Comic Sans MS"'>Cache</span><span
    style='font-family:"Microsoft YaHei UI"'>都有自己唯一的名字。</span></p>
    </td>
   </tr>
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:#E7E6E6;vertical-align:top;width:1.525in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>key</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:#E7E6E6;vertical-align:top;width:5.009in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-size:10.5pt'><span style='font-family:"Microsoft YaHei UI"'>缓存数据时的</span><span
    style='font-family:"Comic Sans MS"'>key</span><span style='font-family:
    "Microsoft YaHei UI"'>的值，默认是使用方法所有入参的值，可以使用</span><span style='font-family:
    "Comic Sans MS"'>SpEL</span><span style='font-family:"Microsoft YaHei UI"'>表达式表示</span><span
    style='font-family:"Comic Sans MS"'>key</span><span style='font-family:
    "Microsoft YaHei UI"'>的值。</span></p>
    </td>
   </tr>
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    vertical-align:top;width:1.525in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>keyGenerator</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    vertical-align:top;width:5.009in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-size:10.5pt'><span style='font-family:"Comic Sans MS"'>key
    </span><span style='font-family:"Microsoft YaHei UI"'>的生成器。</span><span
    style='font-family:"Comic Sans MS"'> key </span><span style='font-family:
    "Microsoft YaHei UI"'>和</span><span style='font-family:"Comic Sans MS"'>
    keyGenerator </span><span style='font-family:"Microsoft YaHei UI"'>二选一使用</span></p>
    </td>
   </tr>
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:#E7E6E6;vertical-align:top;width:1.525in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>cacheManager</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:#E7E6E6;vertical-align:top;width:5.009in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-size:10.5pt'><span style='font-family:"Microsoft YaHei UI"'>指定缓存管理器</span><span
    style='font-family:"Comic Sans MS"'>(</span><span style='font-family:"Microsoft YaHei UI"'>例如</span><span
    style='font-family:"Comic Sans MS"'>ConcurrentHashMap</span><span
    style='font-family:"Microsoft YaHei UI"'>、</span><span style='font-family:
    "Comic Sans MS"'>Redis</span><span style='font-family:"Microsoft YaHei UI"'>等</span><span
    style='font-family:"Comic Sans MS"'>)</span></p>
    </td>
   </tr>
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    vertical-align:top;width:1.525in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>condition</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    vertical-align:top;width:5.009in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-size:10.5pt'><span style='font-family:"Comic Sans MS"'>Spring</span><span
    style='font-family:"Microsoft YaHei UI"'>表达式语言</span><span
    style='font-family:"Comic Sans MS"'>(SpEL)</span><span style='font-family:
    "Microsoft YaHei UI"'>表达式，用于使缓存回收操作有条件。</span></p>
    </td>
   </tr>
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:#E7E6E6;vertical-align:top;width:1.525in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>unless</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:#E7E6E6;vertical-align:top;width:5.009in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-size:10.5pt'><span style='font-family:"Microsoft YaHei UI"'>否定缓存。当</span><span
    style='font-family:"Comic Sans MS"'> unless </span><span style='font-family:
    "Microsoft YaHei UI"'>指定的条件为</span><span style='font-family:"Comic Sans MS"'>
    true </span><span style='font-family:"Microsoft YaHei UI"'>，方法的返回值就不会被缓存。当然你也可以获取到结果进行判断。（通过</span><span
    style='font-family:"Comic Sans MS"'> #result </span><span style='font-family:
    "Microsoft YaHei UI"'>获取方法结果）</span></p>
    </td>
   </tr>
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    vertical-align:top;width:1.525in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>sync</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    vertical-align:top;width:5.009in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Microsoft YaHei UI";font-size:10.5pt'>是否使用同步模式。</p>
    <p style='font-size:10.5pt'><span style='font-family:"Microsoft YaHei UI"'>在多线程环境下，某些操作可能使用相同参数同步调用。默认情况下，缓存不锁定任何资源，可能导致多次计算，而违反了缓存的目的。对于这些特定的情况，属性</span><span
    style='font-family:"Comic Sans MS"'> sync </span><span style='font-family:
    "Microsoft YaHei UI"'>可以指示底层将缓存锁住，使只有一个线程可以进入计算，而其他线程堵塞，直到返回结果更新到缓存中。</span></p>
    </td>
   </tr>
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:#E7E6E6;vertical-align:top;width:1.525in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>cacheResolver</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:#E7E6E6;vertical-align:top;width:5.009in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-size:10.5pt'><span style='font-family:"Microsoft YaHei UI"'>要使用的自定义实现了</span><span
    style='font-family:"Comic Sans MS"'>CacheResolver</span><span
    style='font-family:"Microsoft YaHei UI"'>接口类的</span><span style='font-family:
    "Comic Sans MS"'>bean</span><span style='font-family:"Microsoft YaHei UI"'>名。</span></p>
    </td>
   </tr>
  </table>
  </div>
  <p style='margin-left:.375in;font-family:"Comic Sans MS";
  font-size:11.5pt;color:#111111'>&nbsp;</p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:1.4875in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='margin-top:7pt;margin-bottom:7pt;font-family:"Comic Sans MS";
  font-size:11.5pt;color:#111111'>@CachePut</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:6.7319in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt;
  color:#111111'>更新缓存</p>
  <p style='font-size:11.5pt'><span style='font-family:"Microsoft YaHei UI"'>指示一个方法</span><span
  style='font-family:"Comic Sans MS"'>(</span><span style='font-family:"Microsoft YaHei UI"'>或类上的所有方法</span><span
  style='font-family:"Comic Sans MS"'>)</span><span style='font-family:"Microsoft YaHei UI"'>触发缓存更新操作。与</span><span
  style='font-family:"Comic Sans MS"'>@Cacheable</span><span style='font-family:
  "Microsoft YaHei UI"'>注释不同，该注解不会在跳过已缓存的方法，而是每次都会执行该方法，并将执行结果以键值对的形式存入指定的缓存中。如果</span><span
  style='font-family:"Comic Sans MS"'>condition()</span><span style='font-family:
  "Microsoft YaHei UI"'>和</span><span style='font-family:"Comic Sans MS"'>unless()</span><span
  style='font-family:"Microsoft YaHei UI"'>表达式匹配，它总是会调用方法并将其结果存储在关联的缓存中</span></p>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>&nbsp;</p>
  <div style='direction:ltr'>
  <table border=1 cellpadding=0 cellspacing=0 valign=top style='direction:ltr;
   border-collapse:collapse;border-style:solid;border-color:#A3A3A3;border-width:
   1pt' title="" summary="">
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:black;vertical-align:top;width:1.4256in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Microsoft YaHei UI";font-size:10.5pt;
    color:white'><span style='font-weight:bold'>参数</span></p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:black;vertical-align:top;width:5.1236in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Microsoft YaHei UI";font-size:10.5pt;
    color:white'><span style='font-weight:bold'>描述</span></p>
    </td>
   </tr>
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:white;vertical-align:top;width:1.4256in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>cacheNames</p>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>value</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:white;vertical-align:top;width:5.193in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-size:10.5pt'><span style='font-family:"Microsoft YaHei UI"'>指定缓存的名字，缓存使用</span><span
    style='font-family:"Comic Sans MS"'>CacheManager</span><span
    style='font-family:"Microsoft YaHei UI"'>管理多个缓存</span><span
    style='font-family:"Comic Sans MS"'>Cache</span><span style='font-family:
    "Microsoft YaHei UI"'>，这些</span><span style='font-family:"Comic Sans MS"'>Cache</span><span
    style='font-family:"Microsoft YaHei UI"'>就是根据该属性进行区分。对缓存的真正增删改查操作在</span><span
    style='font-family:"Comic Sans MS"'>Cache</span><span style='font-family:
    "Microsoft YaHei UI"'>中定义，每个缓存</span><span style='font-family:"Comic Sans MS"'>Cache</span><span
    style='font-family:"Microsoft YaHei UI"'>都有自己唯一的名字。</span></p>
    </td>
   </tr>
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:#E7E6E6;vertical-align:top;width:1.4256in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>key</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:#E7E6E6;vertical-align:top;width:5.1256in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-size:10.5pt'><span style='font-family:"Microsoft YaHei UI"'>缓存数据时的</span><span
    style='font-family:"Comic Sans MS"'>key</span><span style='font-family:
    "Microsoft YaHei UI"'>的值，默认是使用方法所有入参的值，可以使用</span><span style='font-family:
    "Comic Sans MS"'>SpEL</span><span style='font-family:"Microsoft YaHei UI"'>表达式表示</span><span
    style='font-family:"Comic Sans MS"'>key</span><span style='font-family:
    "Microsoft YaHei UI"'>的值。</span></p>
    </td>
   </tr>
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:white;vertical-align:top;width:1.4256in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>keyGenerator</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:white;vertical-align:top;width:5.1236in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-size:10.5pt'><span style='font-family:"Comic Sans MS"'>key
    </span><span style='font-family:"Microsoft YaHei UI"'>的生成器。</span><span
    style='font-family:"Comic Sans MS"'> key </span><span style='font-family:
    "Microsoft YaHei UI"'>和</span><span style='font-family:"Comic Sans MS"'>
    keyGenerator </span><span style='font-family:"Microsoft YaHei UI"'>二选一使用</span></p>
    </td>
   </tr>
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:#E7E6E6;vertical-align:top;width:1.4256in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>cacheManager</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:#E7E6E6;vertical-align:top;width:5.1236in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-size:10.5pt'><span style='font-family:"Microsoft YaHei UI"'>指定缓存管理器</span><span
    style='font-family:"Comic Sans MS"'>(</span><span style='font-family:"Microsoft YaHei UI"'>例如</span><span
    style='font-family:"Comic Sans MS"'>ConcurrentHashMap</span><span
    style='font-family:"Microsoft YaHei UI"'>、</span><span style='font-family:
    "Comic Sans MS"'>Redis</span><span style='font-family:"Microsoft YaHei UI"'>等</span><span
    style='font-family:"Comic Sans MS"'>)</span></p>
    </td>
   </tr>
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:white;vertical-align:top;width:1.4256in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>condition</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:white;vertical-align:top;width:5.1722in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-size:10.5pt'><span style='font-family:"Comic Sans MS"'>Spring</span><span
    style='font-family:"Microsoft YaHei UI"'>表达式语言</span><span
    style='font-family:"Comic Sans MS"'>(SpEL)</span><span style='font-family:
    "Microsoft YaHei UI"'>表达式，用于使缓存回收操作有条件。当为</span><span style='font-family:
    "Comic Sans MS"'>true</span><span style='font-family:"Microsoft YaHei UI"'>时表示进行缓存处理；当表达式为</span><span
    style='font-family:"Comic Sans MS"'>false</span><span style='font-family:
    "Microsoft YaHei UI"'>时表示不进行缓存处理，即每次调用该方法时该方法都会执行一次</span></p>
    </td>
   </tr>
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:#E7E6E6;vertical-align:top;width:1.4256in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>unless</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:#E7E6E6;vertical-align:top;width:5.1319in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-size:10.5pt'><span style='font-family:"Microsoft YaHei UI"'>否定缓存。当</span><span
    style='font-family:"Comic Sans MS"'> unless </span><span style='font-family:
    "Microsoft YaHei UI"'>指定的条件为</span><span style='font-family:"Comic Sans MS"'>
    true </span><span style='font-family:"Microsoft YaHei UI"'>，方法的返回值就不会被缓存。当然也可以对获取到结果进行判断。（通过</span><span
    style='font-family:"Comic Sans MS"'> #result </span><span style='font-family:
    "Microsoft YaHei UI"'>获取方法结果）</span></p>
    </td>
   </tr>
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:white;vertical-align:top;width:1.4256in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>cacheResolver</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:white;vertical-align:top;width:5.1236in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-size:10.5pt'><span style='font-family:"Microsoft YaHei UI"'>要使用的自定义实现了</span><span
    style='font-family:"Comic Sans MS"'>CacheResolver</span><span
    style='font-family:"Microsoft YaHei UI"'>接口类的</span><span style='font-family:
    "Comic Sans MS"'>bean</span><span style='font-family:"Microsoft YaHei UI"'>名。</span></p>
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
  vertical-align:top;width:1.4875in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='margin-top:7pt;margin-bottom:7pt;font-family:"Comic Sans MS";
  font-size:11.5pt;color:#111111'>@CacheEvict</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:6.6902in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt;
  color:#111111'>删除缓存</p>
  <p style='font-size:11.5pt'><span style='font-family:"Microsoft YaHei UI"'>指示一个方法</span><span
  style='font-family:"Comic Sans MS"'>(</span><span style='font-family:"Microsoft YaHei UI"'>或类上的所有方法</span><span
  style='font-family:"Comic Sans MS"'>)</span><span style='font-family:"Microsoft YaHei UI"'>执行都触发缓存清除操作。该注释可以用作元注释，以创建带有属性覆盖的自定义组合注释</span></p>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt;color:#111111'>&nbsp;</p>
  <div style='direction:ltr'>
  <table border=1 cellpadding=0 cellspacing=0 valign=top style='direction:ltr;
   border-collapse:collapse;border-style:solid;border-color:#A3A3A3;border-width:
   1pt' title="" summary="">
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:black;vertical-align:top;width:1.4256in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Microsoft YaHei UI";font-size:10.5pt;
    color:white'><span style='font-weight:bold'>参数</span></p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:black;vertical-align:top;width:5.0819in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Microsoft YaHei UI";font-size:10.5pt;
    color:white'><span style='font-weight:bold'>描述</span></p>
    </td>
   </tr>
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    vertical-align:top;width:1.4256in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>cacheNames</p>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>value</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    vertical-align:top;width:5.1513in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-size:10.5pt'><span style='font-family:"Microsoft YaHei UI"'>指定缓存的名字，缓存使用</span><span
    style='font-family:"Comic Sans MS"'>CacheManager</span><span
    style='font-family:"Microsoft YaHei UI"'>管理多个缓存</span><span
    style='font-family:"Comic Sans MS"'>Cache</span><span style='font-family:
    "Microsoft YaHei UI"'>，这些</span><span style='font-family:"Comic Sans MS"'>Cache</span><span
    style='font-family:"Microsoft YaHei UI"'>就是根据该属性进行区分。对缓存的真正增删改查操作在</span><span
    style='font-family:"Comic Sans MS"'>Cache</span><span style='font-family:
    "Microsoft YaHei UI"'>中定义，每个缓存</span><span style='font-family:"Comic Sans MS"'>Cache</span><span
    style='font-family:"Microsoft YaHei UI"'>都有自己唯一的名字。</span></p>
    </td>
   </tr>
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:#E7E6E6;vertical-align:top;width:1.4256in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>key</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:#E7E6E6;vertical-align:top;width:5.1256in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-size:10.5pt'><span style='font-family:"Microsoft YaHei UI"'>缓存数据时的</span><span
    style='font-family:"Comic Sans MS"'>key</span><span style='font-family:
    "Microsoft YaHei UI"'>的值，默认是使用方法所有入参的值，可以使用</span><span style='font-family:
    "Comic Sans MS"'>SpEL</span><span style='font-family:"Microsoft YaHei UI"'>表达式表示</span><span
    style='font-family:"Comic Sans MS"'>key</span><span style='font-family:
    "Microsoft YaHei UI"'>的值。</span></p>
    </td>
   </tr>
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    vertical-align:top;width:1.4256in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>keyGenerator</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    vertical-align:top;width:5.0819in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-size:10.5pt'><span style='font-family:"Comic Sans MS"'>key
    </span><span style='font-family:"Microsoft YaHei UI"'>的生成器。</span><span
    style='font-family:"Comic Sans MS"'> key </span><span style='font-family:
    "Microsoft YaHei UI"'>和</span><span style='font-family:"Comic Sans MS"'>
    keyGenerator </span><span style='font-family:"Microsoft YaHei UI"'>二选一使用</span></p>
    </td>
   </tr>
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:#E7E6E6;vertical-align:top;width:1.4256in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>cacheManager</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:#E7E6E6;vertical-align:top;width:5.0819in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-size:10.5pt'><span style='font-family:"Microsoft YaHei UI"'>指定缓存管理器</span><span
    style='font-family:"Comic Sans MS"'>(</span><span style='font-family:"Microsoft YaHei UI"'>例如</span><span
    style='font-family:"Comic Sans MS"'>ConcurrentHashMap</span><span
    style='font-family:"Microsoft YaHei UI"'>、</span><span style='font-family:
    "Comic Sans MS"'>Redis</span><span style='font-family:"Microsoft YaHei UI"'>等</span><span
    style='font-family:"Comic Sans MS"'>)</span></p>
    </td>
   </tr>
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    vertical-align:top;width:1.4256in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>condition</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    vertical-align:top;width:5.0819in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-size:10.5pt'><span style='font-family:"Comic Sans MS"'>Spring</span><span
    style='font-family:"Microsoft YaHei UI"'>表达式语言</span><span
    style='font-family:"Comic Sans MS"'>(SpEL)</span><span style='font-family:
    "Microsoft YaHei UI"'>表达式，用于使缓存回收操作有条件。</span></p>
    </td>
   </tr>
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:#E7E6E6;vertical-align:top;width:1.4256in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>cacheResolver</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:#E7E6E6;vertical-align:top;width:5.0819in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-size:10.5pt'><span style='font-family:"Microsoft YaHei UI"'>要使用的自定义实现了</span><span
    style='font-family:"Comic Sans MS"'>CacheResolver</span><span
    style='font-family:"Microsoft YaHei UI"'>接口类的</span><span style='font-family:
    "Comic Sans MS"'>bean</span><span style='font-family:"Microsoft YaHei UI"'>名。</span></p>
    </td>
   </tr>
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:white;vertical-align:top;width:1.4256in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>allEntries</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:white;vertical-align:top;width:5.0819in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Microsoft YaHei UI";font-size:10.5pt'>是否删除缓存中的所有条目。</p>
    </td>
   </tr>
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:#E7E6E6;vertical-align:top;width:1.4256in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>beforeInvocation</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:#E7E6E6;vertical-align:top;width:5.1333in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-size:10.5pt'><span style='font-family:"Microsoft YaHei UI"'>是否应该在调用方法之前发生清除，该属性值为</span><span
    style='font-family:"Comic Sans MS"'>true</span><span style='font-family:
    "Microsoft YaHei UI"'>时，</span><span style='font-family:"Comic Sans MS"'>Spring</span><span
    style='font-family:"Microsoft YaHei UI"'>会在调用该方法之前清除缓存中的指定元素</span></p>
    </td>
   </tr>
  </table>
  </div>
  <p style='margin-left:.375in;font-family:"Comic Sans MS";
  font-size:12.0pt'>&nbsp;</p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:1.4875in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'><span
  lang=en-US>@</span><span lang=zh-CN>CacheConfig</span></p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:6.6902in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt'>提供一种在类级别共享公共缓存相关设置的机制。当此注解出现在给定的类上时，它会为该类中定义的任何缓存操作提供一组默认设置。</p>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>&nbsp;</p>
  <p style='font-size:11.5pt'><span style='font-family:"Microsoft YaHei UI"'
  lang=zh-CN>使用</span><span style='font-family:"Comic Sans MS"' lang=en-US> </span><span
  style='font-family:"Comic Sans MS"' lang=zh-CN>@CacheConfig</span><span
  style='font-family:"Comic Sans MS"' lang=en-US> </span><span
  style='font-family:"Microsoft YaHei UI"' lang=zh-CN>注释，我们可以在类级别将一些缓存配置精简到一个位置，这样就不必多次声明</span></p>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>&nbsp;</p>
  <div style='direction:ltr'>
  <table border=1 cellpadding=0 cellspacing=0 valign=top style='direction:ltr;
   border-collapse:collapse;border-style:solid;border-color:#A3A3A3;border-width:
   1pt' title="" summary="">
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:black;vertical-align:top;width:1.4256in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Microsoft YaHei UI";font-size:10.5pt;
    color:white'><span style='font-weight:bold'>参数</span></p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:black;vertical-align:top;width:5.0819in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Microsoft YaHei UI";font-size:10.5pt;
    color:white'><span style='font-weight:bold'>描述</span></p>
    </td>
   </tr>
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:white;vertical-align:top;width:1.4256in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>cacheNames</p>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>value</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:white;vertical-align:top;width:5.1513in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-size:10.5pt'><span style='font-family:"Microsoft YaHei UI"'>指定缓存的名字，缓存使用</span><span
    style='font-family:"Comic Sans MS"'>CacheManager</span><span
    style='font-family:"Microsoft YaHei UI"'>管理多个缓存</span><span
    style='font-family:"Comic Sans MS"'>Cache</span><span style='font-family:
    "Microsoft YaHei UI"'>，这些</span><span style='font-family:"Comic Sans MS"'>Cache</span><span
    style='font-family:"Microsoft YaHei UI"'>就是根据该属性进行区分。对缓存的真正增删改查操作在</span><span
    style='font-family:"Comic Sans MS"'>Cache</span><span style='font-family:
    "Microsoft YaHei UI"'>中定义，每个缓存</span><span style='font-family:"Comic Sans MS"'>Cache</span><span
    style='font-family:"Microsoft YaHei UI"'>都有自己唯一的名字。</span></p>
    </td>
   </tr>
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:#E7E6E6;vertical-align:top;width:1.4256in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>keyGenerator</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:#E7E6E6;vertical-align:top;width:5.1027in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-size:10.5pt'><span style='font-family:"Comic Sans MS"'>key
    </span><span style='font-family:"Microsoft YaHei UI"'>的生成器。
    指定生成缓存键值的策略。这个属性可以接受一个实现了</span><span style='font-family:"Comic Sans MS"'>KeyGenerator</span><span
    style='font-family:"Microsoft YaHei UI"'>接口的类作为参数，也可以使用</span><span
    style='font-family:"Comic Sans MS"'>SpEL</span><span style='font-family:
    "Microsoft YaHei UI"'>表达式来动态生成键值。</span></p>
    </td>
   </tr>
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:white;vertical-align:top;width:1.4256in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>cacheManager</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:white;vertical-align:top;width:5.0819in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Microsoft YaHei UI";font-size:10.5pt'>可以用来指定缓存管理器。从哪个缓存管理器里面获取缓存。</p>
    </td>
   </tr>
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:#E7E6E6;vertical-align:top;width:1.4256in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>cacheResolver</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:#E7E6E6;vertical-align:top;width:5.0819in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-size:10.5pt'><span style='font-family:"Microsoft YaHei UI"'>要使用的自定义实现了</span><span
    style='font-family:"Comic Sans MS"'>CacheResolver</span><span
    style='font-family:"Microsoft YaHei UI"'>接口类的</span><span style='font-family:
    "Comic Sans MS"'>bean</span><span style='font-family:"Microsoft YaHei UI"'>名。</span></p>
    </td>
   </tr>
  </table>
  </div>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>&nbsp;</p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:1.4875in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'><span
  lang=en-US>@</span><span lang=zh-CN>Caching</span></p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:6.7215in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='margin:0in'><span style='font-family:"Microsoft YaHei UI";
  font-size:12.0pt'>多个缓存注释（不同或相同类型）的组注释。即对</span><span style='font-family:"Comic Sans MS";
  font-size:11.5pt'>@Cacheable @CachePut @CacheEvict</span><span
  style='font-family:"Microsoft YaHei UI";font-size:11.5pt'>的复合（</span><span
  style='font-family:"Comic Sans MS";font-size:11.5pt'>combine</span><span
  style='font-family:"Microsoft YaHei UI";font-size:11.5pt'>）操作。</span><span
  style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>此注解可用作元注解，以创建具有属性覆盖的自定义组合注解</span></p>
  <p style='font-family:"Comic Sans MS";font-size:12.0pt'>&nbsp;</p>
  <div style='direction:ltr'>
  <table border=1 cellpadding=0 cellspacing=0 valign=top style='direction:ltr;
   border-collapse:collapse;border-style:solid;border-color:#A3A3A3;border-width:
   1pt' title="" summary="">
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:black;vertical-align:top;width:1.5451in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Microsoft YaHei UI";font-size:10.5pt;
    color:white'><span style='font-weight:bold'>参数</span></p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:black;vertical-align:top;width:4.993in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Microsoft YaHei UI";font-size:10.5pt;
    color:white'><span style='font-weight:bold'>描述</span></p>
    </td>
   </tr>
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    vertical-align:top;width:1.5451in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>cacheable</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    vertical-align:top;width:4.993in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-size:10.5pt'><span style='font-family:"Comic Sans MS"'
    lang=zh-CN>@Cacheable</span><span style='font-family:"Microsoft YaHei UI"'
    lang=zh-CN>的注解列表，默认</span><span style='font-family:"Comic Sans MS"'
    lang=en-US>{}</span></p>
    </td>
   </tr>
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:#E7E6E6;vertical-align:top;width:1.5451in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>put</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:#E7E6E6;vertical-align:top;width:4.993in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-size:10.5pt'><span style='font-family:"Comic Sans MS"'
    lang=zh-CN>@CachePut</span><span style='font-family:"Microsoft YaHei UI"'
    lang=zh-CN>的注解列表，默认</span><span style='font-family:"Comic Sans MS"'
    lang=en-US>{}</span></p>
    </td>
   </tr>
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    vertical-align:top;width:1.5451in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>evict</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    vertical-align:top;width:4.993in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-size:10.5pt'><span style='font-family:"Comic Sans MS"'
    lang=zh-CN>@CacheEvict</span><span style='font-family:"Microsoft YaHei UI"'
    lang=zh-CN>的注解列表，默认</span><span style='font-family:"Comic Sans MS"'
    lang=en-US>{}</span></p>
    </td>
   </tr>
  </table>
  </div>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>&nbsp;</p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:1.4875in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'><span
  lang=en-US><span style='mso-spacerun:yes'> </span>@</span><span lang=zh-CN>EnableCaching</span></p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:6.7131in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt'>开启缓存</p>
  <p style='font-size:11.5pt'><span style='font-family:"Microsoft YaHei UI"'>在类上设置当前缓存的一些公共设置</span><span
  style='font-family:"Comic Sans MS"'>,</span><span style='font-family:"Microsoft YaHei UI"'>比如使用这个注解作用在类上</span><span
  style='font-family:"Comic Sans MS"'>,</span><span style='font-family:"Microsoft YaHei UI"'>就可以为此类的所有方法的缓存注解提供默认值、缓存的默认名称、缓存的</span><span
  style='font-family:"Comic Sans MS"'>KeyGenerator</span></p>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>&nbsp;</p>
  <div style='direction:ltr'>
  <table border=1 cellpadding=0 cellspacing=0 valign=top style='direction:ltr;
   border-collapse:collapse;border-style:solid;border-color:#A3A3A3;border-width:
   1pt' title="" summary="">
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:black;vertical-align:top;width:1.8298in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Microsoft YaHei UI";font-size:10.5pt;
    color:white'><span style='font-weight:bold'>参数</span></p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:black;vertical-align:top;width:4.7006in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Microsoft YaHei UI";font-size:10.5pt;
    color:white'><span style='font-weight:bold'>描述</span></p>
    </td>
   </tr>
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:white;vertical-align:top;width:1.8298in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>proxyTargetClass</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:white;vertical-align:top;width:4.7027in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-size:10.5pt'><span style='font-family:"Microsoft YaHei UI"'
    lang=zh-CN>指示是否要创建基于子类</span><span style='font-family:"Comic Sans MS"'
    lang=zh-CN> (CGLIB) </span><span style='font-family:"Microsoft YaHei UI"'
    lang=zh-CN>的代理而不是基于标准</span><span style='font-family:"Comic Sans MS"'
    lang=zh-CN> Java </span><span style='font-family:"Microsoft YaHei UI"'
    lang=zh-CN>接口的代理。默认</span><span style='font-family:"Comic Sans MS"'
    lang=en-US>false</span></p>
    </td>
   </tr>
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:#E7E6E6;vertical-align:top;width:1.8298in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>mode</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:#E7E6E6;vertical-align:top;width:4.7006in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Microsoft YaHei UI";font-size:10.5pt'>指示应如何应用缓存建议</p>
    </td>
   </tr>
   <tr>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:white;vertical-align:top;width:1.8298in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Comic Sans MS";font-size:10.5pt'>order</p>
    </td>
    <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
    background-color:white;vertical-align:top;width:4.7006in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
    <p style='font-family:"Microsoft YaHei UI";font-size:10.5pt'>当在特定的连接点应用多个建议时，请指示缓存顾问执行顺序。</p>
    </td>
   </tr>
  </table>
  </div>
  <p style='font-family:"Comic Sans MS";font-size:12.0pt;color:#70AD47'>&nbsp;</p>
  </td>
 </tr>
</table>

</div>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt;
color:#70AD47'><span style='font-weight:bold'>示例</span></p>

<div style='direction:ltr'>

<table border=0 cellpadding=0 cellspacing=0 valign=top style='direction:ltr;
 border-collapse:collapse;border-style:solid;border-color:#A3A3A3;border-width:
 0pt;margin-left:.3333in' title="" summary="">
 <tr>
  <td style='border-width:0pt;background-color:white;vertical-align:top;
  width:7.2527in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='margin-top:5pt;margin-bottom:5pt;font-family:"Comic Sans MS";
  font-size:12.0pt;color:#FFC000'>@Service</p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-size:12.0pt;color:#70AD47'><span
  style='font-family:"Comic Sans MS"' lang=en-US>//</span><span
  style='font-family:"Microsoft YaHei UI"' lang=zh-CN>开启缓存</span></p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-family:"Comic Sans MS";
  font-size:12.0pt;color:#FFC000'><span lang=en-US>@</span><span lang=zh-CN>EnableCaching</span></p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-size:12.0pt;color:#70AD47'><span
  style='font-family:"Comic Sans MS"' lang=en-US>//</span><span
  style='font-family:"Microsoft YaHei UI"' lang=zh-CN>共享的缓存设置</span></p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-family:"Comic Sans MS";
  font-size:12.0pt'><span style='color:#FFC000'>@CacheConfig</span>(cacheNames={&quot;addresses&quot;})</p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
  style='font-family:"Comic Sans MS";color:blue'>public</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:blue'>class</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>RedisService</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>{</span></p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;&nbsp;&nbsp;&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:#FFC000'>@Autowired</span></p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-size:12.0pt;color:black'><span
  style='font-family:"Microsoft YaHei UI"'>&nbsp;&nbsp;&nbsp;&nbsp;</span><span
  style='font-family:"Comic Sans MS"'>UserInfoMapper</span><span
  style='font-family:"Microsoft YaHei UI"'>&nbsp;</span><span style='font-family:
  "Comic Sans MS"'>userInfoMapper;</span></p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-family:"Comic Sans MS";
  font-size:12.0pt'>&nbsp;</p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;&nbsp;&nbsp;&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:green'>//</span><span
  style='font-family:"Microsoft YaHei UI";color:green'>将方法运行结果进行缓存，当方法被再次调用时，直接返回缓存中的结果。</span></p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;&nbsp;&nbsp;&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:#FFC000'>@Cacheable</span><span
  style='font-family:"Comic Sans MS";color:black'>(value</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>=</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:maroon'>&quot;test&quot;</span><span
  style='font-family:"Comic Sans MS";color:black'>,</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>key</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>=</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:maroon'>&quot;#id&quot;</span><span
  style='font-family:"Comic Sans MS";color:black'>)</span></p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;&nbsp;&nbsp;&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:blue'>public</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:#8000FF'>String</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>getUserById(Integer</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>id)</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>{</span></p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-size:12.0pt;color:black'><span
  style='font-family:"Microsoft YaHei UI"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span
  style='font-family:"Comic Sans MS"'>UserInfo</span><span style='font-family:
  "Microsoft YaHei UI"'>&nbsp;</span><span style='font-family:"Comic Sans MS"'>userInfo=userInfoMapper.getUserById(id);</span></p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:blue'>return</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>userInfo.toString();</span></p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-size:12.0pt;color:black'><span
  style='font-family:"Microsoft YaHei UI"'>&nbsp;&nbsp;&nbsp;&nbsp;</span><span
  style='font-family:"Comic Sans MS"'>}</span></p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-family:"Comic Sans MS";
  font-size:12.0pt'>&nbsp;</p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;&nbsp;&nbsp;&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:green'>//</span><span
  style='font-family:"Microsoft YaHei UI";color:green'>修改了数据库的数据，同时更新缓存。先调用目标方法，然后缓存方法结果。</span></p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;&nbsp;&nbsp;&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:#FFC000'>@CachePut</span><span
  style='font-family:"Comic Sans MS";color:black'>(value</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>=</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:maroon'>&quot;test&quot;</span><span
  style='font-family:"Comic Sans MS";color:black'>,key=</span><span
  style='font-family:"Comic Sans MS";color:maroon'>&quot;#result.id&quot;</span><span
  style='font-family:"Comic Sans MS";color:black'>)</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:green'>//</span><span
  style='font-family:"Microsoft YaHei UI";color:green'>只能是</span><span
  style='font-family:"Comic Sans MS";color:green'>result.id</span></p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;&nbsp;&nbsp;&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:blue'>public</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>UserInfo</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>updateUser(UserInfo</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>userInfo)</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>{</span></p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-size:12.0pt;color:black'><span
  style='font-family:"Microsoft YaHei UI"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span
  style='font-family:"Comic Sans MS"'>userInfoMapper.updateUser(userInfo);</span></p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:blue'>return</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>userInfo;</span></p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-size:12.0pt;color:black'><span
  style='font-family:"Microsoft YaHei UI"'>&nbsp;&nbsp;&nbsp;&nbsp;</span><span
  style='font-family:"Comic Sans MS"'>}</span></p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-family:"Comic Sans MS";
  font-size:12.0pt'>&nbsp;</p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;&nbsp;&nbsp;&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:green'>//</span><span
  style='font-family:"Microsoft YaHei UI";color:green'>删除数据之后，清除缓存</span></p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;&nbsp;&nbsp;&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:#FFC000'>@CacheEvict</span><span
  style='font-family:"Comic Sans MS";color:black'>(value</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>=</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:maroon'>&quot;test&quot;</span><span
  style='font-family:"Comic Sans MS";color:black'>,</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>key</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>=</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:maroon'>&quot;#id&quot;</span><span
  style='font-family:"Comic Sans MS";color:black'>)</span></p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;&nbsp;&nbsp;&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:blue'>public</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:#8000FF'>String</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>deleteUser(Integer</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>id)</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>{</span></p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-size:12.0pt;color:black'><span
  style='font-family:"Microsoft YaHei UI"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span
  style='font-family:"Comic Sans MS"'>userInfoMapper.deleteUserById(id);</span></p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:blue'>return</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:maroon'>&quot;</span><span
  style='font-family:"Microsoft YaHei UI";color:maroon'>已删除</span><span
  style='font-family:"Comic Sans MS";color:maroon'>&quot;</span><span
  style='font-family:"Comic Sans MS";color:black'>;</span></p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-size:12.0pt;color:black'><span
  style='font-family:"Microsoft YaHei UI"'>&nbsp;&nbsp;&nbsp;&nbsp;</span><span
  style='font-family:"Comic Sans MS"'>}</span></p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-family:"Comic Sans MS";
  font-size:12.0pt;color:black'>&nbsp;</p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
  style='font-family:"Comic Sans MS";color:black' lang=en-US><span
  style='mso-spacerun:yes'>    </span></span><span style='font-family:"Comic Sans MS";
  color:green' lang=zh-CN>//</span><span style='font-family:"Microsoft YaHei UI";
  color:green' lang=zh-CN>同时组合多个注解</span></p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-family:"Comic Sans MS";
  font-size:12.0pt'><span lang=en-US><span style='mso-spacerun:yes'>    </span></span><span
  style='color:#FFC000' lang=zh-CN>@Caching</span><span lang=zh-CN>(</span></p>
  <p style='margin-left:.375in;margin-top:5pt;margin-bottom:5pt;font-family:
  "Comic Sans MS";font-size:12.0pt'>evict = {</p>
  <p style='margin-left:.75in;margin-top:5pt;margin-bottom:5pt;font-family:
  "Comic Sans MS";font-size:12.0pt'><span style='color:#FFC000'>@CacheEvict</span>(<span
  style='color:#B43512'>&quot;address&quot;</span>), </p>
  <p style='margin-left:.75in;margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
  style='font-family:"Comic Sans MS";color:#FFC000' lang=zh-CN>@CacheEvict</span><span
  style='font-family:"Comic Sans MS";color:black' lang=zh-CN>(value</span><span
  style='font-family:"Microsoft YaHei UI";color:black' lang=zh-CN>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black' lang=zh-CN>=</span><span
  style='font-family:"Microsoft YaHei UI";color:black' lang=zh-CN>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:maroon' lang=zh-CN>&quot;test</span><span
  style='font-family:"Comic Sans MS";color:maroon' lang=en-US>1</span><span
  style='font-family:"Comic Sans MS";color:maroon' lang=zh-CN>&quot;</span><span
  style='font-family:"Comic Sans MS";color:black' lang=zh-CN>,</span><span
  style='font-family:"Microsoft YaHei UI";color:black' lang=zh-CN>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black' lang=zh-CN>key</span><span
  style='font-family:"Microsoft YaHei UI";color:black' lang=zh-CN>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black' lang=zh-CN>=</span><span
  style='font-family:"Microsoft YaHei UI";color:black' lang=zh-CN>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:maroon' lang=zh-CN>&quot;#id&quot;</span><span
  style='font-family:"Comic Sans MS";color:black' lang=zh-CN>)</span></p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
  style='font-family:"Comic Sans MS"' lang=en-US><span
  style='mso-spacerun:yes'>        </span></span><span style='font-family:"Comic Sans MS"'
  lang=zh-CN>}</span><span style='font-family:"Microsoft YaHei UI"' lang=zh-CN>，</span></p>
  <p style='margin-left:.375in;margin-top:5pt;margin-bottom:5pt;font-family:
  "Comic Sans MS";font-size:12.0pt' lang=en-US>put = {</p>
  <p style='margin-left:.75in;margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
  style='font-family:"Comic Sans MS";color:#FFC000' lang=zh-CN>@CachePut</span><span
  style='font-family:"Comic Sans MS";color:black' lang=zh-CN>(value</span><span
  style='font-family:"Microsoft YaHei UI";color:black' lang=zh-CN>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black' lang=zh-CN>=</span><span
  style='font-family:"Microsoft YaHei UI";color:black' lang=zh-CN>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:maroon' lang=zh-CN>&quot;test</span><span
  style='font-family:"Comic Sans MS";color:maroon' lang=en-US>2</span><span
  style='font-family:"Comic Sans MS";color:maroon' lang=zh-CN>&quot;</span><span
  style='font-family:"Comic Sans MS";color:black' lang=zh-CN>,key=</span><span
  style='font-family:"Comic Sans MS";color:maroon' lang=zh-CN>&quot;#result.id&quot;</span><span
  style='font-family:"Comic Sans MS";color:black' lang=zh-CN>)</span><span
  style='font-family:"Comic Sans MS";color:black' lang=en-US>,</span></p>
  <p style='margin-left:.75in;margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
  style='font-family:"Comic Sans MS";color:#FFC000' lang=zh-CN>@CachePut</span><span
  style='font-family:"Comic Sans MS";color:black' lang=zh-CN>(value</span><span
  style='font-family:"Microsoft YaHei UI";color:black' lang=zh-CN>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black' lang=zh-CN>=</span><span
  style='font-family:"Microsoft YaHei UI";color:black' lang=zh-CN>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:maroon' lang=zh-CN>&quot;test</span><span
  style='font-family:"Comic Sans MS";color:maroon' lang=en-US>3</span><span
  style='font-family:"Comic Sans MS";color:maroon' lang=zh-CN>&quot;</span><span
  style='font-family:"Comic Sans MS";color:black' lang=zh-CN>,key=</span><span
  style='font-family:"Comic Sans MS";color:maroon' lang=zh-CN>&quot;#result.</span><span
  style='font-family:"Comic Sans MS";color:maroon' lang=en-US>name</span><span
  style='font-family:"Comic Sans MS";color:maroon' lang=zh-CN>&quot;</span><span
  style='font-family:"Comic Sans MS";color:black' lang=zh-CN>)</span></p>
  <p style='margin-left:.375in;margin-top:5pt;margin-bottom:5pt;font-family:
  "Comic Sans MS";font-size:12.0pt' lang=en-US>},</p>
  <p style='margin-left:.375in;margin-top:5pt;margin-bottom:5pt;font-family:
  "Comic Sans MS";font-size:12.0pt'><span lang=zh-CN>cacheable</span><span
  lang=en-US> = {</span></p>
  <p style='margin-left:.75in;margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
  style='font-family:"Comic Sans MS";color:#FFC000' lang=zh-CN>@Cacheable</span><span
  style='font-family:"Comic Sans MS";color:black' lang=zh-CN>(value</span><span
  style='font-family:"Microsoft YaHei UI";color:black' lang=zh-CN>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black' lang=zh-CN>=</span><span
  style='font-family:"Microsoft YaHei UI";color:black' lang=zh-CN>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:maroon' lang=zh-CN>&quot;test</span><span
  style='font-family:"Comic Sans MS";color:maroon' lang=en-US>4</span><span
  style='font-family:"Comic Sans MS";color:maroon' lang=zh-CN>&quot;</span><span
  style='font-family:"Comic Sans MS";color:black' lang=zh-CN>,</span><span
  style='font-family:"Microsoft YaHei UI";color:black' lang=zh-CN>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black' lang=zh-CN>key</span><span
  style='font-family:"Microsoft YaHei UI";color:black' lang=zh-CN>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black' lang=zh-CN>=</span><span
  style='font-family:"Microsoft YaHei UI";color:black' lang=zh-CN>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:maroon' lang=zh-CN>&quot;#id&quot;</span><span
  style='font-family:"Comic Sans MS";color:black' lang=zh-CN>)</span><span
  style='font-family:"Comic Sans MS";color:black' lang=en-US>,</span></p>
  <p style='margin-left:.75in;margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
  style='font-family:"Comic Sans MS";color:#FFC000' lang=zh-CN>@Cacheable</span><span
  style='font-family:"Comic Sans MS";color:black' lang=zh-CN>(value</span><span
  style='font-family:"Microsoft YaHei UI";color:black' lang=zh-CN>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black' lang=zh-CN>=</span><span
  style='font-family:"Microsoft YaHei UI";color:black' lang=zh-CN>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:maroon' lang=zh-CN>&quot;test</span><span
  style='font-family:"Comic Sans MS";color:maroon' lang=en-US>5</span><span
  style='font-family:"Comic Sans MS";color:maroon' lang=zh-CN>&quot;</span><span
  style='font-family:"Comic Sans MS";color:black' lang=zh-CN>,</span><span
  style='font-family:"Microsoft YaHei UI";color:black' lang=zh-CN>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black' lang=zh-CN>key</span><span
  style='font-family:"Microsoft YaHei UI";color:black' lang=zh-CN>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black' lang=zh-CN>=</span><span
  style='font-family:"Microsoft YaHei UI";color:black' lang=zh-CN>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:maroon' lang=zh-CN>&quot;#</span><span
  style='font-family:"Comic Sans MS";color:maroon' lang=en-US>name</span><span
  style='font-family:"Comic Sans MS";color:maroon' lang=zh-CN>&quot;</span><span
  style='font-family:"Comic Sans MS";color:black' lang=zh-CN>)</span><span
  style='font-family:"Comic Sans MS";color:black' lang=en-US>,</span></p>
  <p style='margin-left:.375in;margin-top:5pt;margin-bottom:5pt;font-family:
  "Comic Sans MS";font-size:12.0pt' lang=en-US>}</p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-family:"Comic Sans MS";
  font-size:12.0pt'><span lang=en-US><span style='mso-spacerun:yes'>    </span></span><span
  lang=zh-CN>)</span></p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;&nbsp;&nbsp;&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:blue'>public</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:#8000FF'>String</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>getAddress(UserInfo</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>userInfo)</span></p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-size:12.0pt;color:black'><span
  style='font-family:"Microsoft YaHei UI"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span
  style='font-family:"Comic Sans MS"'>…</span></p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-size:12.0pt;color:black'><span
  style='font-family:"Microsoft YaHei UI"'>&nbsp;&nbsp;&nbsp;&nbsp;</span><span
  style='font-family:"Comic Sans MS"'>}</span></p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-family:"Comic Sans MS";
  font-size:12.0pt;color:black'>&nbsp;</p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-family:"Comic Sans MS";
  font-size:12.0pt;color:black'>}</p>
  </td>
 </tr>
</table>

</div>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt'><span
style='font-weight:bold'>注</span></p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>key</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>的生成策略有两种，一种是默认策略，一种是自定义策略。</span></li>
</ul>

<div style='direction:ltr'>

<table border=1 cellpadding=0 cellspacing=0 valign=top style='direction:ltr;
 border-collapse:collapse;border-style:solid;border-color:#A3A3A3;border-width:
 1pt;margin-left:.3333in' title="" summary="">
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:black;vertical-align:top;width:1.2041in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt;color:white'><span style='font-weight:
  bold;font-family:"Comic Sans MS"' lang=en-US>key</span><span
  style='font-weight:bold;font-family:"Microsoft YaHei UI"' lang=zh-CN>生成策略</span></p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:black;vertical-align:top;width:2.1861in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt;
  color:white'><span style='font-weight:bold'>说明</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:1.2041in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt'>默认策略</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:2.1861in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt'><span style='font-family:"Microsoft YaHei UI"'
  lang=zh-CN>通过</span><span style='font-family:"Comic Sans MS"' lang=en-US> </span><span
  style='font-family:"Comic Sans MS"' lang=zh-CN>KeyGenerator</span><span
  style='font-family:"Comic Sans MS"' lang=en-US> </span><span
  style='font-family:"Microsoft YaHei UI"' lang=zh-CN>生成</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:1.2041in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt'>自定义策略</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:2.2555in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt'><span style='font-family:"Microsoft YaHei UI"'>通过</span><span
  style='font-family:"Comic Sans MS"'>Spring</span><span style='font-family:
  "Microsoft YaHei UI"'>的</span><span style='font-family:"Comic Sans MS"'>EL</span><span
  style='font-family:"Microsoft YaHei UI"'>表达式来指定</span></p>
  </td>
 </tr>
</table>

</div>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN><span
     style='mso-spacerun:yes'> </span></span><span style='font-family:"Microsoft YaHei UI";
     font-size:12.0pt' lang=zh-CN>默认的</span><span style='font-family:"Microsoft YaHei UI";
     font-size:12.0pt' lang=en-US> </span><span style='font-family:"Comic Sans MS";
     font-size:12.0pt' lang=zh-CN>key</span><span style='font-family:"Comic Sans MS";
     font-size:12.0pt' lang=en-US> </span><span style='font-family:"Microsoft YaHei UI";
     font-size:12.0pt' lang=zh-CN>生成策略是通过</span><span style='font-family:"Comic Sans MS";
     font-size:12.0pt' lang=en-US> </span><span style='font-family:"Comic Sans MS";
     font-size:12.0pt' lang=zh-CN>KeyGenerator</span><span style='font-family:
     "Comic Sans MS";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>生成的，其默认策略如下：</span></li>
</ul>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<ol type=1 style='direction:ltr;unicode-bidi:embed;margin-top:0in;margin-bottom:
 0in;margin-left:32px;font-family:"Comic Sans MS";font-size:12.0pt;font-weight:normal;
 font-style:normal'>
 <li value=1 style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt;font-weight:normal;
     font-style:normal;font-family:"Microsoft YaHei UI";font-size:12.0pt'
     lang=zh-CN>如果方法没有参数，则使用</span><span style='font-family:"Microsoft YaHei UI";
     font-size:12.0pt;font-weight:normal;font-style:normal;font-family:"Microsoft YaHei UI";
     font-size:12.0pt' lang=en-US> </span><span style='font-family:"Comic Sans MS";
     font-size:12.0pt;font-weight:normal;font-style:normal;font-family:"Comic Sans MS";
     font-size:12.0pt' lang=zh-CN>0</span><span style='font-family:"Comic Sans MS";
     font-size:12.0pt;font-weight:normal;font-style:normal;font-family:"Comic Sans MS";
     font-size:12.0pt' lang=en-US> </span><span style='font-family:"Microsoft YaHei UI";
     font-size:12.0pt;font-weight:normal;font-style:normal;font-family:"Microsoft YaHei UI";
     font-size:12.0pt' lang=zh-CN>作为</span><span style='font-family:"Microsoft YaHei UI";
     font-size:12.0pt;font-weight:normal;font-style:normal;font-family:"Microsoft YaHei UI";
     font-size:12.0pt' lang=en-US> </span><span style='font-family:"Comic Sans MS";
     font-size:12.0pt;font-weight:normal;font-style:normal;font-family:"Comic Sans MS";
     font-size:12.0pt' lang=zh-CN>key</span><span style='font-family:"Microsoft YaHei UI";
     font-size:12.0pt;font-weight:normal;font-style:normal;font-family:"Microsoft YaHei UI";
     font-size:12.0pt' lang=zh-CN>。</span></li>
</ol>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<ol type=1 style='direction:ltr;unicode-bidi:embed;margin-top:0in;margin-bottom:
 0in;margin-left:32px;font-family:"Comic Sans MS";font-size:12.0pt;font-weight:normal;
 font-style:normal'>
 <li value=2 style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt;font-weight:normal;
     font-style:normal;font-family:"Microsoft YaHei UI";font-size:12.0pt'
     lang=zh-CN>如果只有一个参数的话则使用该参数作为</span><span style='font-family:"Microsoft YaHei UI";
     font-size:12.0pt;font-weight:normal;font-style:normal;font-family:"Microsoft YaHei UI";
     font-size:12.0pt' lang=en-US> </span><span style='font-family:"Comic Sans MS";
     font-size:12.0pt;font-weight:normal;font-style:normal;font-family:"Comic Sans MS";
     font-size:12.0pt' lang=zh-CN>key</span><span style='font-family:"Microsoft YaHei UI";
     font-size:12.0pt;font-weight:normal;font-style:normal;font-family:"Microsoft YaHei UI";
     font-size:12.0pt' lang=zh-CN>。</span></li>
</ol>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<ol type=1 style='direction:ltr;unicode-bidi:embed;margin-top:0in;margin-bottom:
 0in;margin-left:32px;font-family:"Comic Sans MS";font-size:12.0pt;font-weight:normal;
 font-style:normal'>
 <li value=3 style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt;font-weight:normal;
     font-style:normal;font-family:"Microsoft YaHei UI";font-size:12.0pt'
     lang=zh-CN>如果参数多余一个的话则使用所有参数的</span><span style='font-family:"Microsoft YaHei UI";
     font-size:12.0pt;font-weight:normal;font-style:normal;font-family:"Microsoft YaHei UI";
     font-size:12.0pt' lang=en-US> </span><span style='font-family:"Comic Sans MS";
     font-size:12.0pt;font-weight:normal;font-style:normal;font-family:"Comic Sans MS";
     font-size:12.0pt' lang=zh-CN>hashCode</span><span style='font-family:"Comic Sans MS";
     font-size:12.0pt;font-weight:normal;font-style:normal;font-family:"Comic Sans MS";
     font-size:12.0pt' lang=en-US> </span><span style='font-family:"Microsoft YaHei UI";
     font-size:12.0pt;font-weight:normal;font-style:normal;font-family:"Microsoft YaHei UI";
     font-size:12.0pt' lang=zh-CN>作为</span><span style='font-family:"Microsoft YaHei UI";
     font-size:12.0pt;font-weight:normal;font-style:normal;font-family:"Microsoft YaHei UI";
     font-size:12.0pt' lang=en-US> </span><span style='font-family:"Comic Sans MS";
     font-size:12.0pt;font-weight:normal;font-style:normal;font-family:"Comic Sans MS";
     font-size:12.0pt' lang=zh-CN>key</span><span style='font-family:"Microsoft YaHei UI";
     font-size:12.0pt;font-weight:normal;font-style:normal;font-family:"Microsoft YaHei UI";
     font-size:12.0pt' lang=zh-CN>。</span></li>
</ol>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>如果需要自定义默认生成策略，可以实现</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>KeyGenerator</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>，然后指定</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>Spring
     Cache</span><span style='font-family:"Comic Sans MS";font-size:12.0pt'
     lang=en-US> </span><span style='font-family:"Microsoft YaHei UI";
     font-size:12.0pt' lang=zh-CN>使用的</span><span style='font-family:"Microsoft YaHei UI";
     font-size:12.0pt' lang=en-US> </span><span style='font-family:"Comic Sans MS";
     font-size:12.0pt' lang=zh-CN>KeyGenerator</span><span style='font-family:
     "Comic Sans MS";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>为自定义实现的</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>KeyGenerator</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>。</span></li>
</ul>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<p style='margin-left:.75in;margin-top:7pt;margin-bottom:7pt;font-size:12.0pt'><span
style='font-family:"Comic Sans MS"'>&lt;cache:annotation-driven</span><span
style='font-family:"Microsoft YaHei UI"'>&nbsp;</span><span style='font-family:
"Comic Sans MS"'>key-generator=</span><span style='font-family:"Comic Sans MS";
color:#B43512'>&quot;userKeyGenerator&quot;</span><span style='font-family:
"Comic Sans MS"'>/&gt;</span></p>

<p style='margin-left:.75in;margin-top:7pt;margin-bottom:7pt;font-size:12.0pt'><span
style='font-family:"Comic Sans MS"'>&lt;bean</span><span style='font-family:
"Microsoft YaHei UI"'>&nbsp;</span><span style='font-family:"Comic Sans MS"'>id=</span><span
style='font-family:"Comic Sans MS";color:#B43512'>&quot;userKeyGenerator&quot;</span><span
style='font-family:"Microsoft YaHei UI"'>&nbsp;</span><span style='font-family:
"Comic Sans MS"'>class=</span><span style='font-family:"Comic Sans MS";
color:#B43512'>&quot;com.xxx.cache.UserKeyGenerator&quot;</span><span
style='font-family:"Comic Sans MS"'>/&gt;</span></p>

<p style='margin-left:.375in;margin-top:7pt;margin-bottom:7pt;font-family:"Comic Sans MS";
font-size:10.5pt;color:#333333'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle;margin-top:7pt;
     margin-bottom:7pt;color:#333333'><span style='font-family:"Microsoft YaHei UI";
     font-size:12.0pt' lang=zh-CN>或者基于</span><span style='font-family:"Comic Sans MS";
     font-size:12.0pt' lang=zh-CN>XML</span><span style='font-family:"Microsoft YaHei UI";
     font-size:12.0pt' lang=zh-CN>配置的</span><span style='font-family:"Microsoft YaHei UI";
     font-size:12.0pt' lang=en-US> </span><span style='font-family:"Comic Sans MS";
     font-size:12.0pt' lang=en-US>&lt;</span><span style='font-family:"Comic Sans MS";
     font-size:12.0pt' lang=zh-CN>cache:advice</span><span style='font-family:
     "Comic Sans MS";font-size:12.0pt' lang=en-US>&gt; </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>来指定的。</span></li>
</ul>

<p style='margin-left:.75in;margin-top:7pt;margin-bottom:7pt;font-size:12.0pt'><span
style='font-family:"Comic Sans MS";color:#333333'>&lt;cache:advice</span><span
style='font-family:"Microsoft YaHei UI";color:#333333'>&nbsp;</span><span
style='font-family:"Comic Sans MS";color:#333333'>id=</span><span
style='font-family:"Comic Sans MS";color:#B43512'>&quot;cacheAdvice&quot;</span><span
style='font-family:"Microsoft YaHei UI";color:#333333'>&nbsp;</span><span
style='font-family:"Comic Sans MS";color:#333333'>cache-manager=</span><span
style='font-family:"Comic Sans MS";color:#B43512'>&quot;cacheManager&quot;</span><span
style='font-family:"Microsoft YaHei UI";color:#333333'>&nbsp;</span><span
style='font-family:"Comic Sans MS";color:#333333'>key-generator=</span><span
style='font-family:"Comic Sans MS";color:#B43512'>&quot;userKeyGenerator&quot;</span><span
style='font-family:"Comic Sans MS";color:#333333'>&gt;</span></p>

<p style='margin-left:.75in;margin-top:7pt;margin-bottom:7pt;font-family:"Comic Sans MS";
font-size:12.0pt;color:#333333'>&lt;/cache:advice&gt;</p>

<p style='margin-left:.75in;margin-top:7pt;margin-bottom:7pt;font-family:"Comic Sans MS";
font-size:12.0pt;color:#333333'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>自定义策略是指可以通过</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>Spring</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>的</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>EL</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>表达式来指定</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>key</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>。这里的</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>EL</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>表达式可以使用方法参数及它们对应的属性。使用方法参数时可以直接使用</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>“</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>#</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>参数名”</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>或者</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>“</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>#p</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>参数</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>index</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>”</span></li>
</ul>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#70AD47'>&nbsp;</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#70AD47'>&nbsp;</p>

<p style='font-family:"Comic Sans MS";font-size:12.0pt;color:#70AD47'>&nbsp;</p>

<p style='font-size:13.5pt'><span style='font-weight:bold;
font-family:"Microsoft YaHei UI"' lang=zh-CN>使用</span><span style='font-weight:
bold;font-family:"Comic Sans MS"' lang=en-US> </span><span style='font-weight:
bold;font-family:"Comic Sans MS"' lang=zh-CN>SpEL</span><span style='font-weight:
bold;font-family:"Comic Sans MS"' lang=en-US> </span><span style='font-weight:
bold;font-family:"Microsoft YaHei UI"' lang=zh-CN>表达式条件</span></p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle;color:black'><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>Spring
     Cache</span><span style='font-family:"Comic Sans MS";font-size:12.0pt'
     lang=en-US> </span><span style='font-family:"Microsoft YaHei UI";
     font-size:12.0pt' lang=zh-CN>提供了一些供我们使用的</span><span style='font-family:
     "Comic Sans MS";font-size:12.0pt' lang=zh-CN>SpEL</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>上下文数据：</span></li>
</ul>

<div style='direction:ltr'>

<table border=1 cellpadding=0 cellspacing=0 valign=top style='direction:ltr;
 border-collapse:collapse;border-style:solid;border-color:#A3A3A3;border-width:
 1pt;margin-left:.3333in' title="" summary="">
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:black;vertical-align:top;width:1.3152in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt;
  color:white'><span style='font-weight:bold'>名称</span></p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:black;vertical-align:top;width:.9923in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt;
  color:white'><span style='font-weight:bold'>位置</span></p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:black;vertical-align:top;width:3.4833in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt;
  color:white'><span style='font-weight:bold'>描述</span></p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:black;vertical-align:top;width:1.4118in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt;
  color:white'><span style='font-weight:bold'>示例</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:white;vertical-align:top;width:1.3152in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt;color:black'>methodName</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:white;vertical-align:top;width:.9923in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt;color:black'><span style='font-family:
  "Comic Sans MS"'>root</span><span style='font-family:"Microsoft YaHei UI"'>对象</span></p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:white;vertical-align:top;width:3.4833in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt;
  color:black'>当前被调用的方法名</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:white;vertical-align:top;width:1.5229in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt;color:black'>root.methodName</p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:1.3152in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt;color:black'>method</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:.9923in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt;color:black'><span style='font-family:
  "Comic Sans MS"'>root</span><span style='font-family:"Microsoft YaHei UI"'>对象</span></p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:3.4833in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt;
  color:black'>当前被调用的方法</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:1.5229in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt;color:black'>root.method.name</p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:white;vertical-align:top;width:1.3152in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt;color:black'>target</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:white;vertical-align:top;width:.9923in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt;color:black'><span style='font-family:
  "Comic Sans MS"'>root</span><span style='font-family:"Microsoft YaHei UI"'>对象</span></p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:white;vertical-align:top;width:3.4833in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt;
  color:black'>当前被调用的目标对象</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:white;vertical-align:top;width:1.4118in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt;color:black'>root.target</p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:1.3152in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt;color:black'>targetClass</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:.9923in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt;color:black'><span style='font-family:
  "Comic Sans MS"'>root</span><span style='font-family:"Microsoft YaHei UI"'>对象</span></p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:3.4833in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt;
  color:black'>当前被调用的目标对象类</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:1.5229in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt;color:black'>root.targetClass</p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:white;vertical-align:top;width:1.3152in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt;color:black'>args</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:white;vertical-align:top;width:.9923in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt;color:black'><span style='font-family:
  "Comic Sans MS"'>root</span><span style='font-family:"Microsoft YaHei UI"'>对象</span></p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:white;vertical-align:top;width:3.4833in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt;
  color:black'>当前被调用的方法的参数列表</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:white;vertical-align:top;width:1.4395in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt;color:black'>root.args[0]</p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:1.3152in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt;color:black'>caches</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:.9923in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt;color:black'><span style='font-family:
  "Comic Sans MS"'>root</span><span style='font-family:"Microsoft YaHei UI"'>对象</span></p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:3.4868in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt;color:black'><span style='font-family:
  "Microsoft YaHei UI"'>当前方法调用使用的缓存列表（如</span><span style='font-family:"Comic Sans MS"'>@Cacheable(value={</span><span
  style='font-family:"Microsoft YaHei UI"'>“</span><span style='font-family:
  "Comic Sans MS"'>cache1</span><span style='font-family:"Microsoft YaHei UI"'>”</span><span
  style='font-family:"Comic Sans MS"'>, </span><span style='font-family:"Microsoft YaHei UI"'>“</span><span
  style='font-family:"Comic Sans MS"'>cache2</span><span style='font-family:
  "Microsoft YaHei UI"'>”</span><span style='font-family:"Comic Sans MS"'>})</span><span
  style='font-family:"Microsoft YaHei UI"'>），则有两个</span><span style='font-family:
  "Comic Sans MS"'>cache</span></p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:1.627in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt;color:black'>root.caches[0].name</p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:white;vertical-align:top;width:1.334in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt;color:black'>argument
  name</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:white;vertical-align:top;width:1.0118in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt;
  color:black'>执行上下文</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:white;vertical-align:top;width:3.4833in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt;color:black'><span style='font-family:
  "Microsoft YaHei UI"'>当前被调用的方法的参数，如</span><span style='font-family:"Comic Sans MS"'>findById(Long
  id)</span><span style='font-family:"Microsoft YaHei UI"'>，我们可以通过</span><span
  style='font-family:"Comic Sans MS"'>#id</span><span style='font-family:"Microsoft YaHei UI"'>拿到参数</span></p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:white;vertical-align:top;width:1.3729in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt;color:black'>user.id</p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:1.3152in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt;color:black'>result</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:1.0118in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt;
  color:black'>执行上下文</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:3.4833in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt;color:black'><span style='font-family:
  "Microsoft YaHei UI"'>方法执行后的返回值（仅当方法执行之后的判断有效，如‘</span><span
  style='font-family:"Comic Sans MS"'>unless</span><span style='font-family:
  "Microsoft YaHei UI"'>’，’</span><span style='font-family:"Comic Sans MS"'>cache
  evict</span><span style='font-family:"Microsoft YaHei UI"'>’的</span><span
  style='font-family:"Comic Sans MS"'>beforeInvocation=false</span><span
  style='font-family:"Microsoft YaHei UI"'>）</span></p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:1.3923in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt;color:black'>result</p>
  </td>
 </tr>
</table>

</div>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt;
color:#70AD47'><span style='font-weight:bold'>示例</span></p>

<p style='margin-left:.375in;margin-top:5pt;margin-bottom:5pt;font-family:"Comic Sans MS";
font-size:12.0pt;color:#FFC000'>@Service</p>

<p style='margin-left:.375in;margin-top:5pt;margin-bottom:5pt;font-size:12.0pt;
color:#70AD47'><span style='font-family:"Comic Sans MS"' lang=en-US>//</span><span
style='font-family:"Microsoft YaHei UI"' lang=zh-CN>开启缓存</span></p>

<p style='margin-left:.375in;margin-top:5pt;margin-bottom:5pt;font-family:"Comic Sans MS";
font-size:12.0pt;color:#FFC000'><span lang=en-US>@</span><span lang=zh-CN>EnableCaching</span></p>

<p style='margin-left:.375in;margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
style='font-family:"Comic Sans MS";color:blue'>public</span><span
style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
style='font-family:"Comic Sans MS";color:blue'>class</span><span
style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
style='font-family:"Comic Sans MS";color:black'>RedisService</span><span
style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
style='font-family:"Comic Sans MS";color:black'>{</span></p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#FFC000'>@CacheEvict</span>(value =
&quot;user&quot;, </p>

<p style='margin-left:1.125in;font-family:"Comic Sans MS";
font-size:12.0pt'>key = &quot;#user.id&quot;, </p>

<p style='margin-left:1.125in;font-family:"Comic Sans MS";
font-size:12.0pt'>condition = &quot;#root.target.canCache() </p>

<p style='margin-left:2.25in;font-family:"Comic Sans MS";font-size:
12.0pt'>and </p>

<p style='margin-left:2.25in;font-family:"Comic Sans MS";font-size:
12.0pt'>#root.caches[0].get(#user.id).get().username </p>

<p style='margin-left:2.25in;font-family:"Comic Sans MS";font-size:
12.0pt'>ne </p>

<p style='margin-left:2.25in;font-family:"Comic Sans MS";font-size:
12.0pt'>#user.username&quot;, beforeInvocation = true</p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'>) </p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'><span lang=zh-CN>public void conditionUpdate(User user) </span><span
lang=en-US>{</span></p>

<p style='margin-left:1.125in;font-family:"Comic Sans MS";
font-size:12.0pt' lang=en-US>…</p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt' lang=en-US>}</p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt' lang=en-US>&nbsp;</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt' lang=en-US>}</p>

<p><cite style='font-family:"Comic Sans MS";font-size:12.0pt'>&nbsp;</cite></p>

<p><cite style='font-size:12.0pt;color:#595959'><span
style='font-family:"Microsoft YaHei UI"'>来自</span><span style='font-family:
"Comic Sans MS"'> &lt;</span><a
href="https://www.cnblogs.com/qlqwjy/p/8559119.html"><span style='font-family:
"Comic Sans MS"'>https://www.cnblogs.com/qlqwjy/p/8559119.html</span></a><span
style='font-family:"Comic Sans MS"'>&gt; </span></cite></p>

</div>

</div>

</div>

<!--EndFragment-->
</body>
