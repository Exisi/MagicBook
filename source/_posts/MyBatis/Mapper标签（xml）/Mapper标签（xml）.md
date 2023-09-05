---
categories:
  - MyBatis
date:
  - 2023-3-27 7:29:01
---

<body lang=zh-CN style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>
<!--StartFragment-->

<div style='direction:ltr;border-width:100%'>

<div style='direction:ltr;margin-top:0in;margin-left:0in;width:8.1513in'>

<div style='direction:ltr;margin-top:0in;margin-left:0in;width:8.1513in'>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US>Mapper.xml
     </span><span style='font-family:"Microsoft YaHei";font-size:12.0pt'
     lang=zh-CN>映射的标签</span></li>
</ul>

<div style='direction:ltr'>

<table border=1 cellpadding=0 cellspacing=0 valign=top style='direction:ltr;
 border-collapse:collapse;border-style:solid;border-color:#A3A3A3;border-width:
 1pt;margin-left:.3333in' title="" summary="">
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:black;vertical-align:top;width:2.425in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei";font-size:11.5pt;
  color:white'><span style='font-weight:bold'>标签</span></p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:black;vertical-align:top;width:5.2631in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei";font-size:11.5pt;
  color:white'><span style='font-weight:bold'>描述</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#757070;vertical-align:top;width:2.425in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt;color:white'><span style='font-weight:
  bold;font-family:"Comic Sans MS"' lang=en-US>sql</span><span
  style='font-weight:bold;font-family:"Microsoft YaHei"' lang=zh-CN>语句</span></p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#757070;vertical-align:top;width:5.2631in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt;color:white'>&nbsp;</p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:white;vertical-align:top;width:2.425in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'
  lang=en-US>&lt;select&gt;</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:white;vertical-align:top;width:5.2631in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='margin:0in'><span style='font-family:"Microsoft YaHei";font-size:
  11.5pt'>表数据</span><span style='font-family:"Comic Sans MS";font-size:12.0pt'>SQL</span><span
  style='font-family:"Microsoft YaHei";font-size:11.5pt'>的查询</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:2.425in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'
  lang=en-US>&lt;insert&gt;</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:5.2631in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='margin:0in'><span style='font-family:"Microsoft YaHei";font-size:
  11.5pt'>表数据</span><span style='font-family:"Comic Sans MS";font-size:12.0pt'>SQL</span><span
  style='font-family:"Microsoft YaHei";font-size:11.5pt'>的增加</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:2.425in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'
  lang=en-US>&lt;delete&gt;</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:5.2631in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='margin:0in'><span style='font-family:"Microsoft YaHei";font-size:
  11.5pt'>表数据</span><span style='font-family:"Comic Sans MS";font-size:12.0pt'>SQL</span><span
  style='font-family:"Microsoft YaHei";font-size:11.5pt'>的删除</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:2.425in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'
  lang=en-US>&lt;update&gt;</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:5.2631in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='margin:0in'><span style='font-family:"Microsoft YaHei";font-size:
  11.5pt'>表数据</span><span style='font-family:"Comic Sans MS";font-size:12.0pt'>SQL</span><span
  style='font-family:"Microsoft YaHei";font-size:11.5pt'>的更新</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#757070;vertical-align:top;width:2.425in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei";font-size:11.5pt;
  color:white'><span style='font-weight:bold'>缓存</span></p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#757070;vertical-align:top;width:5.2631in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>&nbsp;</p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:white;vertical-align:top;width:2.425in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>&lt;cache&gt;</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:white;vertical-align:top;width:5.2631in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt'><span style='font-family:"Microsoft YaHei UI"'
  lang=zh-CN>二级缓存，可以在</span><span style='font-family:"Microsoft YaHei UI"'
  lang=en-US> </span><span style='font-family:"Comic Sans MS"' lang=zh-CN>Mapper</span><span
  style='font-family:"Comic Sans MS"' lang=en-US> </span><span
  style='font-family:"Microsoft YaHei UI"' lang=zh-CN>文件中的任意位置使用</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:2.425in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'><span
  lang=en-US>&lt;</span><span lang=zh-CN>cache-ref</span><span lang=en-US>&gt;</span></p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:5.2631in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt'>用于引用其他命名空间中定义的缓存</p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#757070;vertical-align:top;width:2.425in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt;color:white'><span style='font-weight:
  bold;font-family:"Comic Sans MS"' lang=en-US>sql</span><span
  style='font-weight:bold;font-family:"Microsoft YaHei"' lang=zh-CN>片段</span></p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#757070;vertical-align:top;width:5.2631in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei";font-size:11.5pt'>&nbsp;</p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:white;vertical-align:top;width:2.425in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'
  lang=en-US>&lt;sql&gt;</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:white;vertical-align:top;width:5.3326in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt'><span style='font-family:"PingFang SC";
  color:#4D4D4D'>通过该标签可定义能复用的</span><span style='font-family:"Comic Sans MS"'>sql</span><span
  style='font-family:"Microsoft YaHei"'>语句片段，在执行</span><span style='font-family:
  "Comic Sans MS"'>sql</span><span style='font-family:"Microsoft YaHei"'>语句标签中直接引用即可</span></p>
  <p style='font-size:11.5pt'><span style='font-weight:bold;
  font-family:"Comic Sans MS";color:#333333' lang=zh-CN>&lt;include</span><span
  style='font-family:"Microsoft YaHei"' lang=zh-CN>&nbsp;</span><span
  style='font-family:"Comic Sans MS"' lang=zh-CN>refid=&quot;</span><span
  style='font-family:"Comic Sans MS"' lang=en-US>sql</span><span
  style='font-family:"Comic Sans MS"' lang=zh-CN>&quot;</span><span
  style='font-family:"Microsoft YaHei"' lang=zh-CN>&nbsp;</span><span
  style='font-weight:bold;font-family:"Comic Sans MS";color:#333333'
  lang=zh-CN>/&gt;</span><span style='font-family:"Microsoft YaHei"'
  lang=zh-CN>&nbsp;</span></p>
  <p style='font-family:"Microsoft YaHei";font-size:11.5pt'>这样既可以提高编码效率，还能有效简化代码，提高可读性</p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#757070;vertical-align:top;width:2.425in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei";font-size:11.5pt;
  color:white'><span style='font-weight:bold'>映射管理集</span></p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#757070;vertical-align:top;width:5.2631in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>&nbsp;</p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:2.425in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'
  lang=en-US>&lt;resultMap&gt;</p>
  <p style='margin-left:.375in;font-family:"Comic Sans MS";
  font-size:12.0pt'>&lt;constructor&gt; </p>
  <p style='margin-left:.375in;font-family:"Comic Sans MS";
  font-size:12.0pt'>&lt;id&gt;</p>
  <p style='margin-left:.375in;font-family:"Comic Sans MS";
  font-size:12.0pt'>&lt;result&gt;</p>
  <p style='margin-left:.375in;font-family:"Comic Sans MS";
  font-size:12.0pt'>&lt;association&gt;</p>
  <p style='margin-left:.375in;font-family:"Comic Sans MS";
  font-size:12.0pt'>&lt;collection&gt;</p>
  <p style='margin-left:.375in;font-family:"Comic Sans MS";
  font-size:12.0pt'>&lt;discriminator&gt;</p>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'
  lang=en-US>&lt;/resultMap&gt;</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:5.2631in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei";font-size:11.5pt'>使用其可以进行实体类之间的关系，并管理结果和实体类间的映射关系</p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#757070;vertical-align:top;width:2.425in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei";font-size:11.5pt;
  color:white'><span style='font-weight:bold'>动态语句</span></p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#757070;vertical-align:top;width:5.2631in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>&nbsp;</p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:white;vertical-align:top;width:2.425in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'
  lang=en-US>&lt;if&gt;</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:white;vertical-align:top;width:5.3305in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt'><span style='font-family:"Microsoft YaHei"'>条件判断标签，配置属性</span><span
  style='font-family:"Comic Sans MS"'>test=&quot;</span><span style='font-family:
  "Microsoft YaHei"'>判断条件</span><span style='font-family:"Comic Sans MS"'>&quot;</span><span
  style='font-family:"Microsoft YaHei"'>，判断是否满足条件，满足则执行，不满足则跳过</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:2.425in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'
  lang=en-US>&lt;trim&gt;</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:5.2965in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt'><span style='font-family:"Microsoft YaHei UI"'
  lang=zh-CN>子句首尾的删除与添加，它就是一个</span><span style='font-family:"Comic Sans MS"'
  lang=zh-CN>SQL</span><span style='font-family:"Microsoft YaHei UI"'
  lang=zh-CN>字符串处理工具，主要用于补充</span><span style='font-family:"Comic Sans MS"'
  lang=zh-CN>SQL</span><span style='font-family:"Microsoft YaHei UI"'
  lang=zh-CN>语句和去除</span><span style='font-family:"Comic Sans MS"' lang=en-US>AND</span><span
  style='font-family:"Microsoft YaHei UI"' lang=zh-CN>、</span><span
  style='font-family:"Comic Sans MS"' lang=en-US>OR</span><span
  style='font-family:"Microsoft YaHei UI"' lang=zh-CN>或逗号</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:white;vertical-align:top;width:2.425in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'
  lang=en-US>&lt;where&gt;</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:white;vertical-align:top;width:5.3326in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt'><span style='font-family:"Microsoft YaHei"'>使用其可以代替</span><span
  style='font-family:"Comic Sans MS"'>SQL</span><span style='font-family:"Microsoft YaHei"'>语句中的</span><span
  style='font-family:"Comic Sans MS"'>where</span><span style='font-family:
  "Microsoft YaHei"'>关键字，一般放置在</span><span style='font-family:"Comic Sans MS"'>SQL</span><span
  style='font-family:"Microsoft YaHei"'>语句条件查询的最外层，</span><span
  style='font-family:"Comic Sans MS"'>where </span><span style='font-family:
  "Microsoft YaHei UI"'>元素只有在一个以上的</span><span style='font-family:"Comic Sans MS"'>if</span><span
  style='font-family:"Microsoft YaHei UI"'>条件有值的情况下才去插入</span><span
  style='font-family:"Comic Sans MS"'>“WHERE”</span><span style='font-family:
  "Microsoft YaHei UI"'>子句</span></p>
  <p style='font-size:11.5pt'><span style='font-family:"Microsoft YaHei UI"'
  lang=zh-CN>若</span><span style='font-family:"Comic Sans MS"' lang=en-US>where</span><span
  style='font-family:"Microsoft YaHei UI"' lang=zh-CN>语句后是</span><span
  style='font-family:"Comic Sans MS"' lang=en-US>&quot;</span><span
  style='font-family:"Comic Sans MS"' lang=zh-CN>AND</span><span
  style='font-family:"Comic Sans MS"' lang=en-US>&quot;</span><span
  style='font-family:"Microsoft YaHei UI"' lang=zh-CN>或</span><span
  style='font-family:"Comic Sans MS"' lang=en-US>&quot;</span><span
  style='font-family:"Comic Sans MS"' lang=zh-CN>OR</span><span
  style='font-family:"Comic Sans MS"' lang=en-US>&quot;</span><span
  style='font-family:"Microsoft YaHei UI"' lang=zh-CN>开头，</span><span
  style='font-family:"Comic Sans MS"' lang=zh-CN>where </span><span
  style='font-family:"Microsoft YaHei UI"' lang=zh-CN>元素会忽略并修改拼接成正确的</span><span
  style='font-family:"Comic Sans MS"' lang=en-US>sql</span><span
  style='font-family:"Microsoft YaHei UI"' lang=zh-CN>，如果第一个</span><span
  style='font-family:"Comic Sans MS"' lang=en-US>if</span><span
  style='font-family:"Microsoft YaHei UI"' lang=zh-CN>语句判断错误，则</span><span
  style='font-family:"Comic Sans MS"' lang=en-US>where and</span><span
  style='font-family:"Microsoft YaHei UI"' lang=zh-CN>会改成</span><span
  style='font-family:"Comic Sans MS"' lang=en-US>where</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:2.425in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'
  lang=en-US>&lt;set&gt;</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:5.2805in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt'><span style='font-family:"Microsoft YaHei"'>常用于</span><span
  style='font-family:"Comic Sans MS"'>&lt;update&gt;</span><span
  style='font-family:"Microsoft YaHei"'>更新语句中，替代</span><span style='font-family:
  "Comic Sans MS"'> sql</span><span style='font-family:"Microsoft YaHei"'>中的“</span><span
  style='font-family:"Comic Sans MS"'>set</span><span style='font-family:"Microsoft YaHei"'>”关键字，特别是在联合</span><span
  style='font-family:"Comic Sans MS"'>&lt;if&gt;</span><span style='font-family:
  "Microsoft YaHei"'>进行判断时，如果前面的</span><span style='font-family:"Comic Sans MS"'>if</span><span
  style='font-family:"Microsoft YaHei"'>没有执行，则或导致逗号多余错误</span></p>
  <p style='font-size:11.5pt'><span style='font-family:"Microsoft YaHei"'>使用</span><span
  style='font-family:"Comic Sans MS"'>set</span><span style='font-family:"Microsoft YaHei"'>标签可以将动态的配置</span><span
  style='font-family:"Comic Sans MS"'>SET </span><span style='font-family:"Microsoft YaHei"'>关键字，和剔除追加到条件末尾的任何不相关的逗号</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:white;vertical-align:top;width:2.425in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>&lt;choose&gt;</p>
  <p style='margin-left:.375in;font-family:"Comic Sans MS";
  font-size:11.5pt'>&lt;when&gt;&lt;/when&gt;</p>
  <p style='margin-left:.375in;font-family:"Comic Sans MS";
  font-size:11.5pt'>&lt;otherwise&gt;&lt;/otherwise&gt;</p>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>&lt;/choose&gt;</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:white;vertical-align:top;width:5.3326in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei";font-size:11.5pt'>标签组：也是一个用于条件判断的标签组</p>
  <p style='font-size:11.5pt'><span style='font-family:"Microsoft YaHei"'>按顺序判断</span><span
  style='font-family:"Comic Sans MS"'>when</span><span style='font-family:"Microsoft YaHei"'>中的条件出否成立，如果有一个成立，则</span><span
  style='font-family:"Comic Sans MS"'>choose</span><span style='font-family:
  "Microsoft YaHei"'>结束。当</span><span style='font-family:"Comic Sans MS"'>choose</span><span
  style='font-family:"Microsoft YaHei"'>中所有</span><span style='font-family:
  "Comic Sans MS"'>when</span><span style='font-family:"Microsoft YaHei"'>的条件都不满则时，则执行</span><span
  style='font-family:"Comic Sans MS"'> otherwise</span><span style='font-family:
  "Microsoft YaHei"'>中的</span><span style='font-family:"Comic Sans MS"'>sql</span><span
  style='font-family:"Microsoft YaHei"'>。</span></p>
  <p style='font-size:11.5pt'><span style='font-family:"Microsoft YaHei"'
  lang=zh-CN>当只使用一个</span><span style='font-family:"Comic Sans MS"' lang=en-US>when</span><span
  style='font-family:"Microsoft YaHei"' lang=zh-CN>时，类似于</span><span
  style='font-family:"Comic Sans MS"' lang=zh-CN>Java </span><span
  style='font-family:"Microsoft YaHei"' lang=zh-CN>的</span><span
  style='font-family:"Comic Sans MS"' lang=en-US>if else</span><span
  style='font-family:"Comic Sans MS"' lang=zh-CN> </span><span
  style='font-family:"Microsoft YaHei"' lang=zh-CN>语句，</span></p>
  <p style='font-size:11.5pt'><span style='font-weight:bold;
  font-family:"Comic Sans MS"' lang=zh-CN>choose</span><span style='font-weight:
  bold;font-family:"Microsoft YaHei"' lang=zh-CN>为和</span><span
  style='font-weight:bold;font-family:"Comic Sans MS"' lang=zh-CN>when</span><span
  style='font-weight:bold;font-family:"Microsoft YaHei"' lang=zh-CN>为</span><span
  style='font-weight:bold;font-family:"Comic Sans MS"' lang=en-US>if</span><span
  style='font-weight:bold;font-family:"Microsoft YaHei"' lang=zh-CN>，</span><span
  style='font-weight:bold;font-family:"Comic Sans MS"' lang=zh-CN>otherwise</span><span
  style='font-weight:bold;font-family:"Microsoft YaHei"' lang=zh-CN>则为</span><span
  style='font-weight:bold;font-family:"Comic Sans MS"' lang=en-US>else</span></p>
  <p style='font-size:11.5pt'><span style='font-family:"Microsoft YaHei"'
  lang=zh-CN>当使用多个</span><span style='font-family:"Comic Sans MS"' lang=en-US>when</span><span
  style='font-family:"Microsoft YaHei"' lang=zh-CN>时，类似于</span><span
  style='font-family:"Comic Sans MS"' lang=zh-CN>Java </span><span
  style='font-family:"Microsoft YaHei"' lang=zh-CN>的</span><span
  style='font-family:"Comic Sans MS"' lang=zh-CN>switch </span><span
  style='font-family:"Microsoft YaHei"' lang=zh-CN>语句</span></p>
  <p style='font-size:11.5pt'><span style='font-weight:bold;
  font-family:"Comic Sans MS"'>choose</span><span style='font-weight:bold;
  font-family:"Microsoft YaHei"'>为</span><span style='font-weight:bold;
  font-family:"Comic Sans MS"'>switch</span><span style='font-weight:bold;
  font-family:"Microsoft YaHei"'>，</span><span style='font-weight:bold;
  font-family:"Comic Sans MS"'>when</span><span style='font-weight:bold;
  font-family:"Microsoft YaHei"'>为</span><span style='font-weight:bold;
  font-family:"Comic Sans MS"'>case</span><span style='font-weight:bold;
  font-family:"Microsoft YaHei"'>，</span><span style='font-weight:bold;
  font-family:"Comic Sans MS"'>otherwise</span><span style='font-weight:bold;
  font-family:"Microsoft YaHei"'>则为</span><span style='font-weight:bold;
  font-family:"Comic Sans MS"'>default</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:2.425in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'
  lang=en-US>&lt;foreach&gt;</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:5.2638in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:12.0pt'><span style='font-family:"Comic Sans MS"'>foreach</span><span
  style='font-family:"Microsoft YaHei UI"'>的主要用在构建</span><span
  style='font-family:"Comic Sans MS"'>in</span><span style='font-family:"Microsoft YaHei UI"'>条件中，它可以在</span><span
  style='font-family:"Comic Sans MS"'>SQL</span><span style='font-family:"Microsoft YaHei UI"'>语句中进行迭代一个集合</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:white;vertical-align:top;width:2.425in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'
  lang=en-US>&lt;selectKey&gt;</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:white;vertical-align:top;width:5.3187in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt'><span style='font-family:"Comic Sans MS"'
  lang=zh-CN>SelectKey</span><span style='font-family:"Microsoft YaHei UI"'
  lang=zh-CN>在</span><span style='font-family:"Comic Sans MS"' lang=zh-CN>Mybatis</span><span
  style='font-family:"Microsoft YaHei UI"' lang=zh-CN>中是为了解决</span><span
  style='font-family:"Comic Sans MS"' lang=en-US>i</span><span
  style='font-family:"Comic Sans MS"' lang=zh-CN>nsert</span><span
  style='font-family:"Microsoft YaHei UI"' lang=zh-CN>数据时不支持主键自动生成的问题，他可以很随意的设置生成主键的方式</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:2.425in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'
  lang=en-US>&lt;include&gt;</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:5.2652in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt'><span style='font-family:"Microsoft YaHei"'>通过</span><span
  style='font-family:"Comic Sans MS"'>include</span><span style='font-family:
  "Microsoft YaHei"'>标签将</span><span style='font-family:"Comic Sans MS"'>sql</span><span
  style='font-family:"Microsoft YaHei"'>片段和原</span><span style='font-family:
  "Comic Sans MS"'>sql</span><span style='font-family:"Microsoft YaHei"'>片段进行拼接成一个完整的</span><span
  style='font-family:"Comic Sans MS"'>SQL</span><span style='font-family:"Microsoft YaHei"'>语句进行执行</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#757070;vertical-align:top;width:2.425in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei";font-size:11.5pt;
  color:white'><span style='font-weight:bold'>变量绑定</span></p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#757070;vertical-align:top;width:5.2631in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>&nbsp;</p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:white;vertical-align:top;width:2.425in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'
  lang=en-US>&lt;bind&gt;</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:white;vertical-align:top;width:5.2631in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt'>用于将一个表达式的结果绑定到一个变量上，这个变量可以在SQL语句中使用</p>
  </td>
 </tr>
</table>

</div>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<p style='margin-left:1.125in;font-family:"Comic Sans MS";
font-size:12.0pt;color:#ED7D31' lang=en-US>&nbsp;</p>

<p><cite style='font-family:"Comic Sans MS";font-size:12.0pt'>&nbsp;</cite></p>

<p><cite style='font-family:"Comic Sans MS";font-size:12.0pt'>&nbsp;</cite></p>

<p><cite style='font-size:12.0pt;color:#595959'><span
style='font-family:宋体'>来自</span><span style='font-family:"Comic Sans MS"'> &lt;</span><a
href="https://blog.csdn.net/weixin_30752377/article/details/96026532"><span
style='font-family:"Comic Sans MS"'>https://blog.csdn.net/weixin_30752377/article/details/96026532</span></a><span
style='font-family:"Comic Sans MS"'>&gt; </span></cite></p>

</div>

</div>

</div>

<!--EndFragment-->
</body>
