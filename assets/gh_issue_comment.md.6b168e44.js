import{_ as e,c as a,o as s,a as t}from"./app.888d8daa.js";const _=JSON.parse('{"title":"gh issue comment","description":"","frontmatter":{},"headers":[{"level":2,"title":"选项","slug":"选项","link":"#选项","children":[]},{"level":2,"title":"从父命令继承的选项","slug":"从父命令继承的选项","link":"#从父命令继承的选项","children":[]},{"level":2,"title":"示例","slug":"示例","link":"#示例","children":[]},{"level":2,"title":"另请参见","slug":"另请参见","link":"#另请参见","children":[]}],"relativePath":"gh_issue_comment.md","lastUpdated":1675236702000}'),l={name:"gh_issue_comment.md"},n=t(`<h1 id="gh-issue-comment" tabindex="-1">gh issue comment <a class="header-anchor" href="#gh-issue-comment" aria-hidden="true">#</a></h1><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">gh issue comment {&lt;number&gt; | &lt;url&gt;} [flags]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>向 GitHub issue 添加评论。</p><p>如果没有通过标志提供的正文文本，该命令将以交互方式提示输入注释文本。</p><h2 id="选项" tabindex="-1">选项 <a class="header-anchor" href="#选项" aria-hidden="true">#</a></h2><p><code>-b</code>, <code>--body &lt;text&gt;</code></p><p>评论的正文文本</p><p><code>-F</code>, <code>--body-file &lt;file&gt;</code></p><p>从文件中读取正文文本（使用“-”从标准输入中读取）</p><p><code>--edit-last</code></p><p>编辑同一作者的最后一条评论</p><p><code>-e</code>, <code>--editor</code></p><p>跳过提示并打开文本编辑器以编写正文</p><p><code>-w</code>, <code>--web</code></p><p>打开网络浏览器以撰写评论</p><h2 id="从父命令继承的选项" tabindex="-1">从父命令继承的选项 <a class="header-anchor" href="#从父命令继承的选项" aria-hidden="true">#</a></h2><p><code>-R</code>, <code>--repo &lt;[HOST/]OWNER/REPO&gt;</code></p><p>使用 [HOST/]OWNER/REPO 格式选择另一个仓库</p><h2 id="示例" tabindex="-1">示例 <a class="header-anchor" href="#示例" aria-hidden="true">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">$ gh issue comment 12 --body &quot;Hi from GitHub CLI&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="另请参见" tabindex="-1">另请参见 <a class="header-anchor" href="#另请参见" aria-hidden="true">#</a></h2><ul><li><a href="/github-cli-manual-zh/gh_issue.html">gh issue</a></li></ul>`,22),o=[n];function c(i,d,p,r,h,u){return s(),a("div",null,o)}const g=e(l,[["render",c]]);export{_ as __pageData,g as default};