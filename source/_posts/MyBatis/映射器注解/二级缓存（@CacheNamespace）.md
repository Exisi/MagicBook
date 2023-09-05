---
categories:
  - MyBatis
date:
  - 2021-3-27 7:42:01
tags:
  - ［@CacheNamespace］
---

<body lang=zh-CN style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>
<!--StartFragment-->

<div style='direction:ltr;border-width:100%'>

<div style='direction:ltr;margin-top:0in;margin-left:0in;width:8.3472in'>

<div style='direction:ltr;margin-top:0in;margin-left:0in;width:8.3472in'>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Comic Sans MS";font-size:12.0pt;color:#FFC000'
     lang=zh-CN>@CacheNamespace</span><span style='font-family:"Comic Sans MS";
     font-size:12.0pt' lang=en-US> </span><span style='font-family:"Microsoft YaHei UI";
     font-size:12.0pt' lang=zh-CN>注解主要用于</span><span style='font-family:"Microsoft YaHei UI";
     font-size:12.0pt' lang=en-US> </span><span style='font-family:"Comic Sans MS";
     font-size:12.0pt' lang=zh-CN>mybatis</span><span style='font-family:"Comic Sans MS";
     font-size:12.0pt' lang=en-US> </span><span style='font-family:"Microsoft YaHei UI";
     font-size:12.0pt' lang=zh-CN>二级缓存，等同于</span><span style='font-family:"Comic Sans MS";
     font-size:12.0pt' lang=zh-CN>&lt;cache&gt;</span><span style='font-family:
     "Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>属性。默认情况下，</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>MyBatis</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>没有开启二级缓存</span></li>
</ul>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Comic Sans MS";font-size:12.0pt;color:#FFC000'
     lang=en-US>@</span><span style='font-family:"Comic Sans MS";font-size:
     12.0pt;color:#FFC000' lang=zh-CN>CacheNamespace</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>注解有以下属性：</span></li>
</ul>

<div style='direction:ltr'>

<table border=1 cellpadding=0 cellspacing=0 valign=top style='direction:ltr;
 border-collapse:collapse;border-style:solid;border-color:#A3A3A3;border-width:
 1pt;margin-left:.3333in' title="" summary="">
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:black;vertical-align:top;width:1.5506in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt;
  color:white'><span style='font-weight:bold'>属性</span></p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:black;vertical-align:top;width:6.2631in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt;
  color:white'><span style='font-weight:bold'>描述</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:1.5506in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>implemetation</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:6.2631in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt'><span style='font-family:"Microsoft YaHei UI"'>设置缓存的默认实现接口，默认是</span><span
  style='font-family:"Comic Sans MS"'>PerpetualCache.class</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:1.5506in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>eviction</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:6.2631in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt'><span style='font-family:"Microsoft YaHei UI"'>默认溢出淘汰策略，默认</span><span
  style='font-family:"Comic Sans MS"'>LruCache.class</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:1.5506in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>flushInterval</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:6.2631in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt'><span style='font-family:"Microsoft YaHei UI"'>缓存有效期，默认</span><span
  style='font-family:"Comic Sans MS"'>0 </span><span style='font-family:"Microsoft YaHei UI"'>即用不失效</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:1.5506in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>size</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:6.2631in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt'>缓存容量</p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:1.5506in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>readWrite</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:6.2631in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt'>支持缓存读写策略</p>
  <p style='font-size:11.5pt'><span style='font-family:"Microsoft YaHei UI"'>当该属性被设置为</span><span
  style='font-family:"Comic Sans MS"'>true</span><span style='font-family:"Microsoft YaHei UI"'>时，缓存命名空间将支持读写操作，缓存数据允许被更新；当该属性被设置为</span><span
  style='font-family:"Comic Sans MS"'>false</span><span style='font-family:
  "Microsoft YaHei UI"'>时，缓存命名空间将只支持读操作，缓存数据无法被更新</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:1.5506in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>blocking</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:6.3326in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt'>设置是否阻塞。</p>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>&nbsp;</p>
  <p style='font-size:11.5pt'><span style='font-family:"Microsoft YaHei UI"'
  lang=zh-CN>当该属性被设置为</span><span style='font-family:"Comic Sans MS"'
  lang=en-US> </span><span style='font-family:"Comic Sans MS"' lang=zh-CN>true</span><span
  style='font-family:"Comic Sans MS"' lang=en-US> </span><span
  style='font-family:"Microsoft YaHei UI"' lang=zh-CN>时，如果多个线程同时请求同一个缓存项，只有一个线程能够获取到锁并执行查询操作，其他线程会等待该线程查询完毕后再从缓存中获取数据。可以避免缓存穿透和雪崩问题。</span></p>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>&nbsp;</p>
  <p style='font-size:11.5pt'><span style='font-family:"Microsoft YaHei UI"'
  lang=zh-CN>当该属性被设置为</span><span style='font-family:"Comic Sans MS"'
  lang=en-US> </span><span style='font-family:"Comic Sans MS"' lang=zh-CN>false</span><span
  style='font-family:"Comic Sans MS"' lang=en-US> </span><span
  style='font-family:"Microsoft YaHei UI"' lang=zh-CN>时，则不会启用阻塞模式，多个线程同时请求同一个缓存项时，每个线程都会去执行查询操作，并将结果放入缓存中。这种情况下可能会出现缓存穿透和雪崩问题。</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:1.5506in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>properties</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:6.3326in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt'><span style='font-family:"Microsoft YaHei UI"'>用于配置缓存的属性，可以通过该属性设置缓存的一些参数，例如缓存的大小、过期时间等。具体来说，</span><span
  style='font-family:"Comic Sans MS"'>properties </span><span style='font-family:
  "Microsoft YaHei UI"'>属性是一个数组，每个元素都是一个</span><span style='font-family:"Comic Sans MS"'>
  Property </span><span style='font-family:"Microsoft YaHei UI"'>对象，用于表示一个缓存属性</span></p>
  </td>
 </tr>
