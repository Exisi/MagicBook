---
categories:
- HTML
tags:
- Comment 对象
date:
- 2022-11-9 16:40:15
---

<ul style="list-style-type:disc">
    <li><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">Comment </span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">接口代表标签（</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">markup</span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">）之间的文本符号（</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">textual
                notations</span></span><span style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">）。尽管它通常不会显示出来，但是在查看源码时可以看到它们。在</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"> HTML </span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">和</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"> XML </span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">里，注释（</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">Comments</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">）为</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"> &#39;&lt;!--&#39;
            </span></span><span style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">和</span></span><span style="font-size:12.0pt"><span
                style="font-family:&quot;Comic Sans MS&quot;"> &#39;--&gt;&#39; </span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">之间的内容。在</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"> XML </span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">里，注释中不能出现字符序列</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">
                &#39;--&#39;</span></span><span style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">。</span></span></li>
</ul>

<p>&nbsp;</p>

<p style="margin-left:80px"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span><img
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAA2wAAABXCAYAAAB4OcaiAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAHYcAAB2HAY/l8WUAACVdSURBVHhe7d0HeFRV2gfwNwkECEkINXRClSogVRABV0TUtSMqVtDdz4Yru7IqgiC4bnN3XctSVVTWVSz0EooUgYBIERJQkJZQQic9oX3nf+ZecnMzITOTSXIz+f+eZx5mJsNk5uac85733HPODbqkCBERERERETlOsPEvEREREREROQwTNiIiIiIiIodiwkZERERERORQTNiIiIiIiIgcigkbERERERGRQzFhIyIiIiIicigmbERERERERA7FhI2IiIiIiMihmLARERERERE5FBM2IiIiIiIih2LCRkRERERE5FBM2IiIiIiIiByKCRsREREREZFDMWEjIiIiIiJyKCZsREREREREDsWEjYiIiIiIyKGYsBERERERETlU0CUFd+L3HtJPEJVl0TUipVZUhPEosKCqJuw7bDwi8r+o8DBpUKe68Sjw7Ek6Jtk554xHROSLhqqNqKbaikCUc+687E5MNh4R+V9t1Ueto/qq3uIZNiIiIiIiIodiwkZERERERORQbqdEBgcFqZ8YD4gc7uJFXYS18jQlMjiYlZSKzlp/ytuUSNYhIs9Y24nyNCUyiG0E+cElS/3xdUpkgQlbm6b1jUdEznXsdKocP51iPCpfCVtIcLC0jqlnPCLyXkp6piQmnzIelb+ErWWjaAmtWMF4RETuHDp+Ws6kZhiPylfChvahfu0o4xGR91LSMuVUSrrxiGvYiIiIiIiIAg4TNiIiIiIiIodiwkZERERERORQTNiIiIiIiIgcigkbERERERGRQzFhIyIiIiIicigmbERERERERA7FhI2IiIiIiMihmLARERERERE5FBM2IiIiIiIih2LCRkRERERE5FBM2IiIiIiIiByKCRsREREREZFDMWEjsrlw8aIcP50qWTnnjGeIyBtnUjP0jYjIHcZZIu8EXVJwJ37vIf0EBAcFSZum9Y1HJevEiROycOESyc7JMZ7Jr3u3rtKxYwfjkbOtXLVGdu/eYzwqWKXQULnlloFSq1Yt4xnyxDHV4B8/nWI8EomuESm1oiKMR95BADl1Nl1Onk3T92Pq1ZKqVSoZPy19qKoJ+w4bj0RCgoOl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+/SW4cMf06MXZZ0nUyILUtBUSUwTw3x8p03VwN+UUyLJnzyZElkQ+1RJsCZynBJJFBg8mRJZkIKmSuL9OCWSygN/TYlkwhbg8OfF/PijR49KZKRr+khZnnZhV5SEzWQPKCYmbBToipKwmdwlbsCEjSgwFCVhM5WVOMuEjfyNa9jII+b8+FatWurdcgIpWfMX+xQOIvKcu6mSRERWjLNERcOEjcjAgELkOyZuRFQYxlki3zBhI7IxAwr+JSLvmImb06ZDEpFzMM4SeYcJGxERERERkUMxYSMiIiIiInIoJmxEREREREQOxYSNiIiIiIjIoZiwERERERERORQTNiIiIiIiIodiwkZERERERORQQZcU3Infe0g/AcFBQbzwKZUZp1LSjXsi0TUipVZUhPEosKCqJuw7bDwSCQkOlmrhVYxHRL6x1p+o8DBpUKe68Sjw7Ek6Jtk554xHIjUiqxr3iKggF1XsOZOaYTwSaajaiGqqrQhEOefOy+7EZOORSGjFClI5tILxiMg3KelZxj2R2qqPWkf1Vb3lNmEjKqvKU8JG5G/lLWEjIu+Vp4SNyN98Tdg4JZKIiIiIiMihmLARERERERE51OUpkWfScucnE5VlmNYViFBVz6ZnGo+Iikeg1h9gnCMquiB1C+QpkRnZOcYjouLhS5y9nLARERERERGRs3BKJBERERERkUMxYSMiIiIiInIoJmxEREREREQOxYSNiIiIiIjIoZiwERERERERORQTNiIiIiIiIodiwkZERERERORQTNiIiIiIiIgcigkbERERERGRQzFhIyIiIiIicigmbERERERERA7FhI2IiIiIiMihmLARERERERE5FBM2IiIiIiIiRxL5fynF9Ic3KYasAAAAAElFTkSuQmCC"
        style="height:45px; width:453px" /></p>

<p style="margin-left:40px">&nbsp;</p>

<ul style="list-style-type:disc">
    <li><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">该对象继承自</span></span>
        <span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">CharacterData</span></span>
        <span style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">对象，可以使用其属性和方法</span></span>
    </li>
</ul>

<p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>

<table cellspacing="0"
    style="border-collapse:collapse; border-color:#a3a3a3; border-style:solid; border-width:1px; margin-left:32px"
    summary="">
    <tbody>
        <tr>
            <td
                style="background-color:black; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:.9854in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:white"><strong>构造函数</strong></span></span></span></p>
            </td>
            <td
                style="background-color:black; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:3.7263in">
                <p><span style="font-size:11.5pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:white"><strong>说明</strong></span></span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.0048in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;">Comment()</span></span></p>
            </td>
            <td
                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:3.7763in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">使用文本内容作为参数，返回一个</span><span
                            style="font-family:&quot;Comic Sans MS&quot;"> Comment </span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">对象。</span></span></p>
            </td>
        </tr>
    </tbody>
</table>

<p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>

<p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>

<p><span style="font-family:&quot;Microsoft YaHei UI&quot;">来自</span><span
        style="font-family:&quot;Comic Sans MS&quot;"> &lt;</span><a
        href="https://developer.mozilla.org/en-US/docs/Web/API/Comment"><span
            style="font-family:&quot;Comic Sans MS&quot;">https://developer.mozilla.org/en-US/docs/Web/API/Comment</span></a><span
        style="font-family:&quot;Comic Sans MS&quot;">&gt; </span></p>