---
categories:
  - Spring
tags:
  - ‹servlet›
  - ‹servlet-mapping›
date:
  - 2022-11-28 14:03:23
---

<ul style="list-style-type:disc">
    <li><span style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">要从浏览器访问</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">Java servlet</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">，必须告诉</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">servlet</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">容器要部署哪些</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">servlet</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">以及要将</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">servlet</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">映射到哪个</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">URL</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">，在</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">spring mvc</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">中提供了</span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Comic Sans MS&quot;">DispatcherServlet</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">创建</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">servlet</span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">容器，同时加载创建</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">bean</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">对象和配置</span></span></li>
</ul>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">&nbsp;</span></span></p>
<ul style="list-style-type:disc">
    <li><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">初始化</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">
                DispatcherServlet</span></span><span style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">时，该框架在</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">web</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">应用程序</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">WEB-INF</span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">目录中寻找一个名为</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">[servlet-</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">名称</span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Comic Sans MS&quot;">]-servlet.xml</span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">的文件，并在那里定义相关的</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">Beans</span></span></li>
</ul>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
<ul style="list-style-type:disc">
    <li><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">其次，将</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">servlet</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">映射到</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">URL</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">或</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">URL</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">模式。 这在</span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Comic Sans MS&quot;">&lt;servlet-mapping&gt;</span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">元素中完成，如果设置</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">/</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">则表示拦截全部</span></span></li>
