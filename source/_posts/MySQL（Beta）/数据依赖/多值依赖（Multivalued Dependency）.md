---
categories:
- MySQL
tags:
- Multivalued Dependency
date:
- 2023-1-16 18:38:17
---

<ul style="list-style-type:disc">
    <li><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">设</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"> U </span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">是关系模式</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">R</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">的属性集合，</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">X</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">，</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">Y</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">，</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">Z</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">是</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"> U </span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">的子集，并且</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"> Z = U - X -
                Y</span></span><span style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">，多值依赖</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">X</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Times New Roman&quot;">→→</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">Y</span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">成立。当且仅当对</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">R</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">的任一关系</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">r</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">，</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">r</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">在（</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">X</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">，</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">Z</span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">）上的每个值对应一组</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">Y</span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">的值，这组值仅仅决定于</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">X</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">值而与</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">Z</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">值无关</span></span></li>
</ul>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">&nbsp;</span></span></p>
<ul style="list-style-type:disc">
    <li><span style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">当表中的两个属性彼此独立但两者都依赖于第三个属性时，会发生多值依赖性。多值依赖包含至少两个依赖于第三个属性的属性，这就是它总是需要至少三个属性的原因</span></span>
    </li>
</ul>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
<table summary="" cellspacing="0"
    style="border-collapse:collapse; border-color:#a3a3a3; border-style:solid; border-width:1px; margin-left:32px"
    class=" cke_show_border">
    <tbody>
        <tr>
            <td
                style="background-color:black; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.0333in">
                <p style="text-align:center"><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:white"><strong>自行车型号</strong></span></span></span></p>
            </td>
            <td
                style="background-color:black; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.0125in">
                <p style="text-align:center"><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:white"><strong>生产年份</strong></span></span></span></p>
            </td>
            <td
                style="background-color:black; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:.8548in">
                <p style="text-align:center"><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:white"><strong>颜色</strong></span></span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="background-color:white; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.0138in">
                <p style="text-align:center"><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:#333344">M2011</span></span></span></p>
            </td>
            <td
                style="background-color:white; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.0125in">
                <p style="text-align:center"><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:#333344">2008</span></span></span></p>
            </td>
            <td
                style="background-color:white; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:.8548in">
                <p style="text-align:center"><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:#333344">White</span></span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.0138in">
                <p style="text-align:center"><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:#333344">M2001</span></span></span></p>
            </td>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.0125in">
                <p style="text-align:center"><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:#333344">2008</span></span></span></p>
            </td>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:.8548in">
                <p style="text-align:center"><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:#333344">Black</span></span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="background-color:white; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.0138in">
                <p style="text-align:center"><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:#333344">M3001</span></span></span></p>
            </td>
            <td
                style="background-color:white; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.0125in">
                <p style="text-align:center"><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:#333344">2013</span></span></span></p>
            </td>
            <td
                style="background-color:white; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:.8548in">
                <p style="text-align:center"><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:#333344">White</span></span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.0138in">
                <p style="text-align:center"><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:#333344">M3001</span></span></span></p>
            </td>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.0125in">
                <p style="text-align:center"><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:#333344">2013</span></span></span></p>
            </td>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:.8548in">
                <p style="text-align:center"><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:#333344">Black</span></span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="background-color:white; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.0138in">
                <p style="text-align:center"><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:#333344">M4006</span></span></span></p>
            </td>
            <td
                style="background-color:white; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.0125in">
                <p style="text-align:center"><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:#333344">2017</span></span></span></p>
            </td>
            <td
                style="background-color:white; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:.8548in">
                <p style="text-align:center"><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:#333344">White</span></span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.0138in">
                <p style="text-align:center"><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:#333344">M4006</span></span></span></p>
            </td>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.0125in">
                <p style="text-align:center"><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:#333344">2017</span></span></span></p>
            </td>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:.8548in">
                <p style="text-align:center"><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:#333344">Black</span></span></span></p>
            </td>
        </tr>
    </tbody>
