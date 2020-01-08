(window.webpackJsonp=window.webpackJsonp||[]).push([[135],{425:function(e,n,o){"use strict";o.r(n),n.default='<p>This guide aims to help you migrating to webpack 5 when using webpack directly. If you are using a higher level tool to run webpack, please refer to this tool for migration instructions.</p>\n<h2 id="preparations">Preparations<a href="#preparations" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<p>webpack 5 requires at least Node.js 10.13.0 (LTS).</p>\n<blockquote class="tip">\n<p>Using newer Node.js version can improve build performance.</p>\n</blockquote>\n<h3 id="upgrade-webpack-and-its-dependencies">Upgrade webpack and its dependencies<a href="#upgrade-webpack-and-its-dependencies" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<h4 id="upgrade-webpack-4-to-the-latest-available-version">Upgrade webpack 4 to the latest available version<a href="#upgrade-webpack-4-to-the-latest-available-version" aria-hidden="true"><span class="icon icon-link"></span></a></h4>\n<p>When using webpack >= 4, upgrading to the latest webpack 4 version should not require additional guidance.\nIf you are using webpack version less than 4 please see the <a href="/migrate/4/">webpack 4 migration guide</a>.</p>\n<h4 id="upgrade-webpack-cli-to-the-latest-available-version-when-used">Upgrade webpack-cli to the latest available version (when used)<a href="#upgrade-webpack-cli-to-the-latest-available-version-when-used" aria-hidden="true"><span class="icon icon-link"></span></a></h4>\n<h4 id="upgrade-all-used-plugins-and-loaders-to-the-latest-available-version">Upgrade all used Plugins and Loaders to the latest available version<a href="#upgrade-all-used-plugins-and-loaders-to-the-latest-available-version" aria-hidden="true"><span class="icon icon-link"></span></a></h4>\n<p>Some Plugins and Loaders might have a beta version that has to be used in order to be compatible with webpack 5.</p>\n<blockquote class="warning">\n<p>Check related Plugins and Loaders migration guide when upgrading across major versions.</p>\n</blockquote>\n<h4 id="make-sure-your-build-has-no-errors-or-warnings">Make sure your build has no errors or warnings<a href="#make-sure-your-build-has-no-errors-or-warnings" aria-hidden="true"><span class="icon icon-link"></span></a></h4>\n<p>There might be new errors or warnings because of the upgraded versions of webpack, webpack-cli, Plugins and Loaders. Keep an eye for deprecation warnings during the build.</p>\n<p>You can invoke webpack this way to get stack traces for deprecation warnings to figure out which Plugins and Loaders are responsible.</p>\n<pre><code class="hljs language-bash">node --trace-deprecation node_modules/webpack/bin/webpack.js</code></pre>\n<blockquote class="warning">\n<p>webpack 5 removes all deprecated features. In order to proceed, there should be no webpack deprecation warnings during the build.</p>\n</blockquote>\n<h4 id="make-sure-you-are-using-entry-point-information-from-stats">Make sure you are using entry point information from stats<a href="#make-sure-you-are-using-entry-point-information-from-stats" aria-hidden="true"><span class="icon icon-link"></span></a></h4>\n<blockquote class="tip">\n<p>If you are using <a href="/plugins/html-webpack-plugin/">HtmlWebpackPlugin</a> skip this step.</p>\n</blockquote>\n<p>When using static HTML or creating HTML in other way, make sure to use entry points from stats JSON to generate <code>&#x3C;script></code>, <code>&#x3C;style></code> and <code>&#x3C;link></code> tags.</p>\n<p>If this is not possible, avoid setting <code>splitChunks.chunks: \'all\'</code> and <code>splitChunks.maxSize</code> later in this guide. Note that this is sub-optimal and a workaround.</p>\n<h4 id="make-sure-to-use-mode">Make sure to use <code>mode</code><a href="#make-sure-to-use-mode" aria-hidden="true"><span class="icon icon-link"></span></a></h4>\n<p>Set mode to either <a href="/configuration/mode/#mode-production"><code>production</code></a> or <a href="/configuration/mode/#mode-development"><code>development</code></a> to make sure that corresponding defaults are set.</p>\n<h4 id="update-outdated-options">Update outdated options<a href="#update-outdated-options" aria-hidden="true"><span class="icon icon-link"></span></a></h4>\n<p>Update the following options to their new version (if used):</p>\n<ul>\n<li><code>optimization.hashedModuleIds: true</code> => <code>optimization.moduleIds: \'hashed\'</code></li>\n<li><code>optimization.namedChunks: true</code> => <code>optimization.chunkIds: \'named\'</code></li>\n<li><code>optimization.namedModules: true</code> => <code>optimization.moduleIds: \'named\'</code></li>\n<li><code>NamedModulesPlugin</code> => <code>optimization.moduleIds: \'named\'</code></li>\n<li><code>NamedChunksPlugin</code> => <code>optimization.chunkIds: \'named\'</code></li>\n<li><code>HashedModulesPlugin</code> => <code>optimization.moduleIds: \'hashed\'</code></li>\n<li><code>optimization.occurrenceOrder: true</code> => <code>optimization: { chunkIds: \'total-size\', moduleIds: \'size\' }</code></li>\n<li><code>optimization.splitChunks.cacheGroups.vendors</code> => <code>optimization.splitChunks.cacheGroups.defaultVendors</code></li>\n</ul>\n<h4 id="test-webpack-5-compatibility">Test webpack 5 compatibility<a href="#test-webpack-5-compatibility" aria-hidden="true"><span class="icon icon-link"></span></a></h4>\n<p>Try to set the following options in your webpack 4 configuration and check if build still works correctly.</p>\n<pre><code class="hljs language-javascript">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token comment">// ...</span>\n  node<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    Buffer<span class="token punctuation">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n    process<span class="token punctuation">:</span> <span class="token boolean">false</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n<blockquote class="tip">\n<p>webpack 5 removes these options from the configuration schema and will always use <code>false</code>. You have to remove these options again when upgrading your configuration for webpack 5.</p>\n</blockquote>\n<h4 id="upgrade-webpack-version">Upgrade webpack version<a href="#upgrade-webpack-version" aria-hidden="true"><span class="icon icon-link"></span></a></h4>\n<p>npm: <code>npm install webpack@next --dev</code></p>\n<p>Yarn: <code>yarn add webpack@next -D</code></p>\n<h4 id="clean-up-configuration">Clean up configuration<a href="#clean-up-configuration" aria-hidden="true"><span class="icon icon-link"></span></a></h4>\n<ul>\n<li>Consider removing <code>optimization.moduleIds</code> and <code>optimization.chunkIds</code> from your webpack configuration. The defaults could be better, because they support long term caching in <a href="/configuration/mode/#mode-production"><code>production mode</code></a> and debugging in <a href="/configuration/mode/#mode-development"><code>development</code> mode</a>.</li>\n<li>When using <code>[hash]</code> placeholder in webpack configuration, consider changing it to <code>[contenthash]</code>. It is not the same, but proven to be more effective.</li>\n<li>If you are using Yarn\'s PnP and the <code>pnp-webpack-plugin</code>, we have good news: it is supported by default now. You have to remove it from the configuration.</li>\n<li>If you are using <code>IgnorePlugin</code> with a regular expression as argument, it takes an <code>options</code> object now: <code>new IgnorePlugin({ resourceRegExp: /regExp/ })</code>.</li>\n</ul>\n<p>If you were using WASM via import you should follow this two step process:</p>\n<ul>\n<li>Enable the deprecated spec by setting <code>experiments.syncWebAssembly: true</code>, to get the same behavior as in webpack 4.</li>\n<li>After successful migration to webpack 5, change the <code>experiments</code> value to <code>experiments: { asyncWebAssembly: true, importAsync: true }</code> to use the up-to-date spec for WASM integration.</li>\n</ul>\n<p>Reconsider <code>optimization.splitChunks</code>:</p>\n<ul>\n<li>It\'s recommended to use either the defaults or <code>optimization.splitChunks: { chunks: \'all\' }</code>.</li>\n<li>When using HTTP/2 and long term caching, set <code>optimization.splitChunks: { chunks: \'all\', maxInitialRequests: 30, maxAsyncRequests: 30, maxSize: 100000 }</code>.</li>\n<li>When using a custom configuration, replace <code>name</code> with <code>idHint</code>.</li>\n<li>It was possible to turn off the defaults by setting <code>optimization.splitChunks: { default: false, vendors: false }</code>. We don\'t recommend doing this, but if you really want to get the same effect in webpack 5: <code>optimization.splitChunks: { default: false, defaultVendors: false }</code>.</li>\n</ul>\n<h4 id="cleanup-the-code">Cleanup the code<a href="#cleanup-the-code" aria-hidden="true"><span class="icon icon-link"></span></a></h4>\n<p>Using <code>/* webpackChunkName: \'...\' */</code>: Make sure to understand the intention:</p>\n<ul>\n<li>The chunk\'s name here is intended to be public.</li>\n<li>It\'s not a development-only name.</li>\n<li>webpack will use it to name files in production and development modes.</li>\n<li>webpack 5 will automatically assign useful file names in <code>development</code> mode even when not using <code>webpackChunkName</code>.</li>\n</ul>\n<p>Using named exports from JSON modules: this is not supported by the new specification and you will get a warning. Instead of <code>import { version } from \'./package.json\'</code> use <code>import package from \'./package.json\'; const { version } = package;</code></p>\n<h4 id="cleanup-the-build-code">Cleanup the build code<a href="#cleanup-the-build-code" aria-hidden="true"><span class="icon icon-link"></span></a></h4>\n<ul>\n<li>When using <code>const compiler = webpack(...);</code>, make sure to close the compiler after using it: <code>compiler.close();</code>.</li>\n</ul>\n<h4 id="run-a-single-build-and-follow-advises">Run a single build and follow advises<a href="#run-a-single-build-and-follow-advises" aria-hidden="true"><span class="icon icon-link"></span></a></h4>\n<p>If there is no corresponding advise? Please create an issue and we will try to resolve it. Repeat this step until you solved at least level 3 or 4:</p>\n<ul>\n<li>Level 1: Schema validation fails. Configuration options have changed. There should be a validation error with a <code>BREAKING CHANGE:</code> note.</li>\n<li>Level 2: webpack exits with an error. The error message should tell you what needs to be changed.</li>\n<li>Level 3: Build Errors. The error message should have a <code>BREAKING CHANGE:</code> note.</li>\n<li>Level 4: Build Warnings. The warning message should tell you what can be improved.</li>\n</ul>\n<p>Deprecation warnings. You might get a lot of deprecation warnings. This is not a problem right now. Plugins need time to catch up with core changes. Please ignore them until release candidate out of Beta.</p>\n<ul>\n<li>You can hide deprecation warnings by running node with <code>--no-deprecation</code> flag, e.g.: <code>node --no-deprecation node_modules/webpack/bin/webpack.js</code>. This should only be a temporary workaround.</li>\n<li>Plugins and Loaders contributors can follow the advises in the deprecation messages to improve the code.</li>\n</ul>\n<h4 id="turn-off-es2015-syntax-in-runtime-code-if-necessary">Turn off ES2015 syntax in runtime code, if necessary<a href="#turn-off-es2015-syntax-in-runtime-code-if-necessary" aria-hidden="true"><span class="icon icon-link"></span></a></h4>\n<p>By default, webpack\'s runtime code uses ES2015 syntax to build smaller bundles. If your build targets environments that don\'t support this syntax (like IE11), you\'ll need to set <code>output.ecmaVersion: 5</code> to revert to ES5 syntax.</p>\n<h4 id="everything-works">Everything works?<a href="#everything-works" aria-hidden="true"><span class="icon icon-link"></span></a></h4>\n<p>Please tweet that you have successfully migrated to webpack 5. <a href="https://twitter.com/intent/tweet?source=https://webpack.js.org/migrate/5/&#x26;text=I%20just%20migrated%20to%20webpack%205%20using%20its%20migration%20guide!%20&#x26;via=webpack&#x26;hashtags=webpack,webpack5">Tweet it</a></p>\n<h4 id="it-is-not-working">It is not working?<a href="#it-is-not-working" aria-hidden="true"><span class="icon icon-link"></span></a></h4>\n<p>Create an <a href="https://github.com/webpack/webpack/issues/new?template=Bug_report.md">issue</a> and tell us about the issues you have encountered during the migration.</p>\n<h4 id="something-missing-in-this-guide">Something missing in this guide?<a href="#something-missing-in-this-guide" aria-hidden="true"><span class="icon icon-link"></span></a></h4>\n<p>Please open a Pull Request to help the next person using this guide.</p>\n'}}]);