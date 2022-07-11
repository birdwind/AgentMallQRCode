module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    //
    //"eslint:recommended",
    "plugin:vue/essential",
    "@vue/prettier",
    "@vue/typescript",
  ],
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: "@typescript-eslint/parser",
  },
  plugins: [
    //
    "vue",
    "prettier",
    "@typescript-eslint",
    "eslint-plugin-vue",
  ],
  rules: {
    indent: "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-empty-interface": "off",
    "@typescript-eslint/explicit-member-accessibility": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/no-object-literal-type-assertion": "off",
    "@typescript-eslint/indent": ["error", 2],
    //
    "no-console": ["warn", { allow: ["warn", "error"] }],
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "comma-dangle": [
      "error",
      {
        arrays: "always-multiline",
        objects: "always-multiline",
        imports: "always-multiline",
        exports: "always-multiline",
        functions: "never",
      },
    ],
    quotes: ["error", "double", { allowTemplateLiterals: true }],
    semi: ["error", "always"],
    "vue/html-closing-bracket-spacing": [
      "error",
      {
        startTag: "never",
        endTag: "never",
        selfClosingTag: "always",
      },
    ],
    "vue/html-self-closing": "off",
    "vue/singleline-html-element-content-newline": "off",
  },
  overrides: [
    {
      files: ["src/**/__tests__/*.{j,t}s?(x)", "tests/unit/**/*.spec.{j,t}s?(x)"],
      env: {
        jest: true,
      },
    },
  ],
  ignorePatterns: ["*.js", "node_modules/"],
};
