---
categories:
- Spring Web MVC
tags:
- ［@ModelAttribute］
date:
- 2022-11-28 14:27:43
---

<ul style="list-style-type:disc">
    <li><span style="font-size:12.0pt"><span
                style="font-family:&quot;Comic Sans MS&quot;">@ModelAttribute</span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">标注可被应用在方法或参数上。</span></span></li>
</ul>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">&nbsp;</span></span></p>
<ul style="list-style-type:disc">
    <li><span style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">在同一个控制器中，标注了</span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Comic Sans MS&quot;">@ModelAttribute</span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">的方法实际上会在</span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Comic Sans MS&quot;">@RequestMapping</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">方法之前被调用</span></span></li>
</ul>
<p style="margin-left: 40px;"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">@ModelAttribute</span><span
            style="font-family:&quot;Microsoft YaHei UI&quot;">方法通常被用来在请求方法执行前，预先填充一些公共需要的属性或数据到</span><span
            style="font-family:&quot;Comic Sans MS&quot;">Model</span><span
            style="font-family:&quot;Microsoft YaHei UI&quot;">中</span></span></p>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">&nbsp;</span></span></p>
<ul style="list-style-type:disc">
    <li><span style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">标注在方法上的</span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Comic Sans MS&quot;">@ModelAttribute</span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">说明方法是用于添加一个或多个属性到</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">model</span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">上。这样的方法能接受与</span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Comic Sans MS&quot;">@RequestMapping</span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">标注相同的参数类型，只不过不能直接被映射到具体的请求上。</span></span></li>
</ul>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">&nbsp;</span></span></p>
<table summary="" cellspacing="0"
    style="border-collapse:collapse; border-color:#a3a3a3; border-style:solid; border-width:1px; margin-left:32px"
    class=" cke_show_border">
    <tbody>
        <tr>
            <td
                style="background-color:black; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.0034in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:white"><strong>参数</strong></span></span></span></p>
            </td>
            <td
                style="background-color:black; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:5.0659in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:white"><strong>描述</strong></span></span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.0034in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:#333333">value</span></span></span></p>
            </td>
            <td
                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:5.0659in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">要绑定到的模型属性的名称</span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.0034in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:#333333">name</span></span></span></p>
            </td>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:5.0659in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Comic Sans MS&quot;">name</span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">属性的别名</span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.0034in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;">binding</span></span></p>
            </td>
            <td
                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:5.0659in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">声明是否启用数据绑定，默认为</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">true</span></span></p>
            </td>
        </tr>
    </tbody>
</table>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                style="color:#70ad47"><strong>示例</strong></span></span></span></p>
<p style="margin-left:36px"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#ffc000">@Controller</span></span></span></p>
<p style="margin-left:36px"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:blue">public</span>&nbsp;<span style="color:blue">class</span><span
                style="color:black">&nbsp;ModelAttributeParamController&nbsp;{</span></span></span></p>
<p style="margin-left:36px"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Microsoft YaHei&quot;">&nbsp;</span></span></p>
<p style="margin-left:72px"><span style="font-size:12.0pt"><span style="color:#70ad47"><span
                style="font-family:&quot;Comic Sans MS&quot;">//</span><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">作用在方法上，返回的值携带到其他方法的</span><span
                style="font-family:&quot;Comic Sans MS&quot;">Model</span><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">中，并注入到请求方法的视图参数中</span></span></span></p>
<p style="margin-left:72px"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#ffc000">@ModelAttribute</span><span style="color:black">(value&nbsp;=&nbsp;</span><span
                style="color:maroon">"attributeName"</span><span style="color:black">)</span></span></span></p>
