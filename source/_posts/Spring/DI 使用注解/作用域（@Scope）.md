---
categories:
  - Spring
tags:
  - ［@Scope］
date:
  - 2022-11-28 8:09:54
---

<body lang=zh-CN style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>
<!--StartFragment-->

<div style='direction:ltr;border-width:100%'>

<div style='direction:ltr;margin-top:0in;margin-left:0in;width:8.8444in'>

<div style='direction:ltr;margin-top:0in;margin-left:0in;width:8.8444in'>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle;color:#24292E'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>配置</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>bean</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>的作用域</span></li>
</ul>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#24292E'>&nbsp;</p>

<div style='direction:ltr'>

<table border=1 cellpadding=0 cellspacing=0 valign=top style='direction:ltr;
 border-collapse:collapse;border-style:solid;border-color:#A3A3A3;border-width:
 1pt;margin-left:.3333in' title="" summary="">
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:black;vertical-align:top;width:1.2375in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt;
  color:white'><span style='font-weight:bold'>参数</span></p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:black;vertical-align:top;width:7.1437in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt;
  color:white'><span style='font-weight:bold'>描述</span></p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:1.2375in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>proxyMode</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  vertical-align:top;width:7.1437in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Microsoft YaHei UI";font-size:11.5pt'>指定是否应将组件配置为作用域代理，如果是，则代理应基于接口还是基于子类。</p>
  </td>
 </tr>
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:1.2375in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'>scopeName</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:#E7E6E6;vertical-align:top;width:7.2756in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt'><span style='font-family:"Microsoft YaHei UI"'>指定用于带注释的组件</span><span
  style='font-family:"Comic Sans MS"'>/bean </span><span style='font-family:
  "Microsoft YaHei UI"'>的范围的名称</span></p>
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
    background-color:black;vertical-align:top;width:6.027in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
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
    background-color:white;vertical-align:top;width:6.0965in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
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
    background-color:#E7E6E6;vertical-align:top;width:6.027in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
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
    background-color:white;vertical-align:top;width:6.027in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
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
    background-color:#E7E6E6;vertical-align:top;width:6.0965in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
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
    background-color:white;vertical-align:top;width:6.027in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
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
    background-color:#E7E6E6;vertical-align:top;width:6.027in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
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
 <tr>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:white;vertical-align:top;width:1.2375in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-family:"Comic Sans MS";font-size:11.5pt'
  lang=en-US>value</p>
  </td>
  <td style='border-style:solid;border-color:#A3A3A3;border-width:1pt;
  background-color:white;vertical-align:top;width:7.1437in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='font-size:11.5pt'><span style='font-family:"Comic Sans MS"'
  lang=en-US>scopeName</span><span style='font-family:"Microsoft YaHei UI"'
  lang=zh-CN>的别名</span></p>
  </td>
 </tr>
</table>

</div>

<p style='margin-top:0pt;margin-bottom:12pt;font-family:"Microsoft YaHei UI";
font-size:12.0pt;color:#70AD47'><span style='font-weight:bold'>示例</span></p>

<div style='direction:ltr'>