</table>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                style="color:#333344">&nbsp;</span></span></span></p>
<ul style="list-style-type:disc">
    <li><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">这里列</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"> [</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">颜色</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">] </span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">和</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"> [</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">生产年份</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">] </span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">依赖于</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"> [</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">自行车型号</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">] </span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">并且彼此独立。</span></span></li>
</ul>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">&nbsp;</span></span></p>
<ul style="list-style-type:disc">
    <li><span style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">在这种情况下，可以根据</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"> [</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">自行车型号</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">] </span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">将这两列调用为多值。
                这些依赖关系的表示如下所示：</span></span></li>
</ul>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">[</span><span
            style="font-family:&quot;Microsoft YaHei UI&quot;">自行车型号</span><span
            style="font-family:&quot;Comic Sans MS&quot;">]</span> <span
            style="font-family:&quot;Microsoft YaHei UI&quot;">→ → </span><span
            style="font-family:&quot;Comic Sans MS&quot;">[</span><span
            style="font-family:&quot;Microsoft YaHei UI&quot;">生产年份</span><span
            style="font-family:&quot;Comic Sans MS&quot;">]</span> </span></p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">[</span><span
            style="font-family:&quot;Microsoft YaHei UI&quot;">自行车型号</span><span
            style="font-family:&quot;Comic Sans MS&quot;">]</span> <span
            style="font-family:&quot;Microsoft YaHei UI&quot;">→ → </span><span
            style="font-family:&quot;Comic Sans MS&quot;">[</span><span
            style="font-family:&quot;Microsoft YaHei UI&quot;">颜色</span><span
            style="font-family:&quot;Comic Sans MS&quot;">]</span> </span></p>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
<ul style="list-style-type:disc">
    <li><span style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">这可以理解为</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">[</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">自行车型号</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">]</span></span> <span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">多值依赖于 </span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">[</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">生产年份</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">]</span></span> <span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">和</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"> [</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">自行车型号</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">] </span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">多值依赖于 </span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">[</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">颜色</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">]</span></span> <span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">。</span></span></li>
