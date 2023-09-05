---
categories:
  - Spring Boot
tags:
  - ResponseBodyAdvice
date:
  - 2022-9-28 15:50:20
---

<body lang=zh-CN style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>
<!--StartFragment-->

<div style='direction:ltr;border-width:100%'>

<div style='direction:ltr;margin-top:0in;margin-left:0in;width:10.6118in'>

<div style='direction:ltr;margin-top:0in;margin-left:0in;width:10.6118in'>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>封装响应体依旧需要在控制层频繁使用</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>Result.success()</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>，</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>Result.</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US>fail</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>()</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>手动封装响应体返回，这造成了代码的大量耦合，并且也污染了业务处理的代码逻辑</span></li>
</ul>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US>SpringMVC
     4.1 </span><span style='font-family:"Microsoft YaHei UI";font-size:12.0pt'
     lang=zh-CN>后提供了</span><span style='font-family:"Comic Sans MS";font-size:
     12.0pt' lang=en-US> </span><span style='font-family:"Comic Sans MS";
     font-size:12.0pt' lang=zh-CN>ResponseBodyAdvice</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>接口用于拦截</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>Controller</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>方法的返回值，它允许在执行</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>@ResponseBody</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>后处理返回数据，可以用来封装统一数据格式返回</span></li>
</ul>

<div style='direction:ltr'>

<table border=1 cellpadding=0 cellspacing=0 valign=top style='direction:ltr;
 border-collapse:collapse;border-style:solid;border-color:#A3A3A3;border-width:
 1pt;margin-left:.3333in' title="" summary="">
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:black;vertical-align:top;width:1.684in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt;
  color:white'><span style='font-weight:bold'>方法</span></p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:black;vertical-align:top;width:5.1638in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt;
  color:white'><span style='font-weight:bold'>说明</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:1.684in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>supports</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:5.1638in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt'><span style='font-family:"Microsoft YaHei UI"'>判断是否要执行</span><span
  style='font-family:"Comic Sans MS"'>beforeBodyWrite</span><span
  style='font-family:"Microsoft YaHei UI"'>方法，</span><span style='font-family:
  "Comic Sans MS"'>true</span><span style='font-family:"Microsoft YaHei UI"'>为执行，</span><span
  style='font-family:"Comic Sans MS"'>false</span><span style='font-family:
  "Microsoft YaHei UI"'>不执行</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:1.684in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>beforeBodyWrite</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:5.1638in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='margin:0in'><span style='font-family:"Microsoft YaHei UI";
  font-size:11.5pt' lang=zh-CN>在</span><span style='font-family:"Comic Sans MS";
  font-size:11.5pt' lang=en-US> body </span><span style='font-family:"Microsoft YaHei UI";
  font-size:11.5pt' lang=zh-CN>获取之前对</span><span style='font-family:"Microsoft YaHei UI";
  font-size:12.0pt' lang=zh-CN>响应体</span><span style='font-family:"Microsoft YaHei UI";
  font-size:11.5pt' lang=zh-CN>处理的执行方法</span></p>
  </td>
 </tr>
</table>

</div>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>我们只需要自定义</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>ResponseBodyAdvice</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>接口的实现类，增加响应体的统一封装逻辑</span></li>
</ul>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt;
color:#70AD47'><span style='font-weight:bold'>示例</span></p>

<div style='direction:ltr'>

