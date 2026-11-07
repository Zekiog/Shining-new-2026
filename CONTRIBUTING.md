# Contributing

Bug reports, change proposals, and pull requests go through this file.

## Conduct

Stay respectful, technical, and on the subject. Harassment, off-topic promotion, and deliberate hostility are removed without notice.

## Before opening an issue

1. Search open and closed issues for the same report.
2. Read the README. Most setup questions are answered there.
3. Try current `main`. A lot of reported bugs are already fixed.

## Bug report

Use the **Bug report** template. Include:

- Steps to reproduce (short, copyable)
- Expected and actual behaviour
- Environment (OS, runtime version, relevant service versions)
- Logs and stack traces. Strip secrets before pasting.

## Feature request

Use the **Feature request** template. Include:

- The problem you want solved
- A proposed solution (one sentence if you can)
- Alternatives you considered
- Whether you can open a pull request

## Pull request

1. Fork the repo and branch from `main`.
2. Keep commits focused. Each commit should build and pass tests.
3. Match the existing code style. Run the formatter and linter before you send it.
4. Add or update a test when behaviour changes.
5. Update the README if what the visitor sees changes.
6. Open the pull request against `main` and fill in the template:
   - **What** changed (one paragraph)
   - **Why** (issue it closes, for example `Closes #42`)
   - **How** to verify (commands, screenshots)

CI should be green before you ask for review. Small follow-up fixes are fine.

## Security

Do not open a public issue for a vulnerability. See [SECURITY.md](./SECURITY.md).

## License

Contributions use the same license as the repo (`LICENSE`).