</ul>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">&nbsp;</span></span></p>
<table summary="" cellspacing="0"
    style="border-collapse:collapse; border-color:#a3a3a3; border-style:solid; border-width:1px; margin-left:32px"
    class=" cke_show_border">
    <tbody>
        <tr>
            <td
                style="background-color:black; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.7416in">
                <p><span style="font-size:10.5pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:white"><strong>标签</strong></span></span></span></p>
            </td>
            <td
                style="background-color:black; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:7.0805in">
                <p><span style="font-size:10.5pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:white"><strong>说明</strong></span></span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.7416in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;">&lt;servlet&gt;</span></span></p>
            </td>
            <td
                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:7.1402in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">在向</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">servlet</span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">或</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">JSP</span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">页面制定初始化参数或定制</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">URL</span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">时，必须首先命名</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">servlet</span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">或</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">JSP</span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">页面。</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">Servlet</span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">元素就是用来完成此项任务的</span></span></p>
                <table summary="" cellspacing="0"
                    style="border-collapse:collapse; border-color:#a3a3a3; border-style:solid; border-width:1px; "
                    class=" cke_show_border">
                    <tbody>
                        <tr>
                            <td
                                style="background-color:black; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.5479in">
                                <p><span style="font-size:10.5pt"><span
                                            style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                                style="color:white"><strong>子标签</strong></span></span></span></p>
                            </td>
                            <td
                                style="background-color:black; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:4.8625in">
                                <p><span style="font-size:10.5pt"><span
                                            style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                                style="color:white"><strong>说明</strong></span></span></span></p>
                            </td>
                        </tr>
                        <tr>
                            <td
                                style="background-color:white; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.5479in">
                                <p><span style="font-size:10.5pt"><span
                                            style="font-family:&quot;Comic Sans MS&quot;">&lt;servlet-name&gt;</span></span>
                                </p>
                            </td>
                            <td
                                style="background-color:white; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:4.8625in">
                                <p><span style="font-size:10.5pt"><span
                                            style="font-family:&quot;Comic Sans MS&quot;">servlet</span><span
                                            style="font-family:&quot;Microsoft YaHei UI&quot;">名称</span></span></p>
                            </td>
                        </tr>
                        <tr>
                            <td
                                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.5479in">
                                <p><span style="font-size:10.5pt"><span
                                            style="font-family:&quot;Comic Sans MS&quot;">&lt;servlet-class&gt;</span></span>
                                </p>
                            </td>
                            <td
                                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:4.8625in">
                                <p><span style="font-size:10.5pt"><span
                                            style="font-family:&quot;Comic Sans MS&quot;">servlet</span><span
                                            style="font-family:&quot;Microsoft YaHei UI&quot;">类名</span></span></p>
                            </td>
                        </tr>
                        <tr>
                            <td
                                style="background-color:white; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.5479in">
                                <p><span style="font-size:10.5pt"><span
                                            style="font-family:&quot;Comic Sans MS&quot;">&lt;jsp-file&gt;</span></span>
                                </p>
                            </td>
                            <td
                                style="background-color:white; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:4.8625in">
                                <p><span style="font-size:10.5pt"><span
                                            style="font-family:&quot;Microsoft YaHei UI&quot;">指定</span><span
                                            style="font-family:&quot;Comic Sans MS&quot;">web</span><span
                                            style="font-family:&quot;Microsoft YaHei UI&quot;">站台中的某个</span><span
                                            style="font-family:&quot;Comic Sans MS&quot;">JSP</span><span
                                            style="font-family:&quot;Microsoft YaHei UI&quot;">网页的完整路径</span></span></p>
                            </td>
                        </tr>
                        <tr>
                            <td
                                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.5479in">
                                <p><span style="font-size:10.5pt"><span
                                            style="font-family:&quot;Comic Sans MS&quot;">&lt;init-param&gt;</span></span>
                                </p>
                            </td>
                            <td
                                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:4.8625in">
                                <p><span style="font-size:10.5pt"><span
                                            style="font-family:&quot;Microsoft YaHei UI&quot;">用来定义参数，和前面的</span><span
                                            style="font-family:&quot;Comic Sans MS&quot;">&lt;init-param&gt;</span><span
                                            style="font-family:&quot;Microsoft YaHei UI&quot;">差不多</span></span></p>
                                <table summary="" cellspacing="0"
                                    style="border-collapse:collapse; border-color:#a3a3a3; border-style:solid; border-width:1px; "
                                    class=" cke_show_border">
                                    <tbody>
                                        <tr>
                                            <td
                                                style="background-color:black; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.2423in">
                                                <p><span style="font-size:9.5pt"><span
                                                            style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                                                style="color:white"><strong>子标签</strong></span></span></span>
                                                </p>
                                            </td>
                                            <td
                                                style="background-color:black; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:2.8687in">
                                                <p><span style="font-size:9.5pt"><span
                                                            style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                                                style="color:white"><strong>说明</strong></span></span></span>
                                                </p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td
                                                style="background-color:white; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.2423in">
                                                <p><span style="font-size:9.5pt"><span
                                                            style="font-family:&quot;Comic Sans MS&quot;">&lt;param-name&gt;</span></span>
                                                </p>
                                            </td>
                                            <td
                                                style="background-color:white; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:2.8687in">
                                                <p><span style="font-size:9.5pt"><span
                                                            style="font-family:&quot;Microsoft YaHei UI&quot;">参数名称</span></span>
                                                </p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td
                                                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.2423in">
                                                <p><span style="font-size:9.5pt"><span
                                                            style="font-family:&quot;Comic Sans MS&quot;">&lt;param-value&gt;</span></span>
                                                </p>
                                            </td>
                                            <td
                                                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:2.8687in">
                                                <p><span style="font-size:9.5pt"><span
                                                            style="font-family:&quot;Microsoft YaHei UI&quot;">参数文件的路径</span></span>
                                                </p>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <p><span style="font-size:10.5pt"><span
                                            style="font-family:&quot;Microsoft YaHei UI&quot;">&nbsp;</span></span></p>
                            </td>
                        </tr>
                        <tr>
                            <td
                                style="background-color:white; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.5479in">
                                <p><span style="font-size:10.5pt"><span
                                            style="font-family:&quot;Comic Sans MS&quot;">&lt;run-as&gt;</span></span>
                                </p>
                            </td>
                            <td
                                style="background-color:white; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:4.9319in">
                                <p><span style="font-size:10.5pt"><span
                                            style="font-family:&quot;Microsoft YaHei UI&quot;">用于调用</span><span
                                            style="font-family:&quot;Comic Sans MS&quot;">Web</span><span
                                            style="font-family:&quot;Microsoft YaHei UI&quot;">应用中</span><span
                                            style="font-family:&quot;Comic Sans MS&quot;">servlet</span><span
                                            style="font-family:&quot;Microsoft YaHei UI&quot;">所设定的</span><span
                                            style="font-family:&quot;Comic Sans MS&quot;">Enterprise
                                            JavaBean(EJB)</span><span
                                            style="font-family:&quot;Microsoft YaHei UI&quot;">的安全身份</span></span></p>
                                <table summary="" cellspacing="0"
                                    style="border-collapse:collapse; border-color:#a3a3a3; border-style:solid; border-width:1px; "
                                    class=" cke_show_border">
                                    <tbody>
                                        <tr>
                                            <td
                                                style="background-color:black; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.109in">
                                                <p><span style="font-size:9.5pt"><span
                                                            style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                                                style="color:white"><strong>子标签</strong></span></span></span>
                                                </p>
                                            </td>
                                            <td
                                                style="background-color:black; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:3.0187in">
                                                <p><span style="font-size:9.5pt"><span
                                                            style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                                                style="color:white"><strong>说明</strong></span></span></span>
                                                </p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td
                                                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.109in">
                                                <p><span style="font-size:9.5pt"><span
                                                            style="font-family:&quot;Comic Sans MS&quot;">&lt;role-name&gt;</span></span>
                                                </p>
                                            </td>
                                            <td
                                                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:3.0187in">
                                                <p><span style="font-size:9.5pt"><span
                                                            style="font-family:&quot;Microsoft YaHei UI&quot;">当前</span><span
                                                            style="font-family:&quot;Comic Sans MS&quot;">Web</span><span
                                                            style="font-family:&quot;Microsoft YaHei UI&quot;">应用定义的一个安全角色的名称</span></span>
                                                </p>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <p><span style="font-size:10.5pt"><span
                                            style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
                            </td>
                        </tr>
                        <tr>
                            <td
                                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.5479in">
                                <p><span style="font-size:10.5pt"><span
                                            style="font-family:&quot;Comic Sans MS&quot;">&lt;load-on-startup&gt;</span></span>
                                </p>
                            </td>
                            <td
                                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:4.9319in">
                                <p><span style="font-size:10.5pt"><span
                                            style="font-family:&quot;Microsoft YaHei UI&quot;">当</span><span
                                            style="font-family:&quot;Comic Sans MS&quot;">Web</span><span
                                            style="font-family:&quot;Microsoft YaHei UI&quot;">应用启动时，装载</span><span
                                            style="font-family:&quot;Comic Sans MS&quot;">Servlet</span><span
                                            style="font-family:&quot;Microsoft YaHei UI&quot;">的次序</span></span></p>
                                <p><span style="font-size:10.5pt"><span
                                            style="font-family:&quot;Microsoft YaHei UI&quot;">当值为正数或零时：</span><span
                                            style="font-family:&quot;Comic Sans MS&quot;">Servlet</span><span
                                            style="font-family:&quot;Microsoft YaHei UI&quot;">容器先加载数值小的</span><span
                                            style="font-family:&quot;Comic Sans MS&quot;">servlet</span><span
                                            style="font-family:&quot;Microsoft YaHei UI&quot;">，再依次加载其他数值大的</span><span
                                            style="font-family:&quot;Comic Sans MS&quot;">servlet. </span></span></p>
                                <p><span style="font-size:10.5pt"><span
                                            style="font-family:&quot;Microsoft YaHei UI&quot;">当值为负或未定义：</span><span
                                            style="font-family:&quot;Comic Sans MS&quot;">Servlet</span><span
                                            style="font-family:&quot;Microsoft YaHei UI&quot;">容器将在</span><span
                                            style="font-family:&quot;Comic Sans MS&quot;">Web</span><span
                                            style="font-family:&quot;Microsoft YaHei UI&quot;">客户首次访问这个</span><span
                                            style="font-family:&quot;Comic Sans MS&quot;">servlet</span><span
                                            style="font-family:&quot;Microsoft YaHei UI&quot;">时加载它 </span></span></p>
                            </td>
                        </tr>
                        <tr>
                            <td
                                style="background-color:white; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.5479in">
                                <p><span style="font-size:10.5pt"><span
                                            style="font-family:&quot;Comic Sans MS&quot;">&lt;security-role&gt;</span></span>
                                </p>
                            </td>
                            <td
                                style="background-color:white; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:4.8625in">
                                <p><span style="font-size:10.5pt"><span
                                            style="font-family:&quot;Microsoft YaHei UI&quot;">给出安全角色的一个列表，这些角色将出现在</span><span
                                            style="font-family:&quot;Comic Sans MS&quot;">servlet</span><span
                                            style="font-family:&quot;Microsoft YaHei UI&quot;">元素内的</span><span
                                            style="font-family:&quot;Comic Sans MS&quot;">security-role-ref</span><span
                                            style="font-family:&quot;Microsoft YaHei UI&quot;">元素的</span><span
                                            style="font-family:&quot;Comic Sans MS&quot;">role-name</span><span
                                            style="font-family:&quot;Microsoft YaHei UI&quot;">子元素中。分别地声明角色可使高级</span><span
                                            style="font-family:&quot;Comic Sans MS&quot;">IDE</span><span
                                            style="font-family:&quot;Microsoft YaHei UI&quot;">处理安全信息更为容易</span></span>
                                </p>
                                <table summary="" cellspacing="0"
                                    style="border-collapse:collapse; border-color:#a3a3a3; border-style:solid; border-width:1px; "
                                    class=" cke_show_border">
                                    <tbody>
                                        <tr>
                                            <td
                                                style="background-color:black; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.184in">
                                                <p><span style="font-size:9.5pt"><span
                                                            style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                                                style="color:white"><strong>子标签</strong></span></span></span>
                                                </p>
                                            </td>
                                            <td
                                                style="background-color:black; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:3.027in">
                                                <p><span style="font-size:9.5pt"><span
                                                            style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                                                style="color:white"><strong>说明</strong></span></span></span>
                                                </p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td
                                                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.184in">
                                                <p><span style="font-size:9.5pt"><span
                                                            style="font-family:&quot;Comic Sans MS&quot;">&lt;role-name&gt;</span></span>
                                                </p>
                                            </td>
                                            <td
                                                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:3.027in">
                                                <p><span style="font-size:9.5pt"><span
                                                            style="font-family:&quot;Microsoft YaHei UI&quot;">当前</span><span
                                                            style="font-family:&quot;Comic Sans MS&quot;">Web</span><span
                                                            style="font-family:&quot;Microsoft YaHei UI&quot;">应用定义的一个安全角色的名称</span></span>
                                                </p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td
                                                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.184in">
                                                <p><span style="font-size:9.5pt"><span
                                                            style="font-family:&quot;Comic Sans MS&quot;">&lt;description&gt;</span></span>
                                                </p>
                                            </td>
                                            <td
                                                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:3.027in">
                                                <p><span style="font-size:9.5pt"><span
                                                            style="font-family:&quot;Microsoft YaHei UI&quot;">参数描述</span></span>
                                                </p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td
                                                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.184in">
                                                <p><span style="font-size:9.5pt"><span
                                                            style="font-family:&quot;Comic Sans MS&quot;">&lt;role-link&gt;</span></span>
                                                </p>
                                            </td>
                                            <td
                                                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:3.0437in">
                                                <p><span style="font-size:9.5pt"><span
                                                            style="font-family:&quot;Microsoft YaHei UI&quot;">用来将安全角色引用链接到已定义的安全角色。</span><span
                                                            style="font-family:&quot;Comic Sans MS&quot;">role-link</span><span
                                                            style="font-family:&quot;Microsoft YaHei UI&quot;">元素必须含有已经在</span><span
                                                            style="font-family:&quot;Comic Sans MS&quot;">security-role</span><span
                                                            style="font-family:&quot;Microsoft YaHei UI&quot;">元素中定义的一个安全角色的名称</span></span>
                                                </p>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <p><span style="font-size:10.5pt"><span
                                            style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
                            </td>
                        </tr>
                        <tr>
                            <td
                                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.5479in">
                                <p><span style="font-size:10.5pt"><span
                                            style="font-family:&quot;Comic Sans MS&quot;">&lt;multipart-config&gt;</span></span>
                                </p>
                            </td>
                            <td
                                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:4.9944in">
                                <p><span style="font-size:10.5pt"><span
                                            style="font-family:&quot;Microsoft YaHei UI&quot;">文件上传的相关设置</span></span>
                                </p>
                                <table summary="" cellspacing="0"
                                    style="border-collapse:collapse; border-color:#a3a3a3; border-style:solid; border-width:1px; "
                                    class=" cke_show_border">
                                    <tbody>
                                        <tr>
                                            <td
                                                style="background-color:black; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.8104in">
                                                <p><span style="font-size:9.5pt"><span
                                                            style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                                                style="color:white"><strong>属性名</strong></span></span></span>
                                                </p>
                                            </td>
                                            <td
                                                style="background-color:black; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:2.6263in">
                                                <p><span style="font-size:9.5pt"><span
                                                            style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                                                style="color:white"><strong>描述</strong></span></span></span>
                                                </p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td
                                                style="background-color:white; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.8104in">
                                                <p><span style="font-size:9.5pt"><span
                                                            style="font-family:&quot;Comic Sans MS&quot;">&lt;file-size-threshold&gt;</span></span>
                                                </p>
                                            </td>
                                            <td
                                                style="background-color:white; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:2.6569in">
                                                <p><span style="font-size:9.5pt"><span
                                                            style="font-family:&quot;Microsoft YaHei UI&quot;">当数据量大于该值时，内容将被写入文件。</span></span>
                                                </p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td
                                                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.8104in">
                                                <p><span style="font-size:9.5pt"><span
                                                            style="font-family:&quot;Comic Sans MS&quot;">&lt;location&gt;</span></span>
                                                </p>
                                            </td>
                                            <td
                                                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:2.6263in">
                                                <p><span style="font-size:9.5pt"><span
                                                            style="font-family:&quot;Microsoft YaHei UI&quot;">存放生成的文件地址。</span></span>
                                                </p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td
                                                style="background-color:white; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.8104in">
                                                <p><span style="font-size:9.5pt"><span
                                                            style="font-family:&quot;Comic Sans MS&quot;">&lt;max-file-size&gt;</span></span>
                                                </p>
                                            </td>
                                            <td
                                                style="background-color:white; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:2.6791in">
                                                <p><span style="font-size:9.5pt"><span
                                                            style="font-family:&quot;Microsoft YaHei UI&quot;">允许上传的文件最大值。默认值为</span><span
                                                            style="font-family:&quot;Comic Sans MS&quot;">
                                                            -1</span><span
                                                            style="font-family:&quot;Microsoft YaHei UI&quot;">，表示没有限制。</span></span>
                                                </p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td
                                                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.8104in">
                                                <p><span style="font-size:9.5pt"><span
                                                            style="font-family:&quot;Comic Sans MS&quot;">&lt;max-request-size&gt;</span></span>
                                                </p>
                                            </td>
                                            <td
                                                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:2.6861in">
                                                <p><span style="font-size:9.5pt"><span
                                                            style="font-family:&quot;Microsoft YaHei UI&quot;">针对该</span><span
                                                            style="font-family:&quot;Comic Sans MS&quot;">
                                                            multipart/form-data </span><span
                                                            style="font-family:&quot;Microsoft YaHei UI&quot;">请求的最大数量，默认值为</span><span
                                                            style="font-family:&quot;Comic Sans MS&quot;">
                                                            -1</span><span
                                                            style="font-family:&quot;Microsoft YaHei UI&quot;">，表示没有限制。</span></span>
                                                </p>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <p><span style="font-size:10.5pt"><span
                                            style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
                            </td>
                        </tr>
                        <tr>
                            <td
                                style="background-color:white; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.5479in">
                                <p><span style="font-size:10.5pt"><span
                                            style="font-family:&quot;Comic Sans MS&quot;">&lt;async-supported&gt;</span></span>
                                </p>
                            </td>
                            <td
                                style="background-color:white; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:4.8625in">
                                <p><span style="font-size:10.5pt"><span
                                            style="font-family:&quot;Microsoft YaHei UI&quot;">异步处理，默认为</span><span
                                            style="font-family:&quot;Comic Sans MS&quot;">true, false</span><span
                                            style="font-family:&quot;Microsoft YaHei UI&quot;">表示设置为同步处理</span></span>
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td
                                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.5479in">
                                <p><span style="font-size:10.5pt"><span
                                            style="font-family:&quot;Comic Sans MS&quot;">&lt;enabled&gt;</span></span>
                                </p>
                            </td>
                            <td
                                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:4.8625in">
                                <p><span style="font-size:10.5pt"><span
                                            style="font-family:&quot;Microsoft YaHei UI&quot;">设置是否可用</span></span></p>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
            </td>
        </tr>
        <tr>
            <td
                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.7416in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;">&lt;servlet-mapping&gt;</span></span></p>
            </td>
            <td
                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:7.0847in">
                <p><span style="font-size:11.5pt"><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">服务器一般为</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">servlet</span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">提供一个缺省的</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">URL</span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">：</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">http://host/webAppPrefix/servlet/ServletName.</span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">但是，常常会更改这个</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">URL</span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">，以便</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">servlet</span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">可以访问初始化参数或更容易地处理相对</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">URL</span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">。在更改缺省</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">URL</span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">时，使用</span><span
                            style="font-family:&quot;Comic Sans MS&quot;">servlet-mapping</span><span
                            style="font-family:&quot;Microsoft YaHei UI&quot;">元素</span></span></p>
                <table summary="" cellspacing="0"
                    style="border-collapse:collapse; border-color:#a3a3a3; border-style:solid; border-width:1px; "
                    class=" cke_show_border">
                    <tbody>
                        <tr>
                            <td
                                style="background-color:black; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.1902in">
                                <p><span style="font-size:10.5pt"><span
                                            style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                                style="color:white"><strong>子标签</strong></span></span></span></p>
                            </td>
                            <td
                                style="background-color:black; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.4243in">
                                <p><span style="font-size:10.5pt"><span
                                            style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                                style="color:white"><strong>说明</strong></span></span></span></p>
                            </td>
                        </tr>
                        <tr>
                            <td
                                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.2097in">
                                <p><span style="font-size:10.5pt"><span
                                            style="font-family:&quot;Comic Sans MS&quot;">&lt;servlet-name&gt;</span></span>
                                </p>
                            </td>
                            <td
                                style="border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.4048in">
                                <p><span style="font-size:10.5pt"><span
                                            style="font-family:&quot;Comic Sans MS&quot;">servlet</span><span
                                            style="font-family:&quot;Microsoft YaHei UI&quot;">名称</span></span></p>
                            </td>
                        </tr>
                        <tr>
                            <td
                                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.1902in">
                                <p><span style="font-size:10.5pt"><span
                                            style="font-family:&quot;Comic Sans MS&quot;">&lt;url-pattern&gt;</span></span>
                                </p>
                            </td>
                            <td
                                style="background-color:#e7e6e6; border-bottom:1px solid #a3a3a3; border-left:1px solid #a3a3a3; border-right:1px solid #a3a3a3; border-top:1px solid #a3a3a3; vertical-align:top; width:1.4937in">
                                <p><span style="font-size:10.5pt"><span
                                            style="font-family:&quot;Comic Sans MS&quot;">servlet</span><span
                                            style="font-family:&quot;Microsoft YaHei UI&quot;">所对应的</span><span
                                            style="font-family:&quot;Comic Sans MS&quot;">URL</span></span></p>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <p><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                                style="color:#70ad47">&nbsp;</span></span></span></p>
            </td>
        </tr>
    </tbody>
