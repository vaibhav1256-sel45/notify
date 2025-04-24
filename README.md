<h1>Creating a Progressive Web App (PWA) with <code>vite-plugin-pwa</code></h1>

<p>This guide walks you through the steps to transform your Vite-powered project into a fully functional Progressive Web App using the <a href="https://github.com/vite-pwa/vite-plugin-pwa">vite-plugin-pwa</a>.</p>

<h2>1. Install the Vite PWA Plugin</h2>
<p>Run the following command in your project directory:</p>
<pre><code>npm install vite-plugin-pwa --save-dev</code></pre>

<h2>2. Configure <code>vite.config.ts</code></h2>
<pre><code>import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'Your App Name',
        short_name: 'AppShort',
        description: 'A brief description of your app',
        theme_color: '#ffffff',
        icons: [
          {
            src: 'pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable'
          }
        ]
      },
      devOptions: {
        enabled: true
      }
    })
  ]
});
</code></pre>

<h2>3. Prepare Your Static Assets</h2>
<p>Place your PWA icons (e.g., <code>pwa-192x192.png</code>, <code>pwa-512x512.png</code>) inside the <code>public</code> directory.</p>

<h2>4. Add PWA Metadata to <code>index.html</code></h2>
<pre><code>&lt;head&gt;
  &lt;meta charset="UTF-8" /&gt;
  &lt;meta name="viewport" content="width=device-width, initial-scale=1.0" /&gt;
  &lt;meta name="theme-color" content="#ffffff" /&gt;
  &lt;link rel="manifest" href="/manifest.webmanifest" /&gt;
  &lt;link rel="icon" href="/favicon.ico" /&gt;
&lt;/head&gt;
</code></pre>

<h2>5. Understanding the <code>manifest.json</code> Fields</h2>
<table>
  <tr>
    <th>Field</th>
    <th>Type</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>name</td>
    <td>String</td>
    <td>Full name of your application</td>
  </tr>
  <tr>
    <td>short_name</td>
    <td>String</td>
    <td>Shortened name used on home screens</td>
  </tr>
  <tr>
    <td>description</td>
    <td>String</td>
    <td>Brief description of your app</td>
  </tr>
  <tr>
    <td>theme_color</td>
    <td>String (hex color)</td>
    <td>Primary theme color for the app</td>
  </tr>
  <tr>
    <td>icons</td>
    <td>Array of Objects</td>
    <td>Icons with different sizes and purposes</td>
  </tr>
  <tr>
    <td>start_url</td>
    <td>String</td>
    <td>URL that loads when the app is launched</td>
  </tr>
</table>

<h2>6. Build and Test Your PWA</h2>
<ul>
  <li><code>npm run dev</code> — Start development server with PWA support.</li>
  <li><code>npm run build</code> — Generate production build including manifest and service worker.</li>
</ul>
<p>Open your app in a supported browser and check the Application tab in DevTools to verify the service worker and manifest are correctly registered.</p>

<blockquote>
  <strong>Note:</strong> The plugin uses Workbox under the hood to generate a service worker with offline support and caching strategies. You can customize this behavior using the <code>workbox</code> options in the plugin configuration.
</blockquote>

<h2>7. Additional Resources</h2>
<ul>
  <li><a href="https://vite-pwa-org.netlify.app/guide/">Official Vite PWA Plugin Guide</a></li>
  <li><a href="https://github.com/vite-pwa/vite-plugin-pwa">GitHub Repository</a></li>
  <li><a href="https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps">MDN Progressive Web Apps Documentation</a></li>
</ul>
<h2>Demo Images:</h2>
https://github.com/user-attachments/assets/6370683c-6042-4f94-904a-e0445555e94a<br/>
https://github.com/user-attachments/assets/4ab2d6b3-7189-4c11-b316-1913e8810297<br/>
https://github.com/user-attachments/assets/9c13e784-b65e-4f55-b66e-7e664fd1afb4<br/>
https://github.com/user-attachments/assets/5becd3c4-1b15-4d46-a9bd-55921607dce9






