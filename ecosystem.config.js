module.exports = {
  apps : [{
    name: 'sample-app',
    script: './bin/www',
    node_args: '-r esm',
    exec_mode: 'cluster_mode',
    watch: './',
    watch_delay: 1000,
    ignore_watch: ['node_modules','public'],
    watch_options: {
      followSymlinks: false
    },
    env: {
      NODE_ENV: 'development',
      port: 3000
    },
    env_production: {
      NODE_ENV: 'production',
      port: 3000
    }
  }],

};