</table>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                style="color:#70ad47">&nbsp;</span></span></span></p>
<ul style="list-style-type:disc">
    <li><span style="font-size:12.0pt"><span
                style="font-family:&quot;Comic Sans MS&quot;">&lt;servlet&gt;</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">有两种配置</span></span><span
            style="font-size:12.0pt"><span
                style="font-family:&quot;Comic Sans MS&quot;">dispatcher-servlet.xml</span></span><span
            style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">方案</span></span></li>
</ul>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;">&nbsp;</span></span></p>
<ul style="list-style-type:disc">
    <li><span style="font-size:12.0pt"><strong><span
                    style="font-family:&quot;Microsoft YaHei UI&quot;">使用默认配置文件路径，文件名规则：</span></strong></span><span
            style="font-size:12.0pt"><strong><span
                    style="font-family:&quot;Comic Sans MS&quot;">&lt;</span></strong></span><span
            style="font-size:12.0pt"><strong><span
                    style="font-family:&quot;Comic Sans MS&quot;">servlet-name</span></strong></span><span
            style="font-size:12.0pt"><strong><span
                    style="font-family:&quot;Comic Sans MS&quot;">&gt;-servet.xml</span></strong></span></li>
</ul>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">/WEB-INF</span></span></p>
<p style="margin-left: 120px;"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">web.xml</span></span></p>
<p style="margin-left: 120px;"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">dispatcher-servlet.xml</span></span></p>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                style="color:#70ad47"><strong>示例</strong></span></span></span></p>
<table summary="" cellspacing="0"
    style="border-collapse:collapse; border-color:#a3a3a3; border-style:solid; border-width:0px; margin-left:68px"
    class=" cke_show_border">
    <tbody>
        <tr>
            <td
                style="background-color:white; border-bottom:0px; border-left:0px; border-right:0px; border-top:0px; vertical-align:top; width:6.6958in">
                <p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">&lt;servlet&gt;</span></span></span></p>
                <p><span style="font-size:12.0pt"><span style="color:#538135"><span
                                style="font-family:&quot;Comic Sans MS&quot;">&lt;!-- </span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">配置前端控制器</span><span
                                style="font-family:&quot;Comic Sans MS&quot;">DispatcherServlet</span><span
                                style="font-family:&quot;Comic Sans MS&quot;"> --&gt;</span></span></span></p>
                <p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">&nbsp;&nbsp;<span
                                style="color:blue">&lt;servlet-name&gt;</span>dispatcher&lt;/servlet-name&gt;</span></span>
                </p>
                <p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">&nbsp;&nbsp;<span
                                style="color:blue">&lt;servlet-class&gt;</span><span
                                style="color:black">org.springframework.web.servlet.DispatcherServlet</span><span
                                style="color:blue">&lt;/servlet-class&gt;</span></span></span></p>
                <p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">&lt;/servlet&gt;</span></span></span></p>
            </td>
        </tr>
    </tbody>
