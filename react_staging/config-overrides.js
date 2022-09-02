// const { injectBabelPlugin } = require('react-app-rewired');
// const rewireLess = require('react-app-rewire-less');

//   module.exports = function override(config, env) {
//     config = injectBabelPlugin(['import', { libraryName: 'antd', style: 'css' }], config);
//     config = injectBabelPlugin(['import', { libraryName: 'antd', style: true }], config);
//     config = rewireLess.withLoaderOptions({
//      modifyVars: { "@primary-color": "#1DA57A" },
//    })(config, env);
//     return config;
//   };

//配置具体的修改规则
const { override, fixBabelImports,addLessLoader} = require('customize-cra');

module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true,
	}),
	addLessLoader({
		lessOptions:{
			javascriptEnabled: true,
			modifyVars: { '@primary-color': 'green' },
		}
	}),
);