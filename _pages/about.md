---
permalink: /
title: ""
excerpt: ""
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

{% if site.google_scholar_stats_use_cdn %}
{% assign gsDataBaseUrl = "https://cdn.jsdelivr.net/gh/" | append: site.repository | append: "@" %}
{% else %}
{% assign gsDataBaseUrl = "https://raw.githubusercontent.com/" | append: site.repository | append: "/" %}
{% endif %}
{% assign url = gsDataBaseUrl | append: "google-scholar-stats/gs_data_shieldsio.json" %}

<span class='anchor' id='about-me'></span>

I am a Master's student in Cyberspace Security at Xidian University, conducting research at the Xidian University Guangzhou Research Institute under the supervision of Prof. Hao Wang. Previously, I earned a Bachelor's degree in Computer Science and Technology from Tianjin University of Technology, along with a dual degree in Management Information Systems from the University of Quebec.

My research interests primarily lie in **diffusion model acceleration**, **multimodal cardiac diagnosis**, and **neuro-symbolic reasoning**. I am particularly interested in leveraging advanced architectures like Mamba (State-Space Models) for processing long-sequence physiological signals. Currently, I am leading the **Cardio-Verse (心视界)** project, an AI-driven multimodal cardiac diagnostic platform. 

I have published and presented my research at top international academic venues including ICASSP, ICME, and BIBM.

# 🔥 News
- *2026.05*: &nbsp;🎉🎉 I will be traveling to Barcelona, Spain to present my first-author papers at **ICASSP 2026**.
- *2026.01*: &nbsp;🚀🚀 Officially launched the **Cardio-Verse (心视界)** multimodal cardiac diagnostic platform project.
- *2025.12*: &nbsp;🎉🎉 Our paper on Hierarchical Latent Diffusion Models (H-LDM) for PCG synthesis was accepted at **BIBM 2025**.

# 📝 Publications 

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">Preprint</div><img src='images/physiomamba_cover.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[PhysioMamba: Physics-Informed ST-Mamba Diffusion for Controllable Echocardiogram Synthesis](#)

**Chenyang Xu**, Hao Wang, et al.

[**PDF**](#) | [**Code**](#)
- Proposed a novel physics-informed spatio-temporal Mamba diffusion model designed to synthesize high-fidelity, controllable echocardiogram videos, accelerating the generation process while maintaining physiological accuracy.
</div>
</div>

- [H-LDM: Hierarchical Latent Diffusion Models for Controllable and Interpretable PCG Synthesis from Clinical Metadata](#), **Chenyang Xu**, Hao Wang, et al., **BIBM 2025**
- [Enhancing Respiratory Sound Detection Through Integrated Learning and Dynamic Convolutional Recurrent Neural Networks](#), **Chenyang Xu**, et al.

# 🎖 Honors and Awards
- *2026.03* Core Participant, "Challenge Cup" (挑战杯) and "Internet+" (互联网+) Innovation Competitions.

# 📖 Education
- *2024.09 - Present*, M.Eng. in Cyberspace Security, Xidian University (Guangzhou Research Institute).
- *2020.09 - 2024.06*, B.Eng. in Computer Science and Technology, Tianjin University of Technology.
- *2020.09 - 2024.06*, B.B.A. in Management Information Systems, University of Quebec.

# 💻 Projects & Experience
- *2026.01 - Present*, Project Lead, **Cardio-Verse (心视界)**
  - Leading the research and development of a multimodal cardiac diagnostic platform. Responsible for algorithm design and multimodal data integration.
