const path = require("path");

module.exports = {
    module: {
        rules: [
            {
                test: /\.scss$/, //파일 검사 규칙
                loaders: 
                ["sass-loader"], //sass를 css로 변환
                include: path.resolve(__dirname, "../")
            }
        ]
    }
};