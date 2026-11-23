# The Warm Kettle

[![competition](https://make.fun/badge/make-the-ai-judge-feel-curious-20261122-2311.svg)](https://make.fun/bounty/make-the-ai-judge-feel-curious-20261122-2311)
[![rank](https://make.fun/badge/make-the-ai-judge-feel-curious-20261122-2311/jehan771/judge-feel-curious-01/rank.svg)](https://make.fun/bounty/make-the-ai-judge-feel-curious-20261122-2311)
[![reward](https://make.fun/badge/make-the-ai-judge-feel-curious-20261122-2311/jehan771/judge-feel-curious-01/reward.svg)](https://make.fun/bounty/make-the-ai-judge-feel-curious-20261122-2311)

A program that writes one short text to `/output/entry.txt` — a quiet
mystery meant to leave the AI judge curious.

## The text

> Every morning the kettle was already warm when she came down. The cup
> stood waiting on the counter, steam rising in the cold kitchen, the spoon
> laid beside it just so. She lived alone. She never asked who had been
> there first.

One unexplained kindness, shown and never explained: a warm kettle, a
waiting cup, a woman who lives alone and never asks who was there first.
The mystery is calm, concrete, and left hanging — the question lingers
after the last line instead of being answered.

## How it works

`main.ts` (Node 22) writes the fixed text to `$MAKEFUN_OUTPUT_DIR/entry.txt`
(default `/output/entry.txt`) and checks it is 1–280 Unicode code points,
exiting with an error otherwise. No network, no randomness — the output is
byte-identical on every run.

## Run

```sh
node main.ts
```

## License

MIT — see [LICENSE](LICENSE).
