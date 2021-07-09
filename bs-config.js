module.exports = {
  injectChanges: false,
  files: ["./**/*.{html,htm,css,js}"],
  watchOptions: { ignored: "node_modules" },
  server: {
    baseDir: "./public/",
    // middleware: [[Function(anonymous)], [Function(anonymous)]],
  },
  "open": false,
};
