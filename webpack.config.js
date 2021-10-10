const path = require('path')

// Переносит HTMl шаблон в папку dist и импортирует все JS бандлы, которые будет собирать Webpack
const HTMLWebpackPlugin = require('html-webpack-plugin')

// Очищает все не используемые бандлы,которые создаются в результате использования в опции FileName рег. выражений
const {CleanWebpackPlugin} = require('clean-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: ['@babel/polyfill','./src/index.jsx'],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[hash].js',
        publicPath: "/"
    },
    devServer: {
        port: 3000,
        historyApiFallback: true // Данным свойством мы убираем проблемы с хэшированием при переходе на разные страницы
    },
    resolve: {
        extensions: ['.js', '.jsx'] // Прописываем расширения, чтобы Webpack компилировал файл без явного указания расширения
    },
    plugins: [
        new HTMLWebpackPlugin({template: "./src/index.html"}),
        new CleanWebpackPlugin()
    ],
    module: {
        rules: [
            {
                // Обработка JS файла
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"] // Пресет преобразования нашего JS файла для старых браузеров
                    }
                }
            },
            {
                // Обработка JSX файла
                test: /\.jsx$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-react", "@babel/preset-env"] // Пресет для преобразования JSX файла
                    }
                }
            },
            {
                test: /\.(css|s[ac]ss)$/,
                use: ['style-loader', 'css-loader', 'sass-loader'] // Данные лоадероы будут обрабатывать наши стили
            },
            {
                test: /\.(jpg|jpeg|png|svg)/,
                use: ['file-loader'] // Позволяет импортировать файлы напрямую в JS код
            }]
    }
}