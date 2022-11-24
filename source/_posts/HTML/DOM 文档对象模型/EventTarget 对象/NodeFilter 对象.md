---
categories:
- HTML
tags:
- NodeFilter
---

<ul style="list-style-type:disc">
    <li><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">个</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"> NodeFilter
            </span></span><span style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">接口表示用于过滤在一个节点的对象</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"> NodeIterator
            </span></span><span style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">或</span></span><span style="font-size:12.0pt"><span
                style="font-family:&quot;Comic Sans MS&quot;"> TreeWalker
            </span></span><span style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">。一个</span></span><span style="font-size:12.0pt"><span
                style="font-family:&quot;Comic Sans MS&quot;"> NodeFilter
            </span></span><span style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">一无所知文档或穿越节点</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">; </span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">它只知道如何根据提供的过滤器评估单个节点。</span></span></li>
</ul>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
<ul style="list-style-type:disc">
    <li><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">NodeFilter</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">对象有以下方法：</span></span>
    </li>
</ul>
<table cellspacing="0" summary=""
    style="border-collapse:collapse; border-color:#a3a3a3; border-style:solid; border-width:1px; margin-left:32px"
    class=" cke_show_border">
    <tbody>
        <tr>
            <td
                style="background-color:black; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.3173in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:white"><strong>方法</strong></span></span></span></p>
            </td>
            <td
                style="background-color:black; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:6.4104in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:white"><strong>说明</strong></span></span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.3173in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;">acceptNode()</span></span></p>
            </td>
            <td
                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:6.5423in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">返回一个</span><span
                            style="font-family:&quot;Comic Sans MS&quot;"> unsigned short </span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">，用于判断</span><span
                            style="font-family:&quot;Comic Sans MS&quot;"> NodeIterator </span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">或</span><span
                            style="font-family:&quot;Comic Sans MS&quot;"> TreeWalker </span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">迭代算法是否必须接受给定的</span><span
                            style="font-family:&quot;Comic Sans MS&quot;"> Node </span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">。</span></span></p>
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">此方法应由</span><span
                            style="font-family:&quot;Comic Sans MS&quot;"> NodeFilter </span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">的用户编写。可能的返回值是：</span></span></p>
                <table cellspacing="0" summary=""
                    style="border-collapse:collapse; border-color:#a3a3a3; border-style:solid; border-width:1px; margin-left:32px"
                    class=" cke_show_border">
                    <tbody>
                        <tr>
                            <td
                                style="background-color:black; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.6305in">
                                <p><span style="font-size:10.5pt"><span
                                            style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                                style="color:white"><strong>参数</strong></span></span></span></p>
                            </td>
                            <td
                                style="background-color:black; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:4.3534in">
                                <p><span style="font-size:10.5pt"><span
                                            style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                                style="color:white"><strong>描述</strong></span></span></span></p>
                            </td>
                        </tr>
                        <tr>
                            <td
                                style="background-color:white; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.6305in">
                                <p><span style="font-size:10.5pt"><span
                                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                                style="color:#212529">FILTER_ACCEPT</span></span></span></p>
                            </td>
                            <td
                                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:4.3534in">
                                <p><span style="font-size:10.5pt"><span style="color:black"><span
                                                style="font-family:&quot;Microsoft YaHei UI&quot;">当节点应该被接受时，由&nbsp;</span><span
                                                style="font-family:&quot;Comic Sans MS&quot;">NodeFilter.acceptNode()</span><span
                                                style="font-family:&quot;Microsoft YaHei UI&quot;">&nbsp;方法返回的值。</span></span></span>
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td
                                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.6305in">
                                <p><span style="font-size:10.5pt"><span
                                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                                style="color:#212529">FILTER_REJECT</span></span></span></p>
                            </td>
                            <td
                                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:4.3534in">
                                <p><span style="font-size:10.5pt"><span style="color:#212529"><span
                                                style="font-family:&quot;Microsoft YaHei UI&quot;">当节点应该被拒绝时，由&nbsp;</span><span
                                                style="font-family:&quot;Comic Sans MS&quot;">NodeFilter.acceptNode()</span><span
                                                style="font-family:&quot;Microsoft YaHei UI&quot;">&nbsp;方法返回的值。对于&nbsp;</span><span
                                                style="font-family:&quot;Comic Sans MS&quot;">TreeWalker</span><span
                                                style="font-family:&quot;Microsoft YaHei UI&quot;">&nbsp;，子节点也会被拒绝。</span></span></span>
                                </p>
                                <p><span style="font-size:10.5pt"><span style="color:#212529"><span
                                                style="font-family:&quot;Microsoft YaHei UI&quot;">对于&nbsp;</span><span
                                                style="font-family:&quot;Comic Sans MS&quot;">NodeIterator</span><span
                                                style="font-family:&quot;Microsoft YaHei UI&quot;">&nbsp;，这个标志的代名词&nbsp;</span><span
                                                style="font-family:&quot;Comic Sans MS&quot;">FILTER_SKIP</span><span
                                                style="font-family:&quot;Microsoft YaHei UI&quot;">&nbsp;。</span></span></span>
                                </p>
                                <p><span style="font-size:10.5pt"><span
                                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                                style="color:#212529">&nbsp;</span></span></span></p>
                            </td>
                        </tr>
                        <tr>
                            <td
                                style="background-color:white; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.6305in">
                                <p><span style="font-size:10.5pt"><span
                                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                                style="color:#212529">FILTER_SKIP</span></span></span></p>
                            </td>
                            <td
                                style="background-color:white; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:4.4229in">
                                <p><span style="font-size:10.5pt"><span style="color:#212529"><span
                                                style="font-family:&quot;Comic Sans MS&quot;">NodeFilter.acceptNode()</span><span
                                                style="font-family:&quot;Microsoft YaHei UI&quot;">&nbsp;为&nbsp;</span><span
                                                style="font-family:&quot;Comic Sans MS&quot;">NodeIterator</span><span
                                                style="font-family:&quot;Microsoft YaHei UI&quot;">&nbsp;或&nbsp;</span><span
                                                style="font-family:&quot;Comic Sans MS&quot;">TreeWalker</span><span
                                                style="font-family:&quot;Microsoft YaHei UI&quot;">&nbsp;对象跳过的节点返回的值。</span></span></span>
                                </p>
                                <p><span style="font-size:10.5pt"><span style="color:#212529"><span
                                                style="font-family:&quot;Microsoft YaHei UI&quot;">跳过的节点的子节点仍然被考虑。这被视为</span><span
                                                style="font-family:&quot;Comic Sans MS&quot;">"</span><span
                                                style="font-family:&quot;Microsoft YaHei UI&quot;">跳过此节点但不跳过其子节点</span><span
                                                style="font-family:&quot;Comic Sans MS&quot;">"</span><span
                                                style="font-family:&quot;Microsoft YaHei UI&quot;">。</span></span></span>
                                </p>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
            </td>
        </tr>
    </tbody>
</table>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
<p><span style="font-family:&quot;Microsoft YaHei UI&quot;">来自</span><span
        style="font-family:&quot;Comic Sans MS&quot;"> &lt;</span><a
        data-cke-saved-href="https://runebook.dev/zh-CN/docs/dom/nodefilter"
        href="https://runebook.dev/zh-CN/docs/dom/nodefilter"><span
            style="font-family:&quot;Comic Sans MS&quot;">https://runebook.dev/zh-CN/docs/dom/nodefilter</span></a><span
        style="font-family:&quot;Comic Sans MS&quot;">&gt;</span></p>