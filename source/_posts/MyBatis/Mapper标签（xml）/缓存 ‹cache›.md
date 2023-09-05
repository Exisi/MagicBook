---
categories:
  - MyBatis
tags:
  - ‹cache›
date:
  - 2023-3-27 7:31:40
---

<body lang=zh-CN style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>
<!--StartFragment-->

<div style='direction:ltr;border-width:100%'>

<div style='direction:ltr;margin-top:0in;margin-left:0in;width:9.1548in'>

<div style='direction:ltr;margin-top:0in;margin-left:0in;width:9.1548in'>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>&lt;cache&gt;</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>元素用于配置</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>MyBatis</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>的二级缓存，可以在</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>Mapper</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>文件中的任意位置使用。当启用了二级缓存后，</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>MyBatis</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>会将查询结果缓存在内存中，以避免频繁地访问数据库，从而提高应用程序的性能。</span></li>
</ul>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>在</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>mybatis</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>的配置文件中，默认</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>setting</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>的属性</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>cacheEnabled</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>的值为</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>true</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>，即默认开启二级缓存</span></li>
</ul>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle;margin-top:0pt;
     margin-bottom:7pt;line-height:21pt;color:#333333'><span style='font-family:
     "Microsoft YaHei UI";font-size:12.0pt'>开启二级缓存后，缓存会有以下效果：</span></li>
 <ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
  margin-bottom:0in'>
  <li style='margin-top:0;margin-bottom:0;vertical-align:middle;line-height:
      18pt;color:#333333'><span style='font-family:"Microsoft YaHei UI";
      font-size:12.0pt'>映射语句文件中的所有</span><span style='font-family:"Comic Sans MS";
      font-size:12.0pt'> select </span><span style='font-family:"Microsoft YaHei UI";
      font-size:12.0pt'>语句的结果将会被缓存。</span></li>
 </ul>
</ul>

<p style='margin-left:.75in;line-height:18pt;font-family:"Microsoft YaHei UI";
font-size:12.0pt;color:#333333'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle;line-height:
     18pt;color:#333333'><span style='font-family:"Microsoft YaHei UI";
     font-size:12.0pt'>映射语句文件中的所有</span><span style='font-family:"Comic Sans MS";
     font-size:12.0pt'> insert</span><span style='font-family:"Microsoft YaHei UI";
     font-size:12.0pt'>、</span><span style='font-family:"Comic Sans MS";
     font-size:12.0pt'>update </span><span style='font-family:"Microsoft YaHei UI";
     font-size:12.0pt'>和</span><span style='font-family:"Comic Sans MS";
     font-size:12.0pt'> delete </span><span style='font-family:"Microsoft YaHei UI";
     font-size:12.0pt'>语句会刷新缓存。</span></li>
</ul>

<p style='margin-left:.375in;line-height:18pt;font-family:"Microsoft YaHei UI";
font-size:12.0pt;color:#333333'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle;line-height:
     18pt;color:#333333'><span style='font-family:"Microsoft YaHei UI";
     font-size:12.0pt'>缓存会使用最近最少使用算法（</span><span style='font-family:"Comic Sans MS";
     font-size:12.0pt'>LRU, Least Recently Used</span><span style='font-family:
     "Microsoft YaHei UI";font-size:12.0pt'>）算法来清除不需要的缓存。</span></li>
</ul>

<p style='margin-left:.75in;line-height:18pt;font-family:"Microsoft YaHei UI";
font-size:12.0pt;color:#333333'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle;line-height:
     18pt;color:#333333'><span style='font-family:"Microsoft YaHei UI";
     font-size:12.0pt'>缓存不会定时进行刷新（也就是说，没有刷新间隔）。</span></li>
</ul>

<p style='margin-left:.75in;line-height:18pt;font-family:"Microsoft YaHei UI";
font-size:12.0pt;color:#333333'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle;line-height:
     18pt;color:#333333'><span style='font-family:"Microsoft YaHei UI";
     font-size:12.0pt'>缓存会保存列表或对象（无论查询方法返回哪种）的</span><span style='font-family:
     "Comic Sans MS";font-size:12.0pt'> 1024 </span><span style='font-family:
     "Microsoft YaHei UI";font-size:12.0pt'>个引用。</span></li>
</ul>

<p style='margin-left:.75in;line-height:18pt;font-family:"Microsoft YaHei UI";
font-size:12.0pt;color:#333333'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle;line-height:
     18pt;color:#333333'><span style='font-family:"Microsoft YaHei UI";
     font-size:12.0pt'>缓存会被视为读</span><span style='font-family:"Comic Sans MS";
     font-size:12.0pt'>/</span><span style='font-family:"Microsoft YaHei UI";
     font-size:12.0pt'>写缓存，这意味着获取到的对象并不是共享的，可以安全地被调用者修改，而不干扰其他调用者或线程所做的潜在修改。</span></li>
</ul>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt;
color:#70AD47'><span style='font-weight:bold'>示例</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&lt;cache type=<span style='color:#70AD47'>&quot;org.apache.ibatis.cache.decorators.LruCache&quot;</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='mso-spacerun:yes'>           </span>eviction=<span
style='color:#70AD47'>&quot;LRU&quot;</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='mso-spacerun:yes'>           </span>flushInterval=<span
style='color:#70AD47'>&quot;60000&quot;</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='mso-spacerun:yes'>           </span>size=<span
style='color:#70AD47'>&quot;1024&quot;</span>/&gt;</p>

<p style='margin-left:.375in;font-family:"Microsoft YaHei UI";
font-size:12.0pt'>&nbsp;</p>

<div style='direction:ltr'>

