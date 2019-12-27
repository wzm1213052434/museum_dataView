const {override, fixBabelImports, useEslintRc} = require('customize-cra');

module.exports = override(
    fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: 'css',
    }),
    useEslintRc("eslint.json")
);