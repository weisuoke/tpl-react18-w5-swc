module.exports = {
  "env": {
    "browser": true,
    "es2021": true
  },
  "parser": "@typescript-eslint/parser",
  "extends": [
    "plugin:react/recommended",
    "plugin:prettier/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:import/recommended",
    "plugin:import/typescript",  // this line does the trick
  ],
  "plugins": [
    "react-hooks",
    "simple-import-sort"
  ],
  "rules": {
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "simple-import-sort/imports": [
      "error",
      {
        groups: [
          // Packages. `react` related packages come first.
          ["^react", "^@?\\w"],
          // Internal packages.
          ["^(@|@company|@ui|components|utils|config|vendored-lib)(/.*|$)"],
          // Side effect imports.
          ["^\\u0000"],
          // Parent imports. Put `..` last.
          ["^\\.\\.(?!/?$)", "^\\.\\./?$"],
          // Other relative imports. Put same-folder imports and `.` last.
          ["^\\./(?=.*/)(?!/?$)", "^\\.(?!/?$)", "^\\./?$"],
          // Style imports.
          ["^.+\\.s?css$"],
        ]
      }
    ],
    "simple-import-sort/exports": "error"
  }
}