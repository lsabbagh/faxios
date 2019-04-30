module.exports = {
  scripts: {
    build: {
      default: 'nps build.src build.internal',
      src: 'babel src --out-dir lib --extensions ".ts"',
      internal: 'babel src/.internal --out-dir lib/.internal --extensions ".ts"',
      clean: 'rm -rf lib && nps build'
    },
    fuse: {
      start: 'node ./fuse.js',
      dist: 'node ./fuse.js dist'
    },
    test: {
      default: 'nps test.mocha',
      mocha: {
        default: 'nps test.mocha.basics test.mocha.listeners',
        basics: 'mocha test/mocha/basics  --require test/mocha/config.js --timeout=15000',
        listeners: 'mocha test/mocha/listeners --timeout=15000',
        current: 'mocha test/mocha/listeners/on-bad-request --timeout=15000'
      }
    },
    release: 'npm run web && git push origin master && npm publish',
    git: 'npm run dist && git add . && git commit -m "$m" && npm version patch && npm publish && git push origin master',

    // documentation generation
    docs: {
      default: 'nps docs.md docs.html',
      md: 'documentation build src/*.js -o docs/README.md -f md',
      html: 'documentation build src/*.js -o docs/index.html -f html',

      watch: {
        md: 'documentation build --watch src/*.js -o docs/README.md -f md',
        html: 'documentation build src/*.js -o docs/index.html -f html'
      }
    }
  }
}
