module.exports = {
  presets: [
    "@babel/preset-env", // responsavel por alterar as responsabilidades do  javascript que o navegador não entende
    "@babel/preset-react" // transformar o que o navegador não entende do react
  ],
  plugins: ["@babel/plugin-proposal-class-properties"]
};