</table>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">&nbsp;</span></span></p>
<ul style="list-style-type:disc">
    <li><span style="font-size:12.0pt"><strong><span
                    style="font-family:&quot;Microsoft YaHei UI&quot;">指定配置文件路径</span></strong></span></li>
</ul>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">/resources</span></span></p>
<p style="margin-left: 120px;"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">dispatcher-servlet.xml</span></span></p>
<p style="margin-left: 80px;"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">/webapp</span></span></p>
<p style="margin-left: 120px;"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">/WEB-INF</span></span></p>
<p style="margin-left: 160px;"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">web.xml</span></span></p>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                style="color:#70ad47"><strong>示例</strong></span></span></span></p>
<table summary="" cellspacing="0"
    style="border-collapse:collapse; border-color:#a3a3a3; border-style:solid; border-width:0px; margin-left:68px"
    class=" cke_show_border">
    <tbody>
        <tr>
            <td
                style="background-color:white; border-bottom:0px; border-left:0px; border-right:0px; border-top:0px; vertical-align:top; width:6.6958in">
                <p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">&lt;servlet&gt;</span></span></span></p>
                <p><span style="font-size:12.0pt"><span style="color:#538135"><span
                                style="font-family:&quot;Comic Sans MS&quot;">&lt;!-- </span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">配置前端控制器</span><span
                                style="font-family:&quot;Comic Sans MS&quot;">DispatcherServlet</span><span
                                style="font-family:&quot;Comic Sans MS&quot;"> --&gt;</span></span></span></p>
                <p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">&nbsp;&nbsp;<span
                                style="color:blue">&lt;servlet-name&gt;</span>dispatcher&lt;/servlet-name&gt;</span></span>
                </p>
                <p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">&nbsp;&nbsp;<span
                                style="color:blue">&lt;servlet-class&gt;</span><span
                                style="color:black">org.springframework.web.servlet.DispatcherServlet</span><span
                                style="color:blue">&lt;/servlet-class&gt;</span></span></span></p>
                <p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">&nbsp;&nbsp;<span
                                style="color:blue">&lt;init-param&gt;</span></span></span></p>
                <p><span style="font-size:12.0pt"><span style="color:#538135"><span
                                style="font-family:&quot;Comic Sans MS&quot;">&lt;!-- </span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">指定</span><span
                                style="font-family:&quot;Comic Sans MS&quot;">servlet</span><span
                                style="font-family:&quot;Microsoft YaHei UI&quot;">对象代理的配置文件</span><span
                                style="font-family:&quot;Comic Sans MS&quot;">dispatcher-servlet.xml</span><span
                                style="font-family:&quot;Comic Sans MS&quot;"> --&gt;</span></span></span></p>
                <p><span style="font-size:12.0pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;">&nbsp;&nbsp;&nbsp;&nbsp;<span
                                style="color:blue">&lt;param-name&gt;</span><span
                                style="color:black">contextConfigLocation</span><span
                                style="color:blue">&lt;/param-name&gt;</span></span></span></p>
                <p><span style="font-size:12.0pt"><span
                            style="font-family:&quot;Comic Sans MS&quot;">&nbsp;&nbsp;&nbsp;&nbsp;<span
                                style="color:blue">&lt;param-value&gt;</span><span
                                style="color:black">classpath:dispatcher-servlet.xml</span><span
                                style="color:blue">&lt;/param-value&gt;</span></span></span></p>
                <p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">&nbsp;&nbsp;<span
                                style="color:blue">&lt;/init-param&gt;</span></span></span></p>
                <p><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                                style="color:blue">&lt;/servlet&gt;</span></span></span></p>
            </td>
        </tr>
    </tbody>
