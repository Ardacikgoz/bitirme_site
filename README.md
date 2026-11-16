# VisHybrid-X – Project Website

Website for **VisHybrid-X: Multi-Stage Vision-Only Autonomous Driving**, our graduation project at Hacettepe University (Department of Artificial Intelligence Engineering).

VisHybrid-X studies whether a camera-only driving policy can stay reliable in difficult conditions. It combines **imitation learning (behavioral cloning), curriculum learning, depth- and lane-aware perception and PPO-based reinforcement learning** in the MetaDrive simulator, and uses **Grad-CAM++** for explainability.

## Highlights

- Curriculum learning raised pure imitation-learning route completion from **14.7% → 32.6%**.
- The best learned policy (**curriculum IL + RL**) reached **36.0%** route completion, ahead of all RGB-only variants.
- The MetaDrive expert (86.3% route completion) is reported as the upper-bound reference.

The site covers the pipeline, method, results, visualizations and the team.

## Tech stack

Next.js · React · TypeScript · Tailwind CSS · shadcn/ui

## Running locally

```bash
pnpm install
pnpm dev
```

## Team

Arda Açıkgöz · Berke Kutlu · Mehmet Furkan Çalışkan · İbrahim Büyükkafes
Advisor: Prof. Dr. Mehmet Önder Efe

Model and training code: [mfurkan03/Autonomous-Driving-Project](https://github.com/mfurkan03/Autonomous-Driving-Project)
