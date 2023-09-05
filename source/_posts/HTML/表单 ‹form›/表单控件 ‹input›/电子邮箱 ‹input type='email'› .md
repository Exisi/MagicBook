---
categories:
  - HTML
tags:
  - ‹input›
date:
  - 2020-6-5 15:05:15
---

<ul style="list-style-type:disc">
    <li><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">&lt;input
                type="email"&gt; </span></span><span style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">能够让用户输入或编辑一个电子邮箱地址，此外，如果指定了</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">multiple</span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">属性，用户还可以输入多个电子邮箱地址。</span></span></li>
</ul>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
<ul style="list-style-type:disc">
    <li><span style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">在表单提交前，输入框会自动验证输入值是否是一个或多个合法的电子邮箱地址</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"> (</span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">非空值且符合电子邮箱地址格式</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">)</span></span></li>
</ul>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
<ul style="list-style-type:disc">
    <li><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">&lt;input&gt;
            </span></span><span style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">元素的</span></span><span style="font-size:12.0pt"><span
                style="font-family:&quot;Comic Sans MS&quot;"> value </span></span><span style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">属性包含一个会自动验证是否符合电子邮件语法的</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">
                DOMString</span></span><span style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">。具体来说，此处有三个格式可以通过验证：</span></span></li>
</ul>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
<ol style="list-style-type: decimal; margin-left: 40px;">
    <li value="1"><span style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">一个空字符串（</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">""</span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">），表示用户未输入值或该值已被删除。</span></span></li>
</ol>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
<ol style="list-style-type: decimal; margin-left: 40px;">
    <li value="2"><span style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">单个符合格式的电子邮件地址。并不代表该邮件地址存在，而是说它至少在格式上是正确的，简单地讲就是
                或者 ，当然并不局限于此。关于匹配电子邮件地址验证算法的 正表达式，参见</span></span><span style="font-size:12.0pt"><span
                style="font-family:&quot;Comic Sans MS&quot;"> Validation</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">。</span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Comic Sans MS&quot;">"username@domain""username@domain.tld"</span></span>
    </li>
</ol>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
<ol style="list-style-type: decimal; margin-left: 40px;">
    <li value="3"><span style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">当且仅当明确</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"> multiple
            </span></span><span style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">属性时，值可以是一个列表，该列表包含一串符合格式的电子邮件地址，且每个地址之间用逗号分隔。列表中，位于每个地址之前和之后的任何空白字符都会被移除。</span></span>
    </li>
</ol>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                style="color:#70ad47"><strong>示例</strong></span></span></span></p>
<table summary="" cellspacing="0"
    style="border-collapse:collapse; border-color:#a3a3a3; border-style:solid; border-width:0px; margin-left:32px"
    class=" cke_show_border">
    <tbody>
        <tr>
            <td
                style="background-color:white; border-bottom:0px; border-left:0px; border-right:0px; border-top:0px; vertical-align:top; width:8.5437in">
                <p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">&lt;!DOCTYPE</span></span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">html&gt;</span></span></span></p>
                <p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">&lt;html</span></span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">lang</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">=</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:maroon">"en"</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">&gt;</span></span></span></p>
                <p><span style="font-size:12.0pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
                <p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">&lt;head&gt;</span></span></span></p>
                <p><span style="font-size:12.0pt">&nbsp;&nbsp;&nbsp;&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">&lt;meta</span></span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">charset</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">=</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:maroon">"UTF-8"</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">&gt;</span></span></span></p>
                <p><span style="font-size:12.0pt">&nbsp;&nbsp;&nbsp;&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">&lt;meta</span></span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">http-equiv</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">=</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:maroon">"X-UA-Compatible"</span></span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">content</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">=</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:maroon">"IE=edge"</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">&gt;</span></span></span></p>
                <p><span style="font-size:12.0pt">&nbsp;&nbsp;&nbsp;&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">&lt;meta</span></span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">name</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">=</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:maroon">"viewport"</span></span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">content</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">=</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:maroon">"width=device-width,</span></span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:maroon">initial-scale=1.0"</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">&gt;</span></span></span></p>
                <p><span style="font-size:12.0pt">&nbsp;&nbsp;&nbsp;&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">&lt;title&gt;</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:black">Document</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">&lt;/title&gt;</span></span></span></p>
                <p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">&lt;/head&gt;</span></span></span></p>
                <p><span style="font-size:12.0pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
                <p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">&lt;body&gt;</span></span></span></p>
                <p><span style="font-size:12.0pt">&nbsp;&nbsp;&nbsp;&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">&lt;form&gt;</span></span></span></p>
                <p><span style="font-size:12.0pt">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">&lt;label</span></span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">for</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">=</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:maroon">"emailAddress"</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">&gt;</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:black">Email</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">&lt;/label&gt;&lt;br</span></span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">/&gt;</span></span></span></p>
                <p><span style="font-size:12.0pt">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">&lt;input</span></span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:blue">id</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">=</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:maroon">"emailAddress"</span></span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">type</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">=</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:maroon">"email"</span></span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:black">placeholder=</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:maroon">"user@example.gov"</span></span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">list</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">=</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:maroon">"defaultEmails"</span></span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">size</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">=</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:maroon">"64"</span></span></span></p>
                <p><span style="font-size:12.0pt">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">maxlength</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span style="color:black">=</span></span><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:maroon">"256"</span></span>&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">multiple&gt;</span></span></span></p>
                <p><span style="font-size:12.0pt">&nbsp;&nbsp;&nbsp;&nbsp;<span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">&lt;/form&gt;</span></span></span></p>
                <p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">&lt;/body&gt;</span></span></span></p>
                <p><span style="font-size:12.0pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
                <p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">&lt;/html&gt;</span></span></span></p>
                <p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">&nbsp;</span></span></span></p>
                <p><span style="font-size:12.0pt"><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">浏览器运行结果如下：</span></span></p>
            </td>
        </tr>
    </tbody>
</table>
<p style="margin-left: 40px;"><img
        src="data:image/png;base64,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"
        style="height:77px; width:594px"></p>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
<p><span style="font-family:&quot;Microsoft YaHei UI&quot;">来自</span><span
        style="font-family:&quot;Comic Sans MS&quot;"> &lt;</span><a
        data-cke-saved-href="https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/Input/email"
        href="https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/Input/email"><span
            style="font-family:&quot;Comic Sans MS&quot;">https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/Input/email</span></a><span
        style="font-family:&quot;Comic Sans MS&quot;">&gt; </span></p>
