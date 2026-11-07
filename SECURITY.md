# Security policy

## Supported versions

Versions that get security updates:

| Version | Support |
|---|---|
| `main` | Active |
| Latest tagged release | Active |
| Older versions | Best effort only |

## Reporting a vulnerability

**Do not open a public GitHub issue for a security vulnerability.**

Report it privately on one of the channels below. Include enough to reproduce it and judge the impact:

- A clear description of the issue and the affected component or file
- Steps to reproduce, or a small proof
- Impact: what an attacker could get
- Environment, if it matters (OS, runtime version)

### Private channels

- **GitHub private vulnerability report:** *Report a vulnerability* on this repo's *Security* tab. That opens a private advisory only maintainers can see.
- **Email:** the security contact on the maintainer profile. PGP is not required. Encrypted mail is accepted if a key is published.

Expect an acknowledgement within **5 business days**.

## After a report

1. Triage within 5 business days: acknowledgement and severity (Critical / High / Medium / Low).
2. For High and Critical, a patch or workaround timeline within 10 business days.
3. When a fix ships, a coordinated advisory is published on GitHub. Your name is included unless you ask otherwise.
4. If it cannot be reproduced, or it is not a security issue, the reason is sent separately.

## Scope

In scope: this repo's source, default configuration, CI workflows, and documented deploy paths.

Out of scope:

- Bugs in upstream dependencies (report those to the project that owns them)
- Issues that need only physical or local-machine access
- Social engineering of maintainers, or denial of service
- Theoretical findings with no concrete attack path

## Hardening notes

See `HARDENING_NOTES.md` if that file is in the repo.
