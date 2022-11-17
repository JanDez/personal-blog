/** @type {import('@commitlint/types').UserConfig} */
const CommitLintConfiguration = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "type-enum": [
      2,
      "always",
      [
        "build",
        "chore",
        "ci",
        "docs",
        "feat",
        "fix",
        "perf",
        "refactor",
        "revert",
        "style",
        "test",
        "button",
      ],
    ],
  },
};

module.exports = CommitLintConfiguration;