<table border=0 cellpadding=0 cellspacing=0 valign=top style='direction:ltr;
 border-collapse:collapse;border-style:solid;border-color:#A3A3A3;border-width:
 0pt;margin-left:.3333in' title="" summary="">
 <tr>
  <td style='border-width:0pt;background-color:white;vertical-align:top;
  width:2.4222in;padding:2.0pt 3.0pt 2.0pt 3.0pt'>
  <p style='margin-top:5pt;margin-bottom:5pt;font-family:"Comic Sans MS";
  font-size:12.0pt;color:#FFC000'>@Controller</p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
  style='font-family:"Comic Sans MS";color:#FFC000'>@RequestMapping</span><span
  style='font-family:"Comic Sans MS";color:black'>(</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>“</span><span
  style='font-family:"Comic Sans MS";color:black'>/test</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>”</span><span
  style='font-family:"Comic Sans MS";color:black'>)</span></p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
  style='font-family:"Comic Sans MS";color:#FFC000'>@Scope</span><span
  style='font-family:"Comic Sans MS";color:black'>(</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>“</span><span
  style='font-family:"Comic Sans MS";color:black'>prototype</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>”</span><span
  style='font-family:"Comic Sans MS";color:black'>)</span></p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-size:12.0pt'><span
  style='font-family:"Comic Sans MS";color:blue'>public</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:blue'>class</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>TestController</span><span
  style='font-family:"Microsoft YaHei UI";color:black'>&nbsp;</span><span
  style='font-family:"Comic Sans MS";color:black'>{</span></p>
  <p style='margin-top:5pt;margin-bottom:5pt;font-family:"Comic Sans MS";
  font-size:12.0pt;color:black'>}</p>
  </td>
 </tr>
</table>

</div>

<p style='margin-top:0pt;margin-bottom:12pt;font-family:"Microsoft YaHei UI";
font-size:12.0pt'><span style='font-weight:bold'>注</span></p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>在</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> Spring </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>容器中，对于</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> singleton </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>作用域的</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> Bean</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>，容器会负责管理其完整的生命周期，包括创建、初始化、依赖注入、使用、销毁等过程。而对于</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> prototype </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>作用域的</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> Bean</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>，由于每次请求都会创建一个新的实例，因此容器无法管理其完整的生命周期。如果</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> Spring </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>容器对于每个</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> prototype </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>作用域的</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> Bean </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>都要管理其完整的生命周期，那么就会导致性能下降和资源浪费。因此，</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>Spring </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>选择将</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> prototype </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>作用域的</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> Bean </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>的生命周期交由调用方来管理，以提高性能和资源利用率。这也是为什么在使用</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> prototype </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>作用域时需要特别注意</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> Bean </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>实例的生命周期和资源占用情况的原因</span></li>
</ul>

<p style='margin-left:.375in;font-family:"Microsoft YaHei UI";
font-size:12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>Java </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>在创建</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> Java </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>实例时，需要进行内存申请；销毁实例时，需要完成垃圾回收，这些工作都会导致系统开销的增加。因此，</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>prototype </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>作用域</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> Bean </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>的创建、销毁代价比较大。而</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> singleton </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>作用域的</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> Bean </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>实例一旦创建成功，可以重复使用。因此，除非必要，否则尽量避免将</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> Bean </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>被设置成</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> prototype </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>作用域。</span></li>
</ul>

<p style='font-family:"Comic Sans MS";font-size:12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>对有状态的</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> bean </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>应该使用</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> prototype </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>作用域，而对无状态的</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>bean</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>则应该使用</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> singleton </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>作用域</span></li>
</ul>

<p style='font-family:"Comic Sans MS";font-size:12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle'><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>singleton</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>作用域在多线程下是不安全的</span></li>
</ul>

<p style='font-family:"Comic Sans MS";font-size:12.0pt'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle;color:#333333'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>如果使用</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN> Servlet
     2.5 Web </span><span style='font-family:"Microsoft YaHei UI";font-size:
     12.0pt' lang=zh-CN>容器，并且在</span><span style='font-family:"Comic Sans MS";
     font-size:12.0pt' lang=zh-CN> Spring </span><span style='font-family:"Microsoft YaHei UI";
     font-size:12.0pt' lang=zh-CN>的</span><span style='font-family:"Comic Sans MS";
     font-size:12.0pt' lang=zh-CN>DispatcherServlet</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>之外处理请求</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>(</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>例如，当使用</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN> JSF </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>或</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN> Struts </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>时</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>)</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>，则需要注册</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>org.springframework.web.context.request.RequestContextListener</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>和</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=en-US> </span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>ServletRequestListener</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>。如果使用</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN> Servlet
     3.0</span><span style='font-family:"Microsoft YaHei UI";font-size:12.0pt'
     lang=zh-CN>，可以使用</span><span style='font-family:"Comic Sans MS";
     font-size:12.0pt' lang=zh-CN>WebApplicationInitializer</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>接口以编程方式完成此操作。对于较旧的容器，将以下声明添加到</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN> Web </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>应用程序的</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt' lang=zh-CN>web.xml</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt' lang=zh-CN>文件中：</span></li>
</ul>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#333333'>&nbsp;</p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#333333'>&lt;web-app&gt;<br>
<span style='mso-spacerun:yes'>    </span>...<br>
<span style='mso-spacerun:yes'>    </span>&lt;listener&gt;<br>
<span style='mso-spacerun:yes'>        </span>&lt;listener-class&gt;<br>
<span style='mso-spacerun:yes'>           
</span>org.springframework.web.context.request.RequestContextListener<br>
<span style='mso-spacerun:yes'>       
</span>&lt;/listener-class&gt;<br>
<span style='mso-spacerun:yes'>    </span>&lt;/listener&gt;<br>
<span style='mso-spacerun:yes'>    </span>...<br>
&lt;/web-app&gt;</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#333333'>&nbsp;</p>

<ul type=disc style='direction:ltr;unicode-bidi:embed;margin-top:0in;
 margin-bottom:0in'>
 <li style='margin-top:0;margin-bottom:0;vertical-align:middle;color:#333333'><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>如果监听器设置存在问题，请考虑使用</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> Spring </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>的</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'>RequestContextFilter</span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>。过滤器</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> Map </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>取决于周围的</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> Web </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>应用程序配置，因此必须适当地对其进行更改。以下清单显示了</span><span
     style='font-family:"Comic Sans MS";font-size:12.0pt'> Web </span><span
     style='font-family:"Microsoft YaHei UI";font-size:12.0pt'>应用程序的过滤器部分：</span></li>
</ul>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#333333'>&lt;web-app&gt;</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#333333'>&nbsp;</p>

<p style='margin-left:.75in;font-family:"Comic Sans MS";font-size:
12.0pt;color:#333333'><span style='mso-spacerun:yes'>    </span>...<br>
<span style='mso-spacerun:yes'>    </span>&lt;filter&gt;<br>
<span style='mso-spacerun:yes'>       
</span>&lt;filter-name&gt;requestContextFilter&lt;/filter-name&gt;<br>
<span style='mso-spacerun:yes'>       
</span>&lt;filter-class&gt;org.springframework.web.filter.RequestContextFilter&lt;/filter-class&gt;<br>
<span style='mso-spacerun:yes'>    </span>&lt;/filter&gt;<br>
<span style='mso-spacerun:yes'>    </span>&lt;filter-mapping&gt;<br>
<span style='mso-spacerun:yes'>       
</span>&lt;filter-name&gt;requestContextFilter&lt;/filter-name&gt;<br>
<span style='mso-spacerun:yes'>       
</span>&lt;url-pattern&gt;/*&lt;/url-pattern&gt;<br>
<span style='mso-spacerun:yes'>    </span>&lt;/filter-mapping&gt;<br>
<span style='mso-spacerun:yes'>    </span>...<br>
&lt;/web-app&gt;</p>

<p style='margin-left:.375in;font-family:"Comic Sans MS";font-size:
12.0pt'>&nbsp;</p>

<p><cite style='font-family:"Comic Sans MS";font-size:12.0pt'>&nbsp;</cite></p>

<p><cite style='font-size:12.0pt;color:#595959'><span
style='font-family:"Microsoft YaHei UI"'>来自</span><span style='font-family:
"Comic Sans MS"'> &lt;</span><a
href="https://www.docs4dev.com/docs/zh/spring-framework/5.1.3.RELEASE/reference/core.html#beans-factory-scopes"><span
style='font-family:"Comic Sans MS"'>https://www.docs4dev.com/docs/zh/spring-framework/5.1.3.RELEASE/reference/core.html#beans-factory-scopes</span></a><span
style='font-family:"Comic Sans MS"'>&gt; </span></cite></p>

</div>

</div>

</div>

<!--EndFragment-->
</body>