</table>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                style="color:#70ad47">&nbsp;</span></span></span></p>
<ul style="list-style-type:disc">
    <li><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">&lt;servlet-mapping&gt;
            </span></span><span style="font-size:12.0pt"><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">的两种映射方式</span></span>
        <ol style="list-style-type:decimal">
            <li value="1"><span style="font-size:12.0pt"><span
                        style="font-family:&quot;Microsoft YaHei UI&quot;">使用扩展名方式：</span></span><span
                    style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">*.</span></span><span
                    style="font-size:12.0pt"><span
                        style="font-family:&quot;Microsoft YaHei UI&quot;">自定义扩展名，类似</span></span><span
                    style="font-size:12.0pt"><span
                        style="font-family:&quot;Comic Sans MS&quot;">*.do,*.action</span></span></li>
            <li><span style="font-size:12.0pt"><span
                        style="font-family:&quot;Microsoft YaHei UI&quot;">使用斜杠：</span></span><span
                    style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;">/</span></span></li>
        </ol>
    </li>
</ul>
<p><span style="font-size:12.0pt"><span style="font-family:&quot;Microsoft YaHei UI&quot;"><span
                style="color:#70ad47"><strong>示例</strong></span></span></span></p>
<p style="margin-left:36px"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:blue">&lt;servlet-mapping&gt;</span></span></span></p>
<p style="margin-left:36px"><span style="font-size:12.0pt"><span style="color:#538135"><span
                style="font-family:&quot;Comic Sans MS&quot;">&lt;!-- </span><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">把请求映射到</span><span
                style="font-family:&quot;Comic Sans MS&quot;">servlet --&gt;</span></span></span></p>