<table border=0 cellpadding=0 cellspacing=0 valign=top style='direction:ltr;
 border-collapse:collapse;border-style:solid;border-color:#A3A3A3;border-width:
 0pt;margin-left:.3333in' title="" summary="">
 <tr>
  <td style='border-width:0pt;background-color:white;vertical-align:top;
  width:10.1284in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='margin-top:5pt;margin-bottom:5pt;font-family:"Comic Sans MS";
  font-size:12.0pt;color:#FFC000'>@RestControllerAdvice</p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
  style='font-family:"Comic Sans MS";color:blue'>public</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:blue'>class</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>GlobalResponseBodyAdvice</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:blue'>implements</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>ResponseBodyAdvice&lt;Object&gt;</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>{</span></p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-family:"Comic Sans MS";
  font-size:12.0pt'>&nbsp;</p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;&nbsp;&nbsp;&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:#FFC000'>@Resource</span></p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;&nbsp;&nbsp;&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:blue'>private</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>ObjectMapper</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>objectMapper;</span></p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-family:"Comic Sans MS";
  font-size:12.0pt'>&nbsp;</p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;&nbsp;&nbsp;&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:#FFC000'>@Override</span></p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;&nbsp;&nbsp;&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:blue'>public</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:#8000FF'>boolean</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>supports(MethodParameter</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>returnType,</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>Class&lt;?</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:blue'>extends</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>HttpMessageConverter&lt;?&gt;&gt;</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>converterType)</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>{</span></p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:blue'>return</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>true;</span></p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-size:12.0pt;color:black'><span
  style='font-family:"Microsoft YaHei UI"'>&nbsp;&nbsp;&nbsp;&nbsp;</span><span
  style='font-family:"Comic Sans MS"'>}</span></p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-family:"Comic Sans MS";
  font-size:12.0pt'>&nbsp;</p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;&nbsp;&nbsp;&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:#FFC000'>@SneakyThrows</span></p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;&nbsp;&nbsp;&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:#FFC000'>@Override</span></p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;&nbsp;&nbsp;&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:blue'>public</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>Object</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>beforeBodyWrite(Object</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>o,</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>MethodParameter</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>returnType,</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>MediaType</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>selectedContentType,</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>Class&lt;?</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:blue'>extends</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span></p>
  <p style='margin-left:.375in;margin-top:5pt;margin-bottom:5pt;font-size:12.0pt;
  color:black'><span style='font-family:"Comic Sans MS"'>HttpMessageConverter&lt;?&gt;&gt;</span><span
  style='font-family:"Microsoft YaHei UI"'>&nbsp;</span><span style='font-family:
  "Comic Sans MS"'>selectedConverterType,</span><span style='font-family:"Microsoft YaHei UI"'>&nbsp;</span><span
  style='font-family:"Comic Sans MS"'>ServerHttpRequest</span><span
  style='font-family:"Microsoft YaHei UI"'>&nbsp;</span><span style='font-family:
  "Comic Sans MS"'>request,</span><span style='font-family:"Microsoft YaHei UI"'>&nbsp;</span><span
  style='font-family:"Comic Sans MS"'>ServerHttpResponse</span><span
  style='font-family:"Microsoft YaHei UI"'>&nbsp;</span><span style='font-family:
  "Comic Sans MS"'>response)</span><span style='font-family:"Microsoft YaHei UI"'>&nbsp;</span><span
  style='font-family:"Comic Sans MS"'>{</span></p>
  <p style='margin-left:.375in;margin-top:5pt;margin-bottom:5pt;font-size:12.0pt;
  color:#70AD47'><span style='font-family:"Comic Sans MS"' lang=en-US>//</span><span
  style='font-family:"Microsoft YaHei UI"' lang=zh-CN>单字符串处理</span></p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:blue'>if</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>(o</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:blue'>instanceof</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:#8000FF'>String</span><span
  style='font-family:"Comic Sans MS";color:black'>)</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>{</span></p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:blue'>return</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>objectMapper.writeValueAsString(Result.success(o));</span></p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-size:12.0pt;color:black'><span
  style='font-family:"Microsoft YaHei UI"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span
  style='font-family:"Comic Sans MS"'>}</span></p>
  <p style='margin-left:.375in;margin-top:5pt;margin-bottom:5pt;font-size:12.0pt;
  color:#70AD47'><span style='font-family:"Comic Sans MS"' lang=en-US>//</span><span
  style='font-family:"Microsoft YaHei UI"' lang=zh-CN>兼容手动封装</span></p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:blue'>if</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>(o</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:blue'>instanceof</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>Result</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>||</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>o</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:blue'>instanceof</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>ErrorResult)</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>{</span></p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:blue'>return</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>o;</span></p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-size:12.0pt;color:black'><span
  style='font-family:"Microsoft YaHei UI"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span
  style='font-family:"Comic Sans MS"'>}</span></p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:blue'>return</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>Result.success(o);</span></p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-size:12.0pt;color:black'><span
  style='font-family:"Microsoft YaHei UI"'>&nbsp;&nbsp;&nbsp;&nbsp;</span><span
  style='font-family:"Comic Sans MS"'>}</span></p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-family:"Comic Sans MS";
  font-size:12.0pt;color:black'>}</p>
  </td>
 </tr>
