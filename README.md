<div align=center>
  <img style="text-align:center" src=https://raw.githubusercontent.com/Exisi/MagicBook/main/favicon.ico width=20% />
  <h1>MagicBook</h1>

![Hexo](https://img.shields.io/badge/Hexo-0E83CD?style=for-the-badge&logo=hexo&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)

<p>MagicBook 是基于 Hexo 构建的笔记网站，用于存放已归档的笔记
所有笔记整理均来源于网络的文章博客等，全部为手动更新，不能保证笔记的时效性，仅供查阅。</p>
</div>

### 起源

为了随时查阅笔记，我使用 Hexo 构建了 MagicBook，静态托管于 Vercel

1. 起初受限于 OneNote 笔记的导出问题，得益于项目 [ClipboardViewer](https://github.com/walterlv/ClipboardViewer) 对富文本的快速获取，笔记得以 由 HTML 代码的方式快速导出

2. 所有笔记来自 OneNote 笔记富文本 转 HTML 格式，笔记的 Markdown 文件仅用于为笔记添加标签。内容主体还是 HTML 格式

3. 图片为 base64 进行保存 (虽然这看起来不太明智，不过对于大量的笔记，迁移的效率比较高，这也能让我规避需要图床的问题:))

### 已归档

- [HTML](https://m.exi.ink/2022/10/20/HTML/HTML/)
- [MyBatis](https://m.exi.ink/2022/11/27/MyBatis/MyBatis/)
- [Spring](https://m.exi.ink/2022/11/28/Spring/Spring/)
- [Spring Boot](https://m.exi.ink/2022/11/28/Spring%20Boot/Spring%20Boot/)

### 主题

[Node-Tree](https://github.com/Exisi/MagicBook/tree/main/themes/node-tree) 是基于 [Tree](https://github.com/wujun234/hexo-theme-tree) 修改的目录结构的树状主题, 如果对主题有兴趣可以前往相关文档进行查看：[Node-Tree 文档](https://github.com/Exisi/MagicBook/tree/main/themes/node-tree)