<p style="margin-left:36px"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">&nbsp;&nbsp;<span
                style="color:blue">&lt;servlet-name&gt;</span>dispatcher&lt;/servlet-name&gt;</span></span></p>
<p style="margin-left:36px"><span style="font-size:12.0pt"><span style="color:#538135"><span
                style="font-family:&quot;Comic Sans MS&quot;">&lt;!-- </span><span
                style="font-family:&quot;Microsoft YaHei UI&quot;">拦截所有请求</span><span
                style="font-family:&quot;Comic Sans MS&quot;"> --&gt;</span></span></span></p>
<p style="margin-left:36px"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">&nbsp;&nbsp;<span
                style="color:blue">&lt;url-pattern&gt;/&lt;/url-pattern&gt;</span></span></span></p>
<p style="margin-left:36px"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Comic Sans MS&quot;">&nbsp;&nbsp;<span
                style="color:blue">&lt;url-pattern&gt;</span><span style="color:blue">*.da</span><span
                style="color:blue">&lt;/url-pattern&gt;</span></span></span></p>
<p style="margin-left:36px"><span style="font-size:12.0pt"><span style="font-family:&quot;Comic Sans MS&quot;"><span
                style="color:blue">&lt;/servlet-mapping&gt;</span></span></span></p>
<p><span style="font-size:12.0pt"><span
            style="font-family:&quot;Microsoft YaHei UI&quot;"><strong>注</strong></span></span></p>
<p style="margin-left: 40px;"><span style="font-size:12.0pt"><span
            style="font-family:&quot;Microsoft YaHei UI&quot;">使用斜杠后前端控制器与</span><span
            style="font-family:&quot;Comic Sans MS&quot;">tomcat</span><span
            style="font-family:&quot;Microsoft YaHei UI&quot;">中</span><span
            style="font-family:&quot;Comic Sans MS&quot;">config</span><span
            style="font-family:&quot;Microsoft YaHei UI&quot;">目录下</span><span
            style="font-family:&quot;Comic Sans MS&quot;">web.xml</span><span
            style="font-family:&quot;Microsoft YaHei UI&quot;">中的</span><span
            style="font-family:&quot;Comic Sans MS&quot;">default servlet</span><span
            style="font-family:&quot;Microsoft YaHei UI&quot;">作用一样，接收了静态资源和其他未映射的请求，需要对静态资源提供映射，即</span><span
            style="font-family:&quot;Comic Sans MS&quot;">&lt;mvc:resources</span><span
            style="font-family:&quot;Comic Sans MS&quot;">&gt;</span></span></p>