</ul>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
<ul style="list-style-type:disc">
    <li><span style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">多值依赖具有下列性质：</span></span>
        <ol style="list-style-type:decimal">
            <li value="1"><span style="font-size:12.0pt"><span
                        style="font-family:&quot;Microsoft YaHei UI&quot;">多值依赖具有对称性。即若</span></span> <span
                    style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">X</span></span><span
                    style="font-size:12.0pt"><span
                        style="font-family:&quot;Microsoft YaHei UI&quot;">→→</span></span><span
                    style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">Y</span></span><span
                    style="font-size:12.0pt"><span
                        style="font-family:&quot;Microsoft YaHei UI&quot;">，则</span></span><span
                    style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">X</span></span> <span
                    style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">→→</span></span>
                <span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">Z</span></span><span
                    style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">，其中</span></span>
                <span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">Z</span></span><span
                    style="font-size:12.0pt"><span
                        style="font-family:&quot;Microsoft YaHei UI&quot;">＝</span></span><span
                    style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">U</span></span><span
                    style="font-size:12.0pt"><span
                        style="font-family:&quot;Microsoft YaHei UI&quot;">－</span></span><span
                    style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">X</span></span><span
                    style="font-size:12.0pt"><span
                        style="font-family:&quot;Microsoft YaHei UI&quot;">－</span></span><span
                    style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">Y</span></span><span
                    style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">。</span></span>
            </li>
            <li><span style="font-size:12.0pt"><span
                        style="font-family:&quot;Microsoft YaHei UI&quot;">多值依赖具有传递性。即若</span></span> <span
                    style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">X</span></span><span
                    style="font-size:12.0pt"><span
                        style="font-family:&quot;Microsoft YaHei UI&quot;">→→</span></span><span
                    style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">Y</span></span><span
                    style="font-size:12.0pt"><span
                        style="font-family:&quot;Microsoft YaHei UI&quot;">，</span></span><span
                    style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">Y</span></span> <span
                    style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">→→</span></span>
                <span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">Z</span></span><span
                    style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">，则</span></span>
                <span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">X</span></span> <span
                    style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">→→</span></span>
                <span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">Z</span></span><span
                    style="font-size:12.0pt"><span
                        style="font-family:&quot;Microsoft YaHei UI&quot;">－</span></span><span
                    style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">Y</span></span><span
                    style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">。</span></span>
            </li>
            <li><span style="font-size:12.0pt"><span
                        style="font-family:&quot;Microsoft YaHei UI&quot;">函数依赖可以看作是多值依赖的特殊情况。</span></span></li>
            <li><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">若</span></span>
                <span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">X</span></span><span
                    style="font-size:12.0pt"><span
                        style="font-family:&quot;Microsoft YaHei UI&quot;">→→</span></span><span
                    style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">Y</span></span><span
                    style="font-size:12.0pt"><span
                        style="font-family:&quot;Microsoft YaHei UI&quot;">，</span></span><span
                    style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">X</span></span><span
                    style="font-size:12.0pt"><span
                        style="font-family:&quot;Microsoft YaHei UI&quot;">→→</span></span><span
                    style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">Z</span></span><span
                    style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">，则</span></span>
                <span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">X</span></span><span
                    style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">→→</span></span>
                <span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">YZ</span></span><span
                    style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">。</span></span>
            </li>
            <li><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">若</span></span>
                <span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">X</span></span><span
                    style="font-size:12.0pt"><span
                        style="font-family:&quot;Microsoft YaHei UI&quot;">→→</span></span><span
                    style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">Y</span></span><span
                    style="font-size:12.0pt"><span
                        style="font-family:&quot;Microsoft YaHei UI&quot;">，</span></span><span
                    style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">X</span></span><span
                    style="font-size:12.0pt"><span
                        style="font-family:&quot;Microsoft YaHei UI&quot;">→→</span></span><span
                    style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">Z</span></span><span
                    style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">，则</span></span>
                <span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">X</span></span><span
                    style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">→→</span></span>
                <span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">Y</span></span><span
                    style="font-size:12.0pt"><span
                        style="font-family:&quot;Microsoft YaHei UI&quot;">∩</span></span><span
                    style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">Z</span></span><span
                    style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">。</span></span>
            </li>
            <li><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">若</span></span>
                <span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">X</span></span><span
                    style="font-size:12.0pt"><span
                        style="font-family:&quot;Microsoft YaHei UI&quot;">→→</span></span><span
                    style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">Y</span></span><span
                    style="font-size:12.0pt"><span
                        style="font-family:&quot;Microsoft YaHei UI&quot;">，</span></span><span
                    style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">X</span></span><span
                    style="font-size:12.0pt"><span
                        style="font-family:&quot;Microsoft YaHei UI&quot;">→→</span></span><span
                    style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">Z</span></span><span
                    style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">，则</span></span>
                <span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">X</span></span><span
                    style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">→→</span></span>
                <span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">Y</span></span><span
                    style="font-size:12.0pt"><span
                        style="font-family:&quot;Microsoft YaHei UI&quot;">－</span></span><span
                    style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">Z</span></span><span
                    style="font-size:12.0pt"><span
                        style="font-family:&quot;Microsoft YaHei UI&quot;">，</span></span><span
                    style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">X</span></span> <span
                    style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">→→</span></span>
                <span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">Z</span></span><span
                    style="font-size:12.0pt"><span
                        style="font-family:&quot;Microsoft YaHei UI&quot;">－</span></span><span
                    style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">Y</span></span><span
                    style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">。</span></span>
            </li>
            <li><span style="font-size:12.0pt"><span
                        style="font-family:&quot;Microsoft YaHei UI&quot;">多值依赖的有效性与属性集的范围有关。</span></span></li>
            <li><span style="font-size:12.0pt"><span
                        style="font-family:&quot;Microsoft YaHei UI&quot;">若多值依赖</span></span> <span
                    style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">X</span></span><span
                    style="font-size:12.0pt"><span
                        style="font-family:&quot;Microsoft YaHei UI&quot;">→→</span></span><span
                    style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">Y</span></span> <span
                    style="font-size:12.0pt"><span
                        style="font-family:&quot;Microsoft YaHei UI&quot;">在</span></span><span
                    style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">R</span></span><span
                    style="font-size:12.0pt"><span
                        style="font-family:&quot;Microsoft YaHei UI&quot;">（</span></span><span
                    style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">U</span></span><span
                    style="font-size:12.0pt"><span
                        style="font-family:&quot;Microsoft YaHei UI&quot;">）上成立，对于</span></span><span
                    style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">Y'</span></span><span
                    style="font-size:12.0pt"><span style="font-family:&quot;Cambria Math&quot;">⊂</span></span><span
                    style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">Y</span></span><span
                    style="font-size:12.0pt"><span
                        style="font-family:&quot;Microsoft YaHei UI&quot;">，并不一定有</span></span><span
                    style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">X</span></span><span
                    style="font-size:12.0pt"><span
                        style="font-family:&quot;Microsoft YaHei UI&quot;">→→</span></span><span
                    style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">Y</span></span><span
                    style="font-size:12.0pt"><span
                        style="font-family:&quot;Microsoft YaHei UI&quot;">’成立。但是如果函数依赖</span></span> <span
                    style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">X</span></span><span
                    style="font-size:12.0pt"><span
                        style="font-family:&quot;Microsoft YaHei UI&quot;">→</span></span><span
                    style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">Y</span></span> <span
                    style="font-size:12.0pt"><span
                        style="font-family:&quot;Microsoft YaHei UI&quot;">在</span></span><span
                    style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">R</span></span><span
                    style="font-size:12.0pt"><span
                        style="font-family:&quot;Microsoft YaHei UI&quot;">上成立，则对于任何</span></span><span
                    style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">Y'</span></span><span
                    style="font-size:12.0pt"><span style="font-family:&quot;Cambria Math&quot;">⊂</span></span><span
                    style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">Y</span></span><span
                    style="font-size:12.0pt"><span
                        style="font-family:&quot;Microsoft YaHei UI&quot;">均有</span></span><span
                    style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">X</span></span><span
                    style="font-size:12.0pt"><span
                        style="font-family:&quot;Microsoft YaHei UI&quot;">→</span></span><span
                    style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">Y</span></span><span
                    style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">’成立。</span></span>
            </li>
        </ol>
    </li>
</ul>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">&nbsp;</span></span></p>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">&nbsp;</span></span></p>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">&nbsp;</span></span></p>
<p><span style="font-size:13.5pt"><span
            style="font-family:&quot;Microsoft YaHei UI&quot;"><strong>平凡多值依赖</strong></span></span></p>
<ul style="list-style-type:disc">
    <li><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">若</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">X</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Times New Roman&quot;">→→</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">Y</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">，而</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">Z</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">为空集，则称</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">X</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Times New Roman&quot;">→→</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">Y</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">为平凡的多值依赖</span></span>
    </li>
</ul>
<p><span style="font-size:13.5pt"><span style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
<p><span style="font-size:13.5pt"><span style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
<p><span style="font-size:13.5pt"><span style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
<p><span style="font-size:13.5pt"><span
            style="font-family:&quot;Microsoft YaHei UI&quot;"><strong>非平凡多值依赖</strong></span></span></p>
<ul style="list-style-type:disc">
    <li><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">若</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">X</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Times New Roman&quot;">→→</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">Y</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">，若</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">Z</span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">不为空，则称其为</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">X</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Times New Roman&quot;">→→</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">Y</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">为非平凡的多值依赖</span></span>
    </li>
</ul>