</table>

</div>

<p style='margin-left:.375in;font-family:"Microsoft YaHei UI";
font-size:12.0pt;color:#70AD47'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle;color:black'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>这时我们只需要回到最原本的业务逻辑，直接返回数据即可</span></li>
</ul>

<p style='font-family:"Microsoft YaHei UI";font-size:12.0pt;
color:#70AD47'><span style='font-weight:bold'>示例</span></p>

<div style='direction:ltr'>

<table border=0 cellpadding=0 cellspacing=0 valign=top style='direction:ltr;
 border-collapse:collapse;border-style:solid;border-color:#A3A3A3;border-width:
 0pt;margin-left:.3333in' title="" summary="">
 <tr>
  <td style='border-width:0pt;background-color:white;vertical-align:top;
  width:4.6034in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='margin-top:5pt;margin-bottom:5pt;font-family:"Comic Sans MS";
  font-size:12.0pt;color:#FFC000'>@RestController</p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-family:"Comic Sans MS";
  font-size:12.0pt'><span style='color:#FFC000'>@RequestMapping</span><span
  style='color:black'>(</span><span style='color:maroon'>&quot;/user&quot;</span><span
  style='color:black'>)</span></p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-family:"Comic Sans MS";
  font-size:12.0pt'><span style='color:blue'>public</span><span
  style='color:black'>&nbsp;</span><span style='color:blue'>class</span><span
  style='color:black'>&nbsp;UserController&nbsp;{</span></p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-family:"Comic Sans MS";
  font-size:12.0pt'><span style='color:black'>&nbsp;&nbsp;&nbsp;&nbsp;</span><span
  style='color:#FFC000'>@GetMapping</span><span style='color:black'>(</span><span
  style='color:maroon'>&quot;/{id}&quot;</span><span style='color:black'>)</span></p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-family:"Comic Sans MS";
  font-size:12.0pt'><span style='color:black'>&nbsp;&nbsp;&nbsp;&nbsp;</span><span
  style='color:blue'>public</span><span style='color:black'>&nbsp;User&nbsp;getUserById(</span><span
  style='color:#FFC000'>@PathVariable</span><span style='color:black'>&nbsp;Integer&nbsp;id)&nbsp;{</span></p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-family:"Comic Sans MS";
  font-size:12.0pt;color:black'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;User&nbsp;user&nbsp;=&nbsp;userService.getById(id);</p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-family:"Comic Sans MS";
  font-size:12.0pt'><span style='color:black'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span
  style='color:blue'>return</span><span style='color:black'>&nbsp;user;</span></p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-family:"Comic Sans MS";
  font-size:12.0pt;color:black'>&nbsp;&nbsp;&nbsp;&nbsp;}</p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-family:"Comic Sans MS";
  font-size:12.0pt;color:black'>}</p>
  </td>
 </tr>
</table>

</div>

<p style='margin-left:.375in;font-family:"Microsoft YaHei UI";
font-size:12.0pt;color:#70AD47'>&nbsp;</p>

<p style='margin-left:.375in;margin-top:5pt;margin-bottom:5pt;font-family:"Microsoft YaHei UI";
font-size:12.0pt'>接口数据返回如下：</p>

<p style='margin-left:.375in'><img
src="data:image/png;base64,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"
width=330 height=232></p>

</div>

</div>

</div>

<!--EndFragment-->
</body>
