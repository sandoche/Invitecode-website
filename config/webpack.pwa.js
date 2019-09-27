const Merge = require('webpack-merge');
const ProdConfig = require('./webpack.prod.js');
const path = require('path');
const webpack = require('webpack');
const WebpackPwaManifest = require('webpack-pwa-manifest');

module.exports = Merge(ProdConfig, {
  plugins: [
    new WebpackPwaManifest({
      name: 'Invite-code.com',
      short_name: 'Invitecode',
      description: 'All the promo codes at the right place',
      orientation: "portrait",
      display: "standalone",
      start_url: "/",
      theme_color: "#d71051",
      background_color: "#d71051",
      icons: [
        {
          src: path.resolve('icon.png'),
          sizes: [96, 128, 192, 256, 384, 512]
        },
      ]
    })
  ]
});