<table border=1 cellpadding=0 cellspacing=0 valign=top style='direction:ltr;
 border-collapse:collapse;border-style:solid;border-color:#A3A3A3;border-width:
 1pt;margin-left:.3333in' title="" summary="">
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:black;vertical-align:top;width:1.4861in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt;
  color:white'><span style='font-weight:bold'>属性</span></p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:black;vertical-align:top;width:6.168in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt;
  color:white'><span style='font-weight:bold'>说明</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:1.4861in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>type</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:6.2375in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt'><span style='font-family:"Microsoft YaHei UI"'>指定缓存的实现类。</span><span
  style='font-family:"Comic Sans MS"'>MyBatis</span><span style='font-family:
  "Microsoft YaHei UI"'>默认提供了多种缓存实现类，如</span><span style='font-family:"Comic Sans MS"'>org.apache.ibatis.cache.impl.PerpetualCache</span><span
  style='font-family:"Microsoft YaHei UI"'>、</span><span style='font-family:
  "Comic Sans MS"'>org.apache.ibatis.cache.decorators.LruCache</span><span
  style='font-family:"Microsoft YaHei UI"'>等。</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:1.4861in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>eviction</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:6.168in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt'>指定缓存的清除策略。可用的清除策略有：</p>
  <ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
   margin-bottom:0in'>
   <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
       style='font-family:"Comic Sans MS";font-size:11.5pt'>LRU – </span><span
       style='font-family:"Microsoft YaHei UI";font-size:11.5pt'>最近最少使用：移除最长时间不被使用的对象。</span></li>
   <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
       style='font-family:"Comic Sans MS";font-size:11.5pt'>FIFO – </span><span
       style='font-family:"Microsoft YaHei UI";font-size:11.5pt'>先进先出：按对象进入缓存的顺序来移除它们。</span></li>
   <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
       style='font-family:"Comic Sans MS";font-size:11.5pt'>SOFT – </span><span
       style='font-family:"Microsoft YaHei UI";font-size:11.5pt'>软引用：基于垃圾回收器状态和软引用规则移除对象。</span></li>
   <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
       style='font-family:"Comic Sans MS";font-size:11.5pt'>WEAK – </span><span
       style='font-family:"Microsoft YaHei UI";font-size:11.5pt'>弱引用：更积极地基于垃圾收集器状态和弱引用规则移除对象。</span></li>
  </ul>
  <p style='font-size:11.5pt'><span style='font-family:"Microsoft YaHei UI"'>默认的清除策略是</span><span
  style='font-family:"Comic Sans MS"'> LRU</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:1.4861in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>flushInterval</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:6.2354in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt'>刷新间隔。属性可以被设置为任意的正整数，设置的值应该是一个以毫秒为单位的合理时间量。
  默认情况是不设置，也就是没有刷新间隔，缓存仅仅会在调用语句时刷新。</p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:1.4861in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>size</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:6.2354in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt'><span style='font-family:"Microsoft YaHei UI"'>引用数目。属性可以被设置为任意正整数，要注意欲缓存对象的大小和运行环境中可用的内存资源。默认值是</span><span
  style='font-family:"Comic Sans MS"'> 1024</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:1.4861in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>readOnly</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:6.2375in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt'><span style='font-family:"Microsoft YaHei UI"'>只读。属性可以被设置为</span><span
  style='font-family:"Comic Sans MS"'> true </span><span style='font-family:
  "Microsoft YaHei UI"'>或</span><span style='font-family:"Comic Sans MS"'>
  false</span><span style='font-family:"Microsoft YaHei UI"'>。只读的缓存会给所有调用者返回缓存对象的相同实例。
  因此这些对象不能被修改。这就提供了可观的性能提升。而可读写的缓存会（通过序列化）返回缓存对象的拷贝。 速度上会慢一些，但是更安全，因此默认值是</span><span
  style='font-family:"Comic Sans MS"'> false</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:1.4861in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>blocking</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:6.2375in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt'><span style='font-family:"Microsoft YaHei"'>用于控制</span><span
  style='font-family:"Comic Sans MS"'>MyBatis</span><span style='font-family:
  "Microsoft YaHei"'>在缓存未命中时的行为。默认为</span><span style='font-family:"Comic Sans MS"'>false</span><span
  style='font-family:"Microsoft YaHei"'>，即不会阻塞线程。</span></p>
  <p style='font-size:11.5pt'><span style='font-family:"Microsoft YaHei"'>当一个线程在缓存中未找到需要的数据时，如果</span><span
  style='font-family:"Comic Sans MS"'>blocking</span><span style='font-family:
  "Microsoft YaHei"'>属性为</span><span style='font-family:"Comic Sans MS"'>true</span><span
  style='font-family:"Microsoft YaHei"'>，则</span><span style='font-family:"Comic Sans MS"'>MyBatis</span><span
  style='font-family:"Microsoft YaHei"'>会暂时锁定当前线程，直到缓存中有对应的数据或者等待超时；如果</span><span
  style='font-family:"Comic Sans MS"'>blocking</span><span style='font-family:
  "Microsoft YaHei"'>属性为</span><span style='font-family:"Comic Sans MS"'>false</span><span
  style='font-family:"Microsoft YaHei"'>，则</span><span style='font-family:"Comic Sans MS"'>MyBatis</span><span
  style='font-family:"Microsoft YaHei"'>会立即返回未命中的结果，不会等待其他线程将数据放入缓存。</span></p>
  </td>
 </tr>
</table>

</div>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt'><span
style='font-weight:bold'>注</span></p>

<p style='margin-left:.375in;font-size:12.0pt'><span
style='font-family:"Microsoft YaHei"'>缓存只作用于</span><span style='font-family:
"Comic Sans MS"'> cache </span><span style='font-family:"Microsoft YaHei"'>标签所在的映射文件中的语句</span></p>

</div>

</div>

</div>

<!--EndFragment-->
</body>
