(window.webpackJsonp=window.webpackJsonp||[]).push([[114],{404:function(n,a,s){"use strict";s.r(a),a.default='<p><a href="https://badge.fury.io/js/polymer-webpack-loader"><img src="https://badge.fury.io/js/polymer-webpack-loader.svg" alt="npm version"></a>\n<a href="https://travis-ci.org/webpack-contrib/polymer-webpack-loader"><img src="https://travis-ci.org/webpack-contrib/polymer-webpack-loader.svg?branch=master" alt="build status"></a></p>\n<blockquote>\n<p><a href="https://www.polymer-project.org/">Polymer</a> component loader for <a href="/">webpack</a>.</p>\n</blockquote>\n<p>The loader allows you to write mixed HTML, CSS and JavaScript Polymer elements and\nstill use the full webpack ecosystem including module bundling and code splitting.</p>\n<img width="1024" alt="" src="https://user-images.githubusercontent.com/1066253/28131928-3b257288-66f0-11e7-8295-cb968cefb040.png">\n<p>The loader transforms your components:</p>\n<ul>\n<li>\n<p><code>&#x3C;link rel="import" href="./my-other-element.html"></code> -> <code>import \'./my-other-element.html\';</code></p>\n</li>\n<li>\n<p><code>&#x3C;dom-module></code> becomes a string which is registered at runtime</p>\n</li>\n<li>\n<p><code>&#x3C;script src="./other-script.js">&#x3C;/script></code> -> <code>import \'./other-script.js\';</code></p>\n</li>\n<li>\n<p><code>&#x3C;script>/* contents */&#x3C;/script></code> -> <code>/* contents */</code></p>\n<p>What does that mean?</p>\n<p>Any <code>&#x3C;link></code> "href" or <code>&#x3C;script></code> "src" that is <strong>not an external link</strong> and does not start with <code>~</code>, <code>/</code>, <code>./</code> or a series of <code>../</code> will have <code>./</code> appended to the beginning of the value. To prevent this change use options ignoreLinks below. </p>\n</li>\n</ul>\n<h2 id="path-translations">Path Translations<a href="#path-translations" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<table>\n<thead>\n<tr>\n<th><code>tag</code></th>\n<th><code>import</code></th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td><div class="title"><p>tag</p><p>import</p></div>\n<div class="content"><p><code>&#x3C;link rel="import" href="path/to/some-element.html"></code><p class="description mobile"><code>import "./path/to/some-element.html"</code></p></p></div></td>\n<td class="description desktop"><code>import "./path/to/some-element.html"</code></td>\n</tr>\n<tr>\n<td><div class="title"><p>tag</p><p>import</p></div>\n<div class="content"><p><code>&#x3C;link rel="import" href="/path/to/some-element.html"></code><p class="description mobile"><code>import "/path/to/some-element.html"</code></p></p></div></td>\n<td class="description desktop"><code>import "/path/to/some-element.html"</code></td>\n</tr>\n<tr>\n<td><div class="title"><p>tag</p><p>import</p></div>\n<div class="content"><p><code>&#x3C;link rel="import" href="../path/to/some-element.html"></code><p class="description mobile"><code>import "../path/to/some-element.html"</code></p></p></div></td>\n<td class="description desktop"><code>import "../path/to/some-element.html"</code></td>\n</tr>\n<tr>\n<td><div class="title"><p>tag</p><p>import</p></div>\n<div class="content"><p><code>&#x3C;link rel="import" href="./path/to/some-element.html"></code><p class="description mobile"><code>import "./path/to/some-element.html"</code></p></p></div></td>\n<td class="description desktop"><code>import "./path/to/some-element.html"</code></td>\n</tr>\n<tr>\n<td><div class="title"><p>tag</p><p>import</p></div>\n<div class="content"><p><code>&#x3C;link rel="import" href="~path/to/some-element.html"></code><p class="description mobile"><code>import "~path/to/some-element.html"</code></p></p></div></td>\n<td class="description desktop"><code>import "~path/to/some-element.html"</code></td>\n</tr>\n</tbody>\n</table>\n<h2 id="configuring-the-loader">Configuring the Loader<a href="#configuring-the-loader" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<pre><code class="hljs language-javascript"><span class="token punctuation">{</span>\n  test<span class="token punctuation">:</span> <span class="token regex">/\\.html$/</span><span class="token punctuation">,</span>\n  include<span class="token punctuation">:</span> <span class="token function">Condition</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span> <span class="token punctuation">(</span>optional<span class="token punctuation">)</span><span class="token punctuation">,</span>\n  exclude<span class="token punctuation">:</span> <span class="token function">Condition</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span> <span class="token punctuation">(</span>optional<span class="token punctuation">)</span><span class="token punctuation">,</span>\n  options<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    ignoreLinks<span class="token punctuation">:</span> <span class="token function">Condition</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span> <span class="token punctuation">(</span>optional<span class="token punctuation">)</span><span class="token punctuation">,</span>\n    ignorePathReWrite<span class="token punctuation">:</span> <span class="token function">Condition</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span> <span class="token punctuation">(</span>optional<span class="token punctuation">)</span><span class="token punctuation">,</span>\n    processStyleLinks<span class="token punctuation">:</span> <span class="token function">Boolean</span> <span class="token punctuation">(</span>optional<span class="token punctuation">)</span><span class="token punctuation">,</span>\n    htmlLoader<span class="token punctuation">:</span> <span class="token function">Object</span> <span class="token punctuation">(</span>optional<span class="token punctuation">)</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  loader<span class="token punctuation">:</span> <span class="token string">\'polymer-webpack-loader\'</span>\n<span class="token punctuation">}</span><span class="token punctuation">,</span></code></pre>\n<h3 id="include-conditions">include: Condition(s)<a href="#include-conditions" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p>See <a href="/configuration/module/#ruleinclude">Rule.include</a> and <a href="/configuration/module/#condition">Condition</a> in the webpack documentation. Paths\nmatching this option will be processed by polymer-webpack-loader.  WARNING: If\nthis property exists the loader will only process files matching the given\nconditions. If your component has a <code>&#x3C;link></code> pointing to a component e.g. in\nanother directory, the <code>include</code> condition(s) MUST also match that directory.</p>\n<h3 id="exclude-conditions">exclude: Condition(s)<a href="#exclude-conditions" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p>See <a href="/configuration/module/#ruleexclude">Rule.exclude</a> and <a href="/configuration/module/#condition">Condition</a> in the webpack documentation. Paths\nmatching this option will be excluded from processing by\npolymer-webpack-loader. NOTE: Files imported through a <code>&#x3C;link></code> will not be\nexcluded by this property. See <code>Options.ignoreLinks</code>.</p>\n<h3 id="options">Options<a href="#options" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<h4 id="ignorelinks-conditions">ignoreLinks: Condition(s)<a href="#ignorelinks-conditions" aria-hidden="true"><span class="icon icon-link"></span></a></h4>\n<p><code>&#x3C;link></code>s pointing to paths matching these conditions (see <a href="/configuration/module/#condition">Condition</a> in the\nwebpack documentation) will not be transformed into <code>import</code>s.</p>\n<h4 id="ignorepathrewrite-conditions">ignorePathReWrite: Condition(s)<a href="#ignorepathrewrite-conditions" aria-hidden="true"><span class="icon icon-link"></span></a></h4>\n<p><code>&#x3C;link></code> paths matching these conditions (see <a href="/configuration/module/#condition">Condition</a> in the webpack\ndocumentation) will not be changed when transformed into <code>import</code>s. This can\nbe useful for respecting aliases, loader syntax (e.g.\n<code>markup-inline-loader!./my-element.html</code>), or module paths.</p>\n<h4 id="processstylelinks-boolean">processStyleLinks Boolean<a href="#processstylelinks-boolean" aria-hidden="true"><span class="icon icon-link"></span></a></h4>\n<p>If set to true the loader will rewrite <code>&#x3C;link import="css" href="..."></code> or <code>&#x3C;link rel="stylesheet" href="..."></code> that are inside the dom-module with <code>&#x3C;style>require(\'...\')&#x3C;/style></code>. This will allow for the file to be processed by loaders that are set up in the webpack config to handle their file type. </p>\n<ol>\n<li>Any <code>&#x3C;link></code> that is inside the <code>&#x3C;dom-module></code> but not in the <code>&#x3C;template></code> will be added to the <code>&#x3C;template></code> in the order the tags appear in the file.</li>\n</ol>\n<pre><code class="hljs language-html">  <span class="token tag"><span class="token tag"><span class="token punctuation">&#x3C;</span>dom-module</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&#x3C;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>stylesheet<span class="token punctuation">"</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>file1.css<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&#x3C;</span>template</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&#x3C;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>stylesheet<span class="token punctuation">"</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>file2.css<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&#x3C;/</span>template</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&#x3C;/</span>dom-module</span><span class="token punctuation">></span></span>\n\n  would produce\n\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&#x3C;</span>dom-module</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&#x3C;</span>template</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&#x3C;</span>style</span><span class="token punctuation">></span></span><span class="token style language-css"><span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'file1.css\'</span><span class="token punctuation">)</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&#x3C;/</span>style</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&#x3C;</span>style</span><span class="token punctuation">></span></span><span class="token style language-css"><span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'file2.css\'</span><span class="token punctuation">)</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&#x3C;/</span>style</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&#x3C;/</span>template</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&#x3C;/</span>dom-module</span><span class="token punctuation">></span></span></code></pre>\n<ol start="2">\n<li>The loader will only replace a <code>&#x3C;link></code> if the href is a relative path. Any link attempting to access an external link i.e. <code>http</code>, <code>https</code> or <code>//</code> will not be replaced.</li>\n</ol>\n<h4 id="htmlloader-object">htmlLoader: Object<a href="#htmlloader-object" aria-hidden="true"><span class="icon icon-link"></span></a></h4>\n<p>Options to pass to the html-loader. See <a href="/loaders/html-loader/">html-loader</a>.</p>\n<h3 id="use-with-babel-or-other-js-transpilers">Use with Babel (or other JS transpilers)<a href="#use-with-babel-or-other-js-transpilers" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p>If you\'d like to transpile the contents of your element\'s <code>&#x3C;script></code> block you can <a href="/configuration/module/#ruleuse">chain an additional loader</a>.</p>\n<pre><code class="hljs language-js">module<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n  loaders<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n    <span class="token punctuation">{</span>\n      test<span class="token punctuation">:</span> <span class="token regex">/\\.html$/</span><span class="token punctuation">,</span>\n      use<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n        <span class="token comment">// Chained loaders are applied last to first</span>\n        <span class="token punctuation">{</span> loader<span class="token punctuation">:</span> <span class="token string">\'babel-loader\'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n        <span class="token punctuation">{</span> loader<span class="token punctuation">:</span> <span class="token string">\'polymer-webpack-loader\'</span> <span class="token punctuation">}</span>\n      <span class="token punctuation">]</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">]</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment">// alternative syntax</span>\n\nmodule<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n  loaders<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n    <span class="token punctuation">{</span>\n      test<span class="token punctuation">:</span> <span class="token regex">/\\.html$/</span><span class="token punctuation">,</span>\n      <span class="token comment">// Chained loaders are applied right to left</span>\n      loader<span class="token punctuation">:</span> <span class="token string">\'babel-loader!polymer-webpack-loader\'</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">]</span>\n<span class="token punctuation">}</span></code></pre>\n<h3 id="use-of-htmlwebpackplugin">Use of HtmlWebpackPlugin<a href="#use-of-htmlwebpackplugin" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p>Depending on how you configure the HtmlWebpackPlugin you may encounter conflicts with the polymer-webpack-loader. </p>\n<p>Example: </p>\n<pre><code class="hljs language-javascript"><span class="token punctuation">{</span>\n  test<span class="token punctuation">:</span> <span class="token regex">/\\.html$/</span><span class="token punctuation">,</span>\n  loader<span class="token punctuation">:</span> <span class="token string">\'html-loader\'</span><span class="token punctuation">,</span>\n  include<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n    path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">\'./index.html\'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n  <span class="token punctuation">]</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">{</span>\n  test<span class="token punctuation">:</span> <span class="token regex">/\\.html$/</span><span class="token punctuation">,</span>  \n  loader<span class="token punctuation">:</span> <span class="token string">\'polymer-webpack-loader\'</span>\n<span class="token punctuation">}</span></code></pre>\n<p>This would expose your index.html file to the polymer-webpack-loader based on the process used by the html-loader. In this case you would need to exclude your html file from the polymer-webpack-loader or look for other ways to avoid this conflict. See: <a href="https://github.com/jantimon/html-webpack-plugin/blob/master/docs/template-option.md">html-webpack-plugin template options</a></p>\n<h2 id="shimming">Shimming<a href="#shimming" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<p>Not all Polymer Elements have been written to execute as a module and will\nrequire changes to work with webpack. The most common issue encountered is because modules do not execute\nin the global scope. Variables, functions and classes will no longer be global unless\nthey are declared as properties on the global object (window).</p>\n<pre><code class="hljs language-js"><span class="token keyword">class</span> <span class="token class-name">MyElement</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token comment">// I\'m not global anymore</span>\nwindow<span class="token punctuation">.</span>myElement <span class="token operator">=</span> MyElement<span class="token punctuation">;</span> <span class="token comment">// Now I\'m global again</span></code></pre>\n<p>For external library code, webpack provides <a href="/guides/shimming/">shimming options</a>.</p>\n<ul>\n<li>\n<p>Use the <a href="/loaders/exports-loader">exports-loader</a> to\nadd a module export to components which expect a symbol to be global.</p>\n</li>\n<li>\n<p>Use the <a href="/loaders/imports-loader">imports-loader</a> when a script\nexpects the <code>this</code> keyword to reference <code>window</code>.</p>\n</li>\n<li>\n<p>Use the <a href="/plugins/provide-plugin/">ProvidePlugin</a> to add a module\nimport statement when a script expects a variable to be globally defined (but is now a module export).</p>\n</li>\n<li>\n<p>Use the <a href="/plugins/normal-module-replacement-plugin/">NormalModuleReplacementPlugin</a>\nto have webpack swap a module-compliant version for a script.</p>\n</li>\n</ul>\n<p>You may need to apply multiple shimming techniques to the same component.</p>\n<h2 id="boostrapping-your-application">Boostrapping Your Application<a href="#boostrapping-your-application" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<p>The webcomponent polyfills must be added in a specific order. If you do not delay loading the main bundle with your components, you will see the following exceptions in the browser console:</p>\n<pre><code>Uncaught TypeError: Failed to construct \'HTMLElement\': Please use the \'new\' operator, this DOM object constructor cannot be called as a function.\n</code></pre>\n<p>Reference the <a href="https://github.com/webpack-contrib/polymer-webpack-loader/blob/master/demo/src/index.ejs">demo html file</a>\nfor the proper loading sequence.</p>\n<h2 id="maintainers">Maintainers<a href="#maintainers" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<table>\n  <tbody>\n    <tr>\n      <td align="center">\n        <a href="https://github.com/bryandcoulter">\n          <img width="150" height="150" src="https://avatars.githubusercontent.com/u/18359726?v=3">\n          </br>\n          Bryan Coulter\n        </a>\n      </td>\n      <td align="center">\n        <a href="https://github.com/ChadKillingsworth">\n          <img width="150" height="150" src="https://avatars.githubusercontent.com/u/1247639?v=3">\n          </br>\n          Chad Killingsworth\n        </a>\n      </td>\n      <td align="center">\n        <a href="https://github.com/robdodson">\n          <img width="150" height="150" src="https://avatars.githubusercontent.com/u/1066253?v=3">\n          </br>\n          Rob Dodson\n        </a>\n      </td>\n    </tr>\n  <tbody>\n</table>\n'}}]);