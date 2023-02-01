import{_ as e,c as a,o as t,a as l}from"./app.001f7d66.js";const u=JSON.parse('{"title":"gh repo delete","description":"","frontmatter":{},"headers":[{"level":2,"title":"选项","slug":"选项","link":"#选项","children":[]},{"level":2,"title":"另请参见","slug":"另请参见","link":"#另请参见","children":[]}],"relativePath":"gh_repo_delete.md","lastUpdated":1675236702000}'),s={name:"gh_repo_delete.md"},r=l(`<h1 id="gh-repo-delete" tabindex="-1">gh repo delete <a class="header-anchor" href="#gh-repo-delete" aria-hidden="true">#</a></h1><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">gh repo delete [&lt;repository&gt;] [flags]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>删除 GitHub 仓库。</p><p>如果没有参数，则删除当前仓库。否则，将删除指定的仓库。</p><p>删除需要使用“delete_repo”范围进行授权。要进行授权，请运行“gh auth refresh -s delete_repo”。</p><h2 id="选项" tabindex="-1">选项 <a class="header-anchor" href="#选项" aria-hidden="true">#</a></h2><p><code>--yes</code></p><p>确认删除而不提示</p><h2 id="另请参见" tabindex="-1">另请参见 <a class="header-anchor" href="#另请参见" aria-hidden="true">#</a></h2><ul><li><a href="/github-cli-manual-zh/gh_repo.html">gh repo</a></li></ul>`,10),o=[r];function n(p,d,h,i,c,_){return t(),a("div",null,o)}const f=e(s,[["render",n]]);export{u as __pageData,f as default};