<p style="margin-left:72px"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:blue">public</span>&nbsp;<span style="color:#8000ff">String</span><span
                style="color:black">&nbsp;myModel(@RequestParam(required&nbsp;=&nbsp;false)&nbsp;</span><span
                style="color:#8000ff">String</span><span style="color:black">&nbsp;value)&nbsp;{</span></span></span>
</p>
<p style="margin-left:108px"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:blue">return</span><span style="color:black">&nbsp;value;</span></span></span></p>
<p style="margin-left:72px"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:black">}</span></span></span></p>
<p style="margin-left:72px"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:black">&nbsp;</span></span></span></p>
<p style="margin-left:72px"><span style="font-size:12.0pt"><span style="color:#70ad47"><span
                style="font-family:&quot;Comic Sans MS&quot;">//</span><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">作用在参数上，参数直接加入</span><span
                style="font-family:&quot;Comic Sans MS&quot;">Model</span><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">，并注入到方法的视图参数中</span></span></span></p>
<p style="margin-left:72px"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#ffc000">@RequestMapping</span><span style="color:black">(value&nbsp;=&nbsp;</span><span
                style="color:maroon">"/param"</span><span style="color:black">)</span></span></span></p>
<p style="margin-left:72px"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:blue">public</span>&nbsp;<span style="color:#8000ff">String</span><span
                style="color:black">&nbsp;param(</span><span style="color:#ffc000">@ModelAttribute</span><span
                style="color:black">(</span><span style="color:maroon">"name"</span><span
                style="color:black">)&nbsp;</span><span style="color:#8000ff">String</span><span
                style="color:black">&nbsp;str2,&nbsp;</span><span style="color:#ffc000">@ModelAttribute</span><span
                style="color:black">(</span><span style="color:maroon">"age"</span><span
                style="color:black">)&nbsp;</span><span style="color:#8000ff">int</span><span
                style="color:black">&nbsp;str3)&nbsp;{</span></span></span></p>
<p style="margin-left:108px"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:blue">return</span></span>&nbsp;<span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:maroon">"param"</span></span><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:black">;</span></span> <span style="font-family:&quot;Microsoft YaHei&quot;"><span
                style="color:#70ad47">//</span></span><span style="font-family:&quot;Microsoft YaHei&quot;"><span
                style="color:#70ad47">返回视图</span></span></span></p>
<p style="margin-left:72px"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:black">}</span></span></span></p>
<p style="margin-left:36px"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:black">}</span></span></span></p>
<p><span style="font-size:12.0pt"><span
            style="font-family:&quot;Microsoft YaHei UI&quot;"><strong>注</strong></span></span></p>
<p style="margin-left: 40px;"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Microsoft YaHei UI&quot;">如果</span><span
            style="font-family:&quot;Comic Sans MS&quot;">@ModelAttribute</span><span
            style="font-family:&quot;Microsoft YaHei UI&quot;">注解在使用了</span><span
            style="font-family:&quot;Comic Sans MS&quot;">@RequestMapping</span><span
            style="font-family:&quot;Microsoft YaHei UI&quot;">的方法上，那么返回的字符串被指定为数据，而不是视图</span></span></p>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">&nbsp;</span></span></p>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">&nbsp;</span></span></p>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">&nbsp;</span></span></p>
<p><span style="font-size:13.5pt"><span
            style="font-family:&quot;Microsoft YaHei UI&quot;"><strong>注解无返回值的方法</strong></span></span></p>
<ul style="list-style-type:disc">
    <li><span style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">在请求时，会先执行标注了</span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Comic Sans MS&quot;">@ModelAttribute</span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">的方法，然后接着执行请求的方法，参数</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">value</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">的值被放到</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">Model</span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">中后，接着被带到请求的方法中。</span></span></li>
</ul>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">&nbsp;</span></span></p>
<ul style="list-style-type:disc">
    <li><span style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">当返回视图时，</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">Model</span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">会被带到页面上，当然你在使用</span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Comic Sans MS&quot;">@RequestParam</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">的时候可以使用</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">required</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">来指定参数是否是必须的</span></span>
    </li>
</ul>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                style="color:#70ad47"><strong>示例</strong></span></span></span></p>
<table summary="" cellspacing="0"
    style="border-collapse:collapse; border-color:#a3a3a3; border-style:solid; border-width:0px; margin-left:32px"
    class=" cke_show_border">
    <tbody>
        <tr>
            <td
                style="background-color:white; border-bottom:0px; border-left:0px; border-right:0px; border-top:0px; vertical-align:top; width:6.9944in">
                <p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:#ffc000">@Controller</span></span></span></p>
                <p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">public</span>&nbsp;<span style="color:blue">class</span><span
                                style="color:black">&nbsp;ModelAttributeController&nbsp;{</span></span></span></p>
                <p style="margin-left:36px"><span style="font-size:12.0pt"><span
                            style="font-family:&quot;Microsoft YaHei&quot;">&nbsp;</span></span></p>
                <p style="margin-left:36px"><span style="font-size:12.0pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:#ffc000">@ModelAttribute</span></span></span></p>
                <p style="margin-left:36px"><span style="font-size:12.0pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">public</span>&nbsp;<span style="color:#8000ff">void</span><span
                                style="color:black">&nbsp;myModel(</span><span
                                style="color:#ffc000">@RequestParam</span><span
                                style="color:black">(required&nbsp;=&nbsp;false)&nbsp;</span><span
                                style="color:#8000ff">String</span>&nbsp;<span style="color:black">value</span><span
                                style="color:black">,&nbsp;Model&nbsp;model){</span></span></span></p>
                <p style="margin-left:36px"><span style="font-size:12.0pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:black">&nbsp;&nbsp;&nbsp;&nbsp;model.addAttribute(</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:maroon">"attributeName"</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:black">,&nbsp;</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:black">value</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">);</span></span>
                        <span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:#70ad47">//value</span></span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:#70ad47">参数通过</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:#70ad47">model</span></span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:#70ad47">加入视图</span></span></span></p>
                <p style="margin-left:36px"><span style="font-size:12.0pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:black">}</span></span></span></p>
                <p style="margin-left:36px"><span style="font-size:12.0pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:black">&nbsp;</span></span></span></p>
                <p style="margin-left:36px"><span style="font-size:12.0pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:#ffc000">@RequestMapping</span><span style="color:black">(</span><span
                                style="color:maroon">"/method"</span><span style="color:black">)</span></span></span>
                </p>
                <p style="margin-left:36px"><span style="font-size:12.0pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">public</span>&nbsp;<span style="color:#8000ff">String</span><span
                                style="color:black">&nbsp;method(){</span></span></span></p>
                <p style="margin-left:36px"><span style="font-size:12.0pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;">&nbsp;&nbsp;&nbsp;&nbsp;<span
                                style="color:blue">return</span>&nbsp;<span style="color:maroon">"method"</span><span
                                style="color:black">;</span></span></span></p>
                <p style="margin-left:36px"><span style="font-size:12.0pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:black">}</span></span></span></p>
                <p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:black">}</span></span></span></p>
            </td>
        </tr>
    </tbody>
</table>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                style="color:#70ad47">&nbsp;</span></span></span></p>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                style="color:#70ad47">&nbsp;</span></span></span></p>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                style="color:#70ad47">&nbsp;</span></span></span></p>
<p><span style="font-size:13.5pt"><span
            style="font-family:&quot;Microsoft YaHei UI&quot;"><strong>注解有返回值的方法</strong></span></span></p>
<ul>
    <li><span style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">对于这种情况，返回值对象会被默认放到隐含的</span><span
                style="font-family:&quot;Comic Sans MS&quot;">Model</span><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">中，在</span><span
                style="font-family:&quot;Comic Sans MS&quot;">Model</span><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">中的</span><span
                style="font-family:&quot;Comic Sans MS&quot;">key</span><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">为返回值首字母小写，</span><span
                style="font-family:&quot;Comic Sans MS&quot;">value</span><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">为返回的值</span></span></li>
</ul>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                style="color:#70ad47"><strong>示例</strong></span></span></span></p>
<p style="margin-left:36px"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#ffc000">@Controller</span></span></span></p>
<p style="margin-left:36px"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:blue">public</span>&nbsp;<span style="color:blue">class</span><span
                style="color:black">&nbsp;ModelAttributeController&nbsp;{</span></span></span></p>
<p style="margin-left:72px"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#ffc000">@ModelAttribute</span></span></span></p>
<p style="margin-left:72px"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:blue">public</span>&nbsp;<span style="color:#8000ff">String</span><span
                style="color:black">&nbsp;myModel(</span><span style="color:#ffc000">@RequestParam</span><span
                style="color:black">(required&nbsp;=&nbsp;false)&nbsp;</span><span
                style="color:#8000ff">String</span>&nbsp;<span style="color:black">value</span><span
                style="color:black">)&nbsp;{</span></span></span></p>
<p style="margin-left:72px"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">&nbsp;&nbsp;&nbsp;&nbsp;<span
                style="color:blue">return</span>&nbsp;<span style="color:black">value</span><span
                style="color:black">;</span></span></span></p>
<p style="margin-left:72px"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:black">}</span></span></span></p>
<p style="margin-left:72px"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:black">&nbsp;</span></span></span></p>
<p style="margin-left:72px"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#ffc000">@ModelAttribute("num")</span></span></span></p>
<p style="margin-left:72px"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:blue">public</span>&nbsp;<span style="color:#8000ff">String</span><span
                style="color:black">&nbsp;myModel(</span><span style="color:#ffc000">@RequestParam</span><span
                style="color:black">(required&nbsp;=&nbsp;false)&nbsp;</span><span style="color:black">int
                number</span><span style="color:black">)&nbsp;{</span></span></span></p>
<p style="margin-left:72px"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">&nbsp;&nbsp;&nbsp;&nbsp;<span
                style="color:blue">return</span>&nbsp;<span style="color:black">value</span><span
                style="color:black">;</span></span></span></p>
<p style="margin-left:72px"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:black">}</span></span></span></p>
<p style="margin-left:72px"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Microsoft YaHei&quot;">&nbsp;</span></span></p>
<p style="margin-left:72px"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:#ffc000">@ModelAttribute</span></span></span></p>
<p style="margin-left:72px"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:blue">public</span><span style="color:black">&nbsp;Student&nbsp;myModel(</span><span
                style="color:#ffc000">@RequestParam</span><span
                style="color:black">(required&nbsp;=&nbsp;false)&nbsp;</span><span
                style="color:#8000ff">String</span>&nbsp;<span style="color:black">name</span><span
                style="color:black">)&nbsp;{</span></span></span></p>
<p style="margin-left:72px"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:black">&nbsp;&nbsp;&nbsp;&nbsp;Student&nbsp;student&nbsp;=&nbsp;</span><span
                style="color:blue">new</span><span style="color:black">&nbsp;Student(</span><span
                style="color:black">name</span><span style="color:black">);</span></span></span></p>
<p style="margin-left:72px"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">&nbsp;&nbsp;&nbsp;&nbsp;<span
                style="color:blue">return</span><span style="color:black">&nbsp;student;</span></span></span></p>
<p style="margin-left:72px"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:black">}</span></span></span></p>
<p style="margin-left:36px"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:black">}</span></span></span></p>
<p style="margin-left:36px"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:black">&nbsp;</span></span></span></p>
<p style="margin-left: 40px;"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Microsoft YaHei UI&quot;">等同于：</span></span></p>
<p style="margin-left: 40px;"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">model.addAttribute("string", value);</span></span></p>
<p style="margin-left: 40px;"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">model.addAttribute("num", number);</span></span></p>
<p style="margin-left: 40px;"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">model.addAttribute("student", student);</span></span></p>