</table>

</div>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt;
color:#70AD47'><span style='font-weight:bold'>示例</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#FFC000'>@CacheNamespace</span>(implementation =
MybatisRedisCache.class) </p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span lang=zh-CN>public</span><span lang=en-US> </span><span
lang=zh-CN>interface UserMapper(</span><span lang=en-US>){</span></p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt' lang=en-US>…</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>}</p>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt;
color:#70AD47'><span style='font-weight:bold'>示例</span></p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span style='color:#FFC000'>@CacheNamespace</span>(</p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'>implementation = PerpetualCache.class,</p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'>flushInterval = 60000,</p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'>size = 1024,</p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'>readWrite = true,</p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt'>blocking = false,</p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
11.5pt'>properties = {</p>

<p style='margin-left:1.125in;font-family:"Comic Sans MS"'><span
style='font-size:11.5pt;color:#FFC000'>@Property</span><span style='font-size:
11.5pt'>(name = </span><span style='font-size:12.0pt;color:#78230C'>&quot;sizeLimit</span><span
style='font-size:11.5pt;color:#78230C'>&quot;</span><span style='font-size:
11.5pt'>, value = </span><span style='font-size:11.5pt;color:#78230C'>&quot;1000&quot;</span><span
style='font-size:11.5pt'>),</span></p>

<p style='margin-left:1.125in;font-family:"Comic Sans MS";
font-size:11.5pt'><span style='color:#FFC000'>@Property</span>(name = <span
style='color:#78230C'>&quot;timeToIdleSeconds&quot;</span>, value = <span
style='color:#78230C'>&quot;600&quot;</span>),</p>

<p style='margin-left:1.125in;font-family:"Comic Sans MS";
font-size:11.5pt'><span style='color:#FFC000'>@Property</span>(name = <span
style='color:#78230C'>&quot;timeToLiveSeconds&quot;</span>, value = <span
style='color:#78230C'>&quot;1800&quot;</span>)</p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
11.5pt'>}</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>) </p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'><span lang=zh-CN>public</span><span lang=en-US> </span><span
lang=zh-CN>interface UserMapper(</span><span lang=en-US>){</span></p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt' lang=en-US>…</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>}</p>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt'><span
style='font-weight:bold'>注</span></p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:11.5pt'>当启用二级缓存的阻塞模式时，如果某个线程在获取锁后执行查询操作的时间过长，可能会导致其他线程等待时间过长或者超时。因此，在使用阻塞模式时需要根据实际情况合理设置等待时间和超时时间。</span></li>
</ul>

<p style='font-family:"Comic Sans MS";font-size:11.5pt'>&nbsp;</p>

<p style='font-family:"Comic Sans MS";font-size:11.5pt'>&nbsp;</p>

<p style='font-family:"Comic Sans MS";font-size:12.0pt'>&nbsp;</p>

<p><cite style='font-size:12.0pt;color:#595959'><span
style='font-family:"Microsoft YaHei UI"'>来自</span><span style='font-family:
"Comic Sans MS"'> &lt; </span><a
href="https://www.cnblogs.com/liuyingke/p/14863399.html"><span
style='font-family:"Comic Sans MS"'>https://www.cnblogs.com/liuyingke/p/14863399.html</span></a><span
style='font-family:"Comic Sans MS"'>&gt; </span></cite></p>

</div>

</div>

</div>

<!--EndFragment-->
</body